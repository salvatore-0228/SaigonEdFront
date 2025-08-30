import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page52() {
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
            <div className="hyphens-auto flex lg:flex-row md:flex-row flex-col gap-[2vw] lg:text-[0.9vw] md:text-[0.9vw] text-[3.4vw]" style={{ height: "100%" }}>
                {/* Left Column */}
                <div className="flex lg:flex-row md:flex-row flex-col lg:w-1/2 md:w-1/2 lg:gap-[1vw] md:gap-[1vw]">
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }} id="container">
                        <div className="gap-[1rem] border-t-4 border-b-4 border-black-60 lg:mt-[0.3dvw] md:mt-[0.3dvw] h-[25dvh] flex-1">
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
                                        className="lg:text-[1.2dvw] md:text-[1.2dvw] text-[1.3rem] p-[1rem]"
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
                                        For expatriates, particularly those who relocate frequently, another key factor is portability. The British curriculum is often seen as the most “portable” in the world.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.para}>
                            subjects to study intensively, and those choices become the foundation of their university applications. A student who takes A-Level
                            chemistry, biology, and math, for example, is positioning themselves for medicine, engineering, or science-based university programs.
                            That focus can be empowering for students who already have clear academic interests—they can dive deeply into their chosen fields and
                            gain mastery early. But it can also feel limiting for students who are unsure, because dropping a subject at age 16 often closes off
                            entire university pathways.
                        </div>
                        <div className={styles.para} style={{textAlignLast: "justify"}}>
                            The American system is the opposite: it delays specialization, requiring students to continue studying a wider range of subjects through
                            high school and often even in their first year or two of college. This has the advantage of keeping doors open longer. A teenager who
                            isn’t sure whether they want to pursue engineering,
                        </div>
                    </div>

                    <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col" style={{ gap: `${line_height}px`, lineHeight: `${line_height}px` }}>
                        <div className={styles.para}>
                            literature, or business can continue exploring all three, only narrowing their focus
                            later. For expat families, this difference often sparks a philosophical question: Do we want our children to specialize early,
                            potentially gaining an edge in their chosen field? Or do we want them to stay generalists longer, building a broader foundation before
                            deciding?
                        </div>
                        <div className={styles.para}>
                            Assessment styles also differ sharply, and this is another key consideration for
                            expats. The British curriculum is exam-heavy,
                            particularly at GCSE and A-Level. Students spend years building up to high-stakes exams that determine their grades and, by extension,
                            their university options.
                        </div>
                        <div className={styles.para}>
                            For some children, this structure is motivating—they thrive under clear benchmarks and perform well under
                            pressure. For others, the exam intensity can be stressful and even overwhelming, particularly for students who are bright but less
                            suited to high-stakes testing.
                        </div>
                        <div className={styles.para}>
                            The American curriculum, while it includes some standardized tests, is generally more continuous and
                            holistic in its assessment. Grades are based on a mix of class participation, homework, projects, and tests across the year, meaning
                            one bad exam day is less likely to derail a student’s future.
                        </div>
                        <div className={styles.para}>
                            For expatriates, particularly those who relocate frequently, another key factor is portability.
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className=" flex flex-col lg:w-1/2 md:w-1/2 text-justify lg:pb-0 md:pb-0 pb-[5vw] justify-between" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                    <div className="" style={{ alignContent: "center" }}>
                        {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                        <YoutubeEmbed className="lg:translate-y-[0.3dvw] md:translate-y-[0.3dvw]" videoId="osY8Ynk7DOM" />
                    </div>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1dvw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col">
                            <div className={styles.para}>
                                The British curriculum is often seen as the most “portable”  in the world. With thousands of British international schools across Asia, Europe,
                                and the Middle East, a child who
                                starts Key Stage 3 in Dubai can transfer to another British school in Singapore or Ho Chi Minh City with minimal disruption. The structure
                                is predictable, the content is standardized, and qualifications like GCSEs and A-Levels are globally recognized. The American
                                system is also widespread, but it can be 
                            </div>
                        </div>

                        <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                more fragmented: there’s no single “national curriculum,” and standards vary by state and even by school.
                            </div>
                            <div className={styles.para}>
                                That said, American international schools are abundant, and the overall framework—credits, GPA, SAT/ACT—remains recognizable and transferable
                                across schools worldwide. When it comes to university admissions, the implications of these curricula diverge further.
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
    children,
}: {
    baseFontSize: number
    baseWordSpacing: number
    baseLetterSpacing: number
    baseLineHeight: number,
    width: number,
    children?: React.ReactNode,
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