import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "../lib/whatsapp";
import { serviceNodes } from "../data/content";

const schema = z.object({
  name: z.string().min(2, "Enter your name"),
  phone: z.string().min(10, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email").optional().or(z.literal("")),
  business: z.string().optional(),
  service: z.string().min(1, "Choose a service"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export default function WhatsAppForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (values: FormValues) => {
    const link = buildWhatsAppLink(values);
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "w-full rounded-lg border border-[color:var(--color-line)] bg-[color:var(--color-surface-2)] px-4 py-2.5 text-sm text-[color:var(--color-text)] placeholder:text-[color:var(--color-muted-2)] outline-none focus:border-[color:var(--color-signal)]";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-[color:var(--color-muted)]">Name *</label>
          <input className={inputClass} placeholder="Your name" {...register("name")} />
          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-[color:var(--color-muted)]">Phone *</label>
          <input className={inputClass} placeholder="98765 43210" {...register("phone")} />
          {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-[color:var(--color-muted)]">Email</label>
          <input className={inputClass} placeholder="you@business.com" {...register("email")} />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-[color:var(--color-muted)]">Business name</label>
          <input className={inputClass} placeholder="Optional" {...register("business")} />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium text-[color:var(--color-muted)]">Service needed *</label>
        <select className={inputClass} {...register("service")} defaultValue="">
          <option value="" disabled>
            Choose a service
          </option>
          {serviceNodes.map((s) => (
            <option key={s.id} value={s.label}>
              {s.label}
            </option>
          ))}
        </select>
        {errors.service && <p className="mt-1 text-xs text-red-400">{errors.service.message}</p>}
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium text-[color:var(--color-muted)]">Message</label>
        <textarea rows={3} className={inputClass} placeholder="Tell us briefly what you need" {...register("message")} />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--color-whatsapp)] px-6 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02] disabled:opacity-60"
      >
        <MessageCircle size={18} /> Send enquiry on WhatsApp
      </button>
      <p className="text-center text-xs text-[color:var(--color-muted-2)]">
        This opens WhatsApp with your details pre-filled — nothing is stored on our server.
      </p>
    </form>
  );
}
