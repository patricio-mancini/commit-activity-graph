import { CellDensityColor, WeekEntry } from "@/types";

export const getMaxContributions = (data: WeekEntry[]): number => {
  return Math.max(...data.flatMap(entry => entry.days));
};

export const getCellDensityColor = (value: number, max: number): CellDensityColor => {
  if (value === 0) {
    return CellDensityColor.Lightest;
  }

  const quartile = max / 4;
  if (value >= quartile * 3) return CellDensityColor.Darkest;
  if (value >= quartile * 2) return CellDensityColor.Darker;
  if (value >= quartile * 1) return CellDensityColor.Base;
  return CellDensityColor.Lighter;
};
