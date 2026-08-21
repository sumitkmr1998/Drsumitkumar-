import React, { useState, useEffect } from 'react';
import { X, Calendar, MapPin, Video, Phone, User, Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { AppointmentFormData } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: 'clinic' | 'teleconsultation';
  defaultNote?: string;
}

export default function AppointmentModal({
  isOpen,
  onClose,
  defaultType = 'clinic',
  defaultNote = '',
}: AppointmentModalProps) {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    consultationType: defaultType,
    preferredDate: '',
    preferredTimeSlot: 'Morning (10:00 AM - 1:00 PM)',
    concernCategory: 'General Skin Consultation',
    message: defaultNote,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      consultationType: defaultType,
      message: defaultNote || prev.message,
    }));
    setIsSubmitted(false);
    setErrorMessage(null);
  }, [defaultType, defaultNote, isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMessage('Please enter a valid phone number (10 digits).');
      return;
    }
    setIsSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const msg = `*Appointment Request - Dr. Sumit Kumar (MBBS)*
👤 *Name:* ${formData.fullName}
📞 *Phone:* ${formData.phone}
🏥 *Type:* ${formData.consultationType === 'clinic' ? 'In-Clinic Visit (Bhabua)' : 'Online Teleconsultation'}
📅 *Date:* ${formData.preferredDate || 'Earliest Available'}
⏰ *Time:* ${formData.preferredTimeSlot}
🔍 *Concern:* ${formData.concernCategory}
📝 *Notes:* ${formData.message || 'None'}`;
    return encodeURIComponent(msg);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-teal-400 block">
              Dr. Sumit Kumar (MBBS)
            </span>
            <h3 className="text-xl font-extrabold text-white">
              {formData.consultationType === 'clinic' ? 'Book Clinic Visit in Bhabua' : 'Book Video Teleconsultation'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {isSubmitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-extrabold text-slate-900">Request Submitted!</h4>
                <p className="text-slate-600 text-xs sm:text-sm mt-1">
                  Thank you, <strong>{formData.fullName}</strong>. Our clinic coordinator will contact you at <strong>{formData.phone}</strong> to confirm your slot.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-teal-50 border border-teal-100 space-y-2.5">
                <p className="text-xs font-semibold text-teal-900">
                  Prefer an instant WhatsApp confirmation?
                </p>
                <a
                  href={`https://wa.me/917766095312?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-xs transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send to Clinic WhatsApp (+91 77660 95312)</span>
                </a>
              </div>

              <button
                onClick={onClose}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 rounded-xl text-xs transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Consultation Type Toggle */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  Consultation Mode
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setFormData((p) => ({ ...p, consultationType: 'clinic' }))}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      formData.consultationType === 'clinic'
                        ? 'border-teal-700 bg-teal-50 text-teal-900 shadow-2xs'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5 text-teal-700" />
                    <span>In-Clinic Visit</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData((p) => ({ ...p, consultationType: 'teleconsultation' }))}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      formData.consultationType === 'teleconsultation'
                        ? 'border-teal-700 bg-teal-50 text-teal-900 shadow-2xs'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Video className="w-3.5 h-3.5 text-teal-700" />
                    <span>Online Video</span>
                  </button>
                </div>
              </div>

              {/* Name & Phone */}
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Patient Name <span className="text-teal-700">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter full name"
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Phone / WhatsApp <span className="text-teal-700">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="10-digit mobile number"
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-600 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Time Slot
                  </label>
                  <select
                    name="preferredTimeSlot"
                    value={formData.preferredTimeSlot}
                    onChange={handleInputChange}
                    className="w-full px-2.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-600 focus:outline-none bg-white"
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">10:00 AM – 1:00 PM</option>
                    <option value="Afternoon (1:00 PM - 3:00 PM)">1:00 PM – 3:00 PM</option>
                    <option value="Evening (3:00 PM - 5:00 PM)">3:00 PM – 5:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Concern Selector */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Condition / Service
                </label>
                <select
                  name="concernCategory"
                  value={formData.concernCategory}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-600 focus:outline-none bg-white"
                >
                  <option value="General Skin Consultation">General Skin / Rash Consultation</option>
                  <option value="Acne & Acne Scars">Acne &amp; Acne Scars (MNRF / Peels)</option>
                  <option value="Fungal / Bacterial Infection">Fungal / Ringworm Infection</option>
                  <option value="Eczema / Psoriasis">Eczema / Psoriasis</option>
                  <option value="Pigmentation / Melasma">Pigmentation / Melasma (Pico Laser)</option>
                  <option value="Diode Laser Hair Removal">Diode Laser Hair Removal</option>
                  <option value="Hydraderma Facial">Hydraderma Abrasion Facial</option>
                  <option value="Hair Fall / Alopecia">Hair Fall / Scalp Disorder</option>
                  <option value="Nail Disorder">Nail Disorder</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Brief Medical Note (Optional)
                </label>
                <textarea
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="e.g. Seeking consultation for acne marks or hair thinning..."
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-600 focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-teal-700 hover:bg-teal-800 text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm &amp; Request Slot</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
