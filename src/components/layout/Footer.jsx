import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../ui/Logo'

export default function Footer() {
  return (
    <footer style={{ background: '#001226' }}>
      {/* CTA strip */}
      <div style={{ background: '#2E8B57' }}>
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-display text-3xl font-bold tracking-wide">Ready to Move Your Cargo?</h3>
            <p className="text-white/70 text-sm mt-1" style={{ fontFamily: 'Barlow, sans-serif' }}>
              Get a customized logistics quote within 24 hours.
            </p>
          </div>
          <Link to="/contact" className="btn-outline-white flex-shrink-0">
            Request a Quote
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Logo variant="light" size="md" />
            <p className="mt-5 text-white/50 text-sm leading-relaxed max-w-sm" style={{ fontFamily: 'Barlow, sans-serif' }}>
              Licensed clearing agents and end-to-end logistics providers operating across Nigeria's ports, borders, and airways since 2007.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://wa.me/2348057972005" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:text-green-400 hover:border-green-400 transition-all">
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white/40 text-xs font-semibold tracking-[0.2em] uppercase mb-5" style={{ fontFamily: 'Barlow Semi Condensed, sans-serif' }}>Quick Links</h4>
            <div className="flex flex-col gap-3">
              {[['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/clients', 'Clients'], ['/gallery', 'Gallery'], ['/certificates', 'Licenses'], ['/contact', 'Contact']].map(([to, label]) => (
                <Link key={to} to={to} className="text-white/55 hover:text-white text-sm transition-colors" style={{ fontFamily: 'Barlow, sans-serif' }}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white/40 text-xs font-semibold tracking-[0.2em] uppercase mb-5" style={{ fontFamily: 'Barlow Semi Condensed, sans-serif' }}>Contact</h4>
            <div className="space-y-4 text-sm text-white/55" style={{ fontFamily: 'Barlow, sans-serif' }}>
              <p className="leading-relaxed">4/5 Apapa–Oshodi Expressway<br/>2nd Floor, Right Wing (Blue House)<br/>Coconut Bus Stop, Apapa, Lagos</p>
              <div className="space-y-1">
                {['0803 718 5967', '0809 817 7660', '0802 411 0750'].map(n => (
                  <a key={n} href={`tel:${n.replace(/\s/g,'')}`} className="block hover:text-white transition-colors">{n}</a>
                ))}
              </div>
              <a href="mailto:info@raisevisionlogistics.com" className="block hover:text-white transition-colors break-all">
                info@raisevisionlogistics.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs" style={{ fontFamily: 'Barlow, sans-serif' }}>
            © {new Date().getFullYear()} Raisevision and Company Limited. All rights reserved. RC 718788
          </p>
          <p className="text-white/30 text-xs" style={{ fontFamily: 'Barlow, sans-serif' }}>
            NPA Licensed · NCS Cleared · NEPC Registered · CAC Incorporated
          </p>
        </div>
      </div>
    </footer>
  )
}
