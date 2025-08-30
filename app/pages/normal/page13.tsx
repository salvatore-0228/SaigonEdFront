import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page13() {
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
            <div className="flex lg:flex-row md:flex-row flex-col gap-[2vw] lg:text-[0.9vw] md:text-[0.9vw]" style={{ height: "100%" }}>
                {/* Left Column */}
                <div className="flex lg:flex-row md:flex-row flex-col flex-1 gap-[1vw]">
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" id="container" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                        <div className={`${styles.section_heading} lg:text-[1.2vw] text-[1.2rem]`}>
                            <p style={{ padding: `${line_height / 3}px` }}>
                                A-levels
                            </p>
                        </div>
                        <div className={styles.para}>
                            The International Advanced Level General Certificate of Education (A-Level) is usually offered by international
                            This way, A-Levels allow pupils either to specialize in one particular curriculum area or to choose a broader program of study, depending on their strengths
                            and interests.
                            International A-Levels have several assessment options. A pupil may opt to take examinations only at A-Level at the end of two years’ study. Alternatively,
                            they can choose a ‘staged’ assessment path by taking an AS-Level examination at the end of their first year of study, followed by an A-Level examination
                            at the end of their second year (although this option is not available for all
                            subjects). Thirdly, a student can decide to take an AS-Level examination only (AS-Level syllabus content is half that of an International A-Level program).
                        </div>
                        <div className={styles.para}>
                            Like the IGCSE program, International AS- and A-Level syllabuses are designed specifically for  international students. Each subject is examined separately
                            and grades range from A* to E.
                        </div>
                        <div className={`${styles.section_heading} lg:text-[1.2vw] md:text-[1.2vw] text-[1.2rem]`}>
                            <p style={{ padding: `${line_height / 3}px` }}>
                                The selection process
                            </p>
                        </div>
                        <div className={styles.para} style={{textAlignLast: "justify"}}>
                            Now that you’ve looked at some of the many issues
                            connected to choosing your child’s education, it’s time
                        </div>
                    </div>

                    <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col" style={{ gap: `${line_height}px`, lineHeight: `${line_height}px` }}>
                        <div className={styles.para}>
                            to begin the selection process. Given the wide
                            array of choices available, it might be helpful to employ a process of elimination. Make a list of your top three priorities – the deal breakers – such as
                            curriculum, fees
                            or year groups offered, and make an initial run through our listings to begin eliminating schools from your list. Expand your list
                            of priorities to six and begin your research into the schools by visiting their websites. Make notes on each school and when you’re finished, go through
                            the list of schools again and reorganize them into a ranked list, from most to fewest matches.
                        </div>
                        <div className={styles.para} style={{textAlignLast: "justify"}}>
                            Take your top five (if you have five left) from your list and dig deeper into each of the schools by visiting parent forums on websites and social media.
                            If you have specific questions about a school on your list, post a question and take account of the feedback. Be aware, however, that respondents may not
                            always be trustworthy; they may be advocates or employees of the school you’re inquiring about or its competitors. That being said, these forums can be a
                            valuable source of intelligence about schools.
                            If you want to eliminate any further schools from your list, do so at this time and then make a formal inquiry to the admissions offices of the schools
                            remaining. It is at this point that you will be able find out which schools have places available, and those that have waiting lists, in your child’s year
                            group. In this case, prepare to eliminate more schools
                            from your list and perhaps to resurrect some of the schools that didn’t make it into
                        </div>
                    </div>

                </div>
                {/* Right Column */}
                <div className="flex lg:flex-row md:flex-row flex-col flex-1 lg:w-1/2 md:w-1/2 text-justify lg:gap-[1vw] lg:pb-0 md:gap-[1vw] md:pb-0 pb-[5vw]" style={{ lineHeight: `${line_height}px` }}>
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            your top five. As a general rule, you should try to visit at least three schools
                            before making your choice; in addition, once you have made a decision and decided on a school you should plan
                            a further visit before accepting the offer of a place and paying your deposit.
                        </div>
                        <div className={`${styles.section_heading} lg:text-[1.2vw] text-[1.2rem]`}>
                            <p style={{ padding: `${line_height / 3}px` }}>
                                The visit
                            </p>
                        </div>
                        <div className={styles.para}>
                            Your visit to the school will probably be the final and most important part of your decision-making process. It’s during the visit that you’ll get a
                            feel for what the school is really like. Despite your research, despite how widely you consult, despite how diligent you may have been, your final choice
                            of a school may come down to instinct, a gut feeling that this is the right place for you and your family. It could be a simple as that!
                            At some stage during the admissions process you should get the chance to meet with the principal or headteacher, and this will be a valuable experience
                            for you both.
                            Again, you will want to feel comfortable and confident in this person, because ultimately they are responsible for how well your child
                            is educated. Therefore, you can’t be too prepared for such a meeting and so the questions below may serve as a useful starting point for your discussions.
                            However, it is of course also important to consider your child’s specific needs and refine and expand this list. Don’t be afraid to ask tough questions,
                            as the answers to those questions will tell you the most about the school.
                        </div>
                    </div>

                    <div className="lg:w-1/2 md:w-1/2 mx-auto">
                        <div className="bg-black text-white text-center font-bold py-2" style={{textTransform: "uppercase"}}>
                            Some questions for schools
                        </div>
                        <div className="lg:px-[1vw] md:px-[1vw] px-[8vw] lg:pt-[0.5vw] md:pt-[0.5vw] pt-[5vw] bg-gray-700 text-white space-y-4 lg:text-[0.73vw] md:text-[0.73vw]">
                            <ul style={{ listStyleType: "circle" }}>
                                <li>What is the school’s academic program (IB, A-Level, Advanced Placement etc)?</li>
                                <li>How will the school cater to your child’s individual needs?</li>
                                <li>How can parents get involved in the life of the school?</li>
                                <li>What are the respective sizes of your child’s class, year group, stage (early years, primary or secondary) and the school overall? How might this fit with your child’s development and needs?</li>
                                <li>How convenient is the location of the school in relation to home and work, and how much time would be spent commuting each day?</li>
                                <li>What post-secondary institutions have alumni attended? What percentage of students proceed to post-secondary education?</li>
                                <li>By which educational and/or government bodies is the school accredited?</li>
                                <li>Does the school offer a wide and engaging variety of learning experiences both inside and outside the classroom, including extracurricular activities, community service and sports?</li>
                                <li>Is the environment of the school one which will enable your child to thrive?</li>
                                <li>Are there scholarships available for deserving or talented pupils?</li>
                                <li>How ethnically, socially and culturally diverse is the student body?</li>
                                <li>What is the school’s philosophy and mission statement?</li>
                                <li>What qualifications or awards are available for secondary students?</li>
                            </ul>
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
    children,
}: {
    baseFontSize: number
    baseWordSpacing: number
    baseLetterSpacing: number
    baseLineHeight: number,
    width: number,
    children?: React.ReactNode,
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