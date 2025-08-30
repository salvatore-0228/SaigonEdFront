import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page59() {
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
                <div className="flex lg:flex-row md:flex-row flex-col flex-1" id="container" style={{ gap: `${line_height}px` }}>
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col justify-between" style={{ gap: `${line_height}px` }}>
                        <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                lycée, when students in the general academic track
                                prepare for the bac and are required to study philosophy in depth. The subject is not treated as an elective or enrichment activity
                                but as a core part of the curriculum; every student sits a philosophy exam as part of the bac. This speaks to a broader cultural
                                ethos: the French curriculum views education as a means of cultivating well-rounded, reflective individuals, not just future
                                employees.
                            </div>
                            <div className={styles.para}>
                                In terms of structure, the curriculum is highly
                                centralized. Teachers abroad follow the same programs and standards as
                                those in France. Assessments are largely uniform, and final exams are graded according to national criteria. This ensures a
                                remarkable degree of consistency: a student moving from a lycée in Dakar to one in Bangkok will find the same curriculum, the
                                same expectations, and even the same sequence of study.
                            </div>
                        </div>
                        <div className="" style={{ alignContent: "center" }}>
                            {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                            <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="Qm9oS5y9D2g" />
                        </div>
                    </div>

                    <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col gap-[1rem]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            Another notable feature is the emphasis on languages and literature. French is the core language of instruction, but most schools
                            introduce foreign languages (commonly English, Spanish, or German) early.
                        </div>
                        <div className={styles.para}>
                            In addition, the curriculum integrates a strong cultural
                            component, with literature, arts, and history woven deeply into the academic experience.
                        </div>
                        <div>
                            <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`} style={{textAlign: "left"}}>
                                The Baccalauréat: A Prestigious and Demanding Finish Line
                            </div>
                            <div className={styles.para}>
                                For many families, the ultimate goal of the French curriculum is the baccalauréat—a qualification often described as one of the
                                most challenging secondary school diplomas in the world. The bac is not a single exam but a series of rigorous assessments spread
                                over the final two years of lycée, culminating in written and oral exams that test students’ mastery of multiple disciplines.
                            </div>
                        </div>
                        <div className={styles.para}>
                            There are several bac tracks: the général (general academic), which itself splits into streams like scientifique (S – sciences),
                            économique et sociale (ES – economics and social sciences), and littéraire (L – literature); the technologique track, focused on
                            applied sciences and professional pathways; and the professionnel track for vocational training. In the international school context,
                            the bac général is the most common, as it is the track that grants access to universities worldwide.
                        </div>
                    </div>
                </div>
                {/* Right Column */}
                <div className="flex lg:flex-row md:flex-row flex-col flex-1 lg:w-1/2 lg:gap-[1dvw] md:w-1/2 md:gap-[1dvw] text-justify" style={{ lineHeight: `${line_height}px` }}>
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            Passing the bac is no small feat. The exams require students to synthesize years of study and demonstrate sophisticated reasoning,
                            often through essay-style questions that demand nuanced argumentation. 
                        </div>
                        <div className={styles.para}>
                            A philosophy essay might ask students to grapple with concepts
                            like “Is art necessary for society?” or “Does happiness depend on reason?”—questions that reveal the intellectual weight placed on
                            young minds in this system.
                        </div>
                        <div className={styles.para}>
                            Success in the bac opens enormous doors. French universities (which are among the most affordable in Europe) welcome bac holders,
                            but so do prestigious institutions across Europe, North America, and Asia. The bac’s reputation for rigor often works to the advantage
                            of graduates applying to competitive universities abroad.
                        </div>
                        <div>
                            <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>
                                Advantages for Expatriate Families
                            </div>
                            <div className={styles.para}>
                                For expat parents, the French curriculum offers a number of compelling advantages. The most obvious is its global recognition and
                                portability. With hundreds of accredited French schools around the world, families who move frequently can transition their
                                children from one school to another with minimal disruption.
                            </div>
                        </div>
                        <div className={styles.para} style={{ textAlignLast: "justify" }}>
                            Another advantage is the academic rigor. Parents who want their children challenged intellectually often gravitate toward the French
                            system. The curriculum’s
                        </div>
                    </div>

                    <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify justify-between" style={{ gap: `${line_height}px` }}>
                        <div className="flex flex-col gap-[1vw]" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                focus on critical thinking, structured argument, and analytical writing can give students a strong academic
                                foundation for higher education and professional life.
                            </div>
                            <div className={styles.para}>
                                The language dimension is another major plus. For French expatriates, attending a French school abroad ensures children retain fluency
                                in their mother tongue and stay connected to their cultural roots. 
                            </div>
                            <div className={styles.para}>
                                For non-French families, the opportunity for their children to become
                                fluent in French—a major global language and one of the official languages of the UN, the EU, and many international organizations—can be
                                a strong incentive.
                            </div>
                            <div className={styles.para}>
                                The curriculum also reflects a philosophy of education that appeals to many parents: the idea of cultivating well-rounded, independent
                                thinkers rather than narrowly preparing students for tests or careers. 
                            </div>
                        </div>
                        <div className="" style={{ alignContent: "center" }}>
                            {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                            <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="bWWUVcDuFRk" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}