import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';

const Home = lazy(() => import('@/pages/Home'));
const Sobre = lazy(() => import('@/pages/Sobre'));
const Produtos = lazy(() => import('@/pages/Produtos'));
const ProdutoDetalhe = lazy(() => import('@/pages/ProdutoDetalhe'));
const Blog = lazy(() => import('@/pages/Blog'));
const BlogPost = lazy(() => import('@/pages/BlogPost'));
const Contato = lazy(() => import('@/pages/Contato'));
const Faq = lazy(() => import('@/pages/Faq'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const Privacidade = lazy(() => import('@/pages/Legal').then((m) => ({ default: m.Privacidade })));
const Termos = lazy(() => import('@/pages/Legal').then((m) => ({ default: m.Termos })));

const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

function PageFrame({ children }: { children: React.ReactNode }) {
  return <motion.div {...pageTransition}>{children}</motion.div>;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<PageFrame><Home /></PageFrame>} />
          <Route path="sobre" element={<PageFrame><Sobre /></PageFrame>} />
          <Route path="produtos" element={<PageFrame><Produtos /></PageFrame>} />
          <Route path="produtos/:slug" element={<PageFrame><ProdutoDetalhe /></PageFrame>} />
          <Route path="blog" element={<PageFrame><Blog /></PageFrame>} />
          <Route path="blog/:slug" element={<PageFrame><BlogPost /></PageFrame>} />
          <Route path="contato" element={<PageFrame><Contato /></PageFrame>} />
          <Route path="faq" element={<PageFrame><Faq /></PageFrame>} />
          <Route path="privacidade" element={<PageFrame><Privacidade /></PageFrame>} />
          <Route path="termos" element={<PageFrame><Termos /></PageFrame>} />
          <Route path="*" element={<PageFrame><NotFound /></PageFrame>} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="*" element={<AnimatedRoutes />} />
      </Route>
    </Routes>
  );
}
