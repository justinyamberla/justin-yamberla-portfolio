import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const validateString = (value: unknown, maxLength: number) => {
  return !(!value || typeof value !== "string" || value.length > maxLength);
}

export const getErrorMessage = (error: unknown): { error: string } => {

  if (error instanceof Error) {
    return { error: error.message };
  }

  if (typeof error === "object" && error !== null && "message" in error && typeof (error as { message: unknown }).message === "string") {
    return { error: (error as { message: string }).message };
  }

  if (typeof error === "string") {
    return { error };
  }

  return { error: "Unknown error" };
};
