import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page36() {
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
                        <div className={`${styles.section_heading} lg:text-[2vw] md:text-[2vw] text-[1.5rem]`} style={{ lineHeight: `${line_height * 2}px` }}>
                            <p style={{ padding: `${line_height / 3}px`, textTransform: "uppercase" }}>
                                Choosing the Right Path
                            </p>
                        </div>
                        <div className={styles.article_italic_subtitle}>
                            A Detailed Comparison of IB, A-Levels, IGCSE, and AP for International School Families
                        </div>
                    </div>
                    <div>
                        <span className="lg:text-[2.5dvw] md:text-[2.5dvw] text-[4rem] font-bold float-left mr-2 leading-none">F</span>
                        <p className="text-justify lg:text-[1vw] md:text-[1dvw] text-[1.2rem]">
                            or globally mobile families, choosing the right school can be daunting enough—let alone choosing the right curriculum. International
                            schools present parents with a dizzying menu: American programs with Advanced Placement (AP) courses, British pathways beginning with
                            the International General Certificate of Secondary Education (IGCSE) and culminating in A-Levels, and the increasingly popular
                            International Baccalaureate (IB) continuum.
                        </p>
                    </div>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col justify-between" style={{ gap: `${line_height}px` }}>
                            <div className="" style={{ alignContent: "center" }}>
                                {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                                <YoutubeEmbed videoId="lzmddBb19nY" />
                            </div>
                        </div>

                        <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col gap-[1rem]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                Each of these systems has its own structure, philosophy, and implications for university entry.
                                This article offers an in depth comparison of IB,
                                A-Levels, IGCSE, and AP—what they are, how they work, and which families and students
                                might find them the best fit.
                            </div>
                            <div>
                                <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>
                                    Understanding the Four Systems
                                </div>
                                <div className={styles.para}>
                                    Before diving into comparisons, it’s important to define what each system represents, because they are not all equivalents in scope.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Right Column */}
                <div className="flex flex-col flex-1 lg:w-1/2 md:w-1/2 gap-[1vw] text-justify lg:pb-0 md:pb-0 pb-[5dvw] justify-between" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw]" style={{ height: "calc(100% - 50dvw * 9/16)" }}>
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <ul style={{ listStyleType: "disc", paddingLeft: "1dvw" }}>
                                <li>
                                    International Baccalaureate (IB): A global framework born in Switzerland in 1968, now offered in over 150 countries. It spans early childhood 
                                    through the Primary Years Programme (PYP), Middle Years Programme (MYP), and the renowned Diploma Programme (IBDP) for ages 16–19. The IB is 
                                    holistic and interdisciplinary, emphasizing inquiry, international mindedness, and a broad subject base. The IB program is the most popular curriculum in international schools across the world for expatriate families.
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify" style={{ gap: `${line_height}px` }}>
                            <div className="gap-[1vw] border-t-4 border-b-4 border-black-60 h-full lg:mt-[0.4dvw] md:mt-[0.4dvw]">
                                <div style={{ alignItems: "center", display: "flex", justifyContent: "center", height: "100%" }}>
                                    <div className={`flex-1 relative text-center`} style={{ position: "relative", fontFamily: "auto" }}>
                                        <p
                                            className="dark:text-white-600 text-black-600 opacity-20 lg:text-[20dvw] md:text-[20dvw] text-[70dvw]"
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
                                            className="lg:text-[1.3dvw] md:text-[1.3dvw] text-[1.3rem] lg:p-[0.8dvw] md:p-[0.8dvw] p-[1rem]"
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
                                            For globally mobile families, choosing the right school can be daunting enough—let alone choosing the right curriculum.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="" style={{ alignContent: "center" }}>
                        {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                        <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="C0h5x3dF5jw" />
                    </div>
                </div>
            </div>
        </div>
    )
}