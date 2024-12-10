import React, { useState } from 'react';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('rent'); // Default is 'rent'

    return (
        <div className='grid grid-cols-3 border rounded-full p-[7px]'>
            <button
                className={`h-10 text-center font-bold rounded-full flex items-center justify-center text-base 
                    ${activeTab === 'rent' ? 'bg-[#e8f0f7] border border-[#bed2e4] text-[#2e6290]' : 'text-[#556885]'}`
                }
                onClick={() => setActiveTab('rent')}
            >
                للايجار
            </button>

            <button
                className={`h-10 text-center font-bold rounded-full flex items-center justify-center text-base 
                    ${activeTab === 'sell' ? 'bg-[#e8f0f7] border border-[#bed2e4] text-[#2e6290]' : 'text-[#556885]'}`
                }
                onClick={() => setActiveTab('sell')}
            >
                للبيع
            </button>

            <button
                className={`h-10 text-center font-bold rounded-full flex items-center justify-center text-base 
                    ${activeTab === 'swap' ? 'bg-[#e8f0f7] border border-[#bed2e4] text-[#2e6290]' : 'text-[#556885]'}`
                }
                onClick={() => setActiveTab('swap')}
            >
                للبدل
            </button>
        </div>
    );
};

export default Tabs;
