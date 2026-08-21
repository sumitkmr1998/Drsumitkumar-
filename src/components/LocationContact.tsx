import React, { useState } from 'react';
import { MapPin, Clock, Phone, MessageSquare, Send, CheckCircle2, Copy, Check, ExternalLink, Calendar, User, Mail, Sparkles, AlertCircle, Navigation, Compass } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';
import { AppointmentFormData } from '../types';

interface LocationContactProps {
  initialMode?: 'clinic' | 'teleconsultation';
  initialNote?: string;
  isStandalonePage?: boolean;
}

export default function LocationContact({
  initialMode = 'clinic',
  initialNote = '',
  isStandalonePage = false
}: LocationContactProps) {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    consultationType: initialMode,
    preferredDate: '',
    preferredTimeSlot: 'Morning (10:00 AM - 1:00 PM)',
    concernCategory: 'General Skin Consultation',
    message: initialNote,
  });

  const [copiedAddress, setCopiedAddress] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CLINIC_CONTACT.fullAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // Basic Validation
    if (!formData.fullName.trim()) {
      setFormError('Please enter your full patient name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setFormError('Please enter a valid 10-digit phone or WhatsApp number.');
      return;
    }

    setIsSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const msg = `*New Appointment Request - Dr. Sumit Kumar Clinic*
👤 *Patient Name:* ${formData.fullName}
📞 *Phone:* ${formData.phone}
🏥 *Mode:* ${formData.consultationType === 'clinic' ? 'In-Clinic Visit (Bhabua)' : 'Online Teleconsultation'}
📅 *Date:* ${formData.preferredDate || 'Earliest Available'}
⏰ *Slot:* ${formData.preferredTimeSlot}
🔍 *Concern:* ${formData.concernCategory}
📝 *Notes:* ${formData.message || 'None'}`;

    return encodeURIComponent(msg);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      consultationType: 'clinic',
      preferredDate: '',
      preferredTimeSlot: 'Morning (10:00 AM - 1:00 PM)',
      concernCategory: 'General Skin Consultation',
      message: '',
    });
  };

  // Google Maps URLs: Dedicated direct link for Dr. Sumit Kumar on Google Maps
  const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Dr. Sumit Kumar Clinic Devi Ji Mandir Ward 3 Bhabua Bihar 821101'
  )}`;

  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    'Dr. Sumit Kumar Clinic Bhabua Kaimur Bihar 821101'
  )}`;

  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    'Dr. Sumit Kumar Clinic, Devi Ji Mandir, Ward 3, Bhabua, Kaimur, Bihar 821101'
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className={`py-14 sm:py-20 ${isStandalonePage ? 'bg-slate-50' : 'bg-slate-100/70 border-b border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-teal-600" />
            <span>Clinic Location &amp; Inquiries</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isStandalonePage ? 'Clinic Location, Google Maps & Inquiries' : 'Visit the Clinic in Bhabua'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Conveniently located in Ward No. 3, in front of Devi Ji Mandir, Bhabua. Find live Google Maps directions or book your consultation below.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Clinic Address, Timings, Direct Actions & Google Maps Embed */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address & Practice Details Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-5">
              
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 block mb-1">
                  Official Clinic Location
                </span>
                <h3 className="text-xl font-extrabold text-slate-900">
                  {CLINIC_CONTACT.doctorName} Clinic
                </h3>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">
                  {CLINIC_CONTACT.fatherName}
                </p>
              </div>

              {/* Exact Location Breakdown */}
              <div className="space-y-4 text-sm text-slate-700 pt-2 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Clinic Address</span>
                    <p className="text-slate-600 text-xs sm:text-sm mt-0.5 leading-relaxed">
                      {CLINIC_CONTACT.addressLine2},<br />
                      {CLINIC_CONTACT.city}, District: {CLINIC_CONTACT.district},<br />
                      {CLINIC_CONTACT.state} - {CLINIC_CONTACT.pincode}
                    </p>
                    <span className="inline-block text-[11px] font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded mt-1.5 border border-teal-200">
                      Landmark: In front of Devi Ji Mandir, Ward No. 3
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Clinic Timings</span>
                    <p className="text-slate-700 font-medium text-xs sm:text-sm mt-0.5">
                      {CLINIC_CONTACT.timings.days}
                    </p>
                    <p className="text-teal-700 font-bold text-sm">
                      {CLINIC_CONTACT.timings.hours}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {CLINIC_CONTACT.timings.note}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Direct Contact / Helpline</span>
                    <a
                      href={`tel:${CLINIC_CONTACT.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-base font-bold text-teal-800 hover:text-teal-900 hover:underline block"
                    >
                      {CLINIC_CONTACT.phone}
                    </a>
                    <span className="text-xs text-slate-500">Available for calls and WhatsApp inquiries</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Copy Address & Open in Google Maps */}
              <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={handleCopyAddress}
                  className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  id="copy-clinic-address-btn"
                >
                  {copiedAddress ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Address Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-600" />
                      <span>Copy Full Address</span>
                    </>
                  )}
                </button>

                <a
                  href={googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-xs text-center"
                  id="google-maps-directions-link"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>

            </div>

            {/* Google Maps Live Interactive Map Card */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <Compass className="w-4 h-4 text-teal-700" />
                  <span>Google Maps Location (Bhabua)</span>
                </div>
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-teal-700 hover:text-teal-900 font-semibold inline-flex items-center gap-1"
                >
                  Get Directions <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Embedded Google Map */}
              <div className="w-full h-64 rounded-xl overflow-hidden border border-slate-200 shadow-inner relative bg-slate-100">
                <iframe
                  title="Dr. Sumit Kumar Clinic Google Map"
                  src={googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                <span>📍 Dr. Sumit Kumar Clinic • Ward 3, Bhabua</span>
                <a
                  href={googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 hover:underline font-semibold"
                >
                  View Large Map
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Appointment Booking Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              
              <div className="border-b border-slate-100 pb-5 mb-6">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Book an Appointment Inquiry
                  </h3>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200">
                    Direct Clinic Response
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in your details below to request a prioritized in-clinic time slot in Bhabua or an online teleconsultation.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-2xl font-extrabold text-slate-900">
                      Inquiry Received!
                    </h4>
                    <p className="text-slate-600 text-sm max-w-md mx-auto">
                      Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Dr. Sumit Kumar&apos;s clinic desk will verify your requested slot ({formData.preferredDate || 'Next Available'}, {formData.preferredTimeSlot}) and confirm via call/WhatsApp at <strong>{formData.phone}</strong>.
                    </p>
                  </div>

                  {/* Pre-filled WhatsApp Instant Sync */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-md mx-auto space-y-3">
                    <p className="text-xs font-semibold text-slate-600">
                      Want instant confirmation on WhatsApp right now?
                    </p>
                    <a
                      href={`https://wa.me/917766095312?text=${generateWhatsAppMessage()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md transition-colors"
                      id="submitted-whatsapp-sync-btn"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Forward Details to Clinic WhatsApp</span>
                    </a>
                  </div>

                  <button
                    onClick={resetForm}
                    className="text-xs font-bold text-slate-500 hover:text-teal-700 underline cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" id="clinic-appointment-form">
                  
                  {formError && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  {/* Consultation Mode Selection Radio */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Consultation Type <span className="text-teal-700">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <label className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs sm:text-sm font-bold cursor-pointer transition-all ${
                        formData.consultationType === 'clinic'
                          ? 'border-teal-600 bg-teal-50/70 text-teal-900 shadow-2xs'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                      }`}>
                        <input
                          type="radio"
                          name="consultationType"
                          value="clinic"
                          checked={formData.consultationType === 'clinic'}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <MapPin className="w-4 h-4 text-teal-700" />
                        <span>In-Clinic (Bhabua)</span>
                      </label>

                      <label className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs sm:text-sm font-bold cursor-pointer transition-all ${
                        formData.consultationType === 'teleconsultation'
                          ? 'border-teal-600 bg-teal-50/70 text-teal-900 shadow-2xs'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                      }`}>
                        <input
                          type="radio"
                          name="consultationType"
                          value="teleconsultation"
                          checked={formData.consultationType === 'teleconsultation'}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <Sparkles className="w-4 h-4 text-teal-700" />
                        <span>Teleconsultation</span>
                      </label>
                    </div>
                  </div>

                  {/* Patient Name & Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5" htmlFor="fullName">
                        Full Patient Name <span className="text-teal-700">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5" htmlFor="phone">
                        Phone / WhatsApp Number <span className="text-teal-700">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. 9876543210"
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Preferred Date & Time Slot */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5" htmlFor="preferredDate">
                        Preferred Date (Mon–Sat)
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <input
                          type="date"
                          id="preferredDate"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5" htmlFor="preferredTimeSlot">
                        Preferred Timing Slot
                      </label>
                      <select
                        id="preferredTimeSlot"
                        name="preferredTimeSlot"
                        value={formData.preferredTimeSlot}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 bg-white"
                      >
                        <option value="Morning (10:00 AM - 1:00 PM)">Morning: 10:00 AM – 1:00 PM</option>
                        <option value="Afternoon (1:00 PM - 3:00 PM)">Afternoon: 1:00 PM – 3:00 PM</option>
                        <option value="Evening (3:00 PM - 5:00 PM)">Evening: 3:00 PM – 5:00 PM</option>
                      </select>
                    </div>
                  </div>

                  {/* Concern / Issue Category */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5" htmlFor="concernCategory">
                      Primary Condition / Treatment Required
                    </label>
                    <select
                      id="concernCategory"
                      name="concernCategory"
                      value={formData.concernCategory}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 bg-white"
                    >
                      <option value="General Skin Consultation">General Skin / Rash Consultation</option>
                      <option value="Acne & Acne Scars">Acne &amp; Acne Scars (MNRF / Peels)</option>
                      <option value="Fungal / Bacterial Infection">Fungal / Ringworm Infection (Daad)</option>
                      <option value="Eczema / Psoriasis / Allergy">Eczema / Psoriasis / Allergy</option>
                      <option value="Pigmentation / Melasma">Pigmentation / Melasma (Pico Laser)</option>
                      <option value="Laser Hair Reduction">Diode Laser Hair Reduction</option>
                      <option value="Hydraderma Facial">Hydraderma Abrasion Facial</option>
                      <option value="Hair Fall / Scalp Treatment">Hair Fall / Scalp Treatment (PRP/Alopecia)</option>
                      <option value="Nail Disorder">Nail Disorder / Ingrowing Nail</option>
                      <option value="Other Medical Concern">Other Medical Concern</option>
                    </select>
                  </div>

                  {/* Message / Symptoms Notes */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5" htmlFor="message">
                      Describe Your Symptoms or Medical Notes (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Mention how long you have had this issue, previous creams used, or any specific questions..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 bg-white"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-teal-700 hover:bg-teal-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-base cursor-pointer transform active:scale-98"
                      id="submit-appointment-btn"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Appointment Request</span>
                    </button>
                    <p className="text-[11px] text-slate-500 text-center mt-2.5">
                      🔒 Your medical inquiry is strictly confidential. No charges are billed prior to consultation.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
