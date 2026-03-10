// Gallery Page
import React from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useReveal";

// All real project photos — TCN Power Transformer project, Apapa Port & site delivery
const GALLERY_IMAGES = [
  {
    src: "/project-10.png",
    caption: "Port Inspection — Raisevision Team at Apapa Terminal",
    real: true,
  },
  {
    src: "/project-7.png",
    caption: "Transformer Loaded onto Low-Bed Trailer — Ready for Haulage",
    real: true,
  },
  {
    src: "/project-12.png",
    caption: "Team Inspection at Apapa Port — Equipment Verification",
    real: true,
  },
  {
    src: "/project-2.png",
    caption: "Multiple Power Transformers — Apapa Port Staging Area",
    real: true,
  },
  {
    src: "/project-14.png",
    caption: "Liebherr Crane — Heavy-Lift Port Operations",
    real: true,
  },
  {
    src: "/project-15.png",
    caption: "Transformer on Low-Bed Trailer — Departing Port",
    real: true,
  },
  {
    src: "/project-13.png",
    caption: "Site Supervisor with Documentation — Port Operations",
    real: true,
  },
  {
    src: "/project-4.png",
    caption: "Transformer at Apapa Terminal — Pre-Haulage Staging",
    real: true,
  },
  {
    src: "/project-11.png",
    caption: "Low-Bed Transport — Transformer En Route to Substation",
    real: true,
  },
  {
    src: "/project-9.png",
    caption: "Transformer Delivered to TCN Substation — Site Ready",
    real: true,
  },
  {
    src: "/project-6.png",
    caption: "Equipment Detail — Transformer Base at Port",
    real: true,
  },
  {
    src: "/project-16.png",
    caption: "Heavy-Lift Operation — Crane and Trailer Coordination",
    real: true,
  },
  {
    src: "/project-17.png",
    caption: "Port Infrastructure — Liebherr Crane Operations, Apapa",
    real: true,
  },
  {
    src: "/project-3.png",
    caption: "100/110 MVA Transformer — Side Profile at Apapa",
    real: true,
  },
  {
    src: "/project-5.png",
    caption: "Raisevision Field Team — Cargo Inspection & Clearance",
    real: true,
  },
  {
    src: "/project-8.png",
    caption: "Transformer at Substation — Final Site Delivery",
    real: true,
  },
  {
    src: "/project-1.png",
    caption: "Marshalling Box & Control Panel — Equipment Detail",
    real: true,
  },
];

