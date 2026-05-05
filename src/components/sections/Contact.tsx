import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send } from "lucide-react"
import Section, { SectionHeader } from '../ui/SectionWrapper'
import Constellation from '../ui/Constellation'
import { profile } from '../../data/resume'

type Status = 'idle' | 'sending' | 'sent'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Plug in EmailJS here: emailjs.send('SVC_ID','TMPL_ID', form, 'KEY')
    setTimeout(() => { setStatus('sent'); setForm({ name: '', email: '', message: '' }) }, 1000)
  }

  return (
    <section id="contact" className="relative py-24 px-6 bg-slate-950 overflow-hidden">
      <Constellation />
      <div className="relative max-w-5xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <SectionHeader eyebrow="Contact" title="Get in touch"
            subtitle="Open to senior data & analytics leadership roles, advisory conversations, and collaborations."
            dark />

          <div className="grid md:grid-cols-[280px_1fr] gap-10">
            <div className="space-y-3">
              <a href={`mailto:${profile.email}`}
                className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-sky-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-400 mb-0.5">Email</p>
                  <p className="text-white text-xs font-mono break-all leading-relaxed">{profile.email}</p>
                </div>
              </a>

              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-sky-400"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">LinkedIn</p>
                  <p className="text-white text-sm font-medium">visalakshi</p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-sky-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">Location</p>
                  <p className="text-white text-sm font-medium">{profile.location}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-emerald-400 text-xs font-semibold">Open to opportunities</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Available for senior analytics leadership roles in Sydney or remote.
                </p>
              </div>
            </div>

            {status === 'sent' ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center p-10 rounded-xl border border-white/10 bg-white/5 text-center">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2">Message sent</h3>
                <p className="text-slate-400 text-sm mb-6">I'll get back to you within 24 hours.</p>
                <button onClick={() => setStatus('idle')}
                  className="px-5 py-2 bg-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/20 transition-colors">
                  Send another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="p-6 rounded-xl border border-white/10 bg-white/5 space-y-4">
                {[
                  { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                ].map(f => (
                  <div key={f.id}>
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5" htmlFor={f.id}>{f.label}</label>
                    <input id={f.id} name={f.id} type={f.type} required
                      value={form[f.id as keyof typeof form]} onChange={onChange}
                      placeholder={f.placeholder}
                      className="w-full px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:bg-white/8 transition-colors" />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5" htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={4} required
                    value={form.message} onChange={onChange}
                    placeholder="Tell me about the role or opportunity..."
                    className="w-full px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-sky-500/50 transition-colors resize-none" />
                </div>
                <button type="submit" disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-sky-500 hover:bg-sky-400 disabled:opacity-60 text-white font-semibold text-sm rounded-lg transition-colors">
                  {status === 'sending'
                    ? <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    : <Send size={15} />}
                  {status === 'sending' ? 'Sending...' : 'Send message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
