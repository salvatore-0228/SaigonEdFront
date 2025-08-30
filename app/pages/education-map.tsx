
"use client"

import styles from "./education-map.module.css"
import { useState, useRef, useEffect } from "react"

interface EducationMapPageProps {
    onBackClick?: () => void
    onNextClick?: () => void
}

export default function EducationMapPage() {
    const mapContainerRef = useRef<HTMLDivElement>(null)

    return (
        <div className="h-full w-full">
            <div className={`${styles.pageMainContainer} bg-blue-300 dark:bg-gray-700`} style={{ alignItems: "center" }}>
                {/* Main Content */}
                {/* Map Container */}
                <div className={styles.mapContainer} ref={mapContainerRef}>
                    {/* Interactive Map */}
                    <iframe
                        src="https://www.google.com/maps/d/u/1/embed?mid=1-lGnKAhP7wew5r-4W76gWPSOzZ9-VKI&ehbc=2E312F"
                        width="100%"
                        height="100%"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </div>
    )
}
