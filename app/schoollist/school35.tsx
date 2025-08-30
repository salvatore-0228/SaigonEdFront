
"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

import styles from "./master-education-page.module.css"

import {
    Info, DollarSign, Film, FileText, Landmark, Calendar,
    Facebook, Building2, Twitter, Linkedin, Youtube, Instagram, Star, Mail, Globe,
    Flag, Languages, Pencil, GraduationCap, Heart, Clock, Trophy,
    Phone,
    Bed,
    Building,
    Home,
    ClipboardCheck,
    HeartPulse,
    BookOpen,
    School,
    Users,
    HeartHandshake
} from 'lucide-react';
import Link from "next/link"
import CustomSlideshow from "@/components/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

interface AsianEscapesPageProps {
    onBackClick?: () => void
    onNextClick?: () => void
}

const fantasySlides = [
    {
        // id: 1,
        alt: "Mystic Mountains",
        src: "/images/1.jpg",
    },
    {
        alt: "Mystic Mountains",
        src: "/images/2.jpg",
    },
]

function InfoRow({ label, value, isLink = false, isRange = false }: { label: string; value: string; isLink?: boolean; isRange?: boolean }) {
    return (
        <div className="flex flex-row items-start px-[10px]" style={{ borderBottom: "1px solid gray", paddingTop: "1rem", paddingBottom: "1rem", position: "relative" }}>
            <span className="font-semibold w-[50%]" style={{ justifyContent: "center" }}>{label}:</span>
            <div style={{ width: "50%", textAlign: "right" }}>
                {isLink ? (
                    <p className="text-blue-600 underline" style={{ textAlign: "right" }}>{value}</p>
                ) : isRange ? (
                    <span>
                        <span className="text-blue-600">from: </span>元170,500<br />
                        <span className="text-blue-600">to: </span>元275,600
                    </span>
                ) : (
                    <span>{value}</span>
                )}
            </div>
        </div>
    );
}

