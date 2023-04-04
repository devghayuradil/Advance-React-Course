import {useState} from 'react';
function RangeFunction(){
    const [rangeValue, setRangeValue] = useState(10);
    const [comment, setComment] = useState("");

    function submitHandle(e){
        e.preventDefault();
        if(rangeValue <= 5 && comment.length <= 10){
            alert("please provide a comment explaning why the experience was poor");
        }


        console.log("form submitted..");
        setRangeValue(10);
        setComment("");
    }
    return(
        <div className="App">
            <h2>Feedback</h2>
            <form onSubmit={submitHandle}>
                <label>score: {rangeValue} ⭐</label>
                <br></br>
                <input 
                    type="range"
                    min="0"
                    max="10"
                    value={rangeValue}
                    onChange={e => setRangeValue(e.target.value)}
                />
                <br></br>
                <textarea value={comment} onChange={e => setComment(e.target.value)}></textarea>
                <br></br>
                <button type='submit'>submit</button>
            </form>
        </div>
    );
}

export default RangeFunction;