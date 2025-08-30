import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css";
import { useEffect, useRef, useState } from "react";

export default function Page58() {
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
            <div className="hyphens-auto flex lg:flex-row md:flex-row flex-col h-screen lg:gap-[2vw] md:gap-[2vw] gap-[5vw] text-justify hyphens-auto mx-auto lg:text-[0.9vw] md:text-[0.9vw] text-[3.46vw]" style={{ height: "100%", lineHeight: `${line_height}px` }}>
                {/* Left Column */}
                <div className="flex flex-col lg:w-1/2 lg:gap-[1vw] md:w-1/2 md:gap-[1vw] gap-[5vw]" id="container" style={{ gap: `${line_height}px` }}>
                    <div className="flex-1"></div>
                    <div className={`${styles.section_heading} lg:text-[1.6vw] md:text-[1.6vw] text-[1.2rem]`}>
                        <p style={{ padding: `${line_height / 3}px`, textTransform: "uppercase", textAlign: "left" }}>
                            Understanding the French curriculum
                        </p>
                    </div>

                    <div>
                        <span className="lg:text-[2.5dvw] md:text-[2.5dvw] text-[3rem] font-bold float-left mr-2 leading-none">F</span>
                        <p className="text-justify lg:text-[1vw] md:text-[1dvw] text-[1.2rem]">
                            or expatriate families navigating the complex world of international education, the choice of curriculum is often one of the most
                            important—and difficult—decisions they will face. Among the many global options available, the French curriculum occupies a special place.
                            Known for its intellectual rigor, strong philosophical grounding, and emphasis on critical thinking and cultural literacy, the French
                            system has earned respect not only in France but around the world. In recent decades, the French government and affiliated agencies have
                            expanded this model globally, creating a network of French international schools that serve both French expatriates and an increasingly
                            diverse international student body.
                        </p>
                    </div>
                    <div className="flex lg:flex-row md:flex-row flex-col lg:gap-[1dvw] md:gap-[1dvw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                For expat parents, the French curriculum offers something distinct: a structured, academically challenging education with deep roots in
                                European intellectual tradition, combined with access to an international network of schools and universities. But it also poses
                                challenges—chief among them language requirements, cultural expectations, and the intensity of study—meaning that families must carefully
                                weigh whether it is the right fit for their children.
                            </div>
                            <div>
                                <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`} style={{textAlign: "left"}}>
                                    The French Curriculum in an International Context
                                </div>
                                <div className={styles.para}>
                                    The French curriculum taught in international schools is not a loose interpretation of French education; it is, by design, a near-exact export of the system
                                    used in
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                France itself. Overseen by the French Ministry of Education and supported abroad by AEFE
                                (Agence pour l’Enseignement Français à l’Étranger)—the Agency for French Education Abroad—this network includes over 540 officially
                                accredited French schools in more than 130 countries.
                                Many of these schools are known as “Lycée Français” or “École Française,” and they
                                adhere strictly to the French national education program, ensuring continuity for students whether they are in Paris, Ho Chi Minh City, or
                                Buenos Aires.
                            </div>
                            <div className={styles.para} style={{textAlignLast: "justify"}}>
                                The curriculum is divided into the same cycles as in France: maternelle (preschool/kindergarten, ages 3–6), école élémentaire (primary
                                school, ages 6–11), collège (lower secondary, ages 11–15), and lycée (upper seco-
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-[1vw] pb-[5vw] lg:w-1/2 md:w-1/2">
                    <div className="flex lg:flex-row md:flex-row flex-1 flex-col gap-[1vw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                ndary, ages 15–18). This progression culminates in the
                                baccalauréat, more commonly known as the “bac,” the highly respected university entrance qualification that is a hallmark of French
                                education.
                            </div>
                            <div className={styles.para}>
                                Many French international schools also offer an adapted track for non-French speakers known as the “Section Internationale” or “Programme
                                Bilingue,” which provides additional language support and often integrates aspects of the host country’s language and culture.
                                Increasingly, some schools also offer the Option Internationale du Baccalauréat (OIB)—a hybrid
                                diploma that blends the French bac with
                                elements of another national curriculum (often British, American, or local), making the system more accessible to a broader range of
                                international students.
                            </div>
                            <div>
                                <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`} style={{textAlign: "left"}}>
                                    Pedagogical Philosophy and Educational Style
                                </div>
                                <div className={styles.para} style={{textAlignLast: "justify"}}>
                                    The French curriculum is famous—and sometimes notorious—for its academic rigor and intellectual demands. At its core is the belief
                                    that education is not merely about skills acquisition but about shaping citizens and thinkers. The system emphasizes logic,
                                    analysis, and argumentation, with a heavy focus on written expression. Students from an early age are expected to articulate their
                                    ideas clearly, defend their opinions with evidence, and engage critically with literature, history, and philosophy.
                                    This philosophical bent becomes particularly evident in the final years of
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className="gap-[1vw] border-t-4 border-b-4 border-black-60 flex-1 lg:mt-[0.3dvw] md:mt-[0.3dvw]" >
                                <div style={{ alignItems: "center", display: "flex", justifyContent: "center", height: "100%" }}>
                                    <div className={`flex-1 relative text-center`} style={{ position: "relative", fontFamily: "auto" }}>
                                        <p
                                            className="dark:text-white-600 text-black-600 opacity-20 lg:text-[450px] md:text-[400px] text-[70vw]"
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
                                            className="lg:text-[1.4dvw] md:text-[1.4dvw] text-[1.3rem] p-[1rem]"
                                            style={{
                                                // fontSize: `1vw`,
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
                                            Many French international schools also offer an adapted track for non-French speakers known as the “Section Internationale” or “Programme Bilingue,” which provides additional language support and often integrates aspects of the host country’s language and culture.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ height: "100%" }} controls></video> */}
                                <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="9O-AgFSNTXs" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

