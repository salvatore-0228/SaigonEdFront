import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page38() {
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
            <div className="hyphens-auto flex lg:flex-row md:flex-row flex-col gap-[2vw] lg:text-[0.9dvw] md:text-[0.9dvw] text-[3.46vw]" style={{ lineHeight: `${line_height}px`, height: "100%" }}>
                {/* Left Column */}
                <div className="flex flex-col lg:w-1/2 md:w-1/2 justify-between" id="container">
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                The philosophy is: pick subjects, go deep, and demonstrate mastery through end of course exams.
                                There’s no equivalent to CAS or TOK.
                                For academically strong, focused students, this is
                                liberating—they can spend two years drilling into their passions. But it lacks the same holistic scaffolding the IB provides.
                            </div>
                            <div className={styles.para}>
                                IGCSE, in turn, doesn’t come with much philosophy at all. It’s an exam series, not a worldview.
                            </div>
                        </div>

                        <div className="lg:w-1/2 md:w-1/2 flex flex-col gap-[1dvw]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                Schools may bring their own ethos to the teaching, but the IGCSE itself is primarily an assessment framework.
                            </div>
                            <div className={styles.para} style={{textAlignLast: "justify"}}>
                                AP sits somewhere in between. Each AP course is rigorous and college level, but AP itself doesn’t impose a unifying philosophy.
                                There’s no TOK or CAS; there’s
                                simply the expectation that students tackle challenging courses and pass exams.
                                Families who value values based education and global mindedness may lean
                            </div>
                        </div>
                    </div>
                    <div className="" style={{ alignContent: "center" }}>
                        {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                        <YoutubeEmbed className="lg:-translate-y-[0.4dvw] md:-translate-y-[0.4dvw]" videoId="5uuD9gxRpkA" />
                    </div>
                </div>
                {/* Right Column */}
                <div className="flex lg:flex-row md:flex-row flex-col flex-1 lg:w-1/2 md:w-1/2 lg:gap-[1dvw] md:gap-[1dvw] text-justify" style={{ lineHeight: `${line_height}px` }}>
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            toward IB. Those who want a straightforward academic credential that rewards pure subject strength may prefer A-Levels or AP.
                        </div>
                        <div>
                            <div className={`${styles.sub_heading} lg:text-[120%]`}>
                                Assessment and Grading
                            </div>
                            <div className={styles.para}>
                                Each system has its own logic for how students are evaluated.
                            </div>
                        </div>
                        <div className={styles.para}>
                            <ul style={{ listStyleType: "disc", paddingLeft: "1dvw" }}>
                                <li>
                                    IB Diploma: Each of the six subjects is graded on a 1–7 scale, with up to 3 bonus points from TOK and the Extended Essay for a
                                    maximum of 45 points.
                                    Assessment blends internal work (essays, lab reports, projects) and final exams. It rewards consistent effort
                                    over two years.
                                </li>
                                <li>
                                    A-Levels: Nearly everything rides on final exams at the end of Year 13. There may be occasional coursework components
                                    (for example, in art or English), but A-Levels are largely “big exam based.”
                                </li>
                                <li>
                                    IGCSE: Like A-Levels, IGCSEs culminate in exams. These are usually taken at the end of Year 11, and results are reported as grades
                                    (A*–G or 9–1, depending on the board).
                                </li>
                                <li>
                                    AP: Each AP exam is scored 1–5, with 5 the top score. The exam is the credential; coursework matters to the school but doesn’t affect the
                                    AP score itself.
                                </li>
                            </ul>
                        </div>
                        <div className={styles.para} style={{textAlignLast: "justify"}}>
                            For students who thrive with cumulative assessment and ongoing feedback, IB’s combination of coursework and exams can feel more balanced.
                            For those
                        </div>
                    </div>

                    <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            who perform best under high stakes pressure and want to avoid constant internal assessments, A-Levels and AP exams may feel cleaner.
                        </div>
                        <div className={styles.para}>
                            <div className={`${styles.sub_heading} lg:text-[120%]`}>
                                Recognition by Universities
                            </div>
                            <div className={styles.para}>
                                From a practical standpoint, parents often ask: Which system opens the most doors?
                            </div>
                        </div>
                        <div className={styles.para}>
                            <ul style={{ listStyleType: "disc", paddingLeft: "1dvw" }}>
                                <li>
                                    IB Diploma: Universally recognized. Universities worldwide—from Ivy League schools in the U.S. to Oxbridge in the UK to top
                                    universities in Asia—understand and respect the IB. Many institutions even grant course credit for high IB scores, especially in North America.
                                </li>
                                <li>
                                    A-Levels: The currency of British universities—and respected well beyond. A-Levels are the backbone of UK admissions and accepted across the Commonwealth
                                    (Canada, Australia, Singapore) and increasingly in the U.S.
                                </li>
                                <li>
                                    IGCSE: Not a university entry qualification in itself. It’s a stepping stone to A-Levels, IB, or other senior programs.
                                </li>
                                <li>
                                    AP: APs demonstrate rigor for U.S. college admissions and can earn university credit. Outside the U.S., APs are increasingly recognized but not always
                                    as a complete qualification on their own—students often need a full diploma plus APs for admissions abroad.
                                </li>
                            </ul>
                        </div>
                        <div className={styles.para} style={{textAlignLast: "justify"}}>
                            APs demonstrate rigor for U.S. college admissions 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}