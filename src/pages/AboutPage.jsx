// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useScrollReveal } from '../hooks/useReveal'

// export default function AboutPage() {
//   useScrollReveal()
//   return (
//     <>
//       {/* Page Hero */}
//       <section className="relative py-24 overflow-hidden" style={{ background: '#001F4D' }}>
//         <div className="absolute inset-0">
//           <img src="/project-16.png"
//             alt="Port" className="w-full h-full object-cover opacity-20" />
//           <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,31,77,0.98) 40%, rgba(0,31,77,0.7))' }} />
//         </div>
//         <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8">
//           <div className="flex items-center gap-2 text-white/40 text-xs tracking-[0.15em] uppercase mb-6"
//             style={{ fontFamily: 'Barlow Semi Condensed, sans-serif' }}>
//             <Link to="/" className="hover:text-white transition-colors">Home</Link>
//             <span>/</span><span className="text-white/70">About Us</span>
//           </div>
//           <span className="section-tag" style={{ color: '#2E8B57' }}>
//             <span className="block w-6 h-0.5 bg-forest-500" />Who We Are
//           </span>
//           <h1 className="font-display font-black text-white mt-3"
//             style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 0.95 }}>
//             About<br /><span style={{ color: '#2E8B57' }}>Raisevision</span>
//           </h1>
//         </div>
//       </section>

//       {/* Story */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
//           <div>
//             <span className="section-tag reveal">Our Story</span>
//             <h2 className="font-display font-bold mt-3 mb-6 reveal d1"
//               style={{ fontSize: '2.5rem', textTransform: 'uppercase', color: '#001F4D' }}>
//               Over 17 Years Moving Nigeria's Cargo
//             </h2>
//             <div className="space-y-4 text-gray-600 leading-relaxed reveal d2" style={{ fontFamily: 'Barlow, sans-serif' }}>
//               <p>Raisevision and Company Limited was incorporated in <strong>2007</strong> under the Companies and Allied Matters Act (CAMA 1990). From our base in Apapa, Lagos — Nigeria's busiest port corridor — we have built a reputation defined by reliability, compliance, and operational excellence.</p>
//               <p>While clearing and forwarding remains our flagship service, our expertise extends across the entire logistics value chain: sea freight, air cargo, road haulage, warehousing, customs advisory, and export facilitation.</p>
//               <p>Our sister companies — <strong>Power Cargo International Limited</strong> and <strong>Tookevision Nigeria Limited</strong> — extend our operational capacity, allowing us to handle large-scale and complex logistics assignments without losing the personal service that defines our brand.</p>
//             </div>
//           </div>

