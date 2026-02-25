'use client';

import { useEffect } from 'react';
import { trackToolUsed } from '@/lib/analytics';
import { addRecentTool } from '@/lib/recentTools';
import { getToolBySlug } from '@/data/toolsRegistry';

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
    // Track tool usage in Google Analytics
    trackToolUsed(toolName, toolCategory);
    
    // Add to recently used tools in localStorage
    const tool = getToolBySlug(toolName);
    if (tool) {
      addRecentTool({
        slug: tool.slug,
        name: tool.name,
        category: tool.category
      });
    }
  }, [toolName, toolCategory]);

  return null; // This component doesn't render anything
}
