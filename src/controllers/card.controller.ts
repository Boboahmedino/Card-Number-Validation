import { Request, Response } from "express";
import { validateCardNumber } from "../services/card.service";

interface ValidateCardRequestBody {
  cardNumber?: unknown;
}

export const validateCard = (req: Request<unknown, unknown, ValidateCardRequestBody>, res: Response): void => {
  const { cardNumber } = req.body;

  // Check that the input exists and is a string.
  if (typeof cardNumber !== "string") {
    res.status(400).json({
      success: false,
      message: "cardNumber is required and must be a string"
    });
    return;
  }

  const trimmed = cardNumber.trim();

  // Reject empty strings after trimming.
  if (trimmed.length === 0) {
    res.status(400).json({
      success: false,
      message: "cardNumber cannot be empty"
    });
    return;
  }

  // Allow digits and spaces only.
  if (!/^[\d\s]+$/.test(trimmed)) {
    res.status(400).json({
      success: false,
      message: "cardNumber must contain digits and spaces only"
    });
    return;
  }

  const isValid = validateCardNumber(trimmed);

  res.status(200).json({
    success: true,
    cardNumber: trimmed,
    isValid
  });
};
