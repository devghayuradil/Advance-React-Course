import { useRef, useState } from "react";

function UncontrolledForm() {
    const formValue = useRef(null);
    const [resultRef, setResultRef] = useState("");
    function submitForm(e) {
        e.preventDefault();
        setResultRef(formValue.current.value);


    }
    return (
        <div>
            <h2>value: {resultRef}</h2>
            <form onSubmit={submitForm}>
                <div>
                    <label>name</label>
                    <input ref={formValue} type="text" />
                </div>
                <div>
                    <button>submit</button>
                </div>
            </form>
        </div>
    );
}

export default UncontrolledForm;