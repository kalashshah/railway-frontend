import {
	Box,
	Button,
	Flex,
	Input,
	InputGroup,
	InputRightElement,
	Link as UILink,
	Text,
} from '@chakra-ui/react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../services/AxiosInstance';
import Header from './Header';

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [show, setShow] = React.useState(false);

	const handleSubmit = async () => {
		const data = {
			email,
			password,
		};
		try {
			const res = await axiosInstance.post('api/users/login/', data);
			console.log(res);
			const token = res.data.token.access;
			localStorage.setItem('token', token);
			navigate('/');
		} catch (err) {
			console.log(err);
			alert('Invalid Credentials');
		}
	};

	return (
		<Box bg="rgba(255, 238, 204, 1)" height="100vh">
			<Header />
			<Text
				fontSize="2rem"
				fontWeight="bold"
				color="black"
				pt="2%"
				textAlign="center"
			>
				Login
			</Text>
			<Flex mt="3%" flexDirection="column" alignItems="center">
				<Box mt="2%" w="40%" h="100%">
					<Input
						placeholder="Email"
						size="lg"
						backgroundColor="rgba(255, 255, 255, 1)"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Box>
				<InputGroup size="lg" bg="white" width="40%" mt="2%">
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
				<UILink mt="2%">
					<Link to="/signup">Don't have an account? Sign up</Link>
				</UILink>
				<Button my="3%" size="lg" onClick={handleSubmit}>
					Login
				</Button>
			</Flex>
		</Box>
	);
};

export default Login;
