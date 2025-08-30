import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page21() {
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
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col gap-[1vw]" id="container" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            If your child has earned medals, certificates, ribbons or badges for any sort of sporting event then it’s always a good idea to bring them along
                            to an interview or meeting. Have they set a school or district record? Been involved in a championship winning team? Won a gold medal? Been selected to represent
                            their county, state or country? Achievements like these are things to be proud of and shared, and you should encourage your child to talk
                            confidently Schools also want joining a new learning environment to be a positive experience for all concerned.
                        </div>
                        <div className={styles.para}>
                            They want to get to know you and your child, to welcome you
                            into the community and to be able to get on with the business of helping pupils to learn as soon as they can. So while different schools
                            in different countries with different systems might all have their own registration, enrollment and induction procedures, each with their own particular
                            idiosyncrasies, there is nevertheless one constant, one thing that any school wants about their new starters, wherever in the world that school is – everyone wants
                            information.
                        </div>
                        <div className={styles.para} style={{textAlignLast: "justify"}}>
                            Therefore, you can really help your new school simply by giving them as much information about your child as you possibly can.
                            You might think that schools are only interested in dry, academic documentation. Of course this is important, but schools are about so much more than this and,
                            as a consequence, they value and appreciate information from as wide a
                        </div>
                    </div>

                    <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            variety of sources as possible. It might seem irrelevant,
                            unimportant or even silly, but you’d be surprised at what schools can make out of seemingly unpromising material.
                        </div>
                        <div>
                            <div className={styles.sub_heading} style={{ fontStyle: "italic" }}>Extracurricular activities</div>
                            <div className={styles.para}>
                                There are as many extracurricular activities to potentially talk about as there are pupils in the world, so no matter what your child’s into, tell us about it!
                                There are formal activities from which you may have supporting, documentary material (it’s helpful to collate this and be prepared to present
                                it during an interview or meeting), or there are smaller-scale activities organized on a much more casual basis. In either case, it’s really helpful if your
                                child feels secure and
                                confident enough to be able to talk about them with us.
                            </div>
                        </div>
                        <div className={styles.para}>
                            They may be a musician who has completed grade examinations (the universal standard for describing competence and confidence on an instrument);
                            they can show us the pieces of music they’re working on now to give us a good understanding of their level so we can match them up with the right
                            teachers and fellow musicians. They may have been in an orchestra or ensemble at their old
                            school, in which case it is really useful if they can talk
                            about the pieces they played and their composers, as well as describe their role in the group. 
                        </div>
                        <div className={styles.para}>
                            Or perhaps they were in a band – again,
                            it helps if they’re able to talk about the type of music they play, 
                        </div>
                    </div>

                </div>
                {/* Right Column */}
                <div className="flex lg:flex-row md:flex-row flex-col flex-1 lg:w-1/2 gap-[1vw] lg:pb-0 md:pb-0 pb-[5dvw]" style={{ lineHeight: `${line_height}px` }}>
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            and discuss their influences and the other sorts of music that they like.
                        </div>
                        <div className={styles.para}>
                            There are so many other fascinating things out there that people are interested in, and likewise so many fascinating things that we are interested
                            in hearing your child talk about. Maybe they can speak other languages. Are into mountain climbing. Have an unusual pet. Have travelled to exotic locations.
                            Have met someone famous. Collect antique coins. Like going to the theatre. Spent some time in hospital. Are part of a large family. Anything!
                            Whatever it is, we think hearing them talk about it will help us to understand the sort of person and pupil they’re going to be.
                        </div>
                        <div className={styles.para} style={{ textAlignLast: "justify" }}>
                            Therefore, perhaps the most important thing when your child meets people at their new school is that they know how to talk about what interests them.
                            Can they explain when they first became interested in mountain
                            climbing? What is the most valuable coin in their collection? Why do they like to travel? What is the play they have most enjoyed?
                            importance of civic WidthResponsiveTextTheir aim should be to share with us their knowledge, understanding and passion for their hobbies and interests,
                            so that we get a good idea of what makes them tick. It is this understanding that will
                            help teachers involve your child in the activities they love where they will meet others with the same interests.
                            In the end, you really can’t be too prepared when your child is applying to a new school: Get as 
                        </div>
                    </div>

                    <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify" style={{ gap: `${line_height}px` }}>
                        <div className="gap-[1rem] border-t-4 border-b-4 border-black-60 h-[25dvh] flex-1 lg:mt-[0.4dvw] md:mt-[0.4dvw]">
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
                                            lineHeight: `${line_height * 1.2}px`
                                        }}>
                                        RESEARCHERS HAVE SLOWLY COME TO REALIZE THAT A SCHOOL’S EFFECT ON LEARNING IS NOWHERE NEAR AS SIGNIFICAQNT AS AN INDIVIDUAL TEACHER’S IMPACT ON LEARNING
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.para}>
                                many documents together as you can, even if they seem unimportant or trivial.
                                Get your child ready to show off their sporting medals and ribbons.
                            </div>
                            <div className={styles.para}>
                                Think about the way in which your child presents him- or herself, and make sure that they’re confident talking about and answering
                                questions about their interests.
                                Doing all of this will help the school to get to know your child as quickly as they can, and then everyone – him or her included –
                                can get straight down to the serious business of really enjoying the new school.
                            </div>
                        </div>
                        <div className="" style={{ alignContent: "center" }}>
                            {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                            <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="MnBwUAzzuXg" />
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