import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page55() {
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
                <div className="flex flex-col lg:w-1/2 md:w-1/2 justify-between" id="container" style={{ gap: `${line_height}px` }}>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                 measure of progress which is not always suitable for all learners. 
                            </div>
                            <div className={styles.para} style={{ textAlignLast: "justify" }}>
                                This traditional model dominates education worldwide, from public schools to many private and international schools. For expatriates,
                                it’s often the default option because it’s widely available and recognizable. A British-curriculum school, an American international
                                school, or even a local public school will typically 
                            </div>
                        </div>

                        <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col gap-[1rem]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                follow this more conventional structure, with clear year groups, term schedules,
                                and subjects. Parents often find comfort in its familiarity—it’s the system they understand, and it generally aligns smoothly with
                                national and international exam systems like GCSEs, A-Levels, AP, or IB.
                            </div>
                            <div className={styles.para} style={{textAlignLast: "justify"}}>
                                Traditional education offers its own sense of predictability for globally mobile families. While specific 
                            </div>
                        </div>
                    </div>
                    <div className="" style={{ alignContent: "center" }}>
                        {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                        <YoutubeEmbed videoId="eY2Y2DfosYI" />
                    </div>
                </div>
                {/* Right Column */}
                <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify justify-between" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                    <div className="flex lg:flex-row md:flex-row flex-col lg:gap-[1dvw] md:gap-[1dvw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                curricula vary, the overall structure is similar
                                enough that moving from one traditional school to another is relatively straightforward. A child in Year 5 in a
                                UK curriculum school in Dubai will transition with minimal disruption to another Year 5 in Singapore or London.
                            </div>
                            <div>
                                <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>
                                    Core Philosophical Differences
                                </div>
                                <div className={styles.para} style={{textAlignLast: "justify"}}>
                                    The differences between Montessori and traditional education are not merely about classroom appearance
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                —they reflect fundamentally
                                different beliefs about how children learn. Montessori assumes that children are intrinsically motivated and learn best through
                                self-directed exploration. Teachers are facilitators who create an environment rich with opportunities and then trust children to
                                engage. Traditional education assumes that children need more direction and structure, with teachers as the primary source of knowledge who 
                                organize and present content in a logical sequence.

                            </div>
                        </div>
                    </div>
                    <div className="" style={{ alignContent: "center" }}>
                        {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                        <YoutubeEmbed videoId="zFrtY6z81TA" />
                    </div>
                </div>
            </div>
        </div>
    )
}