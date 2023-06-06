import EditClaim from "./editClaim";

const AdminDash = ({ list }) => {
  return (
    <>
      <h2>Total Claims = {list.length}</h2>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Claim ID </th>
            <th>Customer ID</th>
            <th>Claim Status</th>
          </tr>
        </thead>
        <tbody>
          {list.map((claim) => (
            <tr key={claim.claim_id}>
              <td>{claim.claim_id}</td>
              <td>{claim.customer_id}</td>
              <td>{claim.status}</td>
              <EditClaim claim={claim} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AdminDash;
