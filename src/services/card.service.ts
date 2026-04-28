/**
 * Remove spaces, then run the Luhn algorithm.
 * This keeps the validation logic simple and easy to explain.
 */
export const validateCardNumber = (cardNumber: string): boolean => {
  const sanitized = cardNumber.replace(/\s+/g, "");

  if (!/^\d+$/.test(sanitized)) {
    return false;
  }

  let sum = 0;
  let shouldDouble = false;

  // Walk from right to left, doubling every second digit.
  for (let index = sanitized.length - 1; index >= 0; index -= 1) {
    let digit = Number(sanitized[index]);

    if (shouldDouble) {
      digit *= 2;

      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
};
