import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css"
import { useEffect, useRef, useState } from "react"

export default function Page20() {
    const [line_height, setLineHeight] = useState(1.4);
    const [height, setHeight] = useState(1000);
    const isMobile = useIsMobile()

    useEffect(() => {
        const handleResize = () => {
            setHeight(window.innerHeight);
        }

        handleResize(); // set on mount
        window.addEventListener("resize", handleResize);

        const height = document.getElementById("container")?.clientHeight || 0;
        console.log("Height:", height);
        setLineHeight(height / 30)
    }, []);

    useEffect(() => {
        const height = document.getElementById("container")?.clientHeight || 0;
        console.log("Height:", height, isMobile);
        if (isMobile) {
            setLineHeight(24)
        }
        else setLineHeight(height / 30)
    }, [height]);

    return (
        <div className="h-full w-full lg:p-[1vw] md:p-[1vw] p-[5vw] dark:bg-gray-900 dark:text-white lg:overflow-hidden overflow-auto h-full scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200">
            <div className="hyphens-auto flex lg:flex-row md:flex-row flex-col gap-[2vw] lg:text-[0.9dvw] md:text-[0.9dvw] text-[3.46vw]" style={{ lineHeight: `${line_height}px`, height: "100%" }}>
                {/* Left Column */}
                <div className="flex lg:flex-row md:flex-row flex-col flex-1 gap-[1vw]">
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col justify-between" id="container" style={{ gap: `${line_height}px` }}>
                        <div className="flex flex-col" style={{ gap: `${line_height}px` }}>
                            <div className={styles.para}>
                                encountered before. Don’t worry – whatever the format, a school report will always provide us with
                                useful information and therefore you should provide your new school with all the reports you have, not only the most recent ones. A range of reports over a number of
                                years allows a school to see the ways in which a pupil has developed and gives them some idea as to what might be to come.
                            </div>
                            <div className={styles.para}>
                                Your previous schools may also have provided you with other documentation, and it’s useful for us to see that too. These documents might include: standardized test scores;
                                CAT scores (cognitive ability test); educational psychologist
                                reports; speech or occupational therapy reports; reading age scores. These and similar documents will always be useful,
                                as they help us to make sure we are setting the right targets for new pupils and challenging them appropriately right from the beginning.
                            </div>
                        </div>
                        <div className="" style={{ alignContent: "center" }}>
                            {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                            <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="5A1bCmyT8Dk" />
                        </div>

                    </div>

                    <div className="lg:w-1/2 md:w-1/2 flex flex-col gap-[1dvw]" style={{ lineHeight: `${line_height}px`, gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            However, other seemingly less significant material is also of use to us. Small academic prizes might not in themselves demonstrate the direction of a pupil’s future career,
                            but they nevertheless help a new school build up a more complete picture of that pupil as quickly as possible.
                        </div>
                        <div className={styles.para}>
                            Therefore, don’t underestimate the value of that memorizing times tables – they all help us to understand your child’s Year 3 award for spelling,
                            or that teacher’s commendation for a project, or that prize for overall approach to school, the pride they take in
                            their work and their ability to do well under pressure or under test conditions. Knowing this information
                            can sometimes save us a lot of time in getting to know just where your child’s particular strengths are.
                        </div>
                        <div>
                            <div className={styles.sub_heading} style={{ fontStyle: "italic" }}>
                                Community involvement
                            </div>
                            <div className={styles.para} style={{ textAlignLast: "justify" }}>
                                All schools, and international schools in particular, place a good deal of emphasis on helping pupils to understand the importance of engaging with the community,
                                learning about social responsibility and tackling difficult questions about how the wider world works. Therefore, it is extremely helpful to know the level to
                                which pupils have previously been engaged in addressing these and other related issues.
                                For older students, we value very highly pupils who have taken part in the International Award (called the Duke of Edinburgh Award in the UK),
                                as it means that they are already well on the way to having an understanding of
                            </div>
                        </div>
                    </div>

                </div>
                {/* Right Column */}
                <div className="flex lg:flex-row md:flex-row flex-col flex-1 lg:w-1/2 md:w-1/2 lg:gap-[1dvw] md:gap-[1dvw] text-justify" style={{ lineHeight: `${line_height}px` }}>
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            the importance of civic responsibility. Likewise, pupils who have previously been involved in Model United Nations will possess a
                            degree of political and social understanding that sets them apart from their peers. This is information that your new school will definitely want to
                            know about and will be useful in establishing the right expectations from the outset.
                        </div>
                        <div className={styles.para}>
                            In the case of younger pupils, involvement in organizations such as Boy Scouts or Cubs, Girl Guides
                            or Brownies, army, navy or air force cadets,
                            European Youth Forum, Rotary International, Junior Chamber International, Raleigh International or any similar organization is also valued highly.
                            If your child has been involved in a group or organization of this nature, your new school will undoubtedly want to hear about it.
                        </div>
                        <div className={styles.para}>
                            It is also useful if your child can speak enthusiastically about their involvement and what they think they learned from the experience.
                            However, it isn’t always necessary to have a certificate or badge to demonstrate the level of engagement. If your child has been involved
                            in any sort of charity or community project, whether at their previous school or through an outside agency, encourage them to talk about
                            it and describe the sort of work they did and what they felt the benefits were – this is the sort of conversation that principals
                            love to have with prospective pupils and families, and that will really help your new school
                            welcome you into its community.
                        </div>
                    </div>

                    <div className="flex flex-col lg:w-1/2 md:w-1/2 text-justify justify-between" style={{ gap: `${line_height}px` }}>
                        <div className="gap-[1vw] border-t-4 border-b-4 border-black-60 lg:mt-[0.3dvw] md:mt-[0.3dvw] flex-1">
                            <div style={{ alignItems: "center", display: "flex", justifyContent: "center", height: "100%" }}>
                                <div className={`flex-1 relative text-center`} style={{ position: "relative", fontFamily: "auto" }}>
                                    <p
                                        className="dark:text-white-600 text-black-600 opacity-20 lg:text-[450px] md:text-[400px] text-[70dvw]"
                                        style={{
                                            position: "absolute",
                                            top: "60%",
                                            left: "50%",
                                            transform: "translate(-50%, -35%)",  // centers the element exactly in the middle
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
                                        className="lg:text-[1.4dvw] md:text-[1.4dvw] text-[1.3rem] lg:p-[1dvw] md:p-[1dvw] p-[1rem]"
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
                                            lineHeight: `${line_height * 1.3}px`
                                        }}>
                                        THE MOST INPORTANT THING WHEN YOUR CHILD MEETS PEOPLE AT THEIR NEW SCHOOL IS THAT THEY KNOW HOW TO TALK ABOUT WHAT INTERESTS THEM.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.sub_heading} style={{ fontStyle: 'italic' }}>Sports</div>
                            <div className={styles.para}>
                                A lot of the school sport in Shanghai international schools is of an extremely high standard and very competitive, and so principals are
                                always keen to hear about new pupils’ sporting skills and exploits.
                                Therefore, this is an area where it’s useful to provide as much documentation and physical evidence as you can.
                            </div>
                        </div>
                        <div style={{ alignContent: "center" }}>
                            {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto" }} controls></video> */}
                            <YoutubeEmbed className="lg:-translate-y-[0.35dvw] md:-translate-y-[0.35dvw]" videoId="H6PiV34mW5E" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function WidthResponsiveText({
    baseFontSize,
    baseWordSpacing,
    baseLetterSpacing,
    baseLineHeight,
    width,
    children
}: {
    baseFontSize: number
    baseWordSpacing: number
    baseLetterSpacing: number
    baseLineHeight: number,
    width: number,
    children?: React.ReactNode
}) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [containerWidth, setContainerWidth] = useState(420)
    const referenceWidth = width // Reference width where text looks perfect

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                setContainerWidth(entry.contentRect.width)
            }
        })

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current)
        }

        return () => resizeObserver.disconnect()
    }, [])

    // Calculate scale factor based on width change
    const scale = containerWidth / width

    console.log(scale)


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
    )
}