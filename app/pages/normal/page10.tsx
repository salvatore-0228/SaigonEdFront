import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css";
import { useEffect, useRef, useState } from "react";

export default function Page10() {
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
        className="hyphens-auto flex lg:flex-row md:flex-row flex-col gap-[2vw] lg:text-[0.9vw] md:text-[0.9vw] text-[3.4vw]"
        style={{ lineHeight: `${line_height}px`, height: "100%" }}
      >
        {/* Left Column */}
        <div className="flex lg:flex-row md:flex-row flex-col lg:w-1/2 md:w-1/2 lg:gap-[1vw] md:gap-[1dvw]">
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
                  padding: `${line_height / 6}px`,
                  textTransform: "uppercase",
                }}
              >
                Small versus big schools
              </p>
            </div>
            <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
              <div className={styles.para}>
                <span className="lg:text-[2.5dvw] md:text-[2.5dvw] text-[3rem] font-bold float-left mr-2 leading-none">
                  O
                </span>
                <p className="text-justify">
                  ne very important but often overlooked factor to consider when
                  choosing an international school is the size, whether the
                  overall size of the school as a whole or the size of its
                  individual year groups or classes. Below are some issues
                  related to school size that might help you as you make your
                  choice.
                </p>
              </div>
              <div>
                <div
                  className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}
                >
                  Community
                </div>
                <div className={styles.para}>
                  One potential advantage of a small school is that the parent
                  community there will usually have developed some very close
                  relationships and social networks. When you first arrive in
                  your new home, a close-knit well-established community could
                  be just what you need to help you adjust to your new life and
                  surroundings.
                </div>
              </div>
            </div>
            <div>
              <div
                className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}
              >
                Inter-school sports
              </div>
              <div className={styles.para} style={{ textAlignLast: "justify" }}>
                Although small schools may not offer the same breadth of choice
                for students in terms of sports teams, a pupil at a smaller
                school who may not be especially gifted athletically
                nevertheless often has a greater chance of playing on a school
                team that competes against other schools. Big schools will of
                course provide many opportunities for pupils to participate in
                intra-school competitions against their peers, but in many cases
                at such schools the competition to play in representative teams
                is intense and the majority of students therefore
              </div>
            </div>
          </div>

          <div
            className="lg:w-1/2 md:w-1/2 flex flex-col"
            style={{ gap: `${line_height}px` }}
          >
            <div className={styles.para}>
              do not have the opportunity to experience this.
            </div>
            <div>
              <div className={`${styles.sub_heading} lg:text-[120%]`}>
                Falling through the cracks
              </div>
              <div className={styles.para}>
                One of the most significant potential drawbacks of a large
                school is that children who need special attention can sometimes
                go unnoticed. In a smaller school this is less likely to be the
                case, as teachers will very often have more time and opportunity
                to support those pupils who need additional time and attention.
                Furthermore, even when student-teacher ratios are the same
                between large and small schools, in a smaller institution it
                might be easier for you to connect effectively with teachers,
                leaders and school administrators. Close and constant
                communication can be invaluable in helping you to feel confident
                and reassured that your child is on the right track, as well as
                for helping you to understand how best to guide and support your
                child at home.
              </div>
            </div>
            <div>
              <div className={`${styles.sub_heading} lg:text-[120%]`}>
                Management
              </div>
              <div className={styles.para} style={{ hyphens: "auto" }}>
                The relationship between the size of a school and the
                effectiveness of its management can have a significant effect on
                the quality of the educational experience that the school is
                able to provide. A small school administered by a capable
                principal or headteacher will usually have a staff that is well
                managed, hardworking and highly accountable. Senior leaders have
                opportunities to observe teachers regularly and to help them
                develop professionally, which also contributes positively to the
                quality of the education on offer.
              </div>
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div className="flex lg:flex-row md:flex-row flex-col lg:w-1/2 md:w-1/2 gap-[1vw] text-justify lg:pb-0 md:pb-0 pb-[5vw]">
          <div
            className="lg:w-1/2 flex flex-col"
            style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}
          >
            <div className={styles.para}>
              Those same capable leaders in a large school, with hundreds of
              staff to supervise and mentor, might not have the time to manage
              the professional development of individual teachers quite so
              closely. At the same time, a principal in a smaller school will
              come to know their students and the issues confronting them in
              greater detail, which means that there may well be a wider raft of
              support and pastoral programs available, while you can feel
              assured that your child’s individual needs are being adequately
              catered for.
            </div>
            <div>
              <div className={`${styles.sub_heading} lg:text-[120%]`}>
                Choices
              </div>
              <div className={styles.para}>
                One area where there is a clear advantage to choosing a larger
                institution is in the number of academic and extracurricular
                choices that are available to secondary school students. A wider
                range of course choices means that pupils have more
                opportunities to pursue areas of study in which they are
                especially capable or interested, while at the same time it
                means that they may also have the chance to try something new
                and adventurous, be it an advanced design course, music tuition,
                advanced maths or a third language.
              </div>
            </div>
            <div>
              <div className={`${styles.sub_heading} lg:text-[120%]`}>
                You and your child
              </div>
              <div className={styles.para} style={{ textAlignLast: "justify" }}>
                While they are adjusting to a new and completely changes in
                their routine or the things with which they are familiar. You
                can help a great deal in this regard by becoming involved in
                school life yourself. Get to know your child’s new classmates
                and their families; offer to come in to school to listen to
                pupils read; support the
              </div>
            </div>
          </div>

          <div
            className="flex flex-col lg:w-1/2 text-justify"
            style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}
          >
            <div className={styles.para}>
              school’s sports teams; or volunteer to be your class or year group
              representative. These sorts of actions can help you to engage with
              and understand the school so that you are able to provide support
              should your child need it.
            </div>
            <div className="gap-[1rem] border-t-4 border-b-4 border-black-60 h-[25dvh] h-full lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]">
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
                    className="dark:text-white-600 text-black-600 opacity-20 lg:text-[450px] md:text-[450px] text-[70dvw]"
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
                    className="lg:text-[1.3dvw] md:text-[1.3dvw] text-[1.3rem] p-[1rem]"
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
                    }}
                  >
                    THE RELATIONSHIP BETWEEN SCHOOL SIZE AND QUALITY OF
                    MANAGEMENT IS NOT OFTEN CONSIDERED BY PARENTS, THOUGH IT CAN
                    HAVE A TREMENDOUS EFFECT ON THE QUALITY OF YOUR CHILD’S
                    EDUCATION
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              {/* <video src="/videos/Saigon Ed Guide landscape.mp4" className="aspect-[16/9]" style={{ width: "100%" }} controls></video> */}
              <YoutubeEmbed
                className="lg:-translate-y-[0.4dvw] md:-translate-y-[0.4dvw]"
                videoId="EnD5nADEFjw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WidthResponsiveText({
  baseFontSize,
  baseWordSpacing,
  baseLetterSpacing,
  baseLineHeight,
  width,
  children,
}: {
  baseFontSize: number;
  baseWordSpacing: number;
  baseLetterSpacing: number;
  baseLineHeight: number;
  width: number;
  children?: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(420);
  const referenceWidth = width; // Reference width where text looks perfect

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  // Calculate scale factor based on width change
  const scale = containerWidth / width;

  console.log(scale);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden bg-white min-w-[300px] max-w-full"
      style={{ height: "100%" }}
    >
      <div
        style={{
          fontSize: `${baseFontSize * scale}px`,
          wordSpacing: `${baseWordSpacing * scale}px`,
          letterSpacing: `${baseLetterSpacing * scale}px`,
          // lineHeight: baseLineHeight,
          lineHeight: baseLineHeight,
          hyphens: "auto",
          height: "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
}
