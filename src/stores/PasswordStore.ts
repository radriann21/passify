import { createStore } from "zustand/vanilla";
import { evaluateStrength } from "@/utils/evaluatePasswordStrength";

export type PasswordState = {
  password: string,
  strength: number
}

export type PasswordActions = {
  setPassword: (options: { characters: number, uppercase: boolean, lowercase: boolean, numbers: boolean, symbols: boolean }) => void
}

export type PasswordStore = PasswordState & PasswordActions

export const defaultInitialState: PasswordState = {
  password: "",
  strength: 0
}

export const initPasswordStore = (): PasswordState => {
  return { password: "", strength: 0 }
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
      set({ password: generatedPassword, strength: evaluateStrength(generatedPassword) })
    }
  }))
}
