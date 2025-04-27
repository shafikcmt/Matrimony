// "use client";

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ThemeProvider } from "next-themes";
// import { useState } from "react";

// // Only import ReactQueryDevtools in development
// let ReactQueryDevtools: React.ComponentType<any> | null = null;
// if (process.env.NODE_ENV === 'development') {
//   // Dynamic import to avoid loading in production
//   import('@tanstack/react-query-devtools').then((d) => {
//     ReactQueryDevtools = d.ReactQueryDevtools;
//   });
// }

// export function Providers({ children }: { children: React.ReactNode }) {
//   const [queryClient] = useState(
//     () =>
//       new QueryClient({
//         defaultOptions: {
//           queries: {
//             staleTime: 60 * 1000, // 1 minute
//             refetchOnWindowFocus: false,
//           },
//         },
//       })
//   );

//   return (
//     <ThemeProvider
//       attribute="class"
//       defaultTheme="system"
//       enableSystem
//       disableTransitionOnChange
//     >
//       <QueryClientProvider client={queryClient}>
//         {children}
//       </QueryClientProvider>
//       {ReactQueryDevtools && <ReactQueryDevtools initialIsOpen={false} />}
//     </ThemeProvider>
//   );
// } 