import React, { useState } from "react";

function Search({ renderTopics, setRenderTopics, topics, onChangeMode }) {
  const [search, setSearch] = useState("");

  const onSearch = e => {
    let filterData = [];
    e.preventDefault();
    if (search !== undefined && search !== "") {
      filterData = topics.filter(row => row.title.includes(search));
      setRenderTopics(filterData);
    } else setRenderTopics(topics);
    setSearch("");
  };
  const onChangeSearch = e => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  return (
    <>
      <form onSubmit={e => onSearch(e)}>
        <input
          type="text"
          value={search}
          placeholder="내용을 입력하시오"
          onChange={onChangeSearch}
        />
        <button type="submit">검색</button>
      </form>
    </>
  );
}
export default Search;
