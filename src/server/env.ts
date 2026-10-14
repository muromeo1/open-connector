/** Reads a non-negative integer setting. Empty, negative, and non-integer values fall back, since `Number("")` is 0. */
export function readNonNegativeInteger(value: string | undefined, fallback: number): number {
  const trimmed = value?.trim();
  if (!trimmed) {
    return fallback;
  }

  const parsed = Number(trimmed);
  return Number.isInteger(parsed) && parsed >= 0 ? parsed : fallback;
}
