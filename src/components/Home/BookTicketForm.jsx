import {
	Box,
	FormControl,
	Input,
	Flex,
	Heading,
	Select,
	Button,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import homeBg from '../../assets/images/home-bg.png';

const BookTicketForm = () => {
	let fetchedRoutes;
	// useEffect(()=>{

	// }, []);
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
						>
							<option value="first-ac">First AC</option>
						</Select>
						<Flex align="center" mt="3%">
							<Input
								boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
								borderRadius="15px"
								id="date"
								type="text"
								placeholder="DD/MM/YY"
								variant="filled"
								w="15%"
								fontSize="1.4rem"
								mr="2%"
							/>
							<Select
								placeholder="Class"
								variant="filled"
								boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
								borderRadius="15px"
								color="grey"
								w="10%"
								fontSize="1.4rem"
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
							isDisabled={}
						>
							<option value="first-ac">First AC</option>
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
					>
						Book Now
					</Button>
				</FormControl>
			</Flex>
		</Box>
	);
};

export default BookTicketForm;
