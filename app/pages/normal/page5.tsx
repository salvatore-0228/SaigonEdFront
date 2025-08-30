import YoutubeEmbed from "@/components/YoutubeEmbed";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";

export default function Page5() {
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
        <div className="dark:bg-gray-900 dark:text-white bg-gray-100 h-full flex lg:flex-row md:flex-row flex-col lg:p-[1vw] md:p-[1vw] p-[5vw] lg:gap-[2vw] gap-[1rem] lg:text-[0.9vw] md:text-[0.9vw] lg:overflow-hidden overflow-auto">
            <div className="flex flex-col lg:w-1/2 lg:gap-[1vw] md:w-1/2 md:gap-[1vw]" id="container" style={{ lineHeight: `${line_height}px` }}>
                <div className="flex-1"></div>
                <div>
                    <h1 className="lg:text-[4dvw] md:text-[4dvw] text-[10dvw] font-bold leading-none mb-8 before:content-[''] before:block before:h-2 before:w-full before:bg-black
              after:content-[''] after:block after:h-px after:w-full after:bg-black">EDUCATION</h1>
                    <div>
                        <span className="lg:text-[3dvw] md:text-[3dvw] text-[3rem] font-bold float-left leading-none">A</span>
                        <p className="text-justify lg:text-[1.1dvw] md:text-[1.1dvw] text-[1rem]" style={{lineHeight: `${line_height * 1.2}px`}}>
                            s a soon-to-be expat, one of the most important and difficult decisions you will make is where your child will go to school.
                            While there will be a host of concerns and questions that arise during your search for a school for your child in Saigon, generally speaking,
                            international assignees have three main concerns: the safety of their children; the happiness of their children; and the quality of their
                            children’s education.
                        </p>
                    </div>
                </div>
                <div className="flex lg:flex-row md:flex-row flex-col gap-[0.8dvw]">
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col" style={{ gap: `${line_height}px` }}>
                        <div>
                            <h3 className="font-bold text-[120%]">SAFE</h3>
                            <p className="text-justify">
                                International schools operating in Saigon can be considered very safe by almost any assessment. These schools invariably employ
                                high-quality accredited staff from the Americas, Europe and the UK (among many other countries) and have excellent and secure facilities
                                and highly qualified Western management. The vast majority of expats arriving in Saigon report that the international schools are actually
                                safer than those they are used to in their home countries.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-[120%]">HAPPY</h3>
                            <p className="text-justify">
                                Concerns about your child’s happiness are certainly warranted when moving to a foreign country, as the adjustment to a new school is often
                                stressful and
                            </p>

                        </div>
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 gap-[1rem]">
                        <p className="text-justify">
                            challenging, especially when combined with a move abroad. It should be comforting to know that international schools are uniquely
                            skilled in helping newly arrived children adapt to their new environment – because that is what they do. As a result, children often experience
                            less culture shock than their parents in many cases as school programs are specifically designed to meet the challenges of moving to an
                            international environment. In the sections that follow our education guide will provide you with the tools you need to make the right choice for
                            your child’s education, to ensure that they are the beneficiaries of the type of education you want for them, in an environment offering them the
                            best opportunity to be happy and successful in their new school.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:w-1/2 md:w-1/2 gap-[1rem] justify-between">
                <div className="flex lg:flex-row md:flex-row flex-col gap-[2rem] lg:h-[calc(100% - 50dvw * 9/16)]" style={{ height: "calc(100% - 50dvw * 9/16)" }}>
                    <div className="lg:w-1/2 gap-[1rem] border-t-4 border-b-4 border-black-60">
                        <div style={{ alignItems: "center", display: "flex", justifyContent: "center", height: "100%" }}>
                            <div className={`flex-1 relative text-center`} style={{ position: "relative", fontFamily: "auto" }}>
                                <p
                                    className="dark:text-white-600 text-black-600 opacity-20 text-[450px]"
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
                                    className="lg:text-[1.3dvw] text-[1.3rem] p-[1rem]"
                                    style={{
                                        fontSize: "120%",
                                        fontWeight: "100",
                                        fontFamily: "QuoteFont, sans-serif",
                                        margin: "auto",
                                        textAlign: "center",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: "100%"
                                    }}>
                                    THE STANDARD OF EDUCATION AT INTERNATIONAL SCHOOLS IN SAIGON VARIES FROM INSTITUTION TO INSTITUTION WITHIN A VERY NARROW BANDWIDTH AT THE TOP OF THE SCALE
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 flex flex-col" style={{ alignItems: "center", justifyContent: "center", height: "100%" }}>
                        <h2 className="font-bold lg:text-[120%] w-full" style={{ textAlign: "left" }}>WELL-EDUCATED</h2>
                        <p className="leading-relaxed text-justify lg:text-[1.6dvh]">
                            The standard of education at the majority of international schools in Saigon varies from institution to institution within a very narrow bandwidth
                            at the top of the scale. In other words, while there may be differences between schools, in terms of quality they are generally of excellent
                            quality and staffed with well-qualified western teachers and management. As such, you can rest assured that your child will receive a top-quality
                            international education during your time on assignment in Saigon.
                        </p>
                    </div>
                </div>
                <div className="" style={{ alignContent: "center" }}>
                    {/* <video className="aspect-[16/9]" src="/videos/Saigon Ed Guide landscape.mp4" style={{ height: "100%", margin: "auto" }} controls></video> */}
                    <YoutubeEmbed className="lg:-translate-y-[0.3dvw] md:-translate-y-[0.3dvw]" videoId="QPsgiyZh7D0" />
                </div>
            </div>

        </div>
    )
}
