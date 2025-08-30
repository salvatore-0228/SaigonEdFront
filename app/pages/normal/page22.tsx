import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page22() {
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
                <div className="flex flex-col flex-1" style={{ gap: `${line_height}px` }} id="container">
                    <div className="flex-1"></div>
                    <div>
                        <div className={`${styles.special_article} lg:text-[1.8dvw] md:text-[1.8dvw] text-[1.3rem]`} style={{ lineHeight: `${isMobile ? line_height : line_height * 1.5}px` }}>
                            <p className="">Preparing your child for the world stage</p>
                        </div>
                        <div>
                            <div className={styles.article_italic_subtitle}>
                                The performing arts are creative keys that can unlock your child’s imagination and significantly transform their education
                            </div>
                            <div className={styles.article_italic_byine}>
                                By Nord Anglia
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className="lg:text-[2.5vw] md:text-[3vw] text-[9vw] font-bold float-left mr-2 leading-none">E</span>
                        <p className="text-justify lg:text-[1vw] md:text-[1vw] text-[1.2rem]">
                            The performing arts should play a key role in your child’s education. In many ﬁndings, researchers are linking the study of
                            performing arts to better child development and higher academic achievement.
                        </p>
                    </div>
                    <div className="flex lg:flex-row md:flex-row flex-col">
                        <div className="gap-[1vw] flex lg:flex-row md:flex-row flex-col">
                            <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                                <div>
                                    <div className={`${styles.sub_heading} lg:text-[120%]`}>
                                        Creativity and innovation
                                    </div>
                                    <div className={styles.para}>
                                        Creating, interpreting and improvising are at the core of the Juilliard-Nord Anglia Performing Arts Programme.
                                        Through the study of music, dance, and drama (which encourage experimentation, occasional failure, lateral thinking etc.) students can stretch or surpass
                                        the boundaries of traditional education. Every experience in the classroom, studio or the theatre teaches students to act independently
                                        and use their bodies to create and innovate in the moment.
                                    </div>
                                </div>
                                <div>
                                    <div className={`${styles.sub_heading} lg:text-[120%]`}>
                                        Self-confidence and presentation skills
                                    </div>
                                    <div className={styles.para}>
                                        Through the performing arts, children learn to
                                        communicate effectively and connect with others intellectually
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                                <div className={styles.para}>
                                    and emotionally. With performance and repetition,
                                    children acquire skills such as poise, focus and overcoming anxiety, best preparing them for presenting, communicating and leading in the future”.
                                </div>
                                <div>
                                    <div className={`${styles.sub_heading} lg:text-[120%]`}>A medium for self-expression</div>
                                    <div className={styles.para}>
                                        The performing arts can encourage your child to explore their emotions, expanding their imagination and helping them develop their own, unique voice.
                                        Each discipline, music, dance and drama, engage a child’s brain, body and emotions in different ways to encourage their confidence and find joy in self-expression.
                                        The development of this ability has significant and positive effects on a child’s development.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                {/* Right Column */}
                <div className="flex lg:flex-row md:flex-row flex-col flex-1 lg:w-1/2 md:w-1/2  gap-[1rem] text-justify md:pb-0 lg:pb-0 pb-[5dvw]" style={{ lineHeight: `${line_height}px` }}>
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            <div className={styles.sub_heading} style={{ fontStyle: "italic" }}>Empathy and compassion</div>
                            <div className={styles.para}>
                                Performing arts help students to learn the crucial skill of understanding diverse points of view which helps them to learn empathy and compassion for others.
                                Experiences such as embodying character, portraying an emotion physically, and singing another person’s lyrics, illustrate how music,
                                dance and drama each accomplish this in a different way.
                            </div>
                        </div>
                        <div>
                            <div className={styles.sub_heading} style={{ fontStyle: "italic" }}>
                                Cultural awareness and appreciation
                            </div>
                            <div className={styles.para}>
                                Cultural awareness and appreciation Learning to appreciate and engage in music, dance and drama from different cultures, communities and
                                traditions is an important component in helping your child develop into a true global citizen that understands global culture in a more nuanced
                                way.
                            </div>
                        </div>

                        <div>
                            <div className={styles.sub_heading} style={{ fontStyle: "italic" }}>Improved academic outcomes</div>
                            <div className={styles.para}>
                                Several findings, including NAE’s globally-conducted pupil survey and parent survey, demonstrate that children studying music,
                                dance and drama are more proficient in reading, writing and mathematics.
                            </div>
                        </div>
                        <div className={styles.para}>
                            In countries with students that rank highly in these subjects,
                            such as Japan, Hungary and the Netherlands, arts and music education form a mandatory part of a school’s curriculum.
                            Other studies show children exposed to all three performing arts are happier, more engaged and enjoy going to school — all of which contribute to their future success.”
                        </div>
                    </div>

                    <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify" style={{ gap: `${line_height}px` }}>
                        <div className="flex-1">
                            <div className={styles.sub_heading} style={{ fontStyle: "italic" }}>
                                Physical and personal development
                            </div>
                            <div className={styles.para}>
                                Alongside physical education, the performing arts help children with body control, awareness and fitness,
                                encouraging positive lifestyle choices and helping to inculcate the habits of health and wellbeing.
                            </div>
                        </div>
                        <div className="gap-[1rem] border-t-4 border-b-4 border-black-60 h-full">
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
                                        className="lg:text-[1.5dvw] md:text-[1.5dvw] text-[1.3rem] p-[1rem]"
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
                                            lineHeight: `${1.5 * line_height}px`,
                                            textTransform: "uppercase"
                                        }}>
                                        The performing arts can encourage your child to explore their emotions, expanding their imagination and helping them develop their own, unique voice.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="" style={{ alignContent: "center" }}>
                            {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%" }} controls></video> */}
                            <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="uQxIytrat-U" />
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