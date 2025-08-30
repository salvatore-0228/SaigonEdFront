import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page65() {
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
                <div className="flex flex-col flex-1 justify-between" id="container" style={{ gap: `${line_height}px` }}>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para} style={{textAlignLast: "justify"}}>
                                Some students complete a handful of AP courses; others pursue a heavy
                                AP load of six or more subjects, culminating in the AP Capstone Diploma—a relatively new credential earned by completing AP Seminar,
                                AP Research, and four additional AP exams.
                                For expatriate families, the flexibility of AP can be a strong advantage. Students transferring into an AP offering school can start
                                with a few AP subjects in Grade 10 or 11 without needing to commit to an entire curriculum over-
                            </div>
                        </div>

                        <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col gap-[1rem]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                            <div className={styles.para} style={{textAlignLast: "justify"}}>
                                haul.
                                This modularity means the AP track integrates well with students who may move again in a few years or who are keeping their options
                                open between U.S. universities and institutions abroad. International schools offering AP often combine it with
                                a broader American curriculum that spans Kindergarten
                                through Grade 12, aligning with the U.S. grade system. In these schools, AP courses generally become available around Grade 10 or 11,
                                after students have completed
                            </div>
                        </div>
                    </div>
                    <div className="" style={{ alignContent: "center" }}>
                        {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                        <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="LZmxRVEBgvI" />
                    </div>
                </div>
                {/* Right Column */}
                <div className="flex lg:flex-row md:flex-row flex-col flex-1 lg:w-1/2 lg:gap-[1dvw]  md:gap-[1dvw] text-justify" style={{ lineHeight: `${line_height}px` }}>
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                              foundational coursework in subjects like algebra, literature, and general science.
                        </div>
                        <div className={styles.para}>
                            The student experience in AP courses tends to mirror what one would expect from a challenging honors class. Courses are fast paced and
                            demanding, often requiring extensive independent reading, research projects, essays, and lab work. An AP Biology course might require
                            a student to master detailed cellular processes at a depth comparable to a first year college course, while AP U.S. Government could
                            involve analyzing Supreme Court decisions and writing position papers. Because AP courses are externally standardized, the teaching
                            framework is fairly consistent across schools, but individual schools and teachers can bring their own teaching style, resources, and
                            enrichment opportunities.
                        </div>
                        <div className={styles.para} style={{textAlignLast: "justify"}}>
                            One major consideration for parents evaluating international schools is university recognition. AP scores are widely accepted by
                            American universities, which often grant college credit for scores of 3 or higher (though selective universities may require a 4 or 5).
                            This can allow students to skip introductory courses and, in some cases, graduate from college early. Increasingly, non U.S.
                            universities also
                            acknowledge AP credentials: Canadian universities treat AP scores much like U.S. institutions, and top universities
                            in the U.K., Australia, Singapore, and Europe accept AP exams as evidence of academic rigor, often alongside
                        </div>
                    </div>

                    <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify" style={{ gap: `${line_height}px` }}>
                        <div className="flex flex-col flex-1" style={{ gap: `${line_height}px` }}>
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
                                            className="lg:text-[1.6dvw] md:text-[1.6dvw] text-[1.3rem] p-[1rem]"
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
                                                lineHeight: `${line_height * 1.7}px`,
                                                textTransform: "uppercase"
                                            }}>
                                            AP is ideal for students planning to attend U.S. universities, those who prefer the flexibility to specialize, and those who want to demonstrate mastery in discrete subjects.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="" style={{ alignContent: "center" }}>
                            {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                            <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="ssUUU50Zw4A" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}