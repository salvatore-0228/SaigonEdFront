import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css";
import { useEffect, useRef, useState } from "react";

export default function Page43() {
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
          <div className="flex lg:flex-row flex-col gap-[1vw]">
            <div
              className="lg:w-1/2 md:w-1/2 flex flex-col"
              style={{ gap: `${line_height}px` }}
            >
              <div className={styles.para}>
                On the downside, foundation-run schools may come with
                philosophical or religious frameworks that don’t align with
                every family’s values. For example, a foundation-run school with
                a Christian ethos may integrate faith-based principles into
                daily life, which might be enriching for some families but
                uncomfortable for others. Parents need to examine the school’s
                mission carefully to ensure it matches their expectations.
              </div>
              <div className={styles.para}>
                Additionally, foundation-run schools may face financial
                volatility if they depend heavily on donations or endowments. If
                a foundation’s funding decreases, the school could experience
                cutbacks in programs or facilities, which might impact students
                directly.
              </div>
              <div>
                <div
                  className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}
                >
                  Comparing the Models: What Matters for Expat Families?
                </div>
                <div className={styles.para}>
                  When weighing these four types of schools, expatriate families
                  must consider their unique circumstances and priorities. Fully
                  private schools often represent the highest-end option, with
                  unrivaled facilities, extensive extracurriculars, and global
                  branding, but they come with high costs and sometimes a more
                  corporate feel.
                </div>
              </div>
              <div className={styles.para}>
                Semi-private schools can offer affordable access to
                international curricula and more cultural integration, but they
                may lack the polish or prestige of their fully private
                counterparts.
              </div>
              <div className={styles.para} style={{ textAlignLast: "justify" }}>
                Not-for-profit schools appeal to families who want
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
                mission-driven education and a strong community feel, offering
                reinvestment of fees for the good of the school. But access can
                be competitive, and some not-for-profits have fewer resources
                for rapid expansion or innovation. Foundation-run schools bring
                a values-based approach and potential affordability, but they
                require careful consideration of the foundation’s ethos and
                financial stability.
              </div>
              <div>
                <div
                  className={`${styles.sub_heading} lg:text-[120%] md:text-[120%]`}
                >
                  Additional Considerations for Globally Mobile Families
                </div>
                <div className={styles.para}>
                  Practical considerations often drive decisions as much as
                  philosophy. Availability is key: not every city offers all
                  four types of schools, and expatriates may have to work with
                  what exists locally. Fully private schools are the most common
                  in global hubs, while foundation-run or semi-private options
                  might be rarer or tied to specific communities.
                </div>
              </div>
              <div className={styles.para}>
                Long-term planning is also crucial. Families who expect to move
                frequently might value the network continuity offered by
                corporate private schools, where sister campuses can ease
                transitions. Others may prioritize the community integration of
                not-for-profit or semi-private schools, particularly if they
                intend to stay in one location for many years.
              </div>
              <div className={styles.para}>
                Budget is always a factor. Tuition ranges widely: some
                semi-private or foundation-run schools charge a fraction of what
                the top-tier private institutions do.
              </div>
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div
          className="flex lg:flex-row md:flex-row flex-col flex-1 lg:w-1/2  md:w-1/2 lg:gap-[1dvw] md:gap-[1dvw] text-justify"
          style={{ lineHeight: `${line_height}px` }}
        >
          <div
            className="lg:w-1/2 md:w-1/2 flex flex-col"
            style={{ gap: `${line_height}px` }}
          >
            <div className={styles.para}>
              Families paying out of pocket might prefer a lower-cost option,
              while those with corporate packages might view the highest-end
              schools as an included perk.Budget is always a factor. Tuition
              ranges widely: some semi-private or foundation-run schools charge
              a
            </div>
            <div>
              <div
                className={`${styles.sub_heading} lg:text-[120%]  md:text-[120%]`}
              >
                Conclusion: Choosing the Right Model for Your Expat Journey
              </div>
              <div className={styles.para}>
                For expatriate families, schooling is more than academics—it’s
                the cornerstone of family life abroad. The type of international
                school a child attends shapes their social circles, their
                cultural exposure, and even their sense of stability during the
                upheaval of relocations. Fully private international schools,
                semi-private institutions, not-for-profit schools, and
                foundation-run programs each bring distinct strengths and
                trade-offs.
              </div>
            </div>
            <div className={styles.para}>
              Fully private schools promise prestige, resources, and global
              networks but at a premium price and sometimes a more commercial
              tone. Semi-private schools balance affordability and international
              curricula, but may come with limited resources or local
              regulations. Not-for-profit schools offer mission-driven
              education, reinvesting in students rather than shareholders, but
              may be oversubscribed or less opulent.
            </div>
            <div className={styles.para}>
              Foundation-run schools bring values and sometimes affordability
              into the equation, but parents must be sure their mission aligns
              with their own values and expectations.
            </div>
          </div>

          <div
            className="flex flex-col lg:w-1/2 md:w-1/2 text-justify justify-between"
            style={{ gap: `${line_height}px` }}
          >
            <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
              <div className={styles.para}>
                Ultimately, the right choice depends on a family’s values,
                finances, mobility, and long-term educational plans. Some
                expatriates choose based on practical considerations like
                employer subsidies or waiting lists; others prioritize
                philosophical alignment or community feel.
              </div>
              <div className={styles.para}>
                There is no single “best” model for all expat families, but
                there is often a “best fit” for each unique situation. By
                understanding the distinctions among these types of schools,
                parents can navigate the international education landscape with
                clearer eyes—and provide their children with a learning
                environment that supports them not only academically, but
                emotionally and culturally, through the ever-changing journey of
                expatriate life.
              </div>
            </div>
            <div className="gap-[1rem] border-t-4 border-b-4 border-black-60 lg:mb-[0.4dvw] md:mb-[0.4dvw] h-[25dvh] flex-1">
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
                      // fontSize: "1.3rem",
                      fontWeight: "100",
                      fontFamily: "QuoteFont, sans-serif",
                      margin: "auto",
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                      lineHeight: `${line_height * 1.8}px`,
                      textTransform: "uppercase",
                    }}
                  >
                    For expatriate families, schooling is more than
                    academics—it’s the cornerstone of family life abroad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
