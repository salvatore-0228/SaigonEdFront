import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page28() {
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
                <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw] lg:w-1/2 md:w-1/2">
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col justify-between" id="container" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                        <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>

                                Newer schools, which have
                                sprung up in response to the massive influx of expatriates in recent decades, might offer more availability and even innovative approaches, but may
                                not carry the same reputation with universities or employers. For a family relocating on short notice, the challenge of simply finding an open seat
                                at the right school can quickly feel overwhelming.
                            </div>
                            <div>
                                <div className={`${styles.sub_heading} lg:text-[120%]`}>Curriculum Choices: Aligning Education with Family Goals</div>
                                <div className={styles.para}>
                                    One of the most critical and complicated aspects of choosing an international school in Asia is deciding on the curriculum. Each curriculum
                                    brings its own strengths, challenges, and implications for the future.
                                </div>
                            </div>
                            <div className={styles.para}>
                                The British curriculum, offered widely through schools using the National Curriculum of England, typically culminates in IGCSEs and A-Levels.
                                It’s structured, rigorous, and well-regarded worldwide.
                            </div>
                        </div>
                        <div className="" style={{ alignContent: "center" }}>
                            {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                            <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="jiDqa7NqOC8" />
                        </div>
                    </div>

                    <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col gap-[1dvw]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            Families from the UK may find it provides the smoothest continuity, but it is also popular
                            with non-British families seeking entry to UK universities or those who value its depth and specialization in the final years.
                        </div>
                        <div className={styles.para}>
                            The American curriculum, also common across Asia, provides a more flexible, broad-based education, often culminating in a high school diploma
                            supplemented by Advanced Placement (AP) courses. It can be ideal for students who plan to apply to universities in the US, but it is equally
                            attractive for families seeking a less exam-heavy environment with space for extracurricular development.
                        </div>
                        <div className={styles.para}>
                            The International Baccalaureate (IB), offered in more and more schools, is seen by many as the “gold standard” of globally transferable education.
                            With its emphasis on inquiry, critical thinking, and
                            international-mindedness, the IB is popular among expat families who move frequently or who want
                            to keep all future university options open. However, it is academically demanding and not always the best fit for every child.
                        </div>
                        <div className={styles.para}>
                            Other curricula cater to specific national groups: French schools offering the Baccalauréat, German schools offering the Abitur, Japanese and Korean schools designed for families from those countries.
                        </div>
                        <div className={styles.para} style={{textAlignLast: "justify"}}>
                            There are also bilingual programs that integrate
                            a local language (such as Mandarin, Thai, or Vietnamese) with
                        </div>
                    </div>
                </div>
                {/* Right Column */}
                <div className="flex lg:flex-row md:flex-row flex-col flex-1 lg:w-1/2 md:w-1/2 text-justify lg:gap-[1dvw] lg:pb-0 md:gap-[1dvw] md:pb-0 pb-[5dvw]">
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            an international curriculum—a choice that appeals to families who want their children
                            to gain linguistic and cultural grounding in their host country.
                            Each curriculum has implications for university access, workload, and pedagogy.
                        </div>
                        <div className={styles.para}>
                            A British A-Level student will study fewer subjects in depth but face
                            intense pressure in those areas. An IB student will juggle a broader range of subjects plus extended essays and community service requirements.
                            An American curriculum student might enjoy more flexibility but have to manage the ambiguity of how their transcript translates in different
                            university systems.
                        </div>
                        <div className={styles.para}>
                            For expat families, the curriculum decision is not just about the next few years—it’s about where the child might go to
                            university, what academic style suits their personality, and how to keep doors open in a future that might involve yet another relocation.
                        </div>
                        <div>
                            <div className={`${styles.sub_heading} lg:text-[120%] text-left`}>Admissions, Waitlists, and Timing Pressures</div>
                            <div className={styles.para}>
                                In Asia’s most desirable expat hubs, competition for spaces at top-tier international schools can be fierce. Cities like Singapore and
                                Hong Kong have long had waiting lists at the most prestigious institutions. Even in emerging destinations like Ho Chi Minh City or Jakarta,
                                the best-known schools can have limited places in certain year groups.
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify justify-between" style={{ gap: `${line_height}px` }}>
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
                                        className="lg:text-[1.2dvw] md:text-[1.2dvw] text-[1.3rem] lg:p-[1dvw] md:p-[1dvw] p-[1rem]"
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
                                            lineHeight: `${line_height * 1.3}px`
                                        }}>
                                        Often, school places need to be secured before the move, which means navigating application forms, interviews, assessments, and even entrance exams from overseas.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                For relocating families, this creates significant timing pressure. Often, school places need to be secured before the move, which means
                                navigating application forms, interviews, assessments, and even entrance exams from overseas. Some schools require testing for older
                                children, while others may ask for previous school records or teacher recommendations.
                            </div>
                        </div>
                        <div className="" style={{ alignContent: "center" }}>
                            {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                            <YoutubeEmbed className="lg:-translate-y-[0.35dvw] md:-translate-y-[0.35dvw]" videoId="21yJfzviMJk" />
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