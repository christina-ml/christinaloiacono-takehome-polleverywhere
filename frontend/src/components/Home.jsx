import { v4 as uuidv4 } from 'uuid';
import Raffle from "./Raffle";
import './Home.scss';
import NewRaffleForm from './NewRaffleForm';

const Home = ({ raffles }) => {
  return (
    <div className="Home">
        <NewRaffleForm />
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