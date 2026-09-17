import { createBrowserRouter } from "react-router";
import Home from './index.js'

const router = createBrowserRouter([
    {index: true, Component: Home},
    {
        path: "viewer",
        lazy: {
            Component: () => import('./viewer/root.js').then(module => module.default)
        }
    }
], {
    basename: import.meta.env.BASE_URL,
});

export default router

