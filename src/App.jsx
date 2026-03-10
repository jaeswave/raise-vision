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

export default function App() {
  return (
    <>
      {/* GLOBAL SEO */}
      <SEO
        title="Raisevision Logistics"
        description="Raisevision and Company Limited provides clearing and forwarding, sea freight, air freight, road transport and logistics services in Lagos Nigeria."
        url="/"
      />

      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />

              <Route
                path="about"
                element={
                  <>
                    <SEO
                      title="About Raisevision Logistics"
                      description="Learn about Raisevision and Company Limited, a trusted freight forwarding and logistics company in Lagos Nigeria."
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
                      title="Logistics Services in Lagos"
                      description="Sea freight, air freight, clearing and forwarding, road transport and logistics services in Lagos Nigeria."
                      url="/services"
                    />
                    <ServicesPage />
                  </>
                }
              />

              <Route path="gallery" element={<LazyGallery />} />
              <Route path="clients" element={<LazyClients />} />
              <Route path="certificates" element={<LazyCerts />} />
              <Route path="contact" element={<LazyContact />} />

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}
