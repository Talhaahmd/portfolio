import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Home5Page from "@/pages/Home5Page";
import ContactPage from "@/pages/ContactPage";
import ResourcesPage from "@/pages/ResourcesPage";
import ClaudeSkillsPage from "@/pages/ClaudeSkillsPage";
import AiWebsitesPage from "@/pages/AiWebsitesPage";
import RoadmapPage from "@/pages/RoadmapPage";
import NotFoundPage from "@/pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout headerStyle={5} footerStyle={5} />}>
        <Route path="/" element={<Home5Page />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/claude-skills" element={<ClaudeSkillsPage />} />
        <Route path="/ai-websites" element={<AiWebsitesPage />} />
        <Route path="/90-days-roadmap" element={<RoadmapPage />} />
      </Route>

      <Route element={<MainLayout headerStyle={2} footerStyle={2} />}>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/* Legacy template URLs */}
      <Route path="/contact-1" element={<Navigate to="/contact" replace />} />
      <Route path="/contact-2" element={<Navigate to="/contact" replace />} />
      <Route path="/index-dark" element={<Navigate to="/" replace />} />
      <Route path="/index-5" element={<Navigate to="/" replace />} />
      <Route path="/index-5-dark" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
