<script setup lang="ts">

import {useExtensionStore} from "../stores/extensions"

const {state, changeFilter} = useExtensionStore();
</script>

<template>
    <section class="md:justify-between lg:flex md:items-center mt-8">
        <h2 class="text-center md:text-3xl">Extensions List</h2>

    <div class="flex justify-between px-6 gap-4">
        <button v-for="filter in state.filterOptions" :key="filter" class=" hover:bg-neutral-50   cursor-pointer" :class="{'bg-red-700 dark:bg-red-500 dark:text-neutral-900 border-none hover:bg-red-400 text-neutral-0 dark:focus:bg-red-400 dark:hover:bg-red-400' : state.activeFilter == filter, 'hover:text-neutral-500 dark:hover:bg-neutral-400 dark:hover:text-neutral-0 ' : !(state.activeFilter == filter)}" @click="changeFilter(filter)">
            {{ filter }}
        </button>
    </div>
    </section>

</template>