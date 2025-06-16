import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useStore = create(persist((set: any) => ({
  searchInput: "",
  setSearchInput: (newSearchInput: string) => set(() => ({ searchInput: newSearchInput })),
  myTheme: "light",
  setMyTheme: (newTheme: string) => set(() => ({ myTheme: newTheme })),
  age: 0,
  setAge: (newAge: number) => set(() => ({ age: newAge })),
  userInput: "",
  setUserInput: (newUserInput: string) => set(() => ({ userInput: newUserInput})),
  userPassword: "",
  setUserPassword: (newUserPassword: string) => set(() => ({ userPassword: newUserPassword })),
  date: "",
  setDate: (newDate: string) => set(() => ({ date: newDate })),
}), {
  name: 'holiday-react-storage',
})
)