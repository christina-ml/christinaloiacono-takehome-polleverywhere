import { useState, useContext, useEffect } from "react";
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
import axios from "axios";

const Winner = ({ raffles }) => {
	const API = process.env.REACT_APP_API_URL;
	let { id } = useParams();
	const [winner, setWinner] = useState('');

	useEffect(() => {
		if (id){
			axios
				.get(API + `/raffles/${id}/winner`)
				.then((res) => {
					setWinner(res.data);
				})
				.catch((err) => {
					console.log("err", err);
				})
		}
	}, [API, id]);

	const [secretTokenInput, setSecretTokenInput] = useState({
		secret_token: "",
	});

	const [showError, setShowError] = useState('');

	const handleTextChange = (event) => {
		setSecretTokenInput({ ...secretTokenInput, [event.target.id]: event.target.value });
	};

	// set to true, and never show the form again
	const handleSubmit = (event) => {
		if (!winner){
		event.preventDefault();
		// if secret token matches, get participant information	
		// make PUT request to get the random winners
		axios
			.put(API + `/raffles/${id}/winner`, secretTokenInput)
			.then((res) => {
				if (res.status === 200){
					setWinner(res.data);
				} else {
					setShowError("wrong secret token");
				}
			})
			.catch((err) => {
				console.log(err);
			});
		}
	};

	return (
		<div className="Winner">
			{!winner ? (
				<>
					<div className="Winner__title">Pick a Winner</div>
					<div>{showError}</div>
					<form sx={{ "& > :not(style)": { m: 1 } }}>
						<TextField
							required
							fullWidth
							id="secret_token"
							value={secretTokenInput.secret_token}
							onChange={handleTextChange}
							placeholder="Secret token"
							variant="outlined"
							size="small"
							InputProps={{
								startAdornment: (
									<InputAdornment
										position="start"
										sx={{ color: "#909090" }}
									>
										<FaKey />
									</InputAdornment>
								),
							}}
						/>
					<Button
						variant="contained"
						onClick={handleSubmit}
						fullWidth
						disableElevation
						sx={{
							mt: 1,
							mb: 2,
							background: "#D1D1D1",
							textTransform: "none",
							"&:hover": {
								backgroundColor: "#D1D1D1",
							},
						}}
					>
						Pick a Winner
					</Button>
					</form>
					<Box>
						<Card
							variant="outlined"
							sx={{
								backgroundColor: "#F6F6F6",
								borderWidth: "2px",
								borderColor: "#D5D5D5",
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
								{winner.firstname} {winner.lastname} 
							</div>
							<div className="Winner__card__details__registeredOn">
								Registered on: {raffles[winner.id]?.created_on} 
							</div>
							<hr></hr>
							<div className="Winner__card__details__info">
								<FaHashtag /> {winner.id} 
							</div>
							<div className="Winner__card__details__info">
								<MdEmail /> {winner.email} 
							</div>
							<div className="Winner__card__details__info">
								<FaPhone /> {winner.phone} 
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Winner;
