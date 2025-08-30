import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page24() {
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
        <div className="h-full w-full lg:p-[1vw] md:p-[1vw] p-[5vw] dark:bg-gray-900 dark:text-white lg:overflow-hidden md:overflow-hidden overflow-auto h-full scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200">
            <div className="hyphens-auto flex lg:flex-row md:flex-row flex-col gap-[2vw] lg:text-[0.9vw] md:text-[0.9vw] text-[3.46vw]" style={{ lineHeight: `${line_height}px`, height: "100%" }}>
                {/* Left Column */}
                <div className="flex flex-col flex-1 gap-[1vw]" id="container">
                    <div className="flex-1"></div>
                    <div>
                        <div className={`${styles.special_article} lg:text-[1.7vw] md:text-[1.7vw] text-[1.3rem]`} style={{ lineHeight: `${isMobile ? line_height : line_height * 1.5}px` }}>
                            Building skills for the future through steam
                        </div>
                        <div className={styles.article_italic_subtitle}>
                            Succeeding in the 21st century means learning how to think, not what to think
                        </div>
                        <div className={styles.article_italic_byine} style={{ fontSize: `${line_height * 0.5}px`, textAlign: "left" }}>
                            By Mark Orrow-Whiting Director of Curriculum and Student Performance,Nord Anglia Education
                        </div>
                    </div>
                    <div>
                        <span className="lg:text-[2.5vw] md:text-[3vw] text-[9vw] font-bold float-left mr-2 leading-none">E</span>
                        <p className="text-justify lg:text-[1vw] md:text-[1vw] text-[1.2rem]">
                            ducators today face a signiﬁcant challenge. The world in which we live is evolving rapidly, but the way we teach students has hardly changed in over 100 years.
                            Are we therefore doing everything that we can to prepare students for the world they will experience when they leave school?
                        </p>
                    </div>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                At Nord Anglia, we believe that we can do more and we have a duty to ensure the graduates of the 2030s and beyond are prepared for the world they
                                will find – even if we don’t know exactly what that will look like. There is still a role for robust and proven forms of traditional learning.
                                But as educators we need to think as much about the transferable skills we help young people develop as we do about the facts they learn.
                            </div>
                            <div className={styles.para} style={{ textAlignLast: "justify" }}>
                                Our role as educators is to inspire students to actively discover and persevere. For us, thinking is not a noun—it is a verb, an action, an activity
                                and that is what we hope to achieve with our students. We want to challenge students to try something new, or tell them that it’s good to fail however
                                many times it takes until they succeed.
                                We want to tell students to learn from their mistakes and find solutions, and that the greatest
                            </div>
                        </div>
                        <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col gap-[1dvw]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                lesson they will learn is from the problem that they cannot solve.
                            </div>
                            <div className={styles.para}>
                                As the world’s leading premium schools organisation, we want to build a curriculum that is forward-looking and not resting on conventional
                                thinking from the past.
                            </div>

                            <div className="gap-[1rem] border-t-4 border-b-4 border-black-60 h-[25dvh] flex-1 lg:mb-[0.4dvw] md:mb-[0.4dvw]">
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
                                                height: "fit-content"
                                            }}
                                        >
                                            ”
                                        </p>
                                        <p
                                            className="lg:text-[1.3dvw] md:text-[1.3dvw] text-[1.3rem] lg:p-[1dvw] md:p-[1dvw] p-[1rem]"
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
                                            We want to challenge students to try something new, or tell them that it’s good to fail however many times it takes until they succeed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Column */}
                <div className="flex lg:flex-row md:flex-row flex-col flex-1 lg:w-1/2 md:w-1/2 text-justify gap-[1dvw] lg:pb-0 md:pb-0 pb-[5dvw]" style={{ lineHeight: `${line_height}px` }}>
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                        <div>
                            <div className={styles.sub_heading}>Predicting skills needed for the 21st century</div>
                            <div className={styles.para}>
                                The pace of world change is so rapid that the jobs of tomorrow might not yet have been imagined. In the last 20 years, technology has completely
                                transformed what is possible.
                            </div>
                        </div>
                        <div className={styles.para}>
                            Given this pace of change, educators can only hypothesise what newly invented jobs will exist 20 years from now.
                            Therefore, education should not be solely the ingestion of information, but the development of skills so students can adapt to an uncertain world.
                            Traditional systems of teaching and learning are not necessarily providing young people with the skills they need to make it in the modern world.
                        </div>
                        <div className={styles.para}>
                            Many of the more traditional classroom forms of learning, siloed in individual subjects, are ill-equipped to instil the skills needed for developing
                            creative solutions to complex problems. Traditional schooling addresses problems of the past-not issues in the future.
                        </div>
                        <div className={styles.para} style={{ textAlignLast: "justify" }}>
                            How, therefore, do we adapt and prepare our students for the challenges they face in the future? Nord Anglia believes that we must support the development
                            of transferable skills that require students to adapt and respond to the changing world. By doing so, we will make them more resilient, flexible and
                            ltimately successful as they enter the real world and start contributing to society. This thinking underpins our recent performing arts collaboration
                            with The Juilliard School.
                        </div>
                    </div>

                    <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            A series of studies have shown that learning
                            music and the performing arts helps students improve literacy, mathematics and cognitive development.
                            As importantly, it can help students develop personal skills that help them collaborate and build confidence.
                        </div>
                        <div>
                            <div className={styles.sub_heading}>Inspiring interdisciplinary thinking through steam</div>
                            <div className={styles.para}>
                                Our new approach to learning STEAM – science, technology, engineering, arts and mathematics-is an interdisciplinary method aimed at helping students develop vital
                                transferable skills andlearning across subjects, through experimentation, trial and error and creativity.“The cross-functional approach to STEAM exemplifies
                                how we can prepare students for the real world. It works on the premise that the world is complex and messy; that there is no such thing as a problem that can be
                                solved through knowledge of chemistry or physics alone.
                            </div>
                        </div>
                        <div className={styles.para}>
                            Challenges are multifaceted and the thinking needed to find a solution must be as dynamic as the world around us.
                            Whether it’s solving cancer or combating climate change, real-world issues require inputs from across disciplines- so why start students off thinking
                            that the world neatly falls into modules?
                        </div>
                        <div className={styles.para}>
                            Learning across different subjects helps build a more holistic understanding of how the world really works.
                            Students must be given the support to discover this as early as possible in their learning journey.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}