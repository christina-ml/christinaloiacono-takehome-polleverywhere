import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

import './Home.scss';
import Raffle from "./Raffle";

const Home = () => {
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
    <div className="Home">
        <div className="Home__title">All Raffles:</div>
        {
            raffles.map((raffle) => {
                return (
                    <div key={raffle.id + uuidv4()}>
                        <Raffle raffle={raffle} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default Home;