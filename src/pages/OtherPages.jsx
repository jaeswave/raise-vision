// Gallery Page
import React from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useReveal";
import { useState } from "react";


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




export function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault(); // We'll handle submission manually with fetch
    setLoading(true);
    setError(false);

    try {
      // Send the form data to FormSubmit using fetch
      const response = await fetch(
        "https://formsubmit.co/info@raisevisionlogistics.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone,
            company: form.company,
            service: form.service,
            message: form.message,
            _subject: "New Contact Form Submission from Raisevision Website",
            _template: "box",
            _captcha: "false",
          }),
        },
      );

      if (response.ok) {
        setSent(true);
        setForm({
          name: "",
          company: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
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

              <div className="mt-4 space-y-1">
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href="mailto:info@raisevisionlogistics.com"
                    className="text-green-700 hover:underline"
                  >
                    info@raisevisionlogistics.com
                  </a>
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Phone:</span> +234 803 718
                  5967
                </p>
              </div>

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
              <div className="text-center py-16 bg-gray-50 rounded-lg">
                <div className="text-6xl mb-4">✅</div>
                <h4 className="text-2xl font-bold mb-3 text-green-700">
                  Message Sent Successfully!
                </h4>
                <p className="text-gray-600 mb-4">
                  Thank you for contacting us. Our team will respond within 24
                  hours.
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  A confirmation has been sent to <strong>{form.email}</strong>
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-center">
                    <p className="text-red-700 font-medium mb-2">
                      ❌ Something went wrong!
                    </p>
                    <p className="text-sm text-red-600">
                      Your message couldn't be sent. Please try again or email
                      us directly at{" "}
                      <a
                        href="mailto:info@raisevisionlogistics.com"
                        className="underline font-semibold"
                      >
                        info@raisevisionlogistics.com
                      </a>
                    </p>
                  </div>
                )}

                <form onSubmit={submit} className="space-y-4">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handle}
                    placeholder="Full Name *"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    disabled={loading}
                  />

                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handle}
                    placeholder="Email Address *"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    disabled={loading}
                  />

                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handle}
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    disabled={loading}
                  />

                  <input
                    name="company"
                    value={form.company}
                    onChange={handle}
                    placeholder="Company (Optional)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    disabled={loading}
                  />

                  <input
                    name="service"
                    value={form.service}
                    onChange={handle}
                    placeholder="Service Interested In (Optional)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    disabled={loading}
                  />

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handle}
                    rows="4"
                    placeholder="Your Message *"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    disabled={loading}
                  />

                  <button
                    type="submit"
                    className={`w-full bg-green-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-800 transition duration-300 ${
                      loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    We'll never share your information with third parties.
                  </p>
                </form>
              </>
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


