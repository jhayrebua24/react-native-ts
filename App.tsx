import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RootApp from "./src/RootApp";

// Create a client
const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <RootApp />
    </QueryClientProvider>
  );
}

export default App;
