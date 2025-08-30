import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page12() {
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
                        <div className={`${styles.section_heading} lg:text-[1.2vw] md:text-[1.2vw] text-[1.2rem]`}>
                            <p style={{ padding: `${line_height / 3}px` }}>
                                Advanced placement
                            </p>
                        </div>
                        <div className={styles.para}>
                            <span className="lg:text-[2.5vw] md:text-[2.5vw] text-[9vw] font-bold float-left mr-2 leading-none">A</span>
                            <p className="text-justify lg:text-[1dvw] md:text-[1dvw] text-[1rem]">
                                dvanced Placement (AP) Courses are standardized college-level courses usually available to secondary school students in institutions
                                which follow the American curriculum. These courses are generally recognized as being equivalent to undergraduate courses and so
                                participating colleges grant credit to students who score sufficiently well in their AP exams. Pupils often undertake AP courses in
                                maths and English, although they can be taken in almost any subject.
                            </p>
                        </div>
                        <div className={styles.para}>
                            AP test result scores range from 1 to 5 (5 being the highest) and most tertiary institutions require a minimum score of 3 or 4 in a subject for a
                            credit to be awarded.
                        </div>
                        <div className={styles.para}>
                            For students planning to attend an American university, an AP course can save both time and money by enabling them to skip some introductory college
                            courses required by certain universities. AP course results are also used in the selection process for some highly selective colleges and universities
                            in the United States, and so scoring well in AP courses can increase a student’s chances of acceptance into such institutions.
                        </div>
                        <div className={styles.para} style={{textAlignLast: "justify"}}>
                            Students can take an AP course alongside other
                        </div>
                    </div>

                    <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            courses, if their school offers the option of a dual program.
                        </div>
                        <div className={`${styles.section_heading} lg:text-[1.2vw] text-[1.2rem]`}>
                            <p style={{ padding: `${line_height / 3}px` }}>
                                IGCSE
                            </p>
                        </div>
                        <div className={styles.para}>
                            The International General Certificate of Secondary Education
                            (IGCSE) is usually offered by schools that follow the National Curriculum of
                            England and Wales (the British Curriculum). The IGCSE is an internationally recognized and valued qualification that is an excellent preparation
                            for pupils who intend to go on to study for A-Levels or the IB (International Baccalaureate). Schools from around the world have contributed
                            to the development of IGCSE programs and it is therefore a truly international qualification.
                            IGCSE courses are available in more than 120 countries and in over 70 subjects, with many being offered at both core and extended level,
                            making them suitable for students of all abilities.
                            Programs of study are updated regularly and are designed to be accessible for both native English speakers and those whose first language is not English.
                        </div>
                        <div className={styles.para}>
                            Programs of study are updated regularly and are designed to be accessible for both native English speakers and those whose first language is not English.
                        </div>
                        <div className={styles.para} style={{textAlignLast: "justify"}}>
                            Examining bodies provide a large range of resources
                        </div>

                    </div>

                </div>
                {/* Right Column */}
                <div className="flex flex-col flex-1 lg:w-1/2 md:w-1/2 text-justify lg:pb-0 md:pb-0 pb-[5vw]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                    <div className="flex lg:flex-row md:flex-row flex-col" style={{ gap: `${line_height}px`,height: "calc(100% - 50dvw * 9/16)" }}>
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                for students, both online and in print, and schools who offer IGCSEs use texts and study materials
                                approved by the relevant examination boards. Individual schools are able to offer combinations of courses designed to fit their pupils’ needs (including
                                over 30 language courses), each
                                subject being examined separately. Grading is on an eight-point scale (A* to G) and there are clear standards of achievement for each grade.
                            </div>
                        </div>
                        <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                schools following the British Curriculum, often as an alternative qualification for university entrance
                                alongside the International Baccalaureate. A-Levels are the standard entry qualification for
                                UK universities and are widely recognized by universities worldwide.
                                The International A-Level program is extremely flexible and schools are generally able to offer a range of combinations of the 60 or so subjects available.
                            </div>
                        </div>
                    </div>
                    <div className="" style={{ alignContent: "center" }}>
                        {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                        <YoutubeEmbed videoId="9xUfafJE90U" />
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