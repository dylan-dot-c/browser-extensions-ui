<script setup lang="ts">
import type { ExtensionType } from '../types/extension';
import {useExtensionStore} from '../stores/extensions';

const {removeExtension, toggleActive} = useExtensionStore();

defineProps<{
    extension: ExtensionType
}>()

</script>

<template>
    <div class="bg-neutral-0 dark:bg-neutral-700 dark:text-neutral-0 p-4 rounded-2xl">
        <div class="flex gap-4 items-start">
            <img :src="extension.logo" />
            <div>
                <h3 class="font-medium text-xl">{{ extension.name }}</h3>
                <p class="text-neutral-600 dark:text-neutral-300 leading-6">{{extension.description}}</p>
            </div>
        </div>
        <div class="flex justify-between pt-4 items-center">
            <button @click="removeExtension(extension.name)">Remove</button>

            <label :for="extension.name" class="w-8 h-4 flex items-center rounded-full" :class="{'bg-red-700': extension.isActive, 'bg-neutral-200 dark:bg-neutral-500': !extension.isActive}">
            <input type="checkbox" v-model="extension.isActive" :name="extension.name" :id="extension.name" :checked="extension.isActive" class="hidden">
                <div class="p-full bg-neutral-0 w-3 h-3 rounded-full peer-checked:translate-3.5 transition" :class="{'translate-x-4.5': extension.isActive, 'translate-x-0.5': !extension.isActive}"></div>
            </label>
        </div>        
    </div>
</template>