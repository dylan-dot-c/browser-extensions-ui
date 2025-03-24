<script setup lang="ts">
import Extension from "./ExtensionInfo.vue";
import { useExtensionStore } from '../stores/extensions';

const {extensions} = useExtensionStore();
</script>

<template>
    <section class="pt-10 space-y-6">
        <Extension v-for="info in extensions" :extension="info" :key="info.name" />    
    </section>
</template>