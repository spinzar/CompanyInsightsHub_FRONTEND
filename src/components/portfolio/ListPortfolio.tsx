import React, { SyntheticEvent } from 'react';
import CardPortfolio from './CardPortfolio';

interface Props {
  portfolio: string[];
  onPortfolioDelete: (event: SyntheticEvent) => void;
}

const ListPortfolio = (props: Props) => {
  return (
    <div className="list-portfolio">
      <h3 className="list-portfolio-title">My portfolio</h3>
      <ul className="portfolio-list">
        {props.portfolio && 
          props.portfolio.map((company) => {
            return <CardPortfolio key={company} company={company} onPortfolioDelete={props.onPortfolioDelete} />
          })
        }
      </ul>
    </div>
  );
}

export default ListPortfolio;
