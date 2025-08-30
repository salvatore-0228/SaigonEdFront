import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page68() {
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
                                            className="lg:text-[1.3dvw] md:text-[1.3dvw] text-[1.3rem] p-[1rem]"
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
                                            While the IGCSE itself is not a university entrance qualification—it ends at roughly Grade 10 or Year 11—it is the foundation for advanced studies that lead to university recognition.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.para}>
                                weight around the world and are recognized by universities and employers alike.
                            </div>
                            <div className={styles.para} style={{ textAlignLast: "justify" }}>
                                In international schools, the IGCSE serves as the bridge between lower secondary education and pre university pathways such as A
                                Levels, the International Baccalaureate (IB) Diploma Programme, or, in some schools, Advanced Placement (AP) courses. It is often the
                                stage where students move from general study to
                                more deliberate subject choices. Whereas younger students follow a broad curriculum set by the school, IGCSE students select anywhere from six to ten
                                subjects, balancing core requirements (like mathematics, English,
                                and science) with electives that reflect personal strengths or career ambitions. For instance, a future doctor might pair triple
                                science with math and a foreign language, while a budding artist might include
                            </div>
                        </div>

                        <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col gap-[1rem]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                art and design or drama alongside the core subjects. One of the most notable strengths of the IGCSE is its
                                adaptability. Recognizing the diverse backgrounds of international students,
                                the curriculum offers core and extended levels for many subjects, allowing students of varying abilities to access an appropriately
                                challenging version of the course. There are also tailored pathways for first language, second language, and English as a Second
                                Language (ESL) students.
                            </div>
                            <div className={styles.para}>
                                This makes the IGCSE particularly suited to international schools, where classrooms often include
                                students who have moved countries multiple times and may not be fully fluent in English when they arrive.
                            </div>
                            <div className={styles.para}>
                                The student experience in IGCSE courses reflects a balance between content mastery and skill development. Courses are structured and
                                rigorous but tend to encourage critical thinking and applied knowledge rather than pure rote memorization. In sciences, students
                                conduct experiments and analyze results; in humanities, they write essays and construct arguments. Coursework in some subjects (such
                                as art, drama, or certain language courses) includes practical assessments or portfolios in addition to written exams, meaning that
                                IGCSE evaluation is not purely exam based.
                            </div>
                            <div className={styles.para} style={{ textAlignLast: "justify" }}>
                                Parents often ask how IGCSE qualifications translate to university opportunities. While the IGCSE itself is not a university entrance qualification—it ends at roughly
                            </div>
                        </div>
                    </div>

                </div>
                {/* Right Column */}
                <div className="flex lg:flex-row  md:flex-row flex-col flex-1 lg:w-1/2 lg:gap-[1dvw] md:w-1/2 md:gap-[1dvw] text-justify" style={{ lineHeight: `${line_height}px` }}>
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            Grade 10 or Year 11—it is the foundation for advanced studies that lead to university recognition.
                            A student completing strong IGCSE results typically progresses to A Levels or IB, both of which are globally respected credentials.
                            Universities often look at IGCSE scores as indicators of academic strength, especially for competitive programs or scholarships. A
                            consistent string of A and A* grades signals that a student can handle the academic rigor of subsequent qualifications.
                            Another reason families choose the IGCSE is its global recognition. The program is taught
                            in more than 160 countries, and its
                            standards are widely understood by schools and universities across continents. For expatriate families who might relocate again,
                            IGCSE offers continuity—moving from one international school to another in a different country, a student can generally slot back
                            into the IGCSE framework with minimal disruption.
                        </div>
                        <div className={styles.para}>
                            However, as with any curriculum, there are considerations and nuances that parents should weigh carefully. The IGCSE is academically demanding.
                            Students often juggle eight or more subjects, each with significant content to master by exam time. The final exams are rigorous and comprehensive,
                            requiring sustained effort and careful revision.
                        </div>
                        <div className={styles.para} style={{textAlignLast: "justify"}}>
                            While many international schools provide strong support, some students—particularly those new to
                            English or unfamiliar with British style assessment—may find
                        </div>
                    </div>

                    <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify justify-between" style={{ gap: `${line_height}px` }}>
                        <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                the jump to IGCSE challenging as exams are standardized and administered in English.
                            </div>
                            <div className={styles.para}>
                                Another nuance is the subject selection process. While flexibility is a strength, the choices students make at age 14 can influence
                                their academic trajectory. For instance, a student who opts for double award science (combined science) rather than triple science may
                                later be restricted from pursuing certain science heavy A Level or IB courses. Similarly, some universities may look for a strong
                                foundation in mathematics or languages. Families should work closely with school counselors to ensure subject selections align with
                                future goals.
                            </div>
                            <div className={styles.para} style={{textAlignLast: "justify"}}>
                                The variety between schools also matters. While the IGCSE framework is standardized by Cambridge or Edexcel, individual international schools differ in
                                which subjects they offer, how many IGCSEs they require,
                            </div>
                        </div>

                        {/* <div className="" style={{ alignContent: "center" }}>
                            <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video>
                        </div> */}
                        {/* <iframe
                            src="https://www.youtube.com/embed/rvDZwSE5oLk?autoplay=1&mute=1"
                            title="Vercel Ship Keynote: Introducing the frontend cloud"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            style={{ width: "100%", aspectRatio: "16/9", backgroundColor: "gray" }}
                        /> */}
                        <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="rvDZwSE5oLk" />
                    </div>
                </div>
            </div>
        </div>
    )
}