import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div style={{ width: "1,280px", height: "800px", backgroundColor: "#FFFFFF", display: "flex" }}>
            <div style={{ padding: "141px" }}>
                <h1 style={{ fontWeight: "700", fontSize: "34px", fontFamily: "sans-serif", }}>Learn New Skills Onlines</h1>
                <h1 style={{ fontWeight: "700", fontSize: "34px", fontFamily: "sans-serif", }}>With Eases</h1>
                <br />
                <p style={{ fontFamily: "roboro", fontWeight: "400", fontSize: "18px" }}>Discover a wide range of courses covering a variety of subjects, taught by
                    <br />
                    expert instructors.
                </p>
                <br />
                <div style={{ display: "flex", gap: "4em" }}>
                    <div className='h-[48px] w-[174px] bg-black text-white' style={{ borderRadius: "10px" }}><button style={{ padding: "10px", }}>Start Learning Now</button></div>
                    <div className='h-[48px] w-[174px] text-black' style={{ borderRadius: "10px", border: "2px solid grey" }}><button style={{ padding: "10px", }}>Explore Courses</button></div>
                </div>
            </div>
            <div>
                <Image src={"/girl.webp"} alt='girl' height={900} width={590} />
            </div>
        </div>
    )
}

export default Hero