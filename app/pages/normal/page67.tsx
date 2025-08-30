import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page67() {
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
                                UNDERSTANDING THE IGCSE CURRICULUM
                            </p>
                        </div>
                        <div className={styles.article_italic_subtitle}>
                            What Parents Should Know
                        </div>
                    </div>
                    <div>
                        <span className="lg:text-[2.5dvw] md:text-[2.5dvw] text-[3rem] font-bold float-left mr-2 leading-none">F</span>
                        <p className="text-justify lg:text-[1.1dvw] md:tex-[1.1dvw] text-[1.2rem]">
                            Among the most recognized and widely offered qualifications in the world is the International General Certificate of Secondary
                            Education (IGCSE). Designed to provide a strong academic foundation for students typically aged 14 to 16 (Years 10 and 11 in the
                            British system), the IGCSE has become a cornerstone of secondary education in many international schools. For families exploring
                            options abroad, understanding what the IGCSE is, how it operates within international schools, and how it positions students for
                            further study is crucial.
                        </p>
                    </div>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px`, textAlignLast: "justify" }}>
                            <div className={styles.para}>
                                The IGCSE was developed by Cambridge Assessment International Education, though other boards like Pearson Edexcel also administer
                                versions of the qualification. First introduced in 1988, the IGCSE is often described as the international counterpart to the UK’s
                                GCSE, but with adjustments for a global student body. Courses are available in over 70 subjects, ranging
                            </div>
                        </div>

                        <div className="lg:w-1/2  md:w-1/2 text-justify flex flex-col gap-[1rem]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                 from mathematics, biology,
                                and history to more niche areas like global perspectives, travel and tourism, or design and technology. This breadth allows schools
                                to offer a curriculum that reflects both core academic disciplines and specialist interests, while also accommodating students from
                                diverse cultural and linguistic backgrounds.
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Column */}
                <div className="flex flex-col flex-1 lg:w-1/2 md:w-1/2 gap-[1vw] text-justify lg:pb-0 md:pb-0 pb-[5dvw]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw]" style={{ height: "calc(100% - 50dvw * 9/16)" }}>
                        <div className="lg:w-1/2 md:w-1/2  flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para} style={{textAlignLast: "justify"}}>
                                At its core, the IGCSE is two years of study culminating in external examinations. Most students begin the program at age 14, typically
                                in Year 10, and take exams at the end of Year 11. Exams are graded on an A* to G scale (Cambridge) or 9 to 1 (Edexcel and some
                                Cambridge courses transitioning to this system), with A* or 9 representing the highest level of achievement. Because the exams are
                                internationally benchmarked and rigorously standardized, IGCSE results carry
                            </div>
                        </div>

                        <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify" style={{ gap: `${line_height}px` }}>
                            <div className="gap-[1rem] border-t-4 border-b-4 border-black-60 lg:my-[0.3dvw] md:my-[0.3dvw] flex-1">
                                <div style={{ alignItems: "center", display: "flex", justifyContent: "center", height: "100%" }}>
                                    <div className={`flex-1 relative text-center`} style={{ position: "relative", fontFamily: "auto" }}>
                                        <p
                                            className="dark:text-white-600 text-black-600 opacity-20 lg:text-[20dvw] md:text-[20dvw] text-[70vw]"
                                            style={{
                                                position: "absolute",
                                                top: "60%",
                                                left: "50%",
                                                transform: "translate(-50%, -36%)",  // centers the element exactly in the middle
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
                                            className="lg:text-[1.5dvw] md:text-[1.5dvw] text-[1.3rem] lg:p-[1dvw] md:p-[1dvw] p-[1rem]"
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
                                                lineHeight: `${line_height * 1.5}px`,
                                                textTransform: "uppercase"
                                            }}>
                                            At its core, the IGCSE is two years of study culminating in external examinations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="" style={{ alignContent: "center" }}>
                        {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                        <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="EZntS9SuMhI" />
                        {/* <iframe
                            src="https://www.youtube.com/embed/EZntS9SuMhI?autoplay=1&mute=1"
                            title="Vercel Ship Keynote: Introducing the frontend cloud"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            style={{ width: "100%", margin: "auto", aspectRatio: "16/9", backgroundColor: "gray" }}
                        /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}