<script setup lang="ts">
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from 'akar';
</script>

<template>
  <div class="akar-demo akar-demo-DialogNested">
    <div>
      <DialogRoot>
        <DialogTrigger
          class="text-grass11 shadow-blackA7 hover:bg-mauve3 leading-none font-semibold px-[15px] rounded-[4px] bg-white inline-flex h-[35px] shadow-[0_2px_10px] items-center justify-center focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        >
          Open Dialog
        </DialogTrigger>
        <DialogPortal>
          <DialogOverlay class="bg-blackA9 data-[state=open]:animate-overlayShow inset-0 fixed z-30" />
          <DialogContent
            class="data-[state=open]:animate-contentShow p-[25px] rounded-[6px] bg-white max-h-[85vh] max-w-[450px] w-[90vw] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] fixed z-[100] focus:outline-none"
          >
            <DialogTitle class="text-mauve12 text-[17px] font-semibold m-0">
              First Dialog
            </DialogTitle>
            <DialogDescription class="text-mauve11 text-sm leading-normal mb-5 mt-[10px]">
              First dialog.
            </DialogDescription>

            <div class="mt-[25px] flex gap-4 justify-end">
              <DialogClose as-child>
                <button
                  class="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 leading-none font-semibold px-[15px] rounded-[4px] inline-flex h-[35px] items-center justify-center focus:outline-none focus:shadow-[0_0_0_2px]"
                >
                  Close
                </button>
              </DialogClose>

              <DialogRoot>
                <DialogTrigger
                  class="bg-green9 shadow-blackA7 hover:bg-green10 text-white leading-none font-semibold px-[15px] rounded-[4px] inline-flex h-[35px] shadow-[0_2px_10px] items-center justify-center focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
                >
                  Open second
                </DialogTrigger>

                <DialogPortal>
                  <DialogOverlay class="bg-blackA9 data-[state=open]:animate-overlayShow inset-0 fixed z-30" />
                  <DialogContent
                    class="data-[state=open]:animate-contentShow p-[25px] rounded-[6px] bg-white max-h-[85vh] max-w-[450px] w-[90vw] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] fixed z-[100] focus:outline-none"
                  >
                    <DialogTitle class="text-mauve12 text-[17px] font-semibold m-0">
                      Second Dialog
                    </DialogTitle>
                    <DialogDescription class="text-mauve11 text-sm leading-normal mb-5 mt-[10px]">
                      Second dialog.
                    </DialogDescription>

                    <div class="flex justify-end">
                      <DialogClose as-child>
                        <button
                          class="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 leading-none font-semibold px-[15px] rounded-[4px] inline-flex h-[35px] items-center justify-center focus:outline-none focus:shadow-[0_0_0_2px]"
                        >
                          Close
                        </button>
                      </DialogClose>
                    </div>
                  </DialogContent>
                </DialogPortal>
              </DialogRoot>
            </div>
            <DialogClose
              class="text-grass11 hover:bg-green4 focus:shadow-green7 appearance-none rounded-full inline-flex h-[25px] w-[25px] items-center right-[10px] top-[10px] justify-center absolute focus:outline-none focus:shadow-[0_0_0_2px]"
              aria-label="Close"
            >
              <PIcon name="i-lucide-x" />
            </DialogClose>
          </DialogContent>
        </DialogPortal>
      </DialogRoot>
    </div>
  </div>
</template>
