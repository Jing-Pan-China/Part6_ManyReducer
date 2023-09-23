import { useDispatch } from "react-redux"
import { voteAnecdote } from "../reducers/actions/anecdoteActions"

const AnecdotesListItem = ({ anecdote }) => {
  const dispatch = useDispatch()
  const voteAnecdoteHandler = (id) => dispatch(voteAnecdote(id))

  return (
    <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => voteAnecdoteHandler(anecdote.id)}> vote </button>
      </div>
    </div>
  )
}

export default AnecdotesListItem