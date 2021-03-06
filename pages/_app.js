import '../styles/globals.scss';
import '@fontsource/jockey-one';
import { Layout } from '../components';
function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
