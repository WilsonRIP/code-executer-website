"use client";

import { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

interface CodeEditorProps {
  defaultLanguage?: string;
  defaultValue?: string;
  height?: string;
}

export function CodeEditor({
  defaultLanguage = "javascript",
  defaultValue = "// Enter your code here\nconsole.log('Hello, world!');",
  height = "400px",
}: CodeEditorProps) {
  const editorRef = useRef<any>(null);
  const [output, setOutput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor;
  };

  const executeCode = () => {
    if (!editorRef.current) return;

    const code = editorRef.current.getValue();
    setIsLoading(true);
    setOutput("");

    try {
      // Create a sandbox environment
      const originalConsoleLog = console.log;
      const logs: string[] = [];

      // Override console.log
      console.log = (...args) => {
        logs.push(
          args
            .map((arg) =>
              typeof arg === "object"
                ? JSON.stringify(arg, null, 2)
                : String(arg)
            )
            .join(" ")
        );
      };

      // Execute the code
      const result = Function(code)();

      // Restore console.log
      console.log = originalConsoleLog;

      // Display the result and logs
      setOutput(
        `// Output:\n${logs.join("\n")}\n\n// Return value:\n${
          result !== undefined ? String(result) : "undefined"
        }`
      );
    } catch (error: any) {
      setOutput(`// Error:\n${error.toString()}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Code Editor</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Editor
            height={height}
            defaultLanguage={defaultLanguage}
            defaultValue={defaultValue}
            theme="vs-dark"
            onMount={handleEditorDidMount}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              scrollBeyondLastLine: false,
              automaticLayout: true,
            }}
          />
        </div>
        <div className="bg-black text-white p-4 rounded h-40 overflow-auto font-mono">
          {output || "// Output will appear here"}
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={executeCode} disabled={isLoading} className="w-full">
          {isLoading ? "Executing..." : "Run Code"}
        </Button>
      </CardFooter>
    </Card>
  );
}
