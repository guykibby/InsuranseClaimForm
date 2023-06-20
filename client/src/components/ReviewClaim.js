import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const EditClaim = ({ claim }) => {
  const [status, setStatus] = useState(claim.status);
  const { getAccessTokenSilently } = useAuth0();
  const statusOptions = ["submitted", "in progress", "approved", "denied"];

  const updateStatus = async (e) => {
    e.preventDefault();
    try {
      const accessToken = await getAccessTokenSilently();
      const body = { status };
      await fetch(
        `${process.env.REACT_APP_API_SERVER_URL}/api/form/${claim.claim_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(body),
        }
      );

      window.location = "/dashboard";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${claim.customer_id}`}
      >
        Review
      </button>

      <div
        className="modal"
        id={`id${claim.customer_id}`}
        onClick={() => setStatus(claim.status)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Review Claim</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setStatus(claim.status)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <h2>Claim Details</h2>

              {Object.keys(claim).map((key) => (
                <p key={key}>{`${key}: ${claim[key]}`}</p>
              ))}
              <select
                id="status"
                className="form-control"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                {statusOptions.map((statusOption) => (
                  <option key={statusOption} value={statusOption}>
                    {statusOption}
                  </option>
                ))}
              </select>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateStatus(e)}
              >
                Save Change
              </button>
              <button
                type="button"
                className="btn-modal-close"
                data-dismiss="modal"
                onClick={() => setStatus(claim.status)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditClaim;
