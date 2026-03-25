export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

export const validateNumber = (
  value: unknown,
  maxLength: number
): boolean => {
  if (typeof value !== "string") return false;
  if (value.trim() === "") return true; // optional field — empty is valid
  if (!/^\+?[\d\s\-().]{7,}$/.test(value)) return false;
  if (value.replace(/\D/g, "").length > maxLength) return false;
  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};
