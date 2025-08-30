import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css";
import { useEffect, useRef, useState } from "react";

export default function Page51() {
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
        <div className="h-full w-full lg:p-[1vw] md:p-[1vw] p-[5vw] dark:bg-gray-900 dark:text-white lg:overflow-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200">
            <div className="hyphens-auto flex lg:flex-row md:flex-row flex-col h-screen lg:gap-[2vw] md:gap-[2vw] gap-[5vw] text-justify hyphens-auto mx-auto lg:text-[0.9vw] md:text-[0.9vw] text-[3.4vw]" style={{ height: "100%", lineHeight: `${line_height}px` }}>
                {/* Left Column */}
                <div className="flex flex-col lg:w-1/2 md:w-1/2" id="container" style={{ gap: `${line_height}px` }}>
                    <div className="flex-1"></div>
                    <div>
                        <div className={`${styles.section_heading} lg:text-[1.8vw] md:text-[1.8vw] text-[1.5rem]`}>
                            <p style={{ padding: `${line_height / 3}px`, textTransform: "uppercase" }}>
                                A tale of two systems
                            </p>
                        </div>
                        <div className={styles.article_italic_subtitle}>
                            An in-depth analysis of the American verus British educational systems
                        </div>
                    </div>
                    
                    <div>
                        <span className="lg:text-[2.5dvw] md:text-[2.5dvw] text-[3rem] font-bold float-left mr-2 leading-none">A</span>
                        <p className="text-justify lg:text-[1vw] md:text-[1dvw] text-[1.2rem]">
                            mong the many international options, the two dominant contenders are the British (UK) and American (US) systems, both of which are widely
                            available in international schools around the world, including in hubs like Ho Chi Minh City, Singapore, and Dubai.
                        </p>
                    </div>
                    <div className="flex lg:flex-row md:flex-row flex-col lg:gap-[1vw] md:gap-[1vw] gap-[5vw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                Each curriculum
                                reflects the educational philosophy and cultural mindset of its home country, and each brings distinct strengths and weaknesses that can
                                have long-term implications for a child’s academic development, university prospects, and even career trajectory. For expats, choosing
                                between these systems is rarely straightforward—it involves balancing considerations like mobility, academic rigor, cost, familiarity, and
                                a child’s personality and future goals. Understanding how the UK and US systems differ, and what those differences mean in practice, is
                                essential for parents making one of the most important decisions they’ll face in their global life.
                            </div>
                        </div>
                        <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para} style={{ textAlignLast: "justify" }}>
                                The UK curriculum, often referred to as the National Curriculum of England or simply the “British system,” is one of the most widely
                                adopted international education frameworks. It is structured and highly standardized, built around clear stages of progression from Early
                                Years through A-Levels. Children move from Key Stage 1 (ages 5–7) through Key Stage 4 (ages 14–16), culminating in the General Certificate
                                of Secondary
                            </div>
                            <div className={styles.para} style={{textAlignLast: "justify"}}>
                                Education (GCSE) exams, followed by the optional but widely chosen A-Level stage (ages 16–18). The system is highly
                                examination-driven and subject-focused, and by the time students reach their mid-teens, they are
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-[1vw] pb-[5vw] lg:w-1/2 md:w-1/2">
                    <div className="flex lg:flex-row md:flex-row flex-1 flex-col gap-[1dvw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                making decisions that will shape their
                                future academic and career options—choosing specific subjects to study intensively at A-Level, for example, which are then closely tied to
                                university admissions in the UK and beyond.
                            </div>
                            <div className={styles.para}>
                                The US curriculum, by contrast, takes a broader and more flexible approach. Students move through elementary, middle, and high school
                                (roughly ages 5–18), accumulating credits in a range of subjects. There are no national exams like GCSEs or A-Levels; instead, assessment
                                is a mix of coursework, teacher evaluations, and standardized tests like the SAT or ACT, which play a role in university admissions.
                                American high schools generally require students to take a wide array of subjects throughout their schooling—math, English, history,
                                science, arts—often until graduation, though advanced students can take electives, Advanced Placement (AP) courses, or the International
                                Baccalaureate (IB) within an American framework. This breadth is one of the hallmarks of the US system: rather than specializing early,
                                students keep their options open longer, typically declaring a major only after they’ve entered university.
                            </div>
                            <div className={styles.para} style={{ textAlignLast: "justify" }}>
                                These structural differences ripple out into a range of
                                practical implications for expatriates. One of the biggest is the issue of
                                academic focus versus breadth. The British system is unapologetically specialized.
                                A-Level students typically choose three or four
                            </div>
                        </div>
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className="gap-[1dvw] border-t-4 border-b-4 border-black-60 flex-1 lg:mt-[0.4dvw] md:mt-[0.4dvw]" >
                                <div style={{ alignItems: "center", display: "flex", justifyContent: "center", height: "100%" }}>
                                    <div className={`flex-1 relative text-center`} style={{ position: "relative", fontFamily: "auto" }}>
                                        <p
                                            className="dark:text-white-600 text-black-600 opacity-20 lg:text-[450px] md:text-[400px] text-[70vw]"
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
                                            className="lg:text-[1.4dvw] md:text-[1.4dvw] text-[1.3rem] p-[1rem]"
                                            style={{
                                                // fontSize: `1vw`,
                                                fontWeight: "100",
                                                fontFamily: "QuoteFont, sans-serif",
                                                margin: "auto",
                                                textAlign: "center",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                height: "100%",
                                                textTransform: "uppercase",
                                                lineHeight: `${line_height * 1.4}px`
                                            }}>
                                            For expat families, this difference often sparks a philosophical question: Do we want our children to specialize early, potentially gaining an edge in their chosen field? Or do we want them to stay generalists longer, building a broader foundation before deciding?
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ height: "100%" }} controls></video> */}
                                <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="YvWtDsJxcdk" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

