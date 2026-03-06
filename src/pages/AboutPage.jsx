import React from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useReveal'

export default function AboutPage() {
  useScrollReveal()
  return (
    <>
      {/* Page Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: '#001F4D' }}>
        <div className="absolute inset-0">
          <img src="/project-16.png"
            alt="Port" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,31,77,0.98) 40%, rgba(0,31,77,0.7))' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8">
          <div className="flex items-center gap-2 text-white/40 text-xs tracking-[0.15em] uppercase mb-6"
            style={{ fontFamily: 'Barlow Semi Condensed, sans-serif' }}>
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span><span className="text-white/70">About Us</span>
          </div>
          <span className="section-tag" style={{ color: '#2E8B57' }}>
            <span className="block w-6 h-0.5 bg-forest-500" />Who We Are
          </span>
          <h1 className="font-display font-black text-white mt-3"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 0.95 }}>
            About<br /><span style={{ color: '#2E8B57' }}>Raisevision</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="section-tag reveal">Our Story</span>
            <h2 className="font-display font-bold mt-3 mb-6 reveal d1"
              style={{ fontSize: '2.5rem', textTransform: 'uppercase', color: '#001F4D' }}>
              Over 17 Years Moving Nigeria's Cargo
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed reveal d2" style={{ fontFamily: 'Barlow, sans-serif' }}>
              <p>Raisevision and Company Limited was incorporated in <strong>2007</strong> under the Companies and Allied Matters Act (CAMA 1990). From our base in Apapa, Lagos — Nigeria's busiest port corridor — we have built a reputation defined by reliability, compliance, and operational excellence.</p>
              <p>While clearing and forwarding remains our flagship service, our expertise extends across the entire logistics value chain: sea freight, air cargo, road haulage, warehousing, customs advisory, and export facilitation.</p>
              <p>Our sister companies — <strong>Power Cargo International Limited</strong> and <strong>Tookevision Nigeria Limited</strong> — extend our operational capacity, allowing us to handle large-scale and complex logistics assignments without losing the personal service that defines our brand.</p>
            </div>
          </div>

          <div className="space-y-4 reveal-scale d2">
            <div className="img-overlay aspect-video">
              <img src="/project-10.png"
                alt="Port operations" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '2007', label: 'Incorporated' },
                { val: '4', label: 'Licences' },
                { val: '3', label: 'Group Companies' },
                { val: '17+', label: 'Years Active' },
              ].map(({ val, label }) => (
                <div key={label} className="bg-slate-50 p-5 border-l-4 border-forest-500">
                  <div className="stat-number text-4xl">{val}</div>
                  <div className="text-xs text-gray-500 tracking-[0.15em] uppercase mt-1"
                    style={{ fontFamily: 'Barlow Semi Condensed, sans-serif' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Group companies */}
      <section className="py-20" style={{ background: '#F4F7F9' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-tag reveal mx-auto justify-center">The Group</span>
            <h2 className="font-display font-bold mt-3 reveal d1"
              style={{ fontSize: '2.5rem', textTransform: 'uppercase', color: '#001F4D' }}>
              Three Companies, One Standard
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Raisevision and Company Limited', role: 'Flagship Company', desc: 'Clearing, forwarding, freight management, customs advisory, and export facilitation. The cornerstone of the group.', accent: '#2E8B57' },
              { name: 'Power Cargo International Limited', role: 'Sister Company', desc: 'Specialised cargo handling and power sector logistics. Focused on infrastructure and energy project delivery.', accent: '#001F4D' },
              { name: 'Tookevision Nigeria Ltd', role: 'Sister Company', desc: 'Extended customs and port operations support. Reinforcing the group\'s capacity at all major Nigerian terminals.', accent: '#C9922A' },
            ].map(({ name, role, desc, accent }, i) => (
              <div key={i} className={`bg-white p-8 service-card reveal d${i + 1}`}
                style={{ borderTop: `4px solid ${accent}` }}>
                <div className="text-xs tracking-[0.2em] uppercase font-semibold mb-2"
                  style={{ color: accent, fontFamily: 'Barlow Semi Condensed, sans-serif' }}>{role}</div>
                <h3 className="font-display font-bold text-xl uppercase mb-3" style={{ color: '#001F4D' }}>{name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: 'Barlow, sans-serif' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-tag reveal mx-auto justify-center">Our Values</span>
            <h2 className="font-display font-bold mt-3 reveal d1"
              style={{ fontSize: '2.5rem', textTransform: 'uppercase', color: '#001F4D' }}>
              What Drives Us
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '⚖️', title: 'Compliance', desc: 'Every shipment fully legal and properly documented.' },
              { icon: '⚡', title: 'Speed', desc: 'Fast clearance minimises demurrage and delays.' },
              { icon: '🤝', title: 'Partnership', desc: 'Long-term client relationships over one-off transactions.' },
              { icon: '🎯', title: 'Precision', desc: 'Accuracy in documentation, timing, and delivery.' },
            ].map(({ icon, title, desc }, i) => (
              <div key={i} className={`text-center p-6 reveal d${i + 1}`}>
                <div className="text-4xl mb-4">{icon}</div>
                <h4 className="font-display font-bold text-lg uppercase tracking-wide mb-2" style={{ color: '#001F4D' }}>{title}</h4>
                <p className="text-gray-500 text-sm" style={{ fontFamily: 'Barlow, sans-serif' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: '#001F4D' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-white text-4xl uppercase tracking-wide mb-4 reveal">
            Ready to Work with Us?
          </h2>
          <p className="text-white/60 mb-8 reveal d1" style={{ fontFamily: 'Barlow, sans-serif' }}>
            Get in touch with our team and get a customised logistics quote within 24 hours.
          </p>
          <Link to="/contact" className="btn-primary reveal d2">
            Contact Us Today
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>
    </>
  )
}
