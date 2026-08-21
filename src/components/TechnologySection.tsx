import { Zap, Sparkles, Activity, Droplets, Clock, Check, ShieldCheck, ArrowRight, Info } from 'lucide-react';
import { CLINIC_TECHNOLOGIES } from '../data/clinicData';
import { ClinicTechnology } from '../types';

interface TechnologySectionProps {
  onSelectTechnology: (tech: ClinicTechnology) => void;
  onOpenBooking: (type: 'clinic' | 'teleconsultation', note?: string) => void;
}

const techIconMap = {
  Zap,
  Sparkle: Sparkles,
  Activity,
  Droplets,
};

export default function TechnologySection({ onSelectTechnology, onOpenBooking }: TechnologySectionProps) {
  return (
    <section id="technology" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-cyan-600" />
            <span>State-of-the-Art Equipment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Advanced Clinic Technology &amp; Procedures
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Gold-standard dermatological and laser systems available in-clinic in Bhabua for targeted, safe, and effective results.
          </p>
        </div>

        {/* 4 Technology Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {CLINIC_TECHNOLOGIES.map((tech) => {
            const IconComponent = techIconMap[tech.iconName as keyof typeof techIconMap] || Zap;
            return (
              <div
                key={tech.id}
                className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50/50 via-white to-slate-50/70 p-6 sm:p-8 hover:border-teal-400 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge & Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-xl bg-teal-800 text-white flex items-center justify-center shadow-md shrink-0">
                        <IconComponent className="w-6 h-6 text-teal-200" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 block">
                          {tech.shortTag}
                        </span>
                        <h3 className="text-2xl font-extrabold text-slate-900 leading-snug">
                          {tech.name}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full shrink-0">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{tech.sessionDuration}</span>
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className="text-sm font-semibold text-slate-700 mb-3">
                    {tech.tagline}
                  </p>

                  {/* Tech Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {tech.description}
                  </p>

                  {/* Primary Clinical Indications */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                      Primary Clinical Uses:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {tech.primaryUses.map((use, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span>{use}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Suitable For Callout */}
                  <div className="p-3.5 rounded-xl bg-teal-50/60 border border-teal-100 text-xs text-slate-700 flex items-start gap-2.5 mb-6">
                    <Info className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-teal-900 block font-semibold">Ideal Candidate:</strong>
                      <span>{tech.suitableFor}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectTechnology(tech)}
                    className="text-xs sm:text-sm font-bold text-slate-700 hover:text-teal-700 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>View Equipment Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onOpenBooking('clinic', `Procedure inquiry: ${tech.name}`)}
                    className="bg-teal-700 hover:bg-teal-800 text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-lg shadow-xs transition-colors cursor-pointer"
                  >
                    Book Procedure
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Safety & Protocol Assurance Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900 text-slate-200 border border-slate-800 grid sm:grid-cols-3 gap-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-teal-400 shrink-0" />
            <div>
              <h5 className="font-bold text-white text-sm">Strict Sterilization</h5>
              <p className="text-xs text-slate-400">Autoclaved instruments &amp; single-use tips</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Zap className="w-8 h-8 text-cyan-400 shrink-0" />
            <div>
              <h5 className="font-bold text-white text-sm">Calibrated Energy Levels</h5>
              <p className="text-xs text-slate-400">Customized fluence suited for Indian skin</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Activity className="w-8 h-8 text-emerald-400 shrink-0" />
            <div>
              <h5 className="font-bold text-white text-sm">Doctor Administered</h5>
              <p className="text-xs text-slate-400">Procedures performed under direct MBBS guidance</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
