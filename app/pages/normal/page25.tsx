import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page25() {
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
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" id="container" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                        <div>
                            <div className={styles.sub_heading}>The value of steam</div>
                            <div className={styles.para}>
                                Steam is based on the understanding that innovation is often found where different subjects intersect. By learning these
                                subjects at the same time students consider a wider range of perspectives when solving a particular problem. Whereas traditional l
                                earning develops fact-based knowledge, our STEAM programme will develop the skills needed to thrive – flexibility, critical thinking,
                                creativity and communication. There is also a strong body.
                            </div>
                        </div>
                        <div className={styles.para}>
                            MIT has led consistently on STEAM concepts. Their philosophy – Mens et Manus (Mind and Hand) – captures the blend of theory and
                            practical application that is critical to a quality education. Inspired by MIT, a core element of our STEAM programme will encourage
                            students to learn-by-doing, helping them to develop greater understanding of their knowledge by testing theories in practice.
                        </div>
                        <div className="gap-[1dvw] border-t-4 border-b-4 border-black-60 flex-1 lg:-translate-y-[0.4dvw] md:-translate-y-[0.4dvw]" style={{ padding: `${line_height * 1.36}px` }}>
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
                                        className="lg:text-[1.2dvw] md:text-[1.2dvw] text-[1.3rem]"
                                        style={{
                                            fontWeight: "100",
                                            fontFamily: "QuoteFont, sans-serif",
                                            margin: "auto",
                                            textAlign: "center",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            height: "100%",
                                            textTransform: "uppercase",
                                            lineHeight: `${line_height}px`
                                        }}>
                                        Active Participation And Freedom To Explore And Express Ideas With Others While Solving These Real-World, Open-Ended Challenges Is Proven To Enhance Learning.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col gap-[1dvw]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            Working with MIT, we have devised a series of real-world challenges for our students each term. These challenges will be interdisciplinary,
                            critical-thinking activities that will present students with the challenge of a modern day, real-world issue that has yet to be solved.
                            Each will require significant levels of
                            collaboration, experimentation and a designed solution through trial and error. Creating practical challenges for students means that they can
                            develop their knowledge and skills through hands-on exercises.
                        </div>
                        <div className={styles.para}>
                            Active participation and freedom to explore and express ideas with others while solving these real-world, open-ended challenges is proven to
                            enhance learning.
                        </div>
                        <div>
                            <div className={styles.sub_heading}>Building skills today, so that students can succeed tomorrow </div>
                            <div className={styles.para}>
                                At Nord Anglia, we aim to inspire our students through excellence by challenging them to reach for their dreams and to be active participants in the world around them.
                                We encourage ambition and curiosity and prioritise the development of real-world skills so that they will go into the world, ready to learn and discover,
                                keen to be challenged, able to thrive.
                            </div>
                        </div>
                        <div className={styles.para}>
                            By helping our students to develop crucial transferable
                            skills that build on and enhance traditional systems of learning
                            through our performing arts and STEAM programmes, we are preparing them for future success in our ever-changing world.
                        </div>

                    </div>

                </div>
                {/* Right Column */}
                <div className="flex flex-col flex-1 lg:w-1/2 md:w-1/2 text-justify lg:pb-0 md:pb-0 pb-[5dvw] justify-between" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1dvw]" style={{ height: "calc(100% - 100px * 9/16)" }}>

                        <div className="border-t-4 border-b-4 border-black-60 lg:w-1/2 md:w-1/2 lg:mt-[0.4dvw] md:mt-[0.4dvw] lg:pb-[0.2dvw] md:pb-[0.2dvw]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
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
                                        At Nord Anglia, we aim to inspire our students through excellence by challenging them to reach for their dreams and to be active participants in the world around them.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[22dvw] md:w-1/2">
                            <YoutubeEmbed className="lg:translate-y-[0.4dvw] md:translate-y-[0.4dvw]" videoId="WMcuMWY98eQ" />
                        </div>
                    </div>
                    <div className="" style={{ alignContent: "center" }}>
                        {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                        <YoutubeEmbed className="lg:-translate-y-[0.5dvw] md:-translate-y-[0.5dvw]" videoId="by-juJy-6DU" />
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