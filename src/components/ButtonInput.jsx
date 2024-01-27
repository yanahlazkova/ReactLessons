import { useState } from "react"
import InputForButton from "./InputForButton";

import ButtonForInput from "./ButtonForInput"
export default function ButtonInput(){
    const [textInput, setTextInput] = useState();
    const displayText = (event) => {
        setTextInput(event)
        // console.log(textInput);
    }
    return <div>
        <InputForButton onChangeInput={displayText} />
        <ButtonForInput title={textInput}/>
    </div>
}