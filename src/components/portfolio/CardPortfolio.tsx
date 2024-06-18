import React, { SyntheticEvent } from 'react';
import DeletePortfolio from './DeletePortfolio';
import { Link } from 'react-router-dom';

interface Props {
  company: string;
  onPortfolioDelete: (event: SyntheticEvent) => void;
}

const CardPortfolio = (props: Props) => {
  return (
    <div className="card-portfolio">
      <Link to={`/company/${props.company}`} className="card-portfolio-title">{props.company}</Link>
      <DeletePortfolio onPortfolioDelete={props.onPortfolioDelete} portfolio={props.company} />
    </div>
  );
}

export default CardPortfolio;
