import React from 'react'
import Image from 'next/image'

const Nafbar = () => {
  return (
    <div>
      <div style={{ width: "1,280ppx", height: "54px", backgroundColor: "#F7F7F7" }} className='Pr-[64px] Pl-[62px] pl-[100px] pr-[100px]'>
        <div className='flex ' style={{ width: "1,154px", height: "54px", paddingTop: "12px", paddingBottom: "12px", gap: "32px" }}>
          <div className='flex gap-16'>
            <div><a href="#" style={{ font: "Roboto", fontWeight: "400", color: "#000000" }}>Phone Number : 03162044275 </a></div>
            <div><a href="#" style={{ font: "Roboto", fontWeight: "400", color: "#000000" }}>Email : info@ddsgnr.com</a></div>
          </div>
          <div style={{ width: "736p", height: "24px", display: "flex", alignItems: "flex-end", flexDirection: "row", gap: "14px", paddingLeft: "380px" }}>
            <div><Image src={"/LinkedIn.webp"} alt='facebook' height={24} width={24} /></div>
            <div><Image src={"/Facebook.webp"} alt='facebook' height={24} width={24} /></div>
            <div><Image src={"/Vector.svg"} alt='facebook' height={24} width={24} /></div>
            <div><Image src={"/Instagram.webp"} alt='facebook' height={24} width={24} /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nafbar