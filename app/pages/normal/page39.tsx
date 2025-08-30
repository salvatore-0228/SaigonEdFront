import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page39() {
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
            <div className="hyphens-auto flex lg:flex-row md:flex-row flex-col gap-[2vw] lg:text-[0.9dvw] md:text-[0.9dvw] text-[3.46vw]" style={{ lineHeight: `${line_height}px`, height: "100%" }}>
                {/* Left Column */}
                <div className="flex lg:flex-row md:flex-row flex-col flex-1 gap-[1vw]">
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" id="container" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            and can earn university credit. Outside the U.S., APs are increasingly recognized but not always as a
                            complete qualification on their own—students often need a full diploma plus APs for admissions abroad – though there is significant variance between different schools.
                        </div>
                        <div className={styles.para}>
                            If the goal is maximum global flexibility, the IB Diploma is arguably the most universally portable.
                            A-Levels also have strong global currency, particularly for
                            Commonwealth countries. APs shine for U.S. admissions but may require explanation or supplementation elsewhere.
                        </div>
                        <div>
                            <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>
                                Workload and Rigor
                            </div>
                            <div className={styles.para}>
                                Each of these programs has a reputation for difficulty, but the nature of the workload differs.
                                The program demands excellent time management—students must write research papers, complete internal assessments, and prepare for exams.

                            </div>
                        </div>
                        <div className="gap-[1vw] border-t-4 border-b-4 border-black-60 flex-1 h-[25dvh] lg:mb-[0.4dvw] md:b-[0.4dvw]">
                            <div style={{ alignItems: "center", display: "flex", justifyContent: "center", height: "100%" }}>
                                <div className={`flex-1 relative text-center`} style={{ position: "relative", fontFamily: "auto" }}>
                                    <p
                                        className="dark:text-white-600 text-black-600 opacity-20 lg:text-[450px] md:text-[400px] text-[70dvw]"
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
                                        className="lg:text-[1.3dvw] md:text-[1.3dvw] text-[1.3rem] lg:p-[1dvw] md:p-[1dvw] p-[1rem]"
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
                                            lineHeight: `${line_height * 1.5}px`
                                        }}>
                                        The IB Diploma is frequently described as intense because students juggle six subjects plus TOK, CAS, and the Extended Essay.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 md:w-1/2 flex flex-col gap-[1dvw]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            A-Levels are also rigorous, but the challenge is concentrated depth.
                            A student taking A-Level Chemistry will cover content that rivals first year
                            university courses. However, they’re only doing three or four subjects, so there’s less juggling—just high stakes exams at the end.
                            AP varies: taking one or two APs isn’t overwhelming; taking six at once can mimic the IB’s level of challenge. The “rigor” of AP largely depends
                            on how many courses a student elects and how their school structures them.
                        </div>
                        <div className={styles.para}>
                            IGCSE is challenging for younger teens, but it’s less
                            demanding than IB or A-Levels by design—it’s a foundation stage, not a capstone.
                            For students who thrive on variety and balance, IB’s load can be invigorating. For those who excel by diving deep into a few areas, A-Levels may
                            feel less stressful, even if the content itself is hard.
                        </div>
                        <div>
                            <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>
                                Flexibility and Student Choice
                            </div>
                            <div className={styles.para}>
                                Another key factor for families is flexibility.
                            </div>
                        </div>
                        <div className={styles.para}>
                            <ul style={{ listStyleType: "disc", paddingLeft: "1dvw" }}>
                                <li>
                                    IB Diploma: Medium flexibility. Students choose subjects, but within the six subject framework. They can’t, for example, drop languages entirely or avoid math.
                                </li>
                                <li>
                                    A-Levels: High flexibility in subject focus. Students choose only three or four, and no requirement spans disciplines. A science heavy student can avoid humanities altogether, and vice versa.
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
                {/* Right Column */}
                <div className="flex lg:flex-row md:flex-row flex-col flex-1 lg:w-1/2 md:w-1/2 lg:gap-[1dvw] lg:gap-[1dvw] text-justify" style={{ lineHeight: `${line_height}px` }}>
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            <ul style={{ listStyleType: "disc", paddingLeft: "1dvw" }}>
                                <li>
                                    IGCSE: Broad at first, but there is some choice. Students may pick optional subjects, but core subjects (English, math, science) are mandatory.
                                </li>
                                <li>
                                    AP: Maximum flexibility. Students can take as many or as few APs as they wish in the subjects they like.
                                </li>
                            </ul>
                        </div>
                        <div className={styles.para}>
                            Families whose children have very strong subject preferences often favor A-Levels or AP for this reason. Those who want to keep doors open—and
                            ensure a well rounded academic profile—may lean toward IB.
                        </div>
                        <div>
                            <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>
                                Transition and Portability
                            </div>
                            <div className={styles.para}>
                                For expatriates, one of the most important questions is: How portable is the curriculum if we move midstream?
                                The IB was designed with mobility in mind. A student can start the MYP in one country and complete it in
                                another with minimal disruption. However, moving mid Diploma (between Year 12 and Year 13) can be complicated if the new school doesn’t offer the same Higher Level subjects.
                            </div>
                        </div>
                        <div className={styles.para}>
                            A-Levels are less portable because they are so specialized. If a child starts A-Level Physics in one school and moves somewhere that doesn’t offer that
                            subject—or uses a different exam board—the transition can be tricky.
                            IGCSE is relatively portable among schools offering the British curriculum, but again, exam boards vary.
                        </div>
                        <div className={styles.para} style={{textAlignLast: "justify"}}>
                            AP is highly portable across American curriculum
                        </div>
                    </div>

                    <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            schools. Because AP courses are standardized by the College Board, moving from one AP school to
                            another is usually smooth—as long as the same AP subjects are offered.
                        </div>
                        <div className={styles.para}>
                            For families anticipating multiple relocations during secondary school, the IB or AP often provide smoother continuity.
                        </div>
                        <div>
                            <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>
                                Cost and Availability
                            </div>
                            <div className={styles.para}>
                                While cost is tied more to the school than the curriculum, there are differences in availability that matter.
                            </div>
                        </div>
                        <div className={styles.para}>
                            <ul style={{ listStyleType: "disc", paddingLeft: "1dvw" }}>
                                <li>
                                    IB: Offered by over 5,000 schools worldwide, but not universal. Some regions (like Europe and Asia) have strong IB networks; others (like parts of the Middle East or Africa) may have fewer options.
                                </li>
                                <li>
                                    A-Levels/IGCSE: Common in British heritage international schools, particularly in Asia, the Middle East, and Europe.
                                </li>
                                <li>
                                    AP: Predominantly found in American international schools, which are fewer in number outside major cities.
                                </li>
                            </ul>
                        </div>
                        <div className={styles.para}>
                            Some families may find that curriculum choice is driven by location more than preference. A city might have multiple IB schools but no AP or vice versa.
                        </div>
                        <div>
                            <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>
                                Which Students Thrive in Each System?
                            </div>
                            <div className={styles.para} style={{textAlignLast: "justify"}}>
                                Every child is different, but general patterns emerge
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function WidthResponsiveText({
    baseFontSize,
    baseWordSpacing,
    baseLetterSpacing,
    baseLineHeight,
    width,
    children
}: {
    baseFontSize: number
    baseWordSpacing: number
    baseLetterSpacing: number
    baseLineHeight: number,
    width: number,
    children?: React.ReactNode
}) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [containerWidth, setContainerWidth] = useState(420)
    const referenceWidth = width // Reference width where text looks perfect

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                setContainerWidth(entry.contentRect.width)
            }
        })

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current)
        }

        return () => resizeObserver.disconnect()
    }, [])

    // Calculate scale factor based on width change
    const scale = containerWidth / width

    console.log(scale)


    return (
        <div
            ref={containerRef}
            className="overflow-hidden bg-white min-w-[300px] max-w-full"
            style={{ height: "100%" }}
        >
            <div
                style={{
                    fontSize: `${baseFontSize * scale}px`,
                    wordSpacing: `${baseWordSpacing * scale}px`,
                    letterSpacing: `${baseLetterSpacing * scale}px`,
                    // lineHeight: baseLineHeight,
                    lineHeight: baseLineHeight,
                    hyphens: "auto",
                    height: "100%",
                }}
            >
                {children}
            </div>
        </div>
    )
}