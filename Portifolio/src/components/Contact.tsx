import { FormEvent, useState, useEffect, useRef } from "react";

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
  const [_, setMousePosition] = useState({ x: 0, y: 0 });

  // Word Sphere State
  const containerRef = useRef<HTMLDivElement>(null);
  const [words] = useState([
    "React",
    "TypeScript",
    "JavaScript",
    "CSS",
    "HTML",
    "Node.js",
    "Design",
    "Creative",
    "Innovation",
    "Portfolio",
    "Frontend",
    "Backend",
    "API",
    "Database",
    "UI/UX",
    "Dashboards",
    "Responsive",
    "Animation",
    "Performance",
    "Testing",
    "Git",
    "ML Models",
  ]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
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

  return (
    <section
      className="relative min-h-screen bg-transparent pt-12 pb-20 px-4 md:px-8 lg:px-12 overflow-hidden"
      id="contact"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-2xl text-blue-500 lg:text-3xl font-bold mb-6">
            Contact Moi
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's connect and create
            something amazing together!
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - 3D Word Sphere */}
          <div className="flex items-center justify-center">
            <div
              ref={containerRef}
              className="word-sphere-container relative w-full max-w-lg aspect-square"
              style={{ perspective: "1000px" }}
            >
              <div className="word-sphere absolute inset-0">
                {words.map((word, index) => {
                  const phi = Math.acos(-1 + (2 * index) / words.length);
                  const theta = Math.sqrt(words.length * Math.PI) * phi;

                  const x = 150 * Math.cos(theta) * Math.sin(phi);
                  const y = 150 * Math.sin(theta) * Math.sin(phi);
                  const z = 150 * Math.cos(phi);

                  return (
                    <span
                      key={index}
                      className="word-sphere-item absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-orange-500 font-semibold whitespace-nowrap transition-all duration-300 hover:text-orange-500 hover:scale-125 cursor-default"
                      style={{
                        transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${z}px)`,
                        fontSize: `${14 + (z / 150) * 8}px`,
                        opacity: (z + 150) / 300,
                        zIndex: Math.round(z),
                      }}
                    >
                      {word}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Connect with Me
            </h3>

            <div className="space-y-4">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white/80 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="e.g.: Debolla Joe"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white text-sm placeholder-white/50 focus:outline-none"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white/80 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="e.g.: debolla.joe@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white text-sm placeholder-white/50 focus:outline-none"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-white/80 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="e.g.: Project Collaboration Inquiry"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white text-sm placeholder-white/50 focus:outline-none"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white/80 mb-1"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="e.g.: I'd like to discuss a potential project collaboration..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white text-sm placeholder-white/50 focus:outline-none resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div
                onClick={sendMail}
                className="w-full py-3 bg-blue-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl cursor-pointer text-center"
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
        
        @keyframes rotateSphere {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }
        
        .grid > div:first-child {
          animation: slideInFromLeft 0.8s ease-out forwards;
        }
        
        .grid > div:last-child {
          animation: slideInFromRight 0.8s ease-out forwards;
        }
        
        .word-sphere {
          transform-style: preserve-3d;
          animation: rotateSphere 30s linear infinite;
        }
        
        .word-sphere:hover {
          animation-play-state: paused;
        }
        
        .word-sphere-item {
          user-select: none;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  );
};

export default Contact;
