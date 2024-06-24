'use client'

import styled from 'styled-components';
import { Day } from '@/types';

interface RowHeaderCellProps {
  day: Day;
}

const cellHeight = 10;
const cellWidth = 28;

const StyledRowHeaderCell = styled.td`
  border: none;
  position: relative;
  height: ${cellHeight}px;
  width: ${cellWidth}px;

  span {
    position: absolute;
    white-space: nowrap;
    bottom: -2px;
  }
`;

export default function RowHeaderCell({ day }: Readonly<RowHeaderCellProps>) {
  return (
    <StyledRowHeaderCell>
      {day.show && <span>{day.short}</span>}
    </StyledRowHeaderCell>
  );
}
