import { useSelector } from 'react-redux';
import React from 'react';
import AnecdotesListItem from './anecdotesListItem'

const AnecdotesList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const { filterValue } = useSelector(state => state.filter)
  
  // 排序名言警句，按投票数降序排列
  const filteredAnecdotes = anecdotes
    .sort((a, b) => b.votes - a.votes)
    .filter(anecdote => !filterValue || anecdote.content.toLowerCase().includes(filterValue.toLowerCase()))

  return <>
    <h2>Anecdotes</h2>
    {filteredAnecdotes.map((anecdote, index) =>
      <AnecdotesListItem key={index} anecdote={anecdote} />
    )}
  </>
}

export default AnecdotesList