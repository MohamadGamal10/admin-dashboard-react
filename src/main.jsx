import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Dashboard from "./pages/dashboard/Dashboard";
import Team from "./pages/team/Team";
import Contacts from "./pages/contacts/Contacts";
import Invoices from "./pages/invoices/Invoices";
import Form from "./pages/form/Form";
import Calendar from "./pages/calendar/Calendar";
import FAQ from "./pages/faq/FAQ";
import BarChart from "./pages/barChart/BarChart";
import PieChart from "./pages/pieChart/PieChart";
import Geography from "./pages/geography/Geography";
import NotFound from "./pages/notFound/NotFound";
import LineChart from "./pages/lineChart/LineChart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "invoices",
        element: <Invoices />,
      },
      {
        path: "form",
        element: <Form />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "bar",
        element: <BarChart />,
      },
      {
        path: "pie",
        element: <PieChart />,
      },
      {
        path: "line",
        element: <LineChart />,
      },
      {
        path: "geography",
        element: <Geography />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>,
);
