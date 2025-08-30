import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page69() {
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
                <div className="flex flex-col flex-1 justify-between" id="container" style={{ gap: `${line_height}px` }}>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                and how they deliver coursework. A large, well resourced school
                                might offer a wide array of electives like music technology, psychology, or media studies, while a smaller school might stick to the
                                basics. Parents should examine subject lists carefully and ask how consistent course offerings are from year to year.
                            </div>
                            <div className={styles.para} style={{ textAlignLast: "justify" }}>
                                Cost, while generally bundled into tuition at most international schools, can include additional fees for
                            </div>
                        </div>

                        <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col gap-[1rem]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px`, textAlignLast: "justify" }}>
                            <div className={styles.para}>
                                exam registration or retakes.
                                Compared to tuition, these costs are minor, but they are worth noting—particularly if students are sitting multiple subjects or switching
                                syllabi mid program.
                                Philosophically, the IGCSE sits somewhere between the modularity of the
                                AP system and the holistic structure of the IB. It offers depth
                                without the overarching “core” requirements of
                                IB—no extended essay, no compulsory service hours—yet it requires students to cover a
                                balanced slate of
                            </div>
                        </div>
                    </div>
                    {/* <div className="" style={{ alignContent: "center" }}>
                        <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video>
                    </div> */}
                    {/* <iframe
                        src="https://www.youtube.com/embed/mRUvyYYDzHw?autoplay=1&mute=1"
                        title="Vercel Ship Keynote: Introducing the frontend cloud"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        style={{ width: "100%", aspectRatio: "16/9", backgroundColor: "gray" }}
                    /> */}
                    <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="mRUvyYYDzHw" />

                </div>
                {/* Right Column */}
                <div className="flex lg:flex-row md:flex-row flex-col flex-1 lg:w-1/2 lg:gap-[1dvw] md:w-1/2 md:gap-[1dvw] text-justify" style={{ lineHeight: `${line_height}px` }}>
                    <div className="lg:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            subjects, avoiding excessive specialization too early. Many parents and educators see this as an advantage: students
                            can explore a range of disciplines while still beginning to focus on areas of strength.
                        </div>
                        <div className={styles.para}>
                            For expatriate families comparing options, the decision to pursue IGCSE often depends on long term plans. Those aiming for British
                            universities or planning to continue into A Levels may find IGCSE the natural stepping stone. Students who might later transition into the
                            IB Diploma also benefit from the academic
                            discipline and subject breadth that IGCSE instills. Even for families not tied to the British
                            system, the IGCSE’s clarity, structure, and recognition make it an attractive choice, particularly for students aged 14 to 16 who need a
                            strong, internationally respected qualification.
                        </div>
                        <div className={styles.para}>
                            In the end, the IGCSE in international schools represents both a foundation and a launchpad. It challenges students with rigorous
                            coursework, cultivates critical skills, and provides a credential understood around the globe. Yet it also requires thoughtful planning:
                            subject choices, language pathways, and exam preparation all demand foresight and commitment.
                        </div>
                        <div className={styles.para}>
                            For expatriate families navigating the maze
                            of international schooling, understanding the
                            nature of the IGCSE is essential—not just for choosing the right school, but for setting
                            their children on a path that balances challenge, flexibility, and future opportunity.
                        </div>
                    </div>


                    <div className="lg:w-1/2 flex flex-col lg:justify-between lg:gap-0 gap-[1dvw]">
                        {/* <iframe
                            src="https://www.youtube.com/embed/tUWPrDJ31DA?autoplay=1&mute=1"
                            title="Vercel Ship Keynote: Introducing the frontend cloud"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            style={{ width: "100%", aspectRatio: "16/9", backgroundColor: "gray" }}
                        />
                        <iframe
                            src="https://www.youtube.com/embed/VYCW6F4l0kA?autoplay=1&mute=1"
                            title="Vercel Ship Keynote: Introducing the frontend cloud"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            style={{ width: "100%", aspectRatio: "16/9", backgroundColor: "gray" }}
                        />
                        <iframe
                            src="https://www.youtube.com/embed/5uuD9gxRpkA?autoplay=1&mute=1"
                            title="Vercel Ship Keynote: Introducing the frontend cloud"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            style={{ width: "100%", aspectRatio: "16/9", backgroundColor: "gray" }}
                        /> */}
                        {/* <video src="/videos/Saigon Ed Guide landscape.mp4" className="aspect-[16/9] w-full" controls></video> */}
                        <YoutubeEmbed className="lg:translate-y-[0.3dvw] md:translate-y-[0.3dvw]" videoId="tUWPrDJ31DA" />
                        <YoutubeEmbed videoId="JccuFDSdEaU" />
                        <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="Je4gKDADrSg" />
                        {/* <video src="/videos/Saigon Ed Guide landscape.mp4" className="aspect-[16/9] w-full" controls></video>
                        <video src="/videos/Saigon Ed Guide landscape.mp4" className="aspect-[16/9] w-full" controls></video> */}
                    </div>
                </div>
            </div>
        </div>
    )
}