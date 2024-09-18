import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import MainLayout from "../components/layout/MainLayout";
import DashboardPage from "../Pages/dashboard";
import LoginPage from "../Pages/LoginPage";
import Request from "../Pages/Request";
import Notification from "../Pages/Notification";
import Resources from "../Pages/Resources";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />
      },
      {
        path: "dashboard",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <DashboardPage />
            
          },
          {
            path: "Request",
            element: <Request/>
          },
          {
            path: "Notification",
            element: <Notification/>
          },
          {
            path: "Resources",
            element: <Resources/>
          }
        ]
      }
      
    ]
  }
]);