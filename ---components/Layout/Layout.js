import Navbar from '../Navbar/Navbar';
const Layout = ({ children }) => {
	return (
		<div className='grid-container'>
			<Navbar />
			{children}
		</div>
	);
};
export default Layout;
