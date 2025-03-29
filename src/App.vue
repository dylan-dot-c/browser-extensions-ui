<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import logo from './assets/images/logo.svg'
import darkLogo from './assets/images/logo-dark.svg'
import moonIcon from './assets/images/icon-moon.svg'
import sunIcon from './assets/images/icon-sun.svg'
import GridHeader from './components/GridHeader.vue'
import ExtensionGrid from './components/ExtensionGrid.vue'

const theme = ref(localStorage.getItem('theme') || 'light')

const toggleTheme = function () {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

// Watch for changes in theme and update localStorage & document class
watch(theme, function (newVal) {
  localStorage.setItem('theme', newVal)

  // Instead of overriding all classes, use classList.replace
  document.documentElement.classList.remove('light', 'dark')
  document.documentElement.classList.add(newVal)
})

// Ensure theme is applied on page load
onMounted(() => {
  document.documentElement.classList.add(theme.value)
})
</script>

<template>
  <header class="mt-6">
    <div class="flex justify-between bg-neutral-0 p-4 rounded-xl dark:bg-neutral-800">
      <div>
        <img :src="logo" alt="App logo" v-if="theme === 'light'" />
        <img :src="darkLogo" alt="App logo" v-else />
      </div>

      <button
        class="text-red-200 bg-neutral-100 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 border-none rounded-lg p-2 border-0"
        @click="toggleTheme()"
      >
        <img :src="moonIcon" alt="Moon icon" v-if="theme == 'light'" />
        <img :src="sunIcon" alt="Moon icon" v-else />
      </button>
    </div>
  </header>

  <main>
    <GridHeader />
    <ExtensionGrid />
  </main>
</template>
