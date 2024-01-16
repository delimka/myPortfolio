// App.tsx
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Stack from "./components/Stack/Stack";
import Projects from "./components/Projects/Projects";
import Blog from "./components/Blog/Blogs";
import BlogPost from "./components/Blog/BlogPage/BlogPost";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import BlogPage from "./components/Blog/BlogPage/BlogPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={"Loading..."}>
              <Hero />
              <Stack />
              <Projects />
              <Blog />
            </Suspense>
          }
        />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
