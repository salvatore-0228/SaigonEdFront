import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css";
import { useEffect, useRef, useState } from "react";

export default function Page30() {
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
        className="flex lg:flex-row md:flex-row flex-col h-screen lg:gap-[2vw] md:gap-[2vw] gap-[5vw] text-justify hyphens-auto mx-auto lg:text-[0.9vw] md:text-[0.9vw] text-[3.46vw]"
        style={{ height: "100%", lineHeight: `${line_height}px` }}
      >
        {/* Left Column */}
        <div className="flex lg:flex-row md:flex-row flex-col lg:w-1/4 md:w-1/4 lg:gap-[1vw] md:gap-[1vw] gap-[5vw]">
          <div
            className="flex flex-col justify-between"
            id="container"
            style={{ gap: `${line_height}px` }}
          >
            <div
              className={`${styles.section_heading} lg:text-[1.5vw] md:text-[1.5dvw] text-[1.3rem] lg:mt-[0.3dvw] md:mt-[0.3dvw]`}
            >
              <p
                style={{
                  padding: `${line_height / 6}px`,
                  textTransform: "uppercase",
                }}
              >
                A-Levels
              </p>
            </div>
            <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
              <div className={styles.para}>
                For expatriate families exploring international school options,
                one of the most pivotal decisions is choosing the right academic
                pathway for their children. Among the most established and
                globally recognized qualifications is the General Certificate of
                Education Advanced Level, better known as A-Levels. This British
                credential, administered by boards such as Cambridge Assessment
                International Education, Pearson Edexcel, and OxfordAQA, is a
                gold standard for pre university education. In the context of
                international schools, A-Levels are not just a program—they
                represent a clear, rigorous route to higher education that
                appeals to students with defined academic interests and goals.
                Understanding what A-Levels are, how they function abroad, and
                what families should consider when choosing them is critical for
                anyone evaluating schooling options overseas.
              </div>
              <div className={styles.para}>
                A-Levels originated in England in the 1950s and remain the
                mainstay of secondary education for students in the UK who
                intend to go on to university. They are typically taken over two
                years, from ages 16 to 18 (Years 12 and 13 in the British
                system), following qualifications like the IGCSE or GCSE. The
                structure is deceptively simple: students select a small number
                of subjects—usually three or four—to study in great depth,
                culminating in externally assessed exams.
              </div>
            </div>
          </div>
        </div>
        {/* Center Column */}
        <div
          className="lg:w-1/2 flex justify-between flex-col"
          style={{ gap: `${line_height}px` }}
        >
          <div className="" style={{ alignContent: "center" }}>
            {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
            <YoutubeEmbed
              className="lg:translate-y-[0.3dvw] md:translate-y-[0.3dvw]"
              videoId="QDGV3aqRmH4"
            />
          </div>
          <div>
            <div className="flex lg:flex-row md:flex-row flex-col lg:gap-[1dvw] md:gap-[1dvw]">
              <div
                className="flex flex-col lg:w-1/2 md:w-1/2"
                style={{ gap: `${line_height}px` }}
              >
                <div className={styles.para}>
                  This makes A-Levels very different from programs like the
                  International Baccalaureate (IB) Diploma, which requires
                  students to spread their studies across six subjects plus
                  additional core components. With A-Levels, students drill deep
                  into their chosen disciplines, often specializing early in
                  preparation for university study.
                </div>
                <div className={styles.para}>
                  In international schools, A-Levels fill a unique role.
                </div>
              </div>
              <div
                className="flex flex-col lg:w-1/2 md:w-1/2"
                style={{ gap: `${line_height}px` }}
              >
                <div
                  className={styles.para}
                  style={{ textAlignLast: "justify" }}
                >
                  Many British curriculum schools abroad are designed around the
                  seamless flow from IGCSE into A-Levels, but even non British
                  schools sometimes offer A-Levels as a standalone senior year
                  program because of their strong reputation with universities.
                  Students who complete A-Levels demonstrate not just mastery of
                  content but the intellectual stamina to handle university
                  level academics. The subjects on offer are extensive, ranging
                  from mathematics, physics, and
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-[1vw] pb-[5vw] lg:w-1/4 md:w-1/4">
          <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
            <div className={styles.para}>
              chemistry to literature, law, economics, art, and even niche
              fields like marine science. International schools tend to offer a
              core set of A-Levels (maths, sciences, English, history) plus
              electives, with the breadth depending on school size and
              resources.
            </div>
            <div className={styles.para}>
              The student experience in A-Levels is defined by focus and depth.
              Unlike the broader curricula of AP or IB, A-Level students are
              expected to become subject specialists. Someone taking A-Level
              Biology, Chemistry, and Mathematics, for example, is essentially
              creating a pre university science track; someone choosing A-Level
              English Literature, Psychology, and Sociology is crafting a
              humanities focused portfolio. Over the two year period, students
              complete the AS Level component in the first year (Year 12) and
              the A2 Level component in the second (Year 13), though some
              schools deliver the full course in a linear format, with all exams
              at the end of the second year.
            </div>
            <div className={styles.para}>
              From a university perspective, A-Levels are one of the most widely
              recognized pre university qualifications in the world. In the UK,
              they are the standard metric for university admission, with most
              degree programs publishing entry requirements in terms of A-Level
              grades (for instance, “AAA for Medicine” or “ABB for Economics”).
              Outside the UK, A-Levels enjoy strong recognition: Australian,
              Canadian, and Singaporean universities accept them readily, and
              even U.S. universities value strong A-Level results, often
              granting credit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
