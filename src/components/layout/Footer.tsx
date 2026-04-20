import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-surface-hover/50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <span className="text-3xl font-black text-brand-yellow tracking-tighter">NLA</span>
              <span className="text-3xl font-black text-brand-red tracking-tighter ml-1">WRESTLING</span>
            </Link>
            <p className="text-muted text-sm max-w-sm mb-6 leading-relaxed">
              A centralized hub for the wrestling and athletics community to share journeys, celebrate success, and inspire the next generation of champions.
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-surface-hover flex items-center justify-center text-muted hover:text-brand-yellow transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-surface-hover flex items-center justify-center text-muted hover:text-brand-yellow transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-surface-hover flex items-center justify-center text-muted hover:text-brand-yellow transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li><Link href="/" className="hover:text-brand-yellow transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-brand-yellow transition-colors">About Us</Link></li>
              <li><Link href="/stories" className="hover:text-brand-yellow transition-colors">Community Stories</Link></li>
              <li><Link href="/submit" className="hover:text-brand-yellow transition-colors">Share Your Journey</Link></li>
              <li><Link href="/login" className="hover:text-brand-yellow transition-colors">Login / Register</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                <span>123 Champion Blvd, Suite 400<br/>Chicago, IL 60601</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-yellow shrink-0" />
                <span>+1 (555) 012-3456</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-yellow shrink-0" />
                <span>info@nlawrestling.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-surface-hover/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs">
            © {new Date().getFullYear()} NLA Wrestling. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
