<script setup lang="ts">
import {
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuItemIndicator,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuRoot,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from 'akar';
import { ref } from 'vue';
import './styles.css';

const checkboxOne = ref(false);
const checkboxTwo = ref(false);
const person = ref('pedro');

function handleClick() {
  // eslint-disable-next-line no-alert
  alert('hello!');
}
</script>

<template>
  <div class="akar-demo akar-demo-ContextMenu">
    <ContextMenuRoot>
      <ContextMenuTrigger
        as-child
        class="ContextMenuTrigger"
      >
        <span> Right click here. </span>
      </ContextMenuTrigger>
      <ContextMenuPortal>
        <ContextMenuContent
          class="ContextMenuContent"
          :side-offset="5"
        >
          <ContextMenuItem
            value="New Tab"
            class="ContextMenuItem"
            @click="handleClick"
          >
            New Tab <div
              class="RightSlot"
            >
              ⌘+T
            </div>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger
              value="more toolsz"
              class="ContextMenuSubTrigger"
            >
              More Tools <div
                class="RightSlot"
              >
                <PIcon name="i-lucide-chevron-right" />
              </div>
            </ContextMenuSubTrigger>
            <ContextMenuPortal>
              <ContextMenuSubContent
                class="ContextMenuSubContent"
                :side-offset="2"
                :align-offset="-5"
              >
                <ContextMenuItem
                  class="ContextMenuItem"
                >
                  Save Page As… <div
                    class="RightSlot"
                  >
                    ⌘+S
                  </div>
                </ContextMenuItem>
                <ContextMenuItem
                  class="ContextMenuItem"
                >
                  Create Shortcut…
                </ContextMenuItem>
                <ContextMenuItem
                  class="ContextMenuItem"
                >
                  Name Window…
                </ContextMenuItem>
                <ContextMenuSeparator class="ContextMenuSeparator" />
                <ContextMenuItem
                  class="ContextMenuItem"
                >
                  Developer Tools
                </ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuPortal>
          </ContextMenuSub>
          <ContextMenuItem
            value="New Window"
            class="ContextMenuItem"
          >
            New Window <div
              class="RightSlot"
            >
              ⌘+N
            </div>
          </ContextMenuItem>
          <ContextMenuItem
            value="New Private Window"
            class="ContextMenuItem"
            disabled
          >
            New Private Window <div
              class="RightSlot"
            >
              ⇧+⌘+N
            </div>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger
              value="more tools"
              class="ContextMenuSubTrigger"
            >
              More Tools <div
                class="RightSlot"
              >
                <PIcon name="i-lucide-chevron-right" />
              </div>
            </ContextMenuSubTrigger>
            <ContextMenuPortal>
              <ContextMenuSubContent
                class="ContextMenuSubContent"
                :side-offset="2"
                :align-offset="-5"
              >
                <ContextMenuItem
                  class="ContextMenuItem"
                >
                  Save Page As… <div
                    class="RightSlot"
                  >
                    ⌘+S
                  </div>
                </ContextMenuItem>
                <ContextMenuItem
                  class="ContextMenuItem"
                >
                  Create Shortcut…
                </ContextMenuItem>
                <ContextMenuItem
                  class="ContextMenuItem"
                >
                  Name Window…
                </ContextMenuItem>
                <ContextMenuSeparator class="ContextMenuSeparator" />
                <ContextMenuItem
                  class="ContextMenuItem"
                >
                  Developer Tools
                </ContextMenuItem>
                <ContextMenuSub>
                  <ContextMenuSubTrigger
                    value="more toolsz"
                    class="ContextMenuSubTrigger"
                  >
                    More Tools <div
                      class="RightSlot"
                    >
                      <PIcon name="i-lucide-chevron-right" />
                    </div>
                  </ContextMenuSubTrigger>
                  <ContextMenuPortal>
                    <ContextMenuSubContent
                      class="ContextMenuSubContent"
                      :side-offset="2"
                      :align-offset="-5"
                    >
                      <ContextMenuItem
                        class="ContextMenuItem"
                      >
                        Save Page As… <div
                          class="RightSlot"
                        >
                          ⌘+S
                        </div>
                      </ContextMenuItem>
                      <ContextMenuItem
                        class="ContextMenuItem"
                      >
                        Create Shortcut…
                      </ContextMenuItem>
                      <ContextMenuItem
                        class="ContextMenuItem"
                      >
                        Name Window…
                      </ContextMenuItem>
                      <ContextMenuSeparator class="ContextMenuSeparator" />
                      <ContextMenuItem
                        class="ContextMenuItem"
                      >
                        Developer Tools
                      </ContextMenuItem>
                      <ContextMenuSub>
                        <ContextMenuSubTrigger
                          value="more toolsz"
                          class="ContextMenuSubTrigger"
                        >
                          More Tools <div
                            class="RightSlot"
                          >
                            <PIcon name="i-lucide-chevron-right" />
                          </div>
                        </ContextMenuSubTrigger>
                        <ContextMenuPortal>
                          <ContextMenuSubContent
                            class="ContextMenuSubContent"
                            :side-offset="2"
                            :align-offset="-5"
                          >
                            <ContextMenuItem
                              class="ContextMenuItem"
                            >
                              Save Page As… <div
                                class="RightSlot"
                              >
                                ⌘+S
                              </div>
                            </ContextMenuItem>
                            <ContextMenuItem
                              class="ContextMenuItem"
                            >
                              Create Shortcut…
                            </ContextMenuItem>
                            <ContextMenuItem
                              class="ContextMenuItem"
                            >
                              Name Window…
                            </ContextMenuItem>
                            <ContextMenuSeparator class="ContextMenuSeparator" />
                            <ContextMenuItem
                              class="ContextMenuItem"
                            >
                              Developer Tools
                            </ContextMenuItem>
                          </ContextMenuSubContent>
                        </ContextMenuPortal>
                      </ContextMenuSub>
                    </ContextMenuSubContent>
                  </ContextMenuPortal>
                </ContextMenuSub>
                <ContextMenuItem
                  class="ContextMenuItem"
                >
                  Developer Tools
                </ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuPortal>
          </ContextMenuSub>
          <ContextMenuSeparator class="ContextMenuSeparator" />
          <ContextMenuCheckboxItem
            v-model="checkboxOne"
            class="ContextMenuItem"
          >
            <ContextMenuItemIndicator class="ContextMenuItemIndicator">
              <PIcon name="i-lucide-check" />
            </ContextMenuItemIndicator> Show Bookmarks <div
              class="RightSlot"
            >
              ⌘+B
            </div>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            v-model="checkboxTwo"
            class="ContextMenuItem"
          >
            <ContextMenuItemIndicator class="ContextMenuItemIndicator">
              <PIcon name="i-lucide-check" />
            </ContextMenuItemIndicator> Show Full URLs
          </ContextMenuCheckboxItem>
          <ContextMenuSeparator class="ContextMenuSeparator" />
          <ContextMenuLabel class="ContextMenuLabel">
            People
          </ContextMenuLabel>
          <ContextMenuRadioGroup v-model="person">
            <ContextMenuRadioItem
              class="ContextMenuItem"
              value="pedro"
            >
              <ContextMenuItemIndicator class="ContextMenuItemIndicator">
                <PIcon name="i-lucide-circle" />
              </ContextMenuItemIndicator> Pedro Duarte
            </ContextMenuRadioItem>
            <ContextMenuRadioItem
              class="ContextMenuItem"
              value="colm"
            >
              <ContextMenuItemIndicator class="ContextMenuItemIndicator">
                <PIcon name="i-lucide-circle" />
              </ContextMenuItemIndicator> Colm Tuite
            </ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenuPortal>
    </ContextMenuRoot>
  </div>
</template>
