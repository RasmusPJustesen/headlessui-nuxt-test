<script setup>
import { TransitionRoot, Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
const props = defineProps({
    items: {
        type: Array,
        default: () => []
    }
})
</script>

<template>
    <Menu as="div" class="inline-block md:relative" v-slot="{ open }">
        <MenuButton as="template">
            <slot>
                <button class="rounded-md px-4 py-2 text-white bg-purple-400 inline-flex justify-center items-center">
                    <span>Dropdown</span>
                </button>
            </slot>
        </MenuButton>
        <div class="md:hidden fixed top-0 left-0 w-full h-full bg-black/50 z-49" :class="open ? 'block' : 'hidden'"></div>
        <MenuItems class="bg-white text-black border-black fixed bottom-0 right-0 w-full md:w-auto md:absolute md:bottom-auto md:top-100 md:right-0 md:min-w-40 md:rounded-lg overflow-hidden z-50">
            <template v-if="props.items.length == 0">
                <MenuItem>
                    <span class="block px-4 py-2">No items</span>
                </MenuItem>
            </template>
            <template v-else>
                <MenuItem v-slot="{ active, close }" v-for="item in props.items" :disabled="item.isDisabled">
                    <a  v-if="item.isLink" 
                        :href="item.href" 
                        class="block px-4 py-2 text-center" 
                        :class="{'bg-gray-200 text-black': active, 'disabled': item.isDisabled}"
                    >{{ item.label }}</a>
                    <button v-else 
                            class="block px-4 py-2 w-full" 
                            :class="{'bg-gray-200 text-black': active, 'disabled': item.isDisabled}"
                    >{{ item.label }}</button>
                </MenuItem>
            </template>
        </MenuItems>
    </Menu>
</template>

<style scoped>
button.disabled, a.disabled {
    pointer-events: none;
    cursor: default;
    opacity: 0.5;
}
</style>
