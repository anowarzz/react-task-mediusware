import React from "react";

const USContactsModal = () => {
  return (
    <div>
      <div
        className="modal fade modal-lg modal-dialog-scrollable"
        id="usContactsModal"
        tabIndex="-1"
        aria-labelledby="usContactsModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="usContactsModalLabel">
                US Contacts
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
            <button
                className="btn btn-outline-primary"
                data-bs-toggle="modal"
                data-bs-target="#allContactsModal"
                type="button"
              >
                All Contacts
              </button>

              <button
                className="btn btn-outline-warning"
                data-bs-toggle="modal"
                data-bs-target="#usContactsModal"
                type="button"
              >
                US Contacts
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default USContactsModal;
