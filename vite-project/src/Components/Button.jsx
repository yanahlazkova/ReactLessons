import Div from "./noVisibleDiv";

export default function ButtonColor(onClick){
    const titleButton = "Блин, а Реакт всё таки странный...";
    const onClick = () => <Div/>;
    return <button onClick={onClick} className="buttonColor">{titleButton}</button>
}