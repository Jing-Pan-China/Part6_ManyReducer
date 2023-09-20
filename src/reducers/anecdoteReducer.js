const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

/*
  ### Action types ###
  1. VOTE_ANECDOTE: Provides an ID of the voted anecdote in the payload.
  2. NEW_ANECDOTE: Provides a new anecdote as a string in the payload.
*/
const anecdoteReducer = (state = initialState, action) => {
  console.log(`state now: ${JSON.stringify(state)}`)
  console.log(`action: ${JSON.stringify(action)}}`)
  switch (action.type) {
    case 'VOTE_ANECDOTE':
      const anecdoteId = action.payload.id
      return state.map(anecdote => anecdote.id === anecdoteId
        ? ({ ...anecdote, votes: anecdote.votes + 1 })
        : anecdote)
    case 'NEW_ANECDOTE':
      const newAnecdote = action.payload.anecdote
      if (state.some(anecdote => anecdote.content === newAnecdote)) {
        return state
      }
      return state.concat(asObject(action.payload.anecdote))
    default: // if none of the above matches, code comes here
      return state
  }
}

export default anecdoteReducer