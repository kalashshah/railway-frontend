import { Box, Divider, Spinner, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../services/AxiosInstance';
import React from 'react';
import Header from './Header';

const Ticket = () => {
	const navigate = useNavigate();
	const [data, setData] = React.useState(null);
	React.useEffect(() => {
		const getData = async () => {
			try {
				const dt = await axiosInstance.get('/api/booking/passenger/');
				setData(dt.data);
			} catch (error) {
				navigate('/login', { replace: true });
			}
		};
		getData();
	}, [navigate]);

	if (!data) {
		return (
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				h="100vh"
			>
				<Spinner
					thickness="4px"
					speed="0.65s"
					emptyColor="gray.200"
					color="blue.500"
					size="xl"
				/>
			</Box>
		);
	}

	return (
		<Box bg="rgba(255, 238, 204, 1)" h="100%" minH="100vh" pt="1%">
			<Header />
			<Text
				fontSize="2rem"
				fontWeight="bold"
				color="black"
				py="4%"
				textAlign="center"
			>
				{`Ticket Details of user ${data.personal_details.first_name} ${data.personal_details.last_name}`}
			</Text>
			{data.ticket_details.length > 0 ? (
				data.ticket_details.map((ticket, index) => (
					<Box
						key={index}
						display="flex"
						flexDirection="column"
						pl="30%"
						pb="2%"
					>
						<Text fontWeight="bold" fontSize="2rem">{`Ticket ${
							index + 1
						}`}</Text>
						<Text py="0.2%">{`PNR: ${ticket.pnr}`}</Text>
						<Text py="0.2%">{`Book Date: ${new Date(
							ticket.book_date
						).toISOString()}`}</Text>
						<Text py="0.2%">{`Date of Journey: ${new Date(
							ticket.date_of_journey
						).toISOString()}`}</Text>
						<Text py="0.2%">{`Class: ${ticket.train_class}`}</Text>
						<Text py="0.2%">{`Ticket No.: ${ticket.ticket_no}`}</Text>
						<Text py="0.2%">{`Seat No.: ${ticket.seat_no}`}</Text>
						<Text py="0.2%">{`Train No.: ${ticket.train}`}</Text>
						<Text py="0.2%">{`Route No.: ${ticket.route}`}</Text>
						<Divider orientation="horizontal" color="black" />
					</Box>
				))
			) : (
				<Text py="1%" fontSize="1.5rem" color="black" textAlign="center">
					No Tickets Booked Yet
				</Text>
			)}
			{/* <Flex mt="3%" flexDirection="column" alignItems="center">
				<Button my="3%" size="lg" bg="rgba(254, 189, 51, 1)">
					Get My Ticket
				</Button>
			</Flex> */}
		</Box>
	);
};

export default Ticket;
