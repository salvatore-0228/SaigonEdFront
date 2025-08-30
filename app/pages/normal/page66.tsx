import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page66() {
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
            <div className="hyphens-auto flex lg:flex-row md:flex-row flex-col gap-[2vw] lg:text-[0.9vw] md:text-[0.9vw] text-[3.38vw]" style={{ lineHeight: `${line_height}px`, height: "100%" }}>
                {/* Left Column */}
                <div className="flex flex-col flex-1" id="container" style={{ gap: `${line_height}px` }}>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className="gap-[1rem] border-t-4 border-b-4 border-black-60 lg:mt-[0.3dvw] h-[25dvh] flex-1">
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
                                            className="lg:text-[1.4dvw] md:text-[1.4dvw] text-[1.3rem] p-[1rem]"
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
                                                lineHeight: `${line_height * 1.45}px`,
                                                textTransform: "uppercase"
                                            }}>
                                            AP provides a recognized, flexible, and academically rigorous path that can open doors at top universities around the world, but it demands careful course selection, time management, and self discipline from students—and thoughtful oversight from parents.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.para}>
                                SAT or ACT scores.
                                For students aiming for highly selective schools like the Ivy League, AP performance is not just a bonus but a core component of
                                demonstrating readiness for rigorous study.
                                Despite these advantages, the AP system has nuances that families must weigh carefully. The modular design, while flexible, can also
                                result in an unbalanced education if not managed well. Students may load up on AP sciences and neglect humanities, or vice versa,
                                leaving gaps that might matter later for university entry or general intellectual development.
                            </div>
                        </div>

                        <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col gap-[1rem]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                In addition, because AP is course by
                                course rather than a packaged diploma like the IB, students must be proactive in curating a course load that tells a coherent academic
                                “story.” Admissions officers often look for alignment: for example, a student aspiring to major in
                                engineering who completes AP Calculus BC, AP Physics C, and AP Computer Science signals a clear, strong focus.
                            </div>
                            <div className={styles.para}>
                                The intensity of AP courses is another factor. Each AP subject is roughly equivalent to a first year university class, and taking four
                                to six APs simultaneously can be overwhelming, particularly for students involved in
                                extracurriculars or adjusting to a new cultural
                                environment.
                            </div>
                            <div className={styles.para}>
                                Families moving abroad sometimes underestimate this
                                workload. Students who thrived in standard courses in their home country might find
                                themselves stressed under the weight of AP expectations, especially if English is not their first language or if
                                they are transitioning from a different academic system.
                            </div>
                            <div className={styles.para} style={{ textAlignLast: "justify" }}>
                                Another key question for international families is the availability of AP within a given school. Not all international schools offer AP;
                                many instead provide the IB Diploma or A Levels. Some schools offer a hybrid model, providing AP courses alongside IB or national programs.
                                The breadth of AP offerings can
                                vary dramatically: a large, well resourced American internatio-
                            </div>
                        </div>
                    </div>

                </div>
                {/* Right Column */}
                <div className="flex lg:flex-row md:flex-row flex-col flex-1 lg:w-1/2 lg:gap-[1dvw] md:w-1/2 md:gap-[1dvw] text-justify" style={{ lineHeight: `${line_height}px` }}>
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            nal school might offer over 20 AP subjects, while a smaller school might only have six or eight. Families should review not just whether AP is available but which specific courses
                            are on offer—and how consistently they’re run each year.
                            Cost can also be a factor. AP exams themselves carry fees (roughly USD 100 each), and schools may charge additional administrative or
                            material costs. While this is a minor expense compared to tuition at international schools, it’s still worth noting—especially if a student
                            is taking multiple exams across several years.
                        </div>
                        <div className={styles.para}>
                            The AP system also differs philosophically from other
                            international programs. Whereas the IB Diploma requires students to take courses
                            across six subject groups, complete a 4,000 word Extended Essay, and
                            engage in Creativity, Activity, Service (CAS) hours, AP is purely
                            academic.
                        </div>
                        <div className={styles.para}>
                            There is no formal service requirement, no interdisciplinary essay, and no expectation of holistic engagement beyond the
                            coursework itself. Some families appreciate this focus; others may feel it lacks the broad, integrative qualities of IB.
                            For expatriate families choosing between AP and other pathways, the decision often boils down to long term academic goals and personal
                            learning style. AP is ideal
                            for students planning to attend U.S. universities, those who prefer the flexibility to specialize, and those who want to demonstrate mastery in discrete subjects.
                            It’s less ideal for 
                        </div>
                    </div>

                    <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify justify-between" style={{ gap: `${line_height}px` }}>
                        <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                students who thrive under a more holistic, structured program like IB,
                                or those headed toward regions where AP is less understood (for example, some parts of continental Europe may prefer IB or A Levels).
                            </div>
                            <div className={styles.para}>
                                Ultimately, the Advanced Placement curriculum within international schools offers both opportunity and challenge. It provides a recognized,
                                flexible, and academically rigorous path that can open doors at top universities around the world. But it demands careful course selection,
                                time management, and self-discipline from students—and thoughtful oversight from parents who may need to be more involved than if their child
                                is enrolled in the IB program. For expatriate families evaluating schools abroad, understanding how AP functions in the international school
                                context is not just helpful; it’s essential to making an informed choice that supports their child’s ambitions, learning style, and well being.
                            </div>
                        </div>

                        <div className="" style={{ alignContent: "center" }}>
                            {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                            <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="m1zr3dGjrww" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}