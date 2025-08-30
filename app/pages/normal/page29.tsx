import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page29() {
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
                <div className="flex lg:flex-row md:flex-row flex-col flex-1 gap-[1vw]">
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" id="container" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            The process can be intimidating. A family arriving mid-year might find their first-choice school full, forcing them to either join a
                            waitlist or consider a less familiar alternative. Some companies with large expat workforces negotiate guaranteed places for employees’
                            children at certain schools—but for independent families or those working for smaller firms, the scramble is real.
                        </div>
                        <div>
                            <div className={`${styles.sub_heading} lg:text-[120%]`}>Financial Considerations: The High Price of International Education</div>
                            <div className={styles.para}>
                                Cost is another major complexity. International schools in Asia can be expensive—very expensive.
                                Annual tuition at top-tier schools in cities like Singapore, Shanghai, or Tokyo can easily exceed $30,000 to $40,000 USD per child,
                                with additional fees for enrollment, building funds, technology, and extracurriculars.
                            </div>
                        </div>
                        <div className={styles.para}>
                            For expatriates with comprehensive relocation packages, these costs may be covered by the employer.
                        </div>
                        <div className={styles.para}>
                            But as more expats relocate
                            independently or with leaner corporate support, tuition can become a significant financial burden.
                            Some families opt for mid-tier schools
                            that offer solid academics at lower fees, or consider national-plus schools (common in places like Indonesia) that blend local curricula
                            with international elements at a reduced cost.
                        </div>
                        <div className={styles.para} style={{textAlignLast: "justify"}}>
                            Others look for not-for-profit schools, which, while still
                        </div>
                    </div>

                    <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col gap-[1rem]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            expensive, often reinvest revenue into facilities and programs rather than
                            distributing profits to shareholders. Understanding the ownership and financial model of a school—private for-profit, foundation-run, or
                            community-based—can provide insights into where tuition money goes and what value families receive.
                        </div>
                        <div>
                            <div className={`${styles.sub_heading} lg:text-[120%]`}>Cultural and Linguistic Considerations</div>
                            <div className={styles.para}>
                                Moving to Asia means entering a world of new languages, traditions, and educational expectations. International schools exist partly
                                to buffer expatriate children from culture shock, but they also serve as a
                                bridge to the host country.
                            </div>
                        </div>
                        <div className={styles.para}>
                            Some schools create a “bubble,”
                            providing a Western-style education with little engagement with the local culture. Others integrate local language classes, cultural
                            events, and service projects that immerse students more deeply.
                        </div>
                        <div className={styles.para}>
                            Parents need to consider what kind of experience they want for their children. Should the school offer intensive language programs
                            (Mandarin in Beijing, Thai in Bangkok) so the child gains real proficiency? Should there be opportunities for meaningful interaction with local students,
                            or will the school be entirely expat-dominated?
                        </div>
                        <div className={styles.para} style={{textAlignLast: "justify"}}>
                            These decisions are personal. Some families prioritize continuity and comfort, wanting their children’s school 
                        </div>
                    </div>
                </div>
                {/* Right Column */}
                <div className="flex lg:flex-row md:flex-row flex-col flex-1 lg:w-1/2 md:w-1/2 text-justify lg:gap-[1dvw] lg:pb-0 md:gap-[1dvw] md:pb-0 pb-[5dvw]">
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            life to feel much like home.
                            Others see their time abroad as an opportunity for deeper cross-cultural growth and actively seek schools that emphasize global citizenship
                            and engagement with the host culture.
                        </div>
                        <div>
                            <div className={`${styles.sub_heading} lg:text-[120%]`}>Accreditation and Quality Assurance</div>
                            <div className={styles.para}>
                                With so many schools marketing themselves as “international,” how can parents assess quality? Accreditation is one key marker. Reputable
                                schools often hold accreditation from bodies like the Council of International Schools (CIS), the Western Association of Schools and Colleges (WASC), or the
                                International
                                Baccalaureate Organization (IBO). These accreditations indicate that a school has undergone rigorous evaluation of its curriculum, governance,
                                facilities, and teaching.
                            </div>
                        </div>
                        <div className={styles.para}>
                            However, accreditation is only part of the picture. Some newer schools may not yet have full accreditation but still offer excellent
                            programs. Conversely, a school with a long history might be resting on its laurels. Visiting the school, speaking to parents, and looking
                            at teacher turnover rates, university placement records, and inspection reports all help build a clearer picture.
                        </div>
                        <div>
                            <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>Social Environment and Community Fit</div>
                            <div className={styles.para} style={{textAlignLast: "justify"}}>
                                For expatriate children, school is not just where they learn academics—it’s where they find friends, build a 
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            sense of belonging, and navigate the challenges of life abroad. The social environment of an international school can dramatically affect how well
                            children adjust.
                        </div>
                        <div className={styles.para}>
                            Some schools have a highly international mix, with no single nationality dominating. Others might have a strong cluster of one or two
                            nationalities (for example, Japanese students in a Japanese school or Korean students in Seoul’s international schools). Parents should
                            consider whether their child will thrive in a diverse environment or prefer a school where many students share their background.
                            Beyond the student body, the parent community is another factor.
                            International schools often become hubs for expat social life, with
                            parents involved in events, volunteering, and networks. A welcoming, inclusive parent community can ease the transition for the whole
                            family.
                        </div>
                        <div>
                            <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>Long-Term Planning and Exit Strategy</div>
                            <div className={styles.para}>
                                For many expatriate families, the international school decision must consider not just the years in Asia, but what comes after. Where
                                will the family go next? Will the child return to their home country for university, or apply to schools abroad? How will the chosen
                                curriculum and school reputation affect those options?
                            </div>
                        </div>
                        <div className={styles.para}>
                            For example, a child enrolled in a French lycée in Bangkok will have a clear path to universities in France but might face a steep
                            transition if the family moves to the U.S.
                            {/* An IB graduate from an international school in Kuala Lumpur may be able to apply anywhere,
                            but will need to manage the IB’s demanding workload. Thinking ahead—at least in broad terms—can help prevent academic dead ends or
                            complicated transitions later. */}
                        </div>
                        {/* <div>
                            <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>The Emotional Dimension</div>
                            <div className={styles.para}>
                                Finally, there’s the emotional side of the decision. Moving to Asia can be exhilarating but also disorienting for children. The right
                                school can become a source of stability, community, and identity. The wrong fit can exacerbate feelings of isolation or culture shock.
                            </div>
                        </div>
                        <div className={styles.para}>
                            Parents must think not just about academics and logistics, but about the personality and needs of their child. A highly independent,
                            adaptable child might thrive in an adventurous bilingual program. A more sensitive child might do better in a familiar curriculum with lots
                            of support. Choosing a school is ultimately about finding an environment where the child can feel safe, supported, and able to flourish.
                        </div>
                        <div>
                            <div className={`${styles.sub_heading} lg:text-[120%]  md:text-[120%]`}>Conclusion: No Perfect Answer, Only the Best Fit</div>
                            <div className={styles.para}>
                                Choosing an international school when moving to Asia as an expat is not about finding the “perfect” school—it’s about finding the best
                                fit for your child, your family, and your circumstances. It’s a process that involves research, reflection, and sometimes compromise.
                                There may be trade-offs: between curriculum continuity and cultural immersion, between cost and facilities, between immediate availability
                                and long waiting lists.
                            </div>
                        </div>
                        <div className={styles.para} style={{ textAlignLast: "justify" }}>
                            But while the process is complex, it is also an opportunity. Asia’s international schools offer some of the most innovative, diverse,
                            and enriching educational environments in the world. By carefully considering the landscape—curriculum, cost, culture, accreditation,
                            and above all, the needs of your child—families can turn what feels like a daunting decision into the foundation of a rewarding,
                            transformative experience for their children and for themselves as they embark on their new life abroad.
                        </div> */}
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