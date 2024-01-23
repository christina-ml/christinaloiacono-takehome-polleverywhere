import "./Raffle.scss";
import { Link } from "react-router-dom";
import { ImTrophy } from "react-icons/im";
import { FaRegCalendarPlus, FaRegCalendarCheck } from "react-icons/fa";

const Raffle = ({ raffle, currRaffleId, setCurrRaffleId }) => {
	const updateCurrRaffleId = (e) => {
		setCurrRaffleId(e.target.value);
	}

	const currentId = raffle.id;

	return (
		<div className="Raffle">
			<Link to={`/raffles/${raffle.id}`} onClick={updateCurrRaffleId} value={currentId} >
				<div className="Raffle__name">{raffle.name}</div>
				<div className="Raffle__details">
					<div className="Raffle__details__icon">
						<FaRegCalendarPlus />
					</div>
					<div>Created on: {raffle.created_on}</div>
				</div>
				<div className="Raffle__details">
					<div className="Raffle__details__icon">
						<ImTrophy />
					</div>
					<div>Winner Id: {raffle.raffle_winner || "No one yet"}</div>
				</div>
				<div className="Raffle__details">
					<div className="Raffle__details__icon">
						<FaRegCalendarCheck />
					</div>
					<div>
						Raffled on: {raffle.raffled_on || "Not raffled yet"}
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Raffle;
