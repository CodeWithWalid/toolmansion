'use strict';
'use client';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <html>
            <body className="flex flex-col items-center justify-center min-h-screen text-center px-4">
                <h2 className="text-3xl font-bold mb-4 text-red-600">Application Error</h2>
                <p className="text-gray-600 mb-8">A critical error prevents the app from loading.</p>
                <button
                    onClick={() => reset()}
                    className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
                >
                    Try again
                </button>
            </body>
        </html>
    )
}
