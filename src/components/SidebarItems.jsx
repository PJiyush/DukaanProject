import React from 'react'


function SidebarItems(props) {
    return (
        <div className='flex w-52 pt-4 pl-2 pr-2 pb-4 items-start gap-3 rounded cursor-pointer' >
                        <div className='w-[20px] h-[20px] shrink-0 opacity-80' >
                            <img src={props.image} alt="" />
                        </div>
                        <div className='text-[14px] font-medium leading-[20px] text-white'>{props.text}</div>
                    </div>
    )
}

export default SidebarItems