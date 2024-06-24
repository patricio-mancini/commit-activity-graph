'use client'

import styled from 'styled-components';
import { formatMonth } from '@/lib/dateUtils';
import { WeekEntry } from "@/types";

const TableHeaderCell = styled.th`
  border: none;
  position: relative;
  width: 10px;
  height: 10px;
  font-weight: normal;
`;

const MonthTag = styled.div`
  position: absolute;
  top: -5px;
  left: 0;
  white-space: nowrap;
`;

interface TableHeadersProps {
  data: WeekEntry[];
}

const TableHeaders = ({ data }: Readonly<TableHeadersProps>) => {
  return (
    <thead>
      <tr>
        <TableHeaderCell style={{ width: '28px' }} />
        {data.map((entry: WeekEntry, index: number) => {
          const currentMonth = formatMonth(entry.week);
          const previousMonth = index > 0 ? formatMonth(data[index - 1].week) : '';
          const showMonthTag = index !== 0 || (index === 0 && currentMonth === formatMonth(data[1].week));
          return (
            <TableHeaderCell key={index}>
              {showMonthTag && currentMonth !== previousMonth && (
                <MonthTag>{currentMonth}</MonthTag>
              )}
            </TableHeaderCell>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeaders;
