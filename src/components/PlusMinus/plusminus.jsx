import { useState } from "react";
import Buttons from "./buttons";
import Text from "./text";

export default function PlusMinus(){
    const [fontSize, setFontSize] = useState(14);
    const plusFontSize = () => {
        setFontSize(fontSize + 2);
    }
    const minusFontSize = () => {
        setFontSize(fontSize - 2)
    }
    const resetFontSize = () => {
        setFontSize(14);
    }

    return(
        <div>
            <Buttons onChangeFontSize={plusFontSize} title={"+"} />
            <Buttons onChangeFontSize={minusFontSize} title={"-"}/>
            <Buttons onChangeFontSize={resetFontSize} title={"RESET"}/>
            <p>fontSize: {fontSize}</p>
            <Text size={fontSize} />
        </div>
    )
}