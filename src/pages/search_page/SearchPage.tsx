import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { CompanySearch } from '../../types/company';
import { searchCompanies } from '../../api';
import CardList from '../../components/CardList';
import Hero from '../../components/hero/Hero';
import Navbar from '../../components/navbar/Navbar';
import ListPortfolio from '../../components/portfolio/ListPortfolio';
import Search from '../../components/Search';

interface Props {

}

const SearchPage = (props: Props) => {

    const [search, setSearch] = useState<string>(""); 
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");
  const [portfolio, setPortfolio] = useState<string[]>([]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  const onSearchSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const result = await searchCompanies(search);

    if(typeof result === "string"){
      setServerError(result);
    }
    else if(Array.isArray(result.data)){
      setSearchResult(result.data);
    }
    console.log(searchResult);
  }

  // useEffect(() => {
  //   // Function to fetch and log companies when the component mounts
  //   const fetchAndLogCompanies = async () => {
  //     try {
  //       const companies = await searchCompanies(search);
  //       if (typeof companies === "string") {
  //         console.error('Error fetching companies:', companies);
  //       } else {
  //         console.log('Companies retrieved:', companies);
  //       }
  //     } catch (error) {
  //       console.error('Unexpected error:', error);
  //     }
  //   };

  //   // Call the function when the component mounts
  //   fetchAndLogCompanies();
  // }, []); // Empty dependency array ensures it runs only once on mount

  const onPortfolioCreate = (event: any) => {
    event.preventDefault();
    const exists = portfolio.find((company) => company === event.target[0].value);
    //console.log(event);
    if(!exists){
      const updatedPortfolio = [...portfolio, event.target[0].value];
      setPortfolio(updatedPortfolio);
    }
  }

  const onPortfolioDelete = (event: any) => {
    event.preventDefault();
    const removed = portfolio.filter((company) => {
      return company !== event.target[0].value;
    });

    setPortfolio(removed);
  }

  return (
    <div className="App">
      {/* <Hero /> */}
      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange} />
      <ListPortfolio portfolio={portfolio}  onPortfolioDelete={onPortfolioDelete}/>
      <CardList searchResult={searchResult} onPortfolioCreate={onPortfolioCreate}/>
      {serverError && <h1>{serverError}</h1>}
    </div>
  )
}

export default SearchPage