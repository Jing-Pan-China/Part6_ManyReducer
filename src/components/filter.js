import React from 'react';
import { useDispatch } from 'react-redux';
import { filterUpdate } from '../reducers/actions/filterActions'

const Filter = () => {
  const dispatch = useDispatch()

  const onChangeHandler = (event) => dispatch(filterUpdate(event.target.value))

  return <>
    <h2>筛选名言警句</h2>
    <input
      style={{  marginBottom: 10 }}
      type="text"
      onChange={onChangeHandler}
      placeholder="搜索名言警句"
    />
  </>
}

export default Filter