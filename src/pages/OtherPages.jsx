// Gallery Page
import React from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useReveal'

const GALLERY_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80', caption: 'Container Terminal Operations' },
  { src: 'https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=800&q=80', caption: 'Port Clearance — Apapa Terminal' },
  { src: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80', caption: 'Air Freight — Lagos International' },
  { src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80', caption: 'Nationwide Road Haulage' },
  { src: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80', caption: 'Warehouse & Cargo Handling' },
  { src: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=80', caption: 'Cargo Documentation Centre' },
  { src: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&q=80', caption: 'Heavy Equipment Logistics' },
  { src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80', caption: 'Freight Coordination Hub' },
  { src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80', caption: 'Compliance & Documentation' },
]

export function GalleryPage() {
  useScrollReveal()
  return (
    <>
      <section className="relative py-24" style={{ background: '#001226' }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1600&q=80"
            alt="Gallery" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-navy-900/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8">
          <div className="flex items-center gap-2 text-white/40 text-xs tracking-widest uppercase mb-6"
            style={{ fontFamily: 'Barlow Semi Condensed, sans-serif' }}>
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span><span className="text-white/70">Gallery</span>
          </div>
          <span className="section-tag" style={{ color: '#2E8B57' }}>Operations Gallery</span>
          <h1 className="font-display font-black text-white mt-3"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 0.95 }}>
            Our Work<br /><span style={{ color: '#2E8B57' }}>In Action</span>
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {GALLERY_IMAGES.map(({ src, caption }, i) => (
              <div key={i} className={`img-overlay overflow-hidden group reveal d${Math.min((i % 3) + 1, 6)} ${i === 0 || i === 4 ? 'md:col-span-2' : ''} ${i === 0 ? 'aspect-video' : 'aspect-square'}`}>
                <img src={src} alt={caption} loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/50 transition-all duration-400" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold text-sm uppercase tracking-wide"
                    style={{ fontFamily: 'Barlow Semi Condensed, sans-serif' }}>{caption}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-10 italic" style={{ fontFamily: 'Barlow, sans-serif' }}>
            Gallery images are representative. Upload your actual operations photos to replace these.
          </p>
        </div>
      </section>
    </>
  )
}

// Clients Page
const CLIENTS = [
  { name: 'Maersk Line', sector: 'Shipping', desc: 'Coordinated clearance for Maersk container shipments at Apapa and Tin-Can terminals.' },
  { name: 'MSC Nigeria', sector: 'Shipping', desc: 'Ongoing partnership for FCL import clearance and documentation management.' },
  { name: 'Transmission Company of Nigeria', sector: 'Power & Infrastructure', desc: 'Logistics support for power transmission equipment imports, including heavy lift coordination.' },
  { name: 'Afe Babalola University', sector: 'Education', desc: 'Academic and laboratory equipment clearance and campus delivery coordination.' },
  { name: 'Sumogo Nigeria Limited', sector: 'Trade', desc: 'Regular import clearing and forwarding across multiple commodity lines.' },
  { name: 'Topfinger Investment Nig Ltd', sector: 'Investment', desc: 'Commercial goods clearance and documentation management.' },
  { name: 'Mantol Nigeria Limited', sector: 'Trade', desc: 'Sea freight coordination and customs clearance services.' },
  { name: 'Electrical Solution Limited', sector: 'Engineering', desc: 'Electrical equipment imports, NPA-cleared and delivered to site.' },
]

export function ClientsPage() {
  useScrollReveal()
  return (
    <>
      <section className="relative py-24" style={{ background: '#001226' }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80"
            alt="Clients" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-navy-900/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8">
          <div className="flex items-center gap-2 text-white/40 text-xs tracking-widest uppercase mb-6"
            style={{ fontFamily: 'Barlow Semi Condensed, sans-serif' }}>
            <Link to="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-white/70">Clients</span>
          </div>
          <span className="section-tag" style={{ color: '#2E8B57' }}>Who Trusts Us</span>
          <h1 className="font-display font-black text-white mt-3"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 0.95 }}>
            Our<br /><span style={{ color: '#2E8B57' }}>Clients</span>
          </h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {CLIENTS.map(({ name, sector, desc }, i) => (
              <div key={i} className={`p-7 service-card bg-slate-50 border-l-4 reveal d${Math.min((i % 4) + 1, 6)}`}
                style={{ borderLeftColor: '#2E8B57' }}>
                <div className="text-xs tracking-[0.2em] uppercase font-semibold mb-1"
                  style={{ color: '#C9922A', fontFamily: 'Barlow Semi Condensed, sans-serif' }}>{sector}</div>
                <h3 className="font-display font-bold text-2xl uppercase mb-3" style={{ color: '#001F4D' }}>{name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: 'Barlow, sans-serif' }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Siemens project */}
          <div className="mt-12 p-8 reveal" style={{ background: '#001F4D' }}>
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: '#2E8B57' }}>⚡</div>
              <div>
                <div className="text-xs tracking-widest uppercase font-semibold mb-2"
                  style={{ color: '#C9922A', fontFamily: 'Barlow Semi Condensed, sans-serif' }}>Featured Project</div>
                <h3 className="font-display font-bold text-2xl text-white uppercase mb-3">Siemens Infrastructure Projects</h3>
                <p className="text-white/65 leading-relaxed" style={{ fontFamily: 'Barlow, sans-serif' }}>
                  Delivered comprehensive logistics support for major power infrastructure projects involving Siemens equipment across Nigeria. Scope included port clearance at Apapa, specialist heavy lift haulage, and site delivery coordination for high-value electrical infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// Certificates Page
const CERTS = [
  {
    title: 'CAC Certificate of Incorporation',
    authority: 'Corporate Affairs Commission',
    rc: 'RC 718788',
    desc: 'Incorporated under the Companies and Allied Matters Act (CAMA 1990). Raisevision is a fully registered Nigerian company operating within the law.',
    color: '#2E8B57', icon: '🏛️',
  },
  {
    title: 'Nigerian Ports Authority Licence',
    authority: 'NPA — Nigerian Ports Authority',
    rc: 'Active Licence',
    desc: 'Licensed by the NPA to operate as an approved clearing agent at all major Nigerian seaports including Apapa, Tin-Can, and Onne.',
    color: '#003380', icon: '⚓',
  },
  {
    title: 'Nigeria Customs Service Clearing Licence',
    authority: 'NCS — Nigeria Customs Service',
    rc: 'Active Licence',
    desc: 'Certified customs clearing agent authorised by the Nigeria Customs Service to process import and export documentation and customs duty payments.',
    color: '#001F4D', icon: '🛃',
  },
  {
    title: 'NEPC Exporter Registration',
    authority: 'Nigerian Export Promotion Council',
    rc: 'Registered Member',
    desc: 'Registered with the Nigerian Export Promotion Council, enabling full export advisory, documentation facilitation, and NXP form processing for Nigerian exporters.',
    color: '#C9922A', icon: '🌍',
  },
]

export function CertificatesPage() {
  useScrollReveal()
  return (
    <>
      <section className="relative py-24" style={{ background: '#001226' }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80"
            alt="Certificates" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-navy-900/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8">
          <div className="flex items-center gap-2 text-white/40 text-xs tracking-widest uppercase mb-6"
            style={{ fontFamily: 'Barlow Semi Condensed, sans-serif' }}>
            <Link to="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-white/70">Licences & Certificates</span>
          </div>
          <span className="section-tag" style={{ color: '#2E8B57' }}>Credentials</span>
          <h1 className="font-display font-black text-white mt-3"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 0.95 }}>
            Licensed &<br /><span style={{ color: '#2E8B57' }}>Compliant</span>
          </h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gray-600 max-w-2xl mb-14 reveal" style={{ fontFamily: 'Barlow, sans-serif', fontSize: '1.05rem' }}>
            Raisevision operates fully within Nigerian legal and regulatory frameworks. Every shipment is backed by valid licences and full statutory compliance.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {CERTS.map(({ title, authority, rc, desc, color, icon }, i) => (
              <div key={i} className={`service-card bg-white border border-gray-100 overflow-hidden reveal d${i + 1}`}>
                <div className="h-2" style={{ background: color }} />
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-14 h-14 flex items-center justify-center text-2xl flex-shrink-0"
                      style={{ background: `${color}18` }}>
                      {icon}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg uppercase" style={{ color: '#001F4D' }}>{title}</h3>
                      <p className="text-xs tracking-[0.15em] uppercase font-semibold mt-0.5"
                        style={{ color, fontFamily: 'Barlow Semi Condensed, sans-serif' }}>{authority}</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5" style={{ fontFamily: 'Barlow, sans-serif' }}>{desc}</p>
                  {/* Certificate placeholder */}
                  <div className="border-2 border-dashed rounded flex items-center justify-center py-10"
                    style={{ borderColor: `${color}40`, background: `${color}06` }}>
                    <div className="text-center">
                      <div className="text-3xl mb-2">📄</div>
                      <p className="text-xs font-semibold tracking-wider uppercase"
                        style={{ color, fontFamily: 'Barlow Semi Condensed, sans-serif' }}>
                        Certificate Image — {rc}
                      </p>
                      <p className="text-xs text-gray-400 mt-1" style={{ fontFamily: 'Barlow, sans-serif' }}>
                        Upload certificate scan here
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 text-center reveal" style={{ background: '#F4F7F9' }}>
            <div className="text-4xl mb-3">✅</div>
            <h3 className="font-display font-bold text-2xl uppercase mb-2" style={{ color: '#001F4D' }}>
              All Licences Active & Verified
            </h3>
            <p className="text-gray-500 text-sm" style={{ fontFamily: 'Barlow, sans-serif' }}>
              Clients can request verification of any licence directly from the issuing authority. We operate with full transparency.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

// Contact Page
export function ContactPage() {
  useScrollReveal()
  const [form, setForm] = React.useState({ name: '', company: '', email: '', phone: '', service: '', message: '' })
  const [sent, setSent] = React.useState(false)
  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = e => { e.preventDefault(); setSent(true) }

  return (
    <>
      <section className="relative py-24" style={{ background: '#001226' }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80"
            alt="Contact" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-navy-900/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8">
          <div className="flex items-center gap-2 text-white/40 text-xs tracking-widest uppercase mb-6"
            style={{ fontFamily: 'Barlow Semi Condensed, sans-serif' }}>
            <Link to="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-white/70">Contact</span>
          </div>
          <span className="section-tag" style={{ color: '#2E8B57' }}>Get in Touch</span>
          <h1 className="font-display font-black text-white mt-3"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 0.95 }}>
            Contact<br /><span style={{ color: '#2E8B57' }}>Us</span>
          </h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <span className="section-tag reveal">Our Details</span>
            <h2 className="font-display font-bold mt-3 mb-8 reveal d1"
              style={{ fontSize: '2.2rem', textTransform: 'uppercase', color: '#001F4D' }}>
              Raisevision and Company Limited
            </h2>

            {[
              { icon: '📍', label: 'Head Office', content: '4/5 Apapa–Oshodi Expressway\n2nd Floor, Right Wing (Blue House)\nCoconut Bus Stop, Apapa, Lagos, Nigeria' },
              { icon: '📞', label: 'Phone', content: '0803 718 5967\n0809 817 7660\n0802 411 0750\n0805 797 2005' },
              { icon: '✉️', label: 'Email', content: 'info@raisevisionlogistics.com' },
            ].map(({ icon, label, content }, i) => (
              <div key={i} className={`flex gap-5 mb-8 reveal d${i + 1}`}>
                <div className="w-12 h-12 flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: '#F4F7F9', border: '2px solid #E5EAF0' }}>
                  {icon}
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-1 text-gray-400"
                    style={{ fontFamily: 'Barlow Semi Condensed, sans-serif' }}>{label}</p>
                  {content.split('\n').map((line, j) => (
                    <p key={j} className="text-gray-700 text-sm" style={{ fontFamily: 'Barlow, sans-serif' }}>{line}</p>
                  ))}
                </div>
              </div>
            ))}

            <a href="https://wa.me/2348057972005" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 text-white font-semibold reveal d4"
              style={{ background: '#25D366', fontFamily: 'Barlow Semi Condensed, sans-serif' }}>
              <svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat on WhatsApp — 0805 797 2005
            </a>
          </div>

          {/* Form */}
          <div className="reveal d2">
            <h3 className="font-display font-bold text-2xl uppercase mb-6" style={{ color: '#001F4D' }}>
              Request a Quote
            </h3>
            {sent ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 flex items-center justify-center text-2xl mx-auto mb-4"
                  style={{ background: '#2E8B57' }}>✓</div>
                <h4 className="font-display font-bold text-2xl uppercase mb-2" style={{ color: '#001F4D' }}>Message Sent!</h4>
                <p className="text-gray-500 text-sm" style={{ fontFamily: 'Barlow, sans-serif' }}>Our team will respond within 24 hours.</p>
                <button onClick={() => setSent(false)} className="mt-6 text-xs underline text-gray-500">Send another</button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {[['name', 'Full Name', 'Your name'], ['company', 'Company', 'Company name']].map(([n, l, p]) => (
                    <div key={n}>
                      <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-gray-500 mb-2"
                        style={{ fontFamily: 'Barlow Semi Condensed, sans-serif' }}>{l}</label>
                      <input name={n} value={form[n]} onChange={handle} placeholder={p} required={n==='name'}
                        className="input-field" />
                    </div>
                  ))}
                </div>
                {[['email', 'Email', 'your@email.com', 'email'], ['phone', 'Phone', '+234 xxx xxx xxxx', 'tel']].map(([n, l, p, t]) => (
                  <div key={n}>
                    <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-gray-500 mb-2"
                      style={{ fontFamily: 'Barlow Semi Condensed, sans-serif' }}>{l}</label>
                    <input name={n} type={t} value={form[n]} onChange={handle} placeholder={p} required={n==='email'}
                      className="input-field" />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-gray-500 mb-2"
                    style={{ fontFamily: 'Barlow Semi Condensed, sans-serif' }}>Service Required</label>
                  <select name="service" value={form.service} onChange={handle} className="input-field bg-white">
                    <option value="">Select a service...</option>
                    {['Clearing & Forwarding', 'Sea Freight', 'Air Freight', 'Road Transport', 'Warehousing', 'Customs Advisory', 'Export Documentation'].map(s => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-gray-500 mb-2"
                    style={{ fontFamily: 'Barlow Semi Condensed, sans-serif' }}>Message</label>
                  <textarea name="message" value={form.message} onChange={handle} rows={4}
                    placeholder="Describe your logistics requirements..." required
                    className="input-field resize-none" />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Send Message
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
