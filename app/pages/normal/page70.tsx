import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css";
import { useEffect, useRef, useState } from "react";

export default function Page70() {
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
        className="hyphens-auto flex lg:flex-row md:flex-row flex-col h-screen lg:gap-[2vw] md:gap-[2vw] gap-[5vw] text-justify hyphens-auto mx-auto lg:text-[0.9vw] md:text-[0.9vw] text-[3.45vw]"
        style={{ height: "100%", lineHeight: `${line_height}px` }}
      >
        {/* Left Column */}
        <div className="flex lg:flex-row md:flex-row flex-col lg:w-1/2 lg:gap-[1vw] md:w-1/2 md:gap-[1vw] gap-[5vw]">
          <div
            className="lg:w-1/2 md:w-1/2 flex flex-col justify-between"
            id="container"
            style={{ gap: `${line_height}px` }}
          >
            <div
              className={`${styles.section_heading} lg:text-[1.18vw] md:text-[1.18vw] text-[1.5rem] lg:mt-[0.35dvw] md:mt-[0.35dvw]`}
            >
              <p style={{ padding: `${line_height / 6}px` }}>UNIVERSITIES</p>
            </div>
            <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
              <div>
                <span className="lg:text-[2.5dvw] md:text-[2.5dvw] text-[3rem] font-bold float-left mr-2 leading-none">
                  V
                </span>
                <p className="text-justify lg:text-[0.9dvw] md:tex-[0.9dvw] text-[1.2rem]">
                  ietnam has emerged in recent years as more than just a dynamic
                  hub for business and culture in Southeast Asia—it is
                  increasingly becoming a destination for higher education, a
                  reality that has important implications for expatriate
                  families and professionals living in the country. For many
                  years, the default assumption among expatriates was that
                  students would need to leave Vietnam for university studies,
                  particularly if they aspired to attend globally ranked
                  institutions or pursue an international curriculum. However,
                  the landscape is evolving rapidly. Today, Vietnam’s higher
                  education sector includes a mix of long-established national
                  universities, emerging private institutions, and a growing
                  number of international branch campuses offering degrees
                  aligned with Western systems. For expatriate families whose
                  children are graduating from high school, or professionals
                  contemplating MBA or postgraduate opportunities, understanding
                  Vietnam’s university system and its fit for international
                  students is becoming increasingly important.
                </p>
              </div>
              <div className={styles.para} style={{ textAlignLast: "justify" }}>
                Vietnam’s public universities form the backbone of the national
                system, with venerable institutions like Vietnam National
                University (VNU) in Hanoi and Ho Chi Minh City, or the
                University of Economics Ho Chi Minh City, holding a reputation
                for academic rigor. These institutions are traditionally
                Vietnamese-language envi-
              </div>
            </div>
          </div>
          <div
            className="lg:w-1/2 md:w-1/2 text-justify flex flex-col"
            style={{ gap: `${line_height}px` }}
          >
            <div className={styles.para}>
              ronments, catering to local students who have come through the
              national curriculum, and they are known for competitive entrance
              exams that act as the gatekeeper to admission. For expatriate
              students, this can be a challenging entry point unless they are
              fluent in Vietnamese and have adapted to the national academic
              track. That said, some of these public universities have developed
              English-language programs in fields like business, technology, and
              economics, which are starting to attract international interest.
              The Vietnam National University system, for example, now offers
              selected degree programs and joint partnerships with foreign
              universities, creating pathways where a student might start their
              studies in Ho Chi Minh City and finish with a degree from an
              overseas partner school.
            </div>
            <div className={styles.para} style={{ textAlignLast: "justify" }}>
              Private and foreign-invested universities represent a different
              dimension of opportunity. Institutions like RMIT University
              Vietnam, the local branch of Australia’s Royal Melbourne Institute
              of Technology, have become flagships for expat-friendly higher
              education. RMIT operates entirely in English, offers degrees
              identical to those at its Australian campuses, and has built a
              strong reputation for business, design, and technology programs.
              It has become a natural extension for students graduating from
              international schools in Vietnam who have studied IB, A-Levels,
              IGCSE, or AP curricula and want to remain in the country for their
              undergraduate education. Other examples, such as
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
                Fulbright University Vietnam in Ho Chi Minh City, offer an
                American-style liberal arts education, focusing on critical
                thinking and interdisciplinary study. These institutions have
                been particularly appealing to families who want to avoid the
                cost and disruption of sending children abroad immediately after
                high school, while still ensuring that their degree will be
                internationally recognized.
              </div>
              <div className={styles.para}>
                For many expatriate parents, the decision about university in
                Vietnam hinges on several factors: the child’s academic
                readiness, their language proficiency, and the long-term plan
                for their career. If the goal is a fully global degree without
                leaving Vietnam, the options are still mostly clustered in the
                private, foreign-backed sector, and tuition costs reflect
                that—RMIT, for instance, charges fees similar to Western
                universities. However, the expansion of English-medium programs
                at public universities suggests that over the next decade, even
                more affordable options may emerge for international families.
                Similarly, for those seeking MBA programs, the question is
                whether they want an internationally branded degree like RMIT’s,
                or a program that embeds them more deeply into the Vietnamese
                business landscape through local universities.
              </div>
              <div className={styles.para} style={{ textAlignLast: "justify" }}>
                In short, Vietnam’s higher education scene is shifting from a
                system designed solely for Vietnamese students into a more
                complex mix of local and global opportunities. For expatriates
                with children finishing high
              </div>
            </div>
            <div
              className="lg:w-1/2 md:w-1/2 flex flex-col justify-between"
              style={{ gap: `${line_height}px` }}
            >
              <div className="gap-[1vw] border-t-4 border-b-4 border-black-60 lg:mt-[0.3dvw] md:mt-[0.3dvw] flex-1">
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
                      className="lg:text-[1.2dvw] md:text-[1.2dvw] text-[1.3rem] lg:p-[1dvw] md:p-[1dvw] p-[1rem]"
                      style={{
                        // fontSize: `1vw`,
                        fontWeight: "100",
                        fontFamily: "QuoteFont, sans-serif",
                        margin: "auto",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        textTransform: "uppercase",
                        lineHeight: `${line_height * 1.3}px`,
                      }}
                    >
                      For many expatriate parents, the decision about university
                      in Vietnam hinges on several factors: the child’s academic
                      readiness, their language proficiency, and the long-term
                      plan for their career.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.para}>
                school, it now presents an option worth considering, not just as
                a stopgap before study abroad, but as a viable four-year
                pathway. And for expatriate professionals, Vietnam’s MBA and
                postgraduate offerings are becoming a compelling way to combine
                career advancement with a deeper connection to one of Asia’s
                fastest-growing economies.
              </div>
              <div className="">
                {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ height: "100%" }} controls></video> */}
                <YoutubeEmbed
                  className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]"
                  videoId="WA8uOPOsmv4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
