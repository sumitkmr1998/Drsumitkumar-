import { ShieldCheck, Cpu, HeartHandshake, Sparkles, Award, GraduationCap, Stethoscope, CheckCircle } from 'lucide-react';
import { DOCTOR_PROFILE } from '../data/clinicData';

const iconMap = {
  ShieldCheck,
  Cpu,
  HeartHandshake,
  Sparkles,
};

export default function AboutDoctor() {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Stethoscope className="w-3.5 h-3.5 text-teal-600" />
            <span>Clinical Background &amp; Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet Dr. Sumit Kumar
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Experienced Doctor for Skin Conditions &amp; Medical Practitioner in Bhabua, Kaimur (Bihar)
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Doctor Profile Card (Left) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100 p-6 sm:p-8 border border-slate-200 shadow-sm">
              
              {/* Doctor Avatar / Clinical Shield Icon */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full bg-gradient-to-tr from-teal-700 to-teal-900 text-white flex items-center justify-center shadow-lg border-4 border-white mb-6">
                <GraduationCap className="w-12 h-12 text-teal-100" />
              </div>

              <div className="text-center pb-6 border-b border-slate-200">
                <h3 className="text-2xl font-extrabold text-slate-900">{DOCTOR_PROFILE.name}</h3>
                <p className="text-teal-700 font-bold text-sm tracking-wide mt-1">
                  {DOCTOR_PROFILE.degree} • {DOCTOR_PROFILE.title}
                </p>
                <p className="text-xs text-slate-500 mt-1 font-medium">
                  {DOCTOR_PROFILE.parentage}
                </p>
                <div className="inline-block mt-3 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-700 shadow-2xs">
                  {DOCTOR_PROFILE.location}
                </div>
              </div>

              {/* Qualifications Bullet Points */}
              <div className="pt-6 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Medical Qualifications &amp; Accreditations
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {DOCTOR_PROFILE.qualifications.map((q, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Patient Promise Pill */}
              <div className="mt-6 p-4 rounded-xl bg-teal-800 text-white text-xs leading-relaxed flex items-start gap-3">
                <Award className="w-5 h-5 text-teal-200 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-teal-100 font-bold">Clinical Promise</strong>
                  Every patient receives thorough consultation time, clear clinical rationale, and honest guidance on treatment timelines.
                </div>
              </div>

            </div>
          </div>

          {/* Narrative & Clinical Pillars (Right) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
              {DOCTOR_PROFILE.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Core Practice Pillars */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {DOCTOR_PROFILE.coreValues.map((val, idx) => {
                const IconComponent = iconMap[val.icon as keyof typeof iconMap] || ShieldCheck;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-teal-300 hover:bg-teal-50/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-teal-700 text-white flex items-center justify-center mb-3.5 shadow-xs">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-base mb-1.5">{val.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{val.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Location highlight note */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 flex items-center justify-between gap-4 flex-wrap text-sm">
              <div className="text-slate-700">
                <span className="font-bold text-slate-900 block">Available for Physical Consultation in Bhabua</span>
                <span className="text-xs text-slate-500">In front of Devi Ji Mandir, Ward No. 3 (Mon – Sat: 10 AM – 5 PM)</span>
              </div>
              <a
                href="#contact"
                className="text-xs font-bold bg-slate-900 hover:bg-teal-800 text-white px-4 py-2 rounded-lg transition-colors"
              >
                View Clinic Directions
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
