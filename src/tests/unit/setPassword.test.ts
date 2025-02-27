import { describe, test, expect } from "vitest";

type Options = {
  characters: number
  uppercase: boolean
  lowercase: boolean
  numbers: boolean
  symbols: boolean
}

const setPassword = (options: Options) => {
  const { characters, uppercase, lowercase, numbers, symbols } = options
  let chars = ""
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
  const numbersChars = "0123456789"
  const symbolsChars = "!@#$%^&*()_+-=[]{}|;:,.<>/?"

  if (characters === 0) {
    return "The length must be greater than 0"
  } 

  if (uppercase === false || lowercase === false || numbers === false || symbols === false) {
    return "At least one character type must be selected"
  }

  if (uppercase) chars += uppercaseChars
  if (lowercase) chars += lowercaseChars
  if (numbers) chars += numbersChars
  if (symbols) chars += symbolsChars

  let generatedPassword = ""

  for (let i = 0; i < characters; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length)
    generatedPassword += chars[randomIndex]
  }

  return generatedPassword
}


describe("setPassword", () => {
  test("should return an error if the user don't specify the length", () => {
    const options: Options = {
      characters: 0,
      uppercase: true,
      lowercase: true,
      numbers: true,
      symbols: true
    }
    expect(setPassword(options)).toBe("The length must be greater than 0")
  })

  test("should return a password with the specified length", () => {
    const options: Options = {
      characters: 10,
      uppercase: true,
      lowercase: true,
      numbers: true,
      symbols: true
    }
    expect(setPassword(options)).toHaveLength(10)
  })

  test("should return an error if the user not specify the options", () => {
    const options: Options = {
      characters: 10,
      uppercase: false,
      lowercase: true,
      numbers: true,
      symbols: true
    }
    expect(setPassword(options)).toBe("At least one character type must be selected")
  })
})