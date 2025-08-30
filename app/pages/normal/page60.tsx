import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page60() {
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
            <div className="hyphens-auto flex lg:flex-row md:flex-row flex-col gap-[2vw] lg:text-[0.9vw] md:text-[0.9vw] text-[3.46vw]" style={{ lineHeight: `${line_height}px`, height: "100%" }}>
                {/* Left Column */}
                <div className="flex flex-col flex-1" id="container" style={{ gap: `${line_height}px` }}>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                For families who value cultural literacy and intellectual depth, this can be a decisive factor.
                            </div>
                            <div>
                                <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>
                                    Challenges and Disadvantages
                                </div>
                                <div className={styles.para}>
                                    The French curriculum, however, is not without its challenges, particularly for non-French expatriates. The language barrier is the
                                    most immediate issue. While bilingual sections and support programs exist, the core of the curriculum—and especially the bac—is taught
                                    and assessed in French. Students who join the system later without strong French skills can find themselves overwhelmed.
                                </div>
                            </div>
                            <div className={styles.para}>
                                The academic rigor that is so attractive to some families can also be daunting. The workload in lycée is heavy, and the bac is a
                                high-pressure, high-stakes qualification. Some students thrive in this environment, but others may struggle with the intensity.
                            </div>
                            <div className={styles.para}>
                                Another consideration is the cultural specificity of the curriculum. The French system is deeply rooted in French history, literature, and
                                philosophy. This can be enriching, but it can also feel insular or less relevant to students from very different cultural
                                backgrounds—especially if they plan to continue their education outside of the French-speaking world.
                            </div>
                            <div className={styles.para}>
                                Finally, the availability of French schools, while broader than the German system, is still more limited than, say, IB programs, which
                                can be found almost everywhere.
                            </div>
                        </div>

                        <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col gap-[1rem]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                This agencies subsidize tuition for French nationals, making the schools more accessible for expatriate employees.
                            </div>
                            <div>
                                <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>
                                    Enrollment and Access for Expat Families
                                </div>
                                <div className={styles.para}>
                                    Accessing the French curriculum as an expatriate depends on location and demand. In most major cities with a French expatriate
                                    population, there is at least one lycée or école offering the full curriculum. Admission processes vary, but many schools
                                    prioritize French citizens and children of French speakers, particularly in the upper grades where language proficiency is essential.
                                    For younger children, schools are generally more open to non-French families, with programs designed to bring them up to speed
                                    linguistically. Many schools operate accueil (welcome) classes or FLE (Français Langue Étrangère) programs to help non-native speakers
                                    acquire the French needed to thrive in the curriculum.
                                    Tuition fees are another factor. While public education in France is free, French international schools abroad charge tuition, though fees are often lower
                                    than those of premium British or American international schools. In some cases, French companies or government agencies subsidize tuition for French
                                    nationals, making the schools more accessible for expatriate employees.
                                </div>
                            </div>
                            <div>
                                <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`} style={{ textAlign: "left" }}>
                                    Why Expat Families Choose the French Curriculum
                                </div>
                                <div className={styles.para} style={{ textAlignLast: "justify" }}>
                                    French expatriates have an obvious motivation: it al-
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Right Column */}
                <div className="flex lg:flex-row md:flex-row flex-col flex-1 lg:w-1/2 lg:gap-[1dvw] md:w-1/2 md:gap-[1dvw] text-justify" style={{ lineHeight: `${line_height}px` }}>
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            lows their children to maintain continuity in their education and culture, and provides a seamless path back
                            into the French system should they return home. But the appeal to non-French families is growing.
                        </div>
                        <div className={styles.para}>
                            Many are drawn by the intellectual reputation of the curriculum and the bac’s global recognition. Others appreciate the affordability
                            relative to some Anglo-American international schools. Some see the linguistic and cultural immersion as an invaluable gift for their
                            children, preparing them for an interconnected, multilingual future.
                        </div>
                        <div className={styles.para}>
                            For globally mobile families, the network of French schools offers stability: whether in Dubai, Dakar, or Hanoi, the curriculum remains
                            the same, allowing children to continue seamlessly even when relocations are frequent.
                        </div>
                        <div>
                            <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>
                                Conclusion: A Distinctive Educational Path&shy;way
                            </div>
                            <div className={styles.para}>
                                The French curriculum represents a distinctive choice in the international school landscape. It offers rigor, consistency, and
                                cultural richness, producing graduates who are not only academically accomplished but also articulate, thoughtful, and globally minded.
                            </div>
                        </div>
                        <div className={styles.para} style={{ textAlignLast: "justify" }}>
                            For expatriate families, it can be an excellent fit—especially for those who value multilingualism, intellectual challenge, and the idea
                            of education as a tool for shap-
                        </div>
                    </div>

                    <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify justify-between" style={{ gap: `${line_height}px` }}>
                        <div className="gap-[1rem] border-t-4 border-b-4 border-black-60 h-[25dvh] lg:mt-[0.3dvw] md:mt-[0.3dvw] flex-1">
                            <div style={{ alignItems: "center", display: "flex", justifyContent: "center", height: "100%" }}>
                                <div className={`flex-1 relative text-center`} style={{ position: "relative", fontFamily: "auto" }}>
                                    <p
                                        className="dark:text-white-600 text-black-600 opacity-20 lg:text-[25dvw] md:text-[25dvw] text-[70vw]"
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
                                        className="lg:text-[1.4dvw] md:text-[1.4dvw] text-[1.3rem] p-[1rem]"
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
                                            textTransform: "uppercase"
                                        }}>
                                        French expatriates have an obvious motivation: it allows their children to maintain continuity in their education and culture, and provides a seamless path back into the French system should they return home.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                ing character and intellect. But it is not without its hurdles: the language demands, the cultural
                                specificity,
                                and the academic intensity can make it less suitable for every child.
                            </div>
                            <div className={styles.para}>
                                Ultimately, choosing the French curriculum abroad is less about picking a “brand” of education and more about embracing a philosophy of
                                learning—one that asks students to think deeply, argue persuasively, and engage with ideas as much as facts. For many expatriate families,
                                that makes it one of the most rewarding choices they can make.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}