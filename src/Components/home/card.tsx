
'use client';
import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react"
import "./card.css"
import Slider from "./slider"
import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { aboutUs, events, ourTeam, slider } from "@/data/home";

export interface HomeCard {
    _id?: string;
    description?: string;
    imageUrls: string[];
    cardType?: string;
    image?: string;
    title?: string;
}

export default function Card() {



    

    const style1 = {
        background: "linear-gradient(180deg, #010101 0%, #292929 90%)"
    }
    const style2 = {
        background: "linear-gradient(180deg, #292929 0%, #0f1019 90%)"
    }
    const style3 = {
        backgroundImage: "linear-gradient(180deg, #212125 0%, #090913 90%)"
    }
    const style4 = {
        backgroundImage: "linear-gradient(180deg, #090913 0%, #010101 90%)",
       
    }
    const style5 = {
        border: 0
    }

    return (
        <>
            <div className="container flex-col" style={style1}>
                <div className="bg-1"></div>
                <div className="left">
                    <div className="flex flex-row gap-2">
                        <div className="header">A<span className="samkaran">BOUT</span><span className="samkaran"> US</span></div>
                    </div>
                </div>
                <div className="right flex">
                    <div className="sub-container flex-row">
                        <div className="sub-left flex text">
                            {aboutUs[0]?.description ? aboutUs[0].description : "Loding..."}
                        </div>
                        <div className="sub-right">
                            <div className="gallery">
                                {
                                    aboutUs[0]?.imageUrls ?
                                        aboutUs[0]?.imageUrls?.map((img, index) => {
                                            return (
                                                <img className="aspect-square" src={img} alt="Estoria" key={index} loading="lazy" />
                                            )
                                        }) :
                                        <>
                                            <img src="../../../../../logo1.jpg" alt="Estoria" loading="lazy" />
                                            <img src="../../../../../logo1.jpg" alt="Estoria" loading="lazy" />
                                            <img src="../../../../../logo1.jpg" alt="Estoria" loading="lazy" />
                                            <img src="../../../../../logo1.jpg" alt="Estoria" loading="lazy" />
                                        </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" style={style2}>
                <div className="bg-1"></div>
                <div className="left">
                    <div className="flex flex-row gap-2">
                        <div className="header">E<span className="samkaran">VENTS</span></div>
                    </div>
                </div>
                <div className="right flex">
                    <div className="sub-container flex-row-reverse">
                        <div className="sub-left flex text">
                            {events[0]?.description ? events[0].description : "Loding..."}
                        </div>
                        <div className="sub-right">
                            <div className="gallery">
                                {
                                    events[0]?.imageUrls ?
                                        events[0]?.imageUrls?.map((img, index) => {
                                            return (
                                                <img className="aspect-square" src={img} alt="Estoria" key={index} loading="lazy" />
                                            )
                                        }) :
                                        <>
                                            <img src="../../../../../logo1.jpg" alt="Estoria" loading="lazy" />
                                            <img src="../../../../../logo1.jpg" alt="Estoria" loading="lazy" />
                                            <img src="../../../../../logo1.jpg" alt="Estoria" loading="lazy" />
                                            <img src="../../../../../logo1.jpg" alt="Estoria" loading="lazy" />
                                        </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Slider/>

            <div className="container" style={style3}>
                <div className="bg-1"></div>
                <div className="left">
                    <div className="flex flex-row gap-2">
                        <div className="header">O<span className="samkaran">UR</span> <span className="samkaran">Team</span></div>
                    </div>
                </div>
                <div className="right flex">
                    <div className="sub-container flex-row">
                        <div className="sub-left flex text">
                            {ourTeam[0]?.description ? ourTeam[0].description : "Loading..."}
                        </div>
                        <div className="sub-right">
                            <div className="gallery">
                                {
                                    ourTeam[0]?.imageUrls ?
                                        ourTeam[0]?.imageUrls?.map((img, index) => {
                                            return (
                                                <img className="aspect-square" src={img} alt="Estoria" key={index} loading="lazy" />
                                            )
                                        }) :
                                        <>
                                            <img src="../../../../../logo1.jpg" alt="Estoria" loading="lazy" />
                                            <img src="../../../../../logo1.jpg" alt="Estoria" loading="lazy" />
                                            <img src="../../../../../logo1.jpg" alt="Estoria" loading="lazy" />
                                            <img src="../../../../../logo1.jpg" alt="Estoria" loading="lazy" />
                                        </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            
            
        </>
    )
}