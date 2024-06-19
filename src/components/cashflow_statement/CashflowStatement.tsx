import React, { useEffect, useState } from 'react'
import { CompanyCashFlow } from '../../types/company';
import { useOutletContext } from 'react-router';
import { getCashflowStatement } from '../../api';
import Table from '../table/Table';
import LoadingSpinner from '../loading_spinners/LoadingSpinner';
import { formatLargeMonetaryNumber } from '../helpers/NumberFormating';

type Props = {}

const config = [
  {
    label: "Date",
    render: (company: CompanyCashFlow) => company.date,
  },
  {
    label: "Operating Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.operatingCashFlow),
  },
  {
    label: "Investing Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.netCashUsedForInvestingActivites),
  },
  {
    label: "Financing Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(
        company.netCashUsedProvidedByFinancingActivities
      ),
  },
  {
    label: "Cash At End of Period",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.cashAtEndOfPeriod),
  },
  {
    label: "CapEX",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.capitalExpenditure),
  },
  {
    label: "Issuance Of Stock",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.commonStockIssued),
  },
  {
    label: "Free Cash Flow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.freeCashFlow),
  },
];

const CashflowStatement = (props: Props) => {

    const ticker = useOutletContext<string>();
    const [cashflow, setCashflow] = useState<CompanyCashFlow[]>();
    
    useEffect(() => {
        // const getCashflowStatementFetch = async () => {
        //     const result = await getCashflowStatement(ticker);
        //     setCashflow(result!.data);        
        // }

        // getCashflowStatementFetch(); //commented for not consuming the free api requests
    }, []);

  return (
    <div>
        {cashflow ? (
            <Table config={config} data={cashflow} />
        ) : (
            // <h2>Loading...</h2>
            <LoadingSpinner />
        )}
    </div>
  )
}

export default CashflowStatement