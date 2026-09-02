import { lazy, Suspense } from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import { MotionConfig } from "framer-motion";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { PageTransition } from "@/components/layout/PageTransition";
import { useLenis } from "@/hooks/useLenis";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Strategies = lazy(() => import("@/pages/Strategies"));
const Opportunities = lazy(() => import("@/pages/Opportunities"));
const Transactions = lazy(() => import("@/pages/Transactions"));
const TransactionDetail = lazy(() => import("@/pages/TransactionDetail"));
const Leadership = lazy(() => import("@/pages/Leadership"));
const Contact = lazy(() => import("@/pages/Contact"));
const Disclaimer = lazy(() => import("@/pages/Disclaimer"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const MultiplierFund = lazy(() => import("@/pages/funds/MultiplierFund"));
const OpportunityFund = lazy(() => import("@/pages/funds/OpportunityFund"));
const LVF = lazy(() => import("@/pages/funds/LVF"));
const DealByDeal = lazy(() => import("@/pages/funds/DealByDeal"));
const SPV = lazy(() => import("@/pages/funds/SPV"));

const Blogs = lazy(() => import("@/pages/knowledge/Blogs"));
const BlogDetail = lazy(() => import("@/pages/knowledge/BlogDetail"));
const FAQ = lazy(() => import("@/pages/knowledge/FAQ"));

function PageFallback() {
  return (
    <div className="min-h-[100svh] grid place-items-center bg-ivory">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 rounded-full border-2 border-border border-t-crimson-500 animate-spin" />
        <p className="text-xs uppercase tracking-[0.18em] text-slate">Loading</p>
      </div>
    </div>
  );
}

function LegacyBlogRedirect() {
  const { slug } = useParams();
  return <Navigate to={slug ? `/insights/${slug}` : "/insights"} replace />;
}

export default function App() {
  useLenis();

  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <ScrollToTop />
      <main id="main" tabIndex={-1}>
        <Suspense fallback={<PageFallback />}>
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/strategies" element={<Strategies />} />
              <Route path="/strategies/multiplier" element={<MultiplierFund />} />
              <Route path="/strategies/opportunity" element={<OpportunityFund />} />
              <Route path="/strategies/lvf" element={<LVF />} />
              <Route path="/strategies/deal-by-deal" element={<DealByDeal />} />
              <Route path="/strategies/spv" element={<SPV />} />
              <Route path="/opportunities" element={<Opportunities />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/transactions/:id" element={<TransactionDetail />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/insights" element={<Blogs />} />
              <Route path="/insights/faq" element={<FAQ />} />
              <Route path="/insights/:slug" element={<BlogDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/disclaimer" element={<Disclaimer />} />

              {/* Legacy redirects */}
              <Route path="/our-business" element={<Navigate to="/about" replace />} />
              <Route path="/our-people" element={<Navigate to="/leadership" replace />} />
              <Route path="/funds" element={<Navigate to="/strategies" replace />} />
              <Route path="/funds/multiplier" element={<Navigate to="/strategies/multiplier" replace />} />
              <Route path="/funds/opportunity" element={<Navigate to="/strategies/opportunity" replace />} />
              <Route path="/funds/lvf" element={<Navigate to="/strategies/lvf" replace />} />
              <Route path="/funds/spv" element={<Navigate to="/strategies/deal-by-deal" replace />} />
              <Route path="/strategies/spv-old" element={<Navigate to="/strategies/deal-by-deal" replace />} />
              <Route path="/knowledge" element={<Navigate to="/insights" replace />} />
              <Route path="/knowledge/blogs" element={<Navigate to="/insights" replace />} />
              <Route path="/knowledge/blogs/:slug" element={<LegacyBlogRedirect />} />
              <Route path="/knowledge/faq" element={<Navigate to="/insights/faq" replace />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </Suspense>
      </main>
      <Footer />
    </MotionConfig>
  );
}
