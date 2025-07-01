import { FormEvent, useState } from "react";

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendMail = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Using EmailJS as in your original code
      // @ts-ignore - EmailJS is loaded via script tag
      await emailjs.send("service_id", "template_id", {
        from_name: formData.name,
        to_name: "Benitha",
        from_email: formData.email,
        to_email: "benithatuze@gmail.com",
        subject: formData.subject,
        message: formData.message,
      });

      setSubmitStatus({
        success: true,
        message: "Message sent successfully!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus({
        success: false,
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contactme" id="contact">
      <section className="contact">
        <h3>Contact Me</h3>
        <div className="me">
          <div className="contacttexts">
            <h5>Let's Connect and Create!</h5>
            <p>
              If you have a project you'd like to discuss or any other message,
              please leave a note, and I'll get back to you within 24 hours.
              <br /> <br />
              P.S. Our Coding Corner appreciates professionalism and kindness in
              your messages!
              <br /> <br />
            </p>
          </div>

          <div className="form">
            <form name="contact" method="POST" onSubmit={sendMail}>
              <h4>Connect with Me</h4>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your Name"
                required
                value={formData.name}
                onChange={handleChange}
              />{" "}
              <br />
              <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
                required
                value={formData.email}
                onChange={handleChange}
              />{" "}
              <br />
              <br />
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter Subject"
                required
                value={formData.subject}
                onChange={handleChange}
              />{" "}
              <br />
              <br />
              <textarea
                name="message"
                id="message"
                placeholder="Place your Message here."
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>{" "}
              <br />
              <br />
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
              {submitStatus && (
                <p
                  className={
                    submitStatus.success ? "success-message" : "error-message"
                  }
                >
                  {submitStatus.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
