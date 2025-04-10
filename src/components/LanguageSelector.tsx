"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LANGUAGES = {
  javascript: {
    name: "JavaScript",
    template:
      "// Enter your JavaScript code here\nconsole.log('Hello, world!');",
  },
  typescript: {
    name: "TypeScript",
    template:
      "// Enter your TypeScript code here\nconst greeting: string = 'Hello, world!';\nconsole.log(greeting);",
  },
  python: {
    name: "Python (Browser Simulation)",
    template:
      "# Python-like syntax (executed as JavaScript)\ndef greet(name):\n    return f'Hello, {name}!'\n\nprint(greet('world'))",
  },
};

interface LanguageSelectorProps {
  onLanguageChange: (language: string, template: string) => void;
}

export function LanguageSelector({ onLanguageChange }: LanguageSelectorProps) {
  const handleLanguageChange = (value: string) => {
    const language = LANGUAGES[value as keyof typeof LANGUAGES];
    if (language) {
      onLanguageChange(value, language.template);
    }
  };

  return (
    <Tabs defaultValue="javascript" onValueChange={handleLanguageChange}>
      <TabsList className="grid w-full grid-cols-3">
        {Object.entries(LANGUAGES).map(([key, { name }]) => (
          <TabsTrigger key={key} value={key}>
            {name}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
