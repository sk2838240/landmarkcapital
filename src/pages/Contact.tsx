import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/common/Button";
import { Icon } from "@/components/common/Icon";
import { Seo } from "@/components/common/Seo";
import { MapPin, Mail, Phone } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initial: FormState = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm(initial);
      setTimeout(() => setStatus("idle"), 3500);
    }, 900);
  };

  return (
    <>
      <Seo
        title="Contact"
        description="Reach out regarding investment opportunities, fund participation, or strategic partnerships. Responses are handled with discretion."
      />
      <PageHero
        eyebrow="Contact"
        title="We welcome serious inquiries."
        subtitle="Reach out regarding investment opportunities, fund participation, or strategic partnerships. Responses are handled with discretion."
      />

      <section className="section-pad bg-ivory">
        <div className="container-tb">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="display-3 mb-10">Send a message</h2>
              </Reveal>

              <form onSubmit={onSubmit} className="space-y-6">
                <Field
                  label="Name"
                  type="text"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  required
                />
                <Field
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  required
                />
                <Field
                  label="Subject"
                  type="text"
                  value={form.subject}
                  onChange={(v) => setForm({ ...form, subject: v })}
                  required
                />
                <Field
                  label="Message"
                  type="textarea"
                  value={form.message}
                  onChange={(v) => setForm({ ...form, message: v })}
                  required
                />
                <Button type="submit" variant="primary" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : status === "sent" ? "Message sent" : "Submit"}
                </Button>
              </form>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.05}>
                <div className="bg-stone rounded-[12px] border border-border p-8 lg:p-10 space-y-8">
                  <div className="flex gap-4">
                    <Icon as={MapPin} size={20} className="text-crimson-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-slate mb-2">Office</p>
                      <address className="text-charcoal leading-relaxed not-italic">
                        608-B Wing, Express Zone,
                        <br />
                        Western Express Highway, Goregaon (E), Mumbai-400 097
                      </address>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Icon as={Phone} size={20} className="text-crimson-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-slate mb-2">Phone</p>
                      <p className="text-charcoal tabular-nums">
                        <a href="tel:+912262366266" className="link-underline">
                          +91 22 6236 6266
                        </a>
                        {" / "}
                        <a href="tel:+912262366277" className="link-underline">
                          6277
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Icon as={Mail} size={20} className="text-crimson-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-slate mb-2">Email</p>
                      <a
                        href="mailto:dhananjay@landmarkcapital.in"
                        className="text-charcoal link-underline"
                      >
                        dhananjay@landmarkcapital.in
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-8 rounded-[12px] overflow-hidden border border-border aspect-[4/3]">
                  <iframe
                    title="Landmark Capital office on Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.215887046889!2d72.8167!3d18.9157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU0JzU2LjUiTiA3MsKwNDknMDAuMSJF!5e0!3m2!1sen!2sin!4v1700000000000"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  type,
  value,
  onChange,
  required,
}: {
  label: string;
  type: "text" | "email" | "textarea";
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  const shared =
    "w-full bg-paper border border-border rounded-[10px] px-4 py-3 text-charcoal placeholder:text-slate/50 focus:border-crimson-500 focus:outline-none transition-colors";

  return (
    <label htmlFor={id} className="block">
      <span className="block text-xs uppercase tracking-[0.12em] text-slate mb-2">{label}</span>
      {type === "textarea" ? (
        <textarea
          id={id}
          rows={5}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className={shared + " resize-y min-h-[140px]"}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className={shared}
        />
      )}
    </label>
  );
}
