export interface WeekEntry {
  total: number;
  week: number;
  days: number[];
}

export enum CellDensityColor {
  Darkest = '#0e4429',
  Darker = '#006d32',
  Base = '#26a641',
  Lighter = '#39d353',
  Lightest = '#e0e0e0'
}

export interface Day {
  full: string;
  short: string;
  show: boolean;
}