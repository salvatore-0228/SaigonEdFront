import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page32() {
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
                    <div className="flex-1"></div>
                    <div>
                        <div className={`${styles.section_heading} lg:text-[2vw] md:text-[2vw] text-[1.2rem]`}>
                            <p style={{ padding: `${line_height / 3}px`, textTransform: "uppercase" }}>
                                Bilingual versus English-only Schools
                            </p>
                        </div>
                    </div>
                    <div>
                        <span className="lg:text-[2.5dvw] md:text-[2.5dvw] text-[4rem] font-bold float-left mr-2 leading-none">C</span>
                        <p className="text-justify lg:text-[1vw] md:text-[1dvw] text-[1.2rem]">
                            hoosing between bilingual and English-only international schools is one of the most nuanced decisions expatriate parents face when
                            relocating to Asia. While curriculum type and tuition fees often dominate the early research phase, the question of language of
                            instruction has far-reaching implications for a child’s academic trajectory, cultural integration, and even identity formation. In many
                            Asian cities—from Singapore and Bangkok to Tokyo, Shanghai, and Ho Chi Minh City—families will encounter a spectrum of international
                            school options: some fully English-medium, others deliberately bilingual (or even trilingual), weaving English with the host country’s
                            language or another world language such as French, German, or Mandarin.
                        </p>
                    </div>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                The choice is rarely straightforward. 
                            </div>
                            <div className={styles.para}>
                                Parents must weigh the benefits of linguistic immersion against the possible academic strain of
                                mastering multiple languages, the role of English in their child’s future,
                                and the degree to which they want their children to
                                integrate into their host country’s culture. 
                            </div>
                            <div className={styles.para}>
                                This article explores the advantages and disadvantages of bilingual and English-only
                                schools in the international school system, specifically through the lens of expatriate families relocating to Asia.
                            </div>
                        </div>

                        <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col gap-[1rem]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                            <div>
                                <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>
                                    Defining the Terms: What Do We Mean by Bilingual and English-Only Schools?
                                </div>
                                <div className={styles.para}>
                                    English-only schools are what most expatriates imagine when they think of “international schools.” They operate primarily or
                                    exclusively in English, regardless of the student’s nationality, and are often modeled on curricula from English-speaking countries—British
                                    (IGCSE/A-Levels), American (AP, high school diploma), Australian, or the International Baccalaureate. While they may offer language
                                    classes (Mandarin, French, Spanish) as subjects, English remains the sole or dominant language of instruction.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Right Column */}
                <div className="flex flex-col flex-1 lg:w-1/2 md:w-1/2 gap-[1vw] text-justify lg:pb-0 md:pb-0 pb-[5dvw] justify-between" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw]" style={{ height: "calc(100% - 50dvw * 9/16)" }}>
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para} style={{ textAlignLast: "justify" }}>
                                Bilingual schools, on the other hand, deliver a significant portion of their curriculum in English and another language—often the local
                                language of the host country (e.g., Thai in Bangkok, Mandarin in Shanghai, Japanese in Tokyo), but sometimes another major global
                                language (e.g., French, German). The term “bilingual” can mean many things in practice: a strict 50/50 split in instruction time between
                                languages, a model where one language dominates in early years
                            </div>
                        </div>

                        <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify" style={{ gap: `${line_height}px` }}>
                            <div className="gap-[1vw] border-t-4 border-b-4 border-black-60 lg:my-[0.4dvw] md:my-[0.4dvw] flex-1">
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
                                                lineHeight: `${line_height * 1.1}px`
                                            }}>
                                            A RANGE OF REPORTS OVER A NUMBER OF YEARS ALLOWS A SCHOOL TO SEE THE WAYS IN WHICH A PUPIL HAS DEVELOPED AND GIVES THEM SOME IDEA OF WHAT MIGHT BE TO COME
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="" style={{ alignContent: "center" }}>
                        {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                        <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="smeKhh2e9MQ" />
                    </div>
                </div>
            </div>
        </div>
    )
}