import { describe, test, expect } from "vitest"
import { evaluateStrength } from "../../utils/evaluatePasswordStrength";

describe('evaluatePasswordStrength', () => {
  test('should return an error if not password is passed', () => {
    expect(evaluateStrength("")).toBe(0)
  })

  test("should return Very Weak if the combination of elements is not considerable", () => {
    expect(evaluateStrength("abckan")).toBe(0)
  })

  test("should return Medium if the password has at least 8 characters", () => {
    expect(evaluateStrength("abckan123")).toBe(2)
  })

  test("should return Very Strong if the password has most than 8 characters and contains different elements", () => {
    expect(evaluateStrength("iKjasl129h.-{SJjsh")).toBe(5)
  })
})