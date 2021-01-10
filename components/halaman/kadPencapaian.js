import React from "react"
import { Chrono } from "react-chrono";

const KadPencapaian = () => {
  const items = [
    {
    title: "Mac 2020",
    cardTitle: "CSVT Amatur",
    cardSubtitle:"Lokasi: PERSADA PLUS, Kedudukan: Tempat Ketiga",
    media: {
      type: "IMAGE",
      source: {
        url: "https://i.ibb.co/fn9xmCf/88116389-3042322009151155-4046834635739496448-n.jpg"
      }
    }
  },
  {
    title: "Disember 2019",
    cardTitle: "Gedik Santai",
    cardSubtitle:"Lokasi: UNITEN Sports Arena, Kedudukan: Tempat Ketiga",
    media: {
      type: "IMAGE",
      source: {
        url: "https://i.ibb.co/Tk6XZg6/76710830-2812823968767628-8494834489829097472-n.jpg"
      }
    }
  },
  {
    title: "September 2017",
    cardTitle: "Gedik Santai",
    cardSubtitle:"Lokasi: Gelanggang UKM, Kedudukan: Suku Akhir",
    media: {
      type: "IMAGE",
      source: {
        url: "https://i.ibb.co/44znKTP/21432897-10214795690912977-4954530014630619442-n.jpg"
      }
    }
  },
  
];
    return (
    <div style={{height: "400px" }}>
      <Chrono items={items}  mode="VERTICAL_ALTERNATING" />
    </div>
    )
}


export default KadPencapaian
