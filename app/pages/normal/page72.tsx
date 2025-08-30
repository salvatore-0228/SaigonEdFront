import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page72() {
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
            <div className="hyphens-auto flex lg:flex-row md:flex-row flex-col gap-[2vw] lg:text-[0.9vw] md:text-[0.9vw] text-[3.45vw]" style={{ lineHeight: `${line_height}px`, height: "100%" }}>
                {/* Left Column */}
                <div className="flex flex-col flex-1" id="container" style={{ gap: `${line_height}px` }}>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                Either model
                                means a level of logistical planning that goes far beyond the typical weekend business trip. For an expatriate balancing a demanding
                                job in Ho Chi Minh City, the prospect of frequent travel—whether a short domestic hop to Hanoi or a three-hour flight to Singapore—can
                                be daunting.
                            </div>
                            <div className={styles.para}>
                                Time is the first and most obvious challenge. Even the most efficient EMBA travel schedule eats into weekends and downtime. Flights
                                get delayed; classes run late; assignments pile up on return. For expatriates with families, the absence from home can be significant,
                                leading to difficult choices about how to allocate limited personal time. A spouse or partner may need to absorb more household
                                responsibilities, and children may struggle with the parent’s repeated absences. These lifestyle factors aren’t always obvious when
                                applying to a program but become very real after the first few months of commuting.
                            </div>
                            <div className={styles.para} style={{textAlignLast: "justify"}}>
                                Cost is another consideration. While EMBAs are often sponsored or partially funded by employers, not all companies are willing or able
                                to shoulder the expense. Tuition for a regional EMBA—say at INSEAD in Singapore or Kellogg-HKUST in Hong Kong—can run into six figures
                                in U.S. dollars. Add to that the cumulative cost of flights, hotels, visas, and other travel expenses, and the financial commitment
                                grows significantly. For expats who are self-funding their education, the cost equation is more than just tuition—it’s
                            </div>
                        </div>

                        <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col gap-[1rem]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                the total package of money and time invested.
                            </div>
                            <div className={styles.para}>
                                There is also the challenge of mental and physical energy. EMBAs are designed for people who work full-time, but that doesn’t mean the
                                academic workload is light. Balancing assignments, group projects, and intensive study sessions with professional responsibilities
                                is already demanding; adding international travel into the mix can create real fatigue. Jet lag, late-night flight arrivals, and the
                                constant packing and unpacking of bags may sound like small nuisances, but over the course of 18 to 24 months—the typical EMBA
                                duration—they can take a cumulative toll.
                            </div>
                            <div className={styles.para}>
                                Despite these hurdles, many expatriates in Ho Chi Minh City still see enormous value in commuting to an EMBA program. One reason is
                                the caliber of the programs available regionally. Southeast and East Asia are home to some of the best EMBA offerings in the world,
                                including INSEAD in Singapore, the University of Chicago Booth’s EMBA Asia campus in Hong Kong, and the Kellogg-HKUST EMBA partnership.
                            </div>
                            <div className={styles.para}>
                                These programs are consistently ranked among the top global EMBAs, with alumni networks that reach into virtually every industry and
                                geography. For an expat living in Vietnam, the chance to access this level of program without moving continents is highly attractive,
                                even if it means monthly flights and long weekends in another
                                city.
                            </div>
                        </div>
                    </div>

                </div>
                {/* Right Column */}
                <div className="flex lg:flex-row md:flex-row flex-col flex-1 lg:w-1/2 lg:gap-[1dvw] md:w-1/2 md:gap-[1dvw] text-justify" style={{ lineHeight: `${line_height}px` }}>
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            In fact, many people find the travel associated with taking an MBA in another city part of the appeal.
                        </div>
                        <div className={styles.para}>
                            Another draw is the exposure to different markets. Studying an EMBA in Singapore or Hong Kong, for example, gives expatriates in Vietnam
                            a deeper understanding of regional finance, trade, and innovation ecosystems.
                        </div>
                        <div className={styles.para}>
                            The insights gained from these programs often have direct
                            relevance to the professional work expats are doing in Vietnam, particularly in sectors like manufacturing, technology, and investment,
                            where Southeast Asia’s economies are increasingly interconnected.
                        </div>
                        <div className={styles.para}>
                            That said, not every EMBA student is commuting to another country. Some expatriates choose programs that allow for hybrid participation
                            combining online learning with occasional in-person modules. This model has grown in popularity, especially since the pandemic, and
                            can be a lifeline for those who want the benefits of a top-tier EMBA without the full intensity of constant travel. However, hybrid
                            formats can come with their own compromises, such as fewer in-person networking opportunities and a less immersive experience.
                        </div>
                        <div className={styles.para} style={{textAlignLast: "justify"}}>
                            Ultimately, the decision to pursue an EMBA—and to commute for it—comes down to weighing short-term inconvenience against long-term payoff.
                            For many expatriates in Ho Chi Minh City, the payoff is compelling:
                        </div>
                    </div>

                    <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify justify-between" style={{ gap: `${line_height}px` }}>
                        <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                an expanded career horizon, a stronger personal brand, and access to
                                leadership roles that might otherwise remain out of reach. The commute, while taxing, becomes part of the investment. With careful
                                planning—choosing programs with manageable schedules, securing family and employer support, and budgeting realistically—the challenges
                                can be mitigated.
                            </div>
                            <div className={styles.para}>
                                An EMBA is never simply an academic credential; it’s a transformative experience that reshapes how professionals see themselves and their
                                place in the world.
                            </div>
                            <div className={styles.para}>
                                For expatriates in Ho Chi Minh City, the decision to invest in one—even if it means flying to Singapore, Bangkok, or
                                Hong Kong every month—is often about more than a career move. It’s about building a bridge between where they are and where they want to
                                be, both professionally and personally, and embracing the realities of a global life in the process.
                            </div>
                        </div>

                        <div className="" style={{ alignContent: "center" }}>
                            {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                            <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="Zv6i8Vow6jQ" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}