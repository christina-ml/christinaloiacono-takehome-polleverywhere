import React, { useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import "./RaffleNav.scss";

// React Icons
import { FaTicketAlt, FaTrophy } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { MdGroups } from "react-icons/md";

// Material UI
import { Box, Tab, Tabs } from "@mui/material";
import styled from "@emotion/styled";

// StyledTab component for setting background color for active Tab from MUI
const StyledTab = styled(Tab)(({ selected }) => (
    {
        backgroundColor: selected ? "lightgrey" : "white",
        border: selected ? "1px solid #f0f0f0" : "1px solid #f0f0f0",
        borderStyle: selected ? "solid solid" : "none solid",
		color: selected ? "rgb(74,74,74)" : "rgb(74,74,74)",
        margin: selected ? "-1px 0px -1px 0px" : "0px",
        "&.Mui-selected": {
            backgroundColor: selected ? "#f2f2f2" : "white",
            color: selected ? "rgb(74,74,74)" : "rgb(74,74,74)",
        },
    }
));

const RaffleNav = () => {
	const {id} = useParams();
	let location = useLocation();
	
	const [currentTab, setCurrentTab] = useState(0);
	const handleTabChange = (_event, selectedTab) => {
		setCurrentTab(selectedTab);
	};

	return (
		location.pathname !== '/' &&
		<div className="RaffleNav">
			<Box>
				<Tabs
					onChange={handleTabChange}
					value={currentTab}
                    indicatorColor="none"
                    color="secondary"
					aria-label="tabs for meeting rooms, bookings, and new room"
				>
					<StyledTab
						label={<><FaTicketAlt fontSize="25px" /><span>All Raffles</span></>}
						style={{
							minWidth: "25%",
							textTransform: "capitalize",
							fontSize: "14px",
						}}
						value={0}
						selected={currentTab === 0}
						component={Link}
						to="/"
					/>
					<StyledTab
						label={<><BsPencilSquare fontSize="20px" /><span>Register</span></>}
						style={{
							minWidth: "25%",
							textTransform: "capitalize",
							fontSize: "14px",
						}}
						value={1}
						selected={currentTab === 1}
						component={Link}
						to={`/raffles/${id}`}
					/>
					<StyledTab
						label={<><MdGroups fontSize="25px" /><span>Participants</span></>}
						style={{
							minWidth: "25%",
							textTransform: "capitalize",
							fontSize: "14px",
						}}
						value={2}
						selected={currentTab === 2}
						component={Link}
						to={`/raffles/${id}/participants`}
					/>
					<StyledTab
						label={<><FaTrophy fontSize="20px" /><span>Pick Winner</span></>}
						style={{
							minWidth: "25%",
							textTransform: "capitalize",
							fontSize: "14px",
						}}
						value={3}
						selected={currentTab === 3}
						component={Link}
						to={`/raffles/${id}/winner`}
					/>
				</Tabs>
			</Box>
		</div>
	);
};

export default RaffleNav;