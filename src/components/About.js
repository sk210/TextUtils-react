import React from 'react'
import { useState } from 'react'

export default function About(Props) {
    // const [myStyle,setStyle] = useState({
    //     color:"black",
    //     backgroundColor:"white"
    // });

    const [buttonText,setButtonText] = useState("Enable Dark Mode");


    let myStyle = {
        color: Props.mode === 'dark' ? 'white':'black',
        backgroundColor: Props.mode === 'dark' ? 'black':'white',
        border: "1px solid",
        borderColor: Props.mode === 'dark' ? 'white':'black'
    }
    // const enableMode = () => {
    //     if(myStyle.color === "black"){
    //         setStyle({
    //             color:"white",
    //             backgroundColor:"black",
    //             border: "1px solid white"
    //         });
    //         setButtonText("Enable Light Mode");
    //     }
    //     else{
    //         setStyle({
    //             color:"black",
    //             backgroundColor:"white"
    //         });
    //         setButtonText("Enable Dark Mode");
    //     }
    // }


  return (
    <div classNameName="container" style={myStyle}>
        <h1 className='my-3 mx-3'>About Us</h1>
      <div className="accordion mx-3" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
      </div>
      <div classNameName="container">
        <button className="btn btn-primary my-2 mx-3">{buttonText}</button>
      </div>
    </div>
  )
}
