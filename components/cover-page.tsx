"use client"

import { useEffect, useRef } from "react"
import { Power } from "lucide-react"

interface ShanghaiPageProps {
    onPowerButtonClick: () => void
}

export default function CoverPage({ onPowerButtonClick }: ShanghaiPageProps) {
    const videoRef = useRef<HTMLVideoElement>(null)

    return (
        <div className="relative item-center text-center">
            <div className="absolute z-[100] w-full w-full cursor-pointer" style={{height: "calc(1/3 * 100dvh)"}} onClick={onPowerButtonClick}>
                {/* <button onClick={onPowerButtonClick}>
                    <img src="/images/btn/power_btn.png" width="100dvw" height="100dvw" />
                </button> */}
            </div>

            {/* Main Content Area */}
            <div className="relative">
                {/* Background Image */}
                <section className="absolute w-full h-screen overflow-hidden">
                    <video
                        ref={videoRef}
                        className="absolute inset-0 h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        disablePictureInPicture
                        controlsList="nodownload nofullscreen noremoteplayback"
                    >
                        <source src="/videos/Saigon Education Guide Cover PC Power button.mp4" media="(min-width: 769px)" type="video/mp4" />
                        <source src="/videos/Saigon education guide with power button V3.mp4" media="(max-width: 768px)" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </section>
            </div>
        </div>
    )
}
