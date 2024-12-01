import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div style={{ width: "1,280px", height: "684px", padding: "80px" }}>
      <div style={{ width: "1,280px", height: "82px", display: "flex", gap: "59px", justifyContent: "space-evenly" }}>
        <div>
          <h1 style={{ fontFamily: "roboto", fontSize: "18px", fontWeight: "600" }}>Subscribe to our nesletter</h1>
          <p style={{ fontFamily: "roboto", fontSize: "16px", fontWeight: "400" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        <div>
          <input style={{ height: "48px", width: "265px", border: "1px solid black", paddingLeft: "12px" }} type="text" name="" id="" value="Enter Your Email" />
          <br /><br /><p>By subscribing you agree to with our Privacy Policy</p>
        </div>
        <div>
          <button style={{ height: "48px", width: "119px", border: "1px solid black", borderRadius: "5px", fontWeight: "400", fontSize: "16px" }}>Subscribe</button>
        </div>
      </div>
      <div style={{ width: "1120px", height: "264px", marginTop: "90px", display: "flex", gap: "40px" }}>
        <div><Image src={"/Logo.webp"} alt='logo' height={"40"} width={"130"} /></div>
        <div style={{ width: "250px", height: "225px", paddingLeft: "140px" }}>
          <div><h1 style={{ fontFamily: "roboto", fontSize: "16px", fontWeight: "600" }}>Courses</h1></div><br />
          <div style={{ fontFamily: "roboto", fontSize: "14px", fontWeight: "400" }}>Business</div><br />
          <div style={{ fontFamily: "roboto", fontSize: "14px", fontWeight: "400" }}>Development</div><br />
          <div style={{ fontFamily: "roboto", fontSize: "14px", fontWeight: "400" }}>Technology</div><br />
          <div style={{ fontFamily: "roboto", fontSize: "14px", fontWeight: "400" }}>Design</div><br />
          <div style={{ fontFamily: "roboto", fontSize: "14px", fontWeight: "400" }}>Programming</div>
        </div>
        <div>
          <div style={{ width: "250px", height: "225px", paddingLeft: "140px" }}>
            <div><h1 style={{ fontFamily: "roboto", fontSize: "16px", fontWeight: "600" }}>Courses</h1></div><br />
            <div style={{ fontFamily: "roboto", fontSize: "14px", fontWeight: "400" }}>Business</div><br />
            <div style={{ fontFamily: "roboto", fontSize: "14px", fontWeight: "400" }}>Development</div><br />
            <div style={{ fontFamily: "roboto", fontSize: "14px", fontWeight: "400" }}>Technology</div><br />
            <div style={{ fontFamily: "roboto", fontSize: "14px", fontWeight: "400" }}>Design</div><br />
            <div style={{ fontFamily: "roboto", fontSize: "14px", fontWeight: "400" }}>Programming</div>
          </div>
        </div>
        <div>
          <div style={{ width: "250px", height: "225px", paddingLeft: "140px" }}>
            <div><h1 style={{ fontFamily: "roboto", fontSize: "16px", fontWeight: "600" }}>Courses</h1></div><br />
            <div style={{ fontFamily: "roboto", fontSize: "14px", fontWeight: "400" }}>Business</div><br />
            <div style={{ fontFamily: "roboto", fontSize: "14px", fontWeight: "400" }}>Development</div><br />
            <div style={{ fontFamily: "roboto", fontSize: "14px", fontWeight: "400" }}>Technology</div><br />
            <div style={{ fontFamily: "roboto", fontSize: "14px", fontWeight: "400" }}>Design</div><br />
            <div style={{ fontFamily: "roboto", fontSize: "14px", fontWeight: "400" }}>Programming</div>
          </div>
        </div>
      </div>
      <hr style={{ border: "none", borderTop: "1px solid grey", margin: "20px 0px", marginTop: "60px" }} />
      <div style={{ width: "1,120px", height: "57px", display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "1,120px", height: "24px", display: "flex", gap: "22px", justifyContent: "space-between" }}>
          <div><p>2025 Ddsgnr. All right reserved.</p></div>
          <div><p style={{ textDecoration: "underline" }}>Privicy Policy</p></div>
          <div><p style={{ textDecoration: "underline" }}>Terms of Service</p></div>
          <div><p style={{ textDecoration: "underline" }}>Cookies Setting</p></div>
        </div>
        <div style={{ width: "736p", height: "24px", display: "flex", alignItems: "flex-end", flexDirection: "row", gap: "14px", paddingLeft: "380px" }}>
          <div><Image src={"/LinkedIn.webp"} alt='facebook' height={24} width={24} /></div>
          <div><Image src={"/Facebook.webp"} alt='facebook' height={24} width={24} /></div>
          <div><Image src={"/Vector.svg"} alt='facebook' height={24} width={24} /></div>
          <div><Image src={"/Instagram.webp"} alt='facebook' height={24} width={24} /></div>
        </div>
      </div>
    </div>
  )
}

export default Footer
