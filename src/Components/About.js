import React from 'react';
export default function About(props) {
    
  return (
        <>
        <div className="p-2 text-light" style={{backgroundColor: props.mode === 'light'? '#318CE7' : '#380000', marginLeft:"50px", width:"1200px", marginTop:"30px"}}>  

            <h1 style={{marginLeft: '10px', fontWeight: 600, fontSize:50}}>About Us - TextUtils</h1>

            <div className="textwrap">
            <h2 className={`form-control b text-${props.mode === 'light'? 'dark':'light'} `} style={{backgroundColor: props.mode === 'light'? 'white' : 'black',fontWeight: 600, fontSize: 30, border:"black", marginTop:"30px"}}>
            <p>TextUtils is a word counter and character counter utility which can be used to manipulate your text in the way you want. You can remove extra spaces, copy the manipulated text, convert them to uppercase or lowercase, reverse your sentences, listen to your text as well as break the paragraphs into indiviual sentences.</p>
            </h2>
            </div>
            </div>

        </>
  )
  }
