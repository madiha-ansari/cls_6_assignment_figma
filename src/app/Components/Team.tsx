import React from 'react'
import Image from 'next/image'

const Team = () => {
  return (
    <div style={{ width: "1,280px", height: "895px", backgroundColor: "#F7F7F7" }}>
      <br /><br /><br /><br />
      <center> <h1 style={{ fontFamily: "roboto", fontWeight: "700", fontSize: "56px" }} >Our Team </h1>
        <br />
        <p style={{ fontFamily: "roboto", fontWeight: "400", fontSize: "18px" }}>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</p>
      </center>
      <div style={{ width: "1,280px", height: "842px" }}>
        <div style={{ width: "1,280px", height: "209px", display: "flex", gap: "48px", paddingTop: "180px" }}>
          <div><Image src={"/team1.png"} alt='logo' height={"209"} width={"394"} /></div>
          <div><Image src={"/team2.png"} alt='logo' height={"209"} width={"394"} /></div>
          <div><Image src={"/team3.png"} alt='logo' height={"209"} width={"394"} /></div>
        </div>
        <br /><br /><br /><br /><br /><br />
        <div style={{ width: "1,280px", height: "209px", display: "flex", gap: "48px", paddingTop: "180px" }}>
          <div><Image src={"/team4.png"} alt='logo' height={"209"} width={"394"} /></div>
          <div><Image src={"/team5.png"} alt='logo' height={"209"} width={"394"} /></div>
          <div><Image src={"/team6.png"} alt='logo' height={"209"} width={"394"} /></div>
        </div>
      </div>
    </div>
  )
}

export default Team