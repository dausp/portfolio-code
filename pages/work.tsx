import Layout from '../components/Layout';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
		flexGrow: 1
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
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>ServUI</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>Ascendium Philanthropy</Paper>
        </Grid>
				<Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>mygreatlakes</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>about</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>FASTChoice</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

const Work = () => {
	return (
		<Layout>
			<p>Pat Daus's Work Portfolio</p>
			<FullWidthGrid/>
		</Layout>
	);
}

export default Work;