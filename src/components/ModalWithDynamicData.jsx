import React, { useEffect } from 'react';
import { useState } from 'react';

const ModalWithDynamicData = ({contacts, apiURL, setApiURL, allContactsURL, usaContactsURL, openModal, setOpenModal}) => {


const [even, setEven] = useState(false)



const handleEvenId = () => {

    const evenIdNumbers = contacts.filter(contact => contact?.id %2 === 0)

    setc

}



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

{
    contacts?.map((contact, i) => 
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
                onChange={handleEvenId}
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
          onClick={()=> setApiURL(allContactsURL)}
                  className="btn btn-sm btn-outline-primary"
                //   data-bs-toggle="modal"
                //   data-bs-target="#dynamicModal"
                  type="button"
                >
                  All Contacts
                </button>

                <button
        onClick={() => setApiURL(usaContactsURL)}   
                  className="btn btn-sm btn-outline-warning"
                //   data-bs-toggle="modal"
                //   data-bs-target="#dynamicModal"
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

export default ModalWithDynamicData;