import React, { SyntheticEvent } from 'react';
import { CompanySearch } from '../types/company';
import AddPortfolio from './portfolio/AddPortfolio';
import { Link } from 'react-router-dom';

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (event: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({ id, searchResult, onPortfolioCreate }) : JSX.Element => {
  return (
    <div className="card" key={id} id={id}>
      <Link to={`/company/${searchResult.symbol}`} className="card-title">
        {searchResult.name} ({searchResult.symbol})
      </Link>
      <p className="card-currency">{searchResult.currency}</p>
      <p className="card-exchange">
        {searchResult.exchangeShortName} - {searchResult.stockExchange}
      </p>
      <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol} />
    </div>
  );
}

export default Card;
