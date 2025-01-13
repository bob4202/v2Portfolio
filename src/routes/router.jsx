import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../components/projects/Projects";
import ProjectDetail from "../pages/ProjectDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/projects/:slug",
    element: <ProjectDetail />,
  },
]);

export default router;
