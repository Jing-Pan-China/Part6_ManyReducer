import React, { useState } from 'react';

import CreateNewAnecdoteForm from './components/createNewAnecdoteForm';
import Filter from './components/filter';
import AnecdotesList from './components/anecdotesList';

const App = () => {
  const [searchInput, setSearchInput] = useState("")
  
  return (
    <div id='root'>
      <Filter searchInput={searchInput} setSearchInput={setSearchInput} />
      <AnecdotesList searchInput={searchInput} />
      <CreateNewAnecdoteForm />
    </div>
  )
}

export default App




