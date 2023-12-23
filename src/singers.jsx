import Singer from "./Singer"
import './stu.css'

export default function Singers(){
    const singers= [
        {id: '55', name: 'arjit sing', age: '38', country: 'india', alive: true},
        {id: '69', name: 'belie ellish', age: '37', country: 'US',  alive: true},
        {id: '104', name: 'ajnuv', age: '29', country: 'india', alive: true},
        {id: '74', name: 'mahfuzur', age: '46', country: 'BD', alive: true},
        {id: '23', name: 'atif aslam', age: '42', country: 'pakistan', alive: true},
        {id: '83', name: 'rahat fateh ali', age: '47', country: 'pak', alive: true},
        {id: '96', name: 'nusrat fateh ali', age: '69', country: 'pak', alive: false},
    ]
    return(
        <div>
            <h2>some famous singers around the world</h2>
            <h3>singers: {singers.length} </h3>
            <div className="students">
                {
                    singers.map(singer =><Singer key={singer.id} singer={singer}></Singer>)
                }
            </div>
        </div>

    )
}