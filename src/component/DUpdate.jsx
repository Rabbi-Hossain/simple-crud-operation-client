import { useLoaderData } from "react-router-dom";


const DUpdate = () => {

    const lodedUsers = useLoaderData()

    const UpdateHandler =e=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email);
        const updateUser = {name, email}
        fetch(`http://localhost:5000/users/${lodedUsers._id}`,{
            method: 'PUT',
            headers:{
                'Content-Type': "application/json"
            },
            body: JSON.stringify(updateUser)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }

    return (
        <div>
            <h2>{lodedUsers.name}</h2>
            <form onSubmit={UpdateHandler}>
                <input type="text" name="name" defaultValue={lodedUsers.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={lodedUsers.email} id="" />
                <br />
                <input type="submit" value="Update value" />
            </form>
        </div>
    );
};

export default DUpdate;