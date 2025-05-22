import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const validateString = (value: unknown, maxLength: number) => {
  return !(!value || typeof value !== "string" || value.length > maxLength);
}

export const getErrorMessage = (error: unknown): { error: string } => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String((error as any).message);
  } else if (typeof error === 'string') {
    message = error;
  } else {
    message = "Unknown error";
  }

  return { error: message };
};
