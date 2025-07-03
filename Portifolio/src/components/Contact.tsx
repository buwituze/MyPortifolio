import { FormEvent, useState, useEffect } from "react";

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "benithatuze@gmail.com",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: "📱",
      label: "Response Time",
      value: "Within 24 hours",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "🌍",
      label: "Location",
      value: "Kigali, Rwanda",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "💼",
      label: "Status",
      value: "Available for projects",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 md:px-8 lg:px-12 overflow-hidden"
      id="contact"
    >
      {/* Interactive cursor follower */}
      <div
        className="fixed w-4 h-4 bg-orange-500/30 rounded-full pointer-events-none z-50 transition-all duration-200 mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center gap-2 text-orange-500 text-lg mb-4">
            <span className="text-2xl">✉️</span>
            <span>Get In Touch</span>
          </div> */}
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6">
            <span className="text-3xl md:text-4xl font-bold bg-blue-500 bg-clip-text text-transparent mb-4">
              Contact Me
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's connect and create
            something amazing together!
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-700/50 p-8 hover:border-orange-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/10">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent mb-6">
                Let's Connect and Create!
              </h3>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                If you have a project you'd like to discuss or any other
                message, please leave a note, and I'll get back to you within 24
                hours.
              </p>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-600/30">
                <p className="text-orange-400 font-medium mb-2">💡 Pro Tip:</p>
                <p className="text-white/70 text-sm">
                  Our Coding Corner appreciates professionalism and kindness in
                  your messages!
                </p>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-xl border border-slate-700/50 p-6 hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/10"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl`}
                  ></div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-700/50 p-8 hover:border-orange-500/50 transition-all duration-500">
              <h4 className="text-lg font-semibold text-white mb-4">
                Find me on social media
              </h4>
              <div className="flex gap-4">
                {[
                  {
                    icon: "🔗",
                    label: "LinkedIn",
                    color: "from-blue-600 to-blue-700",
                  },
                  {
                    icon: "🐱",
                    label: "GitHub",
                    color: "from-gray-600 to-gray-700",
                  },
                  {
                    icon: "🐦",
                    label: "Twitter",
                    color: "from-sky-500 to-sky-600",
                  },
                ].map((social, index) => (
                  <div
                    key={index}
                    className="group w-12 h-12 bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-full flex items-center justify-center border border-slate-600/50 hover:border-orange-500/50 transition-all duration-300 cursor-pointer hover:scale-110"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-700/50 p-8 hover:border-orange-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/10">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Connect with Me
            </h3>

            <div className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-white/50 focus:border-orange-500/50 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-xl pointer-events-none transition-opacity duration-300 ${
                    focusedField === "name" ? "opacity-100" : "opacity-0"
                  }`}
                ></div>
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-white/50 focus:border-orange-500/50 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-xl pointer-events-none transition-opacity duration-300 ${
                    focusedField === "email" ? "opacity-100" : "opacity-0"
                  }`}
                ></div>
              </div>

              {/* Subject Field */}
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter Subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-white/50 focus:border-orange-500/50 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-xl pointer-events-none transition-opacity duration-300 ${
                    focusedField === "subject" ? "opacity-100" : "opacity-0"
                  }`}
                ></div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Place your Message here."
                  required
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-white/50 focus:border-orange-500/50 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 resize-none"
                ></textarea>
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-xl pointer-events-none transition-opacity duration-300 ${
                    focusedField === "message" ? "opacity-100" : "opacity-0"
                  }`}
                ></div>
              </div>

              {/* Submit Button */}
              <div
                onClick={sendMail}
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-blue-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg hover:shadow-xl cursor-pointer text-center"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    Send Message
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* Status Message */}
              {submitStatus && (
                <div
                  className={`p-4 rounded-xl text-center font-medium transition-all duration-300 ${
                    submitStatus.success
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "bg-red-500/20 text-red-400 border border-red-500/30"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 text-white/60 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span>Professional & Kind</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Quick Response</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .grid > div:first-child {
          animation: slideInFromLeft 0.8s ease-out forwards;
        }
        
        .grid > div:last-child {
          animation: slideInFromRight 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Contact;
