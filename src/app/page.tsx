"use client";

import Image from "next/image";
import { useState } from "react";

const apps = [
  { name: "The Distinguished Gentleman's Ride", desc: "Global motorcycle charity in over 1000 cities worldwide", href: "https://www.gentlemansride.com" },
  { name: "The Distinguished Gentleman's Drive", desc: "Classic car charity event ", href: "https://www.gentlemansdrive.com" },
  { name: "Jam Content", desc: "Manage and schedule your own content with ease", href: "https://www.jamcontent.com" },
  { name: "Skrabble Keeper", desc: "Score tracking for Scrabble game players", href: "https://www.skrabblekeeper.com" },
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setSubmitSuccess(false);
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-pattern flex flex-col justify-between px-8 py-10 md:px-16 md:py-12">
      {/* Header */}
      <header className="flex items-center justify-between opacity-0 animate-fade-in">
      
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24 py-12">
        {/* Left - Info */}
        <div className="text-center md:text-left opacity-0 animate-fade-in-up delay-100 flex flex-col items-left justify-center space-y-1">
        <Image
          src="/MaykeLogo.svg"
          alt="Mayke"
          width={200}
          height={55}
          priority
        />
                <span className="text-sm text-[var(--muted)]">Developer & Automotive Enthusiast</span>
                <span className="text-sm text-[var(--muted)]">Sydney, Australia</span>



          <p className="text-[var(--muted)] text-sm mb-6">
            By <span className="text-[var(--foreground)]">Mikey Stoj</span>
          </p>
          <div className="flex items-center justify-center md:justify-start gap-3">
            <a
              href="https://x.com/mikeystoj"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[var(--foreground)] text-white flex items-center justify-center hover:scale-110 transition-transform"
              title="X (Twitter)"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mikey-stojcevski-20403a58/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 transition-transform"
              title="LinkedIn"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-9 h-9 rounded-full bg-[var(--accent)] text-white flex items-center justify-center hover:scale-110 transition-transform"
              title="Get in touch"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-32 bg-gray-200" />

        {/* Right - Apps */}
        <div className="opacity-0 animate-fade-in-up delay-200">
          <p className="text-xs uppercase tracking-widest text-[var(--muted)] mb-4 text-center md:text-left">
            Projects
          </p>
          <ul className="space-y-3">
            {apps.map((app, i) => (
              <li key={app.name}>
                <a
                  href={app.href}
                  className="group block hover:text-[var(--accent)] transition-colors"
                  style={{ animationDelay: `${(i + 3) * 100}ms` }}
                >
                  <span className="text-sm font-medium">{app.name}</span>
                  <span className="block text-xs text-[var(--muted)] group-hover:text-[var(--accent)]/70">{app.desc}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in" />
          <div
            className="relative bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {submitSuccess ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl mb-1">Sent!</h3>
                <p className="text-sm text-[var(--muted)]">We&apos;ll be in touch.</p>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-2xl mb-1">Get in Touch</h3>
                <p className="text-sm text-[var(--muted)] mb-6">hello@mayke.com.au</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-200 focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]/20 outline-none transition-all"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-200 focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]/20 outline-none transition-all"
                    placeholder="Email"
                  />
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-200 focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]/20 outline-none transition-all resize-none"
                    placeholder="Message"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 bg-[var(--accent)] text-white text-sm rounded-lg font-medium hover:bg-[var(--accent-hover)] transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