//           <div className="space-y-4 reveal-scale d2">
//             <div className="img-overlay aspect-video">
//               <img src="/project-10.png"
//                 alt="Port operations" className="w-full h-full object-cover" loading="lazy" />
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               {[
//                 { val: '2007', label: 'Incorporated' },
//                 { val: '4', label: 'Licences' },
//                 { val: '3', label: 'Group Companies' },
//                 { val: '17+', label: 'Years Active' },
//               ].map(({ val, label }) => (
//                 <div key={label} className="bg-slate-50 p-5 border-l-4 border-forest-500">
//                   <div className="stat-number text-4xl">{val}</div>
//                   <div className="text-xs text-gray-500 tracking-[0.15em] uppercase mt-1"
//                     style={{ fontFamily: 'Barlow Semi Condensed, sans-serif' }}>{label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Group companies */}
//       <section className="py-20" style={{ background: '#F4F7F9' }}>
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-12">
//             <span className="section-tag reveal mx-auto justify-center">The Group</span>
//             <h2 className="font-display font-bold mt-3 reveal d1"
//               style={{ fontSize: '2.5rem', textTransform: 'uppercase', color: '#001F4D' }}>
//               Three Companies, One Standard
//             </h2>
//           </div>
//           <div className="grid md:grid-cols-3 gap-6">
//             {[
//               { name: 'Raisevision and Company Limited', role: 'Flagship Company', desc: 'Clearing, forwarding, freight management, customs advisory, and export facilitation. The cornerstone of the group.', accent: '#2E8B57' },
//               { name: 'Power Cargo International Limited', role: 'Sister Company', desc: 'Specialised cargo handling and power sector logistics. Focused on infrastructure and energy project delivery.', accent: '#001F4D' },
//               { name: 'Tookevision Nigeria Ltd', role: 'Sister Company', desc: 'Extended customs and port operations support. Reinforcing the group\'s capacity at all major Nigerian terminals.', accent: '#C9922A' },
//             ].map(({ name, role, desc, accent }, i) => (
//               <div key={i} className={`bg-white p-8 service-card reveal d${i + 1}`}
//                 style={{ borderTop: `4px solid ${accent}` }}>
//                 <div className="text-xs tracking-[0.2em] uppercase font-semibold mb-2"
//                   style={{ color: accent, fontFamily: 'Barlow Semi Condensed, sans-serif' }}>{role}</div>
//                 <h3 className="font-display font-bold text-xl uppercase mb-3" style={{ color: '#001F4D' }}>{name}</h3>
//                 <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: 'Barlow, sans-serif' }}>{desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Values */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-12">
//             <span className="section-tag reveal mx-auto justify-center">Our Values</span>
//             <h2 className="font-display font-bold mt-3 reveal d1"
//               style={{ fontSize: '2.5rem', textTransform: 'uppercase', color: '#001F4D' }}>
//               What Drives Us
//             </h2>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {[
//               { icon: '⚖️', title: 'Compliance', desc: 'Every shipment fully legal and properly documented.' },
//               { icon: '⚡', title: 'Speed', desc: 'Fast clearance minimises demurrage and delays.' },
//               { icon: '🤝', title: 'Partnership', desc: 'Long-term client relationships over one-off transactions.' },
//               { icon: '🎯', title: 'Precision', desc: 'Accuracy in documentation, timing, and delivery.' },
//             ].map(({ icon, title, desc }, i) => (
//               <div key={i} className={`text-center p-6 reveal d${i + 1}`}>
//                 <div className="text-4xl mb-4">{icon}</div>
//                 <h4 className="font-display font-bold text-lg uppercase tracking-wide mb-2" style={{ color: '#001F4D' }}>{title}</h4>
//                 <p className="text-gray-500 text-sm" style={{ fontFamily: 'Barlow, sans-serif' }}>{desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-16" style={{ background: '#001F4D' }}>
//         <div className="max-w-4xl mx-auto px-6 text-center">
//           <h2 className="font-display font-bold text-white text-4xl uppercase tracking-wide mb-4 reveal">
//             Ready to Work with Us?
//           </h2>
//           <p className="text-white/60 mb-8 reveal d1" style={{ fontFamily: 'Barlow, sans-serif' }}>
//             Get in touch with our team and get a customised logistics quote within 24 hours.
//           </p>
//           <Link to="/contact" className="btn-primary reveal d2">
//             Contact Us Today
//             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
//           </Link>
//         </div>
//       </section>
//     </>
//   )
// }







import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useReveal";

const stats = [
  { val: "2007", label: "Incorporated" },
  { val: "17+", label: "Years Active" },
  { val: "4", label: "NCS Licences" },
  { val: "3", label: "Group Companies" },
];

const services = [
  "Sea Freight Clearance",
  "Air Cargo Clearance",
  "Bonded Warehousing",
  "Inland Haulage",
  "Customs Brokerage",
  "Import / Export Advisory",
];

const sectors = [
  {
    icon: "🌾",
    title: "Agricultural",
    desc: "Farm inputs, agro-processing equipment, and export facilitation for Nigeria's agri sector.",
  },
  {
    icon: "⚙️",
    title: "Industrial & Manufacturing",
    desc: "Heavy machinery, tools, and equipment for manufacturing plants and factories.",
  },
  {
    icon: "⚡",
    title: "Power & Energy",
    desc: "Specialised handling of generators, transformers, and power infrastructure components.",
  },
  {
    icon: "🏗️",
    title: "Construction",
    desc: "Construction machinery and building materials cleared with precision and speed.",
  },
];

const companies = [
  {
    name: "Raisevision & Company Limited",
    role: "Flagship Company",
    desc: "Customs clearing, freight forwarding, bonded warehousing, and import/export advisory. The foundation of the group.",
    accent: "#2E8B57",
    img: "/project-10.png",
  },
  {
    name: "Power Cargo International Limited",
    role: "Sister Company",
    desc: "Specialised cargo handling for the power and energy sector. Built for high-volume, high-stakes logistics.",
    accent: "#001F4D",
    img: "/project-16.png",
  },
  {
    name: "Tookevision Nigeria Limited",
    role: "Sister Company",
    desc: "Extended customs and port operations support across multiple Nigerian terminals.",
    accent: "#C9922A",
    img: "/project-10.png",
  },
];

const values = [
  {
    icon: "⚖️",
    title: "Compliance",
    desc: "Every shipment fully legal, documented, and cleared to NCS standards.",
  },
  {
    icon: "⚡",
    title: "Speed",
    desc: "Fast clearance minimises demurrage charges and port delays.",
  },
  {
    icon: "🎯",
    title: "Precision",
    desc: "Accuracy in documentation, timing, and final-mile delivery.",
  },
  {
    icon: "🤝",
    title: "Partnership",
    desc: "Long-term client relationships built on trust and transparency.",
  },
];

export default function AboutPage() {
  useScrollReveal();

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        className="relative py-32 overflow-hidden"
        style={{ background: "#001F4D", minHeight: "480px" }}
      >
        <div className="absolute inset-0">
          <img
            src="/project-16.png"
            alt="Apapa port"
            className="w-full h-full object-cover opacity-15"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(120deg, rgba(0,31,77,0.98) 45%, rgba(0,31,77,0.6))",
            }}
          />
          {/* Decorative diagonal line */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1440 480"
            preserveAspectRatio="none"
          >
            <line
              x1="0"
              y1="480"
              x2="900"
              y2="0"
              stroke="#2E8B57"
              strokeWidth="1"
              strokeOpacity="0.18"
            />
            <line
              x1="60"
              y1="480"
              x2="960"
              y2="0"
              stroke="#2E8B57"
              strokeWidth="0.5"
              strokeOpacity="0.1"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8">
          {/* Breadcrumb */}
          <div
            className="flex items-center gap-2 text-white/40 text-xs tracking-[0.15em] uppercase mb-8"
            style={{ fontFamily: "Barlow Semi Condensed, sans-serif" }}
          >
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/70">About Us</span>
          </div>

          <div className="max-w-3xl">
            <span
              className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase mb-5"
              style={{
                color: "#2E8B57",
                fontFamily: "Barlow Semi Condensed, sans-serif",
              }}
            >
              <span className="block w-8 h-px bg-current" />
              Who We Are
            </span>
            <h1
              className="font-display font-black text-white"
              style={{
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                textTransform: "uppercase",
                letterSpacing: "0.02em",
                lineHeight: 0.92,
              }}
            >
              About
              <br />
              <span style={{ color: "#2E8B57" }}>Raisevision</span>
            </h1>
            <p
              className="mt-6 text-white/60 text-lg max-w-xl leading-relaxed"
              style={{ fontFamily: "Barlow, sans-serif" }}
            >
              17 years of excellence in clearing, forwarding, and freight
              management at Nigeria's busiest port corridor.
            </p>
          </div>

          {/* Stat bar */}
          <div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px"
            style={{
              background: "rgba(255,255,255,0.08)",
              borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {stats.map(({ val, label }) => (
              <div
                key={label}
                className="px-6 py-5"
                style={{ background: "rgba(0,31,77,0.6)" }}
              >
                <div
                  className="font-display font-black text-3xl"
                  style={{ color: "#2E8B57" }}
                >
                  {val}
                </div>
                <div
                  className="text-white/50 text-xs tracking-[0.15em] uppercase mt-1"
                  style={{ fontFamily: "Barlow Semi Condensed, sans-serif" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ─────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Text */}
            <div>
              <span
                className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase mb-5 reveal"
                style={{
                  color: "#2E8B57",
                  fontFamily: "Barlow Semi Condensed, sans-serif",
                }}
              >
                <span className="block w-8 h-px bg-current" />
                Our Story
              </span>
              <h2
                className="font-display font-bold mt-3 mb-8 reveal d1"
                style={{
                  fontSize: "clamp(1.75rem,4vw,2.5rem)",
                  textTransform: "uppercase",
                  color: "#001F4D",
                  lineHeight: 1.1,
                }}
              >
                Over 17 Years of Excellence in Clearing & Forwarding
              </h2>
              <div
                className="space-y-5 text-gray-600 leading-relaxed reveal d2"
                style={{
                  fontFamily: "Barlow, sans-serif",
                  fontSize: "1.0625rem",
                }}
              >
                <p>
                  Raisevision & Company Limited was incorporated in{" "}
                  <strong style={{ color: "#001F4D" }}>2007</strong> under the
                  Companies and Allied Matters Act (CAMA 1990). Strategically
                  headquartered in Apapa, Lagos — Nigeria's busiest port
                  corridor — we have established a strong reputation built on
                  reliability, regulatory compliance, and operational excellence
                  in customs clearing and freight forwarding.
                </p>
                <p>
                  Clearing and forwarding remains our core business. Over the
                  years we have developed deep expertise in the efficient
                  handling, documentation, and movement of cargo through
                  Nigeria's seaports and airports — spanning sea freight, air
                  cargo clearance, bonded warehousing, inland haulage
                  coordination, customs brokerage, and import/export advisory
                  services.
                </p>
                <p>
                  Despite our scale, we remain committed to{" "}
                  <strong style={{ color: "#001F4D" }}>
                    precision, transparency, and personalised service
                  </strong>{" "}
                  — ensuring that every consignment is cleared and delivered
                  with speed, accuracy, and full regulatory compliance.
                </p>
              </div>

              {/* Services list */}
              <div className="mt-10 reveal d3">
                <p
                  className="text-xs tracking-[0.2em] uppercase font-semibold mb-4"
                  style={{
                    color: "#2E8B57",
                    fontFamily: "Barlow Semi Condensed, sans-serif",
                  }}
                >
                  Our Core Services
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((s) => (
                    <div
                      key={s}
                      className="flex items-center gap-2 text-sm text-gray-600"
                      style={{ fontFamily: "Barlow, sans-serif" }}
                    >
                      <span style={{ color: "#2E8B57", fontWeight: 700 }}>
                        —
                      </span>
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Images */}
            <div className="space-y-4 reveal-scale d2">
              {/* Main image */}
              <div
                className="relative overflow-hidden"
                style={{ borderRadius: 2 }}
              >
                <img
                  src="/project-16.png"
                  alt="Apapa port operations"
                  className="w-full object-cover"
                  style={{ height: "340px" }}
                  loading="lazy"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-5"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,31,77,0.9), transparent)",
                  }}
                >
                  <p
                    className="text-white/90 text-sm"
                    style={{ fontFamily: "Barlow, sans-serif" }}
                  >
                    Apapa Port, Lagos — our operational home for 17+ years
                  </p>
                </div>
              </div>

              {/* Two smaller images side by side */}
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden" style={{ borderRadius: 2 }}>
                  <img
                    src="/project-10.png"
                    alt="Cargo handling"
                    className="w-full object-cover hover:scale-105 transition-transform duration-500"
                    style={{ height: "180px" }}
                    loading="lazy"
                  />
                </div>
                <div
                  className="overflow-hidden flex flex-col justify-between p-6"
                  style={{ background: "#001F4D", borderRadius: 2 }}
                >
                  <p
                    className="text-white/50 text-xs tracking-[0.15em] uppercase"
                    style={{ fontFamily: "Barlow Semi Condensed, sans-serif" }}
                  >
                    Established
                  </p>
                  <div>
                    <div
                      className="font-display font-black text-5xl"
                      style={{ color: "#2E8B57" }}
                    >
                      2007
                    </div>
                    <p
                      className="text-white/60 text-xs mt-2"
                      style={{ fontFamily: "Barlow, sans-serif" }}
                    >
                      Incorporated under CAMA 1990
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTORS ───────────────────────────────────────────── */}
      <section className="py-24" style={{ background: "#F4F7F9" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: heading + image */}
            <div>
              <span
                className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase mb-5 reveal"
                style={{
                  color: "#2E8B57",
                  fontFamily: "Barlow Semi Condensed, sans-serif",
                }}
              >
                <span className="block w-8 h-px bg-current" />
                Specialised Sectors
              </span>
              <h2
                className="font-display font-bold reveal d1 mb-6"
                style={{
                  fontSize: "clamp(1.75rem,4vw,2.5rem)",
                  textTransform: "uppercase",
                  color: "#001F4D",
                  lineHeight: 1.1,
                }}
              >
                Handling Nigeria's Most Critical Cargo
              </h2>
              <p
                className="text-gray-500 leading-relaxed mb-8 reveal d2"
                style={{ fontFamily: "Barlow, sans-serif" }}
              >
                We provide specialised handling for sectors critical to
                Nigeria's economy — from farm inputs to heavy industrial
                machinery — all managed with strict compliance to customs
                regulations.
              </p>
              <div
                className="overflow-hidden reveal-scale d3"
                style={{ borderRadius: 2 }}
              >
                <img
                  src="/project-10.png"
                  alt="Industrial cargo"
                  className="w-full object-cover"
                  style={{ height: "260px" }}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: sector cards */}
            <div className="grid grid-cols-1 gap-4">
              {sectors.map(({ icon, title, desc }, i) => (
                <div
                  key={i}
                  className={`flex gap-5 items-start p-6 bg-white reveal d${i + 1}`}
                  style={{ borderLeft: "3px solid #2E8B57" }}
                >
                  <span className="text-2xl mt-0.5">{icon}</span>
                  <div>
                    <h4
                      className="font-display font-bold text-base uppercase tracking-wide mb-1"
                      style={{ color: "#001F4D" }}
                    >
                      {title}
                    </h4>
                    <p
                      className="text-gray-500 text-sm leading-relaxed"
                      style={{ fontFamily: "Barlow, sans-serif" }}
                    >
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GROUP COMPANIES ───────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span
              className="inline-flex items-center justify-center gap-3 text-xs tracking-[0.2em] uppercase mb-5 reveal"
              style={{
                color: "#2E8B57",
                fontFamily: "Barlow Semi Condensed, sans-serif",
              }}
            >
              <span className="block w-8 h-px bg-current" />
              The Group
              <span className="block w-8 h-px bg-current" />
            </span>
            <h2
              className="font-display font-bold reveal d1"
              style={{
                fontSize: "clamp(1.75rem,4vw,2.5rem)",
                textTransform: "uppercase",
                color: "#001F4D",
              }}
            >
              Three Companies, One Standard
            </h2>
            <p
              className="text-gray-500 mt-4 max-w-xl mx-auto reveal d2"
              style={{ fontFamily: "Barlow, sans-serif" }}
            >
              Our group structure extends operational capacity across multiple
              port and logistics channels — handling both routine and complex,
              high-volume cargo with equal care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {companies.map(({ name, role, desc, accent, img }, i) => (
              <div
                key={i}
                className={`overflow-hidden bg-white reveal d${i + 1}`}
                style={{
                  border: "1px solid #e8ecf0",
                  borderTop: `4px solid ${accent}`,
                }}
              >
                <div className="overflow-hidden" style={{ height: "200px" }}>
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-7">
                  <div
                    className="text-xs tracking-[0.2em] uppercase font-semibold mb-2"
                    style={{
                      color: accent,
                      fontFamily: "Barlow Semi Condensed, sans-serif",
                    }}
                  >
                    {role}
                  </div>
                  <h3
                    className="font-display font-bold text-lg uppercase mb-3 leading-tight"
                    style={{ color: "#001F4D" }}
                  >
                    {name}
                  </h3>
                  <p
                    className="text-gray-500 text-sm leading-relaxed"
                    style={{ fontFamily: "Barlow, sans-serif" }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: "#001F4D" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span
              className="inline-flex items-center justify-center gap-3 text-xs tracking-[0.2em] uppercase mb-5 reveal"
              style={{
                color: "#2E8B57",
                fontFamily: "Barlow Semi Condensed, sans-serif",
              }}
            >
              <span className="block w-8 h-px bg-current" />
              Our Values
              <span className="block w-8 h-px bg-current" />
            </span>
            <h2
              className="font-display font-bold text-white reveal d1"
              style={{
                fontSize: "clamp(1.75rem,4vw,2.5rem)",
                textTransform: "uppercase",
              }}
            >
              What Drives Us
            </h2>
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-px"
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            {values.map(({ icon, title, desc }, i) => (
              <div
                key={i}
                className={`text-center p-10 reveal d${i + 1}`}
                style={{ background: "#001F4D" }}
              >
                <div className="text-4xl mb-5">{icon}</div>
                <h4 className="font-display font-bold text-base uppercase tracking-wide mb-3 text-white">
                  {title}
                </h4>
                <p
                  className="text-white/50 text-sm leading-relaxed"
                  style={{ fontFamily: "Barlow, sans-serif" }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "#F4F7F9" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span
            className="inline-flex items-center justify-center gap-3 text-xs tracking-[0.2em] uppercase mb-5 reveal"
            style={{
              color: "#2E8B57",
              fontFamily: "Barlow Semi Condensed, sans-serif",
            }}
          >
            <span className="block w-8 h-px bg-current" />
            Get In Touch
            <span className="block w-8 h-px bg-current" />
          </span>
          <h2
            className="font-display font-bold text-4xl uppercase tracking-wide mb-4 reveal d1"
            style={{ color: "#001F4D" }}
          >
            Ready to Work with Us?
          </h2>
          <p
            className="text-gray-500 mb-10 max-w-lg mx-auto reveal d2"
            style={{ fontFamily: "Barlow, sans-serif" }}
          >
            Get in touch with our team and receive a customised logistics quote
            within 24 hours.
          </p>
          <Link to="/contact" className="btn-primary reveal d3">
            Contact Us Today
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
