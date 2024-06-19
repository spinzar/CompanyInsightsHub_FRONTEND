import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { CompanyProfile } from '../../types/company';
import { getCompanyProfile } from '../../api';
import Sidebar from '../../components/sidebar/Sidebar';
import CompanyDashboard from '../../components/company_dashboard/CompanyDashboard';
import Title from '../../components/title/Title';
import LoadingSpinner from '../../components/loading_spinners/LoadingSpinner';
import { formatLargeNonMonetaryNumber } from '../../components/helpers/NumberFormating';

interface Props {

}

const CompanyPage = (props: Props) => {
    let { ticker } = useParams();
    const [company, setCompany] = useState<CompanyProfile>();

    useEffect(() => {
        const getProfileInit = async () => {
            const result = await getCompanyProfile(ticker!);
            setCompany(result?.data[0]);
        }

        getProfileInit();
    }, []);

  return (
    <>
        {company ? (
            <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
  
                <Sidebar />
                <CompanyDashboard ticker={ticker! }>
                    <Title title="Company name" subTitle={company.companyName} />
                    <Title title="Price" subTitle={"$" + company.price.toString()} />
                    <Title title="Sector" subTitle={company.sector} />
                    <Title title='DCF' subTitle={"$" + company.dcf.toString()} />
                    <Title title="Market Cap" subTitle={formatLargeNonMonetaryNumber(company.mktCap).toString()} />
                    <p className='bg-white shadow rounded text-medium text-gray-900 p-3 mt-1 m-4'>
                        {company.description}
                    </p>
                </CompanyDashboard>
  
            </div>
        ) : (
            <LoadingSpinner />
            // <div>Company not found</div>
        )}
    </>
  )
}

export default CompanyPage