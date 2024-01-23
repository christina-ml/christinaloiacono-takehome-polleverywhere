import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import ParticipantDetails from "./ParticipantDetails";
import "./Participants.scss";

// React Icons
import { IoSearchSharp } from "react-icons/io5";

// Material UI
import { Box, IconButton, InputBase } from "@mui/material";

const API = process.env.REACT_APP_API_URL;

const Participants = ({ raffles, currRaffleId }) => {
	const [participants, setParticipants] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	let { id } = useParams();

	console.log("PARTICIPANTS", currRaffleId);

	// Filter raffles to get name of current raffle
	let filteredRaffles = raffles.filter(
		(oneRaffle) => oneRaffle.id === Number(id)
	);
	// console.log("filteredRaffles", filteredRaffles[0].name)

	useEffect(() => {
		try {
			axios
				.get(API + `/raffles/${id}/participants`)
				.then((res) => {
					setParticipants(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		} catch (err) {
			console.log(err);
		}
	}, [API, id]);

	let filteredParticipants = participants;

	// search by participant name
	if (searchTerm) {
		filteredParticipants = participants.filter((participant) => {
			const participantNameToLowerCase =
				`${participant.firstname} ${participant.lastname}`.toLowerCase();
			return participantNameToLowerCase.includes(
				searchTerm.toLowerCase()
			);
		});
	}

	const handleSearchTerm = (e) => {
		setSearchTerm(e.target.value);
	};

	return (
		<div className="Participants">
			<div className="Participants__currentRaffleName">
				{/* {filteredRaffles[0].name} */}
			</div>
			<div className="Participants__all">
				<div className="Participants__all__title">
					Participants: {participants.length} total
				</div>
				{(searchTerm || filteredParticipants.length > 0) && (
					<Box
						component="form"
						variant="outlined"
						sx={{
							mt: 1,
							mb: 2,
							display: "flex",
							alignItems: "center",
							border: "1px solid #D1D1D1",
							borderRadius: "5px",
						}}
					>
						<InputBase
							sx={{ ml: 1.5, flex: 1 }}
							placeholder="Search.."
							inputProps={{ "aria-label": "search.." }}
							value={searchTerm}
							onChange={handleSearchTerm}
						/>
						<IconButton
							type="button"
							sx={{ p: "10px" }}
							aria-label="search"
							disabled
						>
							<IoSearchSharp />
						</IconButton>
					</Box>
				)}
				{filteredParticipants.length ? (
					filteredParticipants.map((participant) => {
						return (
							<ParticipantDetails
								participant={participant}
								key={participant.id + uuidv4()}
							/>
						);
					})
				) : (
					<div>
						{searchTerm ? (
							<div>Participant not found for this raffle.</div>
						) : (
							<div>No participants for this raffle yet.</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default Participants;
