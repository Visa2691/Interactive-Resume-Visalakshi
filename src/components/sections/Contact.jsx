import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, MapPin } from 'lucide-react'

function LinkedInIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  )
}
import SectionWrapper, { SectionHeader } from '../ui/SectionWrapper'
import { profile } from '../../data/resume'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    // EmailJS integration ready — replace with your serviceId/templateId/publicKey
    // import emailjs from '@emailjs/browser'
    // await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY')
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    }, 1200)
  }

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #ede9fe 0%, #fce7f3 50%, #dbeafe 100%)' }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

      <div className="max-w-4xl mx-auto relative">
        <SectionHeader
          eyebrow="Let's Connect"
          title="Get in Touch"
          subtitle="Open to senior data & analytics leadership roles, advisory conversations, and collaborative opportunities."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-violet-200 hover:border-violet-400 transition-all group shadow-sm"
            >
              <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center group-hover:bg-violet-600 transition-colors">
                <Mail size={18} className="text-violet-600 group-hover:text-white" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium mb-0.5">Email</p>
                <p className="text-slate-800 font-semibold text-sm">{profile.email}</p>
              </div>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-violet-200 hover:border-violet-400 transition-all group shadow-sm"
            >
              <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center group-hover:bg-violet-600 transition-colors">
                <LinkedInIcon size={18} className="text-violet-600 group-hover:text-white" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium mb-0.5">LinkedIn</p>
                <p className="text-slate-800 font-semibold text-sm">visalakshi-saminathan</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-violet-200 shadow-sm">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                <MapPin size={18} className="text-emerald-600" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium mb-0.5">Location</p>
                <p className="text-slate-800 font-semibold text-sm">{profile.location}</p>
              </div>
            </div>

            {/* Availability badge */}
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="font-semibold text-emerald-800 text-sm">Open to Opportunities</span>
              </div>
              <p className="text-emerald-700 text-xs">
                Available for senior data & analytics leadership roles in Sydney and remotely.
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {status === 'sent' ? (
              <div className="h-full flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm rounded-2xl border border-violet-200 p-8 text-center shadow-sm">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="font-display font-bold text-slate-900 text-xl mb-2">Message sent!</h3>
                <p className="text-slate-500 text-sm">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 px-5 py-2 bg-violet-600 text-white rounded-full text-sm font-semibold hover:bg-violet-700 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/80 backdrop-blur-sm rounded-2xl border border-violet-200 p-6 shadow-sm space-y-4"
              >
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the opportunity or what you'd like to discuss..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-violet-600 text-white font-semibold rounded-xl hover:bg-violet-700 disabled:opacity-60 transition-all"
                >
                  {status === 'sending' ? (
                    <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                  ) : (
                    <Send size={16} />
                  )}
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
