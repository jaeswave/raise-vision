import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useReveal'

// Logistics images from Unsplash
const HERO_BG = 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1800&q=85'
const ABOUT_IMG = 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=900&q=80'
const PORT_IMG = 'https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=800&q=80'
const AIR_IMG = 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80'
const ROAD_IMG = 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80'

const STATS = [
  { num: '2007', label: 'Year Founded' },
  { num: '4', label: 'Regulatory Licences' },
  { num: '6+', label: 'Major Clients' },
  { num: '3', label: 'Group Companies' },
]

const SERVICES_PREVIEW = [
  { icon: '⚓', title: 'Clearing & Forwarding', desc: 'Expert customs clearance across all Nigerian ports and border points.', img: PORT_IMG },
  { icon: '✈️', title: 'Air Freight', desc: 'Time-critical air cargo handled with speed and full documentation.', img: AIR_IMG },
  { icon: '🚛', title: 'Road Transport', desc: 'Nationwide haulage and last-mile delivery across Nigeria.', img: ROAD_IMG },
]

export default function HomePage() {
  useScrollReveal()

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: '#001226' }}>
        {/* Port/cargo background */}
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="Port operations"
            className="w-full h-full object-cover opacity-30"
            style={{ objectPosition: 'center 60%' }} />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(105deg, rgba(0,18,38,0.97) 0%, rgba(0,18,38,0.75) 55%, rgba(0,18,38,0.3) 100%)' }} />
        </div>

        {/* Grid lines overlay */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '80px 80px' }} />

        {/* Gold accent line left */}
        <div className="absolute left-0 top-0 bottom-0 w-1"
          style={{ background: 'linear-gradient(to bottom, transparent 0%, #C9922A 30%, #C9922A 70%, transparent 100%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 py-28">
          {/* Tag */}
          <div className="hero-animate flex items-center gap-3 mb-8">
            <div className="w-8 h-0.5 bg-forest-500" />
            <span className="text-forest-500 text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ fontFamily: 'Barlow Semi Condensed, sans-serif' }}>
              Licensed · Compliant · Reliable
            </span>
          </div>

          {/* Headline */}
          <h1 className="hero-animate-2 text-white font-display font-black leading-none mb-6"
            style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            Nigeria's Trusted<br />
            <span style={{ color: '#2E8B57' }}>Clearing &</span><br />
            <span style={{ WebkitTextStroke: '2px rgba(248,250,252,0.4)', color: 'transparent' }}>Logistics</span>{' '}
            <span style={{ color: '#C9922A' }}>Partner.</span>
          </h1>

          <p className="hero-animate-3 text-white/65 max-w-xl leading-relaxed mb-10"
            style={{ fontFamily: 'Barlow, sans-serif', fontSize: 'clamp(1rem, 1.5vw, 1.15rem)' }}>
            Seamless import, export, and freight solutions across Nigeria and beyond.
            Raisevision ensures efficient, compliant, and reliable cargo movement from origin to final destination.
          </p>

          <div className="hero-animate-4 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary">
              Request a Quote
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link to="/services" className="btn-outline-white">
              Our Services
            </Link>
          </div>

          {/* Licence badges */}
          <div className="hero-animate-4 flex flex-wrap gap-3 mt-12">
            {['NPA Licensed', 'NCS Cleared', 'NEPC Registered', 'CAC 2007'].map(b => (
              <span key={b} className="text-[10px] font-semibold tracking-[0.15em] uppercase px-3 py-1.5 border border-white/20 text-white/60"
                style={{ fontFamily: 'Barlow Semi Condensed, sans-serif' }}>
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-white/20" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
        </div>
      </section>

      {/* ═══ TICKER ═══ */}
      <div style={{ background: '#2E8B57' }} className="py-3 overflow-hidden">
        <div className="ticker-track">
          {Array(3).fill(['CLEARING & FORWARDING', 'SEA FREIGHT', 'AIR CARGO', 'ROAD HAULAGE', 'WAREHOUSING', 'CUSTOMS COMPLIANCE', 'EXPORT ADVISORY', 'NPA LICENSED', 'SINCE 2007']).flat().map((t, i) => (
            <span key={i} className="inline-flex items-center gap-5 px-6 text-white/90 text-xs font-bold tracking-[0.2em] uppercase"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
              {t}<span className="w-1.5 h-1.5 rounded-full bg-white/40 inline-block" />
            </span>
          ))}
        </div>
      </div>

      {/* ═══ STATS ═══ */}
      <section style={{ background: '#001F4D' }} className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/10">
          {STATS.map(({ num, label }, i) => (
            <div key={i} className="text-center px-6 py-4 reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="stat-number text-5xl md:text-6xl mb-2">{num}</div>
              <div className="text-white/50 text-xs tracking-[0.2em] uppercase"
                style={{ fontFamily: 'Barlow Semi Condensed, sans-serif' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ INTRO / ABOUT STRIP ═══ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-tag reveal">About Raisevision</span>
            <h2 className="font-display font-bold text-navy-900 mt-3 mb-6 reveal d1"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', textTransform: 'uppercase', letterSpacing: '0.02em', color: '#001F4D' }}>
              End-to-End Logistics<br />Built for Nigeria
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5 reveal d2" style={{ fontFamily: 'Barlow, sans-serif' }}>
              Incorporated in 2007 under CAMA, Raisevision and Company Limited has built one of Nigeria's most trusted reputations in clearing, forwarding, and integrated logistics. From port operations at Apapa to air freight coordination and inland haulage, we manage every link in the chain.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 reveal d3" style={{ fontFamily: 'Barlow, sans-serif' }}>
              Our sister companies — <strong>Power Cargo Limited</strong> and <strong>Tookevision Nigeria Limited</strong> — expand our operational capacity without compromising our focus.
            </p>
            <div className="flex gap-4 reveal d4">
              <Link to="/about" className="btn-navy">Learn More</Link>
              <Link to="/certificates" className="btn-primary">Our Licenses</Link>
            </div>
          </div>
          <div className="relative reveal-scale d1">
            <div className="img-overlay aspect-[4/3] overflow-hidden">
              <img src={ABOUT_IMG} alt="Logistics operations" className="w-full h-full object-cover" loading="lazy" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-forest-500 text-white px-5 py-4 shadow-xl">
              <div className="font-display font-black text-3xl">17+</div>
              <div className="text-xs tracking-widest uppercase opacity-80"
                style={{ fontFamily: 'Barlow Semi Condensed, sans-serif' }}>Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES PREVIEW ═══ */}
      <section className="py-20" style={{ background: '#F4F7F9' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-tag reveal mx-auto justify-center">What We Do</span>
            <h2 className="font-display font-bold mt-3 reveal d1"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', textTransform: 'uppercase', color: '#001F4D', letterSpacing: '0.02em' }}>
              Comprehensive Freight Solutions
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto mt-3 reveal d2" style={{ fontFamily: 'Barlow, sans-serif' }}>
              Road, sea, and air — handled by one experienced team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {SERVICES_PREVIEW.map(({ icon, title, desc, img }, i) => (
              <div key={i} className={`service-card bg-white overflow-hidden reveal d${i + 1}`}>
                <div className="img-overlay h-48">
                  <img src={img} alt={title} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <span className="text-2xl">{icon}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl mb-2 uppercase tracking-wide"
                    style={{ color: '#001F4D' }}>{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: 'Barlow, sans-serif' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center reveal">
            <Link to="/services" className="btn-navy">
              View All Services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ CLIENTS STRIP ═══ */}
      <section style={{ background: '#001F4D' }} className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white/40 text-xs tracking-[0.25em] uppercase mb-8 reveal"
            style={{ fontFamily: 'Barlow Semi Condensed, sans-serif' }}>
            Trusted by leading organisations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['Maersk', 'MSC', 'Transmission Company of Nigeria', 'Afe Babalola University', 'Siemens Projects', 'Power Cargo Ltd'].map((c, i) => (
              <span key={i} className={`text-white/50 font-display font-bold text-lg uppercase tracking-widest hover:text-white transition-colors reveal d${Math.min(i + 1, 6)}`}>
                {c}
              </span>
            ))}
          </div>
          <div className="mt-10 reveal">
            <Link to="/clients" className="text-forest-500 text-sm font-semibold tracking-widest uppercase hover:text-forest-400 transition-colors inline-flex items-center gap-2"
              style={{ fontFamily: 'Barlow Semi Condensed, sans-serif' }}>
              See all clients & projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-tag reveal">Why Raisevision</span>
              <h2 className="font-display font-bold mt-3 mb-10 reveal d1"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', textTransform: 'uppercase', color: '#001F4D', letterSpacing: '0.02em' }}>
                The Raisevision<br />Advantage
              </h2>
              <div className="space-y-6">
                {[
                  { n: '01', title: 'Fully Licensed & Compliant', body: 'NPA, NCS, NEPC licensed and CAC registered — every clearance is 100% above board.' },
                  { n: '02', title: 'Port Proximity & Network', body: 'Offices steps from Apapa port with deep relationships across all Nigerian terminals.' },
                  { n: '03', title: 'Integrated Group Capacity', body: 'Power Cargo and Tookevision expand our reach without diluting our expertise.' },
                  { n: '04', title: 'Time-Critical Delivery', body: 'Demurrage avoided, deadlines met — we treat your cargo like it was ours.' },
                ].map(({ n, title, body }, i) => (
                  <div key={i} className={`flex gap-5 reveal d${i + 1}`}>
                    <div className="font-display font-black text-3xl flex-shrink-0 leading-none"
                      style={{ color: '#2E8B57', minWidth: 36 }}>{n}</div>
                    <div>
                      <h4 className="font-display font-bold text-lg uppercase tracking-wide mb-1"
                        style={{ color: '#001F4D' }}>{title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: 'Barlow, sans-serif' }}>{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image collage */}
            <div className="grid grid-cols-2 gap-3 reveal-scale d2">
              <div className="img-overlay aspect-square">
                <img src="https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=500&q=80"
                  alt="Port" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="img-overlay aspect-square mt-8">
                <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500&q=80"
                  alt="Air freight" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="img-overlay aspect-square">
                <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=500&q=80"
                  alt="Trucks" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="img-overlay aspect-square mt-8"
                style={{ background: '#2E8B57' }}>
                <div className="w-full h-full flex flex-col items-center justify-center text-white p-6 text-center">
                  <div className="font-display font-black text-5xl text-gold-400">RC</div>
                  <div className="font-display font-bold text-lg mt-1">718788</div>
                  <div className="text-xs mt-2 text-white/70 tracking-widest uppercase"
                    style={{ fontFamily: 'Barlow Semi Condensed, sans-serif' }}>Registered Company</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
