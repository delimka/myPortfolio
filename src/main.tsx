import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { ScrollProvider } from "./context/ScrollContext.tsx";
import "./services/i18n/i18n.ts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ScrollProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ScrollProvider>
);
