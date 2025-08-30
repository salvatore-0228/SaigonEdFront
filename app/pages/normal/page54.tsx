import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page54() {
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
                            <p style={{ padding: `${line_height / 3}px`, textTransform: "uppercase" }}>
                                Understanding Montessori education
                            </p>
                        </div>
                    </div>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div>
                                <div className={`${styles.sub_heading} lg:text-[120%]`}>
                                    Understanding the Montessori Philosophy
                                </div>
                                <div className={styles.para}>
                                    Montessori education, founded by Italian physician and educator Dr. Maria Montessori in the early 20th century, is more than just a
                                    schooling method—it’s a philosophy of learning and child development. At its heart, Montessori believes that children are naturally
                                    curious, capable learners who thrive in an environment that allows them to explore, discover, and learn at their own pace.
                                    Classrooms are carefully prepared spaces with specialized materials designed to encourage hands-on learning. Teachers—called
                                    “guides” in Montessori terminology—observe and support rather than lecture, stepping in only when necessary to redirect or offer
                                    new challenges.
                                </div>
                            </div>
                            <div className={styles.para} style={{ textAlignLast: "justify" }}>
                                A Montessori classroom often looks very different from a traditional one. Children of mixed ages (commonly in three-year spans, like
                                ages 3–6 or 6–9) share the same environment, learning side by side. Instead of desks in rows, there are child-sized tables, mats on
                                the floor, and accessible shelves stocked with learning
                            </div>
                        </div>

                        <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col gap-[1rem]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                materials. A five-year-old might be practicing addition with wooden beads while
                                a six-year-old nearby reads a book, and a four-year-old pours water into cups as part of a practical life exercise. The rhythm is calm
                                and purposeful, with children choosing their work and engaging deeply for extended periods.
                            </div>
                            <div className={styles.para}>
                                For expatriate families, the Montessori philosophy often holds a strong appeal because it offers continuity in a world of change.
                                Montessori schools operate worldwide and share common principles, meaning that a child who attends a Montessori program in Bangkok will
                                find familiar materials, routines, and expectations if they later move to Berlin. That consistency can ease the strain of relocation,
                                providing a sense of stability for a child who may be navigating new languages, cultures, and friendships.
                            </div>
                            <div>
                                <div className={`${styles.sub_heading} lg:text-[120%]`}>
                                    Traditional Education and Its Global Domi&shy;nance
                                </div>
                                <div className={styles.para} style={{ textAlignLast: "justify" }}>
                                    Traditional education, by contrast, refers to the more
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Column */}
                <div className="flex flex-col flex-1 lg:w-1/2 md:w-1/2 gap-[1vw] text-justify lg:pb-0 md:pb-0 pb-[5dvw]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw]" style={{ height: "calc(100% - 50dvw * 9/16)" }}>
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className="gap-[1rem] border-t-4 border-b-4 border-black-60 lg:my-[0.4dvw] md:my-[0.4dvw] h-[25dvh] flex-1">
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
                                            className="lg:text-[1.3dvw] md:text-[1.3dvw] text-[1.3rem] lg:p-[0.9dvw] md:p-[0.9dvw] p-[1rem]"
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
                                                textTransform: "uppercase",
                                            }}>
                                            For expatriate families, the Montessori philosophy often holds a strong appeal because it offers continuity in a world of change. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para} style={{ textAlignLast: "justify" }}>
                                conventional model most adults experienced themselves: teacher-led
                                instruction, same-age classes, textbooks, and a curriculum that progresses in lockstep through subjects like math, science, and
                                literature. Students are grouped by age, taught in a more structured way, and evaluated primarily through tests and assignments.
                                There is often a stronger emphasis on following a prescribed syllabus and meeting standardized benchmarks, with grades used as the primary
                            </div>
                        </div>
                    </div>
                    <div className="" style={{ alignContent: "center" }}>
                        {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                        <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="UzmvtVAuuyI" />
                    </div>
                </div>
            </div>
        </div>
    )
}