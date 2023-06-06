import ensureLogo from "../images/ensure-logo.svg";
import { NavBarButtons } from "./nav-bar-buttons";

const header = () => {
  return (
    <div className="header">
      <header>
        <img src={ensureLogo} alt="enSURE Logo" className="App-logo"></img>
        <NavBarButtons />
        <hr className="primary-divider" align="left"></hr>
      </header>
    </div>
  );
};

export default header;
