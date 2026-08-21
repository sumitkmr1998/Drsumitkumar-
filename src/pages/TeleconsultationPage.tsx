import { useState } from 'react';
import {
  Video,
  Calendar,
  FileText,
  Camera,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
  Phone,
  Clock,
  ArrowRight,
  Sun,
  AlertCircle
} from 'lucide-react';
import { TELECONSULTATION_STEPS, CLINIC_CONTACT } from '../data/clinicData';
import LocationContact from '../components/LocationContact';

interface TeleconsultationPageProps {
  onOpenBooking: (type?: 'clinic' | 'teleconsultation') => void;
}

export default function TeleconsultationPage({ onOpenBooking }: TeleconsultationPageProps) {
  const iconMap: Record<string, typeof Calendar> = {
    Calendar,
    Video,
    FileText,
  };

  const photographyTips = [
    {
      title: 'Use Natural Indirect Daylight',
      desc: 'Take photos near a window in bright daylight. Avoid harsh yellow artificial bulbs or heavy direct flash that washes out skin redness.',
      icon: Sun
    },
    {
      title: 'Take Both Wide & Close-up Photos',
      desc: 'Take one photo from a distance showing the full anatomical area (e.g. whole face/arm), and 2-3 focused close-ups of the specific rash or lesion.',
      icon: Camera
    },
    {
      title: 'Ensure Sharp Focus & No Filters',
      desc: 'Tap your camera screen to lock focus on the rash texture. Never use beauty filters, smoothing effects, or makeup over the affected skin.',
      icon: CheckCircle2
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Page Header Banner */}
      <section className="bg-slate-900 text-white py-14 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/80 border border-teal-500/40 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Video className="w-3.5 h-3.5" />
              <span>Digital Clinical Consultations</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Online Medical Teleconsultation for Skin Conditions
            </h1>
            <p className="mt-3 text-slate-300 text-base sm:text-lg leading-relaxed">
              Consult with Dr. Sumit Kumar (MBBS) from anywhere in Bihar and beyond. Receive clinical evaluation, expert counseling, and an official digital medical prescription.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
        
        {/* 3-Step Teleconsultation Workflow */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block mb-1">
              Simple 3-Step Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              How Teleconsultation Works
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Designed for busy professionals, elderly patients, and outstation families across Kaimur and Rohtas districts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TELECONSULTATION_STEPS.map((stepItem, idx) => {
              const Icon = iconMap[stepItem.icon] || Calendar;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs relative flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-100">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-black text-slate-200">
                        {stepItem.step}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900">
                      {stepItem.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {stepItem.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] text-teal-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Medical Protocol</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Patient Photo Preparation Guide */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-slate-900">
                Patient Guide: Taking Clear Skin Photos for Diagnosis
              </h3>
              <p className="text-xs text-slate-500">
                Accurate clinical assessment depends on high-clarity photographs of the rash or lesion.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {photographyTips.map((tip, idx) => {
              const TipIcon = tip.icon;
              return (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-teal-100/70 text-teal-800 flex items-center justify-center mb-1">
                    <TipIcon className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {tip.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* WhatsApp Direct Action Bar */}
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-0.5">
              <span className="font-bold text-emerald-950 text-sm block">
                Have your photos ready? Connect on WhatsApp
              </span>
              <p className="text-xs text-emerald-800">
                Send your photos directly to Dr. Sumit Kumar Clinic WhatsApp: <strong className="text-emerald-950">{CLINIC_CONTACT.whatsapp}</strong>
              </p>
            </div>

            <a
              href={`https://wa.me/917766095312?text=${encodeURIComponent('Hello Dr. Sumit Kumar Clinic, I would like to schedule an online teleconsultation. I have my skin photographs ready.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl flex items-center justify-center gap-2 shadow-xs transition-colors shrink-0"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Open Clinic WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Telemedicine Legal & Ethics Compliance Card */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-3 shadow-lg">
          <div className="flex items-center gap-2 text-teal-400 font-bold text-sm">
            <ShieldCheck className="w-4 h-4" />
            <span>Telemedicine Ethics &amp; Legal Compliance</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            All teleconsultations strictly comply with the Telemedicine Practice Guidelines issued by the National Medical Commission (NMC) of India. Prescriptions generated are legally valid and contain the doctor&apos;s MBBS registration details, diagnostic impression, dosage schedules, and red-flag warning instructions.
          </p>
        </div>

        {/* Embedded Booking Section with Pre-selected Teleconsultation Mode */}
        <div>
          <LocationContact initialMode="teleconsultation" isStandalonePage={true} />
        </div>

      </div>
    </div>
  );
}
