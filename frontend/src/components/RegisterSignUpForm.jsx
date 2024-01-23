import "./RegisterSignUpForm.scss";

// Material UI
import { Box, Button, ButtonGroup, TextField, InputLabel } from "@mui/material";

const RegisterSignUpForm = () => {
	return (
		<div className="RegisterSignUpForm">
			<div className="RegisterSignUpForm__title">
				Register to participate in the Raffle:
			</div>
			<Box component="form" noValidate autoComplete="off">
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
							id="standard-required"
							placeholder="First Name"
							variant="outlined"
							size="small"
							InputLabelProps={{ shrink: true }}
							sx={{ gridArea: "firstname" }}
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
							id="standard-required"
							placeholder="Last Name"
							variant="outlined"
							size="small"
							InputLabelProps={{ shrink: true }}
							sx={{ gridArea: "lastname" }}
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
							id="standard-required"
							placeholder="Email"
							variant="outlined"
							size="small"
							InputLabelProps={{ shrink: true }}
							// fullWidth
							sx={{ gridArea: "email" }}
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
							id="standard-required"
							placeholder="Phone"
							variant="outlined"
							size="small"
							InputLabelProps={{ shrink: true }}
							// fullWidth
							sx={{ gridArea: "phone" }}
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
			</Box>
		</div>
	);
};

export default RegisterSignUpForm;