export default function School35() {
    const [line_height, setLineHeight] = useState(1.4);
    const [height, setHeight] = useState(1000);
    const isMobile = useIsMobile()

    useEffect(() => {
        const height = document.getElementById("slideheight")?.clientWidth || 0;
        setHeight(height)
    }, []);

    return (
        <div className="h-full w-full px-4 sm:px-6 py-4 sm:py-6 overflow-y-scroll h-full scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200 dark:bg-gray-900 dark:text-white">
            <div className="flex lg:flex-row flex-col gap-[2rem] h-full">
                <div className="flex lg:flex-row flex-col flex-1 columns-2 gap-[1rem] dark:bg-gray-900 dark:text-white" style={{ color: "black" }}>
                    <div className="flex-1">
                        <div className="max-w-4xl mx-auto ">
                            <div className="rounded-lg border-white-100 shadow-md p-6 dark:bg-gray-900 dark:text-white dark:border-white dark:border">
                                {/* Header */}
                                <div className="flex items-center space-x-4 mb-3">
                                    <div className="w-[3dvw] rounded">
                                        <a href="#">
                                            <img src="/images/school logos/École Boule et Billes logo.png" alt="no image" />
                                        </a>
                                    </div>
                                    <h1 className="text-l font-semibold">
                                        École Boule et Billes
                                    </h1>
                                </div>

                                <div style={{ marginBottom: "1rem", overflow: "auto", height: "20dvh" }} className="text-sm">
                                    <div style={{ fontWeight: "bold", marginBottom: "1rem" }}>Introduction</div>
                                    <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                                        Boule & Billes is a partner school of the AEFE network, following the French National Education curriculum. As a human-sized 
                                        institution, we offer instruction in French, delivered by qualified native teachers. From CP to CM2, students can also 
                                        benefit from a British international section. We place each child’s well-being at the heart of our caring pedagogy, with a 
                                        clear ambition: to support them on the path to success.
                                    </p>
                                </div>

                                <div className="flex flex-row gap-1 text-2xl mb-3" style={{ borderBottom: "1px solid gray", paddingTop: "1rem", paddingBottom: "1rem" }}>
                                    <Link href="https://bouleetbilles.net/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/globe_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    {/* <Link href="https://www.youtube.com/channel/UCk6rNOkCozwQc9EC9ccff6g" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/youtube_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link> */}
                                    <Link href="https://www.facebook.com/ecolebouleetbilles" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/facebook_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    {/* <Link href="https://www.linkedin.com/company/horizon-international-bilingual-school" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/linkedin_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link> */}
                                    <Link href="https://www.instagram.com/ecole_boule_et_billes_/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/instagram_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                </div>

                                {/* Info Grid */}
                                <div className="grid grid-cols-1 gap-x-10 text-sm">
                                    <InfoRow label="Curriculum" value="French" isLink />
                                    <InfoRow label="Leaving qualifications" value="N/A" isLink />
                                    <InfoRow label="Age range" value="range: (2 to 11)" />
                                    <InfoRow label="Tuition" value="139,500,000 ₫ to 179,500,000 ₫" />
                                    <InfoRow label="Address" value="Thao Dien: Ages 2 to 11 Address: 42 Nguyen Dang Giai, Thao Dien, Vietnam" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col">
                        <div style={{ flex: "1" }}>
                            <AccordionTable />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col flex-1 gap-[1rem]" id="container">
                    <div className="">
                        {/* <video src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto", aspectRatio: "16/9" }} controls></video> */}
                        <iframe
                            // src="https://www.youtube.com/embed/91T3IYEEhm0"
                            title="Vercel Ship Keynote: Introducing the frontend cloud"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            style={{ width: "100%", margin: "auto", aspectRatio: "16/9", backgroundColor: "gray" }}
                        // allowFullScreen
                        ></iframe>
                    </div>
                    <div className="flex-1 flex lg:flex-row flex-col lg:gap-[1dvw] gap-[1rem]">
                        <div className="w-full lg:w-1/2 overflow-hidden" id="slideheight">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.965888755285!2d106.7351535!3d10.8022453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317526146ea615e7%3A0x946ccc0e61a0a33e!2sEcole%20Boule%20et%20Billes%20Thao%20Dien%20(Boule%20%26%20Billes%20French%20School)!5e0!3m2!1sen!2s!4v1691345800000!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        <div className="lg:w-1/2 h-full">
                            <CustomSlideshow images={fantasySlides} height={height} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const accordionData = [
  {
    label: "Introduction",
    icon: <Home size={20} />,
    content: [
      {
        type: "paragraph",
        data: `Boule & Billes is a partner school of the AEFE network, following the French National Education curriculum. As a human-sized institution, instruction is delivered in French by qualified native teachers. From CP to CM2, students can also join a British international section. The school prioritizes each child's well-being within a caring pedagogy, aiming to support them on their path to success.`
      }
    ]
  },
  {
    label: "Nationalities",
    icon: <Users size={20} />,
    content: [
      { subheading: "Number of students", data: "220" },
      { subheading: "Number of nationalities represented", data: "8" },
      { subheading: "Most common nationality", data: "French" }
    ]
  },
  {
    label: "Languages",
    icon: <Languages size={20} />,
    content: [
      { subheading: "Native French speaking teachers", data: "Yes" },
      { subheading: "Language support for students not fluent in French", data: "French as a Foreign Language (FLE) courses offered" },
      { subheading: "Additional language classes", data: "English, Vietnamese" }
    ]
  },
  {
    label: "Classroom",
    icon: <BookOpen size={20} />,
    content: [
      { subheading: "Max. number of students per class", data: "23" },
      { subheading: "Average number of students per class", data: "Between 14 and 20" },
      { subheading: "Teaching assistants", data: "Each kindergarten class has an assistant" },
      { subheading: "Religious practice", data: "No" }
    ]
  },
  {
    label: "Academics",
    icon: <GraduationCap size={20} />,
    content: [
      { subheading: "Homework assigned", data: "Yes" },
      { subheading: "Approximate homework time", data: "20 minutes" }
    ]
  },
  {
    label: "Student Support",
    icon: <HeartPulse size={20} />,
    content: [
      { subheading: "Support for special learning needs", data: "All teachers are qualified and certified to handle any situation" },
      { subheading: "Access to educational psychologist", data: "Yes" }
    ]
  },
  {
    label: "Admissions",
    icon: <FileText size={20} />,
    content: [
      { subheading: "Registration deadline (new academic year)", data: "30/06" }
    ]
  },
  {
    label: "School Day",
    icon: <Clock size={20} />,
    content: [
      { subheading: "Start time", data: "08:30" },
      { subheading: "Finish time", data: "15:00" },
      { subheading: "Before/after school care", data: "Extracurricular activities available daily until 16:20" },
      { subheading: "School bus service", data: "Yes, home pick-up and shuttle services available" },
      { subheading: "Lunch provided", data: "Yes, fresh homemade meals prepared daily by a chef" },
      { subheading: "Food alternatives for special diets", data: "Yes" },
      { subheading: "Uniform required", data: "No, except during school outings" }
    ]
  },
  {
    label: "Extracurricular Activities",
    icon: <Trophy size={20} />,
    content: [
      {
        type: "list",
        subheading: "Activities offered",
        data: [
          "Vovinam",
          "Pottery",
          "Hip Hop",
          "Tree climbing",
          "Theater",
          "And more than 30 activities in total"
        ]
      }
    ]
  },
  {
    label: "Facilities",
    icon: <Building2 size={20} />,
    content: [
      { subheading: "Facilities", data: "Library" },
      { subheading: "Sports facilities", data: "Rope course, motor skills room" }
    ]
  }
];




function AccordionTable() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="rounded-lg shadow-md p-4 dark:border-white dark:border dark:text-white">
            {accordionData.map((item, idx) => (
                <div key={item.label} className="border-b last:border-b-0">
                    <button
                        className="w-full flex items-center gap-3 py-3 px-2 dark:hover:text-black hover:bg-gray-50 transition-colors"
                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        aria-expanded={openIndex === idx}
                    >
                        {item.icon}
                        <span className="flex-1 text-left font-medium">{item.label}</span>
                        <span className="ml-auto">{openIndex === idx ? "▲" : "▼"}</span>
                    </button>
                    {openIndex === idx && (
                        <div className="pb-3 text-gray-700 text-sm">
                            <Content index={idx} />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

function Content({ index }: { index: number }) {
    return (
        <div className="bg-gray-50 rounded p-4 space-y-4">
            {
                accordionData[index].content.map((item: any, idx) => {
                    if (item['type'] === "list") {
                        return <div key={"" + index + "_" + idx}>
                            <div className="font-semibold text-black-700 mb-1">{item.subheading}</div>
                            <div className="text-black-800">
                                <p className="mb-[0.5rem]">
                                    {item.data[0]}
                                </p>
                                <ul style={{ listStyleType: "disc", paddingLeft: "1rem" }}>
                                    {item.data.map((ele: any, iidx: any) => {
                                        if (iidx) return <li key={"" + index + "_" + idx + "_" + iidx + ele}>
                                            {ele}
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    }
                    else return <div key={"" + index + "_" + idx}>
                        <div className="font-semibold text-black-700 mb-1">{item.subheading}</div>
                        <div className="text-black-800">{item.data}</div>
                    </div>
                })
            }
        </div>
    )
}