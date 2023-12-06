import React from 'react';
import './Admin.css'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";

function App() {

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login');
    };

    return (
        <MDBContainer fluid className='p-5 background-radial-gradient overflow-hidden'>

            <MDBRow>

                <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

                    <h1 className="my-3 display-1 fw-bold ls-tight px-5" style={{ color: 'hsl(218, 81%, 95%)' }}>
                        WELCOME  <br />
                        <span style={{ color: 'hsl(218, 81%, 75%)' }}>Gamage Recruiters</span>
                    </h1>

                    <p className='px-5' style={{ color: 'hsl(218, 81%, 85%)' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                        quibusdam tempora at cupiditate quis eum maiores libero
                        veritatis? Dicta facilis sint aliquid ipsum atque?
                    </p>

                </MDBCol>

                <MDBCol md='5' className='position-relative'>

                    <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                    <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                    <MDBCard className='my-5 bg-glass'>
                        <MDBCardBody className='p-5'>
                            <MDBInput wrapperClass='mb-4' label='Frist ame' id='form1' type='text' />
                            <MDBInput wrapperClass='mb-4' label='Last Name' id='form2' type='text' />
                            <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' />
                            <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' />
                            <MDBInput wrapperClass='mb-4' label='Re-Password' id='form5' type='password' />

                            <div className='d-flex justify-content-center mb-4'>
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                            </div>

                            <MDBBtn className='w-50 mb-4 ' size='md' style={{ fontSize: '1rem' }}>sign up</MDBBtn>

                            <p className="px-2 mb-1" style={{ color: 'hsl(241, 2%, 35%, 1)' }}>
                                Already Member ?  <br /></p>

                            <MDBBtn outline className='w-50 mb-4 ' onClick={navigateToLogin} style={{ fontSize: '1rem' }}>
                                sign in
                            </MDBBtn>


                            <div className="text-center">


                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='facebook-f' size="xl" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='twitter' size="xl" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1', }}>
                                    <MDBIcon fab icon='google' size="xl" />
                                </MDBBtn>

                            </div>

                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default App;