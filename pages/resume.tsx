import Layout from '../components/Layout';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export function SkillsRight() {
  const classes = useStyles();

  return (
    <div className={"resume " + `${classes.root}`}>
      <div className="head">
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <h2>Patrick Daus</h2>
            <h3>Senior Software Developer | Accessibility Consultant</h3>
          </Grid>
          <Grid item xs={3}>
            <p>Madison, WI area</p>
            <p>e: daus.pat@gmail.com</p>
            <p>w: dausp.github.com</p>
          </Grid>
        </Grid>
      </div>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={9}>
          <h3>Experience</h3>

          <h4>Unearthed Software LLC - DeForest, WI</h4>
          <h5>Founder / Lead Software Developer | <em>Aug 2018 - Present</em></h5>
          <ul>
            <li>Responsible for the research, concept and planning of software, and communicating the design needs of the software with a designer.</li>
            <li>Responsible for using a Test Driven Development approach to develop interactive software with modern software technologies.</li>
          </ul>

          <h4>Great Lakes Higher Education Corp. - Madison, WI</h4>
          <p>(acquired by Nelnet Diversified Solutions in March 2018)</p>
          <h5>Sr Front End Developer | <em>Jun 2017 - Aug 2018</em></h5>
          <h5>Programmer / Analyst | <em>Aug 2015 - Jun 2017</em></h5>
          <ul>
            <li>Responsible for leading a team of senior and junior developers in the development of a Web UI Framework using JavaScript, HTML5, CSS3, Less, flexbox and other web technologies.</li>
            <li>Responsible for collaborating with designers on the requirements of the Web UI Framework to meet the needs of the stakeholders.</li>
            <li>Responsible for interviewing and mentoring junior developers. Also led a series of internal development meetups to assist in the knowledge sharing of web development standards and best practices.</li>
          </ul>

          <h5>Programmer | <em>Mar 2014 - Aug 2015</em></h5>
          <ul>
            <li>Responsible for making sure that web products met Section 508 ADA and WCAG 2.0 Web Accessibility requirements.</li>
            <li>Responsible for developing web products using semantic markup, CSS3, and JavaScript following Responsive Web Design standards and best practices.</li>
          </ul>

          <h5>Web Designer | <em>Dec 2011 - Mar 2014</em></h5>
          <ul>
            <li>Responsible for meeting with clients in other departments about their website requirements.</li>
            <li>Responsible for the creation of wireframes and mockups, and the development of the web products using HTML, CSS and jQuery.</li>
          </ul>

          <h4>Chumby Industries - San Diego, CA</h4>
          <h5>Flash Development Intern | <em>Jun 2011 - Aug 2011</em></h5>
          <h5>Application Development Intern | <em>Sep 2010 - Dec 2010</em></h5>
          <ul>
            <li>Responsible for the design and development of software using ActionScript 2 and 3 in the Adobe Flash platform.</li>
          </ul>


        </Grid>
        <Grid item xs={12} sm={3}>
          <h3>Education</h3>
          <h4>UW &mdash; Stevens Point</h4>
          <h5>B.S. in Web and Digital Media Development</h5>
          <p><em>May 2011</em></p>

          <h3>Skills</h3>
          <ul>
            <li>HTML5 / CSS3</li>
            <li>Sass/Less, CSS-in-JS</li>
            <li>JavaScript (ES6), React</li>
            <li>Node.js, Grunt, Jasmine, AJAX</li>
            <li>Git, Git Bash, SVN</li>
            <li>Web Accessibility, WAI-ARIA</li>
            <li>Responsive Web Design</li>
            <li>Test Driven Development</li>
            <li>Agile Software Development</li>
            <li>Cross-browser compatibility</li>
            <li>Python / SQL</li>
            <li>Java / PHP</li>
            <li>Wordpress</li>
          </ul>

          <h3>Awards</h3>
          <h4>BSA</h4>
          <h5>Eagle Scout</h5>
          <p><em>Jun 2011</em></p>
        </Grid>
      </Grid>
      <style jsx>
      {`
        .resume {
          background-color: #F8F8F8;
          width: 100%;
          max-width: 50rem;
          margin: 0 auto;
        }
        .head {
          background-color: #EEEEEE;
        }
        ul {
          padding: 0;
        }
        ul li {
          list-style-type: none;
          margin-bottom: 1rem;
        }
      `}
      </style>
    </div>
  );
};

export function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={"resume " + `${classes.root}`}>
      <div className="head">
        <Grid container justify="space-between" spacing={3}>
          <Grid item xs={9}>
            <h2>Patrick Daus</h2>
            <h3>Senior Software Developer | Accessibility Consultant</h3>
          </Grid>
          <Grid item xs={3}>
            <p>Madison, WI area</p>
            <p>e: daus.pat@gmail.com</p>
            <p>w: dausp.github.com</p>
          </Grid>
        </Grid>
      </div>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <h3>Personal Profile</h3>
        </Grid>
        <Grid item xs={12} sm={9}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor metus, interdum at scelerisque in, porta at lacus. Maecenas dapibus luctus cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
        </Grid>
        <Grid item xs={12} sm={3}>
          <h3>Work Experience</h3>
        </Grid>
        <Grid item xs={12} sm={9}>
          <section>
            <header>
              <h4>Job Title at Company</h4>
              <p><em>April 2011 - Present</em></p>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
          </section>
          <section>
            <header>
              <h4>Job Title at Company</h4>
              <p><em>April 2011 - Present</em></p>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
          </section>
          <section>
            <header>
              <h4>Job Title at Company</h4>
              <p><em>April 2011 - Present</em></p>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
          </section>
        </Grid>
        <Grid item xs={12} sm={3}>
          <h3>Key Skills</h3>
        </Grid>
        <Grid item xs={12} sm={3}>
          <ul>
            <li>A Key Skill</li>
            <li>A Key Skill</li>
            <li>A Key Skill</li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={3}>
          <ul>
            <li>A Key Skill</li>
            <li>A Key Skill</li>
            <li>A Key Skill</li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={3}>
          <ul>
            <li>A Key Skill</li>
            <li>A Key Skill</li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={3}>
          <h3>Work Experience</h3>
        </Grid>
        <Grid item xs={12} sm={9}>
          <section>
            <header>
              <h4>College / University</h4>
              <p><em>April 2011 - Present</em></p>
            </header>
            <p>Qualification</p>
          </section>
        </Grid>
      </Grid>
      <style jsx>
      {`
        .resume {
          background-color: #F8F8F8;
          width: 100%;
          max-width: 50rem;
          margin: 0 auto;
        }
        .head {
          background-color: #EEEEEE;
        }
      `}
      </style>
    </div>
  );
}


const Resume = () => {
	return (
		<Layout>
			<article>
				<h1>My Resume</h1>
        <p>Check out my Resume.</p>
        <SkillsRight />
			</article>

		</Layout>
	);
}

export default Resume;