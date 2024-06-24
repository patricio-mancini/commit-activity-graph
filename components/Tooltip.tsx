'use client'

import styled from 'styled-components';

interface TooltipProps {
  text: string;
}

const TooltipContainer = styled.div`
  visibility: hidden;
  opacity: 0;
  min-width: 120px;
  max-width: 240px;
  background-color: #6E7681;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 12px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  transition: opacity 0.3s;
  white-space: nowrap;
`;

const Tooltip: React.FC<TooltipProps> = ({ text }) => {
  return <TooltipContainer className="tooltip">{text}</TooltipContainer>;
};

export default Tooltip;
