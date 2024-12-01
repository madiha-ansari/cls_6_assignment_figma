import React from 'react'
import Image from 'next/image'

const Section = () => {
    return (
        <div style={{ width: "1,280px", height: "488px", }}>
            <div style={{ paddingTop: "112px", paddingRight: "64px", paddingLeft: "64px", paddingBottom: "112px", backgroundColor: "#FFFFFF" }}>
                <center><h1 style={{ fontFamily: "roboto", fontSize: "48px", fontWeight: "700" }}>Our Achievements</h1></center>
                <center><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare,<br />eros dolor interdum nulla, ut commodo diam libero vitae erat.</p></center>
            </div>
            <div style={{ display: "flex", gap: "8px", paddingLeft: "140px" }}>
                <div><Image src={"/List Item.png"} alt='img' height={80} width={268} /></div>
                <div><Image src={"/fifty.png"} alt='img' height={80} width={268} /></div>
                <div><Image src={"/seventy.png"} alt='img' height={80} width={268} /></div>
                <div><Image src={"/hazer.png"} alt='img' height={80} width={268} /></div>
            </div>
        </div>)
}

export default Section
