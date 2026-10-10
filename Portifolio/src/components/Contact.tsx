import { FormEvent, useState } from "react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const EMAIL = "benithatuze15@gmail.com";

const channels = [
  {
    label: "LinkedIn",
    value: "benitha-uwituze",
    href: "https://www.linkedin.com/in/benitha-uwituze/",
  },
  { label: "GitHub", value: "buwituze", href: "https://github.com/buwituze" },
  {
    label: "Medium",
    value: "@benithatuze15",
    href: "https://medium.com/@benithatuze15",
  },
];

const fields = [
  { name: "name", label: "Name", type: "text", placeholder: "Your name" },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "you@company.com",
  },
  {
    name: "subject",
    label: "Subject",
    type: "text",
    placeholder: "What's it about?",
  },
] as const;

const inputClass =
  "w-full border-0 border-b border-line bg-transparent px-0 py-3 text-paper placeholder-muted/60 transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-0";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const sendMail = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // @ts-ignore - EmailJS is loaded via script tag
      await emailjs.send("service_id", "template_id", {
        from_name: formData.name,
        to_name: "Benitha",
        from_email: formData.email,
        to_email: EMAIL,
        subject: formData.subject,
        message: formData.message,
      });

      setSubmitStatus({
        success: true,
        message: "Thanks! Your message is on its way.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus({
        success: false,
        message: `That didn't send. You can email me directly at ${EMAIL}.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl border-t border-line px-5 py-24 md:px-8 md:py-32"
    >
      <SectionHeading
        label="Contact"
        title={
          <>
            Let's <span className="italic">talk.</span>
          </>
        }
      />

      <div className="grid gap-16 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-5 md:col-start-4">
          <p className="text-muted">Email is the quickest way to reach me.</p>
          <div className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <a
              href={`mailto:${EMAIL}`}
              className="link-u font-display text-3xl text-paper md:text-4xl"
            >
              {EMAIL}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="font-mono text-xs uppercase tracking-[0.2em] text-muted transition-colors duration-200 hover:text-paper"
              aria-live="polite"
            >
              {copied ? "Copied ✓" : "Copy"}
            </button>
          </div>

          <dl className="mt-12">
            {channels.map((channel) => (
              <div
                key={channel.label}
                className="flex justify-between gap-4 border-t border-line py-3 text-sm"
              >
                <dt className="text-muted">{channel.label}</dt>
                <dd>
                  <a
                    href={channel.href}
                    target={
                      channel.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel="noopener noreferrer"
                    className="link-u text-paper"
                  >
                    {channel.value}
                  </a>
                </dd>
              </div>
            ))}
            <div className="flex justify-between gap-4 border-t border-line py-3 text-sm">
              <dt className="text-muted">Location</dt>
              <dd className="text-paper">Kigali, Rwanda (UTC+2)</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={100} className="md:col-span-4">
          <form onSubmit={sendMail} className="space-y-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Or leave a message
            </p>
            {fields.map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className="block text-sm text-muted"
                >
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  value={formData[field.name]}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            ))}
            <div>
              <label htmlFor="message" className="block text-sm text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="A few lines about your project or role"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-md bg-paper px-5 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:bg-accent disabled:opacity-60"
            >
              {isSubmitting ? "Sending…" : "Send message"}
            </button>

            {submitStatus && (
              <p
                role="status"
                className={`text-sm ${submitStatus.success ? "text-paper" : "text-muted"}`}
              >
                {submitStatus.message}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
