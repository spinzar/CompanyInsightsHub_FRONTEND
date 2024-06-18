import React from 'react';

type Props = {
    config: any[];
    data: any; // Assuming data is an array of CompanyKeyMetrics
}

const RatioList = ({ config, data }: Props) => {

    // console.log('Config:', config);
    // console.log('Data:', data);

    const renderedRows = config.map((row: any, index: number) => {
        // Assuming each label in config corresponds to a property in data (CompanyKeyMetrics)
        return (
            <li className='py-3 sm:py-4' key={index}>
                <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                            {row.label}
                        </p>
                        {row.subTitle && (
                            <p className="text-sm text-gray-500 truncate">
                                {row.subTitle}
                            </p>
                        )}
                    </div>
                    <div className="inline-flex items-center base font-semibold text-gray-900">
                        {row.render(data)} {/* Ensure render function correctly accesses data */}
                    </div>
                </div>
            </li>
        );
    });

    return (
        <div className='bg-gray shadow rounded-lg ml-4 mt-4 mb-4 p-4 sm:p-6'>
            <ul className='divide-y divide-gray-200'>
                {renderedRows}
            </ul>
        </div>
    )
}

export default RatioList;
