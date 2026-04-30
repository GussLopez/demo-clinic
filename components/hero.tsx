import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Shield, label: "Equipo Calificado" },
  { icon: Clock, label: "Horarios flexibles" },
  { icon: Heart, label: "Atendimento Humanizado" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden pt-16 lg:pt-20"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/dental-hero.jpg"
          alt="Consultório odontológico moderno"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-4 sm:px-6 lg:min-h-[calc(100vh-5rem)] lg:px-8">
        <div className="max-w-2xl py-16 lg:py-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="text-sm font-medium text-secondary-foreground">
              El Mejor Servicio
            </span>
          </div>

          <h1 className="mb-6 text-balance text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Cuidando su{" "}
            <span className="text-primary">sonrisa</span> con exelencia
          </h1>

          <p className="mb-8 max-w-lg text-pretty text-lg text-muted-foreground lg:text-xl">
           En DentalCare, combinamos tecnología avanzada con un servicio amable para brindarle el mejor tratamiento dental a usted y a su familia
          </p>

          <div className="mb-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="#contato">
                Agendar Cita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#servicos">Conocer Servicios</Link>
            </Button>
          </div>

          <div className="flex flex-wrap gap-6">
            {features.map((feature) => (
              <div key={feature.label} className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
