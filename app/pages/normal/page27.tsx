import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page27() {
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
            <div className="hyphens-auto flex lg:flex-row md:flex-row flex-col gap-[2vw] lg:text-[0.9vw] md:text-[0.9vw] text-[3.316vw]" style={{ lineHeight: `${line_height}px`, height: "100%" }}>
                {/* Left Column */}
                <div className="flex flex-col flex-1 gap-[1vw] lg:w-1/2 md:w-1/2" id="container">
                    <div className="flex-1"></div>
                    <div>
                        <div className={`${styles.special_article} lg:text-[2dvw] md:text-[2dvw] text-[1.3rem]`} style={{ lineHeight: `${line_height * 1.5}px` }}>
                            A DAUNTING CHOICE
                        </div>
                        <div className={styles.article_italic_subtitle}>
                            The complexities of choosing an international school in Asia
                        </div>
                    </div>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                        <div className={`${styles.para} lg:w-1/2 md:w-1/2`} style={{textAlignLast: "justify"}}>
                            Choosing an international school when moving to Asia as an expatriate is one of the most important and often one of the most daunting decisions a family can face.
                            For parents preparing to relocate for work or lifestyle reasons, the choice of school is not merely a logistical consideration; it is the foundation upon which their
                            children’s educational experience, social integration, and emotional well-being will rest for the years they spend abroad.
                            In Asia, where the range of international schooling options is vast and varied, and where cities like Singapore, Bangkok, Ho Chi Minh
                            City, and Tokyo serve as hubs for global business and culture, the process
                            is layered with complexity. From curriculum choices and cultural adaptation to financial implications and long-term academic planning, families
                            are confronted with a maze of factors that can be overwhelming without guidance. Understanding these complexities—and weighing them against
                            your child’s needs, your family’s values, and your future plans—is
                        </div>
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={`${styles.para}`}>
                                essential for making a choice that works not just for the present moment, but for years to come.
                            </div>
                            <div>
                                <div className={`${styles.sub_heading} lg:text-[120%]`}>The First Challenge: Understanding the Landscape of International Schools in Asia</div>
                                <div className={styles.para}>
                                    Asia is home to some of the world’s most vibrant and diverse international school systems. In almost every major city, there are schools that cater
                                    to expatriates from around the globe, offering curricula ranging from American and British to French, German, Japanese, and more recently, the
                                    International Baccalaureate (IB).
                                </div>
                                <div className={styles.para} style={{textAlignLast: "justify"}}>
                                    There are also bilingual programs, hybrid models, and schools with a distinct cultural or national orientation.
                                    This variety is, on the one hand, a major strength. Parents moving from London might find British schools
                                    offering A-Levels or IGCSEs; those from the United States may locate schools offering AP courses; families seeking a globally transferable 
                                    education may
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Column */}
                <div className="flex flex-col lg:w-1/2 md:w-1/2 flex-1 justify-between lg:pb-0 md:pb-0 pb-[5dvw]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1dvw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para} style={{textAlignLast: "justify"}}>
                                find IB schools; and others may
                                discover niche schools reflecting their own cultural or linguistic heritage. On the other hand, this variety means families must make a series of
                                foundational decisions before even beginning the application process.
                                Do you stick to your home country’s curriculum for consistency and easier reintegration later? Do you pivot to an international framework like IB,
                                which might open up a wider array of global universities but may feel unfamiliar? Or do
                            </div>
                        </div>

                        <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                you consider a school that offers a local-language bilingual curriculum in the hope of giving your child a deeper connection to
                                the host country?
                            </div>
                            <div className={styles.para}>
                                In many Asian cities, there is also the question of school tiers and reputation. The oldest, most prestigious international schools often have
                                waiting lists stretching months or even years, with rigorous application processes and fees to match their standing.
                            </div>
                        </div>
                    </div>
                    <div className="" style={{ alignContent: "center" }}>
                        {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                        <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="-PwzN0jeQ8w" />
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