import { products } from "./listUsers"
export default function ListBunnon() {
    const listBunnon = products.map(item => <button onClick={() => console.log(item.title)}>{item.title}</button>)
    return <ul>{listBunnon}</ul>
}