import { useState } from "react";

function ControlledForm() {
    const [inputValue, setInputValue] = useState("");
    function changeHandle(e) {
        e.preventDefault();
        setInputValue("");
        console.log("form submited..");
    }
    return (
        <div>
            <form onSubmit={changeHandle}>
                <label htmlFor="name">name</label>
                <input
                id="name" 
                onChange={(e) => setInputValue(e.target.value)} 
                type="text"
                name="name"
                value={inputValue}
                ></input>
                <button disabled={!inputValue}>Submit</button>
            </form>
        </div>
    );
}

export default ControlledForm;