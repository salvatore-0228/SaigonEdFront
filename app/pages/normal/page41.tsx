import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page41() {
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
            <div className="hyphens-auto flex lg:flex-row md:flex-row flex-col gap-[2vw] lg:text-[0.9vw] md:text-[0.9vw] text-[3.44vw]" style={{ lineHeight: `${line_height}px`, height: "100%" }}>
                {/* Left Column */}
                <div className="flex flex-col flex-1" id="container" style={{ gap: `${line_height}px` }}>
                    {/* <div>
                        <span className="text-5xl font-bold float-left mr-2 leading-none">E</span>
                        <p className="text-justify lg:text-[1vw] text-[1.2rem]">
                        veryone wants the business of starting in a new school to be as smooth, quick and painless as possible, especially if it’s also in a new country.
                        Pupils want to meet their new classmates and teachers and make friends as soon as they can, while parents want to feel reassured that they
                        have made the right decision and that their child will be happy and flourish in their new environment, so they can stop worrying!
                        </p>
                        </div> */}
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                international schools are clear. First, they often offer the widest array of
                                facilities, extracurricular activities, and enrichment programs.
                            </div>
                            <div className={styles.para}>
                                Students might have access to fencing lessons, Model United Nations
                                clubs, multiple foreign language courses, and even international service trips. Second, these schools usually recruit some of the most
                                qualified teachers, offering competitive salaries and professional development to attract experienced educators from the UK, US,
                                Australia, or Canada.
                            </div>
                            <div className={styles.para}>
                                This level of talent can translate into a strong academic experience, with students well-prepared for elite
                                universities worldwide.
                            </div>
                            <div className={styles.para}>
                                Another strength is stability and branding. Large private networks operate multiple schools across continents, which can be a huge
                                benefit for families who move frequently. An expat family relocating from Dubai to Singapore might find a Nord Anglia school in both
                                locations, offering curricular continuity and a familiar culture for their child.
                            </div>
                            <div className={styles.para} style={{textAlignLast: "justify"}}>
                                However, the disadvantages of fully private schools can be significant, and the first is almost always cost. Tuition at these
                                institutions is often at the top of the scale, sometimes exceeding USD 30,000 per year per child in cities like Hong Kong or Singapore.
                                On top of tuition, many levy substantial non-refundable fees for
                            </div>
                        </div>

                        <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col gap-[1rem]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                building development or enrollment, adding to the financial burden.
                                For expatriates with comprehensive
                                relocation packages, these costs may be covered, but for self-funding families or those with partial education allowances, the price tag can be daunting.
                            </div>
                            <div className={styles.para}>
                                A second drawback is exclusivity and, at times, commercialization. Because these schools operate as businesses, they may be perceived
                                as catering primarily to those who can afford the high fees rather than focusing on educational equity or community. Some critics argue
                                that the “client” mentality—treating parents as paying customers—can shape school culture in ways that are less about holistic
                                development and more about consumer satisfaction.
                            </div>
                            <div>
                                <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`} style={{textAlign: "left"}}>
                                    Semi-Private International Schools: The Hybrid Option
                                </div>
                                <div className={styles.para}>
                                    Semi-private international schools occupy a fascinating middle ground between private and public education.
                                </div>
                            </div>
                            <div className={styles.para}>
                                They are often the
                                result of partnerships between private entities and local governments or state-owned enterprises, or they may be partially
                                subsidized by government initiatives while still charging tuition fees. In some cases, semi-private schools were originally
                                established for the children of government employees or diplomats and later opened their doors to international students, creating
                                a hybrid identity.
                            </div>
                        </div>
                    </div>

                </div>
                {/* Right Column */}
                <div className="flex flex-col flex-1 md:w-1/2 lg:w-1/2 text-justify" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                    <div className="" style={{ alignContent: "center" }}>
                        {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                        <YoutubeEmbed className="lg:translate-y-[0.3dvw] md:translate-y-[0.3dvw]" videoId="NcPT-LYKqWA" />
                    </div>
                    <div className="flex lg:flex-row md:flex-row flex-col lg:gap-[1dvw] md:gap-[1dvw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                The advantages of semi-private schools often begin with cost. Because these institutions sometimes
                                receive government support—whether
                                in the form of subsidies, land grants, or tax breaks—they can offer lower tuition fees than fully private schools, sometimes
                                significantly so. This makes them attractive for expatriates whose employers provide smaller
                                education allowances or none at all.
                                Semi-private schools may also offer unique cultural integration opportunities.
                            </div>
                        </div>

                        <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para} style={{textAlignLast: "justify"}}>
                                Because they are often tied to local educational systems,
                                they may include local students alongside expatriate children or offer bilingual curricula that blend international programs with aspects
                                of the host country’s culture and language. For expat families seeking more immersion in their host
                                culture, this can be a plus, as it exposes children to local customs and peers rather than confining them to an expat-only bubble.
                                On the flip side, semi-private schools can face limitations in 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}