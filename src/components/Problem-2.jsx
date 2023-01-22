import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ModalWithDynamicData from './ModalWithDynamicData';


const Problem2 = () => {

    

 // state to open or close the modal
const [openModal, setOpenModal] = useState(false);


// state to set the API URL
const [apiURL, setApiURL] = useState(null)

// API URLS
const allContactsURL = "https://contact.mediusware.com/api/contacts/"
const usaContactsURL = "https://contact.mediusware.com/api/country-contacts/united%20states/"




// function to open modal and and set the api url
const handleContacts = (url) => {

setOpenModal(true)
setApiURL(url)


}



// state to store the contacts 
const [contacts, setContacts] = useState([])


useEffect( () => {

 if(apiURL){
    fetch(apiURL)
    .then(res => res.json())
    .then(data => {
        console.log(data.results)
        setContacts(data?.results)
    })
 }

}, [apiURL])


    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">

                <button  onClick={()=>handleContacts(allContactsURL)} className="btn btn-lg btn-outline-primary" data-bs-toggle="modal" data-bs-target="#dynamicModal" type="button" >All Contacts</button>
                

                <button onClick={()=>handleContacts(usaContactsURL)} className="btn btn-lg btn-outline-warning"  data-bs-toggle="modal" data-bs-target="#dynamicModal" type="button" >US Contacts</button>
                </div>
                

                {
                <ModalWithDynamicData 
                contacts = {contacts}
                setContacts = {setContacts}
                    apiURL = {apiURL}
                    setApiURL = {setApiURL}
                    allContactsURL = {allContactsURL}
                    usaContactsURL = {usaContactsURL} 
                    openModal = {openModal}
                    setOpenModal = {setOpenModal}
                    />
                    
                }


            </div>
        </div>
    );
};

export default Problem2;