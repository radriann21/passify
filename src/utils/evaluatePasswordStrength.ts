export function evaluateStrength(password:string) {
  let strength = 0;
  if (!password) return "The length must be greater than 0"
  if (password.length > 8) strength += 1;
  if (/[A-Z]/.test(password)) strength += 1;
  if (/[0-9]/.test(password)) strength += 1;
  if (/[^A-Za-z0-9]/.test(password)) strength += 1;

  const names = ["Very Weak", "Weak", "Medium", "Strong", "Very Strong"]

  return names[strength];
}