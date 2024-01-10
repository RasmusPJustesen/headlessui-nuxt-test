<script>
import { h } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

export default {
    props: {
        name: {
            type: String,
            required: true
        },
        defaultIndex: {
            type: Number,
            default: 0,
            
        }
    },
    setup(props, { slots }) {

        const id = 'tabs-' + Math.floor(Math.random() * 1000000)
        const name = props.name

        //const url = new URL(window.location.href);

        //const setUrlVariable = (value) => {
        //    url.searchParams.set(props.name, value);
        //    window.history.replaceState({}, '', url);
        //}

        //if (!url.searchParams.get(props.name)) {
        //    setUrlVariable(props.defaultIndex)
        //}

        let content = []

        if  (slots.default) {
            content = slots.default()
        }

        const renderTab = (index) => {

            const label = content[index].props['data-tab-label'] ? content[index].props['data-tab-label'] : 'Tab ' + (index +1)
            
            return h(Tab, {
                key: index,
                class: 'px-4 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-100 ui-selected:bg-green-600 dark:text-white dark:bg-blue-500/20 dark:hover:bg-blue-500/10 dark:hover:text-white',
            }, {
                default: () => label
            })
        }

        const renderPanel = (index) => {
            return h(TabPanel, {
                key: index,
                class: 'p-3 dark:text-white',
                unmount: false
            }, { 
                default: () => content[index]
            })
        }

        const renderTabs = () => {
            return h(TabGroup, {
                class: 'w-full max-w-md px-2 py-2 bg-white rounded-lg shadow-md dark:bg-gray-800',
                as: 'div',
                defaultIndex: /* url.searchParams.get(props.name) ? parseInt(url.searchParams.get(props.name)) :  */ props.defaultIndex,
                onChange: (value) => {
                    //setUrlVariable(value)
                }
            }, {
                default: () => [
                    h(TabList, {
                        class: 'flex p-1 space-x-1 bg-gray-200 dark:bg-blue-500/20 rounded-lg'
                    }, {
                        default: () => content.map((_, index) => renderTab(index))
                    }),
                    h(TabPanels, {
                        class: 'flex flex-col mt-2'
                    }, {
                        default: () => content.map((_, index) => renderPanel(index))
                    })
                ]
            })
        }

        return () => [
            renderTabs()
        ]

    }
}
</script>
