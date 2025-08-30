import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page40() {
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
        <div className="h-full w-full lg:p-[1vw] md:p-[1vw] p-[5vw] dark:bg-gray-900 dark:text-white lg:overflow-hidden overflow-auto h-full scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200">
            <div className="hyphens-auto flex lg:flex-row md:flex-row flex-col gap-[2vw] lg:text-[0.9vw] md:text-[0.9vw] text-[3.46vw]" style={{ lineHeight: `${line_height}px`, height: "100%" }}>
                {/* Left Column */}
                <div className="flex flex-col flex-1" id="container" style={{ gap: `${line_height}px` }}>
                    <div className="flex-1"></div>
                    <div>
                        <div className={`${styles.section_heading} lg:text-[2vw] md:text-[2vw] text-[1.5rem]`}>
                            <p style={{ padding: `${line_height / 3}px`, textTransform: "uppercase" }}>
                                FROM PRIVATE TO NOT-FOR-PROFIT
                            </p>
                        </div>
                        <div className={styles.article_italic_subtitle}>
                            Understanding the structure of international schools abroad
                        </div>
                    </div>
                    <div>
                        <span className="lg:text-[2.5dvw] md:text-[2.5dvw] text-[3rem] font-bold float-left mr-2 leading-none">F</span>
                        <p className="text-justify lg:text-[1vw] md:text-[1dvw] text-[1.2rem]">
                            For expatriate families navigating a new life abroad, one of the most pressing and consequential decisions they face is choosing the
                            right school for their children. The schooling landscape in global hubs like Ho Chi Minh City, Singapore, Dubai, or Bangkok can be
                            dizzyingly diverse. Parents often find themselves comparing not only curricula (such as IB, British, American, or bilingual programs)
                            but also the fundamental nature of the schools themselves—how they are structured, funded, and governed.
                        </p>
                    </div>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                Four of the most common models
                                expatriate parents encounter are fully private international schools, semi-private international schools, not-for-profit international
                                schools, and foundation-run international schools. While all four types share the label “international school,” the differences beneath
                                the surface can be profound, influencing everything from tuition fees to teaching philosophies, extracurricular offerings, and even the
                                overall school culture. Understanding these
                                distinctions—and their families who want to make an informed, long-term decision about their children’s education.
                            </div>
                            <div>
                                <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>
                                    Fully Private International Schools: Prestige, Resources, and Exclusivity
                                </div>
                                <div className={styles.para} style={{textAlignLast: "justify"}}>
                                    Fully private international schools are typically the most recognizable and, in many cases, the most
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col gap-[1rem]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                prestigious option for expatriate families. These institutions are owned and operated by private companies or investors and are usually run
                                as for-profit entities.
                            </div>
                            <div className={styles.para}>
                                Their financial model is straightforward: tuition fees and ancillary charges (such as application fees, building fees,
                                and activity fees) fund all operations, including salaries, infrastructure, and expansion. Because they are driven by profit
                                motives, many of these schools have the financial incentive to constantly upgrade their facilities and attract top-tier teachers
                                from around the globe.
                            </div>
                            <div className={styles.para}>
                                Fully private schools often boast state-of-the-art campuses—think Olympic-sized swimming pools, performing arts theaters,
                                tech-integrated classrooms, and dedicated STEM labs.
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Column */}
                <div className="flex flex-col flex-1 lg:w-1/2 md:w-1/2 gap-[1vw] text-justify lg:pb-0 md:pb-0 pb-[5dvw]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw]" style={{ height: "calc(100% - 50dvw * 9/16)" }}>
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                Many align with sought-after curricula such as the International Baccalaureate
                                (IB), British (IGCSE/A-Levels), or American (AP) programs, and they compete for high rankings and global recognition. Well-known
                                networks like Nord Anglia, Cognita, or Dulwich College International are
                                examples of private operators that run high-end schools in major expat destinations.
                            </div>
                            <div className={styles.para} style={{textAlignLast: "justify"}}>
                                For expatriate families, the advantages of fully private
                            </div>
                        </div>

                        <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify" style={{ gap: `${line_height}px` }}>
                            <div className="gap-[1vw] border-t-4 border-b-4 border-black-60 lg:my-[0.3dvw] md:my-[0.3dvw] h-full">
                                <div style={{ alignItems: "center", display: "flex", justifyContent: "center", height: "100%" }}>
                                    <div className={`flex-1 relative text-center`} style={{ position: "relative", fontFamily: "auto" }}>
                                        <p
                                            className="dark:text-white-600 text-black-600 opacity-20 lg:text-[20dvw] md:text-[20dvw] text-[70dvw]"
                                            style={{
                                                position: "absolute",
                                                top: "60%",
                                                left: "50%",
                                                transform: "translate(-50%, -35%)",  // centers the element exactly in the middle
                                                zIndex: 1,
                                                margin: 0,
                                                userSelect: "none",
                                                pointerEvents: "none",
                                                fontWeight: "bold",
                                                lineHeight: 1,
                                            }}
                                        >
                                            ”
                                        </p>
                                        <p
                                            className="lg:text-[1.2dvw] md:text-[1.2dvw] text-[1.3rem] lg:p-[0.9dvw] md:p-[1dvw] p-[1rem]"
                                            style={{
                                                // fontSize: "1.3rem",
                                                fontWeight: "100",
                                                fontFamily: "QuoteFont, sans-serif",
                                                margin: "auto",
                                                textAlign: "center",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                height: "100%",
                                                textTransform: "uppercase",
                                                lineHeight: `${line_height * 1.2}px`
                                            }}>
                                            Fully private international schools are typically the most recognizable and, in many cases, the most prestigious option for expatriate families.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="" style={{ alignContent: "center" }}>
                        {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                        <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="1ljddVv2XI0" />
                    </div>
                </div>
            </div>
        </div>
    )
}