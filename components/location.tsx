import { MapPin, Phone, Mail, Navigation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    label: "Dirección",
    value: "Av. Paulista, 1000 - Bela Vista",
    sublabel: "São Paulo - SP, 01310-100",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "(11) 99999-9999",
    sublabel: "(11) 3333-3333",
  },
  {
    icon: Mail,
    label: "Correo electrónico",
    value: "contacto@DentalCare.com",
    sublabel: "Respondemos en hasta 24h",
  },
];

export function Location() {
  return (
    <section id="localizacion" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Ubicación
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Ven a visitarnos
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Estamos ubicados en una zona de fácil acceso, con
            estacionamiento cercano y transporte público disponible.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-1">
            {contactInfo.map((info) => (
              <Card key={info.label} className="border-0 shadow-sm">
                <CardContent className="flex items-start gap-4 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {info.label}
                    </p>
                    <p className="font-semibold text-foreground">
                      {info.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {info.sublabel}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button className="w-full" size="lg" asChild>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Av.+Paulista,+1000+-+Bela+Vista,+São+Paulo+-+SP"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="mr-2 h-5 w-5" />
                Cómo llegar
              </a>
            </Button>
          </div>

          <div className="lg:col-span-2">
            <Card className="h-full min-h-[400px] overflow-hidden border-0 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975847442!2d-46.65512902467455!3d-23.564611161774377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1ses!2smx!4v1704067200000!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de DentalCare"
                className="h-full w-full"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}