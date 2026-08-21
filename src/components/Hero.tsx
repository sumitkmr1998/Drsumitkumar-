import { Calendar, Video, ShieldCheck, CheckCircle2, Award, Clock, MapPin, Sparkles, PhoneCall, ChevronRight } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';

interface HeroProps {
  onOpenBooking: (type: 'clinic' | 'teleconsultation') => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const trustBadges = [
    { title: 'MBBS Qualified', subtitle: 'Rigorous Clinical Training', icon: Award },
    { title: 'Medical Ethics Compliant', subtitle: 'Evidence-Based Protocols', icon: ShieldCheck },
    { title: 'Secure Teleconsultation', subtitle: 'Video & Audio Available', icon: Video },
    { title: 'Advanced Laser Tech', subtitle: 'Diode, Pico & MNRF', icon: Sparkles },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-950 via-slate-900 to-slate-950 text-white pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* Background Subtle Medical Grid Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      {/* Soft Glow Accents */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Headline & Copy (Left Column) */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Top Location / Practice Pill */}
            <div className="inline-flex items-center gap-2 bg-teal-900/60 border border-teal-500/30 text-teal-300 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
              <span>Skin Care &amp; Laser Clinic • Bhabua, Bihar</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Advanced Medical Care for Skin Conditions in <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-200 to-cyan-300">Bhabua</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Evidence-based clinical care for skin, hair, and nail conditions, powered by modern medical procedural technology under the guidance of <strong className="text-white font-semibold">Dr. Sumit Kumar (MBBS)</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onOpenBooking('clinic')}
                className="w-full sm:w-auto bg-teal-600 hover:bg-teal-500 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-teal-900/30 hover:shadow-teal-600/30 transition-all flex items-center justify-center gap-2.5 text-base cursor-pointer transform active:scale-98"
                id="hero-book-clinic-btn"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Clinic Visit</span>
              </button>

              <button
                onClick={() => onOpenBooking('teleconsultation')}
                className="w-full sm:w-auto bg-slate-800/90 hover:bg-slate-700/90 text-slate-100 border border-slate-700 font-bold px-7 py-3.5 rounded-xl hover:border-slate-600 transition-all flex items-center justify-center gap-2.5 text-base cursor-pointer"
                id="hero-book-teleconsultation-btn"
              >
                <Video className="w-5 h-5 text-teal-400" />
                <span>Book Teleconsultation</span>
              </button>
            </div>

            {/* Quick Consultation Notes */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>No Long Waiting Times</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Official Digital Prescriptions</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>In-Clinic Sterilized Tech</span>
              </div>
            </div>

          </div>

          {/* Clinical Credential & Practice Summary Card (Right Column) */}
          <div className="lg:col-span-5">
            <div className="relative bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
              
              {/* Doctor Header Banner inside Card */}
              <div className="flex items-start gap-4 pb-6 border-b border-slate-800">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-teal-700 to-cyan-700 text-white flex items-center justify-center shadow-lg shrink-0 font-bold text-2xl">
                  DS
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-white">Dr. Sumit Kumar</h2>
                    <span className="bg-teal-900/80 text-teal-300 text-xs px-2 py-0.5 rounded font-bold border border-teal-700/50">
                      MBBS
                    </span>
                  </div>
                  <p className="text-sm text-teal-400 font-medium mt-0.5">
                    Experienced Doctor for Skin Conditions
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    S/O Dr. Tarun Kumar Singh
                  </p>
                </div>
              </div>

              {/* Clinic Fast Facts */}
              <div className="py-5 space-y-3.5 text-sm">
                <div className="flex items-start gap-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Clinic Location</span>
                    <span className="text-xs text-slate-300">In front of Devi Ji Mandir, Ward No. 3, Bhabua (Bihar)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <Clock className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Consultation Hours</span>
                    <span className="text-xs text-slate-300">Monday – Saturday: 10:00 AM – 5:00 PM</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <PhoneCall className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Direct Helpline / WhatsApp</span>
                    <a
                      href={`tel:${CLINIC_CONTACT.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-teal-300 hover:underline font-medium text-xs sm:text-sm block"
                    >
                      {CLINIC_CONTACT.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Inquiry Button */}
              <div className="pt-4 border-t border-slate-800">
                <a
                  href={CLINIC_CONTACT.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600/90 hover:bg-emerald-600 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm transition-colors shadow-md"
                  id="hero-quick-whatsapp-cta"
                >
                  <span>Quick WhatsApp Query</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Trust Badges Grid */}
        <div className="mt-14 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {trustBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 sm:p-5 flex items-start gap-3.5 hover:border-slate-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-900/50 text-teal-400 flex items-center justify-center shrink-0 border border-teal-700/40">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm sm:text-base leading-tight">
                    {badge.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {badge.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
