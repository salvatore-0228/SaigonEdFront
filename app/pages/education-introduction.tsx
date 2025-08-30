import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css";
import localFont from "next/font/local";
import { useEffect, useRef, useState } from "react";


export default function AboutBook() {
    const [line_height, setLineHeight] = useState(1.4);
    const [height, setHeight] = useState(1000);
    const isMobile = useIsMobile()

    useEffect(() => {
        const handleResize = () => {
            setHeight(window.innerHeight);
        }

        handleResize(); // set on mount
        window.addEventListener("resize", handleResize);

        const height = document.getElementById("container")?.clientHeight || 0;
        console.log("Height:", height);
        setLineHeight(height / 30)
    }, []);

    useEffect(() => {
        const height = document.getElementById("container")?.clientHeight || 0;
        console.log("Height:", height, isMobile);
        if (isMobile) {
            setLineHeight(24)
        }
        else setLineHeight(height / 30)
    }, [height]);

    return (
        <div
            className="h-full w-full lg:p-[1vw] lg:content-center md:content-center md:p-[1vw] p-[5vw] bg-black text-white lg:overflow-hidden overflow-auto overflow-y-scroll scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200"
            style={{
                borderTop: "1px white solid",
                borderBottom: "1px white solid",
            }}
        >
            <div className="flex lg:flex-row md:flex-row flex-col h-screen lg:gap-[2vw] md:gap-[2vw] gap-[5vw] text-justify hyphens-auto mx-auto lg:text-[0.8vw] md:text-[0.8vw]" style={{ height: "calc(72dvw*9/16)" }}>
                {/* Left Column */}
                <div className="flex lg:flex-row md:flex-row flex-col lg:w-1/4 lg:gap-[1vw] md:w-1/4 md:gap-[1vw] gap-[5vw]" id="container">
                    <div className="flex lg:flex-col justify-between lg:gap-[1dvw] md:gap-[1dvw] gap-[5dvw]">
                        <div className="text-justify flex lg:flex-row md:flex-row flex-col justify-between">
                            {/* <img className="w-[5dvw]" src="/images/Going Global Footer white.png" /> */}
                            <div>
                                <img style={{ objectFit: "contain", height: "calc(48dvw*9.5/16)" }} src="/images/Isolated fu dog_cropped.png" />
                            </div>
                            {/* <div className="bg-white w-[5px] h-full"></div> */}
                            <div className={`flex-1 lg:text-[2.85vw] md:text-[2.85vw] text-[4.4dvw]`} style={{ margin: "auto", justifyItems: "center" }}>
                                <p className="border-r-[10px] border-l-[5px] border-white" style={{ padding: `${line_height / 3}px`, textTransform: "uppercase", writingMode: "vertical-rl", fontFamily: "MyCustomFont" }}>
                                    About this book
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div>
                                <span className="lg:text-[2.5dvw] md:text-[2.5dvw] text-[12dvw] font-bold float-left leading-none">W</span>
                                <p className="text-justify lg:text-[0.9dvw] md:text-[0.9dvw] text-[4.5dvw]">
                                    hat you are about to read is the most comprehensive guide to international education in Saigon ever created. Our guide walks you through 
                                    every aspect of your school choice and provides you with a comprehensive multimedia interactive list of every international school and 
                                    everything you need to know to make the best choice for your child.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-[1vw] lg:w-3/4 md:w-3/4">
                    <div className="" style={{ alignContent: "center" }}>
                        <YoutubeEmbed videoId="QPsgiyZh7D0" autoplay={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}

