import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from './components/layout/RootLayout';
import { Home } from './pages/Home';
import { Branch } from './pages/Branch';
import { Schedule } from './pages/Schedule';
import { Contact } from './pages/Contact';
import { Portal } from './pages/Portal';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="branch/:id" element={<Branch />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portal" element={<Portal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
