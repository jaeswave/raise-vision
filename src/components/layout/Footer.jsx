import React from "react";
import { Link } from "react-router-dom";
import Logo from "../ui/Logo";
import { FaWhatsapp, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{ background: "#001226" }}>
      {/* CTA strip */}
      <div style={{ background: "#2E8B57" }}>
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-display text-3xl font-bold tracking-wide">
              Ready to Move Your Cargo?
            </h3>
            <p
              className="text-white/70 text-sm mt-1"
              style={{ fontFamily: "Barlow, sans-serif" }}
            >
              Get a customized logistics quote within 24 hours.
            </p>
          </div>
          <Link to="/contact" className="btn-outline-white flex-shrink-0">
            Request a Quote
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
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Logo variant="light" size="md" />
            <p
              className="mt-5 text-white/50 text-sm leading-relaxed max-w-sm"
              style={{ fontFamily: "Barlow, sans-serif" }}
            >
              Licensed clearing agents and end-to-end logistics providers
              operating across Nigeria's ports, borders, and airways since 2007.
            </p>
            <div className="mt-6 flex gap-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/2348057972005"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:text-green-400 hover:border-green-400 transition-all"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={16} />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/raisevisionlogistics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:text-pink-400 hover:border-pink-400 transition-all"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com/raisevision"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:text-sky-400 hover:border-sky-400 transition-all"
                aria-label="Twitter"
              >
                <FaTwitter size={16} />
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/raisevision"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:text-blue-400 hover:border-blue-400 transition-all"
                aria-label="Facebook"
              >
                <FaFacebook size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4
              className="text-white/40 text-xs font-semibold tracking-[0.2em] uppercase mb-5"
              style={{ fontFamily: "Barlow Semi Condensed, sans-serif" }}
            >
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {[
                ["/", "Home"],
                ["/about", "About Us"],
                ["/services", "Services"],
                ["/clients", "Clients"],
                ["/gallery", "Gallery"],
                ["/certificates", "Licenses"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <Link
                  key={to}
                  to={to}
                  className="text-white/55 hover:text-white text-sm transition-colors"
                  style={{ fontFamily: "Barlow, sans-serif" }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4
              className="text-white/40 text-xs font-semibold tracking-[0.2em] uppercase mb-5"
              style={{ fontFamily: "Barlow Semi Condensed, sans-serif" }}
            >
              Contact
            </h4>
            <div
              className="space-y-4 text-sm text-white/55"
              style={{ fontFamily: "Barlow, sans-serif" }}
            >
              <p className="leading-relaxed">
                4/5 Apapa–Oshodi Expressway
                <br />
                2nd Floor, Right Wing (Blue House)
                <br />
                Coconut Bus Stop, Apapa, Lagos
              </p>
              <div className="space-y-1">
                {["0803 718 5967", "0809 817 7660", "0802 411 0750"].map(
                  (n) => (
                    <a
                      key={n}
                      href={`tel:${n.replace(/\s/g, "")}`}
                      className="block hover:text-white transition-colors"
                    >
                      {n}
                    </a>
                  ),
                )}
              </div>
              <a
                href="mailto:info@raisevisionlogistics.com"
                className="block hover:text-white transition-colors break-all"
              >
                info@raisevisionlogistics.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p
            className="text-white/30 text-xs"
            style={{ fontFamily: "Barlow, sans-serif" }}
          >
            © {new Date().getFullYear()} Raisevision and Company Limited. All
            rights reserved. RC 718788
          </p>
          <p
            className="text-white/30 text-xs"
            style={{ fontFamily: "Barlow, sans-serif" }}
          >
            NPA Licensed · NCS Cleared · NEPC Registered · CAC Incorporated
          </p>
        </div>
      </div>
    </footer>
  );
}
