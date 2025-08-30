import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css";
import { useEffect, useRef, useState } from "react";

export default function Page48() {
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
    <div className="h-full w-full lg:p-[1vw] md:p-[1vw] p-[5vw] dark:bg-gray-900 dark:text-white lg:overflow-hidden overflow-auto h-full scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200">
      <div
        className="hyphens-auto flex lg:flex-row md:flex-row flex-col gap-[2vw] lg:text-[0.9vw] md:text-[0.9vw] text-[3.38vw]"
        style={{ lineHeight: `${line_height}px`, height: "100%" }}
      >
        {/* Left Column */}
        <div
          className="flex flex-col flex-1"
          id="container"
          style={{ gap: `${line_height}px` }}
        >
          <div className="flex lg:flex-row md:flex-row flex-col gap-[1vw]">
            <div
              className="lg:w-1/2 md:w-1/2 flex flex-col justify-between"
              style={{ gap: `${line_height}px` }}
            >
              <div className="gap-[1rem] border-t-4 border-b-4 border-black-60 h-[25dvh] lg:mt-[0.3dvw] md:mt-[0.3dvw] flex-1">
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <div
                    className={`flex-1 relative text-center`}
                    style={{ position: "relative", fontFamily: "auto" }}
                  >
                    <p
                      className="dark:text-white-600 text-black-600 opacity-20 lg:text-[20dvw] md:text-[20dvw] text-[70vw]"
                      style={{
                        position: "absolute",
                        top: "60%",
                        left: "50%",
                        transform: "translate(-50%, -35%)", // centers the element exactly in the middle
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
                      className="lg:text-[1.3dvw] md:text-[1.3dvw] text-[1.3rem] lg:p-[1dvw] md:p-[1dvw] p-[1rem]"
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
                        lineHeight: `${line_height * 1.4}px`,
                        textTransform: "uppercase",
                      }}
                    >
                      For international schools, adopting the IB is a way to
                      signal academic quality, global outlook, and consistency.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col"
                style={{ gap: `${line_height}px` }}
              >
                <div>
                  <div
                    className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}
                  >
                    The IB Diploma Programme: The Heart of the System
                  </div>
                  <div className={styles.para}>
                    When people refer to “doing the IB,” they’re usually talking
                    about the IB Diploma Programme (IBDP), the capstone
                    qualification that has become the IB’s hallmark.
                  </div>
                </div>
                <div className={styles.para}>
                  Designed for students in their final two years of secondary
                  school, the IBDP is both demanding and comprehensive. It’s not
                  just a set of courses—it’s a framework that insists students
                  stretch themselves across disciplines, think critically about
                  knowledge itself, and engage with the world beyond their
                  textbooks.
                </div>
                <div className={styles.para}>
                  Students in the IB Diploma take six subjects drawn from six
                  subject groups: studies in language and literature (often the
                  student’s first language), language acquisition (a second
                  language), individuals and societies (humanities), sciences,
                  mathematics, and the arts.
                </div>
              </div>
            </div>

            <div
              className="lg:w-1/2 md:w-1/2 text-justify flex flex-col gap-[1rem]"
              style={{
                lineHeight: `${line_height}px`,
                gap: `${line_height}px`,
              }}
            >
              <div className={styles.para}>
                Within this structure, there’s flexibility: a student can
                replace an arts course with an additional science or humanities
                subject if desired. The guiding principle is balance—students
                must be exposed to languages, math, science, and humanities,
                even if they have strong preferences. Three of these six courses
                are studied at Higher Level (HL), meaning roughly 240 hours of
                instruction each, and three at Standard Level (SL), with about
                150 hours each. HL courses are deeper and more demanding, and
                the combination allows students to pursue passions (say, HL
                Chemistry for an aspiring doctor) while maintaining breadth.
              </div>
              <div className={styles.para}>
                But the IB Diploma is not just about the six subjects. At its
                core are three distinctive components known collectively as the
                IB Core: Theory of Knowledge (TOK), an interdisciplinary course
                that asks students to reflect on how we know what we
                know—examining the nature of knowledge across different
                disciplines and cultures.
              </div>
              <div className={styles.para}>
                The Extended Essay (EE), an independent 4,000‑word research
                paper on a topic of the student’s choice, often their first
                experience with academic writing at this level. CAS (Creativity,
                Activity, Service), a program of extracurricular engagement
                where students commit to creative endeavors, physical
                activities, and service projects that foster personal growth and
                social responsibility. These core elements are what make the IB
                uniquely holistic.
              </div>
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div
          className="flex flex-col lg:w-1/2 md:w-1/2 text-justify justify-between"
          style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}
        >
          <div className="" style={{ alignContent: "center" }}>
            {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
            <YoutubeEmbed
              className="lg:translate-y-[0.3dvw] md:translate-y-[0.3dvw]"
              videoId="Yq7IEe5bJPk"
            />
          </div>
          <div className="flex lg:flex-row md:flex-row flex-col lg:gap-[1dvw] md:gap-[1dvw]">
            <div
              className="lg:w-1/2 md:w-1/2 flex flex-col"
              style={{ gap: `${line_height}px` }}
            >
              <div className={styles.para}>
                They require students to write, think, and reflect, not just
                cram facts for exams.
              </div>
              <div>
                <div
                  className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}
                >
                  How the IB Diploma Is Assessed
                </div>
                <div
                  className={styles.para}
                  style={{ textAlignLast: "justify" }}
                >
                  The IB assessment system is famously rigorous but also
                  nuanced. Each of the six subjects is graded on a scale of 1 to
                  7, with 7 being the highest. Up to three bonus points are
                  available from TOK and the Extended Essay
                </div>
              </div>
            </div>

            <div
              className="flex flex-col lg:w-1/2 md:w-1/2 text-justify"
              style={{ gap: `${line_height}px` }}
            >
              <div className={styles.para}>
                combined, making the highest possible IB score 45 points.
              </div>
              <div className={styles.para} style={{ textAlignLast: "justify" }}>
                Globally, the average score tends to hover around 30, while
                scores of 38 and above are considered outstanding. Assessment is
                a mix of external exams (taken at the end of the two‑year
                program and sent to international examiners) and internal
                assessments (essays,
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
