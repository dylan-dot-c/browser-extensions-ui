<script setup lang="ts">
import {ref} from "vue"

const value = ref(["All", "Active", "Inactive"])
</script>

<template>
    <h2 class="text-center ">Extensions List</h2>

    <div class="flex justify-between px-6">
    <button v-for="val in value" class="bg-neutral-0 drop-shadow-md px-4 py-2 rounded-full hover:bg-red-600 cursor-pointer">
        {{ val }}
    </button>
    </div>
</template>