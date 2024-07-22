import React, { SyntheticEvent } from 'react';
import CardPortfolio from './CardPortfolio';
import { PortfolioGet } from '../../models/Portfolio';

interface Props {
  portfolio: PortfolioGet[];
  onPortfolioDelete: (event: SyntheticEvent) => void;
}

const ListPortfolio = (props: Props) => {
  return (
    <div className="list-portfolio">
      <h3 className="list-portfolio-title">My portfolio</h3>
      <ul className="portfolio-list">
        {props.portfolio && 
          props.portfolio.map((company, index) => {
            return <CardPortfolio key={index} company={company} onPortfolioDelete={props.onPortfolioDelete} />
          })
        }
      </ul>
    </div>
  );
}

export default ListPortfolio;
