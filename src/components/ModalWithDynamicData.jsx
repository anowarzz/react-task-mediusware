import React, { useEffect } from "react";
import { useState } from "react";

const ModalWithDynamicData = ({
  contacts,
  setContacts,
  apiURL,
  setApiURL,
  allContactsURL,
  usaContactsURL,
}) => {
  console.log(setContacts);

  const [evenNumbers, setEvenNumbers] = useState(false);

  const handleEvenId = (value) => {
    setEvenNumbers(value);

    if (evenNumbers) {
      const evenIdNumbers = contacts?.filter(
        (contact) => contact?.id % 2 === 0
      );
      setContacts(evenIdNumbers);
    }
    if (!evenNumbers) {
      setContacts(contacts);
    }
  };

  return (
    <div>
      <div
        className="modal fade modal-lg modal-dialog-scrollable"
        id="dynamicModal"
        tabIndex="-1"
        aria-labelledby="dynamicModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="dynamicModalLabel">
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
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Index</th>
                    <th scope="col">Number</th>
                    <th scope="col">Country</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts?.map((contact, i) => (
                    <tr key={contact.id}>
                      <td>{i + 1}</td>
                      <td>{contact?.phone}</td>
                      <td scope="row">{contact?.country?.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <div className="d-flex justify-content-between align-items-center w-100">
                <div className="form-check">
                  <input
                    onClick={() => handleEvenId(!evenNumbers)}
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="even"
                  />
                  <label className="form-check-label" htmlFor="even">
                    Only Even
                  </label>
                </div>

                <div className="d-flex gap-2">
                  <button
                    onClick={() => setApiURL(allContactsURL)}
                    className="btn btn-sm text-white"
                    style={{
                      backgroundColor: "#46139f",
                      borderColor: "#46139f",
                    }}
                    type="button"
                  >
                    All Contacts
                  </button>

                  <button
                    onClick={() => setApiURL(usaContactsURL)}
                    className="btn btn-sm text-white"
                    style={{
                      backgroundColor: "#ff7f50",
                      borderColor: "#ff7f50",
                    }}
                    type="button"
                  >
                    US Contacts
                  </button>

                  <button
                    style={{
                      backgroundColor: "white",
                      borderColor: "#46139f",
                      color: "black",
                    }}
                    type="button"
                    className="btn btn-sm"
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

export default ModalWithDynamicData;
