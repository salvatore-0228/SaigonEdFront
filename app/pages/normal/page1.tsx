import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css";
import { useEffect, useRef, useState } from "react";

export default function Page1() {
  const [line_height, setLineHeight] = useState(1.4);
  const [height, setHeight] = useState(1000);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    };

    handleResize(); // set on mount
    window.addEventListener("resize", handleResize);

    const height = document.getElementById("container")?.clientHeight || 0;
    console.log("Height:", height);
    setLineHeight(height / 30);
  }, []);

  useEffect(() => {
    const height = document.getElementById("container")?.clientHeight || 0;
    console.log("Height:", height, isMobile);
    if (isMobile) {
      setLineHeight(24);
    } else setLineHeight(height / 30);
  }, [height]);

  return (
    <div className="h-full w-full lg:p-[1vw] md:p-[1vw] p-[5vw] dark:bg-gray-900 dark:text-white lg:overflow-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200">
      <div
        className="flex lg:flex-row md:flex-row flex-col h-screen lg:gap-[2vw] md:gap-[2vw] text-justify hyphens-auto mx-auto lg:text-[0.9vw] md:text-[0.9vw] text-[3.46dvw]"
        style={{ height: "100%", lineHeight: `${line_height}px` }}
      >
        {/* Left Column */}
        <div className="flex lg:flex-row md:flex-row flex-col lg:w-1/2 lg:gap-[1vw] md:w-1/2 md:gap-[1vw]">
          <div
            className="lg:w-1/2 md:w-1/2 flex flex-col justify-between"
            id="container"
            style={{ gap: `${line_height}px` }}
          >
            <div
              className={`${styles.section_heading} lg:text-[1.2vw] md:text-[1.2vw] text-[1.2rem] lg:mt-[0.4dvw]`}
            >
              <p style={{ padding: `${line_height / 6}px` }}>
                SAIGON’S SCHOOL SYSTEM
              </p>
            </div>
            <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
              <div className={styles.para}>
                The educational journey in Ho Chi Minh City begins in the early
                years with public kindergartens, known in Vietnamese as mầm non,
                which typically enroll children from around eighteen months up
                to age five. Although preschool is not compulsory, it is widely
                popular among families in the city. Public kindergartens in
                Ho Chi Minh City are managed at municipal or district level by
                the Department of Education and Training and offer a structured
                introduction to literacy—the alphabet, basic numbers, and social
                routines. While nominally free, these schools often ask parents
                to cover expenses such as books, uniforms, and contributions
                through parent associations. In recent years a handful of public
                schools in the city have begun experimenting with partial
                English immersion or inquiry based teaching, but these
                progressive programmes remain limited and highly sought after,
                often with long waiting lists.
              </div>
              <div className={styles.para} style={{ textAlignLast: "justify" }}>
                When students reach six years old, they enter primary school
                (tiểu học), covering Grades 1 through 5. This phase is
                compulsory under Vietnam’s national curriculum, which in its
                reformed form (rolled out since 2024–25) is competency based,
                student centred, and more skills-oriented than its predecessor.
                In practice, instruction remains firmly in Vietnamese, and
                classroom sizes can exceed fifty students in public schools.
                Families typically pay for textbooks, uniforms, exam
              </div>
            </div>
          </div>
          <div
            className="lg:w-1/2 md:w-1/2 text-justify flex flex-col"
            style={{ gap: `${line_height}px` }}
          >
            <div className={styles.para}>
              fees, and occasional donations through parent groups. Some public
              schools have begun integrating native English speaking instructors
              to teach subjects like math and science, but this remains rare
              outside experimental classes.
            </div>
            <div className={styles.para}>
              From Grade 6 through Grade 9, children attend lower secondary
              schools (trung học cơ sở). Here the curriculum continues the
              national MOET programme, preparing students for the national lower
              secondary exam in Grade 9 that determines placement in upper
              secondary tracks. Public lower secondary schools remain
              predominantly Vietnamese in language and pedagogy—with lectures,
              memorization, and exam focus—but again, pockets of innovation
              exist in city centres where some schools allow teachers to
              experiment with more interactive learning methods. Admission for
              Vietnamese residents is based on assigned catchment areas; cross
              district transfers are uncommon and require strong justification
              or connections with the education authorities.
            </div>
            <div className={styles.para} style={{ textAlignLast: "justify" }}>
              Upon completing Grade 9, students move into upper secondary school
              (Grades 10 to 12), typically between ages fifteen and eighteen.
              Public high schools in Ho Chi Minh City fall into two broad
              categories: regular schools serving the general population, and
              elite specialized “gifted” high schools that require rigorous
              entrance exams. Admission to ordinary public high schools depends
              on a student’s exam score, and
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-[1vw] pb-[5vw] lg:w-1/2 md:w-1/2">
          <div className="flex lg:flex-row md:flex-row flex-1 flex-col gap-[1vw]">
            <div
              className="lg:w-1/2 md:w-1/2 flex flex-col"
              style={{ gap: `${line_height}px` }}
            >
              <div className={styles.para}>
                acceptance can vary widely; transfer between high schools is
                rare, especially in Grade 11 or 12. Elite schools—such as those
                attached to universities or focused on specific academic
                disciplines—are highly competitive and offer stipends, advanced
                instruction, and university level preparation for those who
                succeed.
              </div>
              <div className={styles.para}>
                Throughout the upper secondary years students prepare for the
                national high school graduation exam. In 2024 Vietnam began
                reforming this exam process, with the new format rolling out in
                2025, placing more emphasis on competencies, critical thinking,
                and diversified question types. The pressures of high stakes
                testing remain intense in most public schools, with
                supplementary tutoring being extremely common for exam
                preparation.
              </div>
              <div className={styles.para}>
                In tandem with the public system, private and bilingual schools
                have proliferated in Ho Chi Minh City over the past several
                decades to accommodate Vietnamese middle class and expatriate
                demand. These schools offer the national curriculum with added
                English instruction or merges with international programs. A key
                example is the British Vietnamese International School (BVIS),
                which blends the English National Curriculum with Vietnamese
                literature, history, and geography, delivering a bilingual
                environment and culminating in IGCSE and A Level qualifications.
                This school is fully accredited by CIS and part of Nord Anglia
                Education.
              </div>
            </div>
            <div
              className="lg:w-1/2 md:w-1/2 flex flex-col justify-between"
              style={{ gap: `${line_height}px` }}
            >
              <div
                className="flex flex-col"
                style={{ gap: `${line_height}px` }}
              >
                <div className={styles.para}>
                  Another popular bilingual option, Vietnam Australia
                  International School (VAS), integrates the Vietnamese national
                  curriculum with Cambridge programmes, offering dual diplomas
                  and a mission focused on excellence, respect, and national
                  pride.
                </div>
                <div className={styles.para}>
                  Other private schools like APU International School, licensed
                  by the Ministry of Education and Training to deliver a US
                  based California curriculum, offer education from K 12 in
                  English while still requiring Vietnamese national students to
                  take specified Vietnamese courses. APU delivers AP, SAT, and
                  ACT offerings and serves a diverse community in District 11.
                  Saigon Star International School, accredited for the
                  International Primary Curriculum, caters to younger children
                  up to age 14 with child centred education in a smaller
                  learning environment.
                </div>
                <div className={styles.para}>
                  For families seeking a fully international curriculum—
                </div>
              </div>
              <div className="" style={{ alignContent: "center" }}>
                {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video>
                 */}
                <YoutubeEmbed
                  className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]"
                  videoId="6j3j3NBPgUA"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
