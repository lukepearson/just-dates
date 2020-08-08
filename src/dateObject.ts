export interface Day {
  day: number;
}

export interface Month {
  month: number;
}

export interface Year {
  year: number;
}

export type DateObject = Day & Month & Year;
export type DatePart = Day | Month | Year;
