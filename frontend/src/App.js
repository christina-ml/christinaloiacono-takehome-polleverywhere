import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navigation/NavBar";
import Home from "./components/Home";
import RaffleNav from "./components/navigation/RaffleNav";
import SingleRaffle from "./components/SingleRaffle";
import Participants from "./components/Participants";
import Winner from "./components/Winner";
import ErrorPage from "./components/ErrorPage";
import "./App.scss";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
	const API = process.env.REACT_APP_API_URL;

    const [raffles, setRaffles] = useState([]);

    useEffect(() => {
		axios
			.get(API + "/raffles")
			.then((res) => {
				setRaffles(res.data);
                // console.log("raffles:", raffles)
			})
			.catch((err) => {
				console.log(err);
			});
	}, [API]);

	return (
		<div className="App">
			<main>
                <NavBar />
				<Routes>
					<Route path="/" element={<Home raffles={raffles} />} />
					<Route path="/raffles" element={<RaffleNav />} />
					<Route path="/raffles/:id" element={<SingleRaffle />} />
					<Route path="/raffles/:id/participants" element={<Participants raffles={raffles} />} />
					<Route path="/raffles/:id/winner" element={<Winner raffles={raffles} />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
