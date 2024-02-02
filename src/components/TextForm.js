import React, { useState } from 'react';
import Swal from 'sweetalert2';

export default function TextForm(props) {
    const [text, setText] = useState("");
    // this function will complete the top loading bar animation
    function completeLoading() {
        setTimeout(() => {
            props.setProgress(100);
        }, 100);
    }
    
    function convertToUpperCase() {
        // console.log("Upper case button clicked!");
        props.setProgress(40);
        setText(text.toUpperCase());
        completeLoading();
    }
    function convertToLowerCase() {
        // console.log("Upper case button clicked!");
        props.setProgress(50);
        setText(text.toLowerCase());
        completeLoading();
    }

    function clearAll() {
        props.setProgress(70);
        setText('');
        completeLoading();
    }

    function trimExtraSpaces() {
        props.setProgress(30);
        let textArr = text.split(/[ ]+/);
        props.setProgress(70);
        setText(textArr.join(" "));
        completeLoading();
    }

    function copyToClipboard() {
        // console.log(text);
        props.setProgress(50);
        if (text.length !== 0) {
            navigator.clipboard.writeText(text);
            Swal.fire("Text Copied to Clipboard!", "", "success");
            completeLoading();
        }
        else {
            Swal.fire("No text to copy!", "", "error");
            completeLoading();
        }
    }

    function capitalizeText() {
        if (text !== "" && text.trim() !== "") {
            props.setProgress(30);
            let txtArr = [];
            text.toLowerCase().split(/[ ]+/).join(" ").split(" ").filter((e) => { return e.length !== 0; }).forEach(e => {
                txtArr.push(e[0].toUpperCase() + e.slice(1));
                props.setProgress(60);
            });
            // console.log(txtArr);
            setText(txtArr.join(" "));
            completeLoading();
        }
    }

    function handleOnChange(event) {
        // console.log("Text was changed");
        setText(event.target.value);
    }

    return (
        <>
            <div className='container mt-3'>
                <div className="mb-3">
                    <h3 htmlFor="input-text" className="form-label" style={{"color": props.themeColors.textColor}}>Enter Any Text Below</h3>
                    <textarea className="form-control mt-3 bg-transparent" id="input-text" rows="15" style={{ "border": "4px solid purple", 'color': props.themeColors.textColor}} value={text} onChange={handleOnChange} placeholder="Enter Text Here..."></textarea>
                </div>
            </div>
            <div className='container mt-3 d-flex justify-content-center align-items-center flex-wrap gap-4'>
                <button type="button" onClick={convertToUpperCase} className="btn btn-primary">Upper Case</button>
                <button type="button" onClick={convertToLowerCase} className="btn btn-secondary">Lower Case</button>
                <button type="button" onClick={capitalizeText} className="btn btn-info">Capitalize</button>
                <button type="button" onClick={trimExtraSpaces} className="btn btn-danger">Remove Extra Spaces</button>
                <button type="button" onClick={copyToClipboard} className="btn btn-warning">Copy Text to Clipboard</button>
                <button type="button" onClick={clearAll} className="btn btn-success">Clear All</button>
                {/* <button type="button" className="btn btn-dark">Dark</button> */}
            </div>
            <div className='container mt-3' style={{"color": props.themeColors.textColor}}>
                <h3>Text Details</h3>
                <p>{text.split(" ").filter((e) => { return e.length !== 0; }).length} words, {text.length} characters</p>
            </div>
        </>
    );
}
