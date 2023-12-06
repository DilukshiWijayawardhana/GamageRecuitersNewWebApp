import React from 'react';
import './Admin.css';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,

}
    from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";

function App() {

    const navigate = useNavigate();

    const navigateToJob = () => {
        navigate('/viwe-job');
    };
    const navigateToVacancy = () => {
        navigate('/viwe-job');
    };
    const navigateToApplicatiom = () => {
        navigate('/viwe-job');
    };

    return (
        <MDBContainer fluid className='p-5 background-radial-gradient overflow-hidden'>

            <MDBRow>

                <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

                    <h1 className="my-3 display-1 fw-bold ls-tight px-5" style={{ color: 'hsl(218, 81%, 95%)' }}>
                        WELCOME  TO  HR<br />

                        <span style={{ color: 'hsl(218, 81%, 75%)' }}>Dashboard</span>
                    </h1>

                    <p className='px-5' style={{ color: 'hsl(218, 81%, 85%)' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                        quibusdam tempora at cupiditate quis eum maiores libero
                        veritatis? Dicta facilis sint aliquid ipsum atque?
                    </p>

                </MDBCol>

                <MDBCol md='5' className='position-relative mb-5'>

                    <MDBCard className='my-5 bg-glass'>
                        <MDBCardBody className='p-5'>

                            <MDBBtn className='w-50 mb-4 center' size='md' onClick={navigateToJob} style={{ fontSize: '1rem' }}>View All Jobs</MDBBtn>

                            <MDBBtn className='w-50 mb-4 center' size='md' onClick={navigateToVacancy} style={{ fontSize: '1rem' }}>Add New Job Vacancy</MDBBtn>

                            <MDBBtn className='w-50 mb-4 center' size='md' onClick={navigateToApplicatiom} style={{ fontSize: '1rem' }}>View All Job Applications</MDBBtn>

                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default App;