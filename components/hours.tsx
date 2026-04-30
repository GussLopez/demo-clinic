import { Clock, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const schedule = [
  { day: "Lunes", hours: "08:00 - 18:00" },
  { day: "Martes", hours: "08:00 - 18:00" },
  { day: "Miércoles", hours: "08:00 - 18:00" },
  { day: "Jueves", hours: "08:00 - 18:00" },
  { day: "Viernes", hours: "08:00 - 17:00" },
  { day: "Sábado", hours: "08:00 - 12:00" },
  { day: "Domingo", hours: "Cerrado" },
];

export function Hours() {
  const today = new Date().getDay();
  const dayMapping: Record<number, string> = {
    0: "Domingo",
    1: "Lunes",
    2: "Martes",
    3: "Miércoles",
    4: "Jueves",
    5: "Viernes",
    6: "Sábado",
  };
  const todayName = dayMapping[today];

  return (
    <section id="horarios" className="bg-muted/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Horario de Atención
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Cuándo estamos disponibles
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Ofrecemos horarios flexibles para adaptarnos a tus necesidades.
            Agenda tu consulta en el horario que más te convenga.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-6 flex items-center justify-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    Horarios de Atención
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Lunes a Sábado
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {schedule.map((item) => (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between rounded-lg px-4 py-3 transition-colors ${
                      item.day === todayName
                        ? "bg-primary/10"
                        : "bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span
                        className={`font-medium ${
                          item.day === todayName
                            ? "text-primary"
                            : "text-foreground"
                        }`}
                      >
                        {item.day}
                        {item.day === todayName && (
                          <span className="ml-2 text-xs font-normal text-primary">
                            (Hoy)
                          </span>
                        )}
                      </span>
                    </div>
                    <span
                      className={`font-medium ${
                        item.hours === "Cerrado"
                          ? "text-muted-foreground"
                          : item.day === todayName
                          ? "text-primary"
                          : "text-foreground"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-lg bg-secondary/50 p-4 text-center">
                <p className="text-sm text-secondary-foreground">
                  <strong>Emergencias:</strong> Atendemos casos urgentes fuera del
                  horario laboral. Contáctanos por WhatsApp.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}