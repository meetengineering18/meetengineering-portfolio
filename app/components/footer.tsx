import Link from "next/link";
import Image from "next/image";
import { Instagram, Youtube, Facebook, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-blue-400 text-black w-full z-50">
      <div className="container mx-auto px-4 py-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mx-19 md:text-left">
          {/* Logo and Contact Info */}
          <div className="space-y-4">
            <Image
              src="/MEET.png"
              alt="Meet engineering"
              width={220}
              height={60}
              className="mx-auto md:mx-0"
            />
            <div className="flex flex-col items-center md:items-start space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={20} />
                <a href="tel:+919825869799" className="hover:underline">
                  +91 9825869799
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={20} />
                <a
                  href="mailto:meetengineering18@gmail.com"
                  className="hover:underline"
                >
                  meetengineering18@gmail.com
                </a>
              </div>
              <address className="not-italic text-center md:text-left mt-2">
                Gundlav, Old G.I.D.C, Plot No: 66
                <br />
                Valsad, Gujarat
              </address>
              <div className="flex gap-4 mt-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-100"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-100"
                >
                  <Youtube size={24} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-100"
                >
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-2">Explore</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/about" className="hover:underline">
                About
              </Link>
              <Link href="/whyus" className="hover:underline">
                Why Choose Us
              </Link>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </nav>
          </div>

          {/* Google Map */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <div className="w-full h-64 mt-4 relative group rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.099759341364!2d72.97303107501986!3d20.624790180925416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0e90040cb07d5%3A0xe1355f6000276b9e!2smeet%20engineering!5e0!3m2!1sen!2sin!4v1754810355755!5m2!1sen!2sin"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0 pointer-events-none"
              ></iframe>

              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.099759341364!2d72.97303107501986!3d20.624790180925416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0e90040cb07d5%3A0xe1355f6000276b9e!2smeet%20engineering!5e0!3m2!1sen!2sin!4v1754810355755!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
              <a
                href="https://www.google.com/maps/place/meet+engineering/@20.6247902,72.9730311,17z/data=!3m1!4b1!4m6!3m5!1s0x3be0e90040cb07d5:0xe1355f6000276b9e!8m2!3d20.6247902!4d72.975606!16s%2Fg%2F11md3ylyfy?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label="Open full map"
              ></a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 py-4 w-full">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center md:justify-between items-center text-xs text-black/80">
          <p>© {new Date().getFullYear()} Meet Engineering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
