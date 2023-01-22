import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AllContactsModal from './AllContactsModal';
import USContactsModal from './USContactsModal';

const Problem2 = () => {

// state to store all contacts from server 
const [allContacts, setAllContacts] = useState([])

useEffect(() => {

fetch('https://contact.mediusware.com/api/contacts/')
.then(res => res.json())
.then(data => {
    console.log(data.results)
    setAllContacts(data?.results)
})

}, [])


    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">

                <button className="btn btn-lg btn-outline-primary" data-bs-toggle="modal" data-bs-target="#allContactsModal" type="button" >All Contacts</button>
                

                <button className="btn btn-lg btn-outline-warning"  data-bs-toggle="modal" data-bs-target="#usContactsModal" type="button" >US Contacts</button>
                </div>
                

                <AllContactsModal allContacts={allContacts}/>
                <USContactsModal />
            </div>
        </div>
    );
};

export default Problem2;