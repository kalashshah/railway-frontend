import {
	Box,
	FormControl,
	Image,
	Input,
	Flex,
	Heading,
	Select,
	Button,
} from '@chakra-ui/react';
import formImg from '../../assets/images/home-form-arrows.png';
import homeBg from '../../assets/images/home-bg.png';

const BookTicketForm = () => {
	return (
		<Box
			bg="url() no-repeat center center/cover"
			bgImage={homeBg}
			w="100%"
			h="88%"
			mt="0.8%"
		>
			<Flex direction="column" ml="4%">
				<Heading my={('2%', '4%')} ml="4%">Book Ticket</Heading>
				<FormControl>
					<Flex>
						<Flex direction="column" align="center" mr="5%">
							<Input
								borderRadius="15px"
								boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
								id="source"
								type="text"
								placeholder="Source"
								variant="filled"
							/>
							<Image src={formImg} w="25px" h="35px" my="4%" />
							<Input
								boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
								borderRadius="15px"
								id="destination"
								type="text"
								placeholder="Destination"
								variant="filled"
							/>
						</Flex>
						<Flex
							direction="column"
							align="center"
							justifyContent="space-between"
						>
							<Input
								boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
								borderRadius="15px"
								id="date"
								type="text"
								placeholder="DD/MM/YY"
								variant="filled"
							/>
							<Select
								placeholder="Class"
								variant="filled"
								boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
								borderRadius="15px"
								color="grey"
							>
								<option value="first-ac">First AC</option>
								<option value="second-ac">Second AC</option>
								<option value="third-ac">Third AC</option>
							</Select>
						</Flex>
					</Flex>
					<Button
						mt="4%"
						w="14.5%"
						type="submit"
						boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
						borderRadius="15px"
					>
						Submit
					</Button>
				</FormControl>
			</Flex>
		</Box>
	);
};

export default BookTicketForm;
