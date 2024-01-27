export default function InputForButton({onChangeInput}){
    const inputChange = (event) => {
        onChangeInput(event.target.value)
    }
    return <input type="text" onChange={inputChange}/>
}