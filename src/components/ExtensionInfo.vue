<script setup lang="ts">
import type { ExtensionType } from '../types/extension'
import { useExtensionStore } from '../stores/extensions'

const { removeExtension, toggleActive } = useExtensionStore()

defineProps<{
  extension: ExtensionType
}>()
</script>

<template>
  <div
    class="bg-neutral-0 dark:bg-neutral-800 dark:text-neutral-0 p-4 rounded-2xl drop-shadow-md dark:border-1 dark:border-neutral-500 relative h-48"
  >
    <div class="flex gap-4 items-start">
      <img :src="extension.logo" :alt="'Logo for the ' + extension.name + ' extension'" />
      <div>
        <h3 class="font-medium text-xl">{{ extension.name }}</h3>
        <p class="text-neutral-500 dark:text-neutral-300 leading-6">{{ extension.description }}</p>
      </div>
    </div>

    <div class="flex justify-between lg:pt-12 items-center absolute bottom-4 w-full pr-8">
      <button
        type="button"
        title="Remove Extension  extension"
        @click="removeExtension(extension.name)"
        class="hover:bg-red-500 hover:text-white hover:border-red-500 dark:hover:text-neutral-900"
      >
        Remove
      </button>

      <button
        title="Toggle Extension"
        @click="toggleActive(extension.name)"
        class="p-0 border-0 focus:outline-1 focus:outline-red-500 w-8 h-4 flex items-center rounded-full transition"
        :class="{
          'bg-red-500': extension.isActive,
          'bg-neutral-200 dark:bg-neutral-500': !extension.isActive,
        }"
        role="switch"
        :aria-checked="extension.isActive"
      >
        <span
          class="bg-neutral-0 w-3 h-3 rounded-full transition"
          :class="{ 'translate-x-4.5': extension.isActive, 'translate-x-0.5': !extension.isActive }"
        >
        </span>
      </button>
    </div>
  </div>
</template>
