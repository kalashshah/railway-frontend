import { Flex, Link, Button } from '@chakra-ui/react';
import { Link as ReactLink, useNavigate } from 'react-router-dom';
import React from 'react';

const Header = () => {
	const navigate = useNavigate();
	const [navItems, setNavItems] = React.useState([
		'Home',
		'Login',
		'Register',
		'My Tickets',
	]);
	const [links, setLinks] = React.useState([
		'/',
		'/login',
		'/signup',
		'/ticket',
	]);
	const token = localStorage.getItem('token');
	
	React.useEffect(() => {
		if (token) {
			setNavItems(['Home', 'My Tickets']);
			setLinks(['/', '/ticket']);
		}
	}, [token]);

	return (
		<Flex
			w="100%"
			h="10%"
			fontFamily="'Poppins', sans-serif"
			justify="flex-end"
			align="center"
		>
			{navItems.map((label, index) => (
				<Link
					key={index}
					as={ReactLink}
					to={links[index]}
					mx="2.5%"
					fontWeight="500"
					fontSize="20px"
					_hover={{
						textDecor: 'underline',
						textDecorationColor: '#FFEECC',
						textUnderlineOffset: '4px',
					}}
				>
					{label}
				</Link>
			))}
			{token && (
				<Button
					mx="2.5%"
					onClick={() => {
						localStorage.removeItem('token');
						navigate('/', { replace: true });
					}}
				>
					Logout
				</Button>
			)}
		</Flex>
	);
};

export default Header;
