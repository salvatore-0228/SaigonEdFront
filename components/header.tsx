"use client"

import styles from "@/components/header.module.css"
import React from "react"
import { Info } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

interface HeaderProps {
  sectionTitle: React.ReactNode,
  pageNumber: number | undefined,
  subTitle: React.ReactNode,
  infoText: string | undefined
}

export default function Header({ sectionTitle, subTitle, infoText, pageNumber }: HeaderProps) {
  const isMobile = useIsMobile()

  return (
    <div style={{ display: "flex", height: "6dvh" }}>
      <div className="flex flex-row flex-1">
        <div style={{ fontSize: "2dvh", backgroundColor: "#ccc", width: "5dvh", color: "white", textAlign: "center", alignContent: "center" }}>
          {pageNumber ? pageNumber * 2 - 1 : ""}
        </div>
        <div style={{ flex: "1", color: "white", paddingLeft: "1rem", backgroundColor: "black", alignContent: "center" }}>
          <span className="lg:text-[2.5dvh] md:text-[2.5dvh] text-[2dvh]" style={{ fontWeight: "400", textDecoration: "underline", textTransform: "uppercase" }}>
            {sectionTitle}
          </span>
          <span style={{ paddingLeft: "10px", paddingRight: "10px", display: `${subTitle == "" ? "none" : ""}` }}>|</span>
          <span style={{ textTransform: "uppercase" }}>
            {subTitle}
          </span>
        </div>
      </div>
      <div className={styles.infoSection} style={{ alignContent: "center" }}>
        <div className={styles.infoButtonContainer}>
          <button className={styles.infoButton} style={{ width: "4dvh", height: "4dvh", margin: "auto" }} aria-label="Information">
            <img src="/images/btn/info_btn.png" />
            {/* <Info size={50} color="white" /> */}
          </button>
          <div className={styles.infoBoxContainer}>
            <div className={styles.infoBoxContent}>
              <div className={styles.infoIcon}>
                <Info color="black" size={20} />
              </div>
              <p className={styles.infoBoxText}>
                {infoText}
              </p>
              {/* <div className={styles.infoIcon}>
                  <Info color="black" size={20} />
                </div>
                <p className={styles.infoBoxText}>
                  Erring on the side of caution when discussing Chinese history with locals is advisable, as Western
                  interpretations of Chinese history are not always welcome.
                </p> */}
            </div>
          </div>
        </div>
      </div>
      {
        !isMobile ? <div className="flex flex-row flex-1">
          <div style={{ flex: "1", backgroundColor: "black", paddingRight: "1rem", color: "white", textAlign: "right", alignContent: "center" }}>
            <span style={{ textTransform: "uppercase" }}>
              {subTitle}
            </span>
            <span style={{ paddingLeft: "2dvh", paddingRight: "1dvh", display: `${subTitle == "" ? "none" : ""}` }}>|</span>
            <span style={{ fontSize: "2.5dvh", fontWeight: "400", textDecoration: "underline", textTransform: "uppercase" }}>
              {sectionTitle}
            </span>
          </div>
          <div style={{ fontSize: "2dvh", color: "white", backgroundColor: "#ccc", width: "5dvh", textAlign: "center", alignContent: "center" }}>
            {pageNumber ? pageNumber * 2 : ""}
          </div>
        </div> : <></>
      }
    </div>
  )
}
