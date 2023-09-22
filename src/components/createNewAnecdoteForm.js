import React from 'react';
import { useDispatch } from 'react-redux';
import { newAnecdote } from "../reducers/actions/anecdoteActions"

const CreateNewAnecdoteForm = () => {
  const dispatch = useDispatch()
  
  const newAnecdoteHandler = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    if (!!anecdote) {
      dispatch(newAnecdote(anecdote))
    }
    document.getElementById('new-anecdote-form').reset();
  }
  
  return <>
    <h2>Create new anecdote</h2>
    <form id='new-anecdote-form' onSubmit={newAnecdoteHandler}>
      <div><input name="anecdote" /></div>
      <button>create</button>
    </form>
  </>
}

export default CreateNewAnecdoteForm