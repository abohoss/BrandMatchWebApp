import React, { useEffect, useRef } from 'react';
import '../styles/fadeIn.css';  // Assuming your CSS is in App.css

const WithFadeIn = (WrappedComponent) => {
  return function FadeInComponent(props) {
    const fadeRef = useRef(null);

    useEffect(() => {
      const element = fadeRef.current;
      element.classList.add('show');
    }, []);

    return (
      <div ref={fadeRef} className="fade-in">
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default WithFadeIn;
