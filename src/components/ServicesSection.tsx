import { useState } from 'react';
import { Sparkles, ShieldAlert, Layers, SunMedium, Feather, Hand, CheckCircle2, ChevronRight, Stethoscope, ArrowRight } from 'lucide-react';
import { CONDITIONS_SERVICES } from '../data/clinicData';
import { ConditionService } from '../types';

interface ServicesSectionProps {
  onSelectCondition: (condition: ConditionService) => void;
  onOpenBooking: (type: 'clinic' | 'teleconsultation', defaultNote?: string) => void;
}

const iconMap = {
  Sparkles,
  ShieldAlert,
  Layers,
  SunMedium,
  Feather,
  Hand,
};

export default function ServicesSection({ onSelectCondition, onOpenBooking }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'clinical' | 'hair-nail'>('all');

  const filteredConditions = CONDITIONS_SERVICES.filter((c) => {
    if (activeCategory === 'all') return true;
    return c.category === activeCategory;
  });

  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Stethoscope className="w-3.5 h-3.5 text-teal-600" />
            <span>Clinical Care for Skin Conditions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Conditions Treated
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Evidence-based medical, procedural, and laser solutions for general, allergic, and aesthetic skin disorders.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-xl bg-slate-200/80 border border-slate-300">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-white text-teal-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Conditions (6)
            </button>
            <button
              onClick={() => setActiveCategory('clinical')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === 'clinical'
                  ? 'bg-white text-teal-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Skin &amp; Pigmentation
            </button>
            <button
              onClick={() => setActiveCategory('hair-nail')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === 'hair-nail'
                  ? 'bg-white text-teal-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Hair &amp; Nails
            </button>
          </div>
        </div>

        {/* Conditions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredConditions.map((condition) => {
            const IconComponent = iconMap[condition.iconName as keyof typeof iconMap] || Sparkles;
            return (
              <div
                key={condition.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-teal-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Icon and Category Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-700 group-hover:text-white transition-colors flex items-center justify-center border border-teal-100">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                      {condition.category === 'hair-nail' ? 'Hair & Nail' : 'Skin Clinical'}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                    {condition.title}
                  </h3>
                  <p className="text-xs font-semibold text-teal-600 mt-1 mb-3">
                    {condition.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {condition.description}
                  </p>

                  {/* Common Symptoms List */}
                  <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100 mb-4">
                    <h4 className="text-[11px] font-bold uppercase text-slate-500 tracking-wider mb-2">
                      Key Signs &amp; Symptoms
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {condition.commonSymptoms.slice(0, 3).map((sym, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{sym}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectCondition(condition)}
                    className="text-xs font-bold text-teal-700 hover:text-teal-900 flex items-center gap-1 hover:underline cursor-pointer py-1"
                  >
                    <span>Read Treatment Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenBooking('clinic', `Inquiry regarding ${condition.title}`)}
                    className="text-xs font-bold bg-teal-50 hover:bg-teal-700 text-teal-800 hover:text-white px-3 py-1.5 rounded-lg border border-teal-200 transition-colors cursor-pointer"
                  >
                    Consult
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-12 p-6 rounded-2xl bg-teal-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">
              Unsure which dermatological condition matches your symptoms?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Schedule a clinical examination or video consultation with Dr. Sumit Kumar for an accurate medical diagnosis.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking('clinic')}
            className="shrink-0 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition-colors flex items-center gap-2 text-sm cursor-pointer"
          >
            <span>Book Clinical Evaluation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
