import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page35() {
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
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col justify-between" id="container" style={{ gap: `${line_height}px` }}>
                        <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div>
                                <div className={styles.sub_heading} style={{ fontStyle: "italic" }}>
                                    5. Slower Academic Progress in the Early Years
                                </div>
                                <div className={styles.para}>
                                    Because students are splitting time and cognitive energy between two languages, they may progress more slowly in the short
                                    term—especially in literacy.
                                </div>
                            </div>
                            <div className={styles.para}>
                                While they often “catch up” and even surpass peers later, some families find the early adjustment phase stressful.
                            </div>
                            <div>
                                <div className={`${styles.sub_heading} lg:text-[120%]`}>
                                    Factors That Shape the Decision in an Asian Context
                                </div>
                                <div className={styles.para}>
                                    The choice between bilingual and English-only schools is not made in a vacuum; it’s shaped by a family’s broader context.
                                </div>
                            </div>
                            <div>
                                <div className={styles.sub_heading} style={{ fontStyle: "italic" }}>
                                    Family Language Background
                                </div>
                                <div className={styles.para}>
                                    Because students are splitting time and cognitive energy between two languages, they may progress more slowly in the short
                                    term—especially in literacy. While they often “catch up” and even surpass peers later, some families find the early adjustment phase stressful.
                                </div>
                            </div>
                            <div>
                                <div className={styles.sub_heading} style={{ fontStyle: "italic" }}>
                                    Length of Stay
                                </div>
                                <div className={styles.para}>
                                    For short-term expatriates (e.g., two- to three-year
                                    postings), the effort of transitioning to a bilingual program may not feel
                                    worthwhile—especially if the child will soon return to an English-only system. Long-term expats, or those open to settling in the host
                                    country, may see bilingualism as a valuable investment.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 md:w-1/2 flex flex-col gap-[1dvw]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                        <div>
                            <div className={styles.sub_heading} style={{ fontStyle: "italic" }}>
                                Child’s Personality and Learning Style
                            </div>
                            <div className={styles.para}>
                                Some children thrive on linguistic challenge and pick up new languages joyfully; others may find it frustrating or confidence-denting.
                                Parents must realistically assess their child’s temperament, resilience, and academic strengths.
                            </div>
                        </div>
                        <div className={styles.para}>
                            <div className={styles.sub_heading} style={{ fontStyle: "italic" }}>
                                Future University Plans
                            </div>
                            If university in the US, UK, Canada, or Australia is the firm goal, English-only schools provide a direct pathway. If university in the
                            host country—or flexibility across multiple regions—is on the table, bilingual schools might offer broader horizons.
                        </div>
                        <div>
                            <div className={styles.sub_heading} style={{ fontStyle: "italic" }}>
                                Cultural Values and Priorities
                            </div>
                            <div className={styles.para}>
                                Some families deeply value integration and cultural immersion; others see their time abroad as temporary and prioritize continuity
                                with home. A bilingual school versus an English-only school often reflects that philosophical choice.
                            </div>
                        </div>
                        <div>
                            <div className={styles.sub_heading} style={{ fontStyle: "italic" }}>
                                The Emotional Layer of the Decision
                            </div>
                            <div className={styles.para} style={{textAlignLast: "justify"}}>
                                Beyond academics, there’s an emotional dimension.
                                Parents often grapple with fears: Will my child be overwhelmed in a bilingual
                                school? Will they lose their “home” language if they go to an English-only school? Will they miss out on local friendships—or global ones?
                                Children themselves may have strong preferences. Teenagers in particular may resist the idea of being thrown into a bilingual environment
                                if they feel unpre-
                            </div>
                        </div>
                    </div>

                </div>
                {/* Right Column */}
                <div className="flex lg:flex-row md:flex-row flex-col flex-1 lg:w-1/2 md:w-1/2 lg:gap-[1dvw] md:gap-[1dvw] text-justify" style={{ lineHeight: `${line_height}px` }}>
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            pared. Younger children might be more adaptable but still struggle in the transition phase.
                        </div>
                        <div className={styles.para}>
                            Parents must also consider their own capacity to engage. A bilingual school may involve parent meetings, newsletters, and events in a
                            language they don’t speak. Some parents embrace that as part of
                            their own cultural immersion; others may feel excluded or disconnected.
                        </div>
                        <div>
                            <div className={styles.sub_heading} style={{ fontSize: "120%" }}>
                                Conclusion: Navigating the Bilingual vs. English-Only Crossroads
                            </div>
                            <div className={styles.para}>
                                The choice between a bilingual and an English-only international school in Asia is rarely black and white.
                                Both offer rich possibilities—and both carry trade-offs that can only be weighed in the context of an individual family’s circumstances,
                                values, and goals.
                            </div>
                        </div>
                        <div className={styles.para}>
                            English-only schools offer clarity, continuity, and global academic pathways—an anchor for mobile families and a sure route to
                            English-speaking universities.
                        </div>
                        <div className={styles.para}>
                            Bilingual schools offer immersion, cognitive benefits, and a bridge into the host culture—an investment in deeper integration and linguistic capital.
                        </div>
                        <div className={styles.para}>
                            For some families, the answer is obvious from the start. For others, the decision may involve agonizing deliberation, school visits, and
                            long conversations about identity, belonging, and the future.
                        </div>
                    </div>

                    <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify" style={{ gap: `${line_height}px` }}>
                        <div className="gap-[1rem] border-t-4 border-b-4 border-black-60 lg:my-[0.3dvw] flex-1">
                            <div style={{ alignItems: "center", display: "flex", justifyContent: "center", height: "100%" }}>
                                <div className={`flex-1 relative text-center`} style={{ position: "relative", fontFamily: "auto" }}>
                                    <p
                                        className="dark:text-white-600 text-black-600 opacity-20 lg:text-[450px] md:text-[450px] text-[70vw]"
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
                                        className="lg:text-[1.25dvw] md:text-[1.25dvw] text-[1.3rem] lg:p-[0.9dvw] md:p-[0.9dvw] p-[1rem]"
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
                                            lineHeight: `${line_height * 1.4}px`
                                        }}>
                                        For some families, the answer is obvious from the start. For others, the decision may involve agonizing deliberation, school visits, and long conversations about identity, belonging, and the future.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.para}>
                            But whichever path is chosen, the process itself can be illuminating: it
                            forces families to articulate what they want from their time abroad—not just for their children’s schooling, but for their lives as a whole.
                        </div>
                        <div className="" style={{ alignContent: "center" }}>
                            {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                            <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="5ENnfZ2YS0w" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}