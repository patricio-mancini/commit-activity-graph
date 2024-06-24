import { Day } from '@/types';

export const formatMonth = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  const options: Intl.DateTimeFormatOptions = { month: 'short' };
  return date.toLocaleDateString('en-US', options);
}

export const formatDay = (timestamp: number, dayIndex: number): string => {
  const date = new Date((timestamp + dayIndex * 86400) * 1000);
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options)
    .replace(/ (\d)$/, ' $1th')
    .replace(/ 1st$/, ' 1st')
    .replace(/ 2nd$/, ' 2nd')
    .replace(/ 3rd$/, ' 3rd');
}

export const daysOfWeek: Day[] = [
  { full: "Sunday", short: "Sun", show: false },
  { full: "Monday", short: "Mon", show: true },
  { full: "Tuesday", short: "Tue", show: false },
  { full: "Wednesday", short: "Wed", show: true },
  { full: "Thursday", short: "Thu", show: false },
  { full: "Friday", short: "Fri", show: true },
  { full: "Saturday", short: "Sat", show: false }
] as const;
