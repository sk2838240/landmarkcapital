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
const AIF = lazy(() => import("@/pages/funds/AIF"));
const Portfolio = lazy(() => import("@/pages/Portfolio"));
const ServiceDetail = lazy(() => import("@/pages/services/ServiceDetail"));

const Blogs = lazy(() => import("@/pages/knowledge/Blogs"));
const BlogDetail = lazy(() => import("@/pages/knowledge/BlogDetail"));
const ReportDetail = lazy(() => import("@/pages/knowledge/ReportDetail"));
const FAQ = lazy(() => import("@/pages/knowledge/FAQ"));
const NewsRoom = lazy(() => import("@/pages/NewsRoom"));

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
  return <Navigate to={slug ? `/blog/${slug}` : "/newsroom"} replace />;
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
              <Route path="/structures" element={<Strategies />} />
              <Route path="/funds/multiplier" element={<MultiplierFund />} />
              <Route path="/funds/opportunity" element={<OpportunityFund />} />
              <Route path="/structures/aif" element={<AIF />} />
              <Route path="/structures/lvf" element={<LVF />} />
              <Route path="/structures/managed-accounts" element={<DealByDeal />} />
              <Route path="/structures/spv" element={<SPV />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/service/:slug" element={<ServiceDetail />} />
              <Route path="/opportunities" element={<Opportunities />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/transactions/:id" element={<TransactionDetail />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/newsroom" element={<NewsRoom />} />
              <Route path="/insights" element={<Blogs />} />
              <Route path="/insights/faq" element={<FAQ />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/report/:slug" element={<ReportDetail />} />
              <Route path="/insights/:slug" element={<LegacyBlogRedirect />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/disclaimer" element={<Disclaimer />} />

              {/* Legacy redirects */}
              <Route path="/our-business" element={<Navigate to="/about" replace />} />
              <Route path="/our-people" element={<Navigate to="/leadership" replace />} />
              <Route path="/strategies" element={<Navigate to="/structures" replace />} />
              <Route path="/strategies/multiplier" element={<Navigate to="/funds/multiplier" replace />} />
              <Route path="/strategies/opportunity" element={<Navigate to="/funds/opportunity" replace />} />
              <Route path="/strategies/aif" element={<Navigate to="/structures/aif" replace />} />
              <Route path="/strategies/lvf" element={<Navigate to="/structures/lvf" replace />} />
              <Route path="/strategies/deal-by-deal" element={<Navigate to="/structures/managed-accounts" replace />} />
              <Route path="/strategies/spv" element={<Navigate to="/structures/spv" replace />} />
              <Route path="/strategies/spv-old" element={<Navigate to="/structures/spv" replace />} />
              <Route path="/funds" element={<Navigate to="/structures" replace />} />
              <Route path="/funds/lvf" element={<Navigate to="/structures/lvf" replace />} />
              <Route path="/funds/spv" element={<Navigate to="/structures/spv" replace />} />
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
