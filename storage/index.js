import { defineStore } from 'pinia'
export const useStorage = defineStore('settings', {
    state: () => ({
        user: true
    }),
    getters: {},
    actions: {},
})