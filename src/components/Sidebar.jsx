import React from 'react'
import myImage from '../assets/Image.png'
function Sidebar() {
  return (
    <div className='h-[882px] bg-blue-400 inline-flex flex-col items-start'>
        <div className='flex w-[224px] px-4 py-[10px] flex-col items-center gap-6 bg-secondaryNavbar flex-grow shrink flex-basis-0'>
            <div className='flex  w-48 align-middle gap-[12px]' > 
                <div className=' w-10 h-10 shrink-0'>
                    <img src={myImage} className='w-[39px] h-[39px] left-[0.5px] top-[0.5px] rounded' alt="" />
                </div>
                <div className='flex flex-col justify-center items-start gap-1 grow shrink-0 basis-0 '>
                    <div className=' self-stretch text-[15px] font-medium leading-[22px] text-white'>Nishyan</div> {/* need to change font family */}
                    <div className=' self-stretch text-[13px] font-normal leading-[16px] underline text-white opacity-80'>visit store</div> {/* need to change font family */}
                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='w-[20px] h-[20px] shrink-0'>
                    <path d="M2.84685 7.22185C3.26727 6.80143 3.92516 6.76321 4.38876 7.10719L4.52157 7.22185L10 12.6997L15.4784 7.22185C15.8988 6.80143 16.5567 6.76321 17.0203 7.10719L17.1532 7.22185C17.5736 7.64227 17.6118 8.30016 17.2678 8.76376L17.1532 8.89657L10.8374 15.2124C10.4169 15.6328 9.75905 15.671 9.29545 15.327L9.16264 15.2124L2.84685 8.89657C2.38438 8.43411 2.38438 7.68431 2.84685 7.22185Z" fill="white"/>
                </svg>
                </div>
            </div>
            <div className='flex flex-col items-start gap-1 grow shrink-0 basis-0'>
                <div className='flex w-52 pt-4 pl-2 pr-2 pb-4 items-start gap-3 rounded bg-black' >
                    <div className='w-[20px] h-[20px] shrink-0 opacity-80' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g opacity="0.8">
                                <path d="M16.9398 18.75H13.0675C12.7165 18.75 12.3797 18.6111 12.1307 18.3636C11.8816 18.1162 11.7407 17.7802 11.7385 17.4292V12.1622H8.22722V17.4292C8.22505 17.7802 8.08407 18.1162 7.83507 18.3636C7.58606 18.6111 7.24925 18.75 6.89818 18.75H3.02593C2.62123 18.75 2.2331 18.5892 1.94693 18.3031C1.66077 18.0169 1.5 17.6288 1.5 17.2241V7.99465C1.50032 7.75707 1.55611 7.52284 1.66293 7.31062C1.76975 7.0984 1.92465 6.91405 2.11529 6.77227L9.15426 1.55457C9.41825 1.35686 9.73919 1.25 10.069 1.25C10.3988 1.25 10.7198 1.35686 10.9837 1.55457L17.8832 6.76406C18.0665 6.91176 18.2136 7.09945 18.3131 7.31275C18.4126 7.52605 18.462 7.75931 18.4575 7.99465V17.2241C18.4586 17.4241 18.4201 17.6223 18.3443 17.8074C18.2686 17.9925 18.1569 18.1608 18.0159 18.3026C17.8749 18.4444 17.7072 18.5569 17.5225 18.6337C17.3378 18.7105 17.1398 18.75 16.9398 18.75ZM13.1496 17.3553H16.9562C16.9896 17.3532 17.0209 17.3385 17.0438 17.3141C17.0666 17.2897 17.0793 17.2575 17.0793 17.2241V7.99465C17.08 7.97543 17.0758 7.95635 17.0672 7.93915C17.0586 7.92195 17.0458 7.90718 17.03 7.89621L10.1141 2.68671C10.0911 2.67119 10.064 2.6629 10.0362 2.6629C10.0084 2.6629 9.98128 2.67119 9.95825 2.68671L2.92748 7.90441C2.91051 7.91673 2.89653 7.93271 2.88659 7.95117C2.87664 7.96964 2.87099 7.99011 2.87006 8.01106V17.2241C2.87006 17.2589 2.88389 17.2923 2.9085 17.3169C2.93312 17.3415 2.96651 17.3553 3.00132 17.3553H6.80794V12.0228C6.81009 11.6905 6.94303 11.3725 7.17796 11.1376C7.41289 10.9027 7.73091 10.7697 8.06314 10.7676H11.878C12.0439 10.7665 12.2084 10.7981 12.3621 10.8606C12.5158 10.9231 12.6557 11.0153 12.7737 11.1318C12.8918 11.2484 12.9858 11.387 13.0503 11.5399C13.1148 11.6928 13.1485 11.8569 13.1496 12.0228V17.3553Z" fill="white"/>
                            </g>
                        </svg>
                    </div>
                    <div className='text-[14px] font-medium leading-[20px] text-white'>Home</div>
                </div>
            </div>
        <div className='flex w-48 pl-[6px] pr-[6px] pt-3 pb-3 flex-col items-start gap-[10px] rounded bg-tertiaryNavbar'>
            <div className='flex items-center gap-3'>
                <div className=' p-[6px] items-start gap-[10px] rounded bg-black/10'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.00312 3.79727C2.42636 3.79727 1.80313 4.35527 1.80313 5.24727V18.7473C1.80313 19.6393 2.42636 20.1973 3.00312 20.1973H21.0031C21.5799 20.1973 22.2031 19.6393 22.2031 18.7473V15.8473H17.0032C14.8769 15.8473 13.1532 14.1236 13.1532 11.9973C13.1532 9.87097 14.8769 8.14727 17.0032 8.14727H22.2031V5.24727C22.2031 4.35527 21.5799 3.79727 21.0031 3.79727H3.00312ZM23.8031 8.14727V5.24727C23.8031 3.65398 22.6355 2.19727 21.0031 2.19727H3.00312C1.37075 2.19727 0.203125 3.65398 0.203125 5.24727V18.7473C0.203125 20.3405 1.37075 21.7973 3.00312 21.7973H21.0031C22.6355 21.7973 23.8031 20.3405 23.8031 18.7473V15.8473H23.8532V8.14727H23.8031ZM16.0032 11.9473C16.0032 11.4778 16.3837 11.0973 16.8532 11.0973H18.1532C18.6226 11.0973 19.0032 11.4778 19.0032 11.9473C19.0032 12.4167 18.6226 12.7973 18.1532 12.7973H16.8532C16.3837 12.7973 16.0032 12.4167 16.0032 11.9473ZM14.8532 11.9973C14.8532 10.8099 15.8158 9.84727 17.0032 9.84727H22.1532V14.1473H17.0032C15.8158 14.1473 14.8532 13.1847 14.8532 11.9973Z" fill="white"/>
                    </svg>
                </div>
                <div className='flex flex-col items-start gap-[2px]'>
                    <div className=' text-[13px] font-normal leading-4 opacity-80 text-white'>Available Credits</div>
                    <div className=' text-[16px] font-medium leading-6 text-white'>222.10</div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Sidebar