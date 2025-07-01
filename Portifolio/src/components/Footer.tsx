const Footer = () => {
  return (
    <footer>
      <section className="footer-section">
        <div className="toppart">
          <h3>
            <i className="bx bx-laptop"></i> Benitha Uwituze
          </h3>
        </div>
        <div className="bottompart">
          <div className="footerimage">
            <img src="/images/mylogo.png" alt="" />
          </div>

          <div className="pages">
            <h5>In this Site:</h5>
            <ul>
              <div className="sectionslist">
                <div>
                  <a href="#home">
                    <li>Home</li>
                  </a>
                  <a href="#about">
                    <li>About</li>
                  </a>
                  <a href="#services">
                    <li>Services</li>
                  </a>
                  <a href="#resumesection">
                    <li>Resume</li>
                  </a>
                </div>
                <div>
                  <a href="#projects">
                    <li>Projects</li>
                  </a>
                  <a href="#testimonials">
                    <li>References</li>
                  </a>
                  <a href="">
                    <li>Blog</li>
                  </a>
                  <a href="#contact">
                    <li>Contact Me</li>
                  </a>
                </div>
              </div>
            </ul>
          </div>

          <div className="Support">
            <h5>Contacts</h5>
            <ul>
              <li>Contact: 0790100718</li>
              <li>Email: benithatuze@gmail.com</li>
              <li>Location: Nayinzira, Kimironko, Kigali City, Rwanda</li>
              <li>Mentor: Claudine Ubayemfura, Facilitator at ALU</li>
            </ul>
          </div>

          <div className="learnmore">
            <h5>Services</h5>
            <ul>
              <li>
                <a href="">Salesforce Admin</a>
              </li>
              <li>
                <a href="">Graphic Design</a>
              </li>
              <li>
                <a href="">Web Design</a>
              </li>
              <li>
                <a href="">Front-End Development</a>
              </li>
              <li>
                <a href="">Back-End Development</a>
              </li>
              <li>
                <a href="">Author</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
