import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page53() {
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
            <div className="flex lg:flex-row md:flex-row flex-col gap-[2vw] lg:text-[0.9vw] md:text-[0.9vw] text-[3.46vw]" style={{ height: "100%" }}>
                {/* Left Column */}
                <div className="flex lg:flex-row md:flex-row flex-col lg:w-1/2 md:w-1/2 lg:gap-[1vw] md:gap-[1vw]">
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }} id="container">
                        <div className={styles.para}>
                            British universities are accustomed to  the A-Level system and  often issue conditional offers based on predicted A-Level grades.
                            A student applying to study law at the
                            University of
                            Oxford, for example, will need to show excellence in relevant A-Level subjects like history or English. 
                        </div>
                        <div className={styles.para}>
                            American universities, on the other
                            hand, look at a much wider range of factors: GPA, test scores, extracurricular activities, essays, recommendations. Students coming from
                            the American system are accustomed to this holistic admissions approach, while those in the British system are trained to aim for precise
                            academic targets. For expats who might move between countries or consider both UK and US
                            universities for their children, the curriculum choice can have significant ramifications for application strategy.
                        </div>
                        <div className={styles.para}>
                            Cost and availability are also practical considerations. In many cities, British and American international
                            schools charge similar tuition,
                            often among the highest in the private school spectrum. However, there can be differences in resource allocation and facilities. American
                            schools often emphasize sports, extracurriculars, and campus culture, mirroring the well-rounded philosophy of US education. British
                            schools, while they also offer sports and arts, tend to be more academically oriented, with a stronger focus on core subject mastery.
                        </div>
                    </div>

                    <div className="lg:w-1/2 md:w-1/2 text-justify flex flex-col" style={{ gap: `${line_height}px`, lineHeight: `${line_height}px` }}>
                        <div className={styles.para}>
                            Parents should visit schools and see how the “feel” of the curriculum is expressed: an American school might have a bustling athletics
                            program and an emphasis on student councils and clubs, while a British school might lean toward formal uniforms, house systems, and a more
                            traditional classroom culture.
                        </div>
                        <div className={styles.para}>
                            For expats, the advantages of the British system often boil down to clarity, rigor, and global recognition. The structure is linear and
                            predictable: parents know what exams are coming and when, and universities worldwide respect GCSEs and A-Levels as indicators of academic
                            achievement. The specialization at A-Level means students can demonstrate deep expertise in their chosen subjects, which can be a huge
                            advantage when applying to competitive courses like medicine or engineering. But the very things that make the British system appealing can
                            also be drawbacks. The early specialization can feel rigid, locking students into academic tracks too soon. The exam intensity can create
                            significant stress, particularly for students
                            juggling the demands of frequent relocations or language adjustments as part of expat life.
                        </div>
                        <div className={styles.para} style={{textAlignLast: "justify"}}>
                            The American system’s strengths lie in its flexibility, breadth, and focus on the whole student. It keeps more options open longer, which
                            is helpful for teenagers who haven’t yet discovered their passions. It emphasizes participation, projects, and continuous assessment, which
                            can be more forgiving for students
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex lg:flex-row md:flex-row flex-col lg:w-1/2 md:w-1/2 gap-[1rem] text-justify lg:pb-0 md:pb-0 pb-[5vw]">
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            who struggle with high-stakes exams. The holistic nature of American education—where sports, arts, and
                            community service count alongside academics—also resonates with many expat families who want their children to develop more than just
                            academic skills. Yet
                            these same features can be perceived as weaknesses: some critics argue that the American system lacks rigor, that its
                            breadth comes at the expense of depth, or that its variability between schools can lead to uneven academic standards.
                        </div>
                        <div className={styles.para}>
                            Another layer to consider is cultural fit. The British curriculum carries the culture of the UK: a sense of tradition, formality, and
                            academic discipline. The American curriculum reflects American values: innovation, individuality, and a belief in “well-roundedness.” For
                            expat families, these cultural undercurrents can matter as much as the curriculum structure itself. A child who thrives in a structured,
                            rules-based environment might flourish in a British school, while one who craves choice and
                            self-expression might feel more at home in an American one.
                        </div>
                        <div className={styles.para} style={{textAlignLast: "justify"}}>
                            Of course, many families find themselves weighing these systems not in the abstract but in the context of specific schools in their host
                            city. The “British” and “American” labels can be shorthand, but the reality on the ground varies. A British school in Singapore might look
                            and feel very different from one in Ho Chi Minh 
                        </div>
                    </div>

                    <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify gap-[1rem]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            City; an American school in Bangkok might offer an International Baccalaureate diploma
                            alongside its US curriculum. Parents should consider not just the curriculum brand but the specific school’s ethos, teachers, facilities,
                            and community.
                        </div>
                        <div className={styles.para}>
                            For expats who move frequently, one final factor is future mobility. If a family expects to stay in Ho Chi Minh City for the rest of their
                            child’s schooling, they might choose the system that best fits their child’s learning style. But if multiple moves are on the horizon,
                            portability matters. British schools’ uniformity can make transitions smoother, while American schools’ flexibility can help students slot
                            into new environments without too much disruption.
                        </div>
                        <div className={styles.para}>
                            In the end, there is no one-size-fits-all answer to the UK vs. US curriculum question for expatriates. Both systems are robust, respected,
                            and capable of preparing students for top universities and global careers. The decision comes down to priorities: Do you value early
                            specialization or later exploration? Do you prefer high-stakes exams or continuous assessment? Do you want a structured, traditional
                            environment or a broad, holistic one? Each curriculum has its own philosophy, advantages, and trade-offs. For expat families, the best
                            choice is the one that aligns not just with university ambitions, but with their child’s temperament, learning style, and the realities of
                            life abroad.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}