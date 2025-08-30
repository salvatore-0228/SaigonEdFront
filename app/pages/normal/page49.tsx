import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page49() {
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
                            <div className={styles.para}>
                                presentations, lab reports, or projects graded by teachers and moderated externally). This blended model means
                                students are not wholly dependent on one high‑stakes exam; their ongoing work throughout the course contributes meaningfully to their
                                final result.
                            </div>
                            <div>
                                <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>
                                    Why International Schools Offer the IB
                                </div>
                                <div className={styles.para} style={{ textAlignLast: "justify" }}>
                                    For international schools, adopting the IB is a way to signal academic quality, global outlook, and consistency. The IB Diploma is
                                    recognized by universities worldwide, from Oxford to MIT to the
                                </div>
                            </div>
                            <div className={styles.para}>
                                University of Tokyo. Admissions officers value IB students for
                                their strong writing, critical thinking, and research skills—not to mention their ability to juggle demanding workloads.
                            </div>
                            <div className="gap-[1vw] border-t-4 border-b-4 border-black-60 h-[25dvh] lg:mb-[0.4dvw] md:mb-[0.4dvw] flex-1">
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
                                            className="lg:text-[1.6dvw] md:text-[1.6dvw] text-[1.3rem] lg:p-[1dvw] md:p-[1dvw] p-[1rem]"
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
                                            For international schools, adopting the IB is a way to signal academic quality, global outlook, and consistency.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col gap-[1rem]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                The IB’s internationalism also aligns perfectly with the ethos of international schools. The curriculum encourages students to consider
                                multiple perspectives, engage with global issues, and develop what the IB calls “international mindedness.”
                                For students in a multicultural classroom, this feels natural; for schools marketing to expatriate parents, it’s an attractive promise.
                            </div>
                            <div>
                                <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>
                                    Strengths of the IB in the International Con&shy;text
                                </div>
                                <div className={styles.para}>
                                    For many families, the IB’s biggest strength is its universality. A child can start the MYP in Dubai, continue it in Singapore, and
                                    finish with the IB Diploma in Switzerland, all within the same curricular framework. This continuity is invaluable for highly mobile
                                    expatriate families who might otherwise face disruption every time they relocate.
                                </div>
                            </div>
                            <div className={styles.para}>
                                The IB also offers breadth without sacrificing depth. Students study a wide range of subjects but can still pursue HL courses that match
                                their ambitions—meaning a science‑oriented student doesn’t have to abandon the humanities entirely, and a humanities‑oriented student still
                                gains exposure to mathematics and science.
                            </div>
                            <div className={styles.para}>
                                Then there’s the skill development. IB students don’t
                                just memorize—they learn how to write research papers, manage time, question
                                assumptions, and collaborate.
                            </div>
                        </div>
                    </div>

                </div>
                {/* Right Column */}
                <div className="flex lg:flex-row md:flex-row flex-col flex-1 lg:w-1/2 lg:gap-[1dvw] md:w-1/2 md:gap-[1dvw] text-justify" style={{ lineHeight: `${line_height}px` }}>
                    <div className="lg:w-1/2  md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            Universities regularly remark that IB graduates arrive on campus ready for the demands of independent
                            study in ways some other curricula don’t always achieve.
                            Finally, the IB’s values-driven nature resonates with many parents.
                        </div>
                        <div className={styles.para}>
                            CAS pushes students beyond academics into real‑world engagement;
                            TOK fosters self‑reflection and philosophical curiosity. Families looking for more than just grades—those who want their children to
                            develop empathy, cultural awareness, and a sense of purpose—often find the IB ethos compelling.
                        </div>
                        <div>
                            <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>
                                Challenges and Considerations for Families
                            </div>
                            <div className={styles.para}>
                                Of course, the IB is not without its challenges. Its reputation for rigor is well deserved—the IB Diploma is academically intense.
                                Students must balance six subjects, multiple internal assessments, a lengthy research essay, CAS obligations, and preparation for final
                                exams. Time management becomes essential; burnout is a risk for students who overload themselves or underestimate the demands.
                            </div>
                        </div>
                        <div className={styles.para} style={{ textAlignLast: "justify" }}>
                            Another nuance is that the IB’s insistence on breadth
                            can sometimes frustrate students who want to specialize early. A teenager determined
                            to be an engineer might question why they need to study literature and
                            write essays for TOK; an aspiring historian might having to tackle mathematics. While the breadth is philosophically intentional, some students grumble
                        </div>
                    </div>

                    <div className="lg:w-1/2 flex flex-col lg:justify-between lg:gap-0 gap-[1dvw]">
                        <div className="gap-[1vw] border-t-4 border-b-4 border-black-60 h-[25dvh] lg:mt-[0.4dvw] md:mt-[0.4dvw]">
                            <div style={{ alignItems: "center", display: "flex", justifyContent: "center", height: "100%" }}>
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
                                        className="lg:text-[1.2dvw] md:text-[1.2dvw] text-[1.3rem] lg:p-[1dvw] md:p-[1dvw] p-[1rem]"
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
                                            lineHeight: `${line_height*1.15}px`
                                        }}>
                                        Universities regularly remark that IB graduates arrive on campus ready for the demands of independent study in ways some other curricula don’t always achieve.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.para}>
                            about find it constraining compared to narrower systems like A‑Levels.
                        </div>
                        <div className={styles.para}>
                            The availability of IB programs can also vary. While the Diploma is widespread, not all international schools offer the full continuum
                            (PYP and MYP), and the Career‑related Programme (CP) is rarer still. Families may find themselves in situations where a school offers the
                            IB Diploma for Years 12 and 13 but uses another curriculum for earlier years.
                        </div>
                        <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="9wl1Pa05dM0" />
                        {/* <iframe
                            src="https://www.youtube.com/embed/M3aAaY7AiEc?autoplay=1&mute=1"
                            title="Vercel Ship Keynote: Introducing the frontend cloud"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            style={{ width: "100%", aspectRatio: "16/9", backgroundColor: "gray" }}
                        />
                        <iframe
                            src="https://www.youtube.com/embed/YDAZIzzuSE0?autoplay=1&mute=1"
                            title="Vercel Ship Keynote: Introducing the frontend cloud"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            style={{ width: "100%",  aspectRatio: "16/9", backgroundColor: "gray" }}
                        />
                        <iframe
                            src="https://www.youtube.com/embed/9wl1Pa05dM0?autoplay=1&mute=1"
                            title="Vercel Ship Keynote: Introducing the frontend cloud"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            style={{ width: "100%", aspectRatio: "16/9", backgroundColor: "gray" }}
                        /> */}
                        {/* <video src="/videos/Saigon Ed Guide landscape.mp4" className="aspect-[16/9] w-full" controls></video>
                        <video src="/videos/Saigon Ed Guide landscape.mp4" className="aspect-[16/9] w-full" controls></video>
                        <video src="/videos/Saigon Ed Guide landscape.mp4" className="aspect-[16/9] w-full" controls></video> */}
                    </div>
                </div>
            </div>
        </div>
    )
}