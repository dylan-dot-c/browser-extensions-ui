<script setup lang="ts">
import data from "../assets/data.ts"
import Extension from "./Extension.vue";
import { useExtensionStore } from '../stores/extensions';

const {extensions} = useExtensionStore();

console.log(extensions)
</script>

<template>
    <section class="pt-10 space-y-6">
        <Extension v-for="info in extensions" :extension="info" :key="info.name" />    
    </section>
</template>