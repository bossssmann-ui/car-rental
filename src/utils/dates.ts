/** Milliseconds in one day */
export const MS_PER_DAY = 86_400_000;

/** Returns today's date as YYYY-MM-DD string */
export function todayISO(): string {
  return new Date().toISOString().split('T')[0];
}

/** Returns tomorrow's date as YYYY-MM-DD string */
export function tomorrowISO(): string {
  return new Date(Date.now() + MS_PER_DAY).toISOString().split('T')[0];
}

/**
 * Calculates the number of rental days between two ISO date strings.
 * Always returns at least 1 day.
 */
export function calcRentalDays(pickupDate: string, returnDate: string): number {
  if (!pickupDate || !returnDate) return 1;
  const diff = new Date(returnDate).getTime() - new Date(pickupDate).getTime();
  return Math.max(1, Math.ceil(diff / MS_PER_DAY));
}
