// import React from "react";
import { createRoot } from "react-dom/client";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="candy" animal="dog" breed="superduper" />
      <Pet name="fishy" animal="fishi" breed="beta" />
      <Pet name="ron" animal="ape" breed="singular" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
