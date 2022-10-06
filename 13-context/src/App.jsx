import { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Details from "./Details";
import SearchParams from "./SearchParams";
import PetContext from "./PetContext";

const queryClient = new QueryClient();

const App = () => {
  const adoptedPet = useState(null);
  return (
    <PetContext.Provider value={adoptedPet}>
      <div>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <header>
              <Link to="/">Adopt Me!</Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </QueryClientProvider>
        </BrowserRouter>
      </div>
    </PetContext.Provider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
