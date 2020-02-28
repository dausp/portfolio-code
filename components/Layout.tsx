import Header from './Header';
import Footer from './Footer';

const greencolor1 = "#008D91"
const greencolor2 = "#004F52"
const greencolor3 = "#00CAD1"
const greencolor4 = "#00D6DE"
const greencolor5 = "#00B3B8"
const darkgrey = '#161616'

const Layout = (props: any) => (
	<main>
		<Header />
		{props.children}
		<Footer />
		<style jsx>
		{`


			// #008D91
			// #004F52
			// #00CAD1
			// #00D6DE
			// #00B3B8
		`}
		</style>
		<style jsx global>{`
			html {
				box-sizing: border-box;
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
			}
			*, *::before, *::after {
				box-sizing: inherit;
			}
			strong, b {
				font-weight: 700;
			}
			body {
				color: rgba(0, 0, 0, 0.87);
				margin: 0;
				font-size: 0.875rem;
				font-family: "Roboto", "Helvetica", "Arial", sans-serif;
				font-weight: 400;
				line-height: 1.43;
				letter-spacing: 0.01071em;
				background-color: ${darkgrey};
			}
			@media print {
				body {
					background-color: #fff;
				}
			}
			body::backdrop {
				background-color: ${darkgrey};
			}
			main {
				width: 100%;
				margin: 0 auto;
				padding: 0 1rem;
				max-width: 64rem;
			}
    `}</style>
	</main>
);

export default Layout;