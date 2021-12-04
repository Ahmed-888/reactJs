import React, { useState }  from 'react'

export default function TextForm(props) {
    const Upperchange = () =>{
        const newText = text.toUpperCase();
        setText(newText);
    }

    const lowerchange = () =>{
        const newText = text.toLocaleLowerCase();
        setText(newText);
    }

    const capitalize = () => {
        
        let firstchar = text.charAt(0); // storing the first char of the string
        let newText= firstchar.toUpperCase(); // converting that to uppercase
        setText(newText+text.slice(1)); // printing it with rest excluding the first char by using slice

    }

    const ValueChange =(event) =>{
        setText(event.target.value)
    }
    const [text, setText] = useState('Write Something  here');
    return (
        <>
        <div className="container" style={{backgroundColor : props.mode === 'dark'?'#2d2e30':'white'}}>
            <h5 style={{color : props.mode === 'dark'?'white':'#2d2e30'}} >{props.data}</h5>
            <div className="mb-3">
                <textarea className="form-control" onChange={ValueChange} style={{backgroundColor : props.mode=== 'dark'?'#2d2e30':'white'
            , color :props.mode === 'dark'?'white':'#2d2e30'}} value={text} id="myBox" rows="6"></textarea>
            </div>
            <button className=" btn btn-xs btn-primary mx-2" onClick={Upperchange}>UpperCase</button>
            <button className=" btn btn-xs btn-warning mx-2 " onClick={lowerchange}>lowerCase</button>
            <button className=" btn btn-xs btn-danger mx-2" onClick={capitalize}>Capitalize First letter</button>

        </div>
        <div className="container my-3" style={{backgroundColor : props.mode=== 'dark'?'#2d2e30':'white' , color :props.mode === 'dark'?'white':'#2d2e30' }}>
            <h2>Your text Summary ..</h2>
            <p><b>{text.split(" ").length}</b> word and <b>{text.length}</b> characters</p>
            <p>{0.008 *text.split(" ").length} Minutes Riquired to read this</p>
            <h4>Text Preview</h4>
            <p>{text}</p>
        </div>
        </>

    )
}
