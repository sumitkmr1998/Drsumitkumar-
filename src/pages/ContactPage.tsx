import {
  MapPin,
  Clock,
  Phone,
  MessageSquare,
  Navigation,
  Compass,
  CheckCircle2,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import LocationContact from '../components/LocationContact';
import { CLINIC_CONTACT, DOCTOR_PROFILE } from '../data/clinicData';

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Page Header Banner */}
      <section className="bg-slate-900 text-white py-14 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/80 border border-teal-500/40 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>Location, Google Maps &amp; Appointments</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Clinic Location &amp; Contact
            </h1>
            <p className="mt-3 text-slate-300 text-base sm:text-lg leading-relaxed">
              Dr. Sumit Kumar Clinic (S/O Dr. Tarun Kumar Singh) is located centrally in Ward No. 3, directly in front of Devi Ji Mandir in Bhabua, Kaimur, Bihar.
            </p>
          </div>
        </div>
      </section>

      {/* Main Location & Contact Form Component */}
      <LocationContact isStandalonePage={true} />

      {/* Arrival & Accessibility Guide */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Navigation className="w-5 h-5 text-teal-700" />
            <span>How to Reach the Clinic in Bhabua</span>
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-600">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-slate-900 block mb-1">From Bhabua Bus Stand / Chowk:</strong>
              5 to 10 minutes by auto-rickshaw or e-rickshaw towards Ward No. 3, Devi Ji Mandir.
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-slate-900 block mb-1">Landmark to Ask:</strong>
              Ask for &quot;Devi Ji Mandir, Ward No. 3&quot; or &quot;Dr. Tarun Kumar Singh / Dr. Sumit Kumar Clinic&quot;.
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-slate-900 block mb-1">Parking &amp; Entry:</strong>
              Convenient two-wheeler and vehicle parking available in front of the clinic premises.
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
