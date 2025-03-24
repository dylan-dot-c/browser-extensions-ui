import {ref} from "vue";
import { defineStore } from "pinia";
import defaultData from "../assets/data"
import type { Extensions, ExtensionType } from "@/types/extension";

export const useExtensionStore = defineStore('extensions', () => {
    const extensions = ref<Extensions>(defaultData)

    const findExtensionIndex = (extName: string) => {
        return extensions.value.findIndex(ext => ext.name == extName)
    }
    
    const removeExtension = (extensionName: string) => {
        const extIndex = findExtensionIndex(extensionName)

        if(extIndex == -1) {
            console.error("Failed to find that extension.");
            return;
        }

        extensions.value.splice(extIndex, 1);
    }

    const toggleActive = (extensionName : string) => {
        // const extIndex = findExtensionIndex(extensionName)

        extensions.value = extensions.value.map((ext) => {
            if(ext.name == extensionName) {
                return {...ext, isActive: !ext.isActive}
            }else {
                return ext
            }
        })

    }

    return {extensions, removeExtension, toggleActive}
})

