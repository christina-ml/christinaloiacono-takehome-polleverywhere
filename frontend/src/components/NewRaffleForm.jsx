import { Button } from "@mui/material";
import "./NewRaffleForm.scss";

// Material UI
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const NewRaffleForm = () => {
	return (
		<div className="NewRaffleForm">
			<div className="NewRaffleForm__title">New Raffle:</div>
			<Box
				className="NewRaffleForm__formContainer"
				component="form"
				noValidate
				autoComplete="off"
			>
				<div className="NewRaffleForm__formContainer__fields">
					<div className="NewRaffleForm__formContainer__fields__fieldLabel">
						Raffle Name:*
					</div>
					<TextField
						required
						fullWidth
						id="standard-required"
						variant="outlined"
						InputLabelProps={{ shrink: true }}
						size="small"
						sx={{ mb: 1.5 }}
					/>
					<div className="NewRaffleForm__formContainer__fields__fieldLabel">
						Raffle Secret Token*
					</div>
					<TextField
						required
						fullWidth
						id="standard-required"
						variant="outlined"
						InputLabelProps={{ shrink: true }}
						size="small"
						sx={{ mb: 1.5 }}
					/>
				</div>
				<div className="NewRaffleForm__description">
					You must remember the Raffle Token because it will be asked
					when picking a winner
				</div>
				<Button
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
			</Box>
		</div>
	);
};

export default NewRaffleForm;
