import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { RootLayout } from './components/layout/RootLayout';
import { Home } from './pages/Home';
import { Branch } from './pages/Branch';
import { Schedule } from './pages/Schedule';
import { Contact } from './pages/Contact';
import { Portal } from './pages/Portal';
import { TermsOfService } from './pages/TermsOfService';
import { PrivacyPolicy } from './pages/PrivacyPolicy';

export default function App() {

  return (
    <HelmetProvider>
      <BrowserRouter>
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
      </BrowserRouter>
    </HelmetProvider>
  );
}
