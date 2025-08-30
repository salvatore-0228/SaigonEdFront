import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page15() {
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
            <div className="hyphens-auto flex h-full lg:flex-row md:flex-row flex-col lg:gap-[2vw] md:gap-[2vw] gap-[2rem] lg:text-[0.9dvw] md:text-[0.9dvw] text-[3.46vw]" style={{ lineHeight: `${line_height}px` }}>

                {/* Right Column */}
                <div className="flex lg:flex-row md:flex-row flex-col flex-1 lg:w-1/2 lg:gap-[1vw] md:w-1/2 md:gap-[1vw]" style={{ lineHeight: `${line_height}px` }}>
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col justify-between" style={{ gap: `${line_height}px` }}>
                        <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={`${styles.para}`}>
                                Questions to ask: How do you select your teachers? What standards do you use to evaluate teacher performance? How do you help
                                your teachers’ professional growth? Do you use professional coaches to help your teachers develop their teaching skills?
                            </div>
                            <div>
                                <div className={`${styles.sub_heading} lg:text-[120%]`}>Clear definition of learning</div>
                                <div className={styles.para}>
                                    Most schools will tell you they are good or great and refer to the organizational bestseller Good to Great by Jim Collins. For schools to move from good to great,
                                    the emphasis
                                    has to be clearly focused around learning.
                                </div>
                            </div>
                            <div className={styles.para} style={{textAlignLast: "justify"}}>
                                Today many international schools dazzle prospective parents with new technologies, 1:1 computer programs,
                                state-of-the-art facilities, activities, uniform design, jazzy websites and so on. Some of these aspects are important but they are all peripheral to the highest
                                priority for you as a parent, that is your child’s learning
                            </div>
                        </div>
                        <div className="" style={{ alignContent: "center" }}>
                            {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                            <YoutubeEmbed className="lg:-translate-y-[0.4dvw] md:-translate-y-[0.4dvw]" videoId="X4C8sOnLMmo" />
                        </div>
                    </div>

                    <div className="flex flex-col lg:w-1/2 md:w-1/2" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                        <div className="gap-[1vw] border-t-4 border-b-4 border-black-60 flex-1 lg:mt-[0.3dvw] md:mt-[0.3dvw]" >
                            <div style={{ alignItems: "center", display: "flex", justifyContent: "center", height: "100%", padding: `${line_height / 3}px` }}>
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
                                        className="lg:text-[1.3dvw] md:text-[1.3dvw] text-[1.3rem] lg:p-[1dvw] md:p-[1dvw] p-[1rem]"
                                        style={{
                                            // fontSize: `1vw`,
                                            fontWeight: "100",
                                            padding: `${line_height / 2}px`,
                                            fontFamily: "QuoteFont, sans-serif",
                                            margin: "auto",
                                            textAlign: "center",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            height: "100%",
                                            textTransform: "uppercase",
                                            lineHeight: `${line_height * 1.4}px`
                                        }}>
                                        Today the focus should be on learning how to use skills that access, interpret and create from the content and knowledge that is so freely available from the worldwide web
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.para}>
                            and how will you and the school know that your child has learned.
                        </div>
                        <div className={styles.para}>
                            If a school has defined learning and can explain what it regards as its learning principles then you have a set of criteria to refer to when you are observing and discussing your child’s progress as a
                            learner. By making learning the key focus of the school it tells you a lot about where the energies of the teachers and administration at the school are going.
                        </div>
                        <div className={styles.para}>
                            Questions to ask: Does your school have a definition of learning? Has your school defined its key learning principles? Do all teachers understand the importance
                            of assessment for learning rather than assessment of learning?
                        </div>
                    </div>
                </div>
                {/* Left Column */}
                <div className="flex lg:flex-row md:flex-row flex-col flex-1 gap-[1vw] lg:pb-0 md:pb-0 pb-[5dvw]">
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" id="container" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                        <div>
                            <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>Teaching pedagogy of the school</div>
                            <div className={styles.para}>
                                Remember that when you are choosing a school for your children, the school’s mission is their promise of
                                what you will get from enrolling in that school. The vision is what they
                                aspire to be or do with your children.
                            </div>
                        </div>
                        <div className={styles.para}>
                            Many schools have very fancy and complex missions and visions that promise they will create
                            perfect global citizens who will change the world, but the question as a parent has to always be: How will I see that in my child? Does the school truly walk
                            the talk with its mission and vision or are they just words on a website? When you are walking around the school, is the mission clearly visible? A school
                            that has a review cycle for its mission and vision is one that is willing to reflect, discuss and accept change as a normal part of the development process
                            of the school. In our rapidly changing world, modern schools have to be forward looking if they are going to serve their
                            stakeholders effectively.
                        </div>
                        <div className={styles.para}>
                            Does your school have a Mission and Vision and how will that affect my child as a learner? Does the school
                            use its Mission and Vision as a filter for decisions that are made? Does your school adhere to its Mission?
                            When was the school’s Mission and Vision last reviewed?
                        </div>
                        <div>
                            <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>Mission and vision</div>
                            <div className={styles.para} style={{textAlignLast: "justify"}}>
                                For many of us adults, our schooling focused on the learning of content and knowledge because that that 
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 md:w-1/2 flex flex-col justify-between" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                        <div className="" style={{ alignContent: "center" }}>
                            {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                            <YoutubeEmbed className="lg:translate-y-[0.4dvw] md:translate-y-[0.4dvw]" videoId="HXNnQbOFZn4" />
                        </div>
                        <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                point in the development of education our understanding as educators was simply at a different level than we are today. Today the focus should be on learning how to use skills
                                that access, interpret and create from the content and knowledge that is so freely available from the worldwide web. 
                            </div>
                            <div className={styles.para}>
                                It is important that
                                schools place a strong emphasis on students building enduring understandings through a
                                constructivist approach built on clearly defined sets of skills that are embedded in subjects
                                and reinforced through and across the curriculum from KG to Grade 12.
                                By ensuring this systematic
                                approach, students will be able to transfer learning to different learning scenarios which will prepare them to be problem solvers for the
                                rest of their lives. Today the most relevant curricula are driven by concepts not content.
                            </div>
                            <div className={styles.para} style={{textAlignLast: "justify"}}>
                                Questions to ask: Does your school have a prevalent 
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

function WidthResponsiveText({
    baseFontSize,
    baseWordSpacing,
    baseLetterSpacing,
    baseLineHeight,
    width,
    children
}: {
    baseFontSize: number
    baseWordSpacing: number
    baseLetterSpacing: number
    baseLineHeight: number,
    width: number,
    children?: React.ReactNode
}) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [containerWidth, setContainerWidth] = useState(420)
    const referenceWidth = width // Reference width where text looks perfect

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                setContainerWidth(entry.contentRect.width)
            }
        })

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current)
        }

        return () => resizeObserver.disconnect()
    }, [])

    // Calculate scale factor based on width change
    const scale = containerWidth / width

    console.log(scale)


    return (
        <div
            ref={containerRef}
            className="overflow-hidden bg-white min-w-[300px] max-w-full"
            style={{ height: "100%" }}
        >
            <div
                style={{
                    fontSize: `${baseFontSize * scale}px`,
                    wordSpacing: `${baseWordSpacing * scale}px`,
                    letterSpacing: `${baseLetterSpacing * scale}px`,
                    // lineHeight: baseLineHeight,
                    lineHeight: baseLineHeight,
                    hyphens: "auto",
                    height: "100%",
                }}
            >
                {children}
            </div>
        </div>
    )
}