// App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
// import NavBar from "./components/NavBar/NavBar";
// import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import SuspenseBackground from "./components/SuspenseBackground/SuspenseBackground";
const Stack = lazy(() => import("./components/Stack/Stack"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Blog = lazy(() => import("./components/Blog/Blogs"));
// const BlogPost = lazy(() => import("./pages/BlogPage/BlogPost"));
const BlogPage = lazy(() => import("./pages/BlogPage/BlogPage"));
import PageWrapper from "./../src/components/PageWrapper/PageWrapper";

import ReactGA from "react-ga";

ReactGA.initialize("6699610027");

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<SuspenseBackground />}>
              <PageWrapper>
                <Hero />
                <Stack />
                <Projects />
                <Blog />{" "}
              </PageWrapper>
            </Suspense>
          }
        />
        <Route
          path="/blog/"
          element={
            <PageWrapper>
              <Suspense fallback={<SuspenseBackground />}>
                <BlogPage />
              </Suspense>
            </PageWrapper>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
