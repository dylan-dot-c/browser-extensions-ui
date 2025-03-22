<script setup lang="ts">
import type { ExtensionType } from '../types/extension';
import {useExtensionStore} from '../stores/extensions';

const {removeExtension} = useExtensionStore();

defineProps<{
    extension: ExtensionType
}>()

</script>

<template>
    <div class="bg-neutral-0 p-4 rounded-2xl">
        <div class="flex gap-4 items-start">
            <img :src="extension.logo" />
            <div>
                <h3>{{ extension.name }}</h3>
                <p class="text-neutral-600 leading-6">{{extension.description}}</p>
            </div>
        </div>
        <div class="flex justify-between pt-4 items-center">
            <button @click="removeExtension(extension.name)">Remove</button>

            <input type="checkbox" :name="extension.name" :id="extension.name" :checked="extension.isActive" v-model="extension.isActive" class="hidden">
            <label :for="extension.name" class="w-8 h-4 flex items-center rounded-full" :class="{'bg-red-700': extension.isActive, 'bg-neutral-200': !extension.isActive}">
                <div class="p-full bg-neutral-0 w-3 h-3 rounded-full peer-checked:translate-3.5 transition" :class="{'translate-x-4.5': extension.isActive, 'translate-x-0.5': !extension.isActive}"></div>
            </label>
        </div>        
    </div>
</template>