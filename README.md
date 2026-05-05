# Nate Libby Landing Page

A high-converting landing page for Nate Libby, helping truck drivers learn about IUL (Indexed Universal Life) insurance as a long-term financial strategy.

Built with **Next.js 14 App Router**, **TypeScript**, and **Tailwind CSS v4**.

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the page.

## Project Structure

```
src/
  app/
    layout.tsx       # Root layout + metadata
    page.tsx         # Landing page (assembles all sections)
    globals.css      # Tailwind import + base styles (system fonts)
  components/
    Hero.tsx         # Hero section with headline and CTA
    WhyPlan.tsx      # Why truckers need a financial plan
    IULExplainer.tsx # Plain-English IUL explanation
    WhyNate.tsx      # Why talk with Nate
    QuizForm.tsx     # Multi-step qualifier quiz + lead capture form
    FinalCTA.tsx     # Final call to action
    Footer.tsx       # Footer with disclaimer
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |

## Disclaimer

This site is for informational purposes only and does not constitute financial, tax, or legal advice. Speak with a licensed professional before making financial decisions.
