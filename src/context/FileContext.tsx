"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FileContextType {
    file: File | null;
    sourceTool: string | null;
    setFile: (file: File | null) => void;
    setSourceTool: (slug: string | null) => void;
    clearContext: () => void;
}

const FileContext = createContext<FileContextType | undefined>(undefined);

export function FileProvider({ children }: { children: ReactNode }) {
    const [file, setFileState] = useState<File | null>(null);
    const [sourceTool, setSourceToolState] = useState<string | null>(null);

    const setFile = (newFile: File | null) => {
        setFileState(newFile);
    };

    const setSourceTool = (slug: string | null) => {
        setSourceToolState(slug);
    };

    const clearContext = () => {
        setFileState(null);
        setSourceToolState(null);
    };

    return (
        <FileContext.Provider value={{ file, sourceTool, setFile, setSourceTool, clearContext }}>
            {children}
        </FileContext.Provider>
    );
}

export function useFileContext() {
    const context = useContext(FileContext);
    if (context === undefined) {
        throw new Error('useFileContext must be used within a FileProvider');
    }
    return context;
}
