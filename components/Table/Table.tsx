'use client'

import styled from 'styled-components';

interface TableProps {
  children: React.ReactNode;
}

const StyledTable = styled.table`
  border-collapse: separate;
  border-spacing: 2px;
  width: auto;
  font-size: 12px;
  user-select: none;
`;

export default function Table({ children }: TableProps) {
  return (
    <StyledTable>{children}</StyledTable>
  );
}
