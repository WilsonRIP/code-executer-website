"use client";

import { useState } from "react";
import { CodeEditor } from "@/components/CodeEditor";
import { LanguageSelector } from "@/components/LanguageSelector";

export default function Home() {
  const [language, setLanguage] = useState<string>("javascript");
  const [template, setTemplate] = useState<string>(
    "// Enter your code here\nconsole.log('Hello, world!');"
  );

  const handleLanguageChange = (newLanguage: string, newTemplate: string) => {
    setLanguage(newLanguage);
    setTemplate(newTemplate);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
      <div className="z-10 max-w-5xl w-full">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Online Code Executor
        </h1>
        <p className="text-center mb-8 text-gray-500">
          Write, edit, and execute code directly in your browser
        </p>

        <div className="mb-4">
          <LanguageSelector onLanguageChange={handleLanguageChange} />
        </div>

        <CodeEditor defaultLanguage={language} defaultValue={template} />

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Note: Code is executed in a sandbox environment in the browser.
            <br />
            Some functions may be limited for security reasons.
          </p>
        </div>
      </div>
    </main>
  );
}
