import React from 'react';
import { render, screen, waitFor, fireEvent } from '@/utils/testing';
import AsyncComponentResolver from '@/utils/testing/AsyncComponentResolver';
import CommitActivityGraph from '@/components/CommitActivityGraph';
import { fetchCommitActivity } from '@/lib/api';
import { daysOfWeek, formatDay } from '@/lib/dateUtils';
import { WeekEntry } from '@/types';

const mockCommitData: WeekEntry[] = [
  {
    week: 1609459200,
    days: [0, 1, 2, 3, 4, 5, 6],
    total: 21
  },
  {
    week: 1609462800,
    days: [7, 8, 9, 10, 11, 12, 13],
    total: 70
  },
];

jest.mock('@/lib/api', () => ({
  fetchCommitActivity: jest.fn(),
}));

jest.mock('@/lib/cellUtils', () => ({
  getMaxContributions: jest.fn((data: WeekEntry[]) => 13),
  getCellDensityColor: jest.fn((contributions: number, maxContributions: number) => {
    return contributions === 0 ? 'lightgray' : 'darkgray';
  }),
}));

describe('CommitActivityGraph', () => {
  beforeEach(() => {
    (fetchCommitActivity as jest.Mock).mockResolvedValue(mockCommitData);
  });

  it('renders the table with column headers, row headers, cells, and legend', async () => {
    const ResolvedComponent = await AsyncComponentResolver(CommitActivityGraph, {});

    render(<ResolvedComponent />);

    await waitFor(() => expect(fetchCommitActivity).toHaveBeenCalled());

    expect(screen.getByRole('table')).toBeInTheDocument();

    const columnHeaders = screen.getAllByRole('columnheader');
    expect(columnHeaders.length).toBeGreaterThanOrEqual(mockCommitData.length);

    daysOfWeek.forEach((day) => {
      if (day.show) {
        expect(screen.getByText(day.short)).toBeInTheDocument();
      }
    });

    expect(screen.getByText('Less')).toBeInTheDocument();
    expect(screen.getByText('More')).toBeInTheDocument();
  });

  it('displays tooltip with correct information on cell hover', async () => {
    const ResolvedComponent = await AsyncComponentResolver(CommitActivityGraph, {});

    render(<ResolvedComponent />);

    await waitFor(() => expect(fetchCommitActivity).toHaveBeenCalled());

    mockCommitData.forEach((entry, weekIndex) => {
      entry.days.forEach((contributions, dayIndex) => {
        const cellIndex = weekIndex * 7 + dayIndex;
        const cell = screen.getAllByRole('cell')[cellIndex];
        fireEvent.mouseOver(cell);
        const formattedDay = formatDay(entry.week, dayIndex);
        const tooltipText = contributions === 0
          ? `No contributions on ${formattedDay}.`
          : `${contributions} contributions on ${formattedDay}.`;
        expect(screen.getByText(tooltipText)).toBeInTheDocument();
      });
    });
  });
});
