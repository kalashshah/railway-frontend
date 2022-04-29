/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../services/AxiosInstance';
import {
	Box,
	FormControl,
	Input,
	Flex,
	Heading,
	Select,
	Button,
} from '@chakra-ui/react';
import homeBg from '../../assets/images/home-bg.png';

const BookTicketForm = () => {
	let navigate = useNavigate();
	const [fetchedRoutes, setFetchedRoutes] = useState([]);
	const [selectedRouteId, setSelectedRouteId] = useState('');
	const [fetchedTrains, setFetchedTrains] = useState([]);
	const [filteredTrains, setFilteredTrains] = useState(null);
	const [selectedTrainId, setSelectedTrainId] = useState('');
	const dateRef = useRef();
	const classRef = useRef();
	useEffect(() => {
		axiosInstance.get('api/train/route/').then(({ data }) => {
			setFetchedRoutes(
				data.map((route) => ({
					source: route.ostation,
					destination: route.dstation,
					id: route.id,
				}))
			);
		});
		axiosInstance.get('/api/train/trains/').then((res) => {
			setFetchedTrains(res.data);
		});
	}, []);
	useEffect(() => {
		if (selectedRouteId) setFilteredTrains(null);
		setFilteredTrains(() =>
			fetchedTrains.filter((train) => {
				return train.rid === +selectedRouteId;
			})
		);
	}, [selectedRouteId]);
	const handleRouteSelection = (e) => {
		setSelectedRouteId(e.target.value);
	};
	const bookingHandler = () => {
		const token = localStorage.getItem('token');
		if (!token) {
			return navigate('/login', { replace: true });
		}
		const trainDate = dateRef.current.value;
		let trainClass = classRef.current.value;
		if (trainClass === 'first-ac') {
			trainClass = '1 AC';
		} else if (trainClass === 'second-ac') {
			trainClass = '2 AC';
		} else {
			trainClass = '3 AC';
		}
		axiosInstance
			.post('/api/booking/book/', {
				train_class: trainClass,
				date_of_journey: trainDate,
				train: +selectedTrainId,
				route: +selectedRouteId,
				account: 2,
			})
			.then(() => {
				console.log('ho gaya');
				navigate("/ticket");
			});
	};
	return (
		<Box
			bg="url() no-repeat center center/cover"
			bgImage={homeBg}
			w="100%"
			h="88%"
			mt="0.8%"
		>
			<Flex direction="column" ml="4%">
				<Heading my={('2%', '4%')} ml="2%" fontSize="3rem">
					Book Ticket
				</Heading>
				<FormControl>
					<Flex direction="column">
						<Select
							placeholder="Route"
							variant="filled"
							boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
							borderRadius="15px"
							color="grey"
							w="20%"
							fontSize="1.4rem"
							onChange={handleRouteSelection}
						>
							{fetchedRoutes.map((route) => {
								const routeName =
									route.source + '-' + route.destination;
								return (
									<option key={routeName} value={route.id}>
										{routeName}
									</option>
								);
							})}
						</Select>
						<Flex align="center" mt="3%">
							<Input
								boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
								borderRadius="15px"
								id="date"
								type="text"
								placeholder="YYYY-MM-DD"
								variant="filled"
								w="15%"
								fontSize="1.4rem"
								mr="2%"
								ref={dateRef}
							/>
							<Select
								placeholder="Class"
								variant="filled"
								boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
								borderRadius="15px"
								color="grey"
								w="10%"
								fontSize="1.4rem"
								ref={classRef}
							>
								<option value="first-ac">First AC</option>
								<option value="second-ac">Second AC</option>
								<option value="third-ac">Third AC</option>
							</Select>
						</Flex>
						<Select
							placeholder="Select Train"
							variant="filled"
							boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
							borderRadius="15px"
							color="grey"
							w="20%"
							fontSize="1.4rem"
							mt="3%"
							onChange={(e) => {
								setSelectedTrainId(e.target.value);
							}}
						>
							{filteredTrains?.map((trainDetail) => {
								const trainName =
									trainDetail.train_number +
									'. ' +
									trainDetail.train_name;
								return (
									<option key={trainDetail.id} value={trainDetail.id}>
										{trainName}
									</option>
								);
							})}
						</Select>
					</Flex>
					<Button
						mt="4%"
						w="15%"
						p="1.5% 1%"
						type="submit"
						boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
						borderRadius="15px"
						fontSize="1.4rem"
						onClick={bookingHandler}
					>
						Book Now
					</Button>
				</FormControl>
			</Flex>
		</Box>
	);
};

export default BookTicketForm;
