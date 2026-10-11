"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import type { Service } from "@/lib/types";
import { Button } from "./ui/Button";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent" }
  | { kind: "error"; message: string; fields: Record<string, string[] | undefined> };

const field =
  "w-full rounded-sm border border-gold/40 bg-ivory/5 px-4 py-3 text-ivory placeholder:text-ivory/40 aria-[invalid=true]:border-red-400";

export function ContactForm({ services }: { services: Service[] }) {
  const preset = useSearchParams().get("service") ?? "";
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ kind: "sending" });
    const payload = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok)
        return setStatus({
          kind: "error",
          message: json.error ?? "Something went wrong",
          fields: json.fieldErrors ?? {},
        });
      setStatus({ kind: "sent" });
    } catch {
      setStatus({
        kind: "error",
        message: "Network error. Please try again.",
        fields: {},
      });
    }
  }

  if (status.kind === "sent") {
    return (
      <div role="status" className="border-gold border p-10">
        <CheckCircle2 className="text-gold mb-3 size-8" />
        <h2 className="text-3xl">Thank you.</h2>
        <p className="mt-2 opacity-85">
          We received your request and will reply shortly.
        </p>
      </div>
    );
  }

  const errors = status.kind === "error" ? status.fields : {};
  const Err = ({ name }: { name: string }) =>
    errors[name]?.[0] ? (
      <span id={`${name}-err`} className="text-sm text-red-300">
        {errors[name]![0]}
      </span>
    ) : null;
  const aria = (name: string) => ({
    "aria-invalid": !!errors[name],
    "aria-describedby": errors[name] ? `${name}-err` : undefined,
  });
  const label = "grid gap-1.5 text-sm text-gold-light";

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <label className={label}>
        Name
        <input name="name" autoComplete="name" className={field} {...aria("name")} />
        <Err name="name" />
      </label>
      <label className={label}>
        Email
        <input
          name="email"
          type="email"
          autoComplete="email"
          className={field}
          {...aria("email")}
        />
        <Err name="email" />
      </label>
      <label className={label}>
        Phone (optional)
        <input name="phone" type="tel" autoComplete="tel" className={field} />
      </label>
      <label className={label}>
        Service
        <select name="service" defaultValue={preset} className={field}>
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.name} className="text-black">
              {s.name}
            </option>
          ))}
        </select>
      </label>
      <label className={label}>
        Message
        <textarea name="message" rows={5} className={field} {...aria("message")} />
        <Err name="message" />
      </label>
      {/* Honeypot field for bots */}
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px]"
      />
      {status.kind === "error" && (
        <p role="alert" className="text-red-300">
          {status.message}
        </p>
      )}
      <Button disabled={status.kind === "sending"} className="justify-self-start">
        {status.kind === "sending" ? "Sending…" : "Send request"}
      </Button>
    </form>
  );
}
