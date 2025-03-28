import { computed, reactive, watch } from "vue";
import { defineStore } from "pinia";
import defaultData from "../assets/data";
import type { Extensions, filterType } from "@/types/extension";

const getStoredData = () => {
  const data = localStorage.getItem("extensions");
  return data ? (JSON.parse(data) as Extensions) : defaultData;
};

export const useExtensionStore = defineStore("extensions", () => {
  const state = reactive({
    allExtensions: getStoredData(),
    activeFilter: "All" as filterType,
    filterOptions: ["All", "Active", "Inactive"] as filterType[],
  });

  const extensions = computed(() =>
    state.activeFilter === "Active"
      ? state.allExtensions.filter((ext) => ext.isActive)
      : state.activeFilter === "Inactive"
      ? state.allExtensions.filter((ext) => !ext.isActive)
      : state.allExtensions
  );

  watch(
    () => state.allExtensions,
    (newExtensions) => {
      localStorage.setItem("extensions", JSON.stringify(newExtensions));
    },
    { deep: true } //Ensure it watches deeply
  );

  const resetExtensionState = () => {
    // by app design user cant add new extensions
    //only delete them
    state.allExtensions = defaultData;
  };

  const removeExtension = (extensionName: string) => {
    state.allExtensions = state.allExtensions.filter(
      (ext) => ext.name !== extensionName
    );
  };

  const changeFilter = (filter: filterType) => {
    state.activeFilter = filter;
  };

  const toggleActive = (extensionName: string) => {
    const ext = state.allExtensions.find((ext) => ext.name === extensionName);
    if (ext) ext.isActive = !ext.isActive;
  };

  return {
    state,
    extensions,
    resetExtensionState,
    removeExtension,
    toggleActive,
    changeFilter,
  };
});
