import './App.css'
import './stu.css'
import Singers from './singers'
import Counter from './counter'
import Users from './users'

function App() {

  return (
    <>
     <h1>React core concept</h1>
     <Users></Users>
     <Counter></Counter>
     <Students></Students>
     <Singers></Singers>
     
     
    </>
  )
}

export default App

function Students (){
  const students =[
    {id: '1', name: 'nami', grade: '7', age: '12', balPakna: true },
    {id: '2', name: 'robin', grade: '1', age: '5', balPakna: true },
    {id: '3', name: 'boa', grade: '12', age: '16', balPakna: true },
    {id: '4', name: 'shirahoshi', grade: '5', age: '11', balPakna: false },
    {id: '5', name: 'hinata', grade: '9', age: '13', balPakna: false}
  ]
  return (
  <div>
    <h3>students : {students.length} </h3>
      <div className='students'>
      {
        
        students.map(student =><Student key={student.id} student={student}
        ></Student> )
      }
      </div>
  </div>
  )
}

function Student ({student}){
  // const {name, grade, age, balPakna} = {student};
  // const name = student?.name;
  // const grade = student?.grade;
  // const age = student?.age;
  // const chalak = student.balPakna;
  return(
    <div className='student'>
      <h3>name :{student.name}</h3>
      <p>class : {student.grade} </p>
      <p>age : {student.age} </p>
      <p>{student.balPakna? 'balpakna' : 'kochi'}</p>
    </div>
  )
}
