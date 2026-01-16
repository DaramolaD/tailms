"use client";

import React, { useState } from "react";

interface CodeEditorProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CodeEditor({ isOpen, onClose }: CodeEditorProps) {
  const [code, setCode] = useState(`// Welcome to the Code Editor
// Start coding here...

function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("World"));`);

  if (!isOpen) return null;

  return (
    <div className="w-96 shrink-0 border-l border-gray-700 bg-gray-800 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h3 className="text-sm font-medium text-gray-300">Code Editor</h3>
        <button
          onClick={onClose}
          className="p-1 rounded text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
          aria-label="Close editor"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Code Editor Area */}
      <div className="flex-1 overflow-hidden">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-full p-4 bg-gray-900 text-gray-100 font-mono text-sm resize-none focus:outline-none"
          placeholder="// Start coding here..."
          spellCheck={false}
        />
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700">
        <button
          className="w-full px-4 py-2 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors"
        >
          Run Code
        </button>
      </div>
    </div>
  );
}
