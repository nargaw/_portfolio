import { create } from 'zustand'

export default create((set, get) => {
    return {
        mode: 'light',

        darkModeOn: () =>
        {
            set((state) => ({mode: 'dark'}))
        },

        lightModeOn: () => 
        {
            set((state) => ({mode: 'light'}))
        }
    }
})