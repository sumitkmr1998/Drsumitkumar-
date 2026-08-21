import { Link } from 'react-router-dom';
import {
  Calendar,
  Video,
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  MapPin,
  Clock,
  Phone,
  ChevronRight,
  Stethoscope,
  Activity,
  Droplets,
  Zap,
  HelpCircle
} from 'lucide-react';
import Hero from '../components/Hero';
import { DOCTOR_PROFILE, CLINIC_CONTACT, CONDITIONS_SERVICES, CLINIC_TECHNOLOGIES, CLINIC_FAQS } from '../data/clinicData';
import { ConditionService, ClinicTechnology } from '../types';

interface HomePageProps {
  onOpenBooking: (type?: 'clinic' | 'teleconsultation', note?: string) => void;
  onSelectCondition: (condition: ConditionService) => void;
  onSelectTechnology: (tech: ClinicTechnology) => void;
}

export default function HomePage({
  onOpenBooking,
  onSelectCondition,
  onSelectTechnology
}: HomePageProps) {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero onOpenBooking={onOpenBooking} />

      {/* 2. Doctor Quick Introduction Banner */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-50 to-teal-50/40 rounded-2xl p-6 sm:p-10 border border-teal-100/80 shadow-xs">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/70 text-teal-800 text-xs font-bold uppercase tracking-wider">
                  <Stethoscope className="w-3.5 h-3.5 text-teal-700" />
                  <span>Meet Dr. Sumit Kumar</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Dr. Sumit Kumar <span className="text-teal-700 font-bold text-lg sm:text-xl">MBBS</span>
                </h2>
                
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
                  Experienced medical doctor for skin conditions practicing in Bhabua, Kaimur (S/O Dr. Tarun Kumar Singh). Providing ethical, evidence-based clinical care for skin diseases and advanced laser procedures tailored to Indian skin types.
                </p>

                <div className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm font-medium text-slate-700">
                  <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
                    <ShieldCheck className="w-4 h-4 text-teal-600" />
                    <span>Evidence-Based Medicine</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
                    <Award className="w-4 h-4 text-teal-600" />
                    <span>Certified Laser Procedures</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
                    <Clock className="w-4 h-4 text-teal-600" />
                    <span>Mon–Sat 10:00 AM – 5:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <Link
                  to="/about"
                  className="bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold py-3 px-5 rounded-xl text-center flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <span>Read Full Doctor Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => onOpenBooking('clinic')}
                  className="bg-teal-700 hover:bg-teal-800 text-white text-xs sm:text-sm font-bold py-3 px-5 rounded-xl text-center flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Clinic Visit</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Conditions & Services Preview */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-2">
                <span>Clinical Skin Care</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Skin, Hair &amp; Nail Conditions Treated
              </h2>
              <p className="mt-1 text-sm sm:text-base text-slate-600">
                Accurate clinical diagnosis and customized treatment regimens.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-900 font-bold text-sm group"
            >
              <span>View All 6+ Conditions &amp; Protocols</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONDITIONS_SERVICES.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-teal-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-100">
                      {item.category === 'hair-nail' ? 'Hair & Nail Care' : 'Clinical Skin Care'}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectCondition(item)}
                    className="text-xs font-bold text-teal-700 hover:text-teal-900 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Clinical Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenBooking('clinic', item.title)}
                    className="text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-teal-50 hover:text-teal-800 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                  >
                    Book Slot
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 w-full bg-white border border-slate-200 text-slate-800 font-bold py-3 rounded-xl text-sm"
            >
              <span>Explore All Conditions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. Advanced Technologies & Lasers Showcase */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/60 border border-teal-500/40 text-teal-300 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                <span>Modern In-Clinic Technology</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Advanced Lasers &amp; Medical Devices
              </h2>
              <p className="mt-1 text-sm sm:text-base text-slate-300">
                Medical-grade equipment calibrated for efficacy and safety on Indian skin tones.
              </p>
            </div>

            <Link
              to="/technology"
              className="inline-flex items-center gap-2 text-teal-300 hover:text-teal-100 font-bold text-sm group"
            >
              <span>Explore Tech Specifications</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLINIC_TECHNOLOGIES.map((tech) => (
              <div
                key={tech.id}
                className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between hover:border-teal-500/60 transition-all group"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-teal-950/80 border border-teal-600/40 text-teal-300 flex items-center justify-center">
                    {tech.id === 'diode-laser' && <Zap className="w-5 h-5" />}
                    {tech.id === 'pico-laser' && <Sparkles className="w-5 h-5" />}
                    {tech.id === 'mnrf' && <Activity className="w-5 h-5" />}
                    {tech.id === 'hydraderma-abrasion' && <Droplets className="w-5 h-5" />}
                  </div>

                  <span className="text-[11px] font-bold text-teal-400 block uppercase tracking-wide">
                    {tech.shortTag}
                  </span>

                  <h3 className="text-lg font-bold text-white group-hover:text-teal-200 transition-colors">
                    {tech.name}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {tech.tagline}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-700/80 flex items-center justify-between">
                  <button
                    onClick={() => onSelectTechnology(tech)}
                    className="text-xs font-bold text-teal-300 hover:text-teal-100 hover:underline cursor-pointer"
                  >
                    View Mechanism
                  </button>

                  <span className="text-[11px] text-slate-400">
                    ⏱ {tech.sessionDuration}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Teleconsultation & Outstation Patients Callout */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-800/80 border border-teal-600/40 text-teal-200 text-xs font-bold uppercase tracking-wider">
                  <Video className="w-3.5 h-3.5" />
                  <span>Teleconsultation Available</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  Consult with Dr. Sumit Kumar from Home
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                  Living outside Bhabua or unable to travel? Book an online consultation, share photos of your skin condition, and receive an authentic digital medical prescription directly on WhatsApp.
                </p>

                <div className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm text-teal-200">
                  <span>✓ Scheduled Video/Audio Call</span>
                  <span>✓ Digital Prescription</span>
                  <span>✓ Follow-up Guidance</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <Link
                  to="/teleconsultation"
                  className="w-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold py-3.5 px-6 rounded-xl text-center flex items-center justify-center gap-2 text-sm shadow-md transition-all"
                >
                  <span>Teleconsultation Process</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => onOpenBooking('teleconsultation')}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-6 rounded-xl text-center flex items-center justify-center gap-2 text-sm border border-slate-600 transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-teal-400" />
                  <span>Book Online Slot</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Quick Location & Google Maps Summary Banner */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-teal-700 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Clinic Location in Bhabua</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                In Front of Devi Ji Mandir, Ward No. 3, Bhabua
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Open Monday to Saturday (10:00 AM – 5:00 PM). Direct phone: <strong className="text-slate-900">{CLINIC_CONTACT.phone}</strong>
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="bg-teal-700 hover:bg-teal-800 text-white text-xs sm:text-sm font-bold py-2.5 px-5 rounded-xl flex items-center gap-2 transition-colors shadow-xs"
              >
                <MapPin className="w-4 h-4" />
                <span>View Google Maps &amp; Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Frequently Asked Questions Teaser */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Find quick answers regarding clinic visits, laser safety, and consultations.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {CLINIC_FAQS.slice(0, 3).map((faq, idx) => (
              <div key={idx} className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                  {faq.question}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/faqs"
              className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-900 font-bold text-sm"
            >
              <span>View All Patient FAQs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
