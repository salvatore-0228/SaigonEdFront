import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page47() {
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
                            <p style={{ padding: `${line_height / 3}px`,lineHeight: `${isMobile ? line_height : line_height * 1.5}px`, textTransform: "uppercase" }}>
                                The International Baccal&shy;aureate in International Schools
                            </p>
                        </div>
                        <div className={styles.article_italic_subtitle}>
                            A Complete Guide for Families
                        </div>
                    </div>
                    {/* <div>
                        <span className="text-5xl font-bold float-left mr-2 leading-none">W</span>
                        <p className="text-justify text-[1.3rem]">
                        </p>
                        </div> */}

                    <div>
                        <span className="lg:text-[2.5dvw] md:text-[2.5dvw] text-[3rem] font-bold float-left mr-2 leading-none">W</span>
                        <p className="text-justify lg:text-[1.1dvw] md:tex-[1.1dvw] text-[1.3rem]">
                            hen expatriate families begin exploring international schools for their children, they often encounter a dazzling array of curriculum
                            options—American, British, national, hybrid, and increasingly, the International Baccalaureate (IB). For many, the IB is more than just
                            another academic program; it’s an entire educational philosophy, a system designed to cultivate intellectual curiosity, cultural
                            awareness, and a sense of global responsibility.
                        </p>
                    </div>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                But for parents trying to decide whether the IB is the right fit, there’s a lot to
                                unpack. What exactly does the IB entail? How does it work within international schools? And what are the advantages and challenges for
                                students and families in this increasingly mobile world?
                            </div>
                            <div>
                                <div className={`${styles.sub_heading} lg:text-[120%]  md:text-[120%]`}>
                                    A Global Curriculum with Global Roots
                                </div>
                                <div className={styles.para} style={{ textAlignLast: "justify" }}>
                                    The International Baccalaureate Organization (IBO) was founded in Geneva in 1968 with an ambitious
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col gap-[1rem]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                vision: to create an education that transcends national boundaries and prepares students to think critically
                                and act responsibly in a complex, interconnected
                                world. What began as a single program for internationally mobile students has evolved into a multi‑tiered framework spanning early
                                childhood to pre‑university education.
                            </div>
                            <div className={styles.para} style={{textAlignLast: "justify"}}>
                                Today, over 5,000 schools in more than 150 countries offer IB programs, making it one of the most
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Column */}
                <div className="flex flex-col flex-1 lg:w-1/2 md:w-1/2 gap-[1vw] text-justify lg:pb-0 md:pb-0 pb-[5dvw]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw]" style={{ height: "calc(100% - 50dvw * 9/16)" }}>
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                recognizable educational brands in the world.
                            </div>
                            <div className={styles.para} style={{ textAlignLast: "justify" }}>
                                In international schools, the IB often functions as a flagship curriculum—both for marketing to globally minded parents and for
                                delivering a consistent, transferable education to students who might move across borders multiple times before graduation. It’s built
                                around four distinct programs: the Primary Years Programme (PYP) for students aged 3 to 12, the Middle
                            </div>
                        </div>

                        <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                Years Programme (MYP) for ages 11 to 16, the Diploma
                                Programme (DP) for ages 16 to 19, and the more career‑oriented IB Career‑related Programme (CP), also for the final years of school.
                            </div>
                            <div className={styles.para}>
                                Together, these programs offer what the IB calls a “continuum of international education,” though many schools
                                only offer one or two stages, most commonly the DP at the upper secondary level.
                            </div>
                        </div>
                    </div>
                    <div className="" style={{ alignContent: "center" }}>
                        {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                        <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="9LuuJa3t-m8" />
                    </div>
                </div>
            </div>
        </div>
    )
}