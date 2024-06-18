import React, { SyntheticEvent } from 'react';

interface Props {
  onPortfolioDelete: (event: SyntheticEvent) => void;
  portfolio: string;
}

const DeletePortfolio = (props: Props) => {
  return (
    <div className="delete-portfolio-container">
      <form onSubmit={props.onPortfolioDelete} className="delete-portfolio-form">
        <input hidden value={props.portfolio} />
        <button className="delete-portfolio-button">X</button>
      </form>
    </div>
  );
}

export default DeletePortfolio;
