import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page7() {
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
            <div className="flex lg:flex-row md:flex-row flex-col gap-[2vw] lg:text-[0.9vw] md:text-[0.9vw] hyphens-auto text-[3.46dvw]" style={{ height: "100%" }}>
                {/* Left Column */}
                <div className="flex flex-col lg:w-1/2 lg:gap-[1dvw] md:w-1/2 md:gap-[1dvw]" id="container" style={{ gap: `${line_height}px` }}>
                    <div className="flex lg:flex-row md:flex-row flex-col flex-1 lg:gap-[1vw] md:gap-[1vw]" style={{ height: "calc(100% - 50dvw * 9/16)" }}>
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }} id="container">
                            <div className={styles.para} style={{ textAlignLast: "justify" }}>
                                inspected at regular intervals to ensure that their standards remain high. The International Baccalaureate Diploma Program
                                Schools that offer IB programs undergo a rigorous quality assurance and approval process and are inspected at regular intervals
                                to ensure that their standards remain high. The International Baccalaureate Diploma Program While there may therefore be some
                                differences in the structure of the two educational systems, it should be noted that both
                            </div>
                        </div>

                        <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col" style={{ gap: `${line_height}px`, lineHeight: `${line_height}px` }}>
                            <div className={styles.para} style={{textAlignLast: "justify"}}>
                                require their schools
                                to be accredited and to have rigorous standards regarding the overall quality, effectiveness and value of their educational programs.
                                There may
                                be some superficial differences (for instance, British international schools tend to opt for more formal school uniforms than their US counterparts),
                                but generally speaking the international
                                education that they provide has similar aims and purposes – to encourage in their pupils a love of learning, to pre-
                            </div>
                        </div>
                    </div>
                    <div className="" style={{ alignContent: "center" }}>
                        {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ height: "100%", margin: "auto" }} controls></video> */}
                        <YoutubeEmbed videoId="TfnUA2OUs3Q" />
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col lg:w-1/2 lg:gap-[1dvw] md:w-1/2 md:gap-[1dvw]">
                    <div className="flex lg:flex-row md:flex-row flex-col flex-1 gap-[1rem] text-justify lg:pb-0 md:pb-0 pb-[5vw]" style={{ height: "calc(100% - 50dvw * 9/16)", gap: `${line_height}px` }}>
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                pare them for higher and tertiary education, and to encourage them to become successful and responsible global citizens.
                                Whether you opt for the British, US or another curriculum, ultimately it will come down to the practicality and utility of the
                                system a school employs, and your own affinity with a particular institution. As always, the most useful advice is to visit the school and meet the staff and pupils, and to
                                see what works best for you.
                            </div>
                        </div>

                        <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify gap-[1rem]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                            <div className="gap-[1rem] border-t-4 border-b-4 border-black-60 flex-1 lg:translate-y-[0.4dvw] md:translate-y-[0.4dvw] mb-[1dvw]">
                                <div style={{ alignItems: "center", display: "flex", justifyContent: "center", height: "100%" }}>
                                    <div className={`flex-1 relative text-center`} style={{ position: "relative", fontFamily: "auto" }}>
                                        <p
                                            className="dark:text-white-600 text-black-600 opacity-20 lg:text-[20dvw] md:text-[20dvw] text-[60dvw]"
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
                                            className="lg:text-[1.25dvw] md:text-[1.25dvw] text-[1.3rem] lg:p-[1dvw] md:p-[1dvw] p-[1rem]"
                                            style={{
                                                fontWeight: "100",
                                                fontFamily: "QuoteFont, sans-serif",
                                                margin: "auto",
                                                textAlign: "center",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                height: "100%",
                                                textTransform: "uppercase",
                                                lineHeight: `${line_height}px`
                                            }}>
                                            Whether you opt for the British, US or another curriculum, ultimately it will come down to the practicality and utility of the system a school employs
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="" style={{ alignContent: "center" }}>
                        {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ height: "100%", margin: "auto" }} controls></video> */}
                        <YoutubeEmbed videoId="NcPT-LYKqWA" />
                    </div>
                </div>
            </div>
        </div>
    )
}