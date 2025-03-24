<script setup lang="ts">
import Extension from "./ExtensionInfo.vue";
import { useExtensionStore } from '../stores/extensions';

const {extensions} = useExtensionStore();
</script>

<template>
    <section class="py-10 grid lg:grid-cols-3 md:grid-cols-2 gap-4 ">
        <Extension v-for="info in extensions" :extension="info" :key="info.name" />    
    </section>
</template>