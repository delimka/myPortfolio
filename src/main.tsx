import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./hooks/ThemeContext.tsx";
import { ScrollProvider } from "./hooks/ScrollContext.tsx";
import "./../node_modules/prismjs/themes/prism-dark.css";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <ScrollProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ScrollProvider>
);
