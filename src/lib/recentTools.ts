// Recently Used Tools - Local Storage Utility
// Tracks which tools users visit for quick access

const STORAGE_KEY = 'toolmansion_recent_tools';
const MAX_RECENT_TOOLS = 6;

export interface RecentTool {
    slug: string;
    name: string;
    category: string;
    visitedAt: number;
}

/**
 * Get recently used tools from localStorage
 */
export function getRecentTools(): RecentTool[] {
    if (typeof window === 'undefined') return [];
    
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) return [];
        
        const tools: RecentTool[] = JSON.parse(stored);
        
        // Sort by most recent first
        return tools.sort((a, b) => b.visitedAt - a.visitedAt);
    } catch {
        return [];
    }
}

/**
 * Add a tool to recently used list
 */
export function addRecentTool(tool: { slug: string; name: string; category: string }): void {
    if (typeof window === 'undefined') return;
    
    try {
        const current = getRecentTools();
        
        // Remove if already exists (to move to top)
        const filtered = current.filter(t => t.slug !== tool.slug);
        
        // Add new tool at the beginning
        const updated: RecentTool[] = [
            {
                slug: tool.slug,
                name: tool.name,
                category: tool.category,
                visitedAt: Date.now()
            },
            ...filtered
        ].slice(0, MAX_RECENT_TOOLS); // Keep only max allowed
        
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
        // Silently fail if localStorage is not available
    }
}

/**
 * Clear all recent tools
 */
export function clearRecentTools(): void {
    if (typeof window === 'undefined') return;
    
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch {
        // Silently fail
    }
}

/**
 * Check if user has recent tools
 */
export function hasRecentTools(): boolean {
    return getRecentTools().length > 0;
}
