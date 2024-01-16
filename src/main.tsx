import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { ScrollProvider } from "./context/ScrollContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ScrollProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ScrollProvider>
);
