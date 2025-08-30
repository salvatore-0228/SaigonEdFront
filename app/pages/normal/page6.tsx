import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css";
import { useEffect, useRef, useState } from "react";

export default function Page6() {
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
        className="flex lg:flex-row md:flex-row flex-col h-screen lg:gap-[2vw] md:gap-[2vw] text-justify hyphens-auto mx-auto lg:text-[0.9vw] md:text-[0.9vw] text-[3.38dvw]"
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
              className={`${styles.section_heading} lg:text-[1.2vw] md:text-[1.2vw] text-[1.2rem] lg:mt-[0.3dvw] md:mt-[0.3dvw]`}
            >
              <p
                style={{
                  paddingTop: `${isMobile ? 0 : line_height / 6}px`,
                  paddingBottom: `${isMobile ? 0 : line_height / 6}px`,
                  textTransform: "uppercase",
                }}
              >
                The UK versus the US curricul&shy;um – making an informed choice
              </p>
            </div>
            <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
              <div className={styles.para}>
                <span className="font-bold float-left leading-none lg:text-[2.5vw] md:text-[2.5vw] text-[9vw]">
                  A
                </span>
                <p className="text-justify">
                  n important factor to consider when deciding what
                  international school your child will attend is the curriculum
                  that is offered. The majority of international schools will
                  generally offer either a British- or US-style curriculum
                  (although there may well be other options available). Of
                  course, if your child has previously been enrolled in either
                  of these systems, or it is your intention to return to your
                  national system when you go back home, it makes a good deal of
                  sense to continue down that same educational path. However, if
                  you are coming from another educational system, or want to
                  explore some of the other options that might be available, it
                  will be useful to look at where the two systems are similar
                  and where they differ.
                </p>
              </div>
              <div className={styles.para}>
                The United States school curriculum is state-based, i.e. each
                state offers a curriculum that reflects its particular needs,
                history, demographics, etc., although there will nevertheless be
                a good deal of uniformity across the states in core subject
                areas. Most schools offering a British curriculum will follow
                what is known as the National Curriculum, which is taught in
                government-maintained schools in the UK.
              </div>
              <div className={styles.para} style={{ textAlignLast: "justify" }}>
                What does this mean in an international setting? In American
                international schools, the programs offered 
              </div>
            </div>
          </div>
          <div
            className="lg:w-1/2 md:w-1/2 text-justify flex flex-col"
            style={{ gap: `${line_height}px` }}
          >
            <div className={styles.para}>
              by individual schools may have greater variety, as each school is
              able to select from best practice across the country, with regards
              to both curriculum style and subject areas, in order to reflect
              the ethos and mission of their particular institution. At British
              international schools the overall curriculum structure and the
              subjects taught during the primary and early secondary years will
              be largely consistent (perhaps with some additions designed to
              enable pupils to explore the culture and history of the host
              country), although there is a good deal of flexibility in subject
              choice for senior secondary students.
            </div>
            <div className={styles.para} style={{ textAlignLast: "justify" }}>
              American international schools receive accreditation from one of
              three main bodies: Western Association of Schools and Colleges
              (WASC); New England Association of Schools and Colleges (NEASC);
              and Southern Association of Schools and Colleges (SACS). This
              process of accreditation ensures that American international
              schools have appropriate programs in place for student learning,
              have a clear purpose and philosophy, and have adequate and
              appropriate student evaluation and assessment procedures in place
              which enhance, support and develop its learning programs. This
              accreditation also means that a school’s program and the
              transcripts and records it provides for its pupils will enable
              them to transfer successfully to other schools both in the US and
              beyond; these records also serve as an important and recognized
              indicator of educational achievement that will facilitate
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
                pupils’ later entry into colleges and universities worldwide.
                Most American international schools will also offer Advanced
                Placement (AP) or Advanced Placement International Diploma
                (APID) programs for senior high school students. These are
                recognized by more than 3,600 universities worldwide, including
                in over 55 countries outside the US.
              </div>
              <div className={styles.para}>
                The British National Curriculum is managed by the UK Department
                of Education. Government schools follow this curriculum and
                manage their own assessment and reporting through the primary
                and early secondary years. There are national examinations (for
                pupils in both government and independent schools) at the end of
                Year 10 (GCSE) and Year 12 (A-Levels) which are marked and
                graded by one of a number of different external assessment
                boards. Students at British international schools at the end of
                Years 10 and 12 can sit international versions of the same
                examinations, which are marked and graded by a UK examination
                board. A-Levels are generally used as the benchmark for pupils
                entering British universities. A significant number of British
                and US international schools, in addition to their own country’s
                secondary or high school assessment and accreditation programs
                and examinations, will also offer the International
                Baccalaureate Diploma or Certificate.
              </div>
              <div className={styles.para} style={{ textAlignLast: "justify" }}>
                Schools that offer IB programs undergo a rigorous quality
                assurance and approval process and are
              </div>
            </div>
            <div
              className="lg:w-1/2 md:w-1/2 flex flex-col"
              style={{ gap: `${line_height}px` }}
            >
              <div className="gap-[1vw] border-t-4 border-b-4 border-black-60 flex-1 lg:mt-[0.3dvw] md:mt-[0.3dvw] lg:mb-[0.6dvw] md:mb-[0.6dvw]">
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
                      className="lg:text-[1.7dvw] md:text-[1.7dvw] text-[1.3rem] lg:p-[1dvw] md:p-[1dvw] p-[1rem]"
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
                        lineHeight: `${line_height * 1.5}px`,
                      }}
                    >
                      SCHOOLS THAT OFFER IB PROGRAMS UNDERGO A RIGOROUS QUALITY
                      ASSURANCE AND APPROVAL PROCESS AND ARE INSPECTED AT
                      REGULAR INTERVALS TO ENSURE THAT THEIR STANDARDS REMAIN
                      HIGH
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ height: "100%" }} controls></video> */}
                <YoutubeEmbed
                  className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]"
                  videoId="iD-W3BT2uFo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
