export interface Day {
  day: number;
}

export interface Week {
  week: number;
}

export interface Month {
  month: number;
}

export interface Year {
  year: number;
}

export interface Duration {
  days?: number;
  weeks?: number;
  months?: number;
  years?: number;
}

export type YearMonth = Year & Month;
export type DateObject = Day & Month & Year;
export type DatePart = Day | Month | Year;
export type DayOfWeek = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export const MONDAY: DayOfWeek = 1;
export const TUESDAY: DayOfWeek = 2;
export const WEDNESDAY: DayOfWeek = 3;
export const THURSDAY: DayOfWeek = 4;
export const FRIDAY: DayOfWeek = 5;
export const SATURDAY: DayOfWeek = 6;
export const SUNDAY: DayOfWeek = 7;
