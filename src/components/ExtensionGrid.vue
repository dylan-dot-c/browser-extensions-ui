<script setup lang="ts">
import Extension from "./ExtensionInfo.vue";
import { useExtensionStore } from '../stores/extensions';



const extensionInfo = useExtensionStore();
</script>

<template>
    <section class="py-10 grid lg:grid-cols-3 md:grid-cols-2 gap-4 ">
        <Extension v-for="info in extensionInfo.extensions" :extension="info" :key="info.name" />    
    </section>
    <div class="flex justify-center">
        <button v-if="extensionInfo.state.allExtensions.length <= 6" @click="extensionInfo.resetExtensionState()">Reset Extensions</button>
    </div>
</template>