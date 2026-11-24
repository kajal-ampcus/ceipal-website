import { FormEvent, useState } from 'react';
import { CheckCircle2, Mail, Phone, ShieldCheck, X } from 'lucide-react';

export type ModalKind = 'demo' | 'support' | 'privacy' | 'terms' | 'security' | null;

interface PortalModalsProps {
  activeModal: ModalKind;
  onClose: () => void;
}

export function PortalModals({ activeModal, onClose }: PortalModalsProps) {
  const [demoName, setDemoName] = useState('');
  const [demoEmail, setDemoEmail] = useState('');
  const [demoCompany, setDemoCompany] = useState('');
  const [demoTeamSize, setDemoTeamSize] = useState('25–100 recruiters');
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  if (!activeModal) return null;

  const handleClose = () => {
    setDemoSubmitted(false);
    onClose();
  };

  const handleDemoSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!demoName.trim() || !demoEmail.trim() || !demoCompany.trim()) return;
    setDemoSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1F3A]/55 backdrop-blur-[2px]"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-lg bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
          <h2 className="font-[var(--font-display)] text-lg font-bold text-[#0B1F3A]">
            {activeModal === 'demo' && 'Request a Ceipal Platform Demo'}
            {activeModal === 'support' && 'Ceipal Customer Support'}
            {activeModal === 'privacy' && 'Privacy Policy Summary'}
            {activeModal === 'terms' && 'Enterprise Terms of Service'}
            {activeModal === 'security' && 'Security & Compliance Overview'}
          </h2>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close modal"
            className="w-9 h-9 inline-flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {activeModal === 'demo' && (
            <>
              {demoSubmitted ? (
                <div className="py-4 text-center space-y-3">
                  <div className="w-11 h-11 rounded-full bg-emerald-50 text-[#16A34A] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-[var(--font-display)] text-base font-bold text-[#0B1F3A]">
                    Demo request received
                  </h3>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                    A Ceipal solutions specialist will reach out to <span className="font-medium text-slate-900">{demoEmail}</span> within one business day to schedule a walkthrough for {demoCompany}.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="px-5 py-2.5 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#132F54] rounded-lg transition-colors"
                    >
                      Return to Sign In
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleDemoSubmit} className="space-y-4">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Schedule a tailored walkthrough of Ceipal ATS, Workforce, or Procurewise with our enterprise solutions team.
                  </p>
                  <div>
                    <label htmlFor="demo-name" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Full name
                    </label>
                    <input
                      id="demo-name"
                      type="text"
                      required
                      value={demoName}
                      onChange={(e) => setDemoName(e.target.value)}
                      placeholder="Jordan Rivera"
                      className="w-full h-11 px-3.5 text-sm rounded-lg border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-[#0B1F3A] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="demo-email" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Work email
                    </label>
                    <input
                      id="demo-email"
                      type="email"
                      required
                      value={demoEmail}
                      onChange={(e) => setDemoEmail(e.target.value)}
                      placeholder="jordan@company.com"
                      className="w-full h-11 px-3.5 text-sm rounded-lg border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-[#0B1F3A] focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="demo-company" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Organization
                      </label>
                      <input
                        id="demo-company"
                        type="text"
                        required
                        value={demoCompany}
                        onChange={(e) => setDemoCompany(e.target.value)}
                        placeholder="Meridian Staffing"
                        className="w-full h-11 px-3.5 text-sm rounded-lg border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-[#0B1F3A] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="demo-size" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Team size
                      </label>
                      <select
                        id="demo-size"
                        value={demoTeamSize}
                        onChange={(e) => setDemoTeamSize(e.target.value)}
                        className="w-full h-11 px-3 text-sm rounded-lg border border-slate-300 text-slate-900 bg-white focus:border-[#0B1F3A] focus:outline-none"
                      >
                        <option>1–25 recruiters</option>
                        <option>25–100 recruiters</option>
                        <option>100–500 recruiters</option>
                        <option>500+ enterprise seats</option>
                      </select>
                    </div>
                  </div>
                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 text-sm font-semibold text-white bg-[#F46933] hover:bg-[#DE5722] rounded-lg transition-colors"
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              )}
            </>
          )}

          {activeModal === 'support' && (
            <div className="space-y-4 text-sm text-slate-600">
              <p className="leading-relaxed">
                Need help signing into your organization&apos;s Ceipal instance, resetting Two-Step Authentication, or configuring SAML SSO? Reach our 24/7 global support desk.
              </p>
              <div className="divide-y divide-slate-200 border border-slate-200 rounded-lg">
                <div className="p-4 flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#F46933] mt-0.5 shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-900">Technical Support Desk</div>
                    <div className="text-slate-600 mt-0.5">support@ceipal.com · Average response under 30 minutes</div>
                  </div>
                </div>
                <div className="p-4 flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#F46933] mt-0.5 shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-900">North America &amp; Global Hotline</div>
                    <div className="font-[var(--font-mono)] tabular-nums text-slate-600 mt-0.5">
                      +1 (585) 340-8855
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#132F54] rounded-lg transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}

          {activeModal === 'security' && (
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#16A34A] mt-0.5 shrink-0" />
                <p>
                  Ceipal maintains SOC 2 Type II attestation, ISO 27001 certification, GDPR compliance, and TLS 1.3 encryption in transit with AES-256 encryption at rest across all regional clouds.
                </p>
              </div>
              <p>
                Enterprise tenants can enforce mandatory Two-Step Verification (Email OTP or TOTP Authenticator), IP allowlisting, session timeout policies, and SAML 2.0 Single Sign-On with Okta, Microsoft Entra ID, and Google Workspace.
              </p>
              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#132F54] rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {activeModal === 'privacy' && (
            <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
              <p>
                Ceipal processes authentication credentials, audit timestamps, and candidate records strictly under your organization&apos;s Master Services Agreement and Data Processing Addendum.
              </p>
              <p>
                Regional data residency is honored based on the selected cloud region (US East, US West, EU Frankfurt, UK London, or APAC Mumbai).
              </p>
              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#132F54] rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {activeModal === 'terms' && (
            <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
              <p>
                Access to Ceipal ATS, Workforce, and Procurewise portals is restricted to authorized enterprise personnel under an active subscription license.
              </p>
              <p>
                Repeated failed sign-in attempts automatically trigger account protection lockouts. Use the Unblock Account option on the sign-in screen or contact your workspace administrator to restore access.
              </p>
              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#132F54] rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
