import ensureSymbol from "../images/ensure-symbol.svg";

const footer = () => {
  return (
    <div className="footer">
      <footer>
        <hr className="primary-divider" align="right"></hr>
        <img src={ensureSymbol} alt="enSURE Symbol" className="App-icon"></img>
        <p className="footerText">Keeping the unexpected, uncomplicated</p>
      </footer>
    </div>
  );
};

export default footer;
