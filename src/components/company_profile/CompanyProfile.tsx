import React, { useEffect, useState } from 'react';
import { CompanyKeyMetrics } from '../../types/company';
import { useOutletContext } from 'react-router-dom';
import { getKeyMetrics } from '../../api';
import RatioList from '../ratio_list/RatioList';

interface Props {}

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

const CompanyProfile = (props: Props) => {
    const ticker = useOutletContext<string>();
    const [companyData, setCompanyData] = useState<CompanyKeyMetrics>();

    useEffect(() => {
        const getCompanyKeyMetrics = async () => {
            const value = await getKeyMetrics(ticker);
            // console.log('Fetched company data:', value?.data[0]);
            setCompanyData(value?.data[0]);
        };

        getCompanyKeyMetrics();
    }, [ticker]);

    return (
        <>
            {companyData ? (
                <RatioList data={companyData} config={tableConfig} />
            ) : (
                <h2>Loading data...</h2>
            )}
        </>
    )
}

export default CompanyProfile;
