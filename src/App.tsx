// App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import SuspenseBackground from "./components/SuspenseBackground/SuspenseBackground";
const Stack = lazy(() => import("./components/Stack/Stack"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Blog = lazy(() => import("./components/Blog/Blogs"));
const BlogPost = lazy(() => import("./pages/BlogPage/BlogPost"));
const BlogPage = lazy(() => import("./pages/BlogPage/BlogPage"));

import ReactGA from "react-ga";

ReactGA.initialize("6699610027");

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<SuspenseBackground />}>
              <Hero />
              <Stack />
              <Projects />
              <Blog />
            </Suspense>
          }
        />
        <Route
          path="/blog"
          element={
            <Suspense fallback={<SuspenseBackground />}>
              <BlogPage />
            </Suspense>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <Suspense fallback={<SuspenseBackground />}>
              <BlogPost />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
