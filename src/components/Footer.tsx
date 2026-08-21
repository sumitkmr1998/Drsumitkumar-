import { Link } from 'react-router-dom';
import { Stethoscope, MapPin, Phone, Clock, MessageSquare, ShieldAlert, ArrowUp, ExternalLink } from 'lucide-react';
import { CLINIC_CONTACT, DOCTOR_PROFILE } from '../data/clinicData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm">
      
      {/* Medical Ethics & Clinical Disclaimer Banner */}
      <div className="bg-slate-900 border-b border-slate-800 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-start gap-4">
          <ShieldAlert className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <strong className="text-white block mb-0.5">Medical Notice &amp; Compliance Disclaimer:</strong>
            Strictly educational and informational portal compliant with medical ethics guidelines. Does not replace physical clinical diagnosis. Patients are advised to consult directly with Dr. Sumit Kumar (MBBS) for individual examination, diagnostic investigations, and individualized therapy.
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Doctor Bio Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-800 text-white flex items-center justify-center shadow-md shrink-0">
                <Stethoscope className="w-5 h-5 text-teal-200" />
              </div>
              <div>
                <span className="font-extrabold text-white text-base sm:text-lg tracking-tight block">
                  {DOCTOR_PROFILE.name} <span className="text-xs bg-teal-950 text-teal-300 px-1.5 py-0.5 rounded border border-teal-800">{DOCTOR_PROFILE.degree}</span>
                </span>
                <span className="text-xs text-slate-400">
                  Experienced Doctor for Skin Conditions
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Practicing evidence-based clinical care for skin conditions and advanced procedural treatments in Bhabua, Kaimur, Bihar. Committed to patient safety, ethical consultations, and modern medical technology.
            </p>

            <div className="text-xs text-slate-500">
              <span className="text-slate-400 font-semibold">{DOCTOR_PROFILE.parentage}</span> • Bhabua, Bihar
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-xs sm:text-sm uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/" className="hover:text-teal-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-teal-300 transition-colors">About Dr. Sumit Kumar</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-teal-300 transition-colors">Conditions &amp; Services</Link>
              </li>
              <li>
                <Link to="/technology" className="hover:text-teal-300 transition-colors">Advanced Lasers &amp; MNRF</Link>
              </li>
              <li>
                <Link to="/teleconsultation" className="hover:text-teal-300 transition-colors">Online Teleconsultation</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-teal-300 transition-colors">Clinic Location &amp; Booking</Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-teal-300 transition-colors">Patient FAQs</Link>
              </li>
            </ul>
          </div>

          {/* Clinic Address & Hours Column */}
          <div className="lg:col-span-4 space-y-3.5">
            <h4 className="font-bold text-white text-xs sm:text-sm uppercase tracking-wider">
              Clinic Location &amp; Hours
            </h4>
            
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  {CLINIC_CONTACT.addressLine2},<br />
                  {CLINIC_CONTACT.city}, {CLINIC_CONTACT.district}, {CLINIC_CONTACT.state} - {CLINIC_CONTACT.pincode}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{CLINIC_CONTACT.timings.days}: {CLINIC_CONTACT.timings.hours}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${CLINIC_CONTACT.phone.replace(/[^0-9+]/g, '')}`} className="text-white hover:text-teal-300 font-semibold">
                  {CLINIC_CONTACT.phone}
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href={CLINIC_CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-700/80 hover:bg-emerald-600 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-teal-300 text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Directions &amp; Map</span>
              </Link>
            </div>

          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>Copyright &copy; 2026 Dr. Sumit Kumar. All rights reserved.</p>
            <p className="mt-0.5 text-[11px] text-slate-600">
              Dr. Sumit Kumar Clinic (S/O Dr. Tarun Kumar Singh) • Bhabua, Kaimur, Bihar - 821101
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-teal-300 transition-colors cursor-pointer py-1 px-2 rounded-lg hover:bg-slate-900"
            id="footer-back-to-top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
