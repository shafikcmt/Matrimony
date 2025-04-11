"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RecoilWrapper from "@/components/RecoilWrapper";
import { useState } from "react";

// Only import ReactQueryDevtools in development
let ReactQueryDevtools: React.ComponentType<any> | null = null;
if (process.env.NODE_ENV === 'development') {
  // Dynamic import to avoid loading in production
  import('@tanstack/react-query-devtools').then((d) => {
    ReactQueryDevtools = d.ReactQueryDevtools;
  });
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1 minute
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilWrapper>{children}</RecoilWrapper>
      {ReactQueryDevtools && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
} 