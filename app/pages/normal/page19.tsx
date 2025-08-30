import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page19() {
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
                        <div className={`${styles.section_heading} lg:text-[2vw] md:text-[2vw] text-[1.2rem]`} style={{ lineHeight: `${line_height * 2}px` }}>
                            <p style={{ padding: `${isMobile ? 0 : line_height / 3}px`, textTransform: "uppercase" }}>
                                Information is the key
                            </p>
                        </div>
                        <div className={styles.article_italic_subtitle}>
                            Give your new school all the information they can handle
                        </div>
                    </div>
                    <div>
                        <span className="lg:text-[2.5vw] md:text-[3vw] text-[9vw] font-bold float-left mr-2 leading-none">E</span>
                        <p className="text-justify lg:text-[1vw] md:text-[1vw] text-[1.2rem]">
                            veryone wants the business of starting in a new school to be as smooth, quick and painless as possible, especially if it’s also in a new country.
                            Pupils want to meet their new classmates and teachers and make friends as soon as they can, while parents want to feel reassured that they
                            have made the right decision and that their child will be happy and flourish in their new environment, so they can stop worrying!
                        </p>
                    </div>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col">
                            <div className={styles.para}>
                                Schools also want joining a new learning environment to be a positive experience for all concerned. They want to get to know you and your child,
                                to welcome you into the community and to be able to get on with the business of helping pupils to learn as soon as they can. So, while different schools
                                in different countries with different systems might all have their own registration,
                                enrolment and induction procedures, each with their own particular idiosyncrasies,
                                there is nevertheless one constant, one thing that any school wants about their new starters, wherever in the world that school is
                                – everyone wants information.
                            </div>
                        </div>

                        <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col gap-[1rem]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                Therefore, you can really help your new school simply by giving them as much information about your child as you possibly can.
                            </div>
                            <div className={styles.para}>
                                You might think that schools
                                are only interested in dry, academic documentation. Of course this is
                                important, but schools are about so much more than this and, as a consequence, they value
                                and appreciate information from as wide a variety of sources as possible. It might seem irrelevant, unimportant or even silly, but you’d be surprised at what
                                schools can make out of seemingly unpromising material.
                            </div>
                        </div>
                    </div>

                </div>
                {/* Right Column */}
                <div className="flex flex-col flex-1 lg:w-1/2 md:w-1/2 gap-[1vw] text-justify lg:pb-0 md:pb-0 pb-[5dvw]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw]" style={{ height: "calc(100% - 50dvw * 9/16)" }}>
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div>
                                <div className={`${styles.sub_heading} lg:text-[120%]`}>What do schools want to know?</div>
                                <div className={styles.sub_heading} style={{ fontStyle: "italic" }}>Academic</div>
                                <div className={styles.para} style={{textAlignLast: "auto"}}>
                                    School reports vary markedly around the world, depending on factors such as whether the school is in the independent or maintained sector,
                                    the style of curriculum and assessment, the frequency of the reports and a host of other things besides. It may be
                                    that the school reports you have are familiar to us, or they may represent a new variation on a theme that we have not
                                </div>

                            </div>
                        </div>

                        <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify" style={{ gap: `${line_height}px` }}>
                            <div className="gap-[1vw] border-t-4 border-b-4 border-black-60 h-[25dvh]">
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
                                                lineHeight: `${line_height * 1.2}px`
                                            }}>
                                            A RANGE OF REPORTS OVER A NUMBER OF YEARS ALLOWS A SCHOOL TO SEE THE WAYS IN WHICH A PUPIL HAS DEVELOPED AND GIVES THEM SOME IDEA OF WHAT MIGHT BE TO COME
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="" style={{ alignContent: "center" }}>
                        {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                        <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="yA5fB33oUm0" />
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