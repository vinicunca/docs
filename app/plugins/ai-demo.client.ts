/**
 * The docs are deployed as static files, so there is no `/api/chat` or
 * `/api/completion` behind the AI examples. Rather than rewriting each
 * example (their source is what readers copy into their own app, which has
 * those routes), this answers both endpoints in the browser with a canned,
 * streamed reply in the AI SDK's wire formats.
 */
const CHAT_REPLY = 'This is a static preview, so no model is answering. In your app, `/api/chat` streams the reply from your provider with the AI SDK, and the Pohon UI chat components render it exactly like this message.';

const COMPLETION_CONTINUATION = ' Pohon UI streams the suggestion in as you type, and you can accept it with Tab.';

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function chunkText(text: string) {
  return text.match(/\S+\s*/g) ?? [text];
}

function streamFrom(chunks: Array<string>, delay = 35) {
  const encoder = new TextEncoder();
  return new ReadableStream<Uint8Array>({
    async start(controller) {
      for (const chunk of chunks) {
        controller.enqueue(encoder.encode(chunk));
        await sleep(delay);
      }
      controller.close();
    },
  });
}

function chatResponse() {
  const id = `text-${Date.now()}`;
  const events = [
    { type: 'start' },
    { type: 'start-step' },
    { type: 'text-start', id },
    ...chunkText(CHAT_REPLY).map((delta) => ({ type: 'text-delta', id, delta })),
    { type: 'text-end', id },
    { type: 'finish-step' },
    { type: 'finish' },
  ];
  const lines = [...events.map((event) => `data: ${JSON.stringify(event)}\n\n`), 'data: [DONE]\n\n'];

  return new Response(streamFrom(lines), {
    headers: {
      'content-type': 'text/event-stream',
      'cache-control': 'no-cache',
      'x-vercel-ai-ui-message-stream': 'v1',
    },
  });
}

async function completionResponse(init?: RequestInit) {
  let body: { prompt?: string; mode?: string } = {};
  try {
    body = JSON.parse(String(init?.body ?? '{}'));
  } catch {}

  const prompt = body.prompt ?? '';
  const text = body.mode === 'continue' || !body.mode
    ? COMPLETION_CONTINUATION
    : `${prompt.trim()} (static preview: \`${body.mode}\` would rewrite this text in your app)`;

  return new Response(streamFrom(chunkText(text)), {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
}

export default defineNuxtPlugin(() => {
  const originalFetch = window.fetch.bind(window);

  window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url;
    const { pathname } = new URL(url, window.location.origin);

    if (pathname === '/api/chat') {
      return chatResponse();
    }
    if (pathname === '/api/completion') {
      return completionResponse(init);
    }

    return originalFetch(input, init);
  };
});
