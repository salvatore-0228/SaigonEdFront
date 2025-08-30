import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page14() {
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
            <div className="hyphens-auto flex lg:flex-row md:flex-row flex-col lg:gap-[2vw] md:gap-[2vw] gap-[2rem] lg:text-[0.9dvw] md:text-[0.9dvw] text-[3.46vw]" style={{ height: "100%" }}>
                {/* Left Column */}
                <div className="flex flex-col flex-1 lg:gap-[1vw] md:gap-[1vw]" id="container" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                    <div className="flex flex-1"></div>
                    <div className={`${styles.section_heading} lg:text-[2vw] md:text-[2vw] text-[1.5rem]`} style={{ lineHeight: `${isMobile ? line_height * 1.3 : line_height * 2}px` }}>
                        <p style={{ paddingTop: `${ isMobile ? 0 : line_height / 3}px`, paddingBottom: `${isMobile ? 0 : line_height / 3}px`, textTransform: "uppercase" }}>
                            CHOOSING THE BEST INTERNATIONAL SCHOOL
                        </p>
                    </div>
                    <div>
                        <span className="lg:text-[2.5vw] md:text-[2.5vw] text-[9vw] font-bold float-left mr-2 leading-none">A</span>
                        <p className="text-justify lg:text-[1.1dvw] md:text-[1.1dvw] text-[1rem]">
                            t the end of each school year, as parents you are either reflecting upon the year at your present school or preparing to move to a new
                            posting in another country. Selecting a school for your family is one of the most important, yet difficult, decisions that you will make.
                        </p>
                    </div>
                    <div className="flex lg:flex-row md:flex-row flex-col flex-1 gap-[1vw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col gap-[1vw]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                This decision is made more difficult because you are often moving to unknown territory; have to make judgments under pressure of time and
                                without significant data and information that is completely trustworthy. Of course, there are a number of reasons for choosing a school and
                                every family has a different set of priorities. However, I have tried to identify a few areas of a school’s function and some related
                                questions that as parents you could ask to gain a deeper understanding of the institution that you are entrusting with your child’s education.
                            </div>
                            <div>
                                <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>Teachers</div>
                                <div className={styles.para} style={{ textAlignLast: "justify" }}>
                                    First and foremost, a school must have highly effective teachers and this ingredient is far more important than any other factor.
                                    Researchers have slowly come to
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col gap-[1rem] lg:-translate-y-[0.4dvw] md:-translate-y-[0.4dvw]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                            <div className="gap-[1rem] border-t-4 border-b-4 border-black-60 h-[25dvh] flex-1">
                                <div style={{ alignItems: "center", display: "flex", justifyContent: "center", height: "100%" }}>
                                    <div className={`flex-1 relative text-center`} style={{ position: "relative", fontFamily: "auto" }}>
                                        <p
                                            className="dark:text-white-600 text-black-600 opacity-20 lg:text-[450px] md:text-[450px] text-[70vw]"
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
                                            className="lg:text-[1.8dvw] md:text-[1.8dvw] text-[1.3rem] p-[1rem]"
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
                                                lineHeight: `${line_height*1.4}px`
                                            }}>
                                            RESEARCHERS HAVE SLOWLY COME TO REALIZE THAT A SCHOOL’S EFFECT ON LEARNING IS NOWHERE NEAR AS SIGNIFICAQNT AS AN INDIVIDUAL TEACHER’S IMPACT ON LEARNING
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Column */}
                <div className="flex lg:flex-row md:flex-row flex-col flex-1 lg:w-1/2 md:w-1/2 gap-[1dvw] text-justify lg:pb-0 md:pb-0 pb-[5dvw]" style={{ lineHeight: `${line_height}px` }}>
                    <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
                        <div className="flex lg:flex-row md:flex-row flex-col gap-[1dvw]" style={{height: "calc(100% - 50dvw * 9/16)"}}>
                            <div className={`${styles.para} lg:w-[50%] md:w-[50%]`} style={{ textAlignLast: "justify" }}>
                                realize that a school’s effect on learning is nowhere near as significant as an individual teacher’s
                                impact on learning, that an effective teacher brings value-added learning gains for years to come and that an ineffective teacher
                                will have the reverse effect. Research has recently suggested that many teachers learn
                                most and improve the most in their first few
                                years of teaching and after that, learning either plateaus or stops. This is generally because schools do not focus enough upon
                                

                            </div>
                            <div className="lg:w-[50%] md:w-[50%] flex flex-col" style={{ gap: `${line_height}px` }}>
                                <div className={`${styles.para}`}>
                                    creating a continuous professional learning environment through targeted professional development opportunities: teacher goal
                                    setting and providing time and expertise for coaching of teachers in their classrooms. The old proverb, “don’t judge a book by
                                    its cover,” is very applicable when choosing a school; a ramshackle school with good teachers should always be preferable to a
                                    school with wonderful facilities and ineffective teachers.
                                </div>
                            </div>

                        </div>
                        <div className="" style={{ alignContent: "center" }}>
                            {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                            <YoutubeEmbed className="lg:-translate-y-[0.4dvw] md:-translate-y-[0.4dvw]" videoId="9xUfafJE90U" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
