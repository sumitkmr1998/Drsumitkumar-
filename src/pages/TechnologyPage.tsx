import {
  Zap,
  Sparkles,
  Activity,
  Droplets,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Calendar,
  ArrowRight,
  Info
} from 'lucide-react';
import { CLINIC_TECHNOLOGIES } from '../data/clinicData';
import { ClinicTechnology } from '../types';

interface TechnologyPageProps {
  onSelectTechnology: (tech: ClinicTechnology) => void;
  onOpenBooking: (type?: 'clinic' | 'teleconsultation', note?: string) => void;
}

export default function TechnologyPage({ onSelectTechnology, onOpenBooking }: TechnologyPageProps) {
  const iconMap: Record<string, typeof Zap> = {
    Zap,
    Sparkle: Sparkles,
    Activity,
    Droplets,
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Page Header Banner */}
      <section className="bg-slate-900 text-white py-14 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/80 border border-teal-500/40 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Zap className="w-3.5 h-3.5" />
              <span>Medical-Grade Technology</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Advanced Lasers &amp; Procedures
            </h1>
            <p className="mt-3 text-slate-300 text-base sm:text-lg leading-relaxed">
              Equipped with modern energy-based devices and clinical lasers, specifically optimized with contact cooling for darker and medium Indian skin tones.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
        
        {/* Technology Highlights Grid */}
        <div className="space-y-12">
          {CLINIC_TECHNOLOGIES.map((tech, index) => {
            const Icon = iconMap[tech.iconName] || Sparkles;
            const isEven = index % 2 === 1;

            return (
              <div
                key={tech.id}
                className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm hover:border-teal-300 transition-all"
              >
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left / Info Column */}
                  <div className={`lg:col-span-7 space-y-5 ${isEven ? 'lg:order-2' : ''}`}>
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-100">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block">
                          {tech.shortTag}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                          {tech.name}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base font-semibold text-slate-800">
                      {tech.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {tech.description}
                    </p>

                    {/* Primary Uses & Benefits */}
                    <div className="space-y-3 pt-3 border-t border-slate-100">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                        Clinical Applications:
                      </span>
                      <div className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                        {tech.primaryUses.map((use, i) => (
                          <div key={i} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200/60">
                            <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                            <span>{use}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
                      <button
                        onClick={() => onSelectTechnology(tech)}
                        className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-xs transition-all cursor-pointer"
                      >
                        <span>View Detailed Mechanism</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => onOpenBooking('clinic', tech.name)}
                        className="bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-xs transition-all cursor-pointer"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Book Procedure Session</span>
                      </button>
                    </div>
                  </div>

                  {/* Right / Fast Facts Column */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : ''}`}>
                    <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 space-y-5 shadow-lg border border-slate-800">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                          Procedure Fast Facts
                        </span>
                        <span className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-teal-400" />
                          <span>{tech.sessionDuration}</span>
                        </span>
                      </div>

                      <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                        <span className="text-xs font-bold text-white uppercase tracking-wider block">
                          Key Clinical Advantages:
                        </span>
                        <ul className="space-y-2">
                          {tech.keyBenefits.map((ben, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                              <span>{ben}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs space-y-1">
                        <span className="font-bold text-teal-300 block">Ideal Candidate:</span>
                        <p className="text-slate-300">{tech.suitableFor}</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Safety & Protocol Banner */}
        <div className="bg-teal-50 border border-teal-200 rounded-3xl p-6 sm:p-8 space-y-3">
          <div className="flex items-center gap-2 text-teal-900 font-bold text-base">
            <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0" />
            <span>Laser Safety for Indian Fitzpatrick Skin Types III to V</span>
          </div>
          <p className="text-xs sm:text-sm text-teal-950 leading-relaxed">
            Darker skin types have higher epidermal melanin, requiring calibrated pulse widths and active sapphire contact cooling to prevent burns or hyperpigmentation. Under the direct medical oversight of Dr. Sumit Kumar (MBBS), all parameters are customized to your exact skin type and sensitivity.
          </p>
        </div>

      </div>
    </div>
  );
}
