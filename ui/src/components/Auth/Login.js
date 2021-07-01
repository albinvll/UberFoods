import React, { useState } from "react";
import {
	Container,
	Avatar,
	Button,
	CssBaseline,
	TextField,
	Link,
	Grid,
	Box,
	Typography,
	makeStyles,
	MenuItem,
	FormControl,
	Select,
	InputLabel,
} from "@material-ui/core/";
import client from "../../axios";


const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%",
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function Login() {
	const classes = useStyles();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [accountType, setAccountType] = useState(1);

	const onTypeText = (event) => {
		setAccountType(event.target.value);
	};

	const onEmailText = (event) => {
		setEmail(event.target.value);
	};

	const onPasswordText = (event) => {
		setPassword(event.target.value);
	};

	const validateEmail = () => {
		if (email.length <= 0) {
			return false;
		} else {
			return true;
		}
	};
	const validatePassword = () => {
		if (password.length <= 0) {
			return false;
		} else {
			return true;
		}
	};

	const onLoginButtonClick = (event) => {
		event.preventDefault();
		/*if (validateEmail && validatePassword) {
			submitLogin();
		}*/

		if(email === "" || password === ""){
			alert("Some of your informations are empty");
		}else{
			submitLogin();
		}
	};

	const submitLogin = async () => {
		try {
			const response = await client.post("Account/login", {
				email,
				password,
				accountType,
			});
			if (response && response.data) {
				console.log(response.data);
			}
		} catch (error) {
			console.error(error.response.data);
		}
	};

	return (
		<Container component="main" maxWidth="xs">
			 
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}></Avatar>
				<Typography component="h1" variant="h5">
					Uberfoods - Sign in
				</Typography>
				<form className={classes.form} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
						onChange={onEmailText}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						onChange={onPasswordText}
					/>

					<FormControl variant="outlined" className={classes.form}>
						<InputLabel id="demo-simple-select-outlined-label">
							Account type
						</InputLabel>
						<Select
							labelId="demo-simple-select-outlined-label"
							required
							id="demo-simple-select-outlined"
							value={accountType}
							onChange={onTypeText}
							label="Account type"
						>
							<MenuItem value={1}>Orderer</MenuItem>
							<MenuItem value={2}>Delivery</MenuItem>
							<MenuItem value={3}>Corporate</MenuItem>
						</Select>
					</FormControl>

					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						onClick={onLoginButtonClick}
						className={classes.submit}
					>
						Sign In
					</Button>
					<Grid container justify="flex-end">
						<Grid item>
							<Link href="/signup" variant="body2">
								Don't have an account ? Sign up
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={8}></Box>
		</Container>
	);
}
