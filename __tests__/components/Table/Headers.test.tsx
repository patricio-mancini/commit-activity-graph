import { render, screen } from '@testing-library/react';
import TableHeaders from '@/components/Table/Headers';
import { WeekEntry } from '@/types';
import { formatMonth } from '@/lib/dateUtils';

jest.mock('@/lib/dateUtils', () => ({
  formatMonth: jest.fn()
}));

describe('TableHeaders', () => {
  const mockData: WeekEntry[] = [
    { week: 1609459200, days: [0, 1, 2, 3, 4, 5, 6], total: 21 }, // January 1, 2021
    { week: 1610064000, days: [0, 1, 2, 3, 4, 5, 6], total: 21 }, // January 8, 2021
    { week: 1610668800, days: [0, 1, 2, 3, 4, 5, 6], total: 21 }, // January 15, 2021
    { week: 1611273600, days: [0, 1, 2, 3, 4, 5, 6], total: 21 }, // January 22, 2021
    { week: 1611878400, days: [0, 1, 2, 3, 4, 5, 6], total: 21 }, // January 29, 2021
    { week: 1612483200, days: [0, 1, 2, 3, 4, 5, 6], total: 21 }  // February 5, 2021
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the table headers with month tags correctly', () => {
    (formatMonth as jest.Mock).mockImplementation((timestamp: number) => {
      const date = new Date(timestamp * 1000);
      const month = date.toLocaleString('en-US', { month: 'short' });
      return month;
    });

    render(<TableHeaders data={mockData} />);

    expect(screen.getAllByRole('columnheader')).toHaveLength(mockData.length + 1);

    const monthTags = screen.getAllByText(/Jan|Feb/);
    expect(monthTags).toHaveLength(2); // January and February tags should be present

    expect(monthTags[0]).toHaveTextContent('Jan');
    expect(monthTags[1]).toHaveTextContent('Feb');
  });

  it('does not render duplicate month tags for consecutive weeks in the same month', () => {
    (formatMonth as jest.Mock).mockImplementation((timestamp: number) => {
      const date = new Date(timestamp * 1000);
      const month = date.toLocaleString('en-US', { month: 'short' });
      return month;
    });

    render(<TableHeaders data={mockData} />);

    // Check if only distinct month tags are rendered
    const monthTags = screen.getAllByText(/Jan|Feb/);
    expect(monthTags).toHaveLength(2); // Only two distinct month tags should be present
  });
});
