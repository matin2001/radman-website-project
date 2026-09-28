import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PageLayout from "./components/PageLayout";
import Home from "./pages/Home";
import Overview from "./pages/Company/Overview";
import Vision from "./pages/Company/Vision";
import Governance from "./pages/Company/Governance";
import Partnership from "./pages/Company/Partnership";
import Careers from "./pages/Company/Careers";
import Investment from "./pages/Approach/Investment";
import Sustainability from "./pages/Approach/Sustainability";
import Energy from "./pages/Business/Energy";
import CapitalMarket from "./pages/Business/CapitalMarket";
import CommodityTrading from "./pages/Business/CommodityTrading";
import Mining from "./pages/Business/Mining";
import ContactUs from "./pages/ContactUs";
// import Reports from "./pages/Insights/Reports";
import Perspectives from "./pages/Insights/Perspectives";
import Perspective1 from "./pages/Insights/Perspective1";
import Perspective3 from "./pages/Insights/Perspective3";
import Perspective2 from "./pages/Insights/Perspective2";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/fa" replace />} />

        <Route path="/:lang" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="Company/Overview" element={<Overview />} />
          <Route path="Company/Vision" element={<Vision />} />
          <Route path="Company/Governance" element={<Governance />} />
          <Route path="Company/Partnership" element={<Partnership />} />
          <Route path="Company/Careers" element={<Careers />} />
          <Route path="Approach/Investment" element={<Investment />} />
          <Route path="Approach/Sustainability" element={<Sustainability />} />
          <Route path="Businesses/Energy" element={<Energy />} />
          <Route path="Businesses/CapitalMarket" element={<CapitalMarket />} />
          <Route
            path="Businesses/CommodityTrading"
            element={<CommodityTrading />}
          />
          <Route path="Businesses/Mining" element={<Mining />} />
          {/* <Route path="Insights/Reports" element={<Reports />} /> */}
          <Route path="Insights/Perspectives" element={<Perspectives />} />
          <Route path="Insights/Perspective1" element={<Perspective1 />} />
          <Route path="Insights/Perspective2" element={<Perspective2 />} />
          <Route path="Insights/Perspective3" element={<Perspective3 />} />
          <Route path="ContactUs" element={<ContactUs />} />
        </Route>

        <Route path="*" element={<Navigate to="/fa" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
