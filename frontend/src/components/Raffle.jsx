import "./Raffle.scss";
import { Link } from "react-router-dom";
import { ImTrophy } from "react-icons/im";
import { FaRegCalendarPlus, FaRegCalendarCheck } from "react-icons/fa";
import convertISOStringToTime from "../helpers/convertISOStringToTime";
import convertISOStringToDate from "../helpers/convertISOStringToDate";

const Raffle = ({ raffle, winner, currRaffleId, setCurrRaffleId }) => {
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
					<div>
						<span>
							Created on: {convertISOStringToDate(raffle.created_on)} at {convertISOStringToTime(raffle.created_on)}
						</span>
					</div>
				</div>
				<div className="Raffle__details">
					<div className="Raffle__details__icon">
						<ImTrophy />
					</div>
					<div>Winner Id: {raffle?.winner_id || "No one yet"}</div>
				</div>
				<div className="Raffle__details">
					<div className="Raffle__details__icon">
						<FaRegCalendarCheck />
					</div>
					<div>
						{raffle.raffled_on ? 
						<span>
							Raffled on: {convertISOStringToDate(raffle.raffled_on)} at {convertISOStringToTime(raffle.raffled_on) || "Not raffled yet"}
						</span>
						:
						<span>
							Raffled on: Not raffled yet
						</span>
						}
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Raffle;
