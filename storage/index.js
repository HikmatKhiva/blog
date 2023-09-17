import { defineStore } from "pinia";
export const useStorage = defineStore("user", () => {
  const user = ref(null);
  return { user };
});
