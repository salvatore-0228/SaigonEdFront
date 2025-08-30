import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page18() {
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
                <div className="flex lg:flex-row md:flex-row flex-col lg:w-1/2 md:w-1/2 gap-[1vw]">
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" id="container" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            The International Baccalaureate (IB) Middle Years Program is designed to help
                            them find a sense of belonging in the ever-changing and increasingly interrelated world around them and to foster a positive attitude to learning.
                        </div>
                        <div className={styles.para}>
                            “The program consists of eight subject groups integrated through five areas of interaction that provide a framework for learning within and across the subjects.
                            Students are required to study their mother tongue, a second language, humanities, sciences, mathematics, arts, physical education and technology.
                            In the final year of the program, students also engage in a personal project, which allows them to demonstrate the understanding and skills they have developed
                            throughout the program.”
                            The MYP requires at least 50 hours of teaching time for each subject group, in each year of the programme.
                        </div>
                        <div className={styles.para}>
                            In the final two
                            years of the programme, carefully-defined subject group flexibility allows students to meet local requirements and personal learning goals. In the final year
                            of the programme, MYP eAssessment provides IB-validated grades.
                        </div>
                        <div>
                            <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`} style={{ textAlign: "left", hyphens: "auto" }}>
                                International Baccalaureate Diploma Program
                            </div>
                            <div className={styles.para}>
                                First offered in 1968 in Geneva, Switzerland, the International Baccalaureate Diploma Program is a two-year program which provides a broadly accepted
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col gap-[1rem]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            international qualification for post-secondary education.
                            The IBDP program is recognized by universities around the world and is currently offered by 2,179
                            schools and counting.
                        </div>
                        <div className={styles.para}>
                            The IBDP mission statement states: “Life in the 21st century, in an interconnected, globalized world, requires critical-thinking skills
                            and a sense of international-mindedness, something that International Baccalaureate (IB) Diploma Program students come to know and understand.”
                        </div>
                        <div className={styles.para}>
                            Harvard University educational psychology professor Howard Gardner describes the IBDP as “less parochial than most American efforts”, by helping students
                            “think critically, synthesize knowledge, reflect on their own thought processes and get their feet wet in interdisciplinary thinking”.
                            In the IBDP, students study six courses at higher level
                            or standard level. Students must choose one subject from each of Groups 1 to 5, thus ensuring
                            breadth of experience in languages, social studies, the experimental sciences and mathematics.
                        </div>
                        <div className={styles.para}>
                        </div>
                        <div className={styles.para}>
                            The sixth subject may be an arts subject chosen from Group 6, or the student may choose another subject from Groups 1 to 5.
                            In addition, the program has three core requirements that are included to broaden the educational experience and challenge students to apply their
                            knowledge and understanding:
                        </div>
                    </div>

                </div>
                {/* Right Column */}
                <div className="flex lg:flex-row md:flex-row flex-col lg:w-1/2 md:w-1/2 lg:gap-[1dvw] md:gap-[1dvw] gap-[1rem] text-justify" style={{ lineHeight: `${line_height}px` }}>
                    <div className="flex flex-col lg:w-1/2 md:w-1/2" style={{ gap: `${line_height}px` }}>
                        <div>
                            <div className={styles.para}>
                                <span style={{ fontStyle: "italic", fontWeight: "500" }}>The Extended Essay </span>
                                is a requirement for students to
                                engage in independent research through the in-depth study of a question relating to one of the subjects they are studying.
                            </div>
                            <div className={styles.para}>
                                <span style={{ fontStyle: "italic", fontWeight: "500" }}>Theory of Knowledge </span>
                                is a course designed to encourage each student to reflect on the nature of knowledge by critically examining different ways of knowing
                                (perception, emotion, language and reason) and different kinds of knowledge (scientific, artistic, mathematical
                                and historical).
                            </div>
                            <div className={styles.para}>
                                <span style={{ fontStyle: "italic", fontWeight: "500" }}>Creativity, Action, Service </span>
                                requires that students
                                related to each one of them separately. At international schools this element
                                of the IBDP program provides students the unique opportunity to travel to sometimes
                                exotic locations or interact with the local population in a way they may not have experienced in their home country. The insight gained
                                from these activities often stays with students long after they graduate.
                            </div>
                        </div>
                        <div className={styles.para}>
                            Creativity, Action, Service requires that students actively learn from the experience of doing real tasks beyond the classroom. Students can combine all
                            three components or do activities related to each one of them separately. At international schools this element of the IBDP program provides students the
                            unique opportunity to travel to sometimes exotic locations or interact with the local population in a way they may not have experienced in their home
                            country. The insight gained from these activities often stays with students long after they graduate.
                        </div>
                    </div>

                    <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify justify-between">
                        <YoutubeEmbed className="lg:translate-y-[0.3dvw] md:translate-y-[0.3dvw]" videoId="mKx2HwgSaJ4" />
                        <YoutubeEmbed videoId="DL_WeN2gaTw" />
                        <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="OMJRndSXsMU" />
                    </div>
                </div>
            </div>
        </div>
    )
}