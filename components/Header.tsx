import Link from 'next/link';
import LaunchIcon from '@material-ui/icons/Launch';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Header = () => (
	<div className="links">
		<Link href="/">
			<a>About</a>
		</Link>
		<Link href="/work">
			<a>Work</a>
		</Link>
		<Link href="/resume">
			<a aria-label="resume">Resum&eacute;</a>
		</Link>
		<Link href="/contact">
			<a>Contact <LaunchIcon /></a>
		</Link>
		<a href="https://www.linkedin.com/in/patrick-daus-53491322/" target="_blank">LinkedIn <LinkedInIcon /></a>
		<a href="https://github.com/dausp" target="_blank">Github <GitHubIcon /></a>
		<style jsx>
		{`
			.links a {
				margin-right: 15px;
				text-decoration: none;
				color: blue;
			}

			.links a:hover {
				opacity: 0.6;
			}

			// #008D91
			// #004F52
			// #00CAD1
			// #00D6DE
			// #00B3B8
		`}
		</style>
	</div>
);

export default Header;