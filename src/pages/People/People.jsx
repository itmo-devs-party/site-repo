// import React,{useState} from 'react';
// import './People.scss'
// // import
// // accordion component on react

// function People(){
//   const [selected, setSelected] = useState(null);

//   const toggle = (i) => {
//     if (selected === i) {
//       return setSelected(null);
//     }
//     setSelected(i);
//   }
//   return (
//     <div className="wrapper">
//       <div className="accordion">
//         {data.map((item, i) => (
//           <div className='item'>
//           <div className = 'title' key={i} onClick={() => toggle(i)}>
//             <h2> {item.question} </h2>
//           <span> {selected === i ? '-' : '+' }</span>
//           </div>
//           <div className='content'>{item.answer}</div>
//           </div>          
//           ))}
//       </div>
//     </div>
//   )
// }

// export default People;