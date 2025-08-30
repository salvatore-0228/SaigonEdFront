import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page71() {
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
            <div className="hyphens-auto flex lg:flex-row md:flex-row flex-col gap-[2vw] lg:text-[0.9vw] md:text-[0.9vw] text-[3.45vw]" style={{ lineHeight: `${line_height}px`, height: "100%" }}>
                {/* Left Column */}
                <div className="flex flex-col flex-1" id="container" style={{ gap: `${line_height}px` }}>
                    <div className="flex-1"></div>
                    <div>
                        <div className={`${styles.section_heading} lg:text-[2vw] md:text-[2vw] text-[1.5rem]`}>
                            <p style={{ padding: `${line_height / 3}px`, textTransform: "uppercase" }}>
                                WHY STUDY AN MBA ABROAD
                            </p>
                        </div>
                        <div className={styles.article_italic_subtitle}>
                            Making the most of change
                        </div>
                    </div>
                    <div>
                        <span className="lg:text-[2dvw] md:text-[2.3dvw] text-[3rem] font-bold float-left mr-2 leading-none">V</span>
                        <p className="text-justify lg:text-[1.1dvw] md:text-[1.1dvw] text-[1.2rem]">
                            For expatriates living in Ho Chi Minh City, the question of career advancement often intersects with a desire for continued education.
                            Many professionals, whether they are corporate managers, entrepreneurs, or senior executives, find themselves drawn to Executive MBA
                            (EMBA) programs as a way to strengthen their leadership credentials, expand their networks, and open the door to higher-level
                            opportunities. Unlike a traditional MBA, an EMBA is designed specifically for mid- to senior-level professionals who want to keep
                            working full-time while studying.
                        </p>
                    </div>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para} style={{textAlignLast: "justify"}}>
                                For expatriates, this flexible model has immense appeal—but it also comes with its own set of
                                logistical and personal challenges, particularly when the right program isn’t available locally and commuting to another city or
                                country becomes part of the equation.
                                An EMBA’s core value lies in its unique blend of academic rigor, real-world application, and peer
                                learning. Most EMBA students are in
                                their thirties or forties, with significant managerial experience already under their belts. Rather than starting from scratch on basic
                                business principles, the EMBA format assumes that
                                students bring a wealth of professional insight to the classroom, creating a rich
                                environment for discussion and exchange. For an expatriate living in Ho Chi Minh City, this is particularly valuable because the
                                EMBA classroom often serves as a microcosm of global business. Programs draw students from multiple industries 
                            </div>
                        </div>

                        <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col gap-[1rem]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                and countries, allowing for a cross-pollination of perspectives that can lead to new ideas, partnerships, and career directions.
                                The career benefits of an EMBA are well-documented. Graduates typically see a boost in leadership responsibilities, access to
                                higher-level roles, and, in many cases, a salary increase. For expatriates, there’s an additional layer of value: the ability to
                                build or expand a professional network beyond their immediate circle in Vietnam. While Ho Chi Minh City has a vibrant expat community,
                                it can sometimes feel insular. An EMBA program—especially one delivered by a globally recognized institution—connects professionals to
                                peers across Asia and the world.
                                This kind of network can be transformative, whether an expat is seeking new roles, starting a
                                business, or simply aiming to understand different markets and leadership cultures.
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Column */}
                <div className="flex flex-col flex-1 lg:w-1/2 md:w-1/2 gap-[1vw] text-justify lg:pb-0 md:pb-0 pb-[5dvw]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw]" style={{ height: "calc(100% - 50dvw * 9/16)" }}>
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para} style={{textAlignLast: "justify"}}>
                                Yet the decision to pursue an EMBA is not without trade-offs. For expatriates in Ho Chi Minh City, one of the biggest practical
                                challenges is the limited number of programs available within the city itself. While there are a handful of local MBA offerings—RMIT
                                Vietnam, for example, runs a traditional MBA—EMBAs tailored to senior professionals are more scarce. That often means looking beyond
                                Ho Chi Minh City to programs in other Vietnamese cities like Hanoi, or even to regional
                            </div>
                        </div>

                        <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                hubs such as Singapore, Bangkok, Hong Kong, or
                                Shanghai. This geographic reality brings the commuting issue front and center.
                            </div>
                            <div className={styles.para}>
                                Commuting for an EMBA can take many forms. Some programs are structured around weekend modules, requiring travel once or twice a month.
                                Others are built on week-long intensives, with students flying in for concentrated study periods every six to eight weeks.
                            </div>
                        </div>
                    </div>
                    <div className="" style={{ alignContent: "center" }}>
                        {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                        <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="zOFeosG7ECQ" />
                    </div>
                </div>
            </div>
        </div>
    )
}