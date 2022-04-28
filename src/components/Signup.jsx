import React from 'react';
import {
	Box,
	Button,
	Flex,
	Image,
	Input,
	InputGroup,
	InputRightElement,
	Text,
} from '@chakra-ui/react';
import bg from '../assets/images/signup.svg';
import axiosInstance from '../services/AxiosInstance';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
	const navigation = useNavigate();
	const [show, setShow] = React.useState(false);

	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [firstName, setFirstName] = React.useState('');
	const [lastName, setLastName] = React.useState('');
	const [phone, setPhone] = React.useState('');
	const [city, setCity] = React.useState('');
	const [state, setState] = React.useState('');
	const [pincode, setPincode] = React.useState('');
	const [gender, setGender] = React.useState('');
	const [dob, setDob] = React.useState('');
	const [occupation, setOccupation] = React.useState('');

	const handleSubmit = async () => {
		const data = {
			first_name: firstName,
			last_name: lastName,
			email,
			phone_number: phone,
			date_of_birth: dob,
			password,
			password2: password,
			occupation,
			gender,
			city,
			state,
			pincode,
		};
		try {
			const res = await axiosInstance.post('api/users/register/', data);
			const token = res.data.token.access;
			localStorage.setItem('token', token);
		} catch (err) {}
		navigation('/');
	};

	return (
		<Box bg="rgba(255, 238, 204, 1)">
			<Text
				fontSize="2rem"
				fontWeight="bold"
				color="black"
				py="4%"
				textAlign="center"
			>
				Signup
			</Text>
			<Flex justifyContent={'center'}>
				<Image src={bg} alt="bg" />
			</Flex>
			<Flex mt="3%" flexDirection="column" alignItems="center">
				<Box mt="2%" w="50%" h="100%">
					<Input
						placeholder="First Name"
						size="lg"
						backgroundColor="rgba(255, 255, 255, 1)"
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</Box>
				<Box mt="2%" w="50%" h="100%">
					<Input
						placeholder="Last Name"
						size="lg"
						backgroundColor="rgba(255, 255, 255, 1)"
						onChange={(e) => setLastName(e.target.value)}
					/>
				</Box>
				<Box mt="2%" w="50%" h="100%">
					<Input
						placeholder="Email ID"
						size="lg"
						backgroundColor="rgba(255, 255, 255, 1)"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Box>
				<Box mt="2%" w="50%" h="100%">
					<Input
						placeholder="Phone Number"
						size="lg"
						backgroundColor="rgba(255, 255, 255, 1)"
						onChange={(e) => setPhone(e.target.value)}
					/>
				</Box>
				<Box mt="2%" w="50%" h="100%">
					<Input
						placeholder="DOB(YYYY-MM-DD)"
						size="lg"
						backgroundColor="rgba(255, 255, 255, 1)"
						onChange={(e) => setDob(e.target.value)}
					/>
				</Box>
				<Box mt="2%" w="50%" h="100%">
					<Input
						placeholder="Gender"
						size="lg"
						backgroundColor="rgba(255, 255, 255, 1)"
						onChange={(e) => setGender(e.target.value)}
					/>
				</Box>
				<Box mt="2%" w="50%" h="100%">
					<Input
						placeholder="Occupation"
						size="lg"
						backgroundColor="rgba(255, 255, 255, 1)"
						onChange={(e) => setOccupation(e.target.value)}
					/>
				</Box>
				<Box mt="2%" w="50%" h="100%">
					<Input
						placeholder="City"
						size="lg"
						backgroundColor="rgba(255, 255, 255, 1)"
						onChange={(e) => setCity(e.target.value)}
					/>
				</Box>
				<Box mt="2%" w="50%" h="100%">
					<Input
						placeholder="State"
						size="lg"
						backgroundColor="rgba(255, 255, 255, 1)"
						onChange={(e) => setState(e.target.value)}
					/>
				</Box>
				<Box mt="2%" w="50%" h="100%">
					<Input
						placeholder="Pincode"
						size="lg"
						backgroundColor="rgba(255, 255, 255, 1)"
						onChange={(e) => setPincode(e.target.value)}
					/>
				</Box>
				<InputGroup size="lg" bg="white" width="50%" mt="2%">
					<Input
						pr="4.5rem"
						type={show ? 'text' : 'password'}
						placeholder="Enter password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<InputRightElement width="4.5rem" bg="white">
						<Button
							h="1.75rem"
							size="sm"
							onClick={() => setShow((show) => !show)}
						>
							{show ? 'Hide' : 'Show'}
						</Button>
					</InputRightElement>
				</InputGroup>
				<Button my="3%" size="lg" onClick={handleSubmit}>
					Signup
				</Button>
			</Flex>
		</Box>
	);
};

export default Signup;
