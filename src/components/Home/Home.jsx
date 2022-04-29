import { Box } from '@chakra-ui/react';

import Header from '../Header';
import BookTicketForm from './BookTicketForm';

const Home = () => {
	return (
		<Box h="100vh" w="100%" bgColor="#FFBE2E">
			<Header />
			<BookTicketForm />
		</Box>
	);
};

export default Home;
