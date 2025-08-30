import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page33() {
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
            <div className="flex lg:flex-row md:flex-row flex-col gap-[2vw] lg:text-[0.9dvw] md:text-[0.9dvw] text-[3.46vw]" style={{ lineHeight: `${line_height}px`, height: "100%", hyphens: "auto" }}>
                {/* Left Column */}
                <div className="flex lg:flex-row md:flex-row flex-col flex-1 gap-[1vw]">
                    <div className="lg:w-1/2 md:w-1/2  flex flex-col" id="container" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            and the balance shifts later, or thematic immersion blocks where certain subjects (math, science) are taught in one language and humanities in another.
                            Both models exist on a spectrum. Some “English-only” schools have strong local language programs; some “bilingual” schools are more
                            “dual-track” than truly blended, with English-speaking and local-speaking streams that only partially overlap. Parents relocating to Asia
                            must dig into each school’s actual implementation to understand where it sits.
                        </div>
                        <div>
                            <div className={`${styles.sub_heading} lg:text-[120%]`}>
                                Advantages of English-Only International Schools
                            </div>
                            <div className={styles.para}>
                                For many expatriates, English-only international schools are the default choice—and for good reason.
                            </div>
                        </div>
                        <div>
                            <div className={styles.sub_heading} style={{ fontStyle: "italic" }}>
                                1. Global Mobility and Universality
                            </div>
                            <div className={styles.para}>
                                English remains the lingua franca of global business, higher education, and diplomacy. For families who move frequently or anticipate
                                multiple relocations, an English-only school offers academic continuity: wherever you go, English-based curricula are widely available.
                                A child who spends primary school in an English-only IB school in Ho Chi Minh City can transition more smoothly to another English-only
                                IB school in Dubai, Hong Kong, or even back home.
                            </div>
                        </div>
                        <div>
                            <div className={styles.sub_heading} style={{ fontStyle: "italic" }}>
                                2. Easier Transitions for Students from English-Speaking Backgrounds
                            </div>
                            <div className={styles.para} style={{ textAlignLast: "justify" }}>
                                For native English speakers-or those already educated
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 md:w-1/2 flex flex-col gap-[1dvw]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            in English—English-only schools eliminate the immediate linguistic hurdle of adapting
                            to a second instructional language. This can be particularly important for children arriving mid-year or for those facing other relocation
                            stressors. With fewer language barriers, they can dive into academics and social life more readily.
                        </div>
                        <div>
                            <div className={styles.sub_heading} style={{ fontStyle: "italic" }}>
                                3. Streamlined Academic Progression
                            </div>
                            <div className={styles.para}>
                                English-only schools often offer a consistent academic trajectory. Subjects are taught in one language, textbooks are uniform, and
                                there is no need to translate or toggle between linguistic frameworks. This simplicity reduces cognitive load and can mean faster
                                mastery of content, especially in technical subjects like math or science where complex concepts can be harder to grasp in a second
                                language.
                            </div>
                        </div>
                        <div>
                            <div className={styles.sub_heading} style={{ fontStyle: "italic" }}>
                                4. University Preparation in English-Speaking Count&shy;ries
                            </div>
                            <div className={styles.para}>
                                If parents envision their children attending university in the UK, US, Australia, or Canada, an English-only environment can be
                                advantageous. Students graduate fully literate in academic English, often with strong essay-writing and research skills honed in
                                English. They may also avoid the need to prove English proficiency later through IELTS or TOEFL exams.
                            </div>
                        </div>
                        <div>
                            <div className={styles.sub_heading} style={{ fontStyle: "italic" }}>
                                5. Broad Social Mix
                            </div>
                            <div className={styles.para} style={{textAlignLast: "justify"}}>
                                English-only schools often attract a highly international student body, since English is the neutral common
                            </div>
                        </div>
                    </div>

                </div>
                {/* Right Column */}
                <div className="flex lg:flex-row md:flex-row flex-col flex-1 lg:w-1/2 lg:gap-[1dvw] md:w-1/2 md:gap-[1dvw] text-justify" style={{ lineHeight: `${line_height}px` }}>
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            language for families from dozens of countries.
                            This creates a cosmopolitan environment where no single nationality dominates and children experience true
                            internationalism.
                        </div>
                        <div>
                            <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>
                                Disadvantages of English-Only International Schools
                            </div>
                            <div className={styles.para}>
                                Despite their appeal, English-only schools come with drawbacks, particularly in an Asian context.
                            </div>
                        </div>
                        <div>
                            <div className={styles.sub_heading} style={{ fontStyle: "italic" }}>
                                1. Limited Cultural Immersion
                            </div>
                            <div className={styles.para}>
                                English-only schools can function as cultural “bubbles.” While they may celebrate local holidays or offer token language classes,
                                students may emerge after years in the country with minimal proficiency in the host language and a shallow understanding of its culture.
                                For families hoping their children will truly
                                connect with their Asian host country, this can feel like a missed opportunity.
                            </div>
                        </div>
                        <div>
                            <div className={styles.sub_heading} style={{ fontStyle: "italic" }}>
                                2. Missed Bilingualism Benefits
                            </div>
                            <div className={styles.para}>
                                Research consistently shows that bilingualism can enhance cognitive flexibility, problem-solving, and even delay age-related cognitive
                                decline later in life. By choosing an English-only school, families forgo a structured path to bilingualism that could benefit their
                                children academically and professionally.
                            </div>
                        </div>
                        <div>
                            <div className={styles.sub_heading} style={{ fontStyle: "italic" }}>
                                3. Segregation from Local Communities
                            </div>
                            <div className={styles.para}>
                                English-only schools often draw mainly expatriates and
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify justify-between" style={{ gap: `${line_height}px` }}>
                        <div className="" style={{ alignContent: "center" }}>
                            {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                            <YoutubeEmbed className="lg:translate-y-[0.3dvw] md:translate-y-[0.3dvw]" videoId="GXFlehASOPU" />
                        </div>
                        <div className={styles.para}>
                            a limited subset of affluent locals. This can isolate children from local peers
                            and from the linguistic realities of the host country, making everyday life outside school—ordering food, chatting with neighbors—more
                            challenging.
                        </div>
                        <div className="gap-[1vw] border-t-4 border-b-4 border-black-60 lg:mb-[0.4dvw] md:mb-[0.4dvw] flex-1">
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
                                        className="lg:text-[1.4dvw] md:text-[1.4dvw] text-[1.3rem] lg:p-[1dvw] md:p-[1dvw] p-[1rem]"
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
                                            lineHeight: `${line_height * 1.3}px`
                                        }}>
                                        English-only schools often attract a highly international student body, since English is the neutral common language for families from dozens of countries.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}