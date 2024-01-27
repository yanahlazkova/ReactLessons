import {usersArray} from '../components/listUsers'

export default function List() {
    // const userName = products.map((user) => <li key={user.id }>{user.title}</li>);
    const userName = usersArray.map((user, index) => <li key={index + 1}>{user.name + " " + user.surname}</li>)
    console.log("userName", userName);
    return <ul>{userName}</ul>
}