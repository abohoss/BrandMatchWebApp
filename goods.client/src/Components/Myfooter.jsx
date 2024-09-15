import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import '../styles/footer.css';
const styles = {
    fontFamily: 'Montserrat',
    color: 'white',
    backgroundColor: '#231F20'
}
const Myfooter = () => {
    return (
        <div fixed="bottom">
            <MDBFooter id='footer' bgColor='light' className=' text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between p-2'>

                </section>
                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                                <MDBRow>
                                    <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                                        <img src='assets/images/Logo.svg' width="50" height="20" className="d-inline-block align-top"
                                            alt="Logo"></img>
                                    </MDBCol>
                                    <MDBCol md='9' lg='10' xl='10' className='mx-auto mt-1 mb-4'>
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
                                    <a href='#!' className='text-reset no-underline hover-link'>
                                        Marketing
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset no-underline hover-link'>
                                        Media Planning
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset no-underline hover-link'>
                                        Campaign Ideas
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset no-underline hover-link'>
                                        Logistics and Warehousing
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                                <p>
                                    <a href='#!' className='text-reset no-underline hover-link'>
                                        Pricing
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset no-underline hover-link'>
                                        Settings
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset no-underline hover-link'>
                                        Orders
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset no-underline hover-link'>
                                        Help
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact Us</h6>
                                <a href="https://www.google.com/maps/search/+41+Zaker+Hussein+St.+/@30.0437078,31.3347338,19.25z?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3DE"
                                    target="_blank" className='text-reset no-underline hover-link'>
                                    <p>
                                        <MDBIcon color='secondary' icon='home' className='me-2' />
                                        41 Zaker Hussien St. - Nasr City, Cairo - Egypt
                                    </p>
                                </a>

                                <a href="mailto:Info@brandmatch-eg.com" className='text-reset no-underline hover-link'>

                                    <p>
                                        <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                        Info@brandmatch-eg.com
                                    </p>
                                </a>

                                <a href="tel:+201018881991" className='text-reset no-underline hover-link'>

                                    <p>
                                        <MDBIcon color='secondary' icon='phone' className='me-3' />  +2010 1888 1991
                                    </p>
                                </a>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <MDBRow className=' p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    <MDBCol className='text-left'>© 2024 Copyright: BrandMatch.org</MDBCol>
                    <MDBCol className='text-right'>
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
                    </MDBCol>
                </MDBRow>
            </MDBFooter>
        </div>

    )
}

export default Myfooter
