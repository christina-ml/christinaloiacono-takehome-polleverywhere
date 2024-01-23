import "./RegisterSignUpForm.scss";
import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Material UI
import { Box, Button, ButtonGroup, TextField, InputLabel } from "@mui/material";

const RegisterSignUpForm = () => {
	const API = process.env.REACT_APP_API_URL;
	let navigate = useNavigate();
	const { id } = useParams();

	const [formValid, setFormValid] = useState(true);
	const [formErrors, setFormErrors] = useState({});
	const [raffleEntry, setRaffleEntry] = useState({
		firstname: "",
		lastname: "",
		email: "",
		phone: "",
		raffle_id: id
	});

	const addRaffleEntry = (newParticipant) => {
		axios
			.post(`${API}/raffles/${id}/participants`, newParticipant)
			.then(
				() => {
					navigate(`/raffles/${id}/participants`);
				},
				(error) => console.error(error)
			)
			.catch((c) => console.warn("catch", c));
	};

	const handleTextChange = (event) => {
		setRaffleEntry({ ...raffleEntry, [event.target.id]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		// create errors obj
		const errors = {};

		// Check for blank fields
		if (!raffleEntry.firstname) {
			errors.firstname = "First Name cannot be blank";
		}
		if (!raffleEntry.lastname) {
			errors.lastname = "Last Name cannot be blank";
		}
		if (!raffleEntry.email) {
			errors.email = "Email cannot be blank";  // Corrected the error message
		}

		setFormErrors(errors);

		// Check errors obj for any errors in the form
		if (Object.keys(errors).length === 0) {
			setFormValid(true);
			addRaffleEntry(raffleEntry);
			navigate(`/raffles/${id}`);
		} else {
			// if there are still errors
			setFormValid(false);
		}
	};

	const handleReset = (event) => {
		event.preventDefault();

		setRaffleEntry({
		  firstname: "",
		  lastname: "",
		  email: "",
		  phone: "",
		  raffle_id: id
		});
	  }

	return (
		<div className="RegisterSignUpForm">
			<div className="RegisterSignUpForm__title">
				Register to participate in the Raffle:
			</div>
			<form 
				onSubmit={handleSubmit}
				component="form" 
				noValidate 
				autoComplete="off"
			>
				<div>
					<Box
						sx={{
							mt: 2,
							display: "grid",
							gridTemplateColumns: "repeat(2, 1fr)",
							gap: 1,
							gridTemplateRows: "auto",
							gridTemplateAreas: `
								"firstnameLabel lastnameLabel"
								"firstname lastname"
								"emailLabel emailLabel"
								"email email"
								"phoneLabel phoneLabel"
								"phone phone"
							`,
						}}
					>
						<InputLabel
							sx={{
								gridArea: "firstnameLabel",
								color: "black",
								fontSize: "14px",
								fontWeight: 600,
							}}
						>
							First Name*
						</InputLabel>
						<TextField
							required
							placeholder="First Name"
							variant="outlined"
							size="small"
							InputLabelProps={{ shrink: true }}
							sx={{ gridArea: "firstname" }}
							id="firstname"
							value={raffleEntry.firstname}
							onChange={handleTextChange}
							error={formErrors.firstname && !formValid}
						/>
						<InputLabel
							sx={{
								gridArea: "lastnameLabel",
								color: "black",
								fontSize: "14px",
								fontWeight: 600,
							}}
						>
							Last Name*
						</InputLabel>
						<TextField
							required
							placeholder="Last Name"
							variant="outlined"
							size="small"
							InputLabelProps={{ shrink: true }}
							sx={{ gridArea: "lastname" }}
							id="lastname"
							value={raffleEntry.lastname}
							onChange={handleTextChange}
							error={formErrors.lastname && !formValid}
						/>
						<InputLabel
							sx={{
								gridArea: "emailLabel",
								color: "black",
								fontSize: "14px",
								fontWeight: 600,
							}}
						>
							Email*
						</InputLabel>
						<TextField
							required
							placeholder="Email"
							variant="outlined"
							size="small"
							InputLabelProps={{ shrink: true }}
							// fullWidth
							sx={{ gridArea: "email" }}
							id="email"
							value={raffleEntry.email}
							onChange={handleTextChange}
							error={formErrors.email && !formValid}
						/>
						<InputLabel
							sx={{
								gridArea: "phoneLabel",
								color: "black",
								fontSize: "14px",
								fontWeight: 600,
							}}
						>
							Phone
						</InputLabel>
						<TextField
							placeholder="Phone"
							variant="outlined"
							size="small"
							InputLabelProps={{ shrink: true }}
							// fullWidth
							sx={{ gridArea: "phone" }}
							id="phone"
							value={raffleEntry.phone}
							onChange={handleTextChange}
						/>
					</Box>
				</div>
				<ButtonGroup
					variant="contained"
					aria-label="outlined primary button group"
					disableElevation
					sx={{
						display: "flex",
						justifyContent: "center",
						mt: 2,
						".MuiButtonGroup-grouped:not(:last-of-type)": {
							borderColor: "black",
						},
						"&:hover": {
							borderColor: "black",
						},
					}}
				>
					<Button
						type="submit"
						sx={{
							background: "#757575",
							width: "150px",
							textTransform: "none",
							"&:hover": {
								backgroundColor: "#757575",
							},
						}}
					>
						Submit
					</Button>
					<Button
						onClick={handleReset}
						sx={{
							background: "black",
							width: "150px",
							textTransform: "none",
							"&:hover": {
								backgroundColor: "black",
							},
						}}
					>
						Reset
					</Button>
				</ButtonGroup>
			</form>
		</div>
	);
};

export default RegisterSignUpForm;
