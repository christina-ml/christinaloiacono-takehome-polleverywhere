import './RegisterSignUpForm.scss';

// Material UI
import { Box, Button, ButtonGroup, TextField } from "@mui/material";

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
							display: "grid",
							gridTemplateColumns: "repeat(2, 1fr)",
							gap: 1,
							gridTemplateRows: "auto",
							gridTemplateAreas: `"firstname lastname"
                          "email email"
                          "phone phone"`,
						}}
					>
						<TextField
							required
							id="standard-required"
							label="First Name"
							defaultValue="First Name"
							variant="standard"
							sx={{ gridArea: "firstname" }}
						/>
						<TextField
							required
							id="standard-required"
							label="Last Name"
							defaultValue="Last Name"
							variant="standard"
							sx={{ gridArea: "lastname" }}
						/>
					</Box>
					<TextField
						required
						id="standard-required"
						label="Email"
						defaultValue="Email"
						variant="standard"
						fullWidth
						sx={{ gridArea: "email" }}
					/>
					<TextField
						id="standard-required"
						label="Required"
						defaultValue="Phone"
						variant="standard"
						fullWidth
						sx={{ gridArea: "phone", mt: 2 }}
					/>
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
