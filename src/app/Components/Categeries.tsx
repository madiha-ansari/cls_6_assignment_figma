import React from 'react'
import Image from 'next/image'

const Categeries = () => {
    return (
        <div style={{ width: "1,280px", height: "1,049px" }}>
            <h1 style={{ paddingTop: "112px", paddingRight: "64px", paddingBottom: "112px", paddingLeft: "260px", fontFamily: "roboto", fontWeight: "600", fontSize: "48px" }}>Explore Courses By Category
                <span><p style={{ fontSize: "18px", width: "786px", height: "27px" }}>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p></span>
            </h1>
            <div style={{ width: "1280px", height: "636px" }}>
                <div style={{ display: "flex", gap: "96px", paddingLeft: "60px" }}>
                    <div><Image src={"/Card.svg"} alt='logo' height={"134"} width={"410"} /></div>
                    <div><Image src={"/Card.jpg"} alt='logo' height={"134"} width={"410"} /></div>
                    <div><Image src={"/Card.png"} alt='logo' height={"134"} width={"410"} /></div>
                </div>
                <br /><br />
                <div style={{ display: "flex", gap: "96px", paddingLeft: "60px" }}>
                    <div><Image src={"/cummi.jpg"} alt='logo' height={"134"} width={"410"} /></div>
                    <div><Image src={"/digi.png"} alt='logo' height={"134"} width={"410"} /></div>
                    <div><Image src={"/self.png"} alt='logo' height={"134"} width={"410"} /></div>
                </div>
                <br /><br />
                <div style={{ display: "flex", gap: "96px", paddingLeft: "60px" }}>
                    <div><Image src={"/bus.png"} alt='logo' height={"134"} width={"410"} /></div>
                    <div><Image src={"/fin.png"} alt='logo' height={"134"} width={"410"} /></div>
                    <div><Image src={"/_con.png"} alt='logo' height={"134"} width={"410"} /></div>
                </div>
                <br /><br /><br /><br />
                <div><center><button style={{ fontFamily: "roboto", fontWeight: "400", fontSize: "16px", border: "1px solid black", padding: "10px", marginLeft: "80px" }}>View all courses</button></center></div>
            </div>
        </div>
    )
}

export default Categeries
