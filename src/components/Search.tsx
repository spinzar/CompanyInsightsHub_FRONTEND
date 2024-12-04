// src/components/Search.tsx

import React, { ChangeEvent, SyntheticEvent } from 'react';

interface Props {
  onSearchSubmit: (event: SyntheticEvent) => void;
  search: string;
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <section className="search-section">
      <div className="search-container">
        <form className="search-form" onSubmit={props.onSearchSubmit}>
          <input
            className="search-input"
            id="search-input"
            placeholder="Search companies"
            value={props.search}
            onChange={props.handleSearchChange}
          />
        </form>
      </div>
    </section>
  );
}

export default Search;
