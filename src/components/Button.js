export default function Button(props) {
    console.log('products', props.title, props.size, props.color);
    if (Array.isArray(props.title)){
        const listBunnon = props.title.map(item => <button style={{width: props.size}}>{item.title}</button>);
        return listBunnon
    }else {
        return <button style={{width: props.size}} onClick={() => console.log(props.title)}>{props.title}</button>;
    }
}
function buttonClick() {
    
}