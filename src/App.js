import './App.css';
import { Container, Box } from '@mui/material';

function App() {
	return (
		<>
			<Container>
				<Box textAlign="center" marginTop={4}>
					<address>
						Parairy Primary School Ground XFP8+6FP, Parairy, Joypur, Shayamsundarpur, West Bengal 722138
					</address>
				</Box>
				<Box width="100%" height="600px">
					<iframe
						title="Google Maps"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.039294829874!2d87.46157747222938!3d22.985582471759393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f78b463338b9f1%3A0xfafb420edc8465d!2sParairy%20Primary%20School%20Ground!5e0!3m2!1sen!2sin!4v1710324406595!5m2!1sen!2sin"
						width="100%"
						height="100%"
						style={{ border: '0' }}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					>
					</iframe>
				</Box>
			</Container>
		</>
	);
}

export default App;
