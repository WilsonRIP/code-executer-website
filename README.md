# Online Code Executor

A modern web application that allows you to write and execute code directly in your browser.

## Features

- Clean, modern UI built with shadcn/ui components
- Code editing with syntax highlighting via Monaco Editor
- Support for multiple programming languages
- Real-time code execution in the browser
- Responsive design for all screen sizes

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- shadcn/ui (component library)
- Monaco Editor

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How It Works

The application executes code directly in the browser using a sandboxed JavaScript environment. For languages other than JavaScript, the application provides a simulated environment.

## Security Note

Code execution happens entirely client-side in a sandboxed environment. However, users should be cautious about executing untrusted code.

## License

MIT
