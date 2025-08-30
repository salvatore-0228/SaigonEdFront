import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css";
import { useEffect, useRef, useState } from "react";

export default function Page4() {
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
        className="flex lg:flex-row md:flex-row flex-col h-screen lg:gap-[2vw] md:gap-[2vw] text-justify hyphens-auto mx-auto lg:text-[0.9vw] md:text-[0.9vw] text-[3.4dvw]"
        style={{ height: "100%", lineHeight: `${line_height}px` }}
      >
        {/* Left Column */}
        <div className="flex lg:flex-row md:flex-row flex-col lg:w-1/2 lg:gap-[1vw] md:w-1/2 md:gap-[1vw]">
          <div
            className="lg:w-1/2 md:w-1/2 flex flex-col"
            id="container"
            style={{ gap: `${line_height}px` }}
          >
            <div className={styles.para}>
              Popular schools like ISHCMC, SSIS, BIS, and AIS often fill waiting
              lists six to twelve months in advance. On the spot openings do
              occur, and most schools will accept applications year round, but
              priority is given to early applicants. Documentation required
              includes passport copies, valid visa or residency card,
              immunization records, prior academic transcripts, and sometimes
              additional certificates (e.g. English test scores).
            </div>
            <div className={styles.para}>
              Cost considerations are significant. Public schools cost
              negligible tuition but require Vietnamese fluency and accept few
              expat children.
            </div>
            <div className={styles.para}>
              Private bilingual schools may charge moderate fees—around
              USD 6,000 to USD 15,000 per year—while fully international schools
              typically range from USD 10,000 to USD 35,000 annually depending
              on grade level, curriculum type, and amenities. Additional
              expenses for international schools include bus transport, meals,
              uniforms, extracurricular clubs, and school trips. Many expat
              families negotiate tuition allowances into their contracts to
              offset these costs.
            </div>
            <div className={styles.para}>
              Several international schools also provide special education
              support. While public schools previously separated students with
              special needs, the system is shifting towards inclusion. A number
              of international schools—such as Steps Special School or Saigon
              Pearl International—offer integrated support for students
              requiring additional assistance, though availability varies
            </div>
          </div>
          <div
            className="lg:w-1/2 md:w-1/2 text-justify flex flex-col"
            style={{ gap: `${line_height}px` }}
          >
            <div className={styles.para}>
              and families should inquire early.
            </div>
            <div className={styles.para}>
              Navigating the Vietnamese education system as an expatriate family
              requires clarity about priorities:
            </div>
            <div className={styles.para}>
              linguistic immersion, academic rigor, social integration, global
              curriculum alignment, and budget. For families fluent in
              Vietnamese, planning a long term stay, and interested in cultural
              assimilation, local public or bilingual private schools offer cost
              effective paths with strong academic foundations. For those
              prioritizing English instruction, international qualifications,
              and multicultural environments, the accredited international
              schools deliver comprehensive programmes—but at a premium price.
            </div>
            <div className={styles.para}>
              Key steps for expat families include making school visits or
              virtual tours, understanding accreditation and quality assurance
              (IBO, CIS, WASC, Cambridge, COBIS, etc.), examining parent
              testimonials, reviewing curriculum structure, and preparing
              documentation and assessments well ahead. Many schools host open
              days, webinars, and school fairs specifically for expatriate
              families seeking to evaluate their options.
            </div>
            <div className={styles.para}>
              Social and cultural adjustment is equally significant. Children
              entering Vietnamese public classrooms may feel isolated if they
              lack language or cultural familiarity. International schools
              provide built in communities; students and parents often form
              strong networks through
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-[1vw] lg:pb-0 md:pb-0 pb-[1vw] lg:w-1/2 md:w-1/2">
          <div className="flex lg:flex-row md:flex-row lg:gap-[1dvw] md:gap-[1dvw] gap-[1rem] flex-col flex-1 flex-col">
            <div
              className="lg:w-1/2 md:w-1/2 flex flex-col"
              style={{ gap: `${line_height}px` }}
            >
              <div className={styles.para}>
                parent associations, buddy systems, and shared cultural events.
                Bilingual schools occupy a middle ground: offering local
                cultural integration while providing some international style
                supports.
              </div>
              <div className={styles.para}>
                From a pedagogical standpoint, public education emphasizes
                teacher led lectures, disciplined study, and exam performance.
                This contrasts sharply with the student centred, inquiry based,
                and project oriented approaches found in bilingual and
                international curricula. Some expats find public schools too
                academically rigid, while bilingual and international schools
                offer more well rounded development with emphasis on creativity,
                sports, arts, and critical thinking.
              </div>
              <div className={styles.para}>
                Public reform in Vietnam continues: teacher training, curriculum
                modernization, and pilot programmes introducing native English
                instructors are emerging. Still, widespread change is gradual.
                In contrast, international schools evolve quickly, adopting new
                teaching methods, investing in technology and infrastructure,
                and responding proactively to global education trends.
              </div>
              <div className={styles.para}>
                Ho Chi Minh City’s education system spans a broad spectrum. The
                public Vietnamese system, from kindergarten through Grade 12, is
                structured, low cost, and academically rigorous—but limited in
                language inclusiveness and flexibility for expat families.
                Private bilingual schools offer a hybrid experience with
                national curriculum plus English instruction, moderate cost, and
              </div>
            </div>
            <div
              className="lg:w-1/2 md:w-1/2 flex flex-col"
              style={{ gap: `${line_height}px` }}
            >
              <div className={styles.para}>
                growing popularity among expats and Vietnamese alike. Fully
                international schools provide globally accredited curricula,
                multicultural environments, comprehensive support, and modern
                facilities—making them the preferred choice for internationally
                mobile families, though at the highest price point.
              </div>
              <div className={styles.para}>
                For expatriate families navigating an educational decision in Ho
                Chi Minh City, planning early, clarifying priorities around
                language and academic credentials, visiting schools,
                understanding accreditation, compiling documentation, and
                starting applications 6 to 12 months in advance will maximize
                the chance of securing placement in a school aligned with the
                family’s needs.
              </div>
              <div className={`gap-[1rem] border-t-4 border-b-4 border-black-60 h-[25dvh] flex-1 lg:-translate-y-[0.3dvw]`}>
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
                      className="lg:text-[1.3dvw] md:text-[1.3dvw] text-[1.3rem] lg:p-[1dvw] md:p-[1dvw] p-1rem"
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
                      The public Vietnamese system, from kindergarten through
                      Grade 12, is structured, low cost, and academically
                      rigorous—but limited in language inclusiveness and
                      flexibility for expat families.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
