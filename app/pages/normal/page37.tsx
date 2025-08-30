import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page37() {
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
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col justify-between" id="container" style={{ gap: `${line_height}px` }}>
                        <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                <ul style={{ listStyleType: "disc", paddingLeft: "1dvw" }}>
                                    <li>
                                        A-Levels (Advanced Levels): The gold standard of the British system for university preparation. Typically studied over two
                                        years (Years 12–13, ages 16–18), A-Levels are deeply specialized—students usually choose three or four subjects and study them
                                        in significant depth, with all final grades determined by end of course exams.
                                    </li>
                                    <li>
                                        IGCSE (International General Certificate of Secondary Education): Essentially the “pre A-Level” stage for the British system.
                                        Taken at ages 14–16, IGCSEs cover a wide array of subjects and conclude with externally assessed exams. They are not terminal
                                        qualifications but a springboard to A-Levels or other post 16 programs.
                                    </li>
                                    <li>
                                        AP (Advanced Placement): An American program overseen by the College Board. AP is not a full curriculum but rather a menu of
                                        college level courses and exams offered in specific subjects, typically taken in the last two years of high school.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="" style={{ alignContent: "center" }}>
                            {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                            <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="25s0CNJrznQ" />
                        </div>
                    </div>

                    <div className="lg:w-1/2 md:w-1/2 flex flex-col gap-[1dvw]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            <ul style={{ listStyleType: "disc", paddingLeft: "1dvw" }}>
                                Students mix APs with other coursework (often a U.S. high school diploma program), allowing for selective academic challenge.
                            </ul>
                        </div>
                        <div className={styles.para}>
                            From the start, it’s clear these aren’t entirely parallel.
                        </div>
                        <div className={styles.para}>
                            The IB Diploma is a comprehensive package; A-Levels are a focused specialization;
                            IGCSE is a mid secondary checkpoint; AP is a bolt on acceleration program within the American model. That framing matters when comparing them.
                        </div>
                        <div>
                            <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>
                                Structure and Subject Requirements
                            </div>
                            <div className={styles.para}>
                                One of the most striking differences among these systems is how they balance breadth and depth.
                            </div>
                        </div>
                        <div className={styles.para}>
                            <ul style={{ listStyleType: "disc", paddingLeft: "0.9dvw" }}>
                                <li>
                                    IB Diploma: Students take six subjects across six subject groups—languages, humanities, sciences, mathematics, arts (or an
                                    elective replacing arts), plus the “IB Core” (Theory of Knowledge, Extended Essay, and CAS—Creativity, Activity, Service).
                                    The IB forces students to remain broad while offering some depth via Higher Level (HL) courses.
                                </li>
                                <li>
                                    A-Levels: Specialization begins early. Most students choose three subjects (sometimes four if they’re ambitious or aiming for
                                    very competitive university programs). They might do Physics, Chemistry, and Math—and nothing else academically beyond general
                                    enrichment—for two years.
                                </li>
                                <li style={{ textAlignLast: "justify" }}>
                                    IGCSE: A broad base of 6-10 subjects (English, math,
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                {/* Right Column */}
                <div className="flex lg:flex-row md:flex-row flex-col flex-1 lg:w-1/2 lg:gap-[1dvw] md:w-1/2 md:gap-[1dvw] text-justify" style={{ lineHeight: `${line_height}px` }}>
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                        <div className="gap-[1rem] border-t-4 border-b-4 border-black-60 lg:mt-[0.3dvw] md:mt-[0.3dvw] flex-1">
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
                                            lineHeight: `${line_height * 1.5}px`,
                                            textTransform: "uppercase"
                                        }}>
                                        Parents with children who have clear subject passions (for instance, a teenager set on becoming an engineer or a doctor) may appreciate the focus of A-Levels.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.para}>
                            <ul style={{ listStyleType: "disc", paddingLeft: "1dvw" }}>
                                sciences, languages, humanities, and sometimes arts or technology).
                                It’s compulsory breadth, but it’s also short-term—students finish at 16 and then narrow for A-Levels or another post 16 path.
                                <li>
                                    AP: There’s no prescribed structure. Students pick AP subjects à la carte alongside a U.S. high school diploma curriculum. Some
                                    take one or two APs; others load up with five or more to demonstrate rigor. There’s no expectation to study across all disciplines.
                                </li>
                            </ul>
                        </div>
                        <div className={styles.para} style={{ textAlignLast: "justify" }}>
                            For families, this difference in subject mix is crucial. IB is the only system that mandates balance across disciplines. A-Levels (and APs,
                            depending on how they’re selected) allow early specialization. Parents with children who have clear subject passions (for instance, a
                            teenager set on becoming an engineer or a doctor)
                        </div>
                    </div>

                    <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify justify-between" style={{ gap: `${line_height}px` }}>
                        <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                may appreciate the focus of A-Levels. Those whose  children thrive with varied academic stimulation might prefer the IB.
                            </div>
                            <div>
                                <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>
                                    Philosophy and Approach to Learning
                                </div>
                                <div className={styles.para}>
                                    The differences aren’t just structural—they’re philosophical.
                                    The IB has an explicitly stated mission to create “inquiring, knowledgeable, and caring young people who help to create a better and more
                                    peaceful world.”
                                </div>
                            </div>
                            <div className={styles.para}>
                                This mission is embedded into the curriculum through TOK, the Extended Essay, and CAS. Students are asked to think about
                                how they know things, write research papers, and volunteer or create projects in their communities.
                            </div>
                            <div className={styles.para}>
                                By contrast, A-Levels are unapologetically content heavy and exam driven.
                            </div>
                        </div>
                        <div className="" style={{ alignContent: "center" }}>
                            {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                            <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="VYCW6F4l0kA" />
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