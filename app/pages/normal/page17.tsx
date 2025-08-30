import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css";
import { useEffect, useRef, useState } from "react";

export default function Page17() {
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
        className="hyphens-auto flex lg:flex-row md:flex-row flex-col lg:gap-[2vw] md:gap-[2vw] gap-[2rem] lg:text-[0.9vw] md:text-[0.9vw] text-[3.46vw]"
        style={{ height: "100%", lineHeight: `${line_height}px` }}
      >
        {/* Right Column */}
        <div className="flex lg:flex-row md:flex-row flex-col lg:w-1/2 md:w-1/2 lg:gap-[1vw] md:gap-[1vw] gap-[1rem]">
          <div
            className="lg:w-1/2 md:w-1/2 flex flex-col lg:gap-[1vw] md:gap-[1vw] gap-[1rem]"
            style={{ gap: `${line_height}px` }}
          >
            <div
              className={`${styles.section_heading} lg:text-[1.2vw] md:text-[1.2vw] text-[1.2rem] lg:mt-[0.3dvw] md:mt-[0.3dvw]`}
              style={{ textAlign: "left", hyphens: "manual" }}
            >
              <p
                style={{
                  padding: `${line_height / 6}px`,
                  textTransform: "uppercase",
                  hyphens: "manual",
                  textAlign: "left",
                }}
              >
                The International Baccalaureate Program
              </p>
            </div>
            <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
              <div className={styles.para}>
                The International Baccalaureate (IB) was founded in Geneva in
                1968 and currently consists of three educational programs: the
                Primary Years Program, the Middle Years Program and the
                International Baccalaureate Diploma Program. The IB itself is a
                UNESCO non-governmental organization whose initial mandate was
                to “provide an internationally acceptable university admissions
                qualification suitable for the growing mobile population of
                young people whose parents are part of the world of diplomacy,
                international and multinational organizations”.
              </div>
              <div className={styles.para}>
                Since its inception, the IB organization has evolved to include
                curricula for all year groups in primary and secondary education
                and is offered in English, Spanish and French.
              </div>
              <div className={styles.para}>
                It is probably best understood through its mission statement:
                “The International Baccalaureate aims to develop inquiring,
                knowledgeable and caring young people who help to create a
                better and more peaceful world through intercultural
                understanding and respect. To this end the organization works
                with schools, governments and international organizations to
                develop challenging programs of international education and
                rigorous assessment.
              </div>
            </div>
          </div>

          <div
            className="flex flex-col lg:w-1/2 md:w-1/2 text-justify"
            style={{ gap: `${line_height}px` }}
          >
            <div className={styles.para}>
              These programs encourage students across the world to become
              active, compassionate and lifelong learners who understand that
              other people from cultures and nations from across the world, with
              their vast array of differences in terms of outlook and
              perspective of life, can also be right and the importance of
              keeping an open mind when discussing various topics.
            </div>
            <div className={styles.para}>
              Schools that offer any of the three IB programs must undergo a
              rigorous quality assurance approval process administered by the IB
              organization, and are re-inspected at regular intervals to ensure
              standards remain consistently high and meet all requirements.
            </div>
            <div>
              <div
                className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}
              >
                The Primary Years Program
              </div>
              <div className={styles.para}>
                First established in 1997, the Primary Years Program (PYP) is
                for students aged 3-12 and “focuses on the development of the
                whole child as an inquirer, both in the classroom and the world
                outside”. The program “focuses on the total growth of the
                developing child, touching hearts as well as minds and
                encompassing social, physical, emotional and cultural needs in
                addition to academic development”.
              </div>
            </div>
            <div className={styles.para}>
              This inquiry-based approach, rather than being parochial in
              nature, encourages students to think about issues across a range
              of globally relevant topics such as:
              <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                <li>Who we are</li>
                <li>Where we are in place and time</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Left Column */}
        <div
          className="lg:w-1/2 md:w-1/2 flex flex-col lg:pb-0 md:pb-0 pb-[5dvw] justify-between"
          style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}
          id="container"
        >
          <div
            className="flex lg:flex-row md:flex-row flex-col gap-[1dvw]"
            style={{ height: "calc(100% - (0.6 * 50dvw))" }}
          >
            <div
              className="lg:w-1/2 md:w-1/2 flex flex-col"
              style={{ gap: `${line_height}px` }}
            >
              <div className={styles.para}>
                <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                  <li>How we express ourselves</li>
                  <li>How the world works</li>
                  <li>How we organize ourselves</li>
                  <li>Sharing the planet</li>
                </ul>
              </div>
              <div className={styles.para}>
                Teachers then shape their curriculum based on these general
                topics so that, for example, a class may study the environment
                in general as a theme that incorporates all core subjects.
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
                The Middle Years Program Started in 1994, the Middle Years
                Program is designed for students aged 11-16.
              </div>
              <div className={styles.para}>
                According to the IB organization, the program is based on the
                belief that “Life in the 21st century places many changing
                demands on students making the transition through adolescence.
                They are at a crucial period of personal, social, physical and
                intellectual development, of uncertainty and of questioning.
              </div>
            </div>
          </div>
          <div className="" style={{ alignContent: "center" }}>
            {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
            <YoutubeEmbed
              className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]"
              videoId="9wl1Pa05dM0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
