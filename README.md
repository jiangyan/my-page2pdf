# URL to PDF Converter with 3D Background

This is a [Next.js](https://nextjs.org) project that combines a URL to PDF converter with a dynamic 3D background using Three.js.

## Features

- Convert any URL to a PDF document
- Dynamic 3D background with a rotating duck model
- Responsive design with a clean user interface
- Support for Enter key to trigger PDF conversion
- Clear button to easily remove entered URL

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for building web applications
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) - React renderer for Three.js
- [Three.js](https://threejs.org/) - 3D library for JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components built with Radix UI and Tailwind CSS

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How It Works

1. Enter a URL in the input field.
2. (Optional) Click the 'X' icon to clear the input if needed.
3. Click the "Let's PDF" button or press Enter.
4. The app will send the URL to a Cloudflare Worker, which generates the PDF.
5. The PDF will open in a new tab.

## Project Structure

- `components/pdf-converter.tsx`: Main component for the PDF converter UI and 3D background
- `app/page.tsx`: Root page component
- `app/layout.tsx`: Root layout component
- `public/assets/3d/duck.glb`: 3D model for the duck

## Customization

You can customize the 3D background by modifying the `Duck` component in `components/pdf-converter.tsx`. The current implementation uses a duck model, but you can replace it with any other 3D model of your choice.

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Three Fiber Documentation](https://docs.pmnd.rs/react-three-fiber)
- [Three.js Documentation](https://threejs.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
