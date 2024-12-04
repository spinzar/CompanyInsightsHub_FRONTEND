// src/components/CardList.tsx

import React, { SyntheticEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from './Card';
import { CompanySearch } from '../types/company';

interface Props {
  searchResult: CompanySearch[];
  onPortfolioCreate: (event: SyntheticEvent) => void;
}

const CardList: React.FC<Props> = ({ searchResult, onPortfolioCreate }) => {
  return (
    <>
      {searchResult.length > 0 ? (
        searchResult.map((result) => (
          <Card id={result.symbol} key={uuidv4()} searchResult={result} onPortfolioCreate={onPortfolioCreate} />
        ))
      ) : (
        <p className="no-results-message">
          No results!
        </p>
      )}
    </>
  );
}

export default CardList;
