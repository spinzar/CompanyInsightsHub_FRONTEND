import React, { SyntheticEvent } from 'react';
import DeletePortfolio from './DeletePortfolio';
import { Link } from 'react-router-dom';
import { PortfolioGet } from '../../models/Portfolio';

interface Props {
  company: PortfolioGet;
  onPortfolioDelete: (event: SyntheticEvent) => void;
}

const CardPortfolio = (props: Props) => {
  return (
    <div className="card-portfolio">
      <Link to={`/company/${props.company.symbol}`} className="card-portfolio-title">{props.company.symbol}</Link>
      <DeletePortfolio onPortfolioDelete={props.onPortfolioDelete} portfolio={props.company.symbol} />
    </div>
  );
}

export default CardPortfolio;
