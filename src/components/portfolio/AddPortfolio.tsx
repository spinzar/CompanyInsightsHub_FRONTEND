// src/components/portfolio/AddPortfolio.tsx

import React, { SyntheticEvent } from 'react';

interface Props {
  onPortfolioCreate: (event: SyntheticEvent) => void;
  symbol: string;
}

const AddPortfolio = (props: Props) => {
  return (
    <form className="add-portfolio-form" onSubmit={props.onPortfolioCreate}>
      <input readOnly hidden value={props.symbol} />
      <button className="add-portfolio-button" type="submit">Add</button>
    </form>
  );
}

export default AddPortfolio;
