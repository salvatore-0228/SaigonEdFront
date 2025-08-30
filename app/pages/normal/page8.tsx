import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css";
import { useEffect, useRef, useState } from "react";

export default function Page8() {
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
        className="flex lg:flex-row md:flex-row flex-col lg:gap-[2dvw] md:gap-[2dvw] lg:text-[0.9vw] md:text-[0.9vw] text-[3.3dvw] hyphens-auto"
        style={{ height: "100%" }}
      >
        {/* Left Column */}
        <div className="flex lg:flex-row md:flex-row flex-col flex-1 lg:gap-[1vw] md:gap-[1vw]">
          <div
            className="lg:w-1/2 md:w-1/2 flex flex-col lg:mt-[0.3dvw] md:mt-[0.3dvw]"
            style={{ gap: `${line_height}px`, lineHeight: `${line_height}px` }}
            id="container"
          >
            <div
              className={`${styles.section_heading} lg:text-[1.2vw] md:text-[1.2vw] text-[1.2rem]`}
            >
              <p style={{ padding: `${line_height / 6}px` }}>
                THE SCHOOL SELECTION PROCESS
              </p>
            </div>
            <div
              className=""
              style={{
                height: `${line_height * 10}px`,
                alignContent: "center",
              }}
            >
              {/* <video src="/videos/Saigon Ed Guide landscape.mp4" className="aspect-[16/9]" style={{ width: "100%" }} controls></video> */}
              <YoutubeEmbed videoId="GIsmEDj0obo" />
            </div>
            <div className={styles.para}>
              <span className="lg:text-[2.5dvw] md:text-[3dvw] text-[3rem] font-bold float-left leading-none">
                F
              </span>
              <p className="text-justify">
                inding the best school for your child means asking the right
                questions both of yourself (so you have fully understood and
                articulated your priorities) and of the school (so that you can
                ensure that your priorities are being addressed). Below are some
                areas where it might be useful to make a note of what you might
                expect from a school, and what you can reasonably expect a
                prospective school to be able to provide.
              </p>
            </div>
            <div>
              <div className={`${styles.sub_heading} text-[120%]`}>
                Facilities
              </div>
              <div className={styles.para} style={{ textAlignLast: "justify" }}>
                International schools will generally have impressive buildings,
                grounds and teaching and learning facilities, so it is important
                to remember to look most closely at, and ask the most questions
                about, the school’s provisions that best suit your child’s
                interests and talents. For instance, excellent sports grounds
                are important
              </div>
            </div>
          </div>

          <div
            className="lg:w-1/2 md:w-1/2 text-justify flex flex-col"
            style={{ gap: `${line_height}px`, lineHeight: `${line_height}px` }}
          >
            <div className={styles.para}>
              if your child is actively involved in a team or competes in an
              event regularly, but of less interest if they are not especially
              sporty; therefore, it is important that a prospective school is
              made aware of and understands your particular needs and enables
              you to see and ask questions about things that are relevant to
              you.
            </div>
            <div className={styles.para}>
              Further to this, it is also important for you to understand how a
              school’s facilities are used. The benefits of a talented and
              inspiring teaching staff will generally outweigh any deficiencies
              in a school’s buildings or grounds and so asking questions and
              making decisions based on a school’s teaching and learning
              philosophy and extracurricular programs is the best way to ensure
              that you are exploring all of your options and making the choice
              that is right for you.
            </div>
            <div>
              <div className={`${styles.sub_heading} text-[120%]`}>Staff</div>
              <div className={styles.para}>
                As above, the quality of the teaching staff and leadership team
                is by far the most important criterion when choosing a school,
                but it is also one of the most difficult things to judge. The
                majority of international schools in Shanghai employ accredited,
                Western-trained teachers and so this can make distinguishing
                between them a difficult task.
              </div>
            </div>
            <div className={styles.para} style={{ textAlignLast: "justify" }}>
              For parents of primary school students, it will be extremely
              helpful if you are able to meet the teacher whose class your child
              will be in, as this is the person in the school with whom they
              will spend the most time
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex lg:flex-row md:flex-row flex-col flex-1 lg:w-1/2 md:w-1/2 gap-[1vw] lg:pb-0 md:pb-0 pb-[5vw] text-justify">
          <div
            className="lg:w-1/2 md:w-1/2 flex flex-col"
            style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}
          >
            <div className={styles.para}>
              and who will have the greatest influence on them. Ask yourself if
              you like them, have confidence in them and would be happy for your
              child to be with them for anything up to eight hours a day. It
              will also be useful to look for yourself at the work produced by
              pupils in the class (if possible, over the course of a term or a
              reasonable period of time) in order to see if the level at which
              the class is working is appropriate for your child. Ask to have a
              look at the timetable to see if the school day looks balanced and
              contains sufficient variety, while a sample menu of school lunches
              might also help you in coming to a decision.
            </div>
            <div className={styles.para} style={{ textAlignLast: "justify" }}>
              For parents of secondary school students, where pupils are usually
              taught by a number of different teachers, the most useful members
              of staff for you to meet will be your child’s prospective form
              tutor (sometimes called class teacher, or mentor), and perhaps the
              head of year (or the member of the leadership team with overall
              responsibility for your child’s year group). It would also be
              helpful for you to have a good understanding of the areas of study
              in which your child is most enthusiastic or shows the most
              aptitude, since while a school will aim to have high quality staff
              teaching in all areas, having a positive rapport with the member
              of staff who will teach your child’s favorite subject might be the
              factor that finally makes up your mind. It is important to keep in
              mind, however, that staff turnover is quite high at international
              schools and therefore it might be helpful to talk to that teacher
            </div>
          </div>

          <div
            className="flex flex-col lg:w-1/2 md:w-1/2 text-justify gap-[1vw] lg:my-[0.4dvw] md:mt-[0.4dvw] justify-between"
            style={{ lineHeight: `${line_height}px` }}
          >
            <div className="gap-[1rem] border-t-4 border-b-4 border-black-60 flex-1">
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
                    className="dark:text-white-600 text-black-600 opacity-20 lg:text-[450px] md:text-[400px] text-[70dvw]"
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
                    className="lg:text-[1.35dvw] md:text-[1.35dvw] text-[1.3rem] lg:p-[1dvw] md:p-[1dvw] p-[1rem]"
                    style={{
                      // fontSize: "120%",
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
                    THE STANDARD OF EDUCATION AT INTERNATIONAL SCHOOLS IN SAIGON
                    VARIES FROM INSTITUTION TO INSTITUTION WITHIN A VERY NARROW
                    BANDWIDTH AT THE TOP OF THE SCALE
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col"
              style={{
                lineHeight: `${line_height}px`,
                gap: `${line_height}px`,
              }}
            >
              <div className={styles.para}>
                about how long they plan to be with the school, if you’re going
                to base part of your decision on the premise that they will be
                teaching your child.
              </div>
              <div>
                <div className={`${styles.sub_heading} lg:text-[120%]`}>
                  Approach
                </div>
                <div className={styles.para}>
                  Depending on your priorities, it will certainly be worth
                  discussing with the school what it values most highly in its
                  pupils. Some schools are unashamedly exam factories where
                  academic achievement is prized above all, while others pay no
                  attention to examinations and are far more concerned with
                  pupils’ social, moral and spiritual development. Most
                  international schools, however, tend to be a mix of the two,
                  seeking to produce well-balanced high achievers, with a strong
                  focus on global citizenship.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
