import React from "react";

const USContactsModal = () => {
  return (
    <div>
      <div
        class="modal fade modal-lg modal-dialog-scrollable"
        id="usContactsModal"
        tabindex="-1"
        aria-labelledby="usContactsModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="usContactsModalLabel">
                US Contacts
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
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
                class="btn btn-secondary"
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
