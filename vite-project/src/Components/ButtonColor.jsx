export default function ButtonColor(props){
    const listButton = props.colors.map(color => <button style={{backgroundColor: color, fontStyleColor: "black"}}>{color}</button>);
    return <div>{listButton}</div>;
}