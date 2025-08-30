import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page39_() {
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
                <div className="lg:w-1/2 md:w-1/2 flex flex-col justify-between" id="container">
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                about student fit.
                                <ul style={{ listStyleType: "disc", paddingLeft: "1dvw" }}>
                                    <li>
                                        IB tends to suit well rounded, motivated students who enjoy variety and can manage a heavy, sustained workload. Curious thinkers who like writing,
                                        research, and exploring ideas will find IB rewarding.
                                    </li>
                                    <li>
                                        A-Levels suit specialists—students with clear subject strengths or career goals. Someone who loves math and science and wants to dig deep into them will
                                        flourish.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col gap-[1dvw]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                <ul style={{ listStyleType: "disc", paddingLeft: "1dvw" }}>
                                    <li>
                                        IGCSE isn’t really about fit—it’s a staging ground. Almost any student can handle IGCSE with support.
                                    </li>
                                    <li>
                                        AP works for students who want maximum flexibility. It’s ideal for those who want to challenge themselves selectively
                                        (perhaps loading up on AP science courses but avoiding AP literature).
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>
                                    Making the Decision as a Family
                                </div>
                                <div className={styles.para} style={{textAlignLast: "justify"}}>
                                    So how should parents weigh these options when
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="" style={{ alignContent: "center" }}>
                        {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                        <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="VF3O86W3Y5A" />
                    </div>
                </div>
                {/* Right Column */}
                <div className="flex lg:flex-row md:flex-row flex-col lg:w-1/2 md:w-1/2 lg:gap-[1dvw] lg:gap-[1dvw] text-justify" style={{ lineHeight: `${line_height}px` }}>
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            standing at the crossroads of international schooling?
                        </div>
                        <div className={styles.para}>
                            The starting point is always the child:
                            <ul style={{ listStyleType: "disc", paddingLeft: "1dvw" }}>
                                <li>
                                    Is your child a broad learner or a deep specialist?
                                </li>
                                <li>
                                    Do they thrive under steady coursework or single high stakes exams?
                                </li>
                                <li>
                                    IGCSE isn’t really about fit—it’s a staging ground. Almost any student can handle IGCSE with support.
                                </li>
                                <li>
                                    Are they aiming for a specific university system (UK, U.S., Canada, etc.)?
                                </li>
                            </ul>
                        </div>
                        <div className={styles.para}>
                            The next consideration is mobility and availability. Families planning to stay in one country for several years may
                            happily commit to a British pathway or IB. Families likely to relocate should think about portability—IB and AP often travel best.
                        </div>
                        <div className={styles.para}>
                            Finally, consider the values and philosophy you want in your child’s education. The IB builds reflective thinkers and global citizens.
                            A-Levels produce subject specialists with rigorous knowledge. AP allows an American style high school experience with selective acceleration.
                        </div>
                        <div>
                            <div className={`${styles.sub_heading} lg:text-[120%]`}>
                                Final Thoughts
                            </div>
                            <div className={styles.para} style={{ textAlignLast: "justify" }}>
                                Choosing between IB, A-Levels, IGCSE, and AP is not simply about rigor—it’s about fit. All four are respected worldwide;
                                all can lead to top universities. The
                                question is which structure, philosophy, and workload match your child’s strengths and your family’s
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify" style={{ gap: `${line_height}px` }}>
                        <div className="gap-[1rem] border-t-4 border-b-4 border-black-60 lg:mt-[0.3dvw] h-[25dvh] flex-1">
                            <div style={{ alignItems: "center", display: "flex", justifyContent: "center", height: "100%" }}>
                                <div className={`flex-1 relative text-center`} style={{ position: "relative", fontFamily: "auto" }}>
                                    <p
                                        className="dark:text-white-600 text-black-600 opacity-20 lg:text-[20dvw] md:text-[20dvw] text-[70vw]"
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
                                        className="lg:text-[1.1dvw] md:text-[1.1dvw] text-[1.3rem] lg:p-[1dvw] md:p-[1dvw] p-[1rem]"
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
                                            lineHeight: `${line_height * 1.2}px`
                                        }}>
                                        Often, school places need to be secured before the move, which means navigating application forms, interviews, assessments, and even entrance exams from overseas.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.para}>
                             circumstances.
                            The IB offers a holistic, internationally minded education that keeps doors wide open but demands exceptional balance. A-Levels deliver
                            depth and specialization for students who know where they’re headed. IGCSE lays a broad foundation for those early teen years, often
                            segueing into A-Levels or IB.
                        </div>
                        <div className={styles.para}>
                            AP provides flexible challenge in an American framework, adaptable to a student’s interests.
                            For expatriate parents navigating international schools, the key is to look beyond labels and ask the right questions: How is the
                            curriculum implemented at this school? What support is available for transitions? And, most importantly, does this path align with my
                            child’s way of learning and aspirations?
                        </div>
                        <div className={styles.para}>
                            Because in the end, while these curricula differ in structure, philosophy, and workload, they share one truth: the right one is the one that fits your child.
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