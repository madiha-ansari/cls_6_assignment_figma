import React from 'react'
import Image from 'next/image'

const Customer = () => {
    return (
        <div style={{ width: "1,280px", height: "830px", backgroundColor: "#F7F7F7", paddingTop: "200px", paddingLeft: "64px" }}>
            <h1 style={{ fontSize: "48px", fontWeight: "700", fontFamily: "roboto" }}>Customer testimonials</h1>
            <p style={{ fontSize: "18px", fontWeight: "400", fontFamily: "roboto" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div style={{ width: "1,152px", height: "321px", display: "flex", gap: "32px", paddingTop: "140px" }}>
                <div><Image src={"/Content1.png"} alt='logo' height={"321"} width={"362"} /></div>
                <div><Image src={"/Content2.png"} alt='logo' height={"321"} width={"362"} /></div>
                <div><Image src={"/Content3.png"} alt='logo' height={"321"} width={"362"} /></div>
            </div>
        </div>
    )
}

export default Customer
