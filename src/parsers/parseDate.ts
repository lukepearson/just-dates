import { DateObject } from 'dateObject';

export const parseDate = (date: Date): DateObject | null => {
  if (!date) return null;
  const dateString = date.toISOString().split('T')[0];
  const dateParts = dateString.split('-');
  const day = Number(dateParts.pop());
  const month = Number(dateParts.pop());
  const year = Number(dateParts.pop());
  return { year, month, day };
};
