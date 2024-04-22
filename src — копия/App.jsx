import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Products from './components/products/Products';
const productsList = [
  {id:1, title: 'jndv', description:'jbnkfd', price:100},
  {id:2, title: 'jnd2', description:'jbnkf2', price:100},
  {id:3, title: 'jnd3', description:'jbnkf3', price:100},
  {id:4, title: 'jnd4', description:'jbnkf4', price:100},
  {id:5, title: 'jnd5', description:'jbnkf5', price:100},
]


function App(){
  const [isAuth, setIsAuth] = useState(true)
  const [users, setUsers] = useState([])
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  function getUsers(){
    fetch('http://localhost:3005/users')
      .then(data => data.json())
      .then(json => setUsers(json))
  }

  useEffect( () => {
    getUsers()
  }, [users])

  function addUser(event){
    event.preventDefault();
    fetch('http://localhost:3005/users',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, password, 'avatarUrl': 'https://joesch.moe/api/v1/random' })
    });
    setName('');
    setPassword('');
  }

  function deleteUser(id){
    fetch(`http://localhost:3005/users/${id}`,{
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  function changeUser(id, event){
    event.preventDefault();
    fetch(`http://localhost:3005/users/${id}`,{
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, password, 'avatarUrl': 'https://joesch.moe/api/v1/random' })
    });
    setName('');
    setPassword('');
  }

  return (
    <div className='App'>
      <form className="form">
        <input type="text" className="input" value={name} onChange={(event) => setName(event.target.value)} placeholder='Name'/>
        <input type="text" className="input" value={password} 
        onChange={(event) => setPassword(event.target.value)} 
        placeholder='Password'/>
        <input type="text" className="input" placeholder='https://joesch.moe/api/v1/random'/>
        <button className="btn" onClick={addUser}>Send</button>
      </form>
      {users.map(user => 
        <div key={user.id}>
          <p>{user.name}</p>
          <img src={user.avatarUrl} className='imgClass' />
          <button onClick={() => deleteUser(user.id)}>Delete</button>
          <button onClick={(event) => changeUser(user.id, event)}>Change</button>
        </div>)}
      
    </div>
  )
}
export default App;
// const initNotes = [
//   {
//     id:1,
//     fields: [
//       {name: 'Prop11', value: 'Value11', isEdit: false},
//       {name: 'Prop12', value: 'Value12', isEdit: false},
//       {name: 'Prop13', value: 'Value13', isEdit: false},
//     ]
//   },
//   {
//     id:2,
//     fields: [
//       {name: 'Prop21', value: 'Value21', isEdit: false},
//       {name: 'Prop22', value: 'Value22', isEdit: false},
//       {name: 'Prop23', value: 'Value23', isEdit: false},
//     ]
//   },
//   {
//     id:3,
//     fields: [
//       {name: 'Prop31', value: 'Value31', isEdit: false},
//       {name: 'Prop32', value: 'Value32', isEdit: false},
//       {name: 'Prop33', value: 'Value33', isEdit: false},
//     ]
//   }
// ]



// function App(){
//   const [notes, setNotes] = useState(initNotes)

//   function startEdit(id, name){
//     setNotes(notes.map(note => {
//       if (note.id === id){
//         const fields = note.fields.map(field => {
//           if (field.name === name){
//             return {...field, isEdit: true}
//           } else {
//             return field
//           }
//         });
//         return {id, fields}
//       } else {
//         return note
//       }
//     }))
//   }

//   function endEdit(id, name){
//     setNotes(notes.map(note => {
//       if (note.id === id){
//         const fields = note.fields.map(field => {
//           if (field.name === name){
//             return {...field, isEdit: false}
//           } else {
//             return field
//           }
//         });
//         return {id, fields}
//       } else {
//         return note
//       }
//     }))
//   }

//   function changeCell(id, name, event){
//     setNotes(notes.map(note => {
//       if (note.id === id){
//         const fields = note.fields.map(field => {
//           if (field.name === name){
//             return {...field, value: event.target.value}
//           } else {
//             return field
//           }
//         });
//         return {id, fields}
//       } else {
//         return note
//       }
//     }))
//   }
//   const rows = notes.map(note => {
//     const cells = note.fields.map(field => {
//       let elem;
//       if (field.isEdit){
//         elem = <input type='text' value={field.value} onChange={(event) => changeCell(note.id, field.name, event)} onBlur={() => endEdit(note.id, field.name)}
//         />
//       } else {
//         elem = <span 
//         onClick={() => startEdit(note.id, field.name)} >{field.value}</span>
//       }
//       return(
//         <div key={field.name} className='cell'>{elem}</div>
//       )
//     })
//     return (
//       <div key={note.id} className='rows'>{cells}</div>
//     )
//   })
//   return (
//     <div className='App'>
//       {rows}
//     </div>
//   )
// }


// const initNotes = [
//   {text: 'Note1', isEdit: false},
//   {text: 'Note2', isEdit: false},
//   {text: 'Note3', isEdit: false},
// ]

// function App(){
//   const [notes, setNotes] = useState(initNotes)

//   function startEdit(index){
//     const copy = [...notes];
//     copy[index].isEdit = true;
//     setNotes(copy)
//   }

//     function endEdit(index){
//     const copy = [...notes];
//     copy[index].isEdit = false;
//     setNotes(copy)
//   }
//     function changeNote(index, event){
//     const copy = [...notes];
//     copy[index].text = event.target.value;
//     setNotes(copy)
//   }

//     const printNotes = notes.map((note, index) => {
//     let elem;
//     if (note.isEdit){
//       elem = <div><input type='text' value={note.text} 
//       onChange={event => changeNote(index, event)} 
//       onBlur={() => endEdit(index)} /></div>
//     } else {
//       elem = <span onClick={() => startEdit(index)} >{note.text}</span>
//     }
//     return (
//       <li key={index}>{elem}</li>
//     )
//   })

//   return (
//     <div className='App'>
//       {printNotes}
//     </div>
//   )
// }

// function App(){
//   const [value, setValue] = useState('Information'),
//         [isEdit, setIsEdit] = useState(false);

//   let elem;
//   if (isEdit){
//     elem = <input type='text' value={value} onChange={(event) => setValue(event.target.value)} onBlur={() => setIsEdit(false)}/>
//   } else {
//     elem = <span onClick={() => setIsEdit(true)}>{value}</span>
//   }
//   return (
//     <div className='App'>
//       {elem}
//     </div>
//   )
// }

// function App(){
//   const [notes, setNotes] = useState([
//     {id:1, name: 'Name1', desc: 'Description1', show:false},
//     {id:2, name: 'Name2', desc: 'Description2', show:false},
//     {id:3, name: 'Name3', desc: 'Description3', show:false},
//   ])

//   let printNotes = notes.map(note => {
//     let desc;
//     if (note.show){
//       desc = <p>Начало {note.desc} Продолжение</p>
//     } else {
//       desc = <p>Начало</p>
//     }
//     return (
//         <div key={note.id}>
//           <h2>{note.name}</h2>
          
//           {desc}
//           <button onClick={() => changeStatus(note.id)}>Read description</button>
//         </div>
//       )
//   })
//   function changeStatus(id){
//     setNotes(notes.map(note => {
//       if (note.id === id){
//         return {...note, show:!note.show}
//       } else {
//         return note
//       }
//     }))
//   }
//   return (
//     <div className='App'>
//       {printNotes}
//     </div>
//   )
// };


