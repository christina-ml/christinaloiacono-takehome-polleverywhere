import "./ParticipantDetails.scss";

// React Icons
import { FaHashtag, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ParticipantDetails = ({ participant }) => {
	return (
		<div className="ParticipantDetails">
			<div className="ParticipantDetails__profile">
				<img
					src="https://placehold.co/150"
					alt={`participant # ${participant.id} profile`}
				/>
			</div>
			<div className="ParticipantDetails__contact">
				<div className="ParticipantDetails__contact__name">
					{participant.firstname} {participant.lastname}
				</div>
				<div className="ParticipantDetails__contact__info">
					<FaHashtag /> {participant.id}
				</div>
				<div className="ParticipantDetails__contact__info">
					<MdEmail /> {participant.email}
				</div>
				<div className="ParticipantDetails__contact__info">
					<FaPhone /> {participant.phone}
				</div>
			</div>
		</div>
	);
};

export default ParticipantDetails;
