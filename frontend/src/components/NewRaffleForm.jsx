import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./NewRaffleForm.scss";

// Material UI
import { Button, InputLabel, TextField } from "@mui/material";

const NewRaffleForm = ({ updateRaffles }) => {
	const API = process.env.REACT_APP_API_URL;
	const navigate = useNavigate();

	const [formValid, setFormValid] = useState(true);
	const [formErrors, setFormErrors] = useState({});
	const [newRaffle, setNewRaffle] = useState({
		name: "",
		secret_token: "",
	});

	// reset formErrors until button is clicked
	useEffect(() => {
		setFormErrors({});
	}, []);

	const addRaffle = (newRaffle) => {
		axios
			.post(`${API}/raffles`, newRaffle)
			.then(
				(res) => {
					updateRaffles(res.data);
					navigate(`/`);
				},
				(err) => console.error(err)
			)
			.catch((c) => console.warn("catch", c));
	};

	const handleTextChange = (event) => {
		setNewRaffle({ ...newRaffle, [event.target.id]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		// create errors obj
		const errors = {};

		// Check for blank fields
		if (!newRaffle.name) {
			errors.name = "Raffle Name cannot be blank";
		}
		if (!newRaffle.secret_token) {
			errors.secret_token = "Raffle Secret Token cannot be blank";
		}

		setFormErrors(errors);

		// Check errors obj for any errors in the form
		if (Object.keys(errors).length === 0) {
			setFormValid(true);
			addRaffle(newRaffle);
			navigate(`/raffles`);
		} else {
			// if there are still errors
			setFormValid(false);
		}
	};

	return (
		<div className="NewRaffleForm">
			<div className="NewRaffleForm__title">New Raffle:</div>
			<form
				onSubmit={handleSubmit}
				className="NewRaffleForm__formContainer"
				component="form"
				noValidate
				autoComplete="off"
			>
				<div className="NewRaffleForm__formContainer__fields">
					<InputLabel
						className="NewRaffleForm__formContainer__fields__fieldLabel"
						sx={{
							gridArea: "firstnameLabel",
							color: "black",
							fontSize: "14px",
							fontWeight: 600,
						}}
					>
						Raffle Name:*
					</InputLabel>
					<TextField
						fullWidth
						variant="outlined"
						InputLabelProps={{ shrink: true }}
						sx={{ mb: 1.5 }}
						size="small"
						id="name"
						value={newRaffle.name}
						onChange={handleTextChange}
						required
						error={formErrors.name && !formValid}
						helperText={formErrors.name || ""}
					/>
					<InputLabel
						className="NewRaffleForm__formContainer__fields__fieldLabel"
						sx={{
							gridArea: "firstnameLabel",
							color: "black",
							fontSize: "14px",
							fontWeight: 600,
						}}
					>
						Raffle Secret Token:*
					</InputLabel>
					<TextField
						fullWidth
						variant="outlined"
						InputLabelProps={{ shrink: true }}
						sx={{ mb: 1.5 }}
						size="small"
						id="secret_token"
						value={newRaffle.secret_token}
						onChange={handleTextChange}
						required
						error={formErrors.secret_token && !formValid}
						helperText={formErrors.secret_token || ""}
					/>
				</div>
				<div className="NewRaffleForm__description">
					You must remember the Raffle Token because it will be asked
					when picking a winner
				</div>
				<Button
					type="submit"
					fullWidth
					sx={{
						color: "#FFF",
						background: "#757575",
						textTransform: "none",
						"&:hover": {
							backgroundColor: "#757575",
						},
					}}
				>
					Create New Raffle
				</Button>
			</form>
		</div>
	);
};

export default NewRaffleForm;
