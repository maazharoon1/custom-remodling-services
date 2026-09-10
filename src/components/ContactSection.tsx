import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  ExternalLink,
  Check,
  AlertCircle,
} from 'lucide-react';
import { EstimateFormData } from '../types';
import { BUSINESS_INFO, DEMO_SERVICES } from '../data/companyData';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedService,
}) => {
  const [formData, setFormData] = useState<EstimateFormData>({
    name: '',
    phone: '',
    email: '',
    service: preselectedService || '',
    cityOrZip: '',
    details: '',
    timeline: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [preparedNotice, setPreparedNotice] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.phone.trim()) errs.phone = 'Please provide a contact phone number';
    if (!formData.service) errs.service = 'Please select the service needed';
    if (!formData.cityOrZip.trim()) errs.cityOrZip = 'Please provide your project city or ZIP code';
    if (!formData.details.trim()) errs.details = 'Please describe your project scope or goals';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Construct the WhatsApp message text accurately
    const messageLines = [
      `Hello Custom Remodeling Services, I would like to request a project estimate:`,
      ``,
      `• Name: ${formData.name.trim()}`,
      `• Phone: ${formData.phone.trim()}`,
      formData.email.trim() ? `• Email: ${formData.email.trim()}` : null,
      `• Service Needed: ${formData.service}`,
      `• Project City / ZIP: ${formData.cityOrZip.trim()}`,
      formData.timeline ? `• Preferred Timeline: ${formData.timeline}` : null,
      `• Project Details: ${formData.details.trim()}`,
    ].filter(Boolean);

    const fullMessage = messageLines.join('\n');
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/17162254145?text=${encodedMessage}`;

    // Indicate that message has been prepared for WhatsApp
    setPreparedNotice('Your estimate details are prepared. Opening WhatsApp...');

    // Open WhatsApp in new tab or window
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contact-estimate-section"
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="contact-section-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Communication & Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2
                id="contact-section-heading"
                className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#444d52] tracking-tight leading-[1.15]"
              >
                Tell Us What You’re Planning.
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed font-light">
                Share your remodeling goals, required trade phases, or areas needing attention. We provide clear conversations and free estimates to help you plan with confidence.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-3.5 pt-2">
              {/* Call Now */}
              <a
                id="contact-channel-call"
                href={BUSINESS_INFO.callLink}
                className="flex items-center justify-between p-4 bg-[#faf9f7] hover:bg-neutral-100/80 border border-[#444d52]/15 hover:border-[#c79b75] rounded-xs transition-colors group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xs bg-white border border-[#444d52]/10 flex items-center justify-center text-[#444d52] group-hover:text-[#c79b75] transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500 font-medium">Direct Telephone</div>
                    <div className="text-sm font-semibold text-[#444d52] group-hover:text-[#c79b75] transition-colors">
                      {BUSINESS_INFO.phone}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#c79b75] group-hover:translate-x-0.5 transition-transform">
                  Call Now
                </span>
              </a>

              {/* WhatsApp Direct */}
              <a
                id="contact-channel-whatsapp"
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-[#faf9f7] hover:bg-neutral-100/80 border border-[#444d52]/15 hover:border-[#c79b75] rounded-xs transition-colors group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xs bg-white border border-[#444d52]/10 flex items-center justify-center text-[#444d52] group-hover:text-[#c79b75] transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500 font-medium">Direct Messaging</div>
                    <div className="text-sm font-semibold text-[#444d52] group-hover:text-[#c79b75] transition-colors">
                      WhatsApp Chat
                    </div>
                  </div>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#c79b75] group-hover:translate-x-0.5 transition-transform">
                  Open Chat
                </span>
              </a>

              {/* Email */}
              <a
                id="contact-channel-email"
                href={BUSINESS_INFO.emailLink}
                className="flex items-center justify-between p-4 bg-[#faf9f7] hover:bg-neutral-100/80 border border-[#444d52]/15 hover:border-[#c79b75] rounded-xs transition-colors group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xs bg-white border border-[#444d52]/10 flex items-center justify-center text-[#444d52] group-hover:text-[#c79b75] transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500 font-medium">Inquiry Email</div>
                    <div className="text-sm font-semibold text-[#444d52] group-hover:text-[#c79b75] transition-colors">
                      {BUSINESS_INFO.email}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#c79b75] group-hover:translate-x-0.5 transition-transform">
                  Send Email
                </span>
              </a>
            </div>

            {/* Online Profiles */}
            <div className="pt-2 border-t border-[#444d52]/10">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#444d52] mb-3">
                Connect on Social Media
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  id="contact-social-facebook"
                  href={BUSINESS_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-neutral-50 hover:bg-[#444d52] text-neutral-700 hover:text-white border border-[#444d52]/20 text-xs rounded-xs transition-colors"
                >
                  <span>Facebook Profile</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
                <a
                  id="contact-social-instagram"
                  href={BUSINESS_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-neutral-50 hover:bg-[#444d52] text-neutral-700 hover:text-white border border-[#444d52]/20 text-xs rounded-xs transition-colors"
                >
                  <span>Instagram Profile</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Free Estimate WhatsApp Form */}
          <div className="lg:col-span-7 bg-[#faf9f7] border border-[#444d52]/15 p-6 sm:p-10 rounded-xs shadow-xs">
            <div className="mb-6 pb-4 border-b border-[#444d52]/10">
              <h3 className="font-serif-heading text-2xl font-bold text-[#444d52]">
                Request a Free Project Estimate
              </h3>
              <p className="mt-1 text-xs text-neutral-600">
                Complete the fields below. We will format your details directly into WhatsApp for quick dispatch.
              </p>
            </div>

            <form id="whatsapp-estimate-form" onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Row 1: Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="form-input-name"
                    className="block text-xs font-semibold text-[#444d52] mb-1 uppercase tracking-wider"
                  >
                    Your Full Name <span className="text-[#c79b75]">*</span>
                  </label>
                  <input
                    type="text"
                    id="form-input-name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full px-3.5 py-2.5 bg-white border text-sm text-[#444d52] focus:outline-none focus:border-[#c79b75] transition-colors rounded-xs ${
                      errors.name ? 'border-red-500' : 'border-[#444d52]/20'
                    }`}
                    required
                  />
                  {errors.name && (
                    <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="form-input-phone"
                    className="block text-xs font-semibold text-[#444d52] mb-1 uppercase tracking-wider"
                  >
                    Contact Phone Number <span className="text-[#c79b75]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="form-input-phone"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    placeholder="e.g. 716-555-0199"
                    className={`w-full px-3.5 py-2.5 bg-white border text-sm text-[#444d52] focus:outline-none focus:border-[#c79b75] transition-colors rounded-xs ${
                      errors.phone ? 'border-red-500' : 'border-[#444d52]/20'
                    }`}
                    required
                  />
                  {errors.phone && (
                    <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Email (Optional) and Service Needed */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="form-input-email"
                    className="block text-xs font-semibold text-[#444d52] mb-1 uppercase tracking-wider"
                  >
                    Email Address <span className="text-neutral-400 text-[10px] font-normal">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    id="form-input-email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#444d52]/20 text-sm text-[#444d52] focus:outline-none focus:border-[#c79b75] transition-colors rounded-xs"
                  />
                </div>

                <div>
                  <label
                    htmlFor="form-select-service"
                    className="block text-xs font-semibold text-[#444d52] mb-1 uppercase tracking-wider"
                  >
                    Service Needed <span className="text-[#c79b75]">*</span>
                  </label>
                  <select
                    id="form-select-service"
                    value={formData.service}
                    onChange={(e) => {
                      setFormData({ ...formData, service: e.target.value });
                      if (errors.service) setErrors({ ...errors, service: '' });
                    }}
                    className={`w-full px-3.5 py-2.5 bg-white border text-sm text-[#444d52] focus:outline-none focus:border-[#c79b75] transition-colors rounded-xs ${
                      errors.service ? 'border-red-500' : 'border-[#444d52]/20'
                    }`}
                    required
                  >
                    <option value="">Select a service category...</option>
                    {DEMO_SERVICES.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                    <option value="Other">Other Custom Work</option>
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.service}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3: Project City or ZIP and Preferred Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="form-input-city-zip"
                    className="block text-xs font-semibold text-[#444d52] mb-1 uppercase tracking-wider"
                  >
                    Project City or ZIP Code <span className="text-[#c79b75]">*</span>
                  </label>
                  <input
                    type="text"
                    id="form-input-city-zip"
                    value={formData.cityOrZip}
                    onChange={(e) => {
                      setFormData({ ...formData, cityOrZip: e.target.value });
                      if (errors.cityOrZip) setErrors({ ...errors, cityOrZip: '' });
                    }}
                    placeholder="e.g. City or ZIP code"
                    className={`w-full px-3.5 py-2.5 bg-white border text-sm text-[#444d52] focus:outline-none focus:border-[#c79b75] transition-colors rounded-xs ${
                      errors.cityOrZip ? 'border-red-500' : 'border-[#444d52]/20'
                    }`}
                    required
                  />
                  {errors.cityOrZip && (
                    <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.cityOrZip}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="form-select-timeline"
                    className="block text-xs font-semibold text-[#444d52] mb-1 uppercase tracking-wider"
                  >
                    Preferred Timeline <span className="text-neutral-400 text-[10px] font-normal">(Optional)</span>
                  </label>
                  <select
                    id="form-select-timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#444d52]/20 text-sm text-[#444d52] focus:outline-none focus:border-[#c79b75] transition-colors rounded-xs"
                  >
                    <option value="">Select target timeline...</option>
                    <option value="Immediately / As soon as possible">Immediately / As soon as possible</option>
                    <option value="Within 1 to 3 months">Within 1 to 3 months</option>
                    <option value="Within 3 to 6 months">Within 3 to 6 months</option>
                    <option value="Flexible / Early planning phase">Flexible / Early planning phase</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Project Details */}
              <div>
                <label
                  htmlFor="form-textarea-details"
                  className="block text-xs font-semibold text-[#444d52] mb-1 uppercase tracking-wider"
                >
                  Project Details & Scope <span className="text-[#c79b75]">*</span>
                </label>
                <textarea
                  id="form-textarea-details"
                  rows={4}
                  value={formData.details}
                  onChange={(e) => {
                    setFormData({ ...formData, details: e.target.value });
                    if (errors.details) setErrors({ ...errors, details: '' });
                  }}
                  placeholder="Describe your rooms, surfaces, intended updates, or current conditions..."
                  className={`w-full px-3.5 py-2.5 bg-white border text-sm text-[#444d52] focus:outline-none focus:border-[#c79b75] transition-colors rounded-xs ${
                    errors.details ? 'border-red-500' : 'border-[#444d52]/20'
                  }`}
                  required
                />
                {errors.details && (
                  <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.details}</span>
                  </p>
                )}
              </div>

              {/* Submit Button & Required Explanation */}
              <div className="pt-2 space-y-2.5">
                <button
                  type="submit"
                  id="contact-form-whatsapp-submit-btn"
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 bg-[#444d52] hover:bg-[#c79b75] text-white font-semibold text-xs sm:text-sm uppercase tracking-widest transition-colors duration-200 cursor-pointer shadow-xs rounded-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#c79b75] hover:text-white" />
                  <span>Request Estimate on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Explicitly Required Explanation */}
                <p className="text-center text-xs text-neutral-500">
                  WhatsApp will open with your project information ready to send.
                </p>

                {preparedNotice && (
                  <div className="p-3 bg-white border border-[#c79b75]/40 text-xs text-[#444d52] rounded-xs flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#c79b75] shrink-0" />
                    <span>{preparedNotice}</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
