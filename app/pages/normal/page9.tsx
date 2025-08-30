import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page9() {
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
            <div className="hyphens-auto flex lg:flex-row md:flex-row flex-col lg:gap-[2vw] md:gap-[2dvw] lg:text-[0.9vw] md:text-[0.9vw] text-[3.4vw]" style={{ height: "100%" }}>
                {/* Left Column */}
                <div className="flex lg:flex-row md:flex-row flex-col flex-1 lg:gap-[1vw] md:gap-[1dvw]">
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px`, lineHeight: `${line_height}px` }} id="container">
                        <div className={styles.para}>
                            Therefore, in order to get a good feel for a school’s priorities, you might want to ask: what examination boards they use; how their results compare with both
                            national averages and their immediate competitors; which universities their graduates go on to; what community service programs pupils are involved in; pupil
                            participation in the International Award or similar development programs; and the nature and focus of their mentoring programs.
                        </div>
                        <div className={styles.para}>
                            And, of course, if possible speak to the kids who go
                            there. You can often find out more about a school simply
                            by spending five minutes in the company of its most senior students -–those who will shortly be in the
                            outside world, as it were – than any amount of websites and meetings with senior leadership will tell you.
                        </div>
                        <div>
                            <div className={`${styles.sub_heading} lg:text-[120%]`}>Location</div>
                            <div className={styles.para}>
                                One of the most significant and emotionally charged decisions you'll make as an expat parent is choosing the right location of
                                your child’s school.
                            </div>
                        </div>
                        <div className={styles.para}>
                            Unlike at home, where familiarity often guides these choices, living abroad means navigating unfamiliar
                            systems, cultural expectations, and logistical challenges.
                        </div>
                        <div className={styles.para} style={{ textAlignLast: "justify" }}>
                            The school’s location doesn’t just affect your child’s education — it
                            shapes your entire lifestyle abroad, from where you live to how your family integrates into
                        </div>
                    </div>

                    <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col" style={{ gap: `${line_height}px`, lineHeight: `${line_height}px` }}>
                        <div className={styles.para}>
                            the new environment.
                        </div>
                        <div className={styles.para}>
                            The location of your child’s school can dramatically influence your day-to-day life. A long, unpredictable commute may seem manageable
                            in theory, but after a few weeks of early wake-ups, traffic jams, or unreliable transport, it can affect your child’s mood, energy
                            levels, and academic performance. It also impacts your own schedule — trying to balance work commitments with school pickups or
                            emergencies becomes significantly harder if the school is on the other side of the city. Many expat families ultimately choose to live
                            close to their child’s school, which means the school’s location can directly influence your housing decisions, rent costs, and
                            neighborhood options.
                        </div>
                        <div className={styles.para}>
                            There’s also the question of what kind of environment you want your family to be part of. Living near an international school often
                            places you in an “expat bubble,” where your child may interact primarily with other expat kids, often in English or another familiar
                            language.
                            This can provide a sense of community and stability, but it may also limit deeper cultural integration. On the other hand,
                            choosing a school in a more local area can open the door to cultural immersion — if that aligns with your goals and your child’s comfort
                            level.
                        </div>
                        <div className={styles.para}>
                            Safety and infrastructure around the school are also key considerations. Ideally, you want clean streets, access to public
                            transport or school buses, nearby parks,
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex lg:flex-row md:flex-row flex-col flex-1 lg:w-1/2 lg:gap-[1dvw] md:gap-[1dvw] text-justify">
                    <div className="lg:w-1/2 flex flex-col" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            and a neighborhood that feels welcoming and secure.
                        </div>
                        <div className={styles.para}>
                            When starting the selection process, the type of school you choose will narrow your options. Many expat families opt for international
                            schools that follow familiar curriculums like the British, American, or IB systems.
                        </div>
                        <div className={styles.para}>
                            These schools are typically located in
                            expat-friendly zones or suburbs with reliable infrastructure. If you’re considering a local or bilingual school, the range of potential
                            neighborhoods might be broader, but you’ll need to do more in-depth research on school culture, language support, and accessibility.
                        </div>
                        <div className={styles.para}>
                            Transportation also plays a vital role — it’s not just about distance, but how long the journey takes during peak hours and whether
                            safe, reliable school transport is available.
                        </div>
                        <div className={styles.para} style={{ textAlignLast: "justify" }}>
                            As an expat, it’s essential to look at the big picture. The school’s proximity to your workplace, your spouse’s job (if applicable),
                            shopping centers, healthcare, and other services will shape your everyday experience. For instance, a school that looks ideal on paper
                            might be in a part of town that makes commuting or errands incredibly inconvenient. And while you might only be planning to stay a few
                            years, choosing a school location that allows for some continuity — even if you move within the same city — can help reduce disruptions
                            for your child.
                        </div>
                    </div>

                    <div className="flex flex-col lg:w-1/2 text-justify justify-between" style={{ lineHeight: `${line_height}px` }}>
                        <div className="gap-[1rem] border-t-4 border-b-4 border-black-60 lg:mt-[0.4dvw] md:mt-[0.4dvw]">
                            <div style={{ alignItems: "center", display: "flex", justifyContent: "center"}}>
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
                                        className="lg:text-[1.25dvw] md:text-[1.25dvw] text-[1.3rem] lg:p-[1dvw] md:p-[1dvw] p-[1rem]"
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
                                        BASING YOUR JUDGEMENT ON A SCHOOL’S PROGRAM RATHER THAN THE FACILITIES IS GOOD WAY TO ENSURE YOU MAKE THE RIGHT CHOICE
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                Start the process early. International schools can have
                                long waitlists, and securing a place may take time. Create a shortlist of
                                schools that align with your educational and cultural preferences, and map out their locations in relation to likely neighborhoods.
                                If possible, visit the schools and explore the surrounding areas in person before committing. Walk around, visit local shops and parks,
                                and get a feel for the atmosphere. Talk to other expat families — whether through forums, social media, or your company’s network — to
                                get firsthand insights into the pros and cons of different locations.
                            </div>
                            <div className={styles.para}>
                                Ultimately, choosing the right school location is more than a logistical task — it’s a foundational decision that will influence your
                                child’s educational success and your family’s overall well-being during your time abroad. With thoughtful planning, openness to new
                                environments, and a clear understanding of your priorities, you can make a choice that sets your expat experience up for success.
                            </div>
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
    children,
}: {
    baseFontSize: number
    baseWordSpacing: number
    baseLetterSpacing: number
    baseLineHeight: number,
    width: number,
    children?: React.ReactNode,
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