import {
  Sparkles,
  Stethoscope,
  Smile,
  Baby,
  Syringe,
  ScanFace,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Sparkles,
    title: "Blanqueamiento Dental",
    description:
      "Recupera el brillo natural de tu sonrisa con nuestros tratamientos de blanqueamiento profesional.",
  },
  {
    icon: Stethoscope,
    title: "Limpieza y Prevención",
    description:
      "Limpiezas regulares y orientación para mantener tu salud bucal siempre en buen estado.",
  },
  {
    icon: Smile,
    title: "Ortodoncia",
    description:
      "Aparatos tradicionales y alineadores transparentes para una sonrisa perfecta.",
  },
  {
    icon: Baby,
    title: "Odontopediatría",
    description:
      "Atención especializada y amigable para niños de todas las edades.",
  },
  {
    icon: Syringe,
    title: "Implantes Dentales",
    description:
      "Rehabilitación oral con implantes de última generación para resultados duraderos.",
  },
  {
    icon: ScanFace,
    title: "Estética Dental",
    description:
      "Carillas, lentes dentales y restauraciones estéticas para una sonrisa perfecta.",
  },
];
export function Services() {
  return (
    <section id="servicos" className="bg-muted/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Nuestros Servicios
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Tratamientos completos para su salud bucal.
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Ofrecemos una amplia gama de servicios dentales con equipos modernos y profesionales cualificados.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border-0 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                  <service.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
