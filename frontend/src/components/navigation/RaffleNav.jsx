import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./RaffleNav.scss";

// React Icons
import { FaTicketAlt, FaTrophy } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { MdGroups } from "react-icons/md";

// Material UI
import { Box, Tab, Tabs } from "@mui/material";


import PropTypes from 'prop-types';

function samePageLinkNavigation(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        // Routing libraries handle this, you can remove the onClick handle when using them.
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
        }
      }}
      aria-current={props.selected && 'page'}
      {...props}
    />
  );
}

LinkTab.propTypes = {
  selected: PropTypes.bool,
};

const RaffleNav = ({ currRaffleId, setCurrRaffleId }) => {
	const id = currRaffleId;
	let location = useLocation();
	
	const [currentTab, setCurrentTab] = useState(0);
	const handleTabChange = (_event, selectedTab) => {
		setCurrentTab(selectedTab);
	};

	// console.log("RAFFLENAV", currRaffleId, currentTab, "ID", id)
	
	return (
		location.pathname !== '/' &&
		<div className="RaffleNav">
			<Box>
				<Tabs
					onChange={handleTabChange}
					value={currentTab}
                    color="secondary"
					aria-label="tabs for meeting rooms, bookings, and new room"
					selectionFollowsFocus
				>
					<Tab
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
					<Tab
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
					<Tab
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
					<Tab
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