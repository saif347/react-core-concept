export default function User ({user}){
    console.log(user)
    const {name, email} = user
    return (
        <div className="box">
            <h3>name: {name} </h3>
            <p>email: {email}</p>
        </div>
    )
}