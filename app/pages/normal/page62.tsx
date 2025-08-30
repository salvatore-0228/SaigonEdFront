import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css";
import { useEffect, useRef, useState } from "react";

export default function Page62() {
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
        className="hyphens-auto flex lg:flex-row md:flex-row flex-col gap-[2vw] lg:text-[0.9vw] md:text-[0.9vw] text-[3.46vw]"
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
              className="lg:w-1/2 md:w-1/2 flex flex-col"
              style={{ gap: `${line_height}px` }}
            >
              <div className={styles.para}>
                Most German international schools require students to learn at
                least two, sometimes three, foreign languages. English is almost
                always one of them, and many schools introduce additional
                languages early on, reflecting Germany’s commitment to
                multilingualism.
              </div>
              <div className={styles.para}>
                There is also a cultural and philosophical component: German
                education values Bildung, a term that translates loosely to
                “education” but encompasses personal formation, civic
                responsibility, and cultural enrichment. This concept permeates
                the curriculum, with students encouraged not just to memorize
                facts but to think deeply, discuss ideas, and develop as
                well-rounded individuals.
              </div>
              <div>
                <div
                  className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}
                >
                  Advantages of the German Curriculum for Expatriate Families
                </div>
                <div className={styles.para}>
                  For expatriates, one of the most compelling advantages of the
                  German curriculum is its global recognition. The Abitur is
                  widely regarded as one of the most rigorous secondary school
                  diplomas, opening doors to universities across Europe, North
                  America, and beyond. In fact, many universities in the U.S.,
                  UK, and Canada explicitly state that they consider Abitur
                  graduates exceptionally well prepared for the demands of
                  tertiary education.
                </div>
              </div>
              <div className={styles.para} style={{ textAlignLast: "justify" }}>
                Another strength is the academic rigor and structure the
                curriculum provides. Parents often praise German international
                schools for their systematic approach,
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
                clear standards, and disciplined learning environment. This is
                especially appealing to expatriate families who want their
                children challenged intellectually and equipped with strong
                study habits. German schools also cultivate critical thinking
                and problem-solving skills. Students aren’t merely asked to
                absorb material; they are taught to analyze, interpret, and
                debate – something highly valued in German culture. The strong
                emphasis on discussion, essay writing, and oral exams helps
                prepare them for the analytical demands of university life.
              </div>
              <div className={styles.para}>
                Language acquisition is another major benefit that cannot be
                undervalued in the context of expatriate life abroad. In an
                increasingly global world, multilingualism is a crucial asset,
                and German schools provide an immersive environment for
                acquiring languages. Expat children may graduate fluent in
                German (a valuable language for business and academia) and
                competent in several others, giving them a significant advantage
                in future studies or careers. International assignees that
                pursue multiple postings may have the opportunity to expose
                their children to multiple languages.
              </div>
              <div className={styles.para}>
                For German expatriates, the advantages are even clearer:
                attending a German school abroad allows their children to
                transition smoothly back into the German system if they return
                home. It also preserves cultural ties, traditions, and language,
                something many families deeply value.
              </div>
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div
          className="flex lg:flex-row  md:flex-row flex-col flex-1 lg:w-1/2 md:w-1/2 lg:gap-[1dvw] md:gap-[1dvw] text-justify"
          style={{ lineHeight: `${line_height}px` }}
        >
          <div
            className="lg:w-1/2 md:w-1/2 flex flex-col"
            style={{ gap: `${line_height}px` }}
          >
            <div className={styles.para}>
              <div
                className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}
                style={{ textAlign: "left" }}
              >
                Challenges and Disadvantages for Non-German Expatriates
              </div>
              For non-German expatriate families, however, the German curriculum
              can present challenges. The most obvious is the language barrier.
              While many German international schools offer bilingual tracks or
              language support, the Abitur itself remains heavily
              German-language based. Children without prior exposure to German
              may need years of intensive study to fully access the curriculum.
              The academic rigor that makes the German system so respected can
              also make it demanding. The workload in the upper years is
              substantial, and the pressure to achieve high marks in core
              subjects can be intense.
            </div>
            <div className={styles.para}>
              For expat families who expect frequent relocations or whose
              children thrive in more flexible systems, this structured,
              demanding approach may feel too rigid.
            </div>
            <div className={styles.para}>
              Additionally, the availability of German international schools is
              far more limited than, say, IB or British schools. While IB World
              Schools can be found in almost every major city, German schools
              abroad are concentrated in specific locations with large German
              expatriate communities. Ho Chi Minh City, for example, has one
              German school (the International German School HCMC), whereas
              there may be multiple IB or British options. This limited presence
              can restrict options for families who want this curriculum but
              live in areas without a German school.
            </div>
          </div>

          <div
            className="flex flex-col lg:w-1/2 md:w-1/2 text-justify"
            style={{ gap: `${line_height}px` }}
          >
            <div className="gap-[1rem] border-t-4 border-b-4 border-black-60 lg:mt-[0.3dvw] md:mt-[0.3dvw] h-[25dvh] flex-1">
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
                    className="dark:text-white-600 text-black-600 opacity-20 lg:text-[450px] md:text-[450px] text-[70vw]"
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
                    className="lg:text-[1.2dvw] md:text-[1.2dvw] text-[1.3rem] p-[1rem]"
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
                    For parents, the choice often comes down to priorities: if a
                    family values deep academic rigor, language immersion, and
                    cultural continuity, the German system stands out.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
              <div className={styles.para}>
                <div
                  className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}
                >
                  The German Curriculum Compared to Other Systems
                </div>
                For expatriate families weighing the German curriculum against
                alternatives, it helps to understand how it differs from the
                others. Compared to the British system (IGCSE and A Levels), the
                German curriculum is arguably more integrated and holistic.
                While British schools require students to narrow their focus to
                a handful of subjects in the A Level years, the Abitur demands
                proficiency across a broader range of subjects, ensuring
                students leave with a more balanced academic profile.
              </div>
              <div className={styles.para} style={{ textAlignLast: "justify" }}>
                In contrast to the American AP system, which allows a
                “pick-and-choose” approach to courses and exams, the German
                curriculum is less flexible but offers deeper engagement in each
                subject. The International Baccalaureate shares similarities
                with the German system in its emphasis on critical thinking,
                essay writing,
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
