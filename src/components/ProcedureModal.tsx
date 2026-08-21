import { X, CheckCircle2, Zap, Sparkles, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { ConditionService, ClinicTechnology } from '../types';

interface ProcedureModalProps {
  item: ConditionService | ClinicTechnology | null;
  type: 'condition' | 'technology' | null;
  onClose: () => void;
  onBook: (note?: string) => void;
}

export default function ProcedureModal({ item, type, onClose, onBook }: ProcedureModalProps) {
  if (!item || !type) return null;

  const isTech = type === 'technology';
  const techItem = isTech ? (item as ClinicTechnology) : null;
  const condItem = !isTech ? (item as ConditionService) : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-6 flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-teal-900/80 text-teal-300 text-xs font-bold border border-teal-700/50">
              {isTech ? <Zap className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5" />}
              <span>{isTech ? 'Advanced Equipment & Procedure' : 'Clinical Care for Skin Conditions'}</span>
            </div>
            <h3 className="text-2xl font-extrabold text-white">
              {isTech ? techItem?.name : condItem?.title}
            </h3>
            <p className="text-teal-300 text-xs sm:text-sm font-medium">
              {isTech ? techItem?.tagline : condItem?.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700">
          
          {/* Main Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Clinical Overview &amp; Mechanism
            </h4>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              {item.description}
            </p>
          </div>

          {/* If Technology: Uses & Benefits */}
          {isTech && techItem && (
            <>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                  Key Patient Benefits:
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {techItem.keyBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200/80 text-xs text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Primary Indications Treated:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {techItem.primaryUses.map((use, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
                      <span>{use}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-2 text-xs text-teal-900">
                  <Clock className="w-4 h-4 text-teal-700" />
                  <span><strong>Typical Session Duration:</strong> {techItem.sessionDuration}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-teal-900">
                  <ShieldCheck className="w-4 h-4 text-teal-700" />
                  <span><strong>Administered By:</strong> Dr. Sumit Kumar (MBBS)</span>
                </div>
              </div>
            </>
          )}

          {/* If Condition: Symptoms & Clinical Approach */}
          {!isTech && condItem && (
            <>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Common Signs &amp; Diagnostic Markers:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {condItem.commonSymptoms.map((sym, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{sym}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Dr. Sumit Kumar&apos;s Clinical Treatment Approach:
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {condItem.clinicalApproach}
                </p>
              </div>
            </>
          )}

          {/* Doctor Note */}
          <p className="text-[11px] text-slate-500 italic">
            * Medical guidance note: Every skin type is unique. A clinical evaluation is recommended before commencing procedural or pharmacological therapy.
          </p>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onBook(isTech ? `Consultation for ${techItem?.name}` : `Consultation for ${condItem?.title}`);
            }}
            className="bg-teal-700 hover:bg-teal-800 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition-all shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <span>Book Consultation for this</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
