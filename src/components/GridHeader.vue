<script setup lang="ts">
import {ref} from "vue"

const value = ref(["All", "Active", "Inactive"])
</script>

<template>
    <section class="md:justify-between lg:flex md:items-center mt-8">
        <h2 class="text-center md:text-3xl">Extensions List</h2>

    <div class="flex justify-between px-6 gap-4">
        <button v-for="val in value" :key="val" class=" hover:bg-red-600  cursor-pointer" :class="{'bg-red-700 dark:bg-red-500 text-neutral-0 dark:text-neutral-900 border-none' : val == 'All'}">
            {{ val }}
        </button>
    </div>
    </section>

</template>