import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page64() {
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
            <div className="hyphens-auto flex lg:flex-row  md:flex-row flex-col gap-[2vw] lg:text-[0.9vw]  md:text-[0.9vw] text-[3.46vw]" style={{ lineHeight: `${line_height}px`, height: "100%" }}>
                {/* Left Column */}
                <div className="flex flex-col flex-1" id="container" style={{ gap: `${line_height}px` }}>
                    <div className="flex-1"></div>
                    <div>
                        <div className={`${styles.section_heading} lg:text-[2vw] md:text-[2vw] text-[1.5rem]`}>
                            <p style={{ padding: `${line_height / 3}px`, textTransform: "uppercase", lineHeight: `${isMobile ? line_height : line_height * 1.5}px` }}>
                                UNDERSTANDING THE ADVAN&shy;CED PLACEMENT CURRICULUM
                            </p>
                        </div>
                        <div className={styles.article_italic_subtitle}>
                            What Parents Should Know
                        </div>
                    </div>
                    <div>
                        <span className="lg:text-[2.5dvw] md:text-[2.5dvw] text-[3rem] font-bold float-left mr-2 leading-none">W</span>
                        <p className="text-justify lg:text-[1.1dvw] md:tex-[1.1dvw] text-[1.2rem]">
                            When families move abroad and begin evaluating international school options for their children, one of the most important decisions
                            involves choosing the right academic pathway. Among the various curricula available—such as the International Baccalaureate (IB),
                            British A Levels, or Australian programs—the American system, and specifically the Advanced Placement (AP) track, is a compelling
                            choice for many students. Understanding what the AP curriculum is, how it operates within international schools, and how it might
                            affect a student’s academic and university prospects is essential for families seeking a well aligned educational experience overseas.
                        </p>
                    </div>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}  style={{textAlignLast: "justify"}}>
                                The Advanced Placement (AP) program is an American academic framework created by the College Board, the same organization responsible
                                for the SAT. Originally developed in the 1950s to bridge high school and university learning, AP has since evolved into a globally
                                recognized credential. AP courses are offered in more than 40 subjects—from AP Calculus and AP Biology to AP Art History and AP
                                Chinese—and are designed to
                            </div>
                        </div>

                        <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col gap-[1rem]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                emulate introductory university coursework. Students who successfully complete AP courses and achieve
                                strong scores on the standardized AP exams (graded on a scale of 1 to 5) can often earn university credit, advanced placement into
                                higher level classes, or preferential admission consideration at institutions in the United States, Canada, and increasingly,
                                universities worldwide.
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Column */}
                <div className="flex flex-col flex-1 lg:w-1/2 md:w-1/2 gap-[1vw] text-justify lg:pb-0 md:pb-0 pb-[5dvw] justify-between" style={{ lineHeight: `${line_height}px` }}>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw]" style={{ height: "calc(100% - 50dvw * 9/16)" }}>
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                Within international schools, the AP program occupies a unique niche. Unlike the IB Diploma, which is a fully packaged two year
                                curriculum with a specific structure, AP is more modular. Students select individual AP courses based on their interests, strengths,
                                and college ambitions. A student might choose AP English Literature and AP U.S. History to strengthen their humanities profile, or AP
                                Physics and AP Calculus if they plan to pursue engineering.
                            </div>
                        </div>

                        <div className="flex flex-col lg:w-1/2  md:w-1/2 text-justify" style={{ gap: `${line_height}px` }}>
                            <div className="gap-[1rem] border-t-4 border-b-4 border-black-60 lg:my-[0.4dvw] md:my-[0.4dvw] flex-1">
                                <div style={{ alignItems: "center", display: "flex", justifyContent: "center", height: "100%" }}>
                                    <div className={`flex-1 relative text-center`} style={{ position: "relative", fontFamily: "auto" }}>
                                        <p
                                            className="dark:text-white-600 text-black-600 opacity-20 lg:text-[20dvw] md:text-[20dvw] text-[70vw]"
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
                                            className="lg:text-[1.4dvw] md:text-[1.4dvw] text-[1.3rem] lg:p-[1dvw] md:p-[1dvw] p-[1rem]"
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
                                                lineHeight: `${line_height * 1.4}px`,
                                                textTransform: "uppercase",
                                            }}>
                                            Unlike the IB Diploma, which is a fully packaged two year curriculum with a specific structure, AP is more modular.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="" style={{ alignContent: "center" }}>
                        {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                        <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="_Ksi7dIo9S8" />
                    </div>
                </div>
            </div>
        </div>
    )
}