import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { voteAnecdote } from "../reducers/actions/anecdoteActions"

const AnecdotesList = ({
  searchInput
}) => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()
  
  // 排序名言警句，按投票数降序排列
  const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes)

  const voteAnecdoteHandler = (id) => {
    dispatch(voteAnecdote(id));
  }

  const filteredAnecdotes = sortedAnecdotes.filter(anecdote => {
    return anecdote.content.toLowerCase().includes(searchInput.toLowerCase());
  });

  return <>
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
  </>
}

export default AnecdotesList