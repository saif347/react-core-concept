import './stu.css'
export default function Singer ({singer}){
    // function addHandler (){
    //     alert ('button clicked')
    // }
    const addHandler = (num)=>{
        alert ('rating' + num + 5);
    }
    // console.log(singer)
    return(
        <div className="student">
            <h3>singer name: {singer.name}</h3>
            <p>age: {singer.age}</p>
            <p>country: {singer.country}</p>
            <p>{singer.alive || 'allah take khoma korun'}</p>
            <button onClick={()=>addHandler(5)}>click me</button>
        </div>
    )
}