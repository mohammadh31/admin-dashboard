import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import ReactDOM from "react-dom";
import App from "./App";
import Dashboard from "./pages/dashboard/Dashboard";
import ManageTeam from "./pages/manageTeam/ManageTeam";
import ContactsInformation from "./pages/contactsInformation/ContactsInformation";
import InvoicesBalances from "./pages/invoicesBalances/InvoicesBalances";
import ProfileForm from "./pages/profileForm/ProfileForm";
import Calendar from "./pages/calendar/Calendar";
import FAQPage from "./pages/FAQPage/FAQPage";
import BarChart from "./pages/barChart/BarChart";
import PieChart from "./pages/pieChart/PieChart";
import LineChart from "./pages/lineChart/LineChart";
import GeographyChart from "./pages/geographyChart/GeographyChart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="/team" element={<ManageTeam />} />
      <Route path="/contacts" element={<ContactsInformation />} />
      <Route path="/invoices" element={<InvoicesBalances />} />
      <Route path="/form" element={<ProfileForm />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/bar" element={<BarChart />} />
      <Route path="/pie" element={<PieChart />} />
      <Route path="/line" element={<LineChart />} />
      <Route path="/geography" element={<GeographyChart />} />
    </Route>
  )
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
