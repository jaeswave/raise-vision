import React from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useReveal'

const SERVICES = [
  {
    id: 1, icon: '⚓', title: 'Clearing & Forwarding',
    tagline: 'Nigeria\'s ports, handled with expertise.',
    desc: 'From pre-arrival documentation to final release, our clearing team manages every step with the NCS and port authorities. We specialise in Apapa, Tin-Can, and all major Nigerian terminals.',
    points: ['Pre-arrival documentation', 'Customs duty computation', 'Terminal handling', 'Bill of lading processing', 'SON/NAFDAC liaison'],
    img: '/project-4.png',
    color: '#2E8B57',
  },
  {
    id: 2, icon: '🚢', title: 'Sea Freight Logistics',
    tagline: 'FCL and LCL from any origin worldwide.',
    desc: 'We coordinate FCL and LCL shipments from major global origins. Our established relationships with Maersk, MSC, CMA CGM, PTML Grimaldi, Comet Shipping, PIL, COSCO/OOCL and others ensure competitive rates and priority booking.',
    points: ['FCL & LCL shipments', 'Consolidation services', 'Freight rate negotiation', 'Vessel tracking', 'Port of origin liaison'],
    img: '/containers-port.png',
    color: '#003380',
  },
  {
    id: 3, icon: '✈️', title: 'Air Freight Handling',
    tagline: 'Speed-critical cargo delivered on time.',
    desc: 'For urgent or high-value shipments, our air freight service provides end-to-end coordination from collection at origin airport to delivery in Nigeria, with full documentation support.',
    points: ['Airport-to-airport coordination', 'FAAN and NCS compliance', 'Temperature-sensitive cargo', 'Express document handling', 'Door-to-airport service'],
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
    color: '#C9922A',
  },
  {
    id: 4, icon: '🚛', title: 'Road Transport Coordination',
    tagline: 'Inland haulage across all 36 states.',
    desc: 'After clearance, cargo still needs to reach its destination. Our haulage coordination covers last-mile delivery across Nigeria, managed with tracking and accountability.',
    points: ['Nationwide haulage coverage', 'Flatbed & container transport', 'Real-time tracking', 'Cargo insurance', 'Dedicated account management'],
    img: '/project-7.png',
    color: '#1E7A45',
  },
  {
    id: 5, icon: '🏭', title: 'Warehousing & Cargo Handling',
    tagline: 'Secure storage, professional handling.',
    desc: 'Short and long-term warehousing facilities with full cargo management, stock tracking, and distribution coordination. Trusted for fragile, high-value, and bulk cargo alike.',
    points: ['Bonded & open warehousing', 'Inventory management', 'Cargo re-stuffing', 'Distribution coordination', 'CCTV-monitored facilities'],
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
    color: '#2E8B57',
  },
  {
    id: 6, icon: '📋', title: 'Regulatory & Customs Compliance',
    tagline: 'Stay compliant, avoid penalties.',
    desc: 'We provide advisory services on Nigerian import/export regulations, HS code classification, duty optimisation, and NAFDAC/SON requirements so your business stays compliant and cost-efficient.',
    points: ['HS tariff classification', 'Import duty optimisation', 'NAFDAC & SON advisory', 'Form M processing', 'Trade compliance audits'],
    img: '/cargo-container.png',
    color: '#001F4D',
  },
  {
    id: 7, icon: '📄', title: 'Export Documentation & Advisory',
    tagline: 'Grow your export business with us.',
    desc: 'NEPC registered and experienced in Nigerian export documentation. We assist with NXP forms, NEPC registration, phytosanitary certificates, and connecting exporters with the right buyers.',
    points: ['NXP form processing', 'NEPC advisory & registration', 'Certificate of origin', 'Export finance advisory', 'Phytosanitary support'],
    img: '/containers-port.png',
    color: '#C9922A',
  },
]

export default function ServicesPage() {
  useScrollReveal()
  return (
    <>
      {/* Page Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: '#001226' }}>
        <div className="absolute inset-0">
          <img src="/project-14.png"
            alt="Services" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,18,38,0.97) 40%, rgba(0,18,38,0.6))' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8">
          <div className="flex items-center gap-2 text-white/40 text-xs tracking-[0.15em] uppercase mb-6"
            style={{ fontFamily: 'Barlow Semi Condensed, sans-serif' }}>
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span><span className="text-white/70">Services</span>
          </div>
          <span className="section-tag" style={{ color: '#2E8B57' }}>
            <span className="block w-6 h-0.5 bg-forest-500" />What We Offer
          </span>
          <h1 className="font-display font-black text-white mt-3"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 0.95 }}>
            Our<br /><span style={{ color: '#2E8B57' }}>Services</span>
          </h1>
          <p className="text-white/60 max-w-lg mt-5" style={{ fontFamily: 'Barlow, sans-serif', fontSize: '1.05rem' }}>
            Comprehensive freight management across road, sea, and air — delivered by Nigeria's most trusted logistics team.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {SERVICES.map(({ id, icon, title, tagline, desc, points, img, color }, i) => (
              <div key={id} className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Image side */}
                <div className={`img-overlay aspect-video overflow-hidden reveal-scale ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img src={img} alt={title} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${color}33 0%, transparent 60%)` }} />
                  {/* Icon badge */}
                  <div className="absolute top-5 left-5 w-12 h-12 flex items-center justify-center text-2xl"
                    style={{ background: color }}>
                    {icon}
                  </div>
                </div>

                {/* Text side */}
                <div className={`reveal ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="text-xs font-semibold tracking-[0.2em] uppercase mb-1"
                    style={{ color, fontFamily: 'Barlow Semi Condensed, sans-serif' }}>Service {String(id).padStart(2, '0')}</div>
                  <h2 className="font-display font-bold mb-2"
                    style={{ fontSize: '2.2rem', textTransform: 'uppercase', color: '#001F4D', letterSpacing: '0.02em' }}>
                    {title}
                  </h2>
                  <p className="font-semibold mb-4" style={{ color, fontFamily: 'Barlow Semi Condensed, sans-serif' }}>
                    {tagline}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'Barlow, sans-serif' }}>{desc}</p>
                  <ul className="grid grid-cols-2 gap-y-2 gap-x-4 mb-6">
                    {points.map(p => (
                      <li key={p} className="flex items-start gap-2 text-sm text-gray-600"
                        style={{ fontFamily: 'Barlow, sans-serif' }}>
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: color }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-primary" style={{ background: color }}>
                    Enquire About This Service
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16" style={{ background: '#001F4D' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-white text-4xl uppercase tracking-wide mb-4 reveal">
            Not Sure What You Need?
          </h2>
          <p className="text-white/60 mb-8 reveal d1" style={{ fontFamily: 'Barlow, sans-serif' }}>
            Our team will assess your cargo and recommend the right solution. No obligation.
          </p>
          <Link to="/contact" className="btn-primary reveal d2">
            Talk to Our Team
          </Link>
        </div>
      </section>
    </>
  )
}
