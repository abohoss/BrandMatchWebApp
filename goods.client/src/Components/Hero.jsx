import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit'

const Hero = () => {
  return (
    <>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url(src/assets/images/hero.jpg)", height: '500px' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>BrandMatch</h1>
              <h4 className='mb-3'>Maximize Your Brand's Potential with BrandMatch </h4>
              <MDBBtn href="#howTo" tag="a" outline size="lg" color='light' rippleColor='dark'>
                Get Started Today
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero