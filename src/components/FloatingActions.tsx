import { useState, useEffect } from 'react';
import { MessageSquare, Phone, Calendar } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export default function FloatingActions({ onOpenBooking }: FloatingActionsProps) {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPrompt(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* WhatsApp Floating Action Button (Desktop & Tablet) */}
      <div className="fixed bottom-20 sm:bottom-6 right-6 z-40 flex items-center gap-3">
        {showPrompt && (
          <div className="hidden sm:flex items-center gap-2 bg-slate-900 text-white text-xs font-semibold px-3.5 py-2 rounded-xl shadow-xl border border-slate-800 animate-in fade-in slide-in-from-right-4 duration-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Have a skin query? Chat on WhatsApp</span>
            <button
              onClick={() => setShowPrompt(false)}
              className="text-slate-400 hover:text-white ml-1 cursor-pointer"
            >
              &times;
            </button>
          </div>
        )}

        <a
          href={CLINIC_CONTACT.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl hover:shadow-emerald-600/40 hover:scale-105 transition-all group"
          aria-label="Chat with Dr. Sumit Kumar on WhatsApp"
          id="floating-whatsapp-btn"
        >
          <MessageSquare className="w-7 h-7 group-hover:scale-110 transition-transform" />
        </a>
      </div>

      {/* Sticky Bottom Action Bar for Mobile Smartphones */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 flex items-center gap-3 shadow-2xl">
        <a
          href={`tel:${CLINIC_CONTACT.phone.replace(/[^0-9+]/g, '')}`}
          className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors"
          id="mobile-sticky-call-btn"
        >
          <Phone className="w-4 h-4 text-teal-700" />
          <span>Call Clinic</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex-1 bg-teal-700 hover:bg-teal-800 text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
          id="mobile-sticky-book-btn"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Appointment</span>
        </button>
      </div>
    </>
  );
}
