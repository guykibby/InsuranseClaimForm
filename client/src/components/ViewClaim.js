const ViewClaim = ({ claim }) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${claim.customer_id}`}
      >
        View Claim
      </button>

      <div className="modal" id={`id${claim.customer_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Review Claim</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <h2>Claim Details</h2>

              {Object.keys(claim).map((key) => (
                <p key={key}>{`${key}: ${claim[key]}`}</p>
              ))}
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
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

export default ViewClaim;
