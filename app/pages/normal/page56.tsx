import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page56() {
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
            <div className="hyphens-auto flex lg:flex-row md:flex-row flex-col lg:gap-[2vw] lg:text-[0.9vw] md:text-[0.9vw] text-[3.46vw]" id="container" style={{ lineHeight: `${line_height}px`, height: "100%" }}>
                {/* Left Column */}
                <div className="flex lg:flex-row lg:w-1/2 md:w-1/2 md:flex-row flex-col gap-[1vw]">
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col justify-between" style={{ gap: `${line_height}px` }}>
                        <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                In Montessori, mixed-age classrooms are deliberate:
                                older children model learning for younger ones, and younger children observe
                                advanced work, inspiring them to grow into it. In traditional education, same-age grouping ensures that the entire class moves through
                                content together, with teachers managing pacing to keep everyone on track. Montessori sees deep, focused engagement in a chosen activity
                                as a sign of productive learning; traditional models often rely on shorter, teacher-directed lessons across multiple subjects in a single
                                day.
                            </div>
                            <div>
                                <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>
                                    Advantages of Montessori for Expats
                                </div>
                                <div className={styles.para} style={{textAlignLast: "justify"}}>
                                    For expatriate families, the Montessori model has distinct advantages that extend beyond pedagogy. First, its international consistency is a major benefit.
                                    Because Montessori education is based on philosophy rather than a national curriculum, it transcends borders more seamlessly than, say, the British or American
                                </div>
                            </div>
                        </div>
                        <div className="" style={{ alignContent: "center" }}>
                            {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                            <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="3ZFajh6uVWM" />
                        </div>
                    </div>

                    <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col justify-between" style={{ gap: `${line_height}px` }}>
                        <div className="flex border-t-4 border-b-4 border-black-60 lg:mt-[0.3dvw] md:mt-[0.3dvw] flex-1">
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
                                        className="lg:text-[1.4dvw] md:text-[1.2dvw] text-[1.3rem] p-[1rem]"
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
                                            lineHeight: `${line_height * 1.35}px`,
                                            textTransform: "uppercase"
                                        }}>
                                        While plenty of traditional schools encourage creativity and problem-solving, the structure is inherently more teacher-directed, which may leave less room for the kind of personal autonomy that Montessori cultivates.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para} style={{ textAlignLast: "justify" }}>
                                systems. A Montessori school in Tokyo will not be identical
                                to one in Toronto, but the core principles—child-led learning, mixed ages, hands-on materials—are remarkably consistent. For expat
                                children, this can mean less disruption when moving between countries.
                            </div>
                            <div className={styles.para} style={{ textAlignLast: "justify" }}>
                                Montessori’s individualized pace is another advantage. Because students work at their own speed, a child who moves mid-year from one
                                country to another doesn’t necessarily “fall behind.” In a traditional school, arriving halfway through the year might mean scrambling
                                to catch up on missed topics; in Montessori, the child picks up where they are developmentally and
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Column */}
                <div className="flex lg:flex-row md:flex-row flex-col lg:w-1/2 md:w-1/2 lg:gap-[1dvw] md:gap-[1dvw] text-justify">
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            progresses forward. This flexibility
                            can be a relief for expat parents who worry about the academic impact of relocations.
                        </div>
                        <div className={styles.para}>
                            The emphasis on independence and practical life skills in Montessori can also be valuable for globally mobile children. Montessori
                            classrooms teach children not just academics but how to manage their own work, solve problems, and care for their environment—skills that
                            translate well into the adaptability required for expat life. A Montessori child accustomed to setting their own goals and managing their
                            own materials may find it easier to adjust to new schools, languages, or cultural settings.
                        </div>
                        <div>
                            <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>
                                Drawbacks and Limitations of Montessori for Expats
                            </div>
                            <div className={styles.para}>
                                Yet Montessori isn’t without challenges, particularly in the expatriate context. One of the biggest is availability. While Montessori
                                schools are found in many major cities, they are far from universal, and their quality varies. Some schools label themselves
                                “Montessori” without fully adhering to the philosophy or investing in trained Montessori teachers. For expats moving frequently, the
                                availability of authentic Montessori programs can be hit-or-miss.
                            </div>
                        </div>
                        <div className={styles.para} style={{ textAlignLast: "justify" }}>
                            Another issue is the transition out of Montessori. Because Montessori’s structure is so different from
                            traditional schools, some children
                            find it difficult when
                        </div>
                    </div>

                    <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify justify-between" style={{ gap: `${line_height}px` }}>
                        <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                they eventually move into a more conventional setting for secondary education. 
                            </div>
                            <div className={styles.para}>
                                Many Montessori schools stop around
                                age 12, meaning that by middle or high school, children often need to shift into traditional systems to prepare for exams like IB,
                                A-Levels, or AP. That transition can be smooth for some students but jarring for others, especially those used to the freedom of a
                                Montessori environment suddenly facing structured timetables and tests.
                            </div>
                            <div className={styles.para}>
                                Montessori can also pose challenges for parents who want clear benchmarks and grades. Because the system focuses on individual growth,
                                there is often less emphasis on comparative grades or standardized tests in the early years. Some parents find this liberating; others
                                find it unsettling, particularly if they need concrete reports to present to a new school during relocation.
                            </div>
                        </div>
                        <div className="" style={{ alignContent: "center" }}>
                            {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                            <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="zRHfhP3kXV4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}