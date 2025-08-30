import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page46() {
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
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                In some parts of the world, international schools serve
                                a mix of wealthy expatriates and scholarship students from local communities, creating disparities in who can afford the necessary
                                hardware or maintain reliable connectivity. 
                            </div>
                            <div className={styles.para}>
                                When technology becomes central to
                                learning, these inequities can widen, leaving some students struggling to keep up.
                            </div>
                            <div className={styles.para}>
                                Cultural differences can also affect how technology is perceived and used in classrooms.
                            </div>
                            <div className={styles.para}>
                                In some educational traditions, digital tools
                                are embraced as innovative and student-centered; in others, they may be seen as undermining discipline or traditional teaching methods.
                            </div>
                            <div className={styles.para}>
                                International students may encounter classroom norms very different from those of their home country. A child from a highly digital
                                education system in South Korea might find the use of technology in an international school in Kenya surprisingly limited—or vice versa.
                                These differences can lead to confusion, frustration, or inconsistent learning experiences.
                            </div>
                            <div className={styles.para}>
                                There is also the concern of data privacy and security. International schools often use a patchwork of apps and platforms, some of which
                                collect significant amounts of student data.
                            </div>
                        </div>

                        <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col gap-[1rem]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                Parents may have questions about where this data is stored, who has access, and how it is
                                protected—especially when students are citizens of one country, living in another, and enrolled in a school that uses platforms based in
                                yet another. For globally mobile families, navigating these concerns can be complex.
                            </div>
                            <div className={styles.para}>
                                Finally, while technology can foster global connection, it can also create isolation. International students
                                already face the challenge
                                of building friendships and integrating into new cultures. If too much of their schoolwork is conducted through screens—especially
                                individually rather than collaboratively—it can reduce opportunities for the kind of in-person social
                                interaction that helps students feel rooted and supported in their new environment.
                            </div>
                            <div>
                                <div className={`${styles.sub_heading} lg:text-[120%]`} style={{ textAlign: "left" }}>
                                    Balancing the Digital Equation in International Schools
                                </div>
                                <div className={styles.para}>
                                    For expatriate families evaluating international schools, the question is not simply whether the school uses technology but how it uses
                                    it. The most effective schools tend to adopt a balanced, intentional approach.
                                </div>
                            </div>
                            <div className={styles.para}>
                                They integrate technology where it adds value—enhancing
                                language support, providing access to resources, enabling collaboration—while also maintaining space for analog learning experiences,
                                hands-on activities, and unplugged social interaction.
                            </div>
                        </div>
                    </div>

                </div>
                {/* Right Column */}
                <div className="flex lg:flex-row md:flex-row flex-col flex-1 lg:w-1/2 md:w-1/2 lg:gap-[1dvw] md:gap-[1dvw] text-justify" style={{ lineHeight: `${line_height}px` }}>
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            Some international schools have embraced blended learning models, combining traditional teaching methods with digital tools to ensure that
                            students benefit from both worlds. For example, a history lesson might involve both a classroom discussion of primary sources and a virtual
                            tour of a historical site. A math class might alternate between working on paper and using an adaptive online platform. This approach helps
                            students gain the advantages of technology without being fully submerged in it.
                        </div>
                        <div className={styles.para}>
                            Equally important is teaching digital literacy and responsibility. The best international schools don’t simply hand students devices; they
                            guide them in how to use technology effectively, ethically, and safely. Lessons on managing screen time, evaluating online information
                            critically, and understanding digital footprints are increasingly part of curricula. For international students, who may move between
                            countries with different norms and regulations, this guidance is particularly vital.
                        </div>
                        <div>
                            <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>
                                Conclusion: A Tool, Not a Solution
                            </div>
                            <div className={styles.para}>
                                Technology in the classroom is neither a panacea nor a peril—it is a tool, and like any tool, its impact depends on how it is used.
                                For international students, the stakes are especially high. Technology can connect them to their home cultures, support their
                                language development, and open up worlds of knowledge and opportunity. But it can also isolate, overwhelm, or distract them
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            if not carefully managed.
                        </div>
                        <div className={styles.para}>
                            For expatriate families choosing schools abroad, the key is not simply to ask, “Does this school use technology?” but rather, “How does
                            this school think about technology?” Schools that see digital tools as a complement to strong teaching—not a substitute for it—tend to
                            create the healthiest learning environments.
                        </div>
                        <div className={styles.para}>
                            For the globally mobile students who inhabit those classrooms, that thoughtful balance can
                            make all the difference in turning technology from a challenge into a powerful ally.
                        </div>
                        <div className="gap-[1rem] border-t-4 border-b-4 border-black-60 lg:mb-[0.3dvw] md:mb-[0.3dvw] h-[25dvh] flex-1">
                            <div style={{ alignItems: "center", display: "flex", justifyContent: "center", height: "100%" }}>
                                <div className={`flex-1 relative text-center`} style={{ position: "relative", fontFamily: "auto" }}>
                                    <p
                                        className="dark:text-white-600 text-black-600 opacity-20 lg:text-[450px] md:text-[450px] text-[70vw]"
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
                                        className="lg:text-[1.8dvw] md:text-[1.8dvw] text-[1.3rem] lg:p-[1dvw] md:p-[1dvw] p-[1rem]"
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
                                            lineHeight: `${line_height * 1.6}px`,
                                            textTransform: "uppercase",
                                        }}>
                                        Technology in the classroom is neither a panacea nor a peril—it is a tool, and like any tool, its impact depends on how it is used.
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