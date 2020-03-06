import React from "react"

const Experience = () => (
  <section>
    <h4>Experience</h4>

    <h5>Unearthed Software LLC - DeForest, WI</h5>
    <h6>
      <span>
        Founder / Software Developer {` `}
        <span className="pipe">|</span> {` `}
        <span className="dates">Aug 2018 - Present</span>
      </span>
    </h6>
    <ul>
      <li>Responsible for the research, concept and planning of software, and communicating the design needs of the software with a designer.</li>
      <li>Responsible for using a Test Driven Development approach to develop interactive software with modern software technologies.</li>
    </ul>

    <h5>Great Lakes Higher Education Corp. - Madison, WI <em>(acquired by Nelnet Diversified Solutions in March 2018)</em>
    </h5>
    <h6>
      <span>
        Sr Front End Developer {` `}
        <span className="pipe">|</span> {` `}
        <span className="dates">Jun 2017 - Aug 2018</span>
      </span>
      <span>
        Programmer / Analyst {` `}
        <span className="pipe">|</span> {` `}
        <span className="dates">Aug 2015 - Jun 2017</span>
      </span>
    </h6>
    <ul>
      <li>Responsible for leading a team of senior and junior developers in the development of a Web UI Framework using JavaScript, HTML5, CSS3, Less, flexbox and other web technologies.</li>
      <li>Responsible for collaborating with designers on the requirements of the Web UI Framework to meet the needs of the stakeholders.</li>
      <li>Responsible for interviewing and mentoring junior developers. Also led a series of internal development meetups to assist in the knowledge sharing of web development standards and best practices.</li>
    </ul>
    <h6>
      <span>
        Programmer {` `}
        <span className="pipe">|</span> {` `}
        <span className="dates">Mar 2014 - Aug 2015</span>
      </span>
    </h6>
    <ul>
      <li>Responsible for making sure that web products met Section 508 ADA and WCAG 2.0 Web Accessibility requirements.</li>
      <li>Responsible for developing web products using semantic markup, CSS3, and JavaScript following Responsive Web Design standards and best practices.</li>
    </ul>
    <h6>
      <span>
        Web Designer {` `}
        <span className="pipe">|</span> {` `}
        <span className="dates">Dec 2011 - Mar 2014</span>
      </span>
    </h6>
    <ul>
      <li>Responsible for meeting with clients in other departments about their website requirements.</li>
      <li>Responsible for the creation of wireframes and mockups, and the development of the web products using HTML, CSS and jQuery.</li>
    </ul>

    <h5>Chumby Industries - San Diego, CA</h5>
    <h6>
      <span>
        Flash Development Intern {` `}
        <span className="pipe">|</span> {` `}
        <span className="dates">Jun 2011 - Aug 2011</span>
      </span>
      <span>
        Application Development Intern {` `}
        <span className="pipe">|</span> {` `}
        <span className="dates">Sep 2010 - Dec 2010</span>
      </span>
    </h6>
    <ul>
      <li>Responsible for the design and development of software using ActionScript 2 and 3 in the Adobe Flash platform.</li>
    </ul>
    <style jsx>{`
      .pipe {
        font-weight: normal;
      }
      .dates {
        font-weight: normal;
        font-style: italic;
      }
    `}</style>
  </section>
)

export default Experience