export default function Button({title, color, onSort, sort}){
    // console.log(title);
    const sortTable = () => {
        // console.log('sort', sort);
        onSort(sort);
        
    }
    return <button onClick={sortTable} style={{color: color}}>{title}</button>
}