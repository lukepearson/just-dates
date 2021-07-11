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

export interface StringDay {
  day: string;
}

export interface StringWeek {
  week: string;
}

export interface StringMonth {
  month: string;
}

export interface StringYear {
  year: string;
}

export interface Duration {
  days?: number;
  weeks?: number;
  months?: number;
  years?: number;
}

export type YearMonth = Year & Month;
export type DateObject = Day & Month & Year;
export type StringDateObject = StringDay & StringMonth & StringYear;

export type DatePart = Day | Month | Year;
export type DayOfWeek = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type MonthOfYear = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export const MONDAY: DayOfWeek = 1;
export const TUESDAY: DayOfWeek = 2;
export const WEDNESDAY: DayOfWeek = 3;
export const THURSDAY: DayOfWeek = 4;
export const FRIDAY: DayOfWeek = 5;
export const SATURDAY: DayOfWeek = 6;
export const SUNDAY: DayOfWeek = 7;

export const JANUARY: MonthOfYear = 1;
export const FEBRUARY: MonthOfYear = 2;
export const MARCH: MonthOfYear = 3;
export const APRIL: MonthOfYear = 4;
export const MAY: MonthOfYear = 5;
export const JUNE: MonthOfYear = 6;
export const JULY: MonthOfYear = 7;
export const AUGUST: MonthOfYear = 8;
export const SEPTEMBER: MonthOfYear = 9;
export const OCTOBER: MonthOfYear = 10;
export const NOVEMBER: MonthOfYear = 11;
export const DECEMBER: MonthOfYear = 12;

export interface Comparator<T> {
  (a: DateObject | StringDateObject, b: DateObject | StringDateObject): T;
}

export interface Formatter {
  (a: DateObject | StringDateObject, b: DateObject | StringDateObject): string;
}

export interface Query<T> {
  (date: DateObject | StringDateObject): T;
}
