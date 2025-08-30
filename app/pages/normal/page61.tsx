import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css";
import { useEffect, useRef, useState } from "react";

export default function Page61() {
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
                <div className="flex lg:w-1/2 md:w-1/2" id="container">
                    <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
                        <div className="flex-1"></div>
                        <div className={`${styles.section_heading} lg:text-[1.5vw] md:text-[1.5vw] text-[1.5rem]`}>
                            <p style={{ padding: `${line_height / 3}px`, textTransform: "uppercase" }}>
                                Understanding the German Curri&shy;culum
                            </p>
                        </div>
                        <div>
                            <span className="lg:text-[2.5dvw] md:text-[2.5dvw] sm:text-[1dvw] text-[3rem] font-bold float-left mr-2 leading-none">F</span>
                            <p className="text-justify lg:text-[1dvw] md:text-[1dvw] text-[1.2rem]">
                                or expatriate families navigating the complex world of international education, the choice of curriculum is often one of the most important—and
                                difficult—decisions they will face. Among the many global options available, the French curriculum occupies a special place. Known for its
                                intellectual rigor, strong philosophical grounding, and emphasis on critical thinking and cultural literacy, the French system has earned respect
                                not only in France but around the world. In recent decades, the French government and affiliated agencies have expanded this model globally,
                                creating a network of French international schools that serve both French expatriates and an increasingly diverse international student body.
                            </p>
                        </div>
                        <div className="flex lg:flex-row md:flex-row flex-col lg:gap-[1vw] md:gap-[1vw]">
                            <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                                <div>
                                    <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`} style={{textAlign: "left"}}>
                                        An Overview of the German Curriculum Abroad
                                    </div>
                                    <div className={styles.para}>
                                        The German curriculum taught in international schools is essentially a transplant of the educational philosophy and structure of schools
                                        in Germany, adapted for an international audience. It is overseen by the Zentralstelle für das Auslandsschulwesen (ZfA), the Central Agency
                                        for German Schools Abroad, which
                                        ensures quality and consistency across the more than 140 official German schools around the world.
                                        These institutions often fall under the umbrella of “Deutsche Auslandsschulen” (German Schools Abroad) and are officially recognized by
                                        the German government.
                                    </div>
                                </div>
                                <div className={styles.para} style={{textAlignLast: "justify"}}>
                                    The core academic pathway in German schools revolves around the Abitur, the university-qualifying
                                </div>
                            </div>
                            <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col" style={{ gap: `${line_height}px` }}>
                                <div className={styles.para}>
                                    certificate considered one of the most
                                    rigorous secondary credentials worldwide. In Germany itself, the Abitur is the culmination of roughly 12 to 13 years of schooling and opens
                                    doors to universities both within Germany and internationally.
                                </div>
                                <div className={styles.para}>
                                    In the international context, many German schools abroad offer two key
                                    routes: the traditional Abitur, taught largely in German, and the “Gemischtsprachiges Internationales Baccalaureate” (GIB), or
                                    mixed-language International Baccalaureate Diploma, which combines the German curriculum with IB elements to serve a broader audience.
                                </div>
                                <div className={styles.para} style={{textAlignLast: "justify"}}>
                                    Some German international schools also provide a bilingual track or offer the Deutsches Internationales
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-[1vw] pb-[5vw] lg:w-1/2 md:w-1/2">
                    <div className="flex lg:flex-row md:flex-row flex-1 flex-col gap-[1vw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                Abitur (DIA), an adaptation of the
                                Abitur specifically designed for international schools. These pathways allow children of expatriates who do not speak fluent German to
                                integrate into the system while still receiving the rigorous academic grounding the German approach is known for.
                            </div>
                            <div>
                                <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>
                                    Pedagogical Philosophy and Structure
                                </div>
                                <div className={styles.para}>
                                    At its heart, the German curriculum emphasizes critical thinking, depth of knowledge, and holistic development. Unlike some
                                    curricula that prioritize breadth—such as the American system, with its wide range of electives—the German model narrows the focus
                                    in the upper years, requiring students to study core subjects to a very high level.
                                </div>
                            </div>
                            <div className={styles.para}>
                                The early years (Grundschule, roughly equivalent to primary school) concentrate on foundational skills—literacy, numeracy, and
                                introduction to social and natural sciences—while also incorporating art, music, and physical education. From there, German schools
                                typically follow the Gymnasium track abroad, the academic route leading to the Abitur. This structure is demanding: by the upper
                                secondary level, students must demonstrate strong proficiency across a range of disciplines, including mathematics, sciences, German
                                language and literature, a foreign language (often English, French, or Spanish), and humanities.
                            </div>
                            <div className={styles.para}>
                                The emphasis on languages is particularly notable.
                            </div>
                        </div>
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className="gap-[1vw] border-t-4 border-b-4 border-black-60 flex-1 lg:mt-[0.4dvw] md:mt-[0.4dvw]" >
                                <div style={{ alignItems: "center", display: "flex", justifyContent: "center", height: "100%" }}>
                                    <div className={`flex-1 relative text-center`} style={{ position: "relative", fontFamily: "auto" }}>
                                        <p
                                            className="dark:text-white-600 text-black-600 opacity-20 lg:text-[450px] md:text-[400px] text-[70vw]"
                                            style={{
                                                position: "absolute",
                                                top: "60%",
                                                left: "50%",
                                                transform: "translate(-50%, -40%)",  // centers the element exactly in the middle
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
                                            className="lg:text-[1.17dvw] md:text-[1.17dvw] text-[1.3rem] lg:p-[1dvw] md:p-[1dvw] p-[1rem]"
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
                                                lineHeight: `${line_height*1.3}px`
                                            }}>
                                            In the international context, many German schools abroad offer two key routes: the traditional Abitur, taught largely in German, and the “Gemischtsprachiges Internationales Baccalaureate” (GIB), or mixed-language International Baccalaureate Diploma, which combines the German curriculum with IB elements to serve a broader audience.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ height: "100%" }} controls></video> */}
                                <YoutubeEmbed className="lg:-translate-y-[0.35dvw] md:-translate-y-[0.35dvw]" videoId="q8SKDsC-Cew" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

