import React from 'react'
import Row from './Row'

const data = [
    {
        orderID: '#248846',
        status: 'succesfull',
        transactionID: '131634495747',
        date: 'Today, 08:45 PM',
        amount:'₹1,125.00',
    },
    {
        orderID: '#248846',
        status: 'succesfull',
        transactionID: '131634495747',
        date: 'Today, 08:45 PM',
        amount:'₹1,125.00',
    },
    {
        orderID: '#248846',
        status: 'succesfull',
        transactionID: '131634495747',
        date: 'Today, 08:45 PM',
        amount:'₹1,125.00',
    },
    {
        orderID: '#248846',
        status: 'succesfull',
        transactionID: '131634495747',
        date: 'Today, 08:45 PM',
        amount:'₹1,125.00',
    },
    {
        orderID: '#248846',
        status: 'succesfull',
        transactionID: '131634495747',
        date: 'Today, 08:45 PM',
        amount:'₹1,125.00',
    },
    {
        orderID: '#248846',
        status: 'succesfull',
        transactionID: '131634495747',
        date: 'Today, 08:45 PM',
        amount:'₹1,125.00',
    }
    
]

function Body() {
  return (
    <div className='flex flex-col items-start p-8 w-[1152px]'>
        <div className='flex flex-col items-start gap-9 self-stretch'>
            <div className='flex items-center justify-between self-stretch'>
                <p className='text-[#1a181e] text-xl font-medium leading-7'>Overview</p>
                <div className='flex items-center gap-4'>
                    <div className='w-[137px] h-9'>
                        <div className=' flex rounded shrink-0 border-[1px] border-[#d9d9d9] h-9 w-[137px]'>
                            <p className=' text-base font-normal leading-6 pl-[14px] pt-[6px] pb-[6px] pr-[6px]'>This Month</p>
                            <div className='px-[6px] py-[10px] '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M2.27748 5.77748C2.61381 5.44114 3.14013 5.41057 3.511 5.68575L3.61726 5.77748L8 10.1598L12.3827 5.77748C12.7191 5.44114 13.2454 5.41057 13.6163 5.68575L13.7225 5.77748C14.0589 6.11381 14.0894 6.64013 13.8142 7.011L13.7225 7.11726L8.66989 12.1699C8.33355 12.5062 7.80724 12.5368 7.43636 12.2616L7.33011 12.1699L2.27748 7.11726C1.90751 6.74729 1.90751 6.14745 2.27748 5.77748Z" fill="#4D4D4D"/>
                            </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-start gap-[20px] self-stretch'>
                <div className='flex flex-col content-center items-center grow shrink-0 basis-0'>
                    <div className='flex h-[154px] p-5 flex-col items-center gap-4 self-stretch rounded-lg bg-[#146eb4]'>
                        <div className='flex flex-col items-start gap-4 self-stretch'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-2'>
                                    <h4 className=' text-base font-normal leading-6 text-[#f2f2f2]'>Next Payout</h4>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <g clip-path="url(#clip0_39203_197507)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.8856 11.6358C8.8856 12.1266 8.48772 12.5245 7.9969 12.5245C7.50609 12.5245 7.1082 12.1266 7.1082 11.6358C7.1082 11.145 7.50609 10.7471 7.9969 10.7471C8.48772 10.7471 8.8856 11.145 8.8856 11.6358Z" fill="white"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99921 3.89508C7.47557 3.69776 7.99975 3.64614 8.50545 3.74673C9.01115 3.84732 9.47567 4.09561 9.84026 4.4602C10.2048 4.82479 10.4531 5.2893 10.5537 5.79501C10.6543 6.30071 10.6027 6.82488 10.4054 7.30124C10.2081 7.7776 9.87392 8.18475 9.44521 8.47121C9.16624 8.65761 8.85538 8.78746 8.53019 8.85542V8.96969C8.53019 9.26425 8.29141 9.50303 7.99685 9.50303C7.7023 9.50303 7.46352 9.26425 7.46352 8.96969V8.37723C7.46352 8.23578 7.51971 8.10012 7.61973 8.0001C7.71975 7.90008 7.85541 7.84389 7.99685 7.84389C8.3015 7.84389 8.5993 7.75356 8.8526 7.58431C9.1059 7.41506 9.30332 7.1745 9.4199 6.89304C9.53648 6.61159 9.56699 6.30189 9.50756 6.0031C9.44812 5.70431 9.30142 5.42986 9.08601 5.21444C8.87059 4.99903 8.59614 4.85233 8.29735 4.7929C7.99856 4.73347 7.68886 4.76397 7.40741 4.88055C7.12596 4.99713 6.8854 5.19456 6.71615 5.44786C6.5469 5.70116 6.45656 5.99896 6.45656 6.3036C6.45656 6.59815 6.21778 6.83693 5.92323 6.83693C5.62867 6.83693 5.38989 6.59815 5.38989 6.3036C5.38989 5.78799 5.54279 5.28396 5.82924 4.85525C6.1157 4.42653 6.52285 4.09239 6.99921 3.89508Z" fill="white"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99687 1.86745C4.60953 1.86745 1.86354 4.61343 1.86354 8.00078C1.86354 11.3881 4.60953 14.1341 7.99687 14.1341C11.3842 14.1341 14.1302 11.3881 14.1302 8.00078C14.1302 4.61343 11.3842 1.86745 7.99687 1.86745ZM0.796875 8.00078C0.796875 4.02433 4.02042 0.800781 7.99687 0.800781C11.9733 0.800781 15.1969 4.02433 15.1969 8.00078C15.1969 11.9772 11.9733 15.2008 7.99687 15.2008C4.02042 15.2008 0.796875 11.9772 0.796875 8.00078Z" fill="white"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_39203_197507">
                                            <rect width="16" height="16" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>

                            </div>
                            <div className='flex items-center justify-between self-stretch text-[#f2f2f2]'>
                                <div className=' text-[32px] font-medium leading-[38px]'>₹2,312.23</div>
                                <div className='flex items-center'>
                                    <div className='flex items-start gap-2'>
                                        <h1 className=' text-base font-medium leading-6 underline'>23 orders</h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.95696 5.29289C9.34748 4.90237 9.98064 4.90237 10.3712 5.29289L16.3712 11.2929C16.5587 11.4804 16.6641 11.7348 16.6641 12C16.6641 12.2652 16.5587 12.5196 16.3712 12.7071L10.3712 18.7071C9.98065 19.0976 9.34748 19.0976 8.95696 18.7071C8.56643 18.3166 8.56643 17.6834 8.95696 17.2929L14.2498 12L8.95696 6.70711C8.56643 6.31658 8.56643 5.68342 8.95696 5.29289Z" fill="white"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-[370.67px] h-9 relative right-[-0.003px] bottom-0 rounded-lg bg-[#0e4f82] text-[#f2f2f2] justify-between'>
                        <h1 className=' leading-5 text-sm font-normal px-6 py-2'>Next payout date:</h1>
                        <h1 className=' leading-5 text-sm font-medium px-6 py-2'>Today, 04:00PM</h1>
                    </div>
                </div>
                <div className='flex gap-6 content-center items-center grow shrink-0 basis-0 '>
                    <div className='flex flex-col p-5 items-start gap-4 rounded-lg shadow-sm  w-[370.66px] bg-white'>
                        <div className='flex flex-col items-start gap-4 self-stretch'>
                            <div className='flex items-center gap-2'>
                                <h1 className=' text-base leading-4 font-normal'>Amount Pending</h1>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.54966 11.6358C9.54966 12.1266 9.15178 12.5245 8.66096 12.5245C8.17015 12.5245 7.77227 12.1266 7.77227 11.6358C7.77227 11.145 8.17015 10.7471 8.66096 10.7471C9.15178 10.7471 9.54966 11.145 9.54966 11.6358Z" fill="#4D4D4D"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.66328 3.89508C8.13964 3.69776 8.66381 3.64614 9.16951 3.74673C9.67521 3.84732 10.1397 4.09561 10.5043 4.4602C10.8689 4.82479 11.1172 5.2893 11.2178 5.79501C11.3184 6.30071 11.2668 6.82488 11.0694 7.30124C10.8721 7.7776 10.538 8.18475 10.1093 8.47121C9.8303 8.65761 9.51944 8.78746 9.19425 8.85542V8.96969C9.19425 9.26425 8.95547 9.50303 8.66092 9.50303C8.36637 9.50303 8.12758 9.26425 8.12758 8.96969V8.37723C8.12758 8.23578 8.18377 8.10012 8.28379 8.0001C8.38381 7.90008 8.51947 7.84389 8.66092 7.84389C8.96556 7.84389 9.26336 7.75356 9.51666 7.58431C9.76996 7.41506 9.96738 7.1745 10.084 6.89304C10.2005 6.61159 10.2311 6.30189 10.1716 6.0031C10.1122 5.70431 9.96549 5.42986 9.75007 5.21444C9.53466 4.99903 9.2602 4.85233 8.96141 4.7929C8.66263 4.73347 8.35292 4.76397 8.07147 4.88055C7.79002 4.99713 7.54946 5.19456 7.38021 5.44786C7.21096 5.70116 7.12062 5.99896 7.12062 6.3036C7.12062 6.59815 6.88184 6.83693 6.58729 6.83693C6.29274 6.83693 6.05395 6.59815 6.05395 6.3036C6.05395 5.78799 6.20685 5.28396 6.49331 4.85525C6.77976 4.42653 7.18692 4.09239 7.66328 3.89508Z" fill="#4D4D4D"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.66094 1.86745C5.27359 1.86745 2.5276 4.61343 2.5276 8.00078C2.5276 11.3881 5.27359 14.1341 8.66094 14.1341C12.0483 14.1341 14.7943 11.3881 14.7943 8.00078C14.7943 4.61343 12.0483 1.86745 8.66094 1.86745ZM1.46094 8.00078C1.46094 4.02433 4.68449 0.800781 8.66094 0.800781C12.6374 0.800781 15.8609 4.02433 15.8609 8.00078C15.8609 11.9772 12.6374 15.2008 8.66094 15.2008C4.68449 15.2008 1.46094 11.9772 1.46094 8.00078Z" fill="#4D4D4D"/>
                                </svg>
                            </div>
                            <div className='flex items-center justify-between self-stretch'>
                                <h1 className='text-[#1a181e] font-medium text-[32px] leading-[38px]'>₹92,312.20</h1>
                                <div className='flex items-center'>
                                    <div className='flex items-start gap-2'>
                                        <h1 className='text-[#146eb4] text-base leading-6 underline'>13 orders</h1>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <   path fill-rule="evenodd" clip-rule="evenodd" d="M8.62102 5.29289C9.01154 4.90237 9.64471 4.90237 10.0352 5.29289L16.0352 11.2929C16.2228 11.4804 16.3281 11.7348 16.3281 12C16.3281 12.2652 16.2228 12.5196 16.0352 12.7071L10.0352 18.7071C9.64471 19.0976 9.01154 19.0976 8.62102 18.7071C8.23049 18.3166 8.23049 17.6834 8.62102 17.2929L13.9139 12L8.62102 6.70711C8.23049 6.31658 8.23049 5.68342 8.62102 5.29289Z" fill="#146EB4"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-6 content-center items-center grow shrink-0 basis-0'>
                    <div className='flex p-5 flex-col items-start gap-4 rounded-lg shadow-sm w-[370.66px] bg-white'>
                        <div className='flex flex-col items-start gap-4 self-stretch '>
                            <div className='flex items-center gap-2'>
                                <h1 className='text-base font-normal leading-6'>Amount Processed</h1>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.22154 11.6358C9.22154 12.1266 8.82365 12.5245 8.33284 12.5245C7.84202 12.5245 7.44414 12.1266 7.44414 11.6358C7.44414 11.145 7.84202 10.7471 8.33284 10.7471C8.82365 10.7471 9.22154 11.145 9.22154 11.6358Z" fill="#4D4D4D"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.33515 3.89508C7.81151 3.69776 8.33568 3.64614 8.84138 3.74673C9.34709 3.84732 9.8116 4.09561 10.1762 4.4602C10.5408 4.82479 10.7891 5.2893 10.8897 5.79501C10.9903 6.30071 10.9386 6.82488 10.7413 7.30124C10.544 7.7776 10.2099 8.18475 9.78114 8.47121C9.50218 8.65761 9.19132 8.78746 8.86613 8.85542V8.96969C8.86613 9.26425 8.62734 9.50303 8.33279 9.50303C8.03824 9.50303 7.79946 9.26425 7.79946 8.96969V8.37723C7.79946 8.23578 7.85565 8.10012 7.95567 8.0001C8.05569 7.90008 8.19134 7.84389 8.33279 7.84389C8.63743 7.84389 8.93523 7.75356 9.18853 7.58431C9.44184 7.41506 9.63926 7.1745 9.75584 6.89304C9.87242 6.61159 9.90293 6.30189 9.84349 6.0031C9.78406 5.70431 9.63736 5.42986 9.42195 5.21444C9.20653 4.99903 8.93208 4.85233 8.63329 4.7929C8.3345 4.73347 8.0248 4.76397 7.74335 4.88055C7.46189 4.99713 7.22133 5.19456 7.05208 5.44786C6.88283 5.70116 6.7925 5.99896 6.7925 6.3036C6.7925 6.59815 6.55371 6.83693 6.25916 6.83693C5.96461 6.83693 5.72583 6.59815 5.72583 6.3036C5.72583 5.78799 5.87873 5.28396 6.16518 4.85525C6.45164 4.42653 6.85879 4.09239 7.33515 3.89508Z" fill="#4D4D4D"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.33281 1.86745C4.94547 1.86745 2.19948 4.61343 2.19948 8.00078C2.19948 11.3881 4.94547 14.1341 8.33281 14.1341C11.7202 14.1341 14.4661 11.3881 14.4661 8.00078C14.4661 4.61343 11.7202 1.86745 8.33281 1.86745ZM1.13281 8.00078C1.13281 4.02433 4.35636 0.800781 8.33281 0.800781C12.3093 0.800781 15.5328 4.02433 15.5328 8.00078C15.5328 11.9772 12.3093 15.2008 8.33281 15.2008C4.35636 15.2008 1.13281 11.9772 1.13281 8.00078Z" fill="#4D4D4D"/>
                                </svg>
                            </div>
                            <div className='flex justify-between items-center self-stretch'>
                                <div className='flex justify-between items-center'>
                                    <h1 className=' text-[32px] font-medium leading-[38px]'>₹23,92,312.19</h1>
                                </div>
                                <div className='flex justify-between items-center'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div className='flex flex-col items-start gap-6'>
            <div className='flex flex-col items-center gap-6'>
                <h1 className=' text-lg font-medium leading-7'>Transactions | This Month</h1>
                <div className='flex items-start gap-3'>
                    <button className='flex items-center gap-[10px] px-4 py-[6px] bg-[#e6e6e6] rounded-[40px]'>
                        <h1 className='text-[#808080]  text-[14px] font-medium leading-[20px]'>Payouts (22)</h1>
                    </button>
                    <button className='flex items-center gap-[6px] px-4 py-[6px] rounded-[40px] bg-[#146eb4]'>
                    <h1 className='text-[#fff] text-[14px] font-medium leading-[20px]'>Refunds (6)</h1>
                    </button>
                </div>
            </div>
            <div className='flex w-[1152px] pl-3 pt-3 pr-2 pb-3 flex-col items-end'> {/* shadwo i need to put*/ }
                <div id="frm" className='flex flex-col items-end gap-3'>
                    <div className='flex items-center justify-between self-stretch'>
                        <div className='flex items-start w-[248px]'>
                            <div className='flex py-[10px] px-4 items-center gap-2 rounded border-[1px] border-[#d9d9d9]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <g clip-path="url(#clip0_95997_75730)">
                                    <path d="M5.95 10.5263C3.4412 10.5263 1.4 8.48 1.4 5.96491C1.4 3.44982 3.4412 1.40351 5.95 1.40351C8.4588 1.40351 10.5 3.44982 10.5 5.96491C10.5 8.48 8.4588 10.5263 5.95 10.5263ZM10.7443 9.48281C11.4674 8.49474 11.9 7.2814 11.9 5.96491C11.9 2.67579 9.2309 0 5.95 0C2.6691 0 0 2.67579 0 5.96491C0 9.25403 2.6691 11.9298 5.95 11.9298C7.4137 11.9298 8.7542 11.3944 9.7909 10.5116L12.2528 12.9796C12.3893 13.1165 12.5685 13.1853 12.7477 13.1853C12.9269 13.1853 13.1061 13.1165 13.2426 12.9796C13.5163 12.7053 13.5163 12.2618 13.2426 11.9874L10.7443 9.48281Z" fill="#999999"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_95997_75730">
                                    <rect width="14" height="14" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            {/* <h1 className=' text-sm font-normal leading-5 text-[#999]'>Order ID or transaction ID</h1> */}
                            <input type="text" placeholder='Order ID or transaction ID' className=' text-sm font-normal leading-5 text-[#999] bg-transparent' />
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='gap-4 flex content-end items-center'>
                                <div className='flex items-center gap-3'>
                                    <div className='py-[10px] px-4 flex items-center gap-[6px] rounded border-[1px] border-[#d9d9d9]'>
                                        <h1 className=' text-base font-normal leading-3'>Sort</h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.62496 9.93424C1.83324 9.72596 2.17093 9.72596 2.37921 9.93424L4.64295 12.198L6.90669 9.93424C7.11497 9.72596 7.45266 9.72596 7.66094 9.93424C7.86922 10.1425 7.86922 10.4802 7.66094 10.6885L5.02007 13.3294C4.81179 13.5376 4.47411 13.5376 4.26583 13.3294L1.62496 10.6885C1.41668 10.4802 1.41668 10.1425 1.62496 9.93424Z" fill="#4D4D4D"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.6429 2.51564C4.93746 2.51564 5.17624 2.75442 5.17624 3.04897L5.17624 12.9522C5.17624 13.2468 4.93746 13.4856 4.6429 13.4856C4.34835 13.4856 4.10957 13.2468 4.10957 12.9522L4.10957 3.04897C4.10957 2.75442 4.34835 2.51564 4.6429 2.51564Z" fill="#4D4D4D"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3792 6.06695C14.1709 6.27523 13.8332 6.27523 13.6249 6.06695L11.3612 3.8032L9.09745 6.06695C8.88917 6.27523 8.55149 6.27523 8.34321 6.06695C8.13493 5.85867 8.13493 5.52098 8.34321 5.3127L10.9841 2.67183C11.1924 2.46356 11.53 2.46356 11.7383 2.67183L14.3792 5.3127C14.5875 5.52098 14.5875 5.85867 14.3792 6.06695Z" fill="#4D4D4D"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3612 13.4855C11.0667 13.4855 10.8279 13.2468 10.8279 12.9522L10.8279 3.04896C10.8279 2.75441 11.0667 2.51563 11.3612 2.51563C11.6558 2.51563 11.8946 2.75441 11.8946 3.04896L11.8946 12.9522C11.8946 13.2468 11.6558 13.4855 11.3612 13.4855Z" fill="#4D4D4D"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-9 h-9">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M17.9993 11.9414C18.371 11.9414 18.6811 12.2102 18.7435 12.5968L18.75 12.7L18.7495 16.2321C18.7495 17.5585 17.7164 18.655 16.3813 18.7448L16.2153 18.75L3.77794 18.7499C2.44615 18.7499 1.34529 17.7208 1.25525 16.391L1.25 16.2258V12.6863C1.25 12.2749 1.58596 11.9414 2.00027 11.9414C2.37194 11.9414 2.68197 12.2102 2.74442 12.5968L2.75092 12.7L2.75044 16.2321C2.75044 16.7555 3.14596 17.2013 3.65248 17.2534L3.76695 17.2599L16.2217 17.2602C16.7449 17.2602 17.1902 16.8642 17.2423 16.3577L17.2489 16.2429L17.2492 12.6863C17.2492 12.2749 17.585 11.9414 17.9993 11.9414ZM10.0121 1.25C10.3715 1.25038 10.6815 1.51921 10.744 1.90576L10.7505 2.00892L10.7512 10.8297L13.9124 7.67494C14.1433 7.44469 14.4923 7.39342 14.7961 7.54761L14.9083 7.61495L14.9846 7.68297C15.2334 7.92976 15.2646 8.33058 15.0409 8.65049L14.9652 8.73721L10.5142 13.1745L10.4327 13.2409L10.3271 13.3035L10.2368 13.3399L10.155 13.3617L10.0754 13.374L10.0133 13.3765L9.89007 13.3697L9.78548 13.3471L9.70291 13.3166L9.6007 13.2643L9.54241 13.2224L9.4569 13.1479L5.02399 8.726C4.73169 8.43447 4.73275 7.96287 5.02636 7.67264C5.28648 7.41551 5.69029 7.38633 6.01149 7.60986L6.09848 7.68534L9.25064 10.8296L9.24964 1.9952C9.24964 1.61868 9.53272 1.30251 9.90546 1.25619L10.0121 1.25Z" fill="#4D4D4D"/>
                                </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-between w-[1128px] pl-[10px] pt-3 pr-[10px] pb-3 rounded bg-[#f2f2f2]'>
                        <div className=' flex flex-col items-center content-center gap-[-1px] shrink-0'>
                            <div className=' items-center gap-1'>
                                <div className='items-center gap-4'>
                                    <div className='items-center gap-3'>
                                        <div className='flex-col items-start content-center gap-[2px]'>
                                            <h1 className='text-base font-normal leading-5'>Order ID</h1>
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
                                            <h1 className='text-base font-normal leading-5'>Status</h1>
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
                                            <h1 className='text-base font-normal leading-5'>Transaction ID</h1>
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
                                            <h1 className='text-base font-normal leading-5'>Refund Date</h1>
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
                                            <h1 className='text-base font-normal leading-5'>order amount</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=' items-start gap-[90px]'></div>
                        </div>
                    </div>
                </div>
            {data.map((item) => (
                <Row data={item}/>
            ))}
            </div>
            
        </div>
        </div>

    </div>
  )
}

export default Body