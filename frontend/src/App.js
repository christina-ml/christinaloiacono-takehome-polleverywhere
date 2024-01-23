import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navigation/NavBar";
import Home from "./components/Home";
import RaffleNav from "./components/navigation/RaffleNav";
import SingleRaffle from "./components/SingleRaffle";
import Participants from "./components/Participants";
import Winner from "./components/Winner";
import ErrorPage from "./components/ErrorPage";
import "./App.scss";
import { useEffect, useState, createContext } from "react";
import axios from "axios";

function App() {
	const API = process.env.REACT_APP_API_URL;
	const [currRaffleId, setCurrRaffleId] = useState('');
	
	const RaffleContext = createContext(null);

	const [raffles, setRaffles] = useState([]);
	const [loading, setLoading] = useState(true);


	useEffect(() => {
		axios
			.get(API + "/raffles")
			.then((res) => {
				setRaffles(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	}, [API]);

	if (loading) {
		return (
			<div>Loading...</div>
		)
	}

	// update state for raffles when a new raffle is created
	const updateRaffles = (newRaffle) => {
		// Check if the new raffle is not already present
		if (!raffles.some((raffle) => raffle.id === newRaffle.id)) {
			setRaffles([...raffles, newRaffle]);
		}
	};

	return (
		<div className="App">
			<main>
				<NavBar />
				<RaffleNav currRaffleId={currRaffleId} />
				<RaffleContext.Provider value={currRaffleId}>
				<Routes>
					<Route path="/" element={<Home raffles={raffles} updateRaffles={updateRaffles} currRaffleId={currRaffleId} setCurrRaffleId={setCurrRaffleId}/>}/>
					<Route path="/raffles/:id" element={<SingleRaffle currRaffleId={currRaffleId} setCurrRaffleId={setCurrRaffleId} /> } />
					<Route
						path="/raffles/:id/participants"
						element={<Participants raffles={raffles} currRaffleId={currRaffleId} />}
					/>
					<Route
						path="/raffles/:id/winner"
						element={<Winner raffles={raffles} currRaffleId={currRaffleId} raffleContext={RaffleContext}/>}
					/>
					<Route path="*" element={<ErrorPage />} />
				</Routes>
					</RaffleContext.Provider>
			</main>
		</div>
	);
}

export default App;
