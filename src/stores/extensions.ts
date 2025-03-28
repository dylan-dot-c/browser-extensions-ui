import { computed, reactive, watch } from "vue";
import { defineStore } from "pinia";
import defaultData from "../assets/data";
import type { Extensions, filterType } from "@/types/extension";

const getStoredData = () => {
  const data = localStorage.getItem("extensions");
  return data ? (JSON.parse(data) as Extensions) : defaultData;
};

export const useExtensionStore = defineStore("extensions", () => {
  const filterOptions = ["all", "active", "inactive"] as filterType[]
  const url = new URL(window.location.href)

  let filter = url.searchParams.get('filter') || "none"
  if(!filterOptions.find((f) => f.toLowerCase() == filter)) {
    filter = "all"
  }

  const state = reactive({
    allExtensions: getStoredData(),
    activeFilter: filter,
    filterOptions: filterOptions,
  });

  const extensions = computed(() =>{
    const activeFilter = state.activeFilter.toLowerCase().trim()

    return activeFilter === "active"
    ? state.allExtensions.filter((ext) => ext.isActive)
    : activeFilter === "inactive"
    ? state.allExtensions.filter((ext) => !ext.isActive)
    : state.allExtensions
  }
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
    const url = new URL(window.location.href)
    url.searchParams.set("filter", filter)
    window.history.pushState({filter}, "", url)
    
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
