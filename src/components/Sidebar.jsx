import React from 'react'
import myImage from '../assets/Image.png'
import SidebarItems from './SidebarItems'
import image from '../assets/Payouts/Navbar/Navbar Icon.png'
import image1 from '../assets/Payouts (1)/Navbar/Navbar Icon.png'
import image2 from '../assets/Payouts (2)/Navbar/Navbar Icon.png'
import image3 from '../assets/Payouts (3)/Navbar/Navbar Icon.png'
import image4 from '../assets/Payouts (4)/Navbar/Navbar Icon.png'
import image5 from '../assets/Payouts (5)/Navbar/Navbar Icon.png'
import image6 from '../assets/Payouts (6)/Navbar/Navbar Icon.png'
import image7 from '../assets/Payouts (7)/Navbar/Navbar Icon.png'
import image8 from '../assets/Payouts (8)/Navbar/Navbar Icon.png'
import image9 from '../assets/Payouts (9)/Navbar/Navbar Icon.png'
import image10 from '../assets/Payouts (10)/Navbar/Navbar Icon.png'
function Sidebar() {
  return (
    <div className='h-[882px] bg-blue-400 inline-flex flex-col items-start'>
        <div className='flex w-[224px] px-4 py-[10px] flex-col items-center gap-4 bg-secondaryNavbar flex-grow shrink flex-basis-0'>
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
                
                <SidebarItems image={image} text="Home"/>
                <SidebarItems image={image1} text="Orders"/>
                <SidebarItems image={image2} text="Products"/>
                <SidebarItems image={image3} text="Delivery"/>
                <SidebarItems image={image4} text="Marketing"/>
                <SidebarItems image={image5} text="Analytics"/>
                <SidebarItems image={image6} text="Payouts"/>
                <SidebarItems image={image7} text="Discounts"/>
                <SidebarItems image={image8} text="Audience"/>
                <SidebarItems image={image9} text="Appearence"/>
                <SidebarItems image={image10} text="Plugins"/>

                
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