import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
const styles = {
    fontFamily: 'Montserrat',
    color: 'white',
    backgroundColor: '#231F20'
}
const Myfooter = () => {
    return (
        <div fixed="bottom">
            <MDBFooter id='footer' bgColor='light' className=' text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon color='secondary' fab icon='facebook-f' />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon color='secondary' fab icon='twitter' />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon color='secondary' fab icon='google' />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon color='secondary' fab icon='instagram' />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon color='secondary' fab icon='linkedin' />
                        </a>
                    </div>
                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                                <MDBRow>
                                    <MDBCol md='1' lg='1' xl='1.5' className='mx-auto mb-4'>
                                        <img src='src/assets/images/Logo.svg' width="50" height="20" className="d-inline-block align-top"
                                            alt="Logo"></img>
                                    </MDBCol>
                                    <MDBCol md='10' lg='10' xl='10' className='mx-auto mb-4'>
                                        <h6 className='text-uppercase fw-bold mb-4'>
                                            BrandMatch
                                        </h6>
                                    </MDBCol>
                                </MDBRow>
                                <p>
                                    Ready to maximize your brand's potential or revitalize your career? Contact us today to learn more about how BrandMatch can help you grow.
                                </p>
                            </MDBCol>

                            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Marketing
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Media Planning
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Campaign Ideas
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        lesa hn3rf
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Pricing
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Settings
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Orders
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Help
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <MDBIcon color='secondary' icon='home' className='me-2' />
                                    New Cairo, Cairo, Egypt
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                    info@example.com
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2024 Copyright: BrandMatch.com
                </div>
            </MDBFooter>
        </div>

    )
}

export default Myfooter
