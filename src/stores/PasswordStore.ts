import { createStore } from "zustand/vanilla";

export type PasswordState = {
  password: string
}

export type PasswordActions = {
  setPassword: (options: { characters: number, uppercase: boolean, lowercase: boolean, numbers: boolean, symbols: boolean }) => void
}

export type PasswordStore = PasswordState & PasswordActions

export const defaultInitialState: PasswordState = {
  password: "",
}

export const initPasswordStore = (): PasswordState => {
  return { password: "" }
}

export const createPasswordStore = (initState: PasswordState = defaultInitialState) => {
  return createStore<PasswordStore>()((set) => ({
    ...initState,
    setPassword: (options) => {
      const { characters, uppercase, lowercase, numbers, symbols } = options
      let chars = ""
      const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
      const numbersChars = "0123456789"
      const symbolsChars = "!@#$%^&*()_+-=[]{}|;:,.<>/?"

      if (uppercase) chars += uppercaseChars
      if (lowercase) chars += lowercaseChars
      if (numbers) chars += numbersChars
      if (symbols) chars += symbolsChars

      let generatedPassword = ""

      for (let i = 0; i < characters; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length)
        generatedPassword += chars[randomIndex]
      }
      set({ password: generatedPassword })
    }
  }))
}
