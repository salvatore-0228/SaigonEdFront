import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page57() {
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
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div>
                                <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>
                                    Advantages of Traditional Education for Expats
                                </div>
                                <div className={styles.para}>
                                    Traditional schooling, by contrast, offers familiarity and standardization that many expat families value. International schools that
                                    follow British, American, or other national curricula provide a clear academic framework, with recognizable milestones like GCSEs,
                                    SATs, or IB exams.
                                </div>
                            </div>
                            <div className={styles.para}>
                                For families planning moves across countries, this structure can make it easier to manage long-term education planning.
                                Traditional education also aligns neatly with university admissions systems
                                worldwide. While Montessori lays a strong foundation for
                                independent learning, by the teenage years most students—Montessori or otherwise—enter more traditional systems to complete recognized
                                qualifications. Choosing a traditional path from the start can simplify that journey, keeping students in one consistent framework from
                                early years through graduation.
                            </div>
                            <div className={styles.para}>
                                In practical terms, traditional education is simply more available. Most international schools operate within this model, and parents
                                can find options almost anywhere, often with shared calendars, grading systems, and syllabi. 
                            </div>
                            <div className={styles.para}>
                                For families who relocate frequently, this
                                abundance means less stress over whether an appropriate school will be available in the next destination.
                            </div>
                        </div>

                        <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col gap-[1rem]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                            <div>
                                <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`} style={{textAlign: "left"}}>
                                    Drawbacks of Traditional Education for Expats
                                </div>
                                <div className={styles.para}>
                                    Yet the traditional model has its own drawbacks. One is rigidity: traditional systems typically move at a fixed pace, with whole classes
                                    advancing together. For an expat child who has missed a term due to a move or who comes from a different curriculum, this can create gaps or
                                    redundancies. A child might repeat content they’ve already learned or struggle with topics they’ve missed.
                                    The conventional classroom’s reliance on exams and grades can also be stressful for expat
                                    children, who may already be adjusting to a
                                    new culture, language, or social circle. The pressure to perform on standardized tests can compound the challenges of relocation.
                                </div>
                            </div>
                            <div className={styles.para}>
                                Additionally, traditional education often places less emphasis on practical independence and self-direction in early years. While
                                plenty of traditional schools encourage creativity and problem-solving, the structure is inherently more teacher-directed, which may
                                leave less room for the kind of personal autonomy that Montessori cultivates.
                            </div>
                            <div>
                                <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>
                                    Cultural and Personal Fit
                                </div>
                                <div className={styles.para} style={{textAlignLast: "justify"}}>
                                    For expatriates, the choice between Montessori and traditional education often comes down to cultural and personal fit.
                                    Montessori’s ethos appeals to families who value independence, curiosity, and a less conventional approach. Parents who themselves
                                    had tradit-
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Right Column */}
                <div className="flex lg:flex-row md:flex-row flex-col flex-1 lg:w-1/2 lg:gap-[1dvw] md:w-1/2 md:gap-[1dvw] text-justify" style={{ lineHeight: `${line_height}px` }}>
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para} style={{ textAlignLast: "justify" }}>
                            ional educations sometimes choose Montessori as a deliberate alternative, seeing it as a way to nurture creativity and
                            self-motivation in their children. Traditional schooling, on the other hand, appeals to families who prioritize structure,
                            measurable progress, and alignment with mainstream academic systems.
                        </div>
                        <div className={styles.para}>
                            Children’s personalities also play a significant role. Some children thrive in Montessori environments, relishing the freedom to choose
                            their work and dive deeply into interests. Others need more structure,
                            guidance, or external motivation, and might feel lost in
                            Montessori’s open-ended approach.
                        </div>
                        <div className={styles.para}>
                            Similarly, some children feel energized by traditional classrooms, enjoying clear expectations and
                            the social experience of same-age peers, while others chafe under the restrictions.
                        </div>
                        <div>
                            <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>
                                The Realities of Expat Life
                            </div>
                            <div className={styles.para}>
                                The expatriate context adds extra layers to this decision. Families must consider not only which philosophy fits their child now,
                                but how it will mesh with future moves. Will the child have access to Montessori programs in the next country? How will they transition
                                from Montessori into a more traditional secondary school or exam system? Conversely, will a traditional curriculum offer enough
                                flexibility for a child who moves frequently, or will rigid grade-level expectations create stress?
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify" style={{ gap: `${line_height}px` }}>
                        <div className="gap-[1rem] border-t-4 border-b-4 border-black-60 h-[25dvh] lg:mt-[0.3dvw] md:mt-[0.3dvw] flex-1">
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
                                            lineHeight: `${line_height * 1.3}px`,
                                            textTransform: "uppercase"
                                        }}>
                                        Whatever the choice, the most important factor is not the label on the school gate, but whether the environment supports the child’s learning, well-being, and resilience—qualities that matter more than ever in the ever-changing world of expatriate life.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.para}>
                            For many expat families, the decision is not purely philosophical but logistical. Montessori may be the preferred approach, but if the
                            next destination doesn’t have a strong Montessori school, switching systems becomes inevitable. Some families opt for Montessori in early
                            childhood and transition to traditional education for primary or secondary years, blending the best of both worlds. Others stick with
                            traditional schooling from the start for the sake of stability and predictability.
                        </div>
                        {/* <div>
                            <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>
                                Conclusion: Weighing Montessori vs. Traditional for the Global Child
                            </div>
                            <div className={styles.para}>
                                Montessori and traditional education represent two very different visions of how children learn and grow. For expatriates, the choice
                                is not only about which philosophy resonates most—it’s about how that philosophy fits into a life defined by mobility, change, and
                                international horizons. Montessori offers a nurturing, independent, and globally consistent foundation, particularly powerful in the
                                early years, but it can present challenges when transitioning to exam-driven systems later on. Traditional education offers structure,
                                familiarity, and alignment with the world’s major curricula, but it can be rigid and stressful for children adapting to constant moves.
                            </div>
                        </div>
                        <div className={styles.para}>
                            Montessori can also pose challenges for parents who want clear benchmarks and grades. Because the system focuses on individual growth,
                            there is often less emphasis on comparative grades or standardized tests in the early years. Some parents find this liberating; others
                            find it unsettling, particularly if they need concrete reports to present to a new school during relocation.
                        </div>
                        <div className={styles.para} style={{ textAlignLast: "justify" }}>
                            Ultimately, there is no universal “best” choice for expat families—only the best fit for a particular child, at a particular stage, in the
                            context of a family’s global journey. Many parents find themselves blending paths, starting with Montessori to cultivate independence and
                        </div>
                        <div className={styles.para}>
                            curiosity in the early years, then moving into traditional systems for the structure and qualifications needed for university. Others
                            commit to one system for consistency’s sake. Whatever the choice, the most important factor is not the label on the school gate, but
                            whether the environment supports the child’s learning, well-being, and resilience—qualities that matter more than ever in the ever-changing
                            world of expatriate life.
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}