import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import SEO from "./components/SEO";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const LazyGallery = lazy(() =>
  import("./pages/OtherPages").then((m) => ({ default: m.GalleryPage })),
);
const LazyClients = lazy(() =>
  import("./pages/OtherPages").then((m) => ({ default: m.ClientsPage })),
);
const LazyCerts = lazy(() =>
  import("./pages/OtherPages").then((m) => ({ default: m.CertificatesPage })),
);
const LazyContact = lazy(() =>
  import("./pages/OtherPages").then((m) => ({ default: m.ContactPage })),
);

function Loader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2.5 h-2.5 rounded-full animate-bounce"
            style={{ background: "#2E8B57", animationDelay: `${i * 150}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24">
      <h1
        className="font-display font-black text-[10rem] leading-none"
        style={{ color: "#F0F4F8" }}
      >
        404
      </h1>
      <h2
        className="font-display font-bold text-4xl uppercase -mt-8 mb-4"
        style={{ color: "#001F4D" }}
      >
        Page Not Found
      </h2>
      <a href="/" className="btn-primary mt-4">
        Back to Home
      </a>
    </div>
  );
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LogisticsBusiness",
  name: "Raisevision and Company Limited",
  image: "https://raisevisionlogistics.com/raisevision-logo.png",
  url: "https://raisevisionlogistics.com",
  telephone: "+2348037185967",
  email: "info@raisevisionlogistics.com",
  foundingDate: "2007",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "4/5 Apapa-Oshodi Expressway, 2nd Floor, Right Wing (Blue House), Coconut Bus Stop",
    addressLocality: "Apapa",
    addressRegion: "Lagos",
    addressCountry: "NG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 6.4474,
    longitude: 3.3903,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: [
    "https://instagram.com/raisevisionlogistics",
    "https://twitter.com/Raisevision_",
    "https://facebook.com/raisevision",
  ],
};

export default function App() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route element={<Layout />}>
              <Route
                index
                element={
                  <>
                    <SEO
                      title="Clearing & Forwarding Agents Lagos Nigeria"
                      description="Raisevision and Company Limited — NPA licensed clearing agents and freight forwarders based in Apapa, Lagos. Sea freight, air freight, road haulage and customs compliance since 2007."
                      keywords="clearing and forwarding Lagos, freight forwarders Nigeria, customs clearing Apapa, logistics company Lagos, import export Nigeria, NPA licensed agent, sea freight Nigeria, air freight Lagos"
                      url="/"
                    />
                    <HomePage />
                  </>
                }
              />
              <Route
                path="about"
                element={
                  <>
                    <SEO
                      title="About Us — Clearing Agents Since 2007"
                      description="Learn about Raisevision and Company Limited, incorporated in 2007 and operating as one of Nigeria's most trusted clearing and forwarding companies at Apapa port Lagos."
                      keywords="about Raisevision logistics, clearing agents Lagos history, logistics company Nigeria 2007, Apapa port agents"
                      url="/about"
                    />
                    <AboutPage />
                  </>
                }
              />
              <Route
                path="services"
                element={
                  <>
                    <SEO
                      title="Freight & Logistics Services — Sea, Air, Road"
                      description="Professional freight services in Nigeria — sea freight, air freight, road haulage, warehousing, customs clearance and export documentation."
                      keywords="sea freight Nigeria, air freight Lagos, road haulage Nigeria, warehousing Lagos, customs clearance Nigeria, export documentation Nigeria, freight forwarding Lagos"
                      url="/services"
                    />
                    <ServicesPage />
                  </>
                }
              />
              <Route
                path="gallery"
                element={
                  <>
                    <SEO
                      title="Operations Gallery — Port & Project Photos"
                      description="View real project photos from Raisevision's logistics operations — transformer clearance at Apapa port, heavy-lift haulage, and site delivery for TCN Nigeria."
                      keywords="logistics operations Nigeria, Apapa port photos, transformer clearance Lagos, TCN power project Nigeria"
                      url="/gallery"
                    />
                    <LazyGallery />
                  </>
                }
              />
              <Route
                path="clients"
                element={
                  <>
                    <SEO
                      title="Our Clients — Maersk, MSC, TCN & More"
                      description="Raisevision serves Maersk, MSC, Transmission Company of Nigeria, Afe Babalola University, Adlinco Construction and more. Trusted by leading organisations across Nigeria."
                      keywords="Raisevision clients, Maersk Nigeria, TCN logistics, freight clients Lagos, clearing agent clients Nigeria"
                      url="/clients"
                    />
                    <LazyClients />
                  </>
                }
              />
              <Route
                path="certificates"
                element={
                  <>
                    <SEO
                      title="Licences & Certificates — NPA, NCS, NEPC, CAC"
                      description="Raisevision holds active NPA, NCS, NEPC and CAC licences — fully compliant with all Nigerian port and customs regulations. RC 718788."
                      keywords="NPA licensed agent Nigeria, NCS clearing licence, NEPC registered exporter, CAC registered logistics Nigeria"
                      url="/certificates"
                    />
                    <LazyCerts />
                  </>
                }
              />
              <Route
                path="contact"
                element={
                  <>
                    <SEO
                      title="Contact Us — Get a Freight Quote Today"
                      description="Contact Raisevision and Company Limited in Apapa Lagos for a freight quote. Sea freight, air cargo, road haulage and customs clearance — call or message us today."
                      keywords="contact Raisevision logistics, freight quote Lagos, clearing agent contact Apapa, logistics quote Nigeria"
                      url="/contact"
                    />
                    <LazyContact />
                  </>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}
