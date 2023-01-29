import React from 'react'

export default function About(props) {

    let myStyle = {
        color: props.mode==='dark'?'black':'balck',
        background: props.mode==='light'?'white':'white'
    }
   
    

    return (
        <div className="container" style={myStyle} >
            <h1 className="my-1">About-us</h1>
            <div className="accordion"  id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header"  id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Hi Anish
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                            I am watching harrys react playlist
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Hi Anish
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                        I am watching harrys react playlist
                             </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Hi Anish
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        I am watching harrys react playlist
                            </div>
                    </div>
                </div>
            </div>
            
        </div>

    )
}
