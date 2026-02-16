// Google Analytics 4 Event Tracking Utility

interface GAEventParams {
  [key: string]: string | number | boolean | undefined;
}

/**
 * Track a custom event in Google Analytics 4
 * @param eventName - The name of the event (e.g., 'tool_used', 'file_converted')
 * @param params - Event parameters
 */
export function trackEvent(eventName: string, params?: GAEventParams): void {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    // @ts-expect-error - gtag is loaded via script
    window.gtag('event', eventName, params);
  }
}

/**
 * Track when a tool is used
 * @param toolName - Slug/name of the tool
 * @param toolCategory - Category of the tool (image, pdf, dev, etc.)
 */
export function trackToolUsed(toolName: string, toolCategory: string): void {
  trackEvent('tool_used', {
    tool_name: toolName,
    tool_category: toolCategory,
  });
}

/**
 * Track when a file is processed/converted
 * @param toolName - Name of the tool used
 * @param fromType - Original file type
 * @param toType - Converted file type (if applicable)
 * @param fileCount - Number of files processed
 */
export function trackFileProcessed(
  toolName: string,
  fromType: string,
  toType?: string,
  fileCount: number = 1
): void {
  trackEvent('file_processed', {
    tool_name: toolName,
    file_type_from: fromType,
    file_type_to: toType || fromType,
    file_count: fileCount,
  });
}

/**
 * Track when a file is downloaded
 * @param toolName - Name of the tool
 * @param fileType - Type of file downloaded
 * @param fileSize - Size of file in bytes (optional)
 */
export function trackFileDownloaded(
  toolName: string,
  fileType: string,
  fileSize?: number
): void {
  trackEvent('file_downloaded', {
    tool_name: toolName,
    file_type: fileType,
    file_size: fileSize,
  });
}

/**
 * Track search queries on the site
 * @param searchTerm - The search query
 * @param resultCount - Number of results found
 */
export function trackSearch(searchTerm: string, resultCount: number): void {
  trackEvent('tool_search', {
    search_term: searchTerm,
    result_count: resultCount,
  });
}

/**
 * Track category page views
 * @param categoryName - Name of the category
 * @param toolCount - Number of tools in category
 */
export function trackCategoryView(categoryName: string, toolCount: number): void {
  trackEvent('category_view', {
    category_name: categoryName,
    tool_count: toolCount,
  });
}

/**
 * Track errors in tools
 * @param toolName - Name of the tool
 * @param errorType - Type of error
 * @param errorMessage - Error message (optional)
 */
export function trackToolError(
  toolName: string,
  errorType: string,
  errorMessage?: string
): void {
  trackEvent('tool_error', {
    tool_name: toolName,
    error_type: errorType,
    error_message: errorMessage,
  });
}

/**
 * Track outbound link clicks
 * @param url - The URL clicked
 * @param label - Label for the link
 */
export function trackOutboundLink(url: string, label?: string): void {
  trackEvent('outbound_link_click', {
    url,
    label: label || url,
  });
}
