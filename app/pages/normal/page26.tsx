import { useIsMobile } from "@/hooks/use-mobile";
import styles from "@/styles/styles.module.css";
import { useEffect, useRef, useState } from "react";

export default function Page26() {
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
        <div className="h-full w-full lg:p-[1vw] md:p-[1vw] p-[5vw] dark:bg-gray-900 dark:text-white lg:overflow-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200">
            <div className="flex lg:flex-row md:flex-row flex-col lg:gap-[2vw] md:gap-[2vw] gap-[5vw] hyphens-auto lg:text-[0.9vw] md:text-[0.9vw]" style={{ height: "100%", lineHeight: `${line_height}px` }}>
                {/* Left Column */}
                <div className="flex lg:flex-row md:flex-row flex-col lg:w-1/2 md:w-1/2 lg:gap-[1vw] md:gap-[1vw] gap-[5vw]">
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col lg:gap-[1vw] md:gap-[1vw] gap-[5vw]" id="container">
                        <div className={styles.para}>
                            MBA, ranked in the world’s top 25 by the Wall Street Journal and available
                            on their satellite campus here. Hult International Business School has courses including a one-year MBA and an EMBA; affiliated with EF Education First,
                            it offers rotation between Shanghai, London, Dubai, Boston and
                        </div>
                        <div className="max-w-md mx-auto bg-gray-100 border border-gray-300 shadow-md">
                            <div className="bg-black text-white text-center font-bold py-2">
                                THE ROAD HOME
                            </div>
                            <div className="lg:p-[1dvw] md:p-[1.5dvw] bg-gray-700 text-white space-y-4">
                                <p>
                                    Hundreds of thousands of Chinese students have gone abroad to study
                                    at Western universities since China reopened for business. Now the
                                    flow is starting to reverse, in part due to China's emergence as a
                                    global economic powerhouse and the important role it is set to play
                                    in international affairs in coming years.
                                </p>
                                <p>
                                    The Chinese government has invested heavily in its universities and
                                    encourages foreign students to enroll. In 2010 there were 265,000
                                    foreign students enrolled in Chinese universities, and the government
                                    hopes that figure will reach 500,000 by 2020. Foreign students enroll
                                    independently as local residents, as exchange students from
                                    universities abroad or as travelers or residents taking a few
                                    language or professional growth classes.
                                </p>
                            </div>
                        </div>
                        <div className={styles.para}>
                            San Francisco. CEIBS (China Europe International Business School) is a joint
                            venture of the European 
                        </div>
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 text-justify  flex flex-col" style={{ gap: `${line_height}px` }}>
                        <div className={styles.para}>
                            Commission, Jiaotong University and the Chinese Ministry of Foreign Trade; despite being less than twenty years old,
                            its MBA is ranked 24th in the world by the Financial Times. Its EMBA program (11th) is the largest in the world, with 700 students
                            over three cities. Its Pudong campus was designed by architect I.M. Pei.
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-[1rem] lg:w-1/2">
                    <div className="flex lg:flex-row flex-1 flex-col gap-[1rem]">
                    </div>
                    <div className="bg-black ">
                    </div>
                </div>
            </div>
        </div>
    )
}

