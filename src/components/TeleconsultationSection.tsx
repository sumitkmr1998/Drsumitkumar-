import { Video, Calendar, FileText, CheckCircle2, Shield, Smartphone, ArrowRight, MessageSquare, AlertCircle } from 'lucide-react';
import { TELECONSULTATION_STEPS, CLINIC_CONTACT } from '../data/clinicData';

interface TeleconsultationSectionProps {
  onOpenBooking: (type: 'teleconsultation') => void;
}

export default function TeleconsultationSection({ onOpenBooking }: TeleconsultationSectionProps) {
  return (
    <section id="teleconsultation" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-900/60 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Video className="w-3.5 h-3.5 text-teal-400" />
            <span>Remote Patient Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Online / Teleconsultation Available
          </h2>
          <p className="mt-3 text-lg text-slate-300">
            For patients unable to visit the clinic in person, secure teleconsultations are available following standard telemedicine guidelines.
          </p>
        </div>

        {/* 3 Step Workflow */}
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {TELECONSULTATION_STEPS.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8 relative hover:border-teal-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-teal-400/30">
                    {item.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-teal-900/60 text-teal-300 border border-teal-500/30 flex items-center justify-center">
                    {idx === 0 && <Calendar className="w-6 h-6" />}
                    {idx === 1 && <Video className="w-6 h-6" />}
                    {idx === 2 && <FileText className="w-6 h-6" />}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center gap-2 text-xs text-teal-300">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Step verified for diagnostic clarity</span>
              </div>
            </div>
          ))}
        </div>

        {/* Teleconsultation Features & Call to Action Box */}
        <div className="bg-gradient-to-r from-teal-950 to-slate-800 border border-teal-800/50 rounded-2xl p-8 sm:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-teal-300 text-xs font-bold uppercase tracking-wider">
              <Shield className="w-4 h-4" />
              <span>NMC Telemedicine Guidelines Compliant</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Connect with Dr. Sumit Kumar from Anywhere
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Ideal for follow-ups, initial reviews, acute rashes, acne management, and hair loss consultations across Kaimur, Rohtas, Varanasi, and outstation patients.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-slate-300 pt-1">
              <span className="flex items-center gap-1.5">
                <Smartphone className="w-4 h-4 text-teal-400" /> WhatsApp &amp; Video Call
              </span>
              <span className="flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-teal-400" /> Official e-Prescription
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-teal-400" /> Patient Privacy Protected
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full lg:w-auto shrink-0">
            <button
              onClick={() => onOpenBooking('teleconsultation')}
              className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-7 py-4 rounded-xl transition-all shadow-lg hover:shadow-teal-500/20 flex items-center justify-center gap-2.5 text-sm sm:text-base cursor-pointer transform active:scale-98"
              id="teleconsultation-inquire-btn"
            >
              <Video className="w-5 h-5" />
              <span>Inquire for Video Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/917766095312?text=${encodeURIComponent('Hello Dr. Sumit Kumar, I would like to inquire about booking an online teleconsultation for my skin condition.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 font-semibold px-6 py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm text-center"
              id="teleconsultation-whatsapp-btn"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Direct WhatsApp Inquiry</span>
            </a>
          </div>

        </div>

        {/* Telemedicine Disclaimer Note */}
        <div className="mt-8 flex items-start gap-3 text-xs text-slate-400 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
          <AlertCircle className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
          <p>
            <strong>Note on Teleconsultation Ethics:</strong> Online consultations are suitable for initial evaluations, mild-to-moderate skin conditions, and routine follow-ups. If Dr. Sumit Kumar identifies severe systemic symptoms or conditions requiring direct physical palpation or dermoscopy, an in-person clinic visit will be advised in the patient&apos;s best medical interest.
          </p>
        </div>

      </div>
    </section>
  );
}
