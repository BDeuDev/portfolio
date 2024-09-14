import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'

interface State {

    switchState: boolean;
    setSwitchState: (state: boolean) => void;
    menu: boolean;
    setMenu: (state: boolean) => void;
}

export const useStore = create<State>()(
    persist(
        (set) => ({

            switchState: true,
            setSwitchState: (state) => set({ switchState: state }),
            menu: false,
            setMenu: (state) => set({ menu: state})
        }),
        {
            name: 'app-storage',
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
)


export default useStore;