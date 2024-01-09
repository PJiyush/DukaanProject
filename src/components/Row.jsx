import React from 'react'
// orderID: '#281209',
// status: 'succesfull',
// transactionID: '131634495747',
// date: 'Today, 08:45 PM',
// amount:'₹1,125.00',
function Row({data}) {
    const {orderId, status, transactionID, date, amount } = data
    console.log(data.orderId);
    return (
    <div className='flex items-center justify-between w-[1128px] pl-[10px] pt-3 pr-[10px] pb-3 rounded bg-[#f2f2f2]'>
                    <div className=' flex flex-col items-center content-center gap-[-1px] shrink-0'>
                            <div className=' items-center gap-1'>
                                <div className='items-center gap-4'>
                                    <div className='items-center gap-3'>
                                        <div className='flex-col items-start content-center gap-[2px]'>
                                            <h1 className='text-base font-normal leading-5 text-[#146eb4]'>#248846</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=' items-start gap-[90px]'></div>
                    </div>
                    <div className=' flex flex-col items-center content-center gap-[-1px] shrink-0'>
                            <div className=' items-center gap-1'>
                                <div className='items-center gap-4'>
                                    <div className='items-center gap-3'>
                                        <div className='flex-col items-start content-center gap-[2px]'>
                                            <h1 className='text-base font-normal leading-5'>{status}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=' items-start gap-[90px]'></div>
                    </div>
                    <div className=' flex flex-col items-center content-center gap-[-1px] shrink-0'>
                            <div className=' items-center gap-1'>
                                <div className='items-center gap-4'>
                                    <div className='items-center gap-3'>
                                        <div className='flex-col items-start content-center gap-[2px]'>
                                            <h1 className='text-base font-normal leading-5'>{transactionID}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=' items-start gap-[90px]'></div>
                    </div>
                    <div className=' flex flex-col items-center content-center gap-[-1px] shrink-0'>
                            <div className=' items-center gap-1'>
                                <div className='items-center gap-4'>
                                    <div className='items-center gap-3'>
                                        <div className='flex-col items-start content-center gap-[2px]'>
                                            <h1 className='text-base font-normal leading-5'>{date}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=' items-start gap-[90px]'></div>
                    </div>
                    <div className=' flex flex-col items-center content-center gap-[-1px] shrink-0'>
                            <div className=' items-center gap-1'>
                                <div className='items-center gap-4'>
                                    <div className='items-center gap-3'>
                                        <div className='flex-col items-start content-center gap-[2px]'>
                                            <h1 className='text-base font-normal leading-5'>{amount}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=' items-start gap-[90px]'></div>
                    </div>
    </div>
    )
}

export default Row