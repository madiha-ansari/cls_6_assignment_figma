import React from 'react'
import Image from 'next/image'

const Logo = () => {
    return (
        <div>
            <div style={{ width: "1,280px", height: "72px", border: "1px", paddingLeft: "64px", paddingRight: "64px", paddingTop: "20px", display: "flex" }}>
                <div><Image src={"/Logo.webp"} alt='logo' height={"50"} width={"160"} /></div>
                <div className='flex gap-10 pl-[110px] pt-[10px]' style={{ boxShadow: "botto" }}>
                    <div style={{ width: "81px", height: "44px" }}>Home</div>
                    <div style={{ width: "81px", height: "44px" }}>Course</div>
                    <div style={{ width: "81px", height: "44px" }}>Services</div>
                    <div style={{ width: "81px", height: "44px" }}>Achivement</div>
                    <div style={{ width: "81px", height: "44px" }}>About Us</div>
                    <div style={{ width: "81px", height: "44px" }}>Testimoal</div>
                    <div><button style={{ borderRadius: "5px", border: "1px solid grey", width: "81px", color: "black", padding: "4p" }}>Login</button></div>
                    <div><button style={{ borderRadius: "5px", width: "81px", backgroundColor: "black", color: "white", padding: "4p" }}>sign up</button></div>
                </div>
            </div>
        </div>
    )
}

export default Logo
