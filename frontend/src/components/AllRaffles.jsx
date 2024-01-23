import { v4 as uuidv4 } from "uuid";
import Raffle from "./Raffle";
import "./AllRaffles.scss";

const AllRaffles = ({ raffles, winner, currRaffleId, setCurrRaffleId}) => {
	return (
		<div className="AllRaffles">
			<div className="AllRaffles__title">All Raffles:</div>
			{raffles.map((raffle) => {
				return (
					<div key={raffle.id + uuidv4()}>
						<Raffle raffle={raffle} winner={winner} currRaffleId={currRaffleId} setCurrRaffleId={setCurrRaffleId} />
					</div>
				);
			})}
		</div>
	);
};

export default AllRaffles;
