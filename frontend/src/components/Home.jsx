import "./Home.scss";
import NewRaffleForm from "./NewRaffleForm";
import AllRaffles from "./AllRaffles";

const Home = ({ updateRaffles, raffles, winner, currRaffleId, setCurrRaffleId }) => {
	console.log("RAFFLES", raffles)
	console.log("Home component re-rendered");

	return (
		<div className="Home">
			<NewRaffleForm updateRaffles={updateRaffles} />
			<AllRaffles raffles={raffles} winner={winner} currRaffleId={currRaffleId} setCurrRaffleId={setCurrRaffleId} />
		</div>
	);
};

export default Home;
