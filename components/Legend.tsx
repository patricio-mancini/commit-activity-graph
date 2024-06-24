'use client'

import styled from 'styled-components';
import { CellDensityColor } from '@/types';

const densities = [
  { level: 0, label: 'No contributions', color: CellDensityColor.Lightest },
  { level: 1, label: 'Low contributions', color: CellDensityColor.Lighter },
  { level: 2, label: 'Medium-low contributions', color: CellDensityColor.Base },
  { level: 3, label: 'Medium-high contributions', color: CellDensityColor.Darker },
  { level: 4, label: 'High contributions', color: CellDensityColor.Darkest },
];

const LegendContainer = styled.div`
  display: flex;
  align-items: center;
  float: right;
  padding: 4px 32px;
`;

const LegendText = styled.span`
  margin-right: 4px;
`;

const LegendBox = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  margin-right: 4px;
  background-color: ${(props) => props.color};
`;

const Legend = () => {
  return (
    <LegendContainer>
      <LegendText>Less</LegendText>
      {densities.map((density) => (
        <LegendBox
          key={density.level}
          title={density.label}
          color={density.color}
          aria-label={density.label}
        />
      ))}
      <LegendText>More</LegendText>
    </LegendContainer>
  );
};

export default Legend;
