'use client';

import { FormEvent, useState } from 'react';
import { trackEvent } from '@/lib/analytics';

type FormState = {
  name: string;
  company: string;
  email: string;
  telegram: string;
  trafficType: string;
  monthlyVolume: string;
  topGeo: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  company: '',
  email: '',
  telegram: '',
  trafficType: '',
  monthlyVolume: '',
  topGeo: '',
  message: '',
};

export default function LeadCaptureForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setMessage('');
    trackEvent('lead_form_submit_started', { location: 'join_page' });

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Unable to submit application.');
      }
      setStatus('success');
      setMessage(data.message);
      setForm(initialState);
      trackEvent('lead_form_submit_success', { location: 'join_page' });
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Unable to submit application.');
      trackEvent('lead_form_submit_error', { location: 'join_page' });
    }
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="form-field">
          <span>Name *</span>
          <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Alex / Team name" required />
        </label>
        <label className="form-field">
          <span>Company</span>
          <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Brand / network / project" />
        </label>
        <label className="form-field">
          <span>Email *</span>
          <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" required />
        </label>
        <label className="form-field">
          <span>Telegram *</span>
          <input value={form.telegram} onChange={(e) => setForm({ ...form, telegram: e.target.value })} placeholder="@handle" required />
        </label>
        <label className="form-field">
          <span>Traffic type *</span>
          <input value={form.trafficType} onChange={(e) => setForm({ ...form, trafficType: e.target.value })} placeholder="SEO / Telegram / media buying" required />
        </label>
        <label className="form-field">
          <span>Monthly volume *</span>
          <input value={form.monthlyVolume} onChange={(e) => setForm({ ...form, monthlyVolume: e.target.value })} placeholder="e.g. 50k clicks or $20k budget" required />
        </label>
        <label className="form-field md:col-span-2">
          <span>Top GEO *</span>
          <input value={form.topGeo} onChange={(e) => setForm({ ...form, topGeo: e.target.value })} placeholder="UK / CA / DE" required />
        </label>
        <label className="form-field md:col-span-2">
          <span>Message</span>
          <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="What partner, offer, or commercial path do you need right now?" rows={5} />
        </label>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="submit" className="button-primary w-full sm:w-auto" disabled={status === 'loading'}>
          {status === 'loading' ? 'Submitting...' : 'Submit Application'}
        </button>
        <div className="rounded-[1rem] border border-white/8 bg-white/[0.035] px-4 py-3 text-sm text-white/58">
          Instant routing supports Telegram alerts and webhook delivery.
        </div>
      </div>

      {message ? (
        <div className={status === 'success' ? 'status-success' : 'status-error'}>{message}</div>
      ) : null}
    </form>
  );
}
