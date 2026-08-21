import { useState } from 'react';
import {
  Sparkles,
  ShieldAlert,
  Layers,
  SunMedium,
  Feather,
  Hand,
  CheckCircle2,
  Calendar,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  Info
} from 'lucide-react';
import { CONDITIONS_SERVICES } from '../data/clinicData';
import { ConditionService } from '../types';

interface ServicesPageProps {
  onSelectCondition: (condition: ConditionService) => void;
  onOpenBooking: (type?: 'clinic' | 'teleconsultation', note?: string) => void;
}

export default function ServicesPage({ onSelectCondition, onOpenBooking }: ServicesPageProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'clinical' | 'hair-nail'>('all');

  const iconMap: Record<string, typeof Sparkles> = {
    Sparkles,
    ShieldAlert,
    Layers,
    SunMedium,
    Feather,
    Hand,
  };

  const filteredServices = CONDITIONS_SERVICES.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Page Header Banner */}
      <section className="bg-slate-900 text-white py-14 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/80 border border-teal-500/40 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Evidence-Based Skin Care</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Conditions &amp; Clinical Services
            </h1>
            <p className="mt-3 text-slate-300 text-base sm:text-lg leading-relaxed">
              Comprehensive diagnosis and individualized therapeutic protocols for chronic, recurrent, and acute skin, hair, and nail disorders.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Conditions ({CONDITIONS_SERVICES.length})
            </button>

            <button
              onClick={() => setActiveCategory('clinical')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === 'clinical'
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Clinical Skin Diseases
            </button>

            <button
              onClick={() => setActiveCategory('hair-nail')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === 'hair-nail'
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Hair &amp; Nail Care
            </button>
          </div>

          <span className="text-xs text-slate-500 font-medium hidden sm:inline-block">
            Showing {filteredServices.length} specialized clinical areas
          </span>
        </div>

        {/* Clinical Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const Icon = iconMap[service.iconName] || Sparkles;
            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md hover:border-teal-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Badge & Icon */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 border border-teal-100">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200/60">
                      {service.category === 'hair-nail' ? 'Hair & Nail' : 'Clinical Skin'}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-teal-700 mt-0.5">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Common Symptoms Preview */}
                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                      Common Symptoms:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-700">
                      {service.commonSymptoms.slice(0, 3).map((sym, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span>{sym}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom Actions */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectCondition(service)}
                    className="text-xs font-bold text-teal-700 hover:text-teal-900 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Full Medical Approach</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenBooking('clinic', service.title)}
                    className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all shadow-xs cursor-pointer"
                  >
                    Book Slot
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Educational Advisory Box: Dangers of OTC Steroids */}
        <div className="bg-amber-50 rounded-3xl p-6 sm:p-8 border border-amber-200 text-amber-900 space-y-3">
          <div className="flex items-center gap-2 font-bold text-sm sm:text-base text-amber-950">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
            <span>Patient Advisory: Avoid Self-Medicating with Over-The-Counter Steroid Creams</span>
          </div>
          <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
            In districts like Kaimur, many patients with fungal ringworm (Daad/Khaaj) or face acne use over-the-counter mixed steroid creams (e.g. combination clobetasol, betamethasone tubes). These provide temporary false relief but cause severe permanent skin thinning, redness, facial hair growth, and resistant multi-drug fungal infections. Always get a formal clinical evaluation from a qualified MBBS doctor.
          </p>
        </div>

        {/* Bottom Consultation CTA */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-extrabold text-white">
              Experiencing Persistent Skin or Hair Problems?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Do not let untreated conditions worsen. Schedule your consultation with Dr. Sumit Kumar in Bhabua today.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onOpenBooking('clinic')}
              className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all cursor-pointer"
            >
              Book In-Clinic Visit
            </button>
            <button
              onClick={() => onOpenBooking('teleconsultation')}
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm px-5 py-3.5 rounded-xl border border-slate-700 transition-all cursor-pointer"
            >
              Book Teleconsultation
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
