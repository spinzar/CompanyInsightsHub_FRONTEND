import React, { useEffect, useState } from 'react'
import { CompanyCashFlow } from '../../types/company';
import { useOutletContext } from 'react-router';
import { getCashflowStatement } from '../../api';
import Table from '../table/Table';

type Props = {}

const config = [
  {
    label: "Date",
    render: (company: CompanyCashFlow) => company.date,
  },
  {
    label: "Operating Cashflow",
    render: (company: CompanyCashFlow) => company.operatingCashFlow,
  },
  {
    label: "Investing Cashflow",
    render: (company: CompanyCashFlow) =>
      company.netCashUsedForInvestingActivites,
  },
  {
    label: "Financing Cashflow",
    render: (company: CompanyCashFlow) =>
      company.netCashUsedProvidedByFinancingActivities,
  },
  {
    label: "Cash At End of Period",
    render: (company: CompanyCashFlow) => company.cashAtEndOfPeriod,
  },
  {
    label: "CapEX",
    render: (company: CompanyCashFlow) => company.capitalExpenditure,
  },
  {
    label: "Issuance Of Stock",
    render: (company: CompanyCashFlow) => company.commonStockIssued,
  },
  {
    label: "Free Cash Flow",
    render: (company: CompanyCashFlow) => company.freeCashFlow,
  },
];

const CashflowStatement = (props: Props) => {

    const ticker = useOutletContext<string>();
    const [cashflow, setCashflow] = useState<CompanyCashFlow[]>();
    
    useEffect(() => {
        const getCashflowStatementFetch = async () => {
            const result = await getCashflowStatement(ticker);
            setCashflow(result!.data);        
        }

        getCashflowStatementFetch();
    }, []);

  return (
    <div>
        {cashflow ? (
            <Table config={config} data={cashflow} />
        ) : (
            <h2>Loading...</h2>
        )}
    </div>
  )
}

export default CashflowStatement