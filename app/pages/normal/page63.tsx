import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page63() {
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
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className="gap-[1rem] border-t-4 border-b-4 border-black-60 lg:mt-[0.3dvw] md:mt-[0.3dvw] h-[25dvh] flex-1">
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
                                            className="lg:text-[1.3dvw] md:text-[1.2dvw] text-[1.3rem] p-[1rem]"
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
                                                lineHeight: `${line_height * 1.4}px`,
                                                textTransform: "uppercase"
                                            }}>
                                            Ultimately, the German curriculum in international schools represents more than just an alternative to IB or A Levels—it reflects a particular educational philosophy, one that prizes critical thinking, cultural literacy, and the formation of character alongside academic achievement.

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.para}>
                                and language learning, but the IB is explicitly designed to be globally transferable and
                                adaptable, while the German system remains rooted in its national educational philosophy.
                            </div>
                            <div className={styles.para}>
                                For parents, the choice often comes down to priorities: if a family values deep academic rigor, language immersion, and cultural
                                continuity, the German system stands out. But if they need a curriculum that is easily portable between countries and languages,
                                IB or British programs may prove more practical.
                            </div>
                        </div>

                        <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col gap-[1rem]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`} style={{textAlign: "left"}}>
                                    Enrollment, Access, and the Expatriate Experience
                                </div>
                                Gaining access to a German international school as an
                                expatriate varies by location. Many of these schools were founded primarily to
                                serve German citizens living abroad, so they often prioritize German-speaking students for admission. However, most now actively
                                welcome international families and offer integration programs for non-German speakers.
                            </div>
                            <div className={styles.para}>
                                The enrollment process typically involves an assessment of language ability and academic readiness. Younger children can often enter without
                                prior German and pick up the language through immersion, but older students aiming for the Abitur
                                track may need to demonstrate substantial
                                German proficiency.
                                Some schools offer a bilingual IB diploma for those who want the German experience without the full language hurdle,
                                making the schools more accessible to non-German expats.
                                For expatriate families, another key consideration is tuition.
                            </div>
                            <div className={styles.para}>
                                Unlike public education in Germany, which is free, German schools abroad
                                charge tuition. Costs are often competitive with other international schools in the same city—generally less than ultra-premium British
                                or American schools but more than some local or semi-private options.
                                For German citizens, some costs may be subsidized by the German government or their employer, but most non-German expats pay the full fee.
                            </div>
                        </div>
                    </div>

                </div>
                {/* Right Column */}
                <div className="flex lg:flex-row  md:flex-row flex-col flex-1 lg:w-1/2 lg:gap-[1dvw]  md:w-1/2 md:gap-[1dvw] text-justify" style={{ lineHeight: `${line_height}px` }}>
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                        <div>
                            <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`} style={{textAlign: "left"}}>
                                Why Some Expatriate Families Choose German Schools
                            </div>
                            <div className={styles.para}>
                                For German expats, the reasons for choosing these schools are obvious: cultural continuity, an easy path back into the German
                                system, and the assurance of an internationally respected qualification. For non-German families, the motivation is more nuanced.
                            </div>
                        </div>
                        <div className={styles.para}>
                            Some see the German curriculum as a mark of rigor and prestige, viewing the Abitur as a ticket to elite universities worldwide.
                            Others are attracted to the strong values-driven approach—the idea that students leave not only well educated but well-rounded,
                            culturally aware, and multilingual.
                        </div>
                        <div className={styles.para}>
                            There is also a growing group of non-German expatriates who choose German schools because they appreciate European education models
                            but prefer something different from the British or IB systems. They may also be looking ahead to affordable, high-quality German
                            universities, many of which charge
                            little or no tuition even for international students, and see the Abitur as the ideal entry point.
                        </div>
                        <div>
                            <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`} style={{textAlign: "left"}}>
                                Conclusion: A Distinctive Path in the International School Landscape
                            </div>
                            <div className={styles.para} style={{textAlignLast: "justify"}}>
                                In the crowded and competitive landscape of international schooling, the German curriculum holds a unique position. It is not the
                                most common option available to expatriates, but for those who can access it—and who 
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:w-1/2  md:w-1/2 text-justify justify-between" style={{ gap: `${line_height}px` }}>
                        <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                are willing to engage with its demands—it offers a distinctive and rewarding educational path. Its combination of academic rigor, language depth, and
                                cultural richness makes it particularly appealing to families who value structured learning and global opportunities.
                            </div>
                            <div className={styles.para}>
                                However, it is not a one-size-fits-all solution. For some expatriates, the language barrier, the demanding workload, and the limited
                                geographic availability will outweigh the benefits. 
                            </div>
                            <div className={styles.para}>
                                For others, these very qualities are part of its appeal: a challenge worth
                                undertaking for the sake of intellectual growth and future possibilities.
                            </div>
                            <div className={styles.para}>
                                For expatriate families who resonate with that philosophy, and for children ready to thrive in a demanding but enriching environment, it can be a transformative choice.
                            </div>
                        </div>
                        <div className="" style={{ alignContent: "center" }}>
                            {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                            <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="bza6dC7ByQ8" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}