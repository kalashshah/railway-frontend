import { Flex, Link } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

const navItems = ['Home', 'Login', 'Register', 'My Tickets'];
const links = ['/', '/login', '/signup', '/ticket'];

const Header = () => {
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
		</Flex>
	);
};

export default Header;
