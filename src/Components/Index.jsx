import React, { useEffect } from "react";
import "../Styles/Index.css";
import "../Styles/Index-Responsive.css";
import { Link } from "react-router-dom";
import event1 from "./Images/Events/Codezinth.png";

const Index = () => {
  useEffect(() => {
    const accordion = document.querySelector('.faq-accordion-container');
    const items = accordion.querySelectorAll('li');
    const questions = accordion.querySelectorAll('.faq-question');

    function toggleFaqAccordion() {
      const thisItem = this.parentNode;

      items.forEach(item => {
        if (thisItem === item) {
          thisItem.classList.toggle('default-faq-open');
          return;
        }

        item.classList.remove('default-faq-open');
      });
    }

    questions.forEach(question => question.addEventListener('click', toggleFaqAccordion));

    // Clean up the event listeners when the component is unmounted
    return () => {
      questions.forEach(question => question.removeEventListener('click', toggleFaqAccordion));
    };
  }, []); // Empty dependency array ensures useEffect runs once after initial render


  return (
    <>
      {/* Front section start */}
      <div className="container">
        <div className="content">
          <h1>WELCOME TO AAROHAN</h1>
          <p>
            <b>D</b>efining <b>G</b>rowth and <b>I</b>nnovation
          </p>
          <div className="btn">
            <Link to="/register" className="btn1">
              JOIN NOW
            </Link>
            <Link to="/about" className="btn2">
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>

      {/* Front section end */}

      {/* About section start */}

      <div className="about-container">
        <div className="about-content">
          <h1>ABOUT US</h1>
          <p className="about-para">
            Step into the dynamic realm of Aarohan, the beating heart of
            innovation at Dronacharya Group of Institutes. Aarohan isn't just a
            coding club; it's a thriving community where passionate minds
            converge to explore the vast landscapes of programming excellence.
            Within these walls, technology and creativity intertwine, creating
            an atmosphere that resonates with the fervor of innovation.
            Committed to fostering a culture of creativity and problem-solving,
            Aarohan stands as a guiding light for aspiring coders and tech
            enthusiasts. It's more than a club; it's an intellectual haven where
            the shared commitment to innovation transforms ideas into reality.
            Aarohan's significance lies in its ability to serve as a nexus for
            diverse talents, offering a platform for collaboration and learning.
          </p>

          <p className="about-para">
            At the crossroads of intellect and ingenuity, Aarohan propels its
            members into the ever-evolving world of coding. It goes beyond the
            conventional coding club experience, providing a holistic journey of
            growth and exploration. Through hackathons and workshops, Aarohan
            becomes a playground for continuous improvement, a space where
            boundaries are pushed, and new horizons are discovered. Guided by a
            collective enthusiasm for pushing boundaries, Aarohan is not just a
            forum; it's a launchpad for innovation. Here, coding is not a mere
            skill; it's a transformative journey that empowers individuals with
            the practical skills needed to thrive in the fast-paced tech
            landscape.
          </p>

          <p className="about-para">
            In this vibrant ecosystem, every line of code represents a step
            towards unraveling the infinite possibilities within the digital
            realm. Aarohan is more than an organization; it's a thriving
            community where inspiration fuels collaboration and growth. It's an
            invitation to join a movement where the language of code transcends
            into the language of possibilities. As we code the future together,
            Aarohan invites you to be part of a collective commitment to shaping
            a future where technology becomes a powerful force for positive
            change.
          </p>
        </div>
      </div>

      {/* About section end */}

      {/* Event section start */}

      <div className="event-container">
        <div className="events">
          <h1> OUR EVENTS</h1>
          <div className="Events">
            <figure className="figuree">
              <figure>
                <img src={event1} alt="Codezenith" />
              </figure>
              <figcaption className="figcaptionn">
                CodeZenith : A coding Challenge by <b>AAROHAN</b>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      {/*Events section end*/}

      {/*Faqs section start*/}

      <div class="faq-accordion-container">
        <ul>
          <h3>Frequently Asked Questions</h3>
          <li class="default-faq-open">
            <div class="faq-question">
              <h2>What is Aarohan and what does it offer to its members?</h2>
            </div>
            <div class="faq-answer">
              <p>
              Aarohan is a dynamic coding club at Dronacharya Group of Institutes, providing a vibrant space for passionate individuals to explore the realms of programming excellence. Members can expect an environment that fosters creativity, collaboration, and hands-on learning, transcending traditional coding experiences.
              </p>
            </div>
          </li>
          <li>
            <div class="faq-question">
              <h2>How can I join Aarohan, and is there any specific skill level required?</h2>
              <span class="fa fa-caret-down"></span>
            </div>
            <div class="faq-answer">
              <p>
              Joining Aarohan is open to all enthusiasts! Whether you're a beginner or an experienced coder, our club welcomes individuals at all skill levels. The emphasis is on collaboration and continuous improvement, ensuring everyone finds value and support in their coding journey.
              </p>
            </div>
          </li>
          <li>
            <div class="faq-question">
              <h2>What activities and events does Aarohan organize throughout the year?</h2>
              <span class="fa fa-caret-down"></span>
            </div>
            <div class="faq-answer">
              <p>
              Aarohan hosts a variety of engaging activities and events, ranging from exhilarating hackathons to insightful workshops. These events provide members with opportunities to challenge themselves, collaborate with peers, and stay at the forefront of the ever-evolving world of coding.
              </p>
            </div>
          </li>
          <li>
            <div class="faq-question">
              <h2>How does Aarohan support members' professional growth in the tech industry?</h2>
              <span class="fa fa-caret-down"></span>
            </div>
            <div class="faq-answer">
              <p>
              Aarohan serves as a launchpad for innovation, offering a platform where members not only learn to code but also develop practical skills essential for the tech industry. The club provides insights, mentorship, and networking opportunities to support members in their professional growth and development.
              </p>
            </div>
          </li>
          <li>
            <div class="faq-question">
              <h2>What makes Aarohan different from other coding clubs or forums?</h2>
              <span class="fa fa-caret-down"></span>
            </div>
            <div class="faq-answer">
              <p>
              Aarohan stands out as a vibrant ecosystem driven by a collective enthusiasm for pushing boundaries. It goes beyond being a traditional coding club; it's a community where the language of code transcends into the language of possibilities. Members experience a transformative journey, finding inspiration, collaboration, and a shared commitment to shaping the future through technology.
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/*Faqs section end*/}
    </>
  );
};

export default Index;
