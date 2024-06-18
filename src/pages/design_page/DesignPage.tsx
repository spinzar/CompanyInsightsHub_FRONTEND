import React from 'react';
import Table from '../../components/table/Table';
import RatioList from '../../components/ratio_list/RatioList';
import { CompanyKeyMetrics } from '../../types/company';
import { testIncomeStatementData } from '../../components/table/testData';

type Props = {};

const tableConfig = [
    {
      label: "Market Cap",
      render: (company: CompanyKeyMetrics) => company.marketCapTTM,
    },
    {
      label: "Current Ratio 1",
      render: (company: CompanyKeyMetrics) => company.currentRatioTTM,
    },
    {
      label: "Return On Equity",
      render: (company: CompanyKeyMetrics) => company.roeTTM,
    },
    {
      label: "Cash Per Share",
      render: (company: CompanyKeyMetrics) => company.cashPerShareTTM,
    },
    {
      label: "Current Ratio 2",
      render: (company: CompanyKeyMetrics) => company.currentRatioTTM,
    },
    {
      label: "Return On Equity 2",
      render: (company: CompanyKeyMetrics) => company.roeTTM,
    },
];

const DesignPage = (props: Props) => {
    return (
        <>
            <h2>Design page: This is where I will hold a variety of design aspects of the app</h2>
            <RatioList data={testIncomeStatementData} config={tableConfig} />
            <Table data={testIncomeStatementData} config={tableConfig}/>
        </>
    )
}

export default DesignPage;
