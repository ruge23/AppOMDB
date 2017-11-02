import React from 'react';

export default function SearchBox(props){
  return(
    <div>
      <h1>Search Movie</h1>
      <div>
        <form onSubmit={props.handleSubmit}>
          <input
            type='text'
            name='movie'
            onChange={props.handleChange}
            placeholder='Movie'
            value={props.searchValue}
          />
          <button>Search</button>
        </form>
      </div>
    </div>
  );
}
