import {ref} from "vue";
import { defineStore } from "pinia";
import defaultData from "../assets/data"
import type { Extensions } from "@/types/extension";

export const useExtensionStore = defineStore('extensions', () => {
    const extensions = ref<Extensions>(defaultData)
    // console.log(extensions)

    // extensions.forEach(ext => console.log(ext))

    const findExtensionIndex = (extName: string) => {
        return extensions.value.findIndex(ext => ext.name == extName)
    }
    
    const removeExtension = (extensionName: string) => {
        let extIndex = findExtensionIndex(extensionName)

        if(extIndex == -1) {
            console.error("Failed to find that extension.");
            return;
        }

        extensions.value.splice(extIndex, 1);
    }

    return {extensions, removeExtension}
})

