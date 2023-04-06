import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/RegistrationStyles.css'
const RegistrationPage = () => {
  return (
    <div>
    <div className='container-register'>
     <div className="content-register">
      <div className="one-register">
       <h1>Creating an account</h1>
      </div>
      <div className="two-register">
       <div className="nickname-register">
         <h2>Nickname</h2>
         <input type="text" />
       </div>
       <div className="pass-register">
         <h2>Password</h2>
         <input type="text" />
       </div>
       <div className="mail-register">
         <h2>Email</h2>
         <input type="text" />
         </div>
      </div>
       <button>Create</button>
       <p>Need an account? <Link style={{color:'#00A8FC'}} to={'/register'}>Register</Link></p>
     </div>
    </div>
    <div className='backgroundAn'> 
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     xmlnssvg="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 1600 900" preserveAspectRatio={"xMidYMax slice"}>
     <defs>
       <linearGradient id="bg">
         <stop offset="0%" style={{stopColor:'rgba(130, 158, 249, 0.06)'}}></stop>
         <stop offset="50%" style={{stopColor:'rgba(76, 190, 255, 0.6)'}}></stop>
         <stop offset="100%" style={{stopColor:'rgba(115, 209, 72, 0.2)'}}></stop>
       </linearGradient>
       <path id="wave" fill="url(#bg)" d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
   s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z" />
     </defs>
     <g>
       <use xlinkHref='#wave' opacity=".3">
         <animateTransform
           attributeName="transform"
           attributeType="XML"
           type="translate"
           dur="10s"
           calcMode="spline"
           values="270 230; -334 180; 270 230"
           keyTimes="0; .5; 1"
           keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
           repeatCount="indefinite" />
       </use>
       <use xlinkHref='#wave' opacity=".6">
         <animateTransform
           attributeName="transform"
           attributeType="XML"
           type="translate"
           dur="8s"
           calcMode="spline"
           values="-270 230;243 220;-270 230"
           keyTimes="0; .6; 1"
           keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
           repeatCount="indefinite" />
       </use>
       <use xlinkHref='#wave' opacty=".9">
         <animateTransform
           attributeName="transform"
           attributeType="XML"
           type="translate"
           dur="6s"
           calcMode="spline"
           values="0 230;-140 200;0 230"
           keyTimes="0; .4; 1"
           keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
           repeatCount="indefinite" />
       </use>
     </g>
   </svg>
     </div>
    </div>
  )
}

export default RegistrationPage