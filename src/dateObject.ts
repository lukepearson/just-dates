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
  day?: number;
  week?: number;
  month?: number;
  year?: number;
}

export type YearMonth = Year & Month;
export type DateObject = Day & Month & Year;
export type DatePart = Day | Month | Year;