export function GalleryPage() {
  useScrollReveal();
  return (
    <>
      <section className="relative py-24" style={{ background: "#001226" }}>
        <div className="absolute inset-0">
          <img
            src="/project-17.png"
            alt="Gallery"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-navy-900/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8">
          <div
            className="flex items-center gap-2 text-white/40 text-xs tracking-widest uppercase mb-6"
            style={{ fontFamily: "Barlow Semi Condensed, sans-serif" }}
          >
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/70">Gallery</span>
          </div>
          <span className="section-tag" style={{ color: "#2E8B57" }}>
            Operations Gallery
          </span>
          <h1
            className="font-display font-black text-white mt-3"
            style={{
              fontSize: "clamp(3rem, 7vw, 6rem)",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              lineHeight: 0.95,
            }}
          >
            Our Work
            <br />
            <span style={{ color: "#2E8B57" }}>In Action</span>
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Real project highlight */}
          <div className="mb-6 p-5 reveal" style={{ background: "#001F4D" }}>
            <div className="flex items-center gap-3">
              <span
                className="text-xs font-bold tracking-widest uppercase px-3 py-1"
                style={{
                  background: "#2E8B57",
                  color: "white",
                  fontFamily: "Barlow Semi Condensed, sans-serif",
                }}
              >
                Live Project
              </span>
              <p
                className="text-white/70 text-sm"
                style={{ fontFamily: "Barlow, sans-serif" }}
              >
                100/110 MVA Power Transformers — Cleared and delivered for the
                Transmission Company of Nigeria (TCN)
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {GALLERY_IMAGES.map(({ src, caption, real }, i) => (
              <div
                key={i}
                className={`img-overlay overflow-hidden group reveal d${Math.min((i % 3) + 1, 6)} ${i === 0 || i === 3 ? "md:col-span-2" : ""} ${i === 0 ? "aspect-video" : "aspect-[4/3]"}`}
              >
                <img
                  src={src}
                  alt={caption}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                {real && (
                  <div
                    className="absolute top-3 left-3 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1"
                    style={{
                      background: "#2E8B57",
                      color: "white",
                      fontFamily: "Barlow Semi Condensed, sans-serif",
                    }}
                  >
                    Real Project
                  </div>
                )}
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/60 transition-all duration-400" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p
                    className="text-white font-semibold text-sm uppercase tracking-wide"
                    style={{ fontFamily: "Barlow Semi Condensed, sans-serif" }}
                  >
                    {caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// Clients Page
const CLIENTS = [
  {
    name: "Maersk Line",
    sector: "Shipping",
    desc: "Coordinated clearance for Maersk container shipments at Apapa and Tin-Can terminals.",
  },
  {
    name: "MSC Nigeria",
    sector: "Shipping",
    desc: "Ongoing partnership for FCL import clearance and documentation management.",
  },
  {
    name: "Transmission Company of Nigeria",
    sector: "Power & Infrastructure",
    desc: "Logistics support for power transmission equipment imports, including specialist heavy-lift coordination for 100/110 MVA transformers.",
  },
  {
    name: "Afe Babalola University",
    sector: "Education",
    desc: "Academic and laboratory equipment clearance and campus delivery coordination.",
  },
  {
    name: "Sumogo Nigeria Limited",
    sector: "Trade",
    desc: "Regular import clearing and forwarding across multiple commodity lines.",
  },
  {
    name: "Topfinger Investment Nig Ltd",
    sector: "Investment",
    desc: "Commercial goods clearance and documentation management.",
  },
  {
    name: "Mantol Nigeria Limited",
    sector: "Trade",
    desc: "Sea freight coordination and customs clearance services.",
  },
  {
    name: "Electrical Solution Limited",
    sector: "Engineering",
    desc: "Electrical equipment imports, NPA-cleared and delivered to site.",
  },
  {
    name: "Adlinco Construction Company",
    sector: "Construction",
    desc: "Construction materials and heavy equipment imports, cleared and coordinated for project delivery.",
  },
  {
    name: "Equal Engineering Limited",
    sector: "Engineering",
    desc: "Engineering components and industrial machinery clearance with full compliance documentation.",
  },
];

export function ClientsPage() {
  useScrollReveal();
  return (
    <>
      <section className="relative py-24" style={{ background: "#001226" }}>
        <div className="absolute inset-0">
          <img
            src="/project-12.png"
            alt="Clients"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-navy-900/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8">
          <div
            className="flex items-center gap-2 text-white/40 text-xs tracking-widest uppercase mb-6"
            style={{ fontFamily: "Barlow Semi Condensed, sans-serif" }}
          >
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/70">Clients</span>
          </div>
          <span className="section-tag" style={{ color: "#2E8B57" }}>
            Who Trusts Us
          </span>
          <h1
            className="font-display font-black text-white mt-3"
            style={{
              fontSize: "clamp(3rem, 7vw, 6rem)",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              lineHeight: 0.95,
            }}
          >
            Our
            <br />
            <span style={{ color: "#2E8B57" }}>Clients</span>
          </h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {CLIENTS.map(({ name, sector, desc }, i) => (
              <div
                key={i}
                className={`p-7 service-card bg-slate-50 border-l-4 reveal d${Math.min((i % 4) + 1, 6)}`}
                style={{ borderLeftColor: "#2E8B57" }}
              >
                <div
                  className="text-xs tracking-[0.2em] uppercase font-semibold mb-1"
                  style={{
                    color: "#C9922A",
                    fontFamily: "Barlow Semi Condensed, sans-serif",
                  }}
                >
                  {sector}
                </div>
                <h3
                  className="font-display font-bold text-2xl uppercase mb-3"
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
            ))}
          </div>

          {/* Shipping Lines */}
          <div className="mt-10 mb-6">
            <h3
              className="font-display font-bold text-2xl uppercase mb-6 reveal"
              style={{ color: "#001F4D" }}
            >
              Shipping Lines We Operate With
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {[
                { name: "Maersk Line", abbr: "MAERSK" },
                { name: "MSC Nigeria", abbr: "MSC" },
                { name: "CMA CGM Nigeria", abbr: "CMA CGM" },
                { name: "PTML Grimaldi Group", abbr: "GRIMALDI" },
                { name: "Comet Shipping Agency", abbr: "COMET" },
                { name: "PIL Shipping Co.", abbr: "PIL" },
                { name: "COSCO / OOCL", abbr: "COSCO" },
                { name: "Hapag-Lloyd", abbr: "HAPAG" },
                { name: "ZIM Line", abbr: "ZIM" },
                { name: "K Line", abbr: "K LINE" },
              ].map(({ name, abbr }, i) => (
                <div
                  key={i}
                  className={`p-4 text-center border border-gray-100 hover:border-forest-500 transition-all reveal d${Math.min((i % 5) + 1, 5)}`}
                  style={{ background: "#F8FAFC" }}
                >
                  <div
                    className="font-display font-black text-xl mb-1"
                    style={{ color: "#001F4D" }}
                  >
                    {abbr}
                  </div>
                  <p
                    className="text-gray-400 text-xs leading-tight"
                    style={{ fontFamily: "Barlow, sans-serif" }}
                  >
                    {name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured project with real photos */}
          <div className="mt-12 reveal" style={{ background: "#001F4D" }}>
            <div className="grid md:grid-cols-2">
              <div className="p-8">
                <div
                  className="text-xs tracking-widest uppercase font-semibold mb-2"
                  style={{
                    color: "#C9922A",
                    fontFamily: "Barlow Semi Condensed, sans-serif",
                  }}
                >
                  Featured Project — Apapa Port
                </div>
                <h3 className="font-display font-bold text-2xl text-white uppercase mb-3">
                  TCN Power Transformer Clearance
                </h3>
                <p
                  className="text-white/65 leading-relaxed mb-4"
                  style={{ fontFamily: "Barlow, sans-serif" }}
                >
                  Raisevision successfully cleared and coordinated the delivery
                  of multiple 100/110 MVA, 132/33 kV Voltamp power transformers
                  for the Transmission Company of Nigeria. This involved
                  specialist heavy-lift port operations at Apapa, full NCS
                  documentation, and site-delivery coordination.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Heavy-Lift Clearance",
                    "NCS Compliance",
                    "TCN Delivery",
                    "132/33 kV Equipment",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 border border-white/20 text-white/50"
                      style={{
                        fontFamily: "Barlow Semi Condensed, sans-serif",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1 p-1">
                <img
                  src="/project-10.png"
                  alt="Team at port"
                  className="w-full h-32 object-cover"
                />
                <img
                  src="/project-7.png"
                  alt="Loading on trailer"
                  className="w-full h-32 object-cover"
                />
                <img
                  src="/project-9.png"
                  alt="Substation delivery"
                  className="w-full h-32 object-cover"
                />
                <img
                  src="/project-11.png"
                  alt="Low-bed transport"
                  className="w-full h-32 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Certificates Page
const CERTS = [
  {
    title: "CAC Certificate of Incorporation",
    authority: "Corporate Affairs Commission",
    rc: "RC 718788",
    desc: "Incorporated under the Companies and Allied Matters Act (CAMA 1990). Raisevision is a fully registered Nigerian company operating within the law.",
    color: "#2E8B57",
    icon: "🏛️",
  },
  {
    title: "Nigerian Ports Authority Licence",
    authority: "NPA — Nigerian Ports Authority",
    rc: "Active Licence",
    desc: "Licensed by the NPA to operate as an approved clearing agent at all major Nigerian seaports including Apapa, Tin-Can, and Onne.",
    color: "#003380",
    icon: "⚓",
  },
  {
    title: "Nigeria Customs Service Clearing Licence",
    authority: "NCS — Nigeria Customs Service",
    rc: "Active Licence",
    desc: "Certified customs clearing agent authorised by the Nigeria Customs Service to process import and export documentation and customs duty payments.",
    color: "#001F4D",
    icon: "🛃",
  },
  {
    title: "NEPC Exporter Registration",
    authority: "Nigerian Export Promotion Council",
    rc: "Registered Member",
    desc: "Registered with the Nigerian Export Promotion Council, enabling full export advisory, documentation facilitation, and NXP form processing for Nigerian exporters.",
    color: "#C9922A",
    icon: "🌍",
  },
];

export function CertificatesPage() {
  useScrollReveal();
  return (
    <>
      <section className="relative py-24" style={{ background: "#001226" }}>
        <div className="absolute inset-0">
          <img
            src="/project-4.png"
            alt="Certificates"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-navy-900/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8">
          <div
            className="flex items-center gap-2 text-white/40 text-xs tracking-widest uppercase mb-6"
            style={{ fontFamily: "Barlow Semi Condensed, sans-serif" }}
          >
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/70">Licences & Certificates</span>
          </div>
          <span className="section-tag" style={{ color: "#2E8B57" }}>
            Credentials
          </span>
          <h1
            className="font-display font-black text-white mt-3"
            style={{
              fontSize: "clamp(3rem, 7vw, 6rem)",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              lineHeight: 0.95,
            }}
          >
            Licensed &<br />
            <span style={{ color: "#2E8B57" }}>Compliant</span>
          </h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p
            className="text-gray-600 max-w-2xl mb-14 reveal"
            style={{ fontFamily: "Barlow, sans-serif", fontSize: "1.05rem" }}
          >
            Raisevision operates fully within Nigerian legal and regulatory
            frameworks. Every shipment is backed by valid licences and full
            statutory compliance.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {CERTS.map(({ title, authority, rc, desc, color, icon }, i) => (
              <div
                key={i}
                className={`service-card bg-white border border-gray-100 overflow-hidden reveal d${i + 1}`}
              >
                <div className="h-2" style={{ background: color }} />
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className="w-14 h-14 flex items-center justify-center text-2xl flex-shrink-0"
                      style={{ background: `${color}18` }}
                    >
                      {icon}
                    </div>
                    <div>
                      <h3
                        className="font-display font-bold text-lg uppercase"
                        style={{ color: "#001F4D" }}
                      >
                        {title}
                      </h3>
                      <p
                        className="text-xs tracking-[0.15em] uppercase font-semibold mt-0.5"
                        style={{
                          color,
                          fontFamily: "Barlow Semi Condensed, sans-serif",
                        }}
                      >
                        {authority}
                      </p>
                    </div>
                  </div>
                  <p
                    className="text-gray-500 text-sm leading-relaxed mb-5"
                    style={{ fontFamily: "Barlow, sans-serif" }}
                  >
                    {desc}
                  </p>
                  {/* Certificate placeholder */}
                  <div
                    className="border-2 border-dashed rounded flex items-center justify-center py-10"
                    style={{
                      borderColor: `${color}40`,
                      background: `${color}06`,
                    }}
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-2">📄</div>
                      <p
                        className="text-xs font-semibold tracking-wider uppercase"
                        style={{
                          color,
                          fontFamily: "Barlow Semi Condensed, sans-serif",
                        }}
                      >
                        Certificate Image — {rc}
                      </p>
                      <p
                        className="text-xs text-gray-400 mt-1"
                        style={{ fontFamily: "Barlow, sans-serif" }}
                      >
                        Upload certificate scan here
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-12 p-8 text-center reveal"
            style={{ background: "#F4F7F9" }}
          >
            <div className="text-4xl mb-3">✅</div>
            <h3
              className="font-display font-bold text-2xl uppercase mb-2"
              style={{ color: "#001F4D" }}
            >
              All Licences Active & Verified
            </h3>
            <p
              className="text-gray-500 text-sm"
              style={{ fontFamily: "Barlow, sans-serif" }}
            >
              Clients can request verification of any licence directly from the
              issuing authority. We operate with full transparency.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

// Contact Page
// export function ContactPage() {
//   useScrollReveal()
//   const [form, setForm] = React.useState({ name: '', company: '', email: '', phone: '', service: '', message: '' })
//   const [sent, setSent] = React.useState(false)
//   const handle = e => setForm({ ...form, [e.target.name]: e.target.value })
//   const submit = e => { e.preventDefault(); setSent(true) }

//   return (
//     <>
//       <section className="relative py-24" style={{ background: "#001226" }}>
//         <div className="absolute inset-0">
//           <img
//             src="/project-13.png"
//             alt="Contact"
//             className="w-full h-full object-cover opacity-15"
//           />
//           <div className="absolute inset-0 bg-navy-900/85" />
//         </div>
//         <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8">
//           <div
//             className="flex items-center gap-2 text-white/40 text-xs tracking-widest uppercase mb-6"
//             style={{ fontFamily: "Barlow Semi Condensed, sans-serif" }}
//           >
//             <Link to="/" className="hover:text-white">
//               Home
//             </Link>
//             <span>/</span>
//             <span className="text-white/70">Contact</span>
//           </div>
//           <span className="section-tag" style={{ color: "#2E8B57" }}>
//             Get in Touch
//           </span>
//           <h1
//             className="font-display font-black text-white mt-3"
//             style={{
//               fontSize: "clamp(3rem, 7vw, 6rem)",
//               textTransform: "uppercase",
//               letterSpacing: "0.02em",
//               lineHeight: 0.95,
//             }}
//           >
//             Contact
//             <br />
//             <span style={{ color: "#2E8B57" }}>Us</span>
//           </h1>
//         </div>
//       </section>

//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
//           {/* Info */}
//           <div>
//             <span className="section-tag reveal">Our Details</span>
//             <h2
//               className="font-display font-bold mt-3 mb-8 reveal d1"
//               style={{
//                 fontSize: "2.2rem",
//                 textTransform: "uppercase",
//                 color: "#001F4D",
//               }}
//             >
//               Raisevision and Company Limited
//             </h2>

//             {[
//               {
//                 icon: "📍",
//                 label: "Head Office",
//                 content:
//                   "4/5 Apapa–Oshodi Expressway\n2nd Floor, Right Wing (Blue House)\nCoconut Bus Stop, Apapa, Lagos, Nigeria",
//               },
//               {
//                 icon: "📞",
//                 label: "Phone",
//                 content:
//                   "0803 718 5967\n0809 817 7660\n0802 411 0750\n0805 797 2005",
//               },
//               {
//                 icon: "✉️",
//                 label: "Email",
//                 content: "info@raisevisionlogistics.com",
//               },
//             ].map(({ icon, label, content }, i) => (
//               <div key={i} className={`flex gap-5 mb-8 reveal d${i + 1}`}>
//                 <div
//                   className="w-12 h-12 flex items-center justify-center text-xl flex-shrink-0"
//                   style={{ background: "#F4F7F9", border: "2px solid #E5EAF0" }}
//                 >
//                   {icon}
//                 </div>
//                 <div>
//                   <p
//                     className="text-xs font-semibold tracking-[0.2em] uppercase mb-1 text-gray-400"
//                     style={{ fontFamily: "Barlow Semi Condensed, sans-serif" }}
//                   >
//                     {label}
//                   </p>
//                   {content.split("\n").map((line, j) => (
//                     <p
//                       key={j}
//                       className="text-gray-700 text-sm"
//                       style={{ fontFamily: "Barlow, sans-serif" }}
//                     >
//                       {line}
//                     </p>
//                   ))}
//                 </div>
//               </div>
//             ))}

//             <a
//               href="https://wa.me/2348057972005"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-3 px-6 py-4 text-white font-semibold reveal d4"
//               style={{
//                 background: "#25D366",
//                 fontFamily: "Barlow Semi Condensed, sans-serif",
//               }}
//             >
//               <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
//                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
//               </svg>
//               Chat on WhatsApp — 0805 797 2005
//             </a>
//           </div>

//           {/* Form */}
//           <div className="reveal d2">
//             <h3
//               className="font-display font-bold text-2xl uppercase mb-6"
//               style={{ color: "#001F4D" }}
//             >
//               Request a Quote
//             </h3>
//             {sent ? (
//               <div className="py-16 text-center">
//                 <div
//                   className="w-16 h-16 flex items-center justify-center text-2xl mx-auto mb-4"
//                   style={{ background: "#2E8B57" }}
//                 >
//                   ✓
//                 </div>
//                 <h4
//                   className="font-display font-bold text-2xl uppercase mb-2"
//                   style={{ color: "#001F4D" }}
//                 >
//                   Message Sent!
//                 </h4>
//                 <p
//                   className="text-gray-500 text-sm"
//                   style={{ fontFamily: "Barlow, sans-serif" }}
//                 >
//                   Our team will respond within 24 hours.
//                 </p>
//                 <button
//                   onClick={() => setSent(false)}
//                   className="mt-6 text-xs underline text-gray-500"
//                 >
//                   Send another
//                 </button>
//               </div>
//             ) : (
//               <form onSubmit={submit} className="space-y-4">
//                 <div className="grid grid-cols-2 gap-4">
//                   {[
//                     ["name", "Full Name", "Your name"],
//                     ["company", "Company", "Company name"],
//                   ].map(([n, l, p]) => (
//                     <div key={n}>
//                       <label
//                         className="block text-xs font-semibold tracking-[0.15em] uppercase text-gray-500 mb-2"
//                         style={{
//                           fontFamily: "Barlow Semi Condensed, sans-serif",
//                         }}
//                       >
//                         {l}
//                       </label>
//                       <input
//                         name={n}
//                         value={form[n]}
//                         onChange={handle}
//                         placeholder={p}
//                         required={n === "name"}
//                         className="input-field"
//                       />
//                     </div>
//                   ))}
//                 </div>
//                 {[
//                   ["email", "Email", "your@email.com", "email"],
//                   ["phone", "Phone", "+234 xxx xxx xxxx", "tel"],
//                 ].map(([n, l, p, t]) => (
//                   <div key={n}>
//                     <label
//                       className="block text-xs font-semibold tracking-[0.15em] uppercase text-gray-500 mb-2"
//                       style={{
//                         fontFamily: "Barlow Semi Condensed, sans-serif",
//                       }}
//                     >
//                       {l}
//                     </label>
//                     <input
//                       name={n}
//                       type={t}
//                       value={form[n]}
//                       onChange={handle}
//                       placeholder={p}
//                       required={n === "email"}
//                       className="input-field"
//                     />
//                   </div>
//                 ))}
//                 <div>
//                   <label
//                     className="block text-xs font-semibold tracking-[0.15em] uppercase text-gray-500 mb-2"
//                     style={{ fontFamily: "Barlow Semi Condensed, sans-serif" }}
//                   >
//                     Service Required
//                   </label>
//                   <select
//                     name="service"
//                     value={form.service}
//                     onChange={handle}
//                     className="input-field bg-white"
//                   >
//                     <option value="">Select a service...</option>
//                     <optgroup label="── Logistics Services ──">
//                       {[
//                         "Clearing & Forwarding",
//                         "Sea Freight",
//                         "Air Freight",
//                         "Road Transport",
//                         "Warehousing",
//                         "Customs Advisory",
//                         "Export Documentation",
//                       ].map((s) => (
//                         <option key={s}>{s}</option>
//                       ))}
//                     </optgroup>
//                     <optgroup label="── Shipping Lines We Work With ──">
//                       {[
//                         "Maersk Line",
//                         "MSC Nigeria",
//                         "CMA CGM Nigeria Shipping Limited",
//                         "PTML Grimaldi Group",
//                         "Comet Shipping Agency Nigeria Limited",
//                         "PIL Shipping Company",
//                         "COSCO Shipping / OOCL",
//                         "Hapag-Lloyd",
//                         "ZIM Line",
//                         "K Line",
//                       ].map((s) => (
//                         <option key={s}>{s}</option>
//                       ))}
//                     </optgroup>
//                   </select>
//                 </div>
//                 <div>
//                   <label
//                     className="block text-xs font-semibold tracking-[0.15em] uppercase text-gray-500 mb-2"
//                     style={{ fontFamily: "Barlow Semi Condensed, sans-serif" }}
//                   >
//                     Message
//                   </label>
//                   <textarea
//                     name="message"
//                     value={form.message}
//                     onChange={handle}
//                     rows={4}
//                     placeholder="Describe your logistics requirements..."
//                     required
//                     className="input-field resize-none"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="btn-primary w-full justify-center"
//                 >
//                   Send Message
//                   <svg
//                     width="14"
//                     height="14"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2.5"
//                   >
//                     <path d="M5 12h14M12 5l7 7-7 7" />
//                   </svg>
//                 </button>
//               </form>
//             )}
//           </div>
//           {/* Map Section */}
//           <section className="py-16 bg-gray-100">
//             <div className="max-w-7xl mx-auto px-6">
//               <h3
//                 className="font-display font-bold text-2xl uppercase mb-6"
//                 style={{ color: "#001F4D" }}
//               >
//                 Our Location
//               </h3>

//               <div className="w-full h-[450px] overflow-hidden rounded-lg shadow-lg">
//                 <iframe
//                   title="Raisevision Logistics Location"
//                   src="https://www.google.com/maps?q=4/5%20Apapa-Oshodi%20Expressway%20Coconut%20Bus%20Stop%20Apapa%20Lagos&output=embed"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   loading="lazy"
//                   allowFullScreen
//                   referrerPolicy="no-referrer-when-downgrade"
//                 />
//               </div>
//             </div>
//           </section>
//         </div>
//       </section>
//     </>
//   );
// }


export function ContactPage() {
  const [form, setForm] = React.useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [sent, setSent] = React.useState(false);

  const handle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* SEO */}
        <title>Contact Raisevision Logistics | Freight Forwarding Lagos</title>

        <meta
          name="description"
          content="Contact Raisevision and Company Limited in Apapa Lagos for professional clearing and forwarding, sea freight, air freight, road transport and logistics services."
        />

        <meta
          name="keywords"
          content="logistics company Lagos, freight forwarding Lagos, clearing and forwarding Apapa, Nigeria logistics company"
        />

        <link rel="canonical" href="https://raisevisionlogistics.com/contact" />

        {/* Local Business Schema */}
        <script type="application/ld+json">
          {`
{
 "@context": "https://schema.org",
 "@type": "LogisticsBusiness",
 "name": "Raisevision and Company Limited",
 "image": "https://raisevisionlogistics.com/logo.png",
 "address": {
   "@type": "PostalAddress",
   "streetAddress": "4/5 Apapa–Oshodi Expressway",
   "addressLocality": "Apapa",
   "addressRegion": "Lagos",
   "postalCode": "101233",
   "addressCountry": "Nigeria"
 },
 "telephone": "+2348037185967",
 "email": "info@raisevisionlogistics.com",
 "url": "https://raisevisionlogistics.com"
}
`}
        </script>

      {/* HERO */}
      <section className="relative py-24" style={{ background: "#001226" }}>
        <div className="absolute inset-0">
          <img
            src="/project-13.png"
            alt="Contact"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-navy-900/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8">
          <div className="flex items-center gap-2 text-white/40 text-xs tracking-widest uppercase mb-6">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/70">Contact</span>
          </div>

          <span className="section-tag" style={{ color: "#2E8B57" }}>
            Get in Touch
          </span>

          <h1
            className="font-display font-black text-white mt-3"
            style={{
              fontSize: "clamp(3rem, 7vw, 6rem)",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              lineHeight: 0.95,
            }}
          >
            Contact <br />
            <span style={{ color: "#2E8B57" }}>Us</span>
          </h1>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* INFO */}
          <div>
            <h2
              className="font-display font-bold mt-3 mb-8"
              style={{
                fontSize: "2.2rem",
                textTransform: "uppercase",
                color: "#001F4D",
              }}
            >
              Raisevision and Company Limited
            </h2>

            <div className="mb-8">
              <p className="text-gray-700 text-sm">
                4/5 Apapa–Oshodi Expressway
              </p>

              <p className="text-gray-700 text-sm">
                2nd Floor, Right Wing (Blue House)
              </p>

              <p className="text-gray-700 text-sm">
                Coconut Bus Stop, Apapa, Lagos, Nigeria
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=4/5+Apapa-Oshodi+Expressway+Coconut+Bus+Stop+Apapa+Lagos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-green-700 font-semibold text-sm underline"
              >
                View on Google Maps
              </a>
            </div>
          </div>

          {/* FORM */}
          <div>
            <h3
              className="font-display font-bold text-2xl uppercase mb-6"
              style={{ color: "#001F4D" }}
            >
              Request a Quote
            </h3>

            {sent ? (
              <div className="text-center py-16">
                <h4 className="text-2xl font-bold mb-3">Message Sent!</h4>

                <p className="text-gray-500">
                  Our team will respond within 24 hours.
                </p>

                <button
                  onClick={() => setSent(false)}
                  className="mt-6 underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={handle}
                  placeholder="Full Name"
                  required
                  className="input-field"
                />

                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handle}
                  placeholder="Email"
                  required
                  className="input-field"
                />

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handle}
                  placeholder="Phone"
                  className="input-field"
                />

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handle}
                  rows="4"
                  placeholder="Your message..."
                  className="input-field"
                />

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h3
            className="font-display font-bold text-2xl uppercase mb-6"
            style={{ color: "#001F4D" }}
          >
            Our Location
          </h3>

          <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Raisevision Logistics Location"
              src="https://www.google.com/maps?q=4/5%20Apapa-Oshodi%20Expressway%20Coconut%20Bus%20Stop%20Apapa%20Lagos&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}