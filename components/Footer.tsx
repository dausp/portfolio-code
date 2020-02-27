import Link from 'next/link';
import LaunchIcon from '@material-ui/icons/Launch';

const Footer = () => (
	<div className="links">
		<p>This site was built with Next.js, React and other technologies -
			<Link href="https://github.com/dausp/portfolio-code">
				<a target="_blank">take a look at the code on github <LaunchIcon /></a>
			</Link>.
		</p>
	</div>
);

export default Footer;