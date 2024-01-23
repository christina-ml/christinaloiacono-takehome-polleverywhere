import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import RegisterSignUpForm from "./RegisterSignUpForm";
import "./SingleRaffle.scss";

const SingleRaffle = ({ currRaffleId, setCurrRaffleId }) => {
	const API = process.env.REACT_APP_API_URL;
	const [raffle, setRaffle] = useState([]);

	let { id } = useParams();

	useEffect(() => {
		axios
			.get(API + `/raffles/${id}`)
			.then((res) => {
				setRaffle(res.data);
				setCurrRaffleId(id);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id]);

	return (
		<div className="SingleRaffle">
			<div className="SingleRaffle__title">{raffle.name}</div>
			<RegisterSignUpForm />
		</div>
	);
};

export default SingleRaffle;
