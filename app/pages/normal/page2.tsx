import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css";
import { useEffect, useRef, useState } from "react";

export default function Page2() {
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
            <div className="flex lg:flex-row md:flex-row flex-col h-screen lg:gap-[2vw] md:gap-[2vw] text-justify hyphens-auto mx-auto lg:text-[0.9vw] md:text-[0.9vw] text-[3.46dvw]" style={{ height: "100%", lineHeight: `${line_height}px` }}>
                {/* Left Column */}
                <div className="flex lg:flex-row md:flex-row flex-col lg:w-1/2 lg:gap-[1vw] md:w-1/2 md:gap-[1vw] gap-[5vw]">
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col justify-between" id="container" style={{ gap: `${line_height}px` }}>
                        <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                typically with instruction in English or another foreign language—Ho Chi Minh
                                City now boasts around 40 internationally accredited schools across several districts.
                            </div>
                            <div className={styles.para}>
                                The first, International School Ho Chi Minh
                                City (ISHCMC), opened in 1993 and remains one of the most established institutions in District 2 (now Thu Duc City). With approximately
                                1,300 students representing over 50 nationalities, ISHCMC offers the full IB continuum: Primary Years, Middle Years, and Diploma
                                programmes. It is accredited by the IB Organization and run by the Cognita group.
                            </div>
                            <div className={styles.para} style={{textAlignLast: "justify"}}>
                                In District 7, Saigon South International School (SSIS) serves K 12 with an American curriculum culminating in AP and the IB Diploma.
                                Being non profit, it reinvests heavily in its programmes and facilities and is well regarded for its academic support and college counsel-
                            </div>
                        </div>
                        <div className="" style={{ alignContent: "center" }}>
                            {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                            <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="JuswCnYUWBk" />
                        </div>
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            ling. Also in District 7 is Renaissance International School Saigon, which uniquely offers the English National Curriculum, IPC,
                            IGCSE, and IBDP within a cohesive pathway from kindergarten to Year 13, balancing structure and choice.
                        </div>
                        <div className={styles.para}>
                            Australian International School (AIS Vietnam) operates three campuses (District 1 for elementary, and multiple campuses in District 2
                            and Nha Be). It offers the IB Diploma, Cambridge IGCSE for middle years, and U.S. style education across primary and secondary levels.
                        </div>
                        <div className={styles.para}>
                            As of early 2025, AIS enrolls over 1,300 students from about 40 countries and is part of Inspired Education Group. Other options include
                            APU International, British Vietnamese International School, and the newer International German School (IGS HCMC), which delivers German
                            accreditation from Kindergarten to IB Diploma and offers instruction in German, English, and optionally Vietnamese for Vietnamese citizens.
                        </div>
                        <div className={styles.para} style={{ textAlignLast: "justify" }}>
                            Access to public schools for expatriate children depends heavily on language proficiency, residency status, and the school’s openness.
                            Children of foreign nationals legally resident in Vietnam may enroll in public schools, especially at primary and lower secondary
                            levels, but they must demonstrate Vietnamese language fluency and often compete for limited spaces.
                        </div>
                        <div className={styles.para} style={{ textAlignLast: "justify" }}>
                            Many expat parents find public schools challenging 
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-[1vw] lg:pb-0 md:pb-0 pb-[5vw] lg:w-1/2 md:w-1/2">
                    <div className="flex lg:flex-row md:flex-row flex-1 flex-col gap-[1vw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                due to teaching methods that emphasize rote learning, exam preparation, and fast paced curriculum regimes, which can feel rigid or culturally alien to 
                                families accustomed to Western pedagogies.
                            </div>
                            <div className={styles.para}>
                                For expat families, bilingual and international schools provide clearer pathways. Enrollment typically begins with an online application,
                                often between June and December before the academic year starts in August. Parents submit passports, visa or residency documentation,
                                previous school reports, medical records, and sometimes a passport style photo. Many schools require students to sit entrance assessments
                                in English (reading, writing, speaking), mathematics, and occasionally reasoning or cognitive skills. For bilingual streams, testing of
                                Vietnamese proficiency may also be required.
                            </div>
                            <div className={styles.para}>
                                Following assessments, many schools conduct interviews—sometimes including both student and parents—to gauge educational background,
                                language use at home, and alignment with the school’s values or philosophy. Accepted families are typically required to pay a non
                                refundable enrollment deposit alongside an application fee. For instance, some schools might charge several million VND as an application
                                fee and ask for a deposit equivalent to a month or more of tuition, which is credited toward annual fees.
                                Tuition varies widely: bilingual schools often range between USD 6,000 and USD 15,000 per year; fully international 
                            </div>
                        </div>
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col justify-between" style={{ gap: `${line_height}px` }}>
                            <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
                                <div className={styles.para}>
                                    schools may charge USD 10,000 to USD
                                    35,000 depending on grade level, curriculum, and services such as transportation, meals, extracurricular activities, and materials.
                                </div>
                                <div className={styles.para}>
                                    Once accepted, families sign a formal contract that lays out fee schedules, additional optional costs, and service selections.
                                    International schools usually offer after school clubs, sports programmes, school bus service, cafeteria meals, and orientation
                                    sessions for new students and parents. 
                                    These schools run on an academic calendar from August to June, often organized into two or three terms depending on the curriculum system.
                                </div>
                                <div className={styles.para} style={{textAlignLast: "justify"}}>
                                    While the cost is significantly higher, international schools provide advanced facilities: modern science and computer labs, libraries
                                    stocked with English and Vietnamese titles, performing arts studios, extensive 
                                </div>
                            </div>
                            <div className="" style={{ alignContent: "center" }}>
                                {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                                <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="neJihcdy98A" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

