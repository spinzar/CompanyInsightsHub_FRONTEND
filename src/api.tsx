// import axios from "axios";
// import { CompanySearch } from "./types/company";

import axios from "axios";
import { CompanyBalanceSheet, CompanyCashFlow, CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch } from "./types/company";

// const API_KEY = process.env.REACT_APP_API_KEY;

// interface SearchResponse {
//   data: CompanySearch[];
// }

// export const searchCompanies = (query: string): Promise<CompanySearch[] | string> => {
//   if (!API_KEY) {
//     return Promise.reject("API Key is missing");
//   }

//   //`https://financialmodelingprep.com/api/v3/stock/list?apikey=${API_KEY}`
//   return axios.get<SearchResponse>(
//     `https://api.polygon.io/v3/reference/tickers?active=true&limit=100&apiKey=ytI0SlCBw3TrWN1WIOYp9o9BYsMj1_JI`
//     )
//     .then(response => {
//       const companies = response.data.data;
//       console.log('Companies retrieved:', companies); // Log retrieved companies to console
//       return companies;
//     })
//     .catch(error => {
//       if (axios.isAxiosError(error)) {
//         console.error('Error fetching data...', error);
//         return error.message;
//       } else {
//         console.log('Unexpected error: ', error);
//         return "An unexpected error occurred";
//       }
//     });
// };


export interface SearchResponse {
    data: CompanySearch[];
  }
  
  export const searchCompanies = async (query: string) => {
    try {
      const data = await axios.get<SearchResponse>(
        `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`
      );
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        return error.message;
      } else {
        console.log("unexpected error: ", error);
        return "An expected error has occured.";
      }
    }
  };

  export const getCompanyProfile = async (query: string) => {
    try{
      const data = await axios.get<CompanyProfile[]>(
        `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${process.env.REACT_APP_API_KEY}`
      );

      return data;
    } catch(error: any){
      console.log('error message from API2: ', error.message);
    }
  }

  //https://financialmodelingprep.com/api/v3/key-metrics-ttm/AAPL?apikey=EWuWTAQL1XH0h9olxaxbtmDyUSKfTmYd


  export const getKeyMetrics = async (query: string) => {
    try{
      const data = await axios.get<CompanyKeyMetrics[]>(
        `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?apikey=${process.env.REACT_APP_API_KEY}`
      );
      //console.log(data);

      return data;
    } catch(error: any){
      console.log('error message from API2: ', error.message);
    }
  }

  export const getIncomeStatement = async (query: string) => {
    try{
      const data = await axios.get<CompanyIncomeStatement[]>(
        `https://financialmodelingprep.com/api/v3/income-statement/${query}?limit=40&apikey=${process.env.REACT_APP_API_KEY}`
      );
      //console.log(data);

      return data;
    } catch(error: any){
      console.log('error message from API2: ', error.message);
    }
  }

  export const getBalanceSheet = async (query: string) => {
    try{
      const data = await axios.get<CompanyBalanceSheet[]>(
        `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?limit=40&apikey=${process.env.REACT_APP_API_KEY}`
      );
      //console.log(data);

      return data;
    } catch(error: any){
      console.log('error message from API2: ', error.message);
    }
  }

  export const getCashflowStatement = async (query: string) => {
    try{
      const data = await axios.get<CompanyCashFlow[]>(
        `https://financialmodelingprep.com/api/v3/cash-flow-statement/${query}?limit=40&apikey=${process.env.REACT_APP_API_KEY}`
      );
      //console.log(data);

      return data;
    } catch(error: any){
      console.log('error message from API2: ', error.message);
    }
  }