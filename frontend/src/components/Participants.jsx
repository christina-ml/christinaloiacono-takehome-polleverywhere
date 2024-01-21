import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import RaffleNav from "./navigation/RaffleNav";
import ParticipantDetails from "./ParticipantDetails";
import "./Participants.scss";

// React Icons
import { IoSearchSharp } from "react-icons/io5";

// Material UI
import { IconButton, InputBase, Paper } from "@mui/material";

const Participants = () => {
	const API = process.env.REACT_APP_API_URL;
	const [participants, setParticipants] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	let { id } = useParams();

	useEffect(() => {
		axios
			.get(API + `/raffles/${id}/participants`)
			.then((res) => {
				setParticipants(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [API, id]);

	let filteredParticipants = participants;

	// search by participant name
	if (searchTerm){
		filteredParticipants = participants.filter(participant => {
			const participantNameToLowerCase = `${participant.firstname} ${participant.lastname}`.toLowerCase();
			return participantNameToLowerCase.includes(searchTerm.toLowerCase());
		})
	}

	const handleSearchTerm = (e) => {
		setSearchTerm(e.target.value);
	}

	return (
		<div className="Participants">
			<div className="Participants__currentRaffleName">{}</div>
			<RaffleNav />
			<div className="Participants__all">
				<div className="Participants__all__title">
					Participants: {participants.length} total
				</div>
				<Paper
					component="form"
					sx={{
						mt: 1,
						mb: 2,
						p: "2px 4px",
						display: "flex",
						alignItems: "center",
					}}
				>
					<InputBase
						sx={{ ml: 1, flex: 1 }}
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
				</Paper>
				{filteredParticipants.map((participant) => {
					return <ParticipantDetails participant={participant} />;
				})}
			</div>
		</div>
	);
};

export default Participants;
