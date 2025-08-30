import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page42() {
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
        <div className="h-full w-full lg:p-[1vw]  md:p-[1vw] p-[5vw] dark:bg-gray-900 dark:text-white lg:overflow-hidden overflow-auto h-full scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200">
            <div className="hyphens-auto flex lg:flex-row  md:flex-row flex-col gap-[2vw] lg:text-[0.9vw] md:text-[0.9vw] text-[3.46vw]" style={{ lineHeight: `${line_height}px`, height: "100%" }}>
                {/* Left Column */}
                <div className="flex flex-col flex-1" id="container" style={{ gap: `${line_height}px` }}>
                    {/* <div>
                        <span className="text-5xl font-bold float-left mr-2 leading-none">E</span>
                        <p className="text-justify lg:text-[1vw] text-[1.2rem]">
                        veryone wants the business of starting in a new school to be as smooth, quick and painless as possible, especially if it’s also in a new country.
                        Pupils want to meet their new classmates and teachers and make friends as soon as they can, while parents want to feel reassured that they
                        have made the right decision and that their child will be happy and flourish in their new environment, so they can stop worrying!
                        </p>
                        </div> */}
                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw]">
                        <div className="lg:w-1/2 md:w-1/2 flex flex-col justify-between" style={{ gap: `${line_height}px` }}>
                            <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
                                <div className={styles.para}>
                                    resources that affect the educational experience of students in various ways.
                                </div>
                                <div className={styles.para}>
                                    While many provide solid academics and good facilities, they
                                    often lack the lavish infrastructure of fully private institutions. Parents may notice smaller campuses, fewer extracurricular options, or
                                    less cutting-edge technology.
                                </div>
                                <div className={styles.para}>
                                    Teacher recruitment can also be more mixed; while many semi-private schools employ qualified international teachers,
                                    they may also rely more heavily on local staff, which could affect the consistency of instruction, particularly for families
                                    seeking a fully Western-style educational experience.
                                </div>
                                <div className={styles.para}>
                                    Additionally, semi-private schools sometimes operate under greater influence from local regulations or
                                    curriculum mandates. This can mean
                                    more standardized 
                                </div>
                            </div>
                            <div className="" style={{ alignContent: "center" }}>
                                {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                                <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="EYn8GRqujiU" />
                            </div>
                        </div>

                        <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col gap-[1rem]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                testing in the host country’s system or requirements for students to learn the local language—even for short-term expat children who might not need
                                it academically.
                            </div>
                            <div>
                                <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}>
                                    Not-for-Profit International Schools: Mission Over Margin
                                </div>
                                <div className={styles.para}>
                                    Not-for-profit international schools are, for many expats, the “gold standard” of education abroad.
                                </div>
                            </div>
                            <div className={styles.para}>
                                These schools are typically governed by boards of
                                directors (often made up of parents or alumni) and operate on a non-commercial model: tuition fees go directly
                                back into the school for teacher salaries, maintenance, program expansion, and scholarships rather than paying dividends to owners or
                                shareholders.
                            </div>
                            <div className={styles.para}>
                                The advantages of not-for-profit schools are numerous. Perhaps the most important is the sense of mission-driven purpose. These schools are
                                usually founded with a specific vision—to serve the international community, to provide continuity of
                                education for certain expatriate
                                populations (e.g., American, British, German), or to promote global-mindedness.
                                Because there is no profit motive, decisions are often
                                guided by what’s best for students
                                rather than shareholders.
                            </div>
                            <div className={styles.para}>
                                Financially, not-for-profit schools sometimes offer better value for money.
                            </div>
                        </div>
                    </div>

                </div>
                {/* Right Column */}
                <div className="flex lg:flex-row md:flex-row flex-col flex-1 lg:w-1/2  md:w-1/2 lg:gap-[1dvw] md:gap-[1dvw] text-justify" style={{ lineHeight: `${line_height}px` }}>
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            While tuition is rarely cheap, it is often reinvested into
                            improving the school. Parents may see tangible benefits like upgraded science labs, teacher training, or expanded arts programs—all without
                            the suspicion that money is being siphoned off as profit.
                        </div>
                        <div className={styles.para}>
                            Community culture is another strength. Not-for-profit schools often cultivate a strong sense of belonging.
                        </div>
                        <div className={styles.para}>
                            Parents may be more involved
                            in governance, volunteering, and strategic planning, fostering an environment where the school feels less like a business and more
                            like a shared project. For expat families who crave community in a transient life, this sense of partnership can be invaluable.
                        </div>
                        <div className={styles.para}>
                            However, not-for-profit schools aren’t without challenges. First, because they reinvest all funds rather than seek outside investment,
                            they may lack the deep pockets of corporate-run schools. Some not-for-profit schools are as well-funded and prestigious as any private institution,
                            but others operate on tighter budgets, which can translate into modest facilities or slower adoption of new technologies.
                        </div>
                        <div className={styles.para} style={{ textAlignLast: "justify" }}>
                            Another issue is competition for spaces. Not-for-profit schools, particularly those with strong reputations, often have long waiting
                            lists. Families may need to apply far in advance or accept that enrollment might
                            not be available mid-year. For expats who move on
                        </div>
                    </div>

                    <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            short notice, this can be a major obstacle.
                        </div>
                        <div>
                            <div className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`} style={{textAlign: "left"}}>
                                Foundation-Run International Schools: Philanthropy and Education
                            </div>
                            <div className={styles.para}>
                                Foundation-run international schools represent another distinct category. These schools are operated by charitable foundations,
                                trusts, or religious organizations, and they typically combine an educational mission with philanthropic or community-oriented
                                goals.
                            </div>
                        </div>
                        <div className={styles.para}>
                            They might be established by wealthy benefactors, NGOs, or faith-based groups who see education as part of their larger mission.
                        </div>
                        <div className={styles.para}>
                            The advantages of foundation-run schools often stem from their values-driven approach. They are frequently designed to embody the
                            principles of the foundation—whether that’s promoting global citizenship, providing education to underserved communities, or instilling
                            ethical and spiritual values. Some well-known foundation schools are prestigious, with academic outcomes and facilities comparable to
                            private or not-for-profit schools, but they are guided by a different ethos.
                        </div>
                        <div className={styles.para}>
                            Foundation-run schools can also be more affordable in some cases, particularly if the foundation subsidizes tuition or provides
                            scholarships to maintain a socioeconomically diverse student body. This can create a more inclusive environment than what’s found
                            at some ultra-exclusive private schools.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}