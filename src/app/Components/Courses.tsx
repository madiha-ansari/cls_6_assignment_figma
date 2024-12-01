import React from 'react'
import Image from 'next/image'

const Courses = () => {
  return (
    <div>
      <div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <center> <h1 style={{ fontFamily: "roboto", fontWeight: "700", fontSize: "56px" }} >Courses</h1>
          <br />
          <p style={{ fontFamily: "roboto", fontWeight: "400", fontSize: "18px" }}>Your Ultimate Guide to learning</p>
        </center>
      </div>
      <br /><br /><br /><br /><br />
      <center><div style={{ height: "40px", width: "436px", display: "flex", gap: "20px" }}>
        <div style={{ fontWeight: "400", fontFamily: "roboto", fontSize: "21px" }}>Popular</div>
        <div style={{ fontWeight: "400", fontFamily: "roboto", fontSize: "21px" }}>Recommended</div>
        <div style={{ fontWeight: "400", fontFamily: "roboto", fontSize: "21px" }}>Best Practice</div>
      </div></center>
      <br /><br /><br /><br />
      <div style={{ height: "1,132", width: "1,152" }}>
        <div style={{ width: "1,312px", height: "534px", display: "flex", gap: "24px", paddingLeft: "40px" }}>
          <div><Image src={"/lap.png"} alt='logo' height={"134"} width={"410"} /></div>
          <div><Image src={"/blogs.png"} alt='logo' height={"134"} width={"410"} /></div>
          <div><Image src={"/blogs2.png"} alt='logo' height={"134"} width={"410"} /></div>
        </div>
        <br /><br /><br /><br />
        <div style={{ height: "1,132", width: "1,152" }}>
          <div style={{ width: "1,312px", height: "534px", display: "flex", gap: "24px", paddingLeft: "40px" }}>
            <div><Image src={"/firsts1.png"} alt='logo' height={"134"} width={"410"} /></div>
            <div><Image src={"/seconds2.png"} alt='logo' height={"134"} width={"410"} /></div>
            <div><Image src={"/third3.png"} alt='logo' height={"134"} width={"410"} /></div>
          </div>
          <br /><br /><br /><br />
          <div><center><button style={{ fontFamily: "roboto", fontWeight: "400", fontSize: "16px", border: "1px solid black", padding: "8px", marginLeft: "80px", borderRadius: "5px" }}>View all courses</button></center></div>
        </div>
        <br /><br />
      </div>
    </div>
  )
}

export default Courses

















