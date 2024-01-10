<script>
import { h } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

export default {
    setup(props, { slots }) {

        let content = []
        
        if (slots.default) {
            content = slots.default()
        }

        const renderDisclosure = (index) => {

            const label = content[index].props['data-tab-label'] ? content[index].props['data-tab-label'] : 'Tab ' + (index +1)

            return h(Disclosure, {
                key: index,
                as: 'div',
                class: 'w-full max-w-md px-2 py-2 bg-white rounded-lg shadow-md dark:bg-gray-800'
            }, {
                default: () => [
                    h(DisclosureButton, {
                        class: 'flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 dark:bg-blue-500/20 dark:text-white dark:hover:bg-blue-500/10 dark:hover:text-white',
                    }, {
                        default: () => label
                    }),
                    h(DisclosurePanel, {
                        class: 'p-4 text-sm text-gray-500 dark:text-white'
                    }, {
                        default: () => content[index]
                    })
                ]
            })
        }

        const renderDisclosures = () => {
            return h('div', {
                class: 'w-full max-w-md px-2 py-2 bg-white rounded-lg shadow-md dark:bg-gray-800'
            }, {
                default: () => content.map((_, index) => renderDisclosure(index))
            })
        }

        return () => [
            renderDisclosures()
        ]
    }
}
</script>
