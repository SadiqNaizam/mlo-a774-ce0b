import React from 'react';

import { cn } from '@/lib/utils';

/**
 * Props for the MainAppLayout component.
 */
interface MainAppLayoutProps {
  /**
   * The content to be rendered inside the layout.
   */
  children: React.ReactNode;
  /**
   * Optional additional class names to apply to the layout container.
   */
  className?: string;
}

/**
 * A simple, centered layout component for the main application view.
 * It uses flexbox to center its children both vertically and horizontally
 * within the full screen.
 *
 * @param {MainAppLayoutProps} props The props for the component.
 * @returns {React.ReactElement} The rendered layout component.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'flex min-h-screen w-full items-center justify-center bg-background font-sans',
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;
