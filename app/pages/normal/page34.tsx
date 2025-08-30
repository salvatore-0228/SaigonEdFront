import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page34() {
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
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" id="container" style={{ gap: `${line_height}px` }}>
                        <div>
                            <div className={styles.sub_heading} style={{ fontStyle: "italic" }}>
                                4. Overreliance on English for Identity
                            </div>
                            <div className={styles.para}>
                                Children in English-only environments may become “third culture kids,” highly globalized but not deeply connected to either their home
                                culture or their host culture. While this can be enriching, it can also create identity confusion.
                            </div>
                        </div>
                        <div>
                            <div className={styles.sub_heading} style={{ fontStyle: "italic" }}>
                                5. Higher Costs and Prestige Premium
                            </div>
                            <div className={styles.para}>
                                Top-tier English-only international schools—especially those affiliated with well-known British or American brands—often command the
                                highest fees.
                            </div>
                        </div>
                        <div className={styles.para}>
                            Parents may find they’re paying a premium for a global English brand name, even when a bilingual school of equal quality
                            costs significantly less.
                        </div>
                        <div>
                            <div className={`${styles.sub_heading} text-justify lg:text-[120%] md:text-[120%]`} style={{textAlign: "left"}}>
                                Advantages of Bilingual International Schools
                            </div>
                            <div className={styles.para} style={{textAlignLast: "justify"}}>
                                Bilingual international schools have been gaining
                            </div>
                        </div>
                        <div className="gap-[1vw] border-t-4 border-b-4 border-black-60 lg:mb-[0.4dvw] md:mb-[0.4dvw] flex-1">
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
                                        className="lg:text-[1.4dvw] md:text-[1.4dvw] text-[1.3rem] lg:p-[1dvw] md:p-[1dvw] p-[1rem]"
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
                                            lineHeight: `${line_height * 1.5}px`
                                        }}>
                                        The most obvious advantage is the opportunity for students to achieve genuine bilingualism.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 md:w-1/2 flex flex-col gap-[1dvw]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            popularity across Asia, particularly among younger expatriate families seeking
                            more than an “expat bubble” experience.
                        </div>
                        <div>
                            <div className={styles.sub_heading} style={{ fontStyle: "italic" }}>
                                1. True Bilingual Proficiency
                            </div>
                            <div className={styles.para}>
                                The most obvious advantage is the opportunity for students to achieve genuine bilingualism. Being educated in two languages—not just
                                learning one in class for 40 minutes a day—builds deep literacy, critical thinking in both languages, and cultural fluency that can
                                last a lifetime.
                            </div>
                        </div>
                        <div>
                            <div className={styles.sub_heading} style={{ fontStyle: "italic" }}>
                                2. Deeper Cultural Integration
                            </div>
                            <div className={styles.para}>
                                Bilingual schools typically have stronger connections to the host culture. Local language instruction often goes hand-in-hand with
                                exposure to local literature, history, and traditions. Students gain a richer, more authentic understanding of the society they live
                                in, and can interact meaningfully with local peers and communities.
                            </div>
                        </div>
                        <div>
                            <div className={styles.sub_heading} style={{ fontStyle: "italic" }}>
                                3. Cognitive and Academic Benefits
                            </div>
                            <div className={styles.para}>
                                Studies link bilingual education to improved executive function, multitasking ability, and even creative thinking. Children who switch
                                between languages develop mental flexibility that can benefit them across all academic disciplines.
                            </div>
                        </div>
                        <div>
                            <div className={styles.sub_heading} style={{ fontStyle: "italic" }}>
                                4. Expanded University and Career Options
                            </div>
                            <div className={styles.para} style={{ textAlignLast: "justify" }}>
                                Graduates from bilingual schools may have an edge
                            </div>
                        </div>
                    </div>

                </div>
                {/* Right Column */}
                <div className="flex lg:flex-row md:flex-row flex-col flex-1 lg:w-1/2 lg:gap-[1dvw] md:gap-[1dvw] text-justify" style={{ lineHeight: `${line_height}px` }}>
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para} style={{ textAlignLast: "justify" }}>
                            when applying to universities in the host country or in other nations where the second language
                            is spoken. Professionally, bilingualism is a sought-after skill—particularly in Asia, where companies value employees
                            who can navigate between English and local languages.
                        </div>
                        <div>
                            <div className={styles.sub_heading} style={{ fontStyle: "italic" }}>
                                5. Diverse and Locally Engaged Community
                            </div>
                            <div className={styles.para}>
                                Bilingual schools often attract both expatriates and local families, creating a more integrated community. For parents seeking social ties beyond
                                the expat circuit, this can be a major plus.
                            </div>
                        </div>
                        <div>
                            <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`} style={{textAlign: "left"}}>
                                Disadvantages of Bilingual International Schools
                            </div>
                            <div className={styles.para}>
                                Bilingual programs are not without challenges, and not every child—or every family situation—is suited to them.
                            </div>
                        </div>
                        <div>
                            <div className={styles.sub_heading} style={{ fontStyle: "italic" }}>
                                1. Academic Pressure and Language Load
                            </div>
                            <div className={styles.para}>
                                Learning academic content in two languages can be cognitively demanding, especially for children who are not already proficient in both.
                                Younger children often adapt quickly, but older children entering a bilingual system midstream may struggle.
                            </div>
                        </div>
                        <div>
                            <div className={styles.sub_heading} style={{ fontStyle: "italic" }}>
                                2. Possible Dilution of English Skills
                            </div>
                            <div className={styles.para} style={{textAlignLast: "justify"}}>
                                If English is not the dominant instructional language, there is a risk that students’ academic English—particularly writing—may not
                                reach the same level as it wou-
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify justify-between" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            ld in an English-only environment.
                            This can be a concern for families aiming for top universities in English-speaking countries.
                        </div>
                        <div>
                            <div className={styles.sub_heading} style={{ fontStyle: "italic" }}>
                                3. Inconsistency Across Programs
                            </div>
                            <div className={styles.para}>
                                “Bilingual” can mean many different things. Some programs are rigorous 50/50 models; others lean heavily toward the local language
                                with limited English, or vice versa. Quality and balance vary widely, and parents may find themselves with less clarity about the
                                ultimate outcomes.
                            </div>
                        </div>
                        <div>
                            <div className={styles.sub_heading} style={{ fontStyle: "italic" }}>
                                4. Social Segmentation Within the School
                            </div>
                            <div className={styles.para}>
                                In some bilingual schools, local students gravitate to one language stream, expatriates to another, and true integration remains
                                elusive. Parents expecting a perfectly blended environment may find there are still linguistic divides.
                            </div>
                        </div>
                        <div className="" style={{ alignContent: "center" }}>
                            {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                            <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="GXFlehASOPU" />
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