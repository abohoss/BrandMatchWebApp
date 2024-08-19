import React from 'react'

const AboutUs = () => {
  return (
    <>
          <div id="aboutUs" 
        className='p-5 m-0 text-left bg-image '
        style={{ backgroundImage: "url(src/assets/images/burnOut.jpg)", height: '500px'}}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex p-5 justify-content-left align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Survive career burnout</h1>
              <h4 className='mb-3'>Revitalize Your Career Without the Hassle </h4>
              <span>We help you overcome career burnout by creating a powerful personal brand<br></br> for you. Find partners, fund your brand, and let us handle the rest.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs