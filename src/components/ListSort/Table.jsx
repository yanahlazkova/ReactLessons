import { usersArray } from "../listUsers";
//строит таблицу с заговолками и данными пользователей
export default function Table(){
    // получим заголовки таблицы
    const arrayKeys = [];
    for (const item in usersArray[0]){
        arrayKeys.push(item);
    }
    const theadTable = arrayKeys.map(keyArray => <th>{keyArray}</th>);

    // Получим данные пользователей
    const arrayUsers = [];
    let numberLine = 0;
    for (const user of usersArray) {
        numberLine++;
        const item = arrayKeys.map((key) => <td key={user[key]}>{key == "id" ? numberLine : user[key]}</td>)
        arrayUsers.push(<tr>{item}</tr>)
    }
    return (
        <table>
            <caption><h2>Table of users</h2></caption>
            {/* -- Шапка таблицы -- */}
            <thead>
                <tr>
                    {theadTable}
                </tr>
            </thead>
            {/* Список пользователей */}
            {arrayUsers}
        </table>
    )
}