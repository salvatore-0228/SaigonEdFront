import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page44() {
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
            <div className="hyphens-auto flex lg:flex-row md:flex-row flex-col gap-[2vw] lg:text-[0.9vw] md:text-[0.9vw] text-[3.4vw]" style={{ lineHeight: `${line_height}px`, height: "100%" }}>
                {/* Left Column */}
                <div className="flex flex-col flex-1" id="container" style={{ gap: `${line_height}px` }}>
                    <div className="flex-1"></div>
                    <div>
                        <div className={`${styles.section_heading} lg:text-[2vw] md:text-[2vw] text-[1.5rem]`}>
                            <p style={{ padding: `${line_height / 3}px`, textTransform: "uppercase" }}>
                                Technology in the class&shy;room
                            </p>
                        </div>
                        <div className={styles.article_italic_subtitle}>
                            The benefits and drawbacks in the international context
                        </div>
                    </div>

                    <div>
                        <span className="lg:text-[2.5dvw] md:text-[2.5dvw] text-[3rem] font-bold float-left mr-2 leading-none">T</span>
                        <p className="text-justify lg:text-[1vw] md:text-[1dvw] text-[1.2rem]">
                            echnology has become an inseparable part of modern education, reshaping classrooms across the globe and transforming how students
                            learn, interact, and think. For international students living abroad, this shift has profound implications. Whether they are in a
                            private international school in Ho Chi Minh City, a bilingual school in Dubai, or a boarding school in Switzerland, these students
                            experience the impact of digital tools and platforms in ways that extend far beyond the classroom walls.
                        </p>
                    </div>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                While technology brings enormous opportunities—bridging gaps in language, offering access to global resources, and making education more
                                flexible—it also introduces challenges, from screen fatigue and distraction to inequities in access and cultural disconnects.
                                These cultural disconnects are felt more acutely in the international setting where classrooms are comprised of students from myriad countries that experience social media differently as they develop.
                                Understanding the positive and negative effects of technology in the classroom in the unique context of international students is critical for
                                parents, educators, and policymakers seeking to maximize the benefits while mitigating the downsides.

                            </div>
                        </div>

                        <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col gap-[1rem]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                            <div>
                                <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>
                                    The Promise of Technology for International Students
                                </div>
                                <div className={styles.para} style={{textAlignLast: "justify"}}>
                                    One of the most significant benefits of technology in international classrooms is its ability to bridge linguistic and cultural
                                    divides. Many international students find themselves in classrooms where the language of instruction is not their mother tongue.
                                    In such environments, apps and tools like translation software, digital dictionaries, and AI-powered tutoring programs can be
                                    invaluable. They allow students to access content in their first language, clarify vocabulary in real time, and engage with the
                                    curriculum without feeling lost. This technological support can help students build confidence and participate more fully,
                                    accelerating
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Column */}
                <div className="flex flex-col flex-1 lg:w-1/2 md:w-1/2 gap-[1vw] text-justify lg:pb-0 md:pb-0 pb-[5dvw] justify-between" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw]" style={{ height: "calc(100% - 50dvw * 9/16)" }}>
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                integration into their new school community.
                            </div>
                            <div className={styles.para} style={{ textAlignLast: "justify" }}>
                                Technology also enables access to a wealth of global resources that would have been unimaginable just a generation ago.
                                International students can now tap into vast online libraries, participate in virtual museum tours, watch lectures from leading
                                universities, and collaborate with peers on shared documents across continents.
                            </div>
                        </div>

                        <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para} style={{textAlignLast: "justify"}}>
                                This is particularly important for students following international curricula like IB, AP, or A-Levels, where access to a wide array of
                                research materials is crucial for
                                success. For students far from their home country, digital tools can even help maintain ties to their cultural and linguistic
                                heritage, allowing them to read news, literature, or textbooks from home.
                                Another key benefit is the personalization of learning. Technology allows schools to adopt adaptive platforms that adjust to a
                            </div>
                        </div>
                    </div>
                    <div className="" style={{ alignContent: "center" }}>
                        {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                        <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="JMLsHI8aV0g" />
                    </div>
                </div>
            </div>
        </div>
    )
}