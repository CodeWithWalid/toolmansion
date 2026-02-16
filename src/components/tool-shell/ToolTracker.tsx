'use client';

import { useEffect } from 'react';
import { trackToolUsed } from '@/lib/analytics';

interface ToolTrackerProps {
  toolName: string;
  toolCategory: string;
}

/**
 * Client component to track tool page views
 * This must be used inside a client component or page
 */
export function ToolTracker({ toolName, toolCategory }: ToolTrackerProps) {
  useEffect(() => {
    // Track tool usage when component mounts
    trackToolUsed(toolName, toolCategory);
  }, [toolName, toolCategory]);

  return null; // This component doesn't render anything
}
