import ensureLogo from "../images/ensure-logo.svg";

const header = () => {
  return (
    <div className="header">
      <header>
        <img src={ensureLogo} alt="enSURE Logo" className="App-logo"></img>
        <hr className="primary-divider" align="left"></hr>
      </header>
    </div>
  );
};

export default header;
