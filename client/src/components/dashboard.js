import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [claims, setClaims] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const getClaims = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_API_SERVER_URL}/api/form`
      );
      const jsonData = await response.json();
      setIsLoading(false);
      setClaims(jsonData);
    } catch (err) {
      setIsLoading(false);
      setHasError(true);
      console.error(err.message);
    }
  };

  useEffect(() => {
    getClaims();
  }, []);

  return (
    <>
      {" "}
      <h2>Total Claims = {claims.length}</h2>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Claim ID </th>
            <th>Customer ID</th>
            <th>Claim Status</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && <p>Loading Claims...</p>}
          {hasError && <p>There was an error loading the Claims.</p>}

          {claims.map((claim) => (
            <tr key={claim.claim_id}>
              <td>{claim.claim_id}</td>
              <td>{claim.customer_id}</td>
              <td>{claim.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Dashboard;
