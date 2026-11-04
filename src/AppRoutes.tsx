import { Routes, Route } from 'react-router-dom';
import { RootLayout } from './components/layout/RootLayout';
import { Home } from './pages/Home';
import { Branch } from './pages/Branch';
import { Schedule } from './pages/Schedule';
import { Contact } from './pages/Contact';
import { Portal } from './pages/Portal';
import { TermsOfService } from './pages/TermsOfService';
import { PrivacyPolicy } from './pages/PrivacyPolicy';

// Shared route tree used by both the browser (BrowserRouter) and the
// static pre-render (StaticRouter), so client and build stay in sync.
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="branch/:id" element={<Branch />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="contact" element={<Contact />} />
        <Route path="portal" element={<Portal />} />
        <Route path="terms-of-service" element={<TermsOfService />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
      </Route>
    </Routes>
  );
}

// The routes that get pre-rendered to static HTML at build time.
export const prerenderRoutes = [
  '/',
  '/branch/electrical',
  '/branch/underground',
  '/branch/compressed-air',
  '/schedule',
  '/contact',
  '/portal',
  '/terms-of-service',
  '/privacy-policy',
];
