import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const quickLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#sobre", label: "Sobre nosotros" },
  { href: "#horarios", label: "Horarios" },
  { href: "#localizacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="bg-foreground py-12 text-background/80 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="#inicio" className="mb-4 inline-flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <span className="text-lg font-bold text-primary-foreground">
                  D
                </span>
              </div>
              <span className="text-xl font-bold text-background">
                Dental<span className="text-primary">Care</span>
              </span>
            </Link>
            <p className="mb-6 max-w-md text-background/70">
              Cuidando tu sonrisa con excelencia y dedicación desde hace más de 15
              años. Tu salud bucal es nuestra prioridad.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-primary"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-background">
              Enlaces rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-background">
              Contacto
            </h3>
            <ul className="space-y-3 text-background/70">
              <li>Av. Paulista, 1000 - Bela Vista</li>
              <li>São Paulo - SP, 01310-100</li>
              <li>
                <a
                  href="tel:+5511999999999"
                  className="transition-colors hover:text-primary"
                >
                  (11) 99999-9999
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@DentalCare.com"
                  className="transition-colors hover:text-primary"
                >
                  contacto@DentalCare.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8 text-center text-sm text-background/50">
          <p>
            &copy; {new Date().getFullYear()} DentalCare. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}