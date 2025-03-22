<script setup lang="ts">
import logo from "./assets/images/logo.svg"
import moonIcon from "./assets/images/icon-moon.svg"
import GridHeader from "./components/GridHeader.vue"
import ExtensionGrid from "./components/ExtensionGrid.vue";
import Extension from "./components/Extension.vue";
</script>

<template>
  <header class="max-w-lg mx-auto ">
    <div class="flex justify-between bg-neutral-0 p-4 rounded-xl">
      <img :src="logo" alt="">

      <button class="p-2 text-red-200 bg-neutral-300 rounded-md">
        <img :src="moonIcon" alt="Moon icon">
      </button>
    </div>
  </header>



  <main>
    <GridHeader />
    <ExtensionGrid />
  </main>
</template>