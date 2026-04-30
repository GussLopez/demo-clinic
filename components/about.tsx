import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Más de 15 años de experiencia",
  "Equipo multidisciplinario calificado",
  "Equipos de última generación",
  "Ambiente moderno y acogedor",
  "Aceptamos diversos seguros",
  "Facilidad de pago",
];

export function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-secondary">
              <div className="absolute inset-4 rounded-xl bg-card shadow-lg">
                <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary">
                    <span className="text-3xl font-bold text-primary-foreground">
                      15+
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-foreground">
                    Años de experiencia
                  </p>
                  <p className="text-muted-foreground">
                    cuidando sonrisas
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-xl bg-secondary p-6 shadow-lg lg:block">
              <div className="text-center">
                <p className="text-3xl font-bold text-secondary-foreground">
                  +5,000
                </p>
                <p className="text-sm text-secondary-foreground/80">
                  Pacientes atendidos
                </p>
              </div>
            </div>
          </div>

          <div>
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Sobre Nosotros
            </span>
            <h2 className="mb-6 text-balance text-3xl font-bold text-foreground sm:text-4xl">
              Excelencia y cuidado en cada atención
            </h2>
            <p className="mb-6 text-pretty text-lg text-muted-foreground">
              DentalCare nació con el objetivo de ofrecer tratamientos
              odontológicos de alta calidad en un ambiente acogedor y
              humanizado. Nuestro equipo está compuesto por profesionales
              experimentados y en constante actualización.
            </p>
            <p className="mb-8 text-pretty text-muted-foreground">
              Utilizamos tecnología de punta para garantizar diagnósticos precisos
              y tratamientos eficientes, siempre priorizando la comodidad y
              el bienestar de nuestros pacientes.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}