import React from "react";

const AllContactsModal = () => {
  return (
    <div>
      <div
        class="modal fade modal-lg modal-dialog-scrollable"
        id="allContactsModal"
        tabindex="-1"
        aria-labelledby="allContactsModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="allContactsModalLabel">
                All Contacts
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

             <div className="d-flex justify-content-between align-items-center w-100">
             <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                 Only Even
                </label>
              </div>

              <div className="d-flex gap-2">
                <button
                  className="btn btn-sm btn-outline-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#allContactsModal"
                  type="button"
                >
                  All Contacts
                </button>

                <button
                  className="btn btn-sm btn-outline-warning"
                  data-bs-toggle="modal"
                  data-bs-target="#usContactsModal"
                  type="button"
                >
                  US Contacts
                </button>

                <button
                  type="button"
                  class="btn btn-sm btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllContactsModal;
