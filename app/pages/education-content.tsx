"use client"

import { useIsMobile } from "@/hooks/use-mobile";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

interface TableOfContentsProps {
    // onBackClick: () => void
    // onStartReading: () => void
    colorMode: string
}

const tableOfContentsData = {
    preparations: [
        { title: "About this book", page: 1 },
        { title: "Contents", page: 3 },
        { title: "Education", page: 5 },
        { title: "Saigon’s School System", page: 7 },
        { title: "The UK versus the US curriculum – making an informed choice", page: 15 },
        { title: "THE SCHOOL SELECTION PROCESS", page: 19 },
        { title: "Small versus big schools", page: 23 },
        { title: "CHOOSING THE BEST INTERNATIONAL SCHOOL", page: 25 },
        { title: "The International Baccalaureate Program - A summary", page: 31 },
        { title: "Information is the key", page: 35 },
        { title: "Preparing your child for the world stage", page: 41 },
        { title: "Empowering your child to change the world", page: 43 },
        { title: "Building skills for the future through steam", page: 45 },
        { title: "A DAUNTING CHOICE", page: 49 },
    ],
    softLanding: [
        { title: "A-Levels", page: 55 },
        { title: "Bilingual versus English-only Schools", page: 59 },
        { title: "Choosing the Right Path", page: 67 },
        { title: "FROM PRIVATE TO NOT-FOR-PROFIT", page: 77 },
        { title: "Technology in the classroom", page: 85 },
        { title: "The International Baccalaureate in International Schools", page: 91 },
        { title: "A tale of two systems", page: 99 },
        { title: "Understanding Montessori education", page: 105 },
        { title: "Understanding the French curriculum", page: 113 },
        { title: "Understanding the German Curriculum", page: 119 },
        { title: "UNDERSTANDING THE ADVANCED PLACEMENT CURRICULUM", page: 125 },
        { title: "UNDERSTANDING THE IGCSE CURRICULUM", page: 131 },
        { title: "UNIVERSITIES", page: 137 },
        { title: "WHY STUDY AN MBA ABROAD", page: 139 },
        { title: "Education Listings", page: 143 },
        { title: "Education Map", page: 153 },
    ]
}

export default function ContentsPage() {
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

    const renderSection = (title: string, entries: Array<{ title: string; page: number }>, maincolor: string, pagecolor: string, pageNumber?: string) => (
        <div className="mb-[1rem]" style={{ textTransform: "uppercase" }}>
            {/* <div style={{ display: "flex" }}>
                <span style={{ backgroundColor: maincolor, color: "white", padding: "0.5rem", width: "100%", textAlign: "right", textDecoration: "underline" }}>{title}</span>
                {<span style={{ width: "3rem", backgroundColor: pagecolor, padding: "0.5rem", color: "white", fontWeight: "600", textAlign: "right" }}>{pageNumber}</span>}
            </div> */}
            <ul className="">
                {entries.map((entry, index) => (
                    <li
                        key={index}
                        className="flex justify-between items-baseline mt-[0.5%] py-[0.5%] cursor-pointer transition-all duration-200 ease-in-out rounded-[2px] hover:bg-[rgba(139,115,85,0.1)]"
                        onClick={() => { redirect(`/pages/${Math.floor(entry.page / 2) + 1}`) }}
                    >
                        <span>{entry.title}</span>
                        <span>{entry.page}</span>
                    </li>
                ))}
            </ul>
        </div>
    )

    return (
        <div className="h-full w-full lg:p-[1vw] p-[5vw] dark:bg-gray-900 dark:text-white lg:overflow-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200">
            <div className="flex lg:flex-row flex-col  lg:gap-[2vw] gap-[1rem] lg:text-[0.8dvw] h-full" id="container" style={{ lineHeight: `${line_height}px` }}>
                <div className="flex flex-col lg:w-1/2 gap-[1rem] justify-between">
                    <div className="aspect-[16/9]">
                        <div className="videoWrapper" style={{ height: "100%" }}>
                            {/* <video src="/videos/Saigon Ed Guide landscape.mp4" style={{ height: "100%", margin: "auto", bottom: "1rem" }} controls></video>
                             */}
                            <iframe
                                src="https://www.youtube.com/embed/Zh7MTziRaaw"
                                title="Vercel Ship Keynote: Introducing the frontend cloud"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                style={{ width: "100%", margin: "auto", aspectRatio: "16/9", backgroundColor: "gray" }}
                            // allowFullScreen
                            />
                        </div>
                    </div>
                    <div className="lg:columns-[2] gap-[1rem]" style={{ fontWeight: "bold" }}>
                        {renderSection("PREPARATIONS", tableOfContentsData.preparations, "#000000", "#cccccc", "26")}
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col gap-[1dvw] lg:w-1/2">
                    <div className="lg:w-1/2 flex flex-col lg:justify-between" style={{ fontWeight: "bold" }}>
                        {renderSection("SOFT LANDING", tableOfContentsData.softLanding, "#3a4c63", "#9e9277", "142")}
                        <div className="lg:flex-1 md:flex-1 w-full bg-black lg:mb-0 md:mb-0 mb-[1rem]" style={{alignContent: "center"}}>
                            <img className="m-auto" src="/images/Going GLobal relocation guides white simple1.png" />
                        </div>
                    </div>
                    <div className="lg:w-1/2 flex flex-col lg:justify-between lg:gap-0 gap-[1dvw]">
                        {/* <video src="/videos/Saigon Ed Guide landscape.mp4" className="aspect-[16/9] w-full" controls></video> */}
                        <iframe
                            src="https://www.youtube.com/embed/FcjiOKa5hYs"
                            title="Vercel Ship Keynote: Introducing the frontend cloud"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            style={{ width: "100%", aspectRatio: "16/9", backgroundColor: "gray" }}
                        // allowFullScreen
                        />
                        <iframe
                            src="https://www.youtube.com/embed/yU9IIdwKxyk"
                            title="Vercel Ship Keynote: Introducing the frontend cloud"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            style={{ width: "100%", aspectRatio: "16/9", backgroundColor: "gray" }}
                        // allowFullScreen
                        />
                        <iframe
                            src="https://www.youtube.com/embed/fxZApwFDAq4"
                            title="Vercel Ship Keynote: Introducing the frontend cloud"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            style={{ width: "100%", aspectRatio: "16/9", backgroundColor: "gray" }}
                        />
                        {/* <video src="/videos/Saigon Ed Guide landscape.mp4" className="aspect-[16/9] w-full" controls></video> */}
                        {/* <video src="/videos/Saigon Ed Guide landscape.mp4" className="aspect-[16/9] w-full" controls></video> */}
                    </div>
                </div>
            </div>
        </div>
    )
}