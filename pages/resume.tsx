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

export function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={"resume " + `${classes.root}`}>
      <div className="head">
        <Grid container justify="space-between" spacing={3}>
          <Grid item xs={3}>
            <h2>Patrick Daus</h2>
          </Grid>
          <Grid item xs={3}>
            <p>Madison, WI area</p>
            <p>e: daus.pat@gmail.com</p>
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
        <FullWidthGrid />
			</article>

		</Layout>
	);
}

export default Resume;