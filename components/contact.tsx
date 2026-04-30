"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";

const services = [
  "Blanqueamiento Dental",
  "Limpieza y Prevención",
  "Ortodoncia",
  "Odontopediatría",
  "Implantes Dentales",
  "Estética Dental",
  "Otro",
];

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulación de envío del formulario
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="contacto" className="bg-muted/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="mx-auto max-w-lg border-0 shadow-sm">
            <CardContent className="flex flex-col items-center p-8 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-foreground">
                ¡Mensaje enviado!
              </h3>
              <p className="mb-6 text-muted-foreground">
                Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto para
                confirmar tu cita.
              </p>
              <Button onClick={() => setIsSubmitted(false)}>
                Enviar nuevo mensaje
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="bg-muted/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Contacto
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Agenda tu cita
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Completa el formulario a continuación y nuestro equipo se pondrá en contacto para
            confirmar el mejor horario para ti.
          </p>
        </div>

        <Card className="mx-auto max-w-2xl border-0 shadow-sm">
          <CardContent className="p-6 sm:p-8">
            <form onSubmit={handleSubmit}>
              <FieldGroup className="gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field>
                    <FieldLabel htmlFor="name">Nombre completo</FieldLabel>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Tu nombre"
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="phone">Teléfono / WhatsApp</FieldLabel>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      required
                    />
                  </Field>
                </div>

                <Field>
                  <FieldLabel htmlFor="email">Correo electrónico</FieldLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    required
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="service">
                    Servicio de interés
                  </FieldLabel>
                  <Select name="service" required>
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Selecciona un servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service.toLowerCase()}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>

                <Field>
                  <FieldLabel htmlFor="message">Mensaje (opcional)</FieldLabel>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Cuéntanos más sobre tu necesidad o preferencia de horario..."
                    rows={4}
                  />
                </Field>

                <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar mensaje
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}