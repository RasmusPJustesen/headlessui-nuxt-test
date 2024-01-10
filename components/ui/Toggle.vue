<script setup>
import { SwitchGroup, SwitchLabel, Switch } from '@headlessui/vue'

const props = defineProps({
    label: {
        type: String,
        default: null
    }
})

const model = defineModel()
</script>

<template>
    <SwitchGroup class="flex items-center space-x-2" as="div">
        <SwitchLabel v-if="label" class="text-sm font-medium text-gray-700 dark:text-white">{{ label }}</SwitchLabel>
        <Switch class="relative inline-flex items-center h-6 rounded-full w-12 bg-gray-200 dark:bg-gray-600 shadow-md " v-model="model">
            <span v-if="label" class="sr-only">{{ label }}</span>
            <span class="h-4 w-4 bg-white rounded-full translate transition ease-in-out duration-200" :class="model ? 'translate-x-7' : 'translate-x-1'"></span>
        </Switch>
    </SwitchGroup>
</template>

<style scoped>

</style>
