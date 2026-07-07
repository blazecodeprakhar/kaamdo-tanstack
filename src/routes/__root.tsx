import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import iconUrl from "../assets/icon.png?url";
import { reportClientError } from "../lib/error-reporting";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Toaster } from "sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-extrabold text-navy">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-navy">Page not found</h2>
        <p className="mt-2 text-sm text-text-muted">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-glow"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  reportClientError(error, { boundary: "tanstack_root_error_component" });

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-navy">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-text-muted">
          Something went wrong. Try refreshing or head home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border-2 border-navy px-5 py-2.5 text-sm font-semibold text-navy">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "KaamDo - Find Verified Daily Wage Workers Near You | Kaam Sabko, Samman Sabko" },
      { name: "description", content: "KaamDo is India's first OTP-based on-demand workforce platform - book verified electricians, plumbers, painters, masons, helpers and more. Fair prices. On-time service." },
      { name: "author", content: "KaamDo" },
      { property: "og:site_name", content: "KaamDo" },
      { property: "og:title", content: "KaamDo - Right People. Right Work. Better Tomorrow." },
      { property: "og:description", content: "India's first OTP-based on-demand workforce platform. Verified workers, fair pricing, on-time service." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: iconUrl },
      { rel: "apple-touch-icon", href: iconUrl },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <Toaster richColors position="top-center" />
    </QueryClientProvider>
  );
}
