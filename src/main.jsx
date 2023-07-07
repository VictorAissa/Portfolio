import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import App from "./App.jsx";
import ProjectDetails from "./pages/ProjectDetails";
import Error from "./pages/Error";
import About from "./containers/About";
import Hero from "./containers/Hero";
import Journey from "./containers/Journey";
import Projects from "./containers/Projects";
import Skills from "./containers/Skills";
import Contact from "./containers/Contact";
import "./main.css";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route
                index
                element={
                    <>
                        <Hero />
                        <About />
                        <Journey />
                        <Projects />
                        <Skills />
                        <Contact />
                    </>
                }
            />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="*" element={<Error />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
