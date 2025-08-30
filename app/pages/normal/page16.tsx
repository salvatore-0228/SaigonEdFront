import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page16() {
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
            <div className="hyphens-auto flex h-full lg:flex-row md:flex-row flex-col lg:gap-[2vw] md:gap-[2vw] gap-[2rem] lg:text-[0.9dvw] md:text-[0.9dvw] text-[3.46vw]" style={{ lineHeight: `${line_height}px` }}>

                {/* Right Column */}
                <div className="flex flex-col lg:w-1/2 md:w-1/2 justify-between" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                    <div className="flex lg:flex-row md:flex-row flex-col lg:gap-[1dvw] md:gap-[1dvw]" style={{ height: "calc(100% - (0.5625 * 50dvw))" }}>
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                teaching pedagogy/methodology that it encourages the teachers to follow? Do you have curricula that develop and encourage the concepts and
                                skills that will be important for 21st century citizens?
                            </div>
                            <div>
                                <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>Educational decision makers</div>
                                <div className={styles.para} style={{ textAlignLast: "justify" }}>
                                    Unless the administrators who run the school are
                                    regularly in classrooms, they do not know what they are talking about. Imagine a sports coach who never
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col lg:w-1/2 md:w-1/2" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                attended games. At school, what happens daily in classrooms is the most important work and the decision makers need to be where the action is, to
                                understand the learning going on, to see the challenges that students and teachers face, and to build meaningful relationships.
                            </div>
                            <div className={styles.para}>
                                Question to ask: Is it normal for the school’s decision makers to visit classrooms?
                            </div>
                        </div>
                    </div>
                    <div className="" style={{ alignContent: "center" }}>
                        {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                        <YoutubeEmbed videoId="CT4NM5Ipj1o" />
                    </div>
                </div>
                {/* Left Column */}
                <div className="flex flex-col lg:w-1/2 md:w-1/2 gap-[1vw]" id="container" style={{ gap: `${line_height}px` }}>
                    <div className="flex lg:flex-row md:flex-row flex-col flex-1 gap-[1vw]" style={{ height: "calc(100% - (0.5625 * 50dvw))" }}>
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>Voice of stakeholders</div>
                                <div style={{ textAlignLast: "justify" }}>
                                    Many schools believe that the educators are always right and that parents and students simply do not understand what is best.
                                    Today this is a misguided belief for a school and particularly so at international schools where we have a highly educated parent community
                                    that has enormous experience of what works elsewhere. You want a school where parents are seen as partners in the education process.
                                    Students are also
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col gap-[1vw]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                very astute about what works and what doesn’t.
                                So it is important that schools provide opportunities to listen to its stakeholders. Schools should be making good use of accrediting
                                agencies that encourage honest self-reflection and provide good critical friendship advice from visiting experts.
                                As parents, you should be looking for a school that is open and honest, does not spend all its time telling you how good it was, but instead
                                focuses on how it is moving forward its services.
                            </div>
                            {/* <div className={styles.para}>
                            Questions to ask: Do parents and students have a voice at the school? Is there a parent teacher organization? Is there an annual parent satisfaction survey? Are
                            there student governance opportunities available throughout the school? Is the school accredited?
                        </div> */}
                        </div>
                    </div>
                    <div className="" style={{ alignContent: "center" }}>
                        {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                        <YoutubeEmbed videoId="H7qq8xTqNpc" />
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