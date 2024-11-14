import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import CategoryPage from "../pages/CategoryPage";
import AuthLayout from "../Layouts/AuthLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="/category/01" replace />
            },
            {
                path: "category/:id",
                element: <CategoryPage />,
                loader: async ({ params }) => {
                    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`);
                    if (!response.ok) {
                        throw new Error("Failed to fetch data");
                    }
                    return response.json();
                } 
            }
        ]
    },
    {
        path: "news",
        element: <h2>News layout</h2>
    },
    {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <h2>Login page</h2>
            },
            {
                path: "/auth/register",
                element: <h2>Registration page</h2>
            }
        ]
    },
    {
        path: "*",
        element: <h2>Error</h2>
    }
]);

export default router;
