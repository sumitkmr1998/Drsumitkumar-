import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AppointmentModal from './components/AppointmentModal';
import ProcedureModal from './components/ProcedureModal';
import FloatingActions from './components/FloatingActions';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TechnologyPage from './pages/TechnologyPage';
import TeleconsultationPage from './pages/TeleconsultationPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';

import { ConditionService, ClinicTechnology } from './types';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingMode, setBookingMode] = useState<'clinic' | 'teleconsultation'>('clinic');
  const [bookingNote, setBookingNote] = useState<string>('');

  const [selectedProcedure, setSelectedProcedure] = useState<ConditionService | ClinicTechnology | null>(null);
  const [procedureType, setProcedureType] = useState<'condition' | 'technology' | null>(null);

  const handleOpenBooking = (type: 'clinic' | 'teleconsultation' = 'clinic', note: string = '') => {
    setBookingMode(type);
    setBookingNote(note);
    setIsBookingModalOpen(true);
  };

  const handleSelectCondition = (condition: ConditionService) => {
    setSelectedProcedure(condition);
    setProcedureType('condition');
  };

  const handleSelectTechnology = (tech: ClinicTechnology) => {
    setSelectedProcedure(tech);
    setProcedureType('technology');
  };

  const handleCloseProcedureModal = () => {
    setSelectedProcedure(null);
    setProcedureType(null);
  };

  const handleBookFromModal = (note?: string) => {
    handleOpenBooking('clinic', note || '');
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-teal-700 selection:text-white">
        {/* Auto Scroll to Top on Page Navigation */}
        <ScrollToTop />

        {/* Top Header & Sticky Navigation */}
        <Navbar onOpenBooking={handleOpenBooking} />

        {/* Multi-Page Routes */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenBooking={handleOpenBooking}
                  onSelectCondition={handleSelectCondition}
                  onSelectTechnology={handleSelectTechnology}
                />
              }
            />
            <Route
              path="/about"
              element={<AboutPage onOpenBooking={handleOpenBooking} />}
            />
            <Route
              path="/services"
              element={
                <ServicesPage
                  onSelectCondition={handleSelectCondition}
                  onOpenBooking={handleOpenBooking}
                />
              }
            />
            <Route
              path="/technology"
              element={
                <TechnologyPage
                  onSelectTechnology={handleSelectTechnology}
                  onOpenBooking={handleOpenBooking}
                />
              }
            />
            <Route
              path="/teleconsultation"
              element={<TeleconsultationPage onOpenBooking={handleOpenBooking} />}
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/faqs"
              element={<FAQPage onOpenBooking={handleOpenBooking} />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer & Medical Compliance Disclaimer */}
        <Footer />

        {/* Global Interactive Modals */}
        <AppointmentModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          defaultType={bookingMode}
          defaultNote={bookingNote}
        />

        <ProcedureModal
          item={selectedProcedure}
          type={procedureType}
          onClose={handleCloseProcedureModal}
          onBook={handleBookFromModal}
        />

        {/* Quick Floating WhatsApp & Mobile Sticky Actions */}
        <FloatingActions onOpenBooking={() => handleOpenBooking('clinic')} />
      </div>
    </BrowserRouter>
  );
}
