# Akar documentation review issues

Recovered from the Claude skills review on 2026-10-10. File paths and cited line numbers were checked against the current local files. Runtime findings explicitly attributed to the earlier audit were not rerun. Items that still need runtime confirmation say so.

Package HEAD: `86f66048`. Docs HEAD: `3f65b93`. The docs checkout has uncommitted changes, so these references describe the working tree.

P1 means broken examples or important functionality. P2 means incorrect behavior or guidance. P3 means documentation cleanup or an investigation with limited evidence. These are follow-up tasks; no source fixes are included.


Paths below are relative to the docs repository root. References beginning with `../akar/` point to the sibling Akar package.

## Docs pages

- [ ] **P1: Dialog portal is outside its root.** The namespaced example closes Dialog.Root before Dialog.Portal, so the portal and content cannot use the root context. Evidence: `content/akar/2.guides/09.namespaced-components.md:27`, `content/akar/2.guides/09.namespaced-components.md:33`. Suggested fix: Move Dialog.Portal, Dialog.Overlay, and Dialog.Content inside Dialog.Root.

- [ ] **P1: Invalid Dialog example markup.** Two examples leave span tags open, and another uses DialogFooter even though it is not an Akar primitive. Evidence: `content/akar/3.components/dialog.md:329`, `content/akar/3.components/dialog.md:359`, `content/akar/3.components/dialog.md:429`. Suggested fix: Close both spans and replace DialogFooter with ordinary layout markup or explicitly define a wrapper.

- [ ] **P2: Switch defaults are strings.** default-value="true" and defaultValue="true" pass strings instead of boolean values. Evidence: `content/akar/2.guides/05.controlled-state.md:74`, `content/akar/2.guides/05.controlled-state.md:111`. Suggested fix: Bind the boolean explicitly with :default-value="true".

- [ ] **P2: Migration guide names the wrong attribute prefix.** The Akar guide tells readers to use reka-prefixed data attributes, including data-reka-collection-item. Evidence: `content/akar/2.guides/12.migration.md:49`, `content/akar/2.guides/12.migration.md:56`. Suggested fix: Document Akar-prefixed attributes and distinguish any upstream Reka example from the Akar API.

- [ ] **P2: Composition import does not compile.** The MyButton import contains two consecutive from keywords. Evidence: `content/akar/2.guides/02.composition.md:47`. Suggested fix: Remove the extra from.

- [ ] **P2: AI prompt points to a nonexistent overview page.** The suggested prompt uses /raw/akar/overview/introduction.md; the overview page is /raw/akar/overview.md. Evidence: `content/akar/1.overview/2.getting-started.md:154`, `content/akar/1.overview/1.index.md:1`. Suggested fix: Update the prompt URL and check it through the raw route.

- [ ] **P2: Docs snapshot and local package version differ.** The hub explicitly documents v2.0.20 while the local package is 2.0.22. The source exports ToastPositioner, ToastArrow, and createToastManager. This may be an intentional published-version boundary rather than a defect. Evidence: `../akar/package.json:4`, `../akar/packages/core/src/Toast/index.ts:2`, `content/akar/1.overview/5.releases.md:12`, `content/akar/3.components/0.index.md:7`. Suggested fix: Decide which release the hub targets. If updating it, regenerate component APIs and document the newer Toast and NumberField APIs; otherwise state the version boundary clearly.

- [ ] **P3: Component cards have incorrect or unfinished descriptions.** Listbox has a checkbox description, and the Menubar sentence stops at "provides quick". Evidence: `content/akar/3.components/0.index.md:120`, `content/akar/3.components/0.index.md:124`. Suggested fix: Describe list selection for Listbox and finish the Menubar description.

- [ ] **P3: Composition section promises missing gotchas.** The section introduces a list of gotchas but does not provide it. Evidence: `content/akar/2.guides/02.composition.md:37`. Suggested fix: Add the actual composition constraints or remove the introduction.
