import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css";
import { useEffect, useRef, useState } from "react";

export default function Page31() {
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
            <div className="flex lg:flex-row md:flex-row flex-col h-screen lg:gap-[2vw] md:gap-[2vw] gap-[5vw] text-justify hyphens-auto mx-auto lg:text-[0.9vw] md:text-[0.9vw] text-[3.46vw]" style={{ height: "100%", lineHeight: `${line_height}px` }}>
                {/* Left Column */}
                <div className="flex lg:flex-row md:flex-row flex-col lg:w-1/2 md:w-1/2 lg:gap-[1vw] md:gap-[1vw] gap-[5vw]">
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col justify-between" id="container" style={{ gap: `${line_height}px` }}>
                        <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                or advanced standing. For students targeting competitive institutions like Oxford, Cambridge, or the Ivy League, A-Levels are
                                not just sufficient—they’re often expected.
                            </div>
                            <div className={styles.para}>
                                However, there are nuances and trade offs to consider. The specialization that makes A-Levels so powerful can also be a limitation.
                                Because students narrow to just three or four subjects at age 16, they must make serious academic choices earlier than in other systems.
                                A student who drops mathematics at A-Level might struggle to pursue an economics degree later; one who focuses exclusively on sciences may
                                have
                                less preparation for humanities oriented fields. Families should work closely with school advisors to ensure subject choices
                                align with university aspirations, as reversing course later can be difficult.
                            </div>
                            <div className={styles.para} style={{textAlignLast: "justify"}}>
                                The workload and intensity of A-Levels is another con-
                            </div>
                        </div>
                        <div className="" style={{ alignContent: "center" }}>
                            {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                            <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="BHKFrXMCHII" />
                        </div>
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col justify-between lg:mt-[0.4dvw] md:mt-[0.4dvw]" style={{ gap: `${line_height}px` }}>
                        <div className="gap-[1rem] border-t-4 border-b-4 border-black-60 flex-1">
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
                                        className="lg:text-[1.3dvw] md:text-[1.3dvw] text-[1.3rem] p-[1rem]"
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
                                            textTransform: "uppercase"
                                        }}>
                                        Philosophically, A-Levels appeal to students who are ready to specialize deeply and who already have a clear sense of academic direction.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                sideration. While students study fewer subjects than IB or AP students,
                                the level of depth is significant, and the pressure of end of course exams can be intense. Unlike modular systems,
                                there is less room for mid program course correction; performance on the final assessments largely determines outcomes. Some
                                exam boards and schools do offer staged AS Level exams after the first year, but in many cases, universities focus on final A-Level
                                results, so sustained commitment is key.
                            </div>
                            <div className={styles.para}>
                                In international schools, the A-Level experience can vary widely. Larger, well resourced schools might offer a vast menu of subjects,
                                including business studies, media, or global perspectives, while smaller schools may stick to a core academic range. Teaching quality,
                                exam preparation resources, and support services also
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-[1vw] lg:pb-0 md:pb-0 pb-[5vw] lg:w-1/2 md:w-1/2">
                    <div className="flex lg:flex-row md:flex-row flex-1 flex-col gap-[1vw]">
                        <div className="lg:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                differ. Families should look closely not only at which A-Levels a school offers, but how consistently those courses are staffed and supported.
                            </div>
                            <div className={styles.para}>
                                Another point is mobility. For families who might relocate again, A-Levels offer continuity—Cambridge, Pearson Edexcel, and OxfordAQA
                                syllabi are offered in
                                hundreds of schools worldwide, and students can generally transfer between them. 
                            </div>
                            <div className={styles.para}>
                                However, because A-Levels are
                                designed as a two year program, switching schools mid way can still cause disruptions, especially if different schools follow slightly
                                different exam boards or syllabi sequences.
                            </div>
                            <div className={styles.para}>
                                Philosophically, A-Levels appeal to students who are ready to specialize deeply and who already have a clear sense of academic direction. This contrasts with the
                                IB Diploma, which requires a broader spread, and even AP, which, while flexible, is typically more modular and course based. For a budding doctor, engineer,
                                or lawyer, A-Levels provide a head start, mimicking the subject concentration they’ll experience at university. For students unsure of their future path, the
                                early narrowing may feel restrictive.
                            </div>
                            <div className={styles.para}>
                                Cost considerations are relatively minor compared to international school tuition but worth noting: exam fees, retake fees, and sometimes extra tuition for
                                specialized subjects may be charged separately. 
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex flex-col justify-between" style={{ gap: `${line_height}px` }}>
                            <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
                                <div className={styles.para}>
                                    That said, A-Levels’ strong reputation with universities can justify the investment, especially when they lead to top tier admissions or advanced standing at university.
                                </div>
                                <div className={styles.para}>
                                    In the end, the A-Level curriculum in international schools is both a challenge and an opportunity. It demands early academic decisions, sustained intellectual
                                    effort, and resilience under exam pressure. 
                                </div>
                                <div className={styles.para}>
                                    But it also provides unmatched depth, respected qualifications, and a clear path to higher education. For families
                                    navigating the international school landscape, understanding the nature of A-Levels—and how they fit into a student’s ambitions and temperament—is essential. 
                                </div>
                                <div className={styles.para}>
                                    When chosen thoughtfully,
                                    A-Levels can be not just a program of study, but a powerful launchpad for astudent’s academic future.
                                </div>
                            </div>
                            <div className="" style={{ alignContent: "center" }}>
                                {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                                <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="jmSKEOKO6sg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}