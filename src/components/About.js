import React, { useState } from 'react'
const About = () => {

  const [btntext, setBtntext] = useState("Dark Mode");

    const [mystyle,setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
        padding: '12px'
    })

    const toggleMode =()=>{
      if(mystyle.color === 'black'){
        setMyStyle({
          color: 'white',
          backgroundColor: 'black',
          padding: '12px',
        })
        setBtntext("Light Mode");
      }
      else{
        setMyStyle({
          color: 'black',
          backgroundColor: 'white',
          padding: '12px',
          
        })
        setBtntext("Dark Mode");
      }
    }
  return (
   <>
   <div className="accordion d-flex justify-content-center m-auto  flex-column w-50 " style={mystyle} id="accordionExample">
    <h1>About Us</h1>
  <div style={mystyle} className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div style={mystyle} className="accordion-item">
    <h2 className="accordion-header">
      <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div style={mystyle} className="accordion-item">
    <h2 className="accordion-header">
      <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className='btn'>
  <button type="button" onClick={toggleMode} className="btn btn-primary">{btntext}</button>

  </div>
</div>
   </>
  )
}

export default About
