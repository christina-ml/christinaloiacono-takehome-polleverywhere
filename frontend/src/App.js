import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./App.scss";
import NavBar from "./components/navigation/NavBar";
import RaffleNav from "./components/navigation/RaffleNav";
import SingleRaffle from "./components/SingleRaffle";
import Participants from "./components/Participants";
import Winner from "./components/Winner";
import ErrorPage from "./components/ErrorPage";

function App() {
	return (
		<div className="App">
			<main>
                <NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/raffles/:id" element={<SingleRaffle />} />
					<Route path="/raffles/:id/participants" element={<Participants />} />
					<Route path="/raffles/:id/winner" element={<Winner />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
