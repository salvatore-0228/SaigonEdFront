import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page23() {
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
                <div className="flex flex-col flex-1" style={{ gap: `${line_height}px` }} id="container">
                    <div className="flex-1"></div>
                    <div>
                        <div className={`${styles.special_article} lg:text-[1.8dvw] md:text-[1.8dvw] text-[1.3rem]`} style={{ lineHeight: `${isMobile ? line_height : line_height * 1.5}px` }}>
                            Empowering your child to change the world
                        </div>
                        <div className={styles.article_italic_byine}>
                            By Nord Anglia
                        </div>
                    </div>
                    <div>
                        <span className="lg:text-[2.5vw] md:text-[3vw] text-[9vw] font-bold float-left mr-2 leading-none">F</span>
                        <p className="text-justify lg:text-[1vw] md:text-[1vw] text-[1.2rem]">
                            or many, making the world a better place is a dream they would one day like to accomplish. Through our collaboration with UNICEF,
                            we provide students with tangible activities and challenges so that they can take direct action to make this dream a reality.
                            In collaboration with UNICEF, Nord Anglia Education students have their social consciousness raised so they care more deeply about the world and the people in it.
                            Your child will research, develop and debate challenges facing our society, and take action to address them.
                            Through special activities and events with UNICEF, your child will be equipped to make their voice heard on the world stage and to make a lasting, positive difference.
                        </p>
                    </div>
                    <div className="flex lg:flex-row md:flex-row flex-col lg:gap-[1vw] md:gap-[1vw]" style={{ lineHeight: `${line_height}px` }}>
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col">
                            <div className={styles.sub_heading}>Annual Global Challenge</div>
                            <div className={styles.para}>
                                Together with UNICEF, all Nord Anglia Education students are challenged to participate in projects on the Sustainable Development Goals in their schools.
                                The Sustainable Development Goals are a collection of 17 goals set by the United Nations regarding social and economic development issues that
                                we hope to collectively achieve by 2030.
                                Every year, UNICEF challenges students at Nord Anglia Education schools to raise awareness of these goals through
                                creative projects and activities.
                                <p>
                                    Whether it’s a recycling project for sustainability, turning plants into bio-fuels, fighting against poverty in their community, or other
                                    meaningful activities based on the 17 goals, our students are challenged to lead change by being the change.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.sub_heading}>Sharing Ideas on the World Stage</div>
                            <div className={styles.para}>
                                Nord Anglia Education students are encouraged to express their concerns at the highest level in their local communities and on the global stage.
                                Each year, they are invited by UNICEF to engage with and influence world leaders at regional and global summits with UNICEF and the United Nations.
                            </div>
                            <div className={styles.para} style={{textAlignLast:"justify"}}>
                                This includes an annual trip for student ambassadors to join seminars, workshops and speaking opportunities at the High Level
                                political Forum at the Headquarters of the United Nations in New York. This is a unique opportunity for our students to contribute to the discussion
                                and influence policy at the highest level. Our students also take part in high profile act-
                            </div>

                        </div>

                    </div>

                </div>
                {/* Right Column */}
                <div className="flex flex-col flex-1 lg:w-1/2 md:w-1/2 text-justify lg:pb-0 md:pb-0 pb-[5dvw]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1dvw]" style={{ height: "calc(100% - 100px * 9/16)" }}>
                        <div className={`flex flex-col lg:w-1/2 md:w-1/2`} style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                ivities related to each annual World Children’s Day.
                                This is a day for children, by children!
                            </div>
                            <div>
                                <div className={styles.sub_heading}>Working with UNICEF</div>
                                <div className={styles.para}>
                                    UNICEF is the world’s leading advocate for children. They operate in 190 countries to save children’s lives, defend their
                                    rights and help them fulfil their potential. UNICEF is empowered by the United Nations to take collective action for a better world.
                                </div>
                            </div>
                            {/* <div className={styles.para}>
                                Our teachers benefit with resources from the
                            </div> */}
                        </div>
                        <div className="gap-[1rem] border-t-4 border-b-4 border-black-60 lg:w-1/2 md:w-1/2 lg:mt-[0.4dvw] md:mt-[0.4dvw]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
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
                                            lineHeight: `${line_height * 1.2}px`
                                        }}>
                                        TOGETHER WITH UNICEF, ALL NORD ANGLIA EDUCATION STUDENTS ARE CHALLENGED TO PARTICIPATE IN PROJECTS ON THE SUSTAINABLE DEVELOPMENT GOALS IN THEIR SCHOOLS
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="" style={{ alignContent: "center" }}>
                        {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                        <YoutubeEmbed className="lg:-translate-y-[0.4dvw] md:-translate-y-[0.4dvw]" videoId="KuJaq2-HCbU" />
                    </div>
                </div>
            </div>
        </div>
    )
}