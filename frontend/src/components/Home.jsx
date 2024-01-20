import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

import './Home.scss';

const Home = () => {
    const API = process.env.REACT_APP_API_URL;

    const [raffles, setRaffles] = useState([]);

    useEffect(() => {
		axios
			.get(API + "/raffles")
			.then((res) => {
				setRaffles(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [API]);

  return (
    <div className="Home">
        {
            raffles.map((raffle) => {
                return (
                    <div key={raffle.id + uuidv4()}>
                        {raffle.name}
                    </div>
                )
            })
        }
    </div>
  )
}

export default Home;