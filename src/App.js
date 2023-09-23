import React from 'react';

import CreateNewAnecdoteForm from './components/createNewAnecdoteForm';
import Filter from './components/filter';
import AnecdotesList from './components/anecdotesList';

const App = () => (
  <div>
    <Filter />
    <AnecdotesList />
    <CreateNewAnecdoteForm />
  </div>
)

export default App




