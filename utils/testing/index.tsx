import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import StyledComponentsRegistry from '@/lib/StyledComponentsRegistry';

function AllTheProviders({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      {children}
    </StyledComponentsRegistry>
  );
};

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
