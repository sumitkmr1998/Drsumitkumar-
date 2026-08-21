import { Link } from 'react-router-dom';
import {
  Award,
  ShieldCheck,
  Cpu,
  HeartHandshake,
  Sparkles,
  CheckCircle2,
  Calendar,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Stethoscope,
  Microscope,
  FileCheck
} from 'lucide-react';
import { DOCTOR_PROFILE, CLINIC_CONTACT } from '../data/clinicData';

interface AboutPageProps {
  onOpenBooking: (type?: 'clinic' | 'teleconsultation') => void;
}

export default function AboutPage({ onOpenBooking }: AboutPageProps) {
  const iconMap: Record<string, typeof ShieldCheck> = {
    ShieldCheck,
    Cpu,
    HeartHandshake,
    Sparkles,
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Page Header Banner */}
      <section className="bg-slate-900 text-white py-14 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/80 border border-teal-500/40 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Medical Profile &amp; Practice</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              About Dr. Sumit Kumar
            </h1>
            <p className="mt-3 text-slate-300 text-base sm:text-lg leading-relaxed">
              MBBS Qualified Doctor with clinical expertise in skin conditions, dedicated to evidence-based medical care and modern laser technology in Bhabua, Kaimur.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-16">
        
        {/* Doctor Bio & Credential Showcase Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Doctor Profile Highlight */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-teal-950 text-white shadow-md relative overflow-hidden">
                <div className="w-20 h-20 rounded-2xl bg-teal-700/80 text-white flex items-center justify-center font-extrabold text-3xl shadow-inner mb-4">
                  DS
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-extrabold text-white">
                      {DOCTOR_PROFILE.name}
                    </h2>
                    <span className="bg-teal-500 text-slate-950 text-xs px-2 py-0.5 rounded font-extrabold">
                      {DOCTOR_PROFILE.degree}
                    </span>
                  </div>
                  <p className="text-teal-300 font-medium text-sm">
                    {DOCTOR_PROFILE.title}
                  </p>
                  <p className="text-xs text-slate-300 font-semibold pt-1">
                    {DOCTOR_PROFILE.parentage}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800 space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Bhabua, Kaimur District, Bihar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Mon – Sat: 10:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>{CLINIC_CONTACT.phone}</span>
                  </div>
                </div>
              </div>

              {/* Verified Qualifications List */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-teal-700" />
                  <span>Clinical Qualifications &amp; Accreditations</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {DOCTOR_PROFILE.qualifications.map((q, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Detailed Biography & Clinical Vision */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block mb-1">
                  Professional Practice
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Dedicated to Evidence-Based Clinical Care for Skin Diseases
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                {DOCTOR_PROFILE.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
                <p>
                  At Dr. Sumit Kumar Clinic, treatment plans are tailored precisely to each patient&apos;s diagnosis. We avoid generic, unscientific steroid combination creams that cause long-term skin thinning and resistance, focusing instead on pharmacological safety, proper diagnostic dermoscopy, and root-cause resolution.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => onOpenBooking('clinic')}
                  className="bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm px-6 py-3 rounded-xl flex items-center gap-2 shadow-sm transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Consultation</span>
                </button>

                <Link
                  to="/contact"
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm px-5 py-3 rounded-xl flex items-center gap-2 transition-all"
                >
                  <MapPin className="w-4 h-4 text-teal-700" />
                  <span>Clinic Directions</span>
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Core Pillars / Clinical Values */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Core Clinical Principles
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              The fundamental standards that guide every consultation and procedure.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DOCTOR_PROFILE.coreValues.map((val, idx) => {
              const Icon = iconMap[val.icon] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-teal-300 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* In-Clinic Hygiene & Safety Standards */}
        <div className="bg-gradient-to-br from-slate-900 to-teal-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-800 text-teal-200 text-xs font-bold uppercase tracking-wider">
                <Microscope className="w-3.5 h-3.5" />
                <span>Sterilization &amp; Clinical Safety</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Zero Compromise on Clinical Sterility
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                All procedural instruments, laser handpieces, and micro-needling cartridges undergo hospital-grade multi-stage sterilization. Single-use disposable consumables are utilized for every patient to prevent cross-contamination.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={() => onOpenBooking('clinic')}
                className="w-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold py-3.5 px-6 rounded-xl text-center flex items-center justify-center gap-2 text-sm shadow-md transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Clinic Visit</span>
              </button>

              <Link
                to="/technology"
                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-6 rounded-xl text-center flex items-center justify-center gap-2 text-sm border border-slate-700 transition-all"
              >
                <span>View Laser Equipment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
