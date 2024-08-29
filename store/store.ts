import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'

interface State {

    switchState: boolean;
    setSwitchState: (state: boolean) => void;


}

export const useStore = create<State>()(
    persist(
        (set) => ({

            switchState: true,
            setSwitchState: (state) => set({ switchState: state }),

        }),
        {
            name: 'app-storage',
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
)


export default useStore;