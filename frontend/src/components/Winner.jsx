import { useState } from "react";
import RaffleNav from "./navigation/RaffleNav";
import "./Winner.scss";

// React Icons
import { FaHashtag, FaPhone, FaKey } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// Material UI
import {
	Box,
	Button,
	Card,
	CardContent,
	InputAdornment,
	TextField,
	Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";

const Winner = ({raffles}) => {
	const [winnerPicked, setWinnerPicked] = useState(false);

	let { id } = useParams();

	// Filter raffles to get name of current raffle
	let filteredRaffles = raffles.filter((oneRaffle) => oneRaffle.id === Number(id));
	// console.log("filteredRaffles", filteredRaffles[0].name)

	const handleSubmit = () => {
		// set to true, and never show the form again
		setWinnerPicked(true);
	};

	return (
		<div className="Winner">
			<div className="Winner__currentRaffleName">{filteredRaffles[0].name}</div>
			<RaffleNav />
			{winnerPicked === false ? (
				<>
					<div className="Winner__title">Pick a Winner</div>
					<Box sx={{ "& > :not(style)": { m: 1 } }}>
						<TextField
							required
							id="input-with-icon-textfield"
							label="Secret Key"
							defaultValue="$ecr3tKey"
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<FaKey />
									</InputAdornment>
								),
							}}
							variant="standard"
							fullWidth
						/>
					</Box>
					<Button
						variant="contained"
						onClick={handleSubmit}
						fullWidth
						disableElevation
						sx={{
							mt: 1,
							mb: 2,
							background: "#acacac",
							textTransform: "none",
							"&:hover": {
								backgroundColor: "#acacac",
							},
						}}
					>
						Pick a Winner
					</Button>
					<Box>
						<Card
							variant="outlined"
							sx={{
								backgroundColor: "#F2F2F2",
								borderWidth: "2px",
							}}
						>
							<CardContent>
								<Typography sx={{ fontWeight: 600 }}>
									Secret Token
								</Typography>
								<Typography>
									The secret token used when creating the
									raffle must be provided.
								</Typography>
							</CardContent>
						</Card>
					</Box>
				</>
			) : (
				<>
					<div className="Winner__title">Winner</div>
					<div className="Winner__card">
						<div className="Winner__card__congrats">
							<img
								src="https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/396698643_324299040239593_8499081611656991510_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=7WB72UEiSB8AX80sZsO&_nc_ht=scontent-lga3-2.xx&oh=00_AfDIUeKg80eSeKZLw7NMcyR2PDgcEcPqOJVGypIj8HZF_A&oe=65B29E65"
								alt="congrats winner"
							/>
						</div>
						<div className="Winner__card__details">
							<div className="Winner__card__details__name">
								Marvin Bosco
							</div>
							<div className="Winner__card__details__registeredOn">
								Registered on Sat May 22 2021 at 8:03:17 PM
							</div>
							<hr></hr>
							<div className="Winner__card__details__info">
								<FaHashtag /> 5
							</div>
							<div className="Winner__card__details__info">
								<MdEmail /> Arlene8@yahoo.com
							</div>
							<div className="Winner__card__details__info">
								<FaPhone /> (555) 555-1234
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Winner;
