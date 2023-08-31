import { defineStore } from 'pinia'

export const useSettings = defineStore('settings', {
    state: () => ({
        user: true
    }),
    getters: {},
    actions: {},
})