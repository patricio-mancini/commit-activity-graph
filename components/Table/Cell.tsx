'use client'

import styled from 'styled-components';
import Tooltip from '@/components/Tooltip';
import { CellDensityColor } from '@/types';

interface CellProps {
  day: string;
  commits: number;
  density: CellDensityColor;
}

interface StyledCellProps {
  $density: CellDensityColor;
}

const cellSize = 10 as const;

const StyledCell = styled.td<StyledCellProps>`
  width: ${cellSize}px;
  height: ${cellSize}px;
  border: none;
  border-radius: 2px;
  background-color: ${(props) => props.$density};
  position: relative;

  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }
`;

export default function Cell({
  day,
  commits,
  density
}: Readonly<CellProps>) {
  const tooltipText = commits === 0
    ? `No contributions on ${day}.`
    : `${commits} contributions on ${day}.`;

  return (
    <StyledCell
      data-day={day}
      data-commits={commits}
      $density={density}
    >
      <Tooltip text={tooltipText} />
    </StyledCell>
  );
}
