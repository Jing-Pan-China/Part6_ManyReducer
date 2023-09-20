



// import { useDispatch, useSelector } from "react-redux"
// import { newAnecdote, voteAnecdote } from "./reducers/actions/anecdoteActions"

// const App = () => {
//   const anecdotes = useSelector(state => state)
//   const dispatch = useDispatch()
//   const [searchInput, setSearchInput]=useState("")

//   // 排序名言警句，按投票数降序排列
//   const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes)

//   const voteAnecdoteHandler = (id) => {
//     dispatch({ type: 'VOTE_ANECDOTE', payload: { id } });
//   }

//   const newAnecdoteHandler = (event) => {
//     event.preventDefault()
//     const anecdote = event.target.anecdote.value
//     if (!!anecdote) {
//       dispatch({type: 'NEW_ANECDOTE',
//         payload: {
//           anecdote
//         }})
//     }
//     document.getElementById('new-anecdote-form').reset();
//   }

//   return (
//     <div>
//       <h2>Anecdotes</h2>
//       {sortedAnecdotes.map(anecdote =>
//         <div key={anecdote.id}>
//           <div>
//             {anecdote.content}
//           </div>
//           <div>
//             has {anecdote.votes}
//             <button onClick={() => voteAnecdoteHandler(anecdote.id)}>vote</button>
//           </div>
//         </div>
//       )}
//       <h2>create new anecdote</h2>
//       <form id='new-anecdote-form' onSubmit={newAnecdoteHandler}>
//         <div><input name="anecdote" /></div>
//         <button>create</button>
//       </form>
//     </div>
//   )
// }

// export default App



  
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';

   

import { newAnecdote, voteAnecdote } from "./reducers/actions/anecdoteActions"

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()
  const [searchInput, setSearchInput] = useState("");
  // 排序名言警句，按投票数降序排列
  const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes)

  const voteAnecdoteHandler = (id) => {
    dispatch({ type: 'VOTE_ANECDOTE', payload: { id } });
  }

  const filteredAnecdotes = sortedAnecdotes.filter(anecdote => {
    return anecdote.content.toLowerCase().includes(searchInput.toLowerCase());
  });
  

  const newAnecdoteHandler = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    if (!!anecdote) {
      dispatch({type: 'NEW_ANECDOTE',
        payload: {
          anecdote
        }})
    }
    document.getElementById('new-anecdote-form').reset();
  }

  return (
    <div>
      <h2>筛选名言警句</h2>
<input
  type="text"
  value={searchInput}
  onChange={(e) => setSearchInput(e.target.value)}
  placeholder="搜索名言警句"
/>

  <h2>Anecdotes</h2>
      
    {filteredAnecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes} 
         <button onClick={() => voteAnecdoteHandler(anecdote.id)}> vote </button>
        </div>
      </div>
  )}


      <h2>create new anecdote</h2>
      <form id='new-anecdote-form' onSubmit={newAnecdoteHandler}>
        <div><input name="anecdote" /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App




