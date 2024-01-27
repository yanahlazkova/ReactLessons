import Table from "./Table";
import Button from "./ButtonTable";
import { useState } from "react";
import { usersArray } from "./listUsers";

export default function ListUsers(){
    const [sortUser, setSortUser] = useState();
    const sortArray = (sort) => {
        setSortUser(sort);
        usersArray.sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    // const sortArray = (sort) => {
    //     usersArray.sort((a, b) => a[sort].localeCompare(b[sort]))
    //     setSortUser(sort);
    //     // console.log(newArr);
    // }
    const sortReset = (sort) => {
        setSortUser(sort);
        usersArray.sort((a, b) => a[sort] - b[sort])}
    return <div>
        <Button title='Sort for "name"' color="red" onSort={sortArray} sort={"name"} />
        <Button title='Sort for "surname"' color="yellow" onSort={sortArray} sort={"surname"} />
        <Button title='Sort for "email"' color="blue" onSort={sortArray} sort={"email"} />
        <Button title='Sort for "phone"'  color="orange" onSort={sortArray} sort={"phone"}/>
        <Button title='Reset'  color="green" onSort={sortReset} sort={"id"} />
        <Table />
    </div>
}