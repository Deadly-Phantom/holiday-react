import { create } from 'zustand'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useStore = create((set: any) => ({
  userInput: "",
  setUserInput: (newUserInput: string) => set(() => ({ userInput: newUserInput})),
  userPassword: "",
  setUserPassword: (newUserPassword: string) => set(() => ({ userPassword: newUserPassword })),
}))