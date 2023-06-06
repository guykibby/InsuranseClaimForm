import React, { useState } from "react";

const EditClaim = ({ claim }) => {
  const [status, setStatus] = useState(claim.status);

  const updateStatus = async (e) => {
    e.preventDefault();
    try {
      const body = { status };
      await fetch(`${process.env.REACT_APP_API_URL}/${claim.customer_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

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
        Edit
      </button>

      <div
        className="modal"
        id={`id${claim.customer_id}`}
        onClick={() => setStatus(claim.status)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Claim</h4>
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
              <input
                type="text"
                className="form-control"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
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
                className="btn btn-danger"
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
