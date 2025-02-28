export function evaluateStrength(password: string): number {
  let strength = 0;
  if (!password) return 0;
  if (password.length > 8) strength += 1;
  if (/[A-Z]/.test(password)) strength += 1;
  if (/[0-9]/.test(password)) strength += 1;
  if (/[^A-Za-z0-9]/.test(password)) strength += 1;
  if (password.length > 12) strength += 1;
  return Math.min(strength, 5);
}