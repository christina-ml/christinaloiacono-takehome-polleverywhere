import NewRaffleForm from "./NewRaffleForm";
import AllRaffles from "./AllRaffles";

const Home = ({ updateRaffles, raffles, currRaffleId, setCurrRaffleId }) => {

	return (
		<div className="Home">
			<NewRaffleForm updateRaffles={updateRaffles} />
			<AllRaffles raffles={raffles} currRaffleId={currRaffleId} setCurrRaffleId={setCurrRaffleId} />
		</div>
	);
};

export default Home;
