import React from 'react';
import { testIncomeStatementData } from './testData';

const data = testIncomeStatementData;

type Props = {
    config: any;
    data: any;
}

const Table = ({config, data}: Props) => {

    // const renderedRows = data.map((company, index) => {
    //     return (
    //         <tr key={`${company.cik}-${index}`}>
    //             {configs.map((val, cellIndex) => {
    //                 return (
    //                     <td key={`${company.cik}-${val.label}-${cellIndex}`}>
    //                         {val.render(company)}
    //                     </td>
    //                 );
    //             })}
    //         </tr>
    //     )
    // });
    const renderedRows = data.map((company: any) => {
        return (
            <tr key={company.cik}>
                {config.map((value: any) => {
                    return <td className='p-3'>{value.render(company)}</td>
                })}
            </tr>
        )
    });

    const renderedHeaders = config.map((value: any) => {
        return (
            <th className='p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider' key={config.label}>
                {value.label}
            </th>
        );
    })

    return (
        <div className='bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8'>
            <table>
                <thead className='min-w-full divide-y divide-gray-200 m-5'>
                    <tr>
                        {renderedHeaders}
                    </tr>
                </thead>
                <tbody>
                    {renderedRows}
                </tbody>
            </table>
        </div>
    )
}

export default Table;
