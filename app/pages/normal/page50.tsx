import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page50() {
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
            <div className="hyphens-auto flex lg:flex-row md:flex-row flex-col gap-[2vw] lg:text-[0.9vw] md:text-[0.9vw] text-[3.4vw]" id="container" style={{ lineHeight: `${line_height}px`, height: "100%" }}>
                {/* Left Column */}
                <div className="flex flex-col lg:w-1/2 md:w-1/2" style={{ gap: `${line_height}px` }}>
                    <div className="flex lg:flex-row md:flex-row flex-col flex-1 gap-[1vw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className="gap-[1rem] border-t-4 border-b-4 border-black-60 h-[25dvh] flex-1 lg:mt-[0.3dvw] md:mt-[0.3dvw]">
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
                                            className="lg:text-[1.3dvw] md:text-[1.3dvw] text-[1.3rem] p-[1rem]"
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
                                                lineHeight: `${line_height*1.3}px`,
                                                textTransform: "uppercase"
                                            }}>
                                            For expatriate parents navigating the maze of international schools, the IB stands out for its global recognition, philosophical depth, and proven track record.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.para}>
                                curricula can require adjustment. and can affect overall academic performance in various ways.
                            </div>
                            <div className={styles.para}>
                                And there’s the question of fit. The IB rewards independent learners who can manage deadlines and thrive under sustained intellectual
                                challenge. Students who need more structured, incremental assessment—or who are unsure about handling heavy workloads—might struggle,
                                particularly in schools where support is limited.
                            </div>
                            <div>
                                <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>
                                    The IB Beyond the Diploma
                                </div>
                                <div className={styles.para}>
                                    While the IB Diploma tends to dominate discussions, the lower programs—PYP and MYP—are increasingly
                                    influential in international schools.
                                </div>
                            </div>
                            <div className={styles.para} style={{ textAlignLast: "justify" }}>
                                The Primary Years Programme (PYP), for ages 3 to 12, uses “units of inquiry” to weave together disciplines
                            </div>
                        </div>

                        <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col gap-[1rem]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                 This isn’t inherently problematic, but transitions between
                                under broad, conceptual
                                themes (like “How the World Works” or “Who We Are”). It’s highly student‑centered, encouraging curiosity and exploration rather than
                                rote learning.
                            </div>
                            <div className={styles.para}>
                                The Middle Years Programme (MYP), for ages 11 to 16, bridges primary learning and the Diploma. It emphasizes interdisciplinary study,
                                project‑based work, and skill development, culminating in the “Personal Project,” a substantial independent project where students
                                explore a topic of personal interest.
                                For families with younger children, these programs can
                                provide continuity into the Diploma years. For those joining later, the IB
                                Diploma can still be taken without prior PYP or MYP experience, but students may need some orientation to its methods and expectations.
                            </div>
                            <div>
                                <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>
                                    How Universities View the IB
                                </div>
                                <div className={styles.para}>
                                    One of the IB’s greatest selling points is how universities perceive it. Admissions officers across the globe see IB graduates as
                                    well prepared. In the UK, IB Diploma points are converted into UCAS tariff points and accepted alongside or instead of A‑Levels. In
                                    the U.S., high IB scores can earn college credit or advanced placement, similar to AP exams. In Canada,
                                </div>
                            </div>
                            <div className={styles.para} style={{ textAlignLast: "justify" }}>
                                Australia, and Europe, the Diploma is equally respected.
                                The IB’s global reputation also benefits students applying to less conventional destinations. Whether a
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Column */}
                <div className="flex lg:flex-row md:flex-row flex-col flex-1 lg:w-1/2 md:w-1/2 lg:gap-[1dvw] md:gap-[1dvw] text-justify" style={{ lineHeight: `${line_height}px` }}>
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            family is relocating to Asia,
                            Europe, or South America, an IB Diploma signals a level of academic rigor and consistency that local admissions officers understand.
                        </div>
                        <div>
                            <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>
                                Choosing an IB School: What to Ask
                            </div>
                            <div className={styles.para}>
                                For parents considering an IB school, it’s important to recognize that while the IB curriculum is standardized, implementation varies.
                                Some schools have decades of IB experience, highly trained teachers, and robust support structures for students juggling TOK, EE, and
                                CAS. Others are newer to the program or offer a limited range of subjects.
                            </div>
                        </div>
                        <div className={styles.para}>
                            <div className={styles.sub_heading} style={{ fontStyle: "italic" }}>
                                Key questions to ask include:
                            </div>
                            <ul style={{ listStyleType: "disc", paddingLeft: "1dvw" }}>
                                <li>
                                    How many Higher Level subjects are offered, and which ones?
                                </li>
                                <li>
                                    How experienced are the IB teachers, and what professional development do they receive?
                                </li>
                                <li>
                                    What kind of support is provided for TOK, Extended Essay supervision, and CAS coordination?
                                </li>
                                <li>
                                    What are the school’s average IB scores, and how do graduates fare in university admissions?
                                </li>
                            </ul>
                            The answers can reveal a lot about the school’s IB culture and how well it will support students through the demanding two‑year Diploma journey.
                        </div>
                        <div>
                            <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>
                                The IB for Mobile Families
                            </div>
                            <div className={styles.para}>
                                One of the IB’s original goals was to serve globally mobile families, and that mission remains central.
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            For expatriates who might move
                            multiple times during their children’s education, the IB provides a common framework—an academic language that translates across
                            borders. A student leaving Year 11 in an MYP school in Qatar can join an IB Diploma class in Hong Kong without starting from scratch.
                        </div>
                        <div className={styles.para}>
                            That said, mobility has limits: the Diploma is a two‑year commitment, and switching schools mid‑Diploma can be disruptive, especially if
                            the receiving school doesn’t offer the same subjects or schedules. Families planning relocations during these years should discuss with
                            schools how best to manage transitions.
                        </div>
                        <div className={styles.para}>
                            The International Baccalaureate has earned its reputation as one of the most challenging and rewarding educational systems available in
                            international schools. It’s not simply a curriculum—it’s a philosophy that emphasizes intellectual curiosity, global mindedness, and
                            personal growth. For students who embrace its demands, the IB provides not only a passport to universities around the world but a toolkit
                            for thinking critically, communicating effectively, and engaging responsibly with the world.
                        </div>
                        <div className={styles.para}>
                            For families, choosing the IB means embracing a vision of education that goes beyond grades. It’s about
                            asking students to balance breadth
                            and depth, to reflect on the nature of knowledge.
                            {/* to write their first real research paper, and to contribute to their communities. It’s
                            demanding, and it isn’t for everyone—but for many students, it’s transformative. */}
                        </div>
                        {/* <div className={styles.para}>
                        </div>
                        <div className={styles.para}>
                            For expatriate parents navigating the maze of international schools, the IB stands out for its global recognition, philosophical depth,
                            and proven track record. Whether in the form of the PYP for young learners, the MYP for middle years, or the Diploma for university‑bound
                            teenagers, the IB offers a cohesive, rigorous, and internationally minded education. And for the right student, it’s not just preparation
                            for university—it’s preparation for life.
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}