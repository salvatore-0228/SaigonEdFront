import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css";
import { useEffect, useRef, useState } from "react";

export default function Page3() {
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
        <div className="h-full w-full lg:p-[1vw] md:p-[1vw] p-[5vw] dark:bg-gray-900 dark:text-white lg:overflow-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200">
            <div className="flex lg:flex-row md:flex-row flex-col h-screen lg:gap-[2vw] md:gap-[2vw] hyphens-auto mx-auto lg:text-[0.9vw] md:text-[0.9vw] text-[3.46dvw]" style={{ height: "100%", lineHeight: `${line_height}px` }}>
                {/* Left Column */}
                <div className="flex lg:flex-row md:flex-row flex-col lg:w-1/2 lg:gap-[1vw] md:w-1/2 md:gap-[1vw] gap-[5vw]">
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col justify-between" id="container" style={{ gap: `${line_height}px` }}>
                        <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                sports fields, swimming pools, and well resourced art and music spaces. They also emphasize extracurricular depth: Model UN, robotics, community
                                service, overseas excursions, and inter school competitions are common. In contrast, public and Vietnamese private schools rarely offer such
                                amenities, focusing instead on academic rigor and national competitions in math or literature.
                            </div>
                            <div className={styles.para}>
                                Expats seeking full immersion in Vietnamese culture and language may find bilingual schools appealing, as many Vietnamese families
                                attend them too. Such schools break the cap rules that restrict local student
                                percentages in fully foreign invested international
                                schools: bilingual schools may enroll up to 100 percent Vietnamese students, while traditional international schools remain limited to
                                10 percent Vietnamese at primary level and 20 percent at secondary—a cap expected to change as regulations evolve.
                            </div>
                        </div>
                        <div className="" style={{ alignContent: "center" }}>
                            {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                            <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="TY6ot70rW_Y" />
                        </div>
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            Cultural integration poses both opportunities and challenges for expat children. Vietnamese public schools tend to emphasize
                            discipline, rote memorization, and examination success. Many expressively note that Western interactive classroom norms—open
                            discussions, student-led projects, personal expression—are uncommon. Some expat families find students uncomfortable in such
                            environments, especially where Vietnamese is required for all instruction. On the other hand, bilingual and international schools
                            promote a more dynamic and interactive learning style, often with student centred pedagogies, critical thinking skills, creativity,
                            and cross cultural interaction through a diverse student body.
                        </div>
                        <div className={styles.para} style={{ textAlignLast: "justify" }}>
                            Reports from international teachers on Reddit mention mixed feedback: one reviewer described ISHCMC as “the most international of all
                            the schools… with excellent facilities” but added that it is “near maximum
                            capacity… larger class sizes” and that the corporate
                            management style had affected school culture and communication in recent years. Another thread warned against AISVN (American
                            International School of Vietnam), which appears distinct from AIS Vietnam, citing administrative and licensing controversies that have
                            affected operations for the 2024–2025 academic year.
                        </div>
                        <div>
                            <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>
                                Saigon’s School System
                            </div>
                            <div className={styles.para}>
                                For families contemplating public schools, understand-
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-[1vw] lg:pb-0 md:pb-0 pb-[5vw] lg:w-1/2 md:w-1/2">
                    <div className="flex lg:flex-row md:flex-row flex-1 flex-col gap-[1vw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para} style={{ hyphens: "auto" }}>
                                ing the limitations is important. Even where public schools allow foreign
                                students, day to day instruction remains entirely Vietnamese, class sizes are large, exams are frequent, and extracurricular
                                opportunities are minimal. Nevertheless, some expat families who intend to stay long term, speak Vietnamese at home, and wish their
                                children to assimilate locally choose this route for affordability and cultural immersion.
                            </div>
                            <span className={styles.para} style={{ hyphens: "auto" }}>
                                Conversely, bilingual and private Vietnamese curriculum schools strike a compromise, offering a mix of Vietnamese and English instruction,
                                smaller classes, some modern facilities, and generally more flexibility in admission. Such schools enroll many Vietnamese local students
                                alongside expats, creating a multicultural but Vietnamese-informed environment.
                            </span>
                            <span className={styles.para} style={{ hyphens: "auto" }}>
                                However, Vietnamese language literacy remains essential for
                                full participation, and the educational calendar usually adheres to national holidays and testing schedules.
                                Fully international schools are the clearest route for most expatriate families. They allow continuity of curriculum—American, British,
                                IB, or Australian—enable English-medium instruction, and provide globally recognized qualifications that ease transitions for mobile
                                families. 
                            </span>
                            <div className={styles.para} style={{ hyphens: "auto", textAlignLast: "justify" }}>
                                Enrollment tends to be straightforward assuming the student meets age and language requirements and there is space. Admission
                                assessment and interviews 
                            </div>
                        </div>
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col justify-between" style={{ gap: `${line_height}px` }}>
                            <div className="flex flex-col justify-between" style={{ gap: `${line_height}px` }}>
                                <div className={styles.para} style={{ hyphens: "auto" }}>
                                    are standardized.  Contracts are transparent, and schools commonly have experienced parent support services, buddy
                                    systems, and orientation programs to help new students settle socially and academically.
                                </div>
                                <div className={styles.para}>
                                    The academic year in HCMC international and bilingual schools typically begins in early August and ends in late June. Schools may divide
                                    the year into two semesters or three terms.
                                </div>
                                <div className={styles.para}>
                                    They observe major Vietnamese holidays like Tet (Lunar New Year) and public holidays officially
                                    recognized by MOET, combined with school-specific breaks between terms. Report cards follow mid year and end of-year schedules, including
                                    parent teacher conferences often held in person or online.
                                </div>
                                <div className={styles.para} style={{ textAlignLast: "justify" }}>
                                    For families planning the transition, timing is critically important.
                                </div>
                            </div>
                            <div className="" style={{ alignContent: "center" }}>
                                {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                                <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="21yJfzviMJk" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}