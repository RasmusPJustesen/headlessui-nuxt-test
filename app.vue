<script setup>
import Dropdown from './components/ui/Dropdown.vue'
import Tabs from './components/ui/Tabs.vue'
import Toggle from './components/ui/Toggle.vue'
import Accordion from './components/ui/Accordion.vue'
import { HomeIcon, FilmIcon, PlusIcon } from "@heroicons/vue/24/solid"

const items = [
  {id:1, label:'item 1', isLink: true, href: 'https://google.com', isDisabled: false},
  {id:2, label:'item 2', isLink: false, isDisabled: true},
  {id:3, label:'item 3', isLink: true, href: 'https://google.com', isDisabled: true},
]

const faq = [
  {id:1, question:'Do you like this?', answer: 'Yes, I do'},
  {id:2, question:'Will you refund me?', answer: 'No, I won\'t'},
  {id:3, question:'What does it cost?', answer: 'It costs $10'},
]

const darkMode = ref(false)
</script>

<template>
  <div id="main">
    <ClientOnly>
      <Tabs name="parent" :default-index="1">

        <p data-tab-label="First">
          <span>This the first tab</span>
          <Tabs name="child" :default-index="2">
            <p data-tab-label="First-child">
              <span>This the first child tab</span>
            </p>
            <div data-tab-label="Second-child">
              <span>This the second child tab</span>
            </div>
            <p data-tab-label="third-child">
              <span>This the third child tab</span>
            </p>
            <p data-tab-label="fourth-child">
              <span>This the fourth child tab</span>
            </p>
          </Tabs>
        </p>

        <div data-tab-label="Second">
          <span>This the second tab</span>
          <Accordion>
            <template v-for="question in faq" :key="'ques'+question.id">
              <div :data-tab-label="question.question">
                <p>{{ question.answer }}</p>
              </div>
            </template>
          </Accordion>
        </div>

        <p>
          <span>This the third tab</span>
          <Dropdown :items="items">
            <button class="inline-flex items-center justify-center px-4 py-2 text-white bg-purple-400 rounded-md">
              <span>My Dropdown</span>
            </button>
          </Dropdown>
        </p>

      </Tabs>
    </ClientOnly>
  </div>
</template>

<style scoped>
#main {
  width: 100vw;
  height: 100vh;
  background-color: azure;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>