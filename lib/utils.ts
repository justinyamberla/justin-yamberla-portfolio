import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const validateString = (value: unknown, maxLength: number) => {
  return !(!value || typeof value !== "string" || value.length > maxLength);
}