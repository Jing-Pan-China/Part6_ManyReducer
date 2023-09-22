import React from 'react';

const Filter = ({
  searchInput,
  setSearchInput
}) => {
  // const [searchInput, setSearchInput] = useState("")

  const handleChange = (event) => setSearchInput(event.target.value)

  const style = {
    marginBottom: 10
  }

  return <>
    <h2>筛选名言警句</h2>
    <input
      style={style}
      type="text"
      value={searchInput}
      onChange={handleChange}
      placeholder="搜索名言警句"
    />
  </>
}

export default Filter