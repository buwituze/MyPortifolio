const Testimonials = () => {
  const testimonials = [
    {
      image: "/images/anne.jpeg",
      name: "Anne Marie Twagirayezu",
      position: "Fellow ALU Student",
      company: "African Leadership University (ALU)",
      text: "With a meticulous eye for detail and a strong passion for quality, she bridges the gap between vision and execution, making her an exceptional team player.",
    },
    // You can uncomment and add more testimonials when needed
    /*
      {
        image: "/images/Admin lead.png",
        name: "Uwicyubahiro Honorine",
        position: "Administration Lead",
        company: "African Leadership University (ALU)",
        text: "A dynamic problem-solver who consistently delivers innovative solutions with precision and skill. Always brings clarity and efficiency to complex challenges."
      }
      */
  ];

  return (
    <section className="references" id="testimonials">
      <h3>Some Nice Words</h3>

      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div
            className="individualtestimonial"
            data-aos="fade-up"
            data-aos-duration="1000"
            key={index}
          >
            <div className="person">
              <div className="testimonialimg">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <div className="personinfo">
                <h4>{testimonial.name}</h4> <br />
                <h5>
                  {testimonial.position} <br />
                  <span>{testimonial.company}</span>
                </h5>
              </div>
            </div>
            <div className="testimonialtext">
              <div className="upperquote">
                <i className="bx bxs-quote-single-left"></i>
              </div>
              <p>{testimonial.text}</p>
              <div className="lowerquote">
                <i className="bx bxs-quote-single-right"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
