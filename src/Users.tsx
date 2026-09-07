import { use } from "react";
import UserCard from "./UserCard";
export default function User({userDataPromise}){

    const users = use(userDataPromise);
    console.log(users);
    return(
        <div>
            <h3>Users: </h3>
            {
                users.map(user=> <UserCard user = {user}></UserCard> )
            }
        </div>
    );
}