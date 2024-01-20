import './NavBar.scss';

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="NavBar__container">
        <div className="NavBar__container__logo">
            <img 
                src="https://22544793.fs1.hubspotusercontent-na1.net/hubfs/22544793/PE%20Logo-1.png"
                alt="logo"
                height="30px"
                width="30px"
            />
            <div>Raffle App</div>
        </div>
      </div>
    </div>
  )
}

export default NavBar