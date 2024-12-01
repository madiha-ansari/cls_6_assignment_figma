import React from 'react'
import Image from 'next/image'

const Banner = () => {
    return (
        <div style={{ width: "1,280px", height: "228px", paddingTop: "80px", paddingBottom: "80px", paddingLeft: "9px", display: "flex", gap: "8em", background: "#F7F7F7" }}>
            <div style={{ width: "320px", height: "68px", fontFamily: "roboto", fontWeight: "700", paddingLeft: "9px", fontSize: "24px" }}>Trusted by 2000+ companies <br /> worldwide</div>
            <div style={{ display: "flex", gap: "8em" }}>
                <div>  <Image src={"/images.webp"} alt='logo' height={140} width={680} /></div>
            </div>
        </div>
    )
}

export default Banner
