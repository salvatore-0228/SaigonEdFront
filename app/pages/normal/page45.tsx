import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page45() {
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
                <div className="flex lg:flex-row md:flex-row flex-col lg:w-1/2 md:w-1/2 lg:gap-[1dvw] md:gap-[1dvw]" id="container">
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col justify-between" style={{ gap: `${line_height}px` }}>
                        <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                student’s individual level and pace. This is a powerful asset in international schools, where classrooms are often highly diverse, with students
                                from a dozen with students from a dozen or more different national backgrounds and educational systems. A math program might automatically offer
                                extra practice problems to one student struggling with algebra, while fast-tracking another who has already mastered the concept. For
                                students who might be dealing with the stress of relocation or cultural adjustment, the ability to learn at their own pace can reduce
                                anxiety and improve academic outcomes.
                            </div>
                            <div className={styles.para} style={{ textAlignLast: "justify" }}>
                                Technology also supports continuity of education for internationally mobile families. For expatriates who may relocate frequently due
                                to work, online learning platforms mean that children can maintain a sense of academic consistency even when moving between countries.
                                
                            </div>
                        </div>
                        <div className="" style={{ alignContent: "center" }}>
                            {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                            <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="ogcSQ-cFRVM" />
                        </div>
                    </div>

                    <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col gap-[1rem]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            A student who starts a project in Singapore can continue working on it after moving to Italy without missing a beat. For those in
                            boarding schools or situations where travel disrupts attendance, digital classrooms and recorded lessons ensure learning is not put on hold.
                        </div>
                        <div className={styles.para}>
                            Finally, technology prepares students for the digital realities of the modern world. For international students, who are often already
                            living transnational lives, digital literacy is an essential skill. Navigating virtual collaboration, managing online research, and
                            using digital tools effectively are skills that universities and employers increasingly expect. Exposure to technology-rich classrooms
                            from a young age ensures these students are not only comfortable but proficient in the digital landscape they will inhabit as adults.
                        </div>
                        <div>
                            <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`} style={{textAlign: "left"}}>
                                The Downsides and Complexities of Technology Use
                            </div>
                            <div className={styles.para} style={{ textAlignLast: "justify" }}>
                                Yet, the integration of technology in international classrooms is not without its drawbacks—and for international students, some of
                                these challenges can be amplified. One major concern is screen fatigue and overreliance on digital devices. While laptops, tablets,
                                and smartphones offer powerful learning tools, their constant use can lead to diminished attention spans, eye strain, and a sense
                                of detachment from the physical, social environment of the classroom. Students who spend most of their day looking at
                                screens for lessons, 
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Column */}
                <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify justify-between" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                    <div className="flex lg:flex-row md:flex-row flex-col lg:gap-[1dvw] md:gap-[1dvw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                homework, and communication may experience a kind of “digital burnout,” which can affect not only academic performance but
                                dalso emotional well-being.
                            </div>
                            <div className={styles.para}>
                                Another issue is distraction. Technology in the classroom opens the door to a constant stream of
                                alerts, messages, and notifications.
                                Even with well-designed educational platforms, the temptation of social media, games, and unrelated browsing is ever-present.
                            </div>
                        </div>

                        <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                
                                For international students, who may already feel isolated or disconnected in a new cultural environment, digital distraction can become a
                                coping mechanism, further pulling them away from face-to-face engagement with teachers and peers.
                                Equity and access present another major challenge. While many international schools are well-resourced, not all expatriate families or
                                host countries have equal access to the latest devices or high-speed internet.
                            </div>
                        </div>
                    </div>
                    <div className="" style={{ alignContent: "center" }}>
                        {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                        <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="wIPZyXuD5XM" />
                    </div>
                </div>
            </div>
        </div>
    )
}