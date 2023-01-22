import React from "react";

const AllContactsModal = ({allContacts}) => {
  return (
    <div>
      <div
        className="modal fade modal-lg modal-dialog-scrollable"
        id="allContactsModal"
        tabIndex="-1"
        aria-labelledby="allContactsModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="allContactsModalLabel">
                All Contacts
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">

            <table class="table">
  <thead>
    <tr>
      <th scope="col">Index</th>
      <th scope="col">Number</th>
      <th scope="col">Country</th>

    </tr>
  </thead>
  <tbody>

{
    allContacts?.map((contact, i) => 
        <tr key={contact.id}>
            <td>{i+1}</td>
          <td>{contact?.phone}</td>
          <td scope="row">{contact?.country?.name}</td>
     
        </tr>
    
    )
}

  </tbody>
</table>




            </div>
            <div className="modal-footer">

             <div className="d-flex justify-content-between align-items-center w-100">
             <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
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
                  className="btn btn-sm btn-secondary"
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
