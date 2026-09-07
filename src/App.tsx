import { Route, Routes } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Contact2Page from "@/pages/Contact2Page";
import Home5Page from "@/pages/Home5Page";
import Portfolio3Page from "@/pages/Portfolio3Page";
import PortfolioDetails1Page from "@/pages/PortfolioDetails1Page";
import PortfolioDetails3Page from "@/pages/PortfolioDetails3Page";
import NotFoundPage from "@/pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout headerStyle={2} footerStyle={2} />}>
        <Route path="/contact-2" element={<Contact2Page />} />
        <Route path="/portfolio-3" element={<Portfolio3Page />} />
        <Route path="/portfolio-details-1/:slug" element={<PortfolioDetails1Page />} />
        <Route path="/portfolio-details-3/:slug" element={<PortfolioDetails3Page />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      
      <Route element={<MainLayout headerStyle={5} footerStyle={5} />}>
        <Route path="/" element={<Home5Page />} />
        <Route path="/index-dark" element={<Home5Page />} />
        <Route path="/index-5" element={<Home5Page />} />
        <Route path="/index-5-dark" element={<Home5Page />} />
      </Route>
    </Routes>
  );
}
