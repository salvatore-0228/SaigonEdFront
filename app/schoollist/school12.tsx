
"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

import styles from "./master-education-page.module.css"

import {
    Info, DollarSign, Film, FileText, Landmark, Calendar,
    Facebook, Building2, Twitter, Linkedin, Youtube, Instagram, Star, Mail, Globe,
    Flag, Languages, Pencil, GraduationCap, Heart, Clock, Trophy,
    Phone,
    Bed
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

export default function School12() {
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
                                    <div className="w-[5dvw] rounded">
                                        <a href="#">
                                            <img src="/images/school logos/ISHCMCAA-logo-2024_Vertical_v2-01-1-820x820.png" alt="no image" />
                                        </a>
                                    </div>
                                    <h1 className="text-l font-semibold">
                                        International School Ho Chi Minh City - American Academy
                                    </h1>
                                </div>

                                <div style={{ marginBottom: "1rem", overflow: "auto", height: "20dvh" }} className="text-sm">
                                    <div style={{ fontWeight: "bold", marginBottom: "1rem" }}>Introduction</div>
                                    <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                                        The International School Ho Chi Minh City (ISHCMC) – American Academy in Vietnam is a world-class middle and high school 
                                        inspiring and challenging students aged 11 to 18 years old to achieve personal excellence.
                                    </p>
                                    <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                                        The school lays the foundations for success with 100% English language immersion and a rigorous American accredited 
                                        curriculum. At the same time, it offers an extensive Vietnamese Studies Program to ensure our students maintain their Mother 
                                        Tongue and cultural roots.
                                    </p>
                                </div>

                                <div className="flex flex-row gap-1 text-2xl mb-3" style={{ borderBottom: "1px solid gray", paddingTop: "1rem", paddingBottom: "1rem" }}>
                                    <Link href="https://www.aavn.edu.vn/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/globe_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.youtube.com/c/ishcmcamericanacademy" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/youtube_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.facebook.com/ishcmc.aa" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/facebook_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.linkedin.com/company/international-school-of-ho-chi-minh-city-american-academy/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/linkedin_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.instagram.com/aavnsunbears/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/instagram_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                </div>

                                {/* Info Grid */}
                                <div className="grid grid-cols-1 gap-x-10 text-sm">
                                    <InfoRow label="Curriculum" value="American" isLink />
                                    <InfoRow label="Leaving qualifications" value="AP" isLink />
                                    <InfoRow label="Age range" value="range: (11 to 18)" />
                                    <InfoRow label="Tuition" value="597,300,000 ₫ to 746,600,000 ₫" />
                                    <InfoRow label="Address" value="16 Võ Trường Toản, An Phú, Quận 2, Hồ Chí Minh, Vietnam" />
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
                            // src="https://www.youtube.com/embed/EpGvFiKIHSc"
                            title="Vercel Ship Keynote: Introducing the frontend cloud"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            style={{ width: "100%", margin: "auto", aspectRatio: "16/9", backgroundColor: "gray" }}
                        // allowFullScreen
                        ></iframe>
                    </div>
                    <div className="flex-1 flex lg:flex-row flex-col lg:gap-[1dvw] gap-[1rem]">
                        <div className="w-full lg:w-1/2 overflow-hidden" id="slideheight">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5030405226845!2d106.745285!3d10.805763199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175266b292df351%3A0xabf9fecb983023d0!2sInternational%20School%20HCMC%20-%20American%20Academy!5e0!3m2!1sen!2s!4v1722600000000!5m2!1sen!2s"
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
        icon: <Info size={20} />,
        content: [
            {
                subheading: "Qualities and characteristics best defining the school",
                data: "The International School Ho Chi Minh City (ISHCMC) – American Academy in Vietnam is a world-class middle and high school inspiring and challenging students aged 11 to 18 years old to achieve personal excellence. The school lays the foundations for success with 100% English language immersion and a rigorous American accredited curriculum. At the same time, it offers an extensive Vietnamese Studies Program to ensure our students maintain their Mother Tongue and cultural roots.",
                type: undefined
            },
            {
                subheading: "Teaching approach of the school",
                data: [
                    "The philosophies and guiding statements of ISHCMC – American Academy have been devised to lead in fulfilling its vision of being one of the most academically successful American international schools in Asia. As a school community ISHCMC will provide a positive, caring and engaging learning community that:",
                    "Delivers a high quality American style educat",
                    "Inspires a lifelong passion for learn",
                    "Enables graduates to gain entrance to quality US and international institutions of higher learn",
                    "Promotes international and intercultural respect and collaborat",
                    "Empowers all to be the best they can",
                ],
                type: "list"
            },
        ]
    },
    {
        label: "Nationalities",
        icon: <Flag size={20} />,
        content: [
            { subheading: "Number of students", data: "435", type: undefined },
            { subheading: "Number of nationalities represented in the school", data: "12", type: undefined },
            { subheading: "Most common nationality", data: "Vietnamese", type: undefined },
        ]
    },
    {
        label: "Languages",
        icon: <Languages size={20} />,
        content: [
            { subheading: "Native English speaking teachers", data: "Yes", type: undefined },
            { subheading: "Language support for students not fluent in English", data: "English as an Additional Language", type: undefined },
            { subheading: "Additional language classes offered by the school", data: "Mandarin, Vietnamese", type: undefined },
        ]
    },
    {
        label: "Classroom",
        icon: <Pencil size={20} />,
        content: [
            { subheading: "Average number of students per class", data: "16", type: undefined },
            { subheading: "Does the school employ teaching assistants?", data: "Yes", type: undefined },
            {
                subheading: "Use of technology in the classroom",
                data: "ISHCMC is a Bring Your Own Device (BYOD) 21st Century school. Students are required to bring a MAC or PC laptop.",
                type: undefined
            },
            {
                subheading: "Is the school ready to use virtual classrooms when needed?",
                data: "Yes",
                type: undefined
            },
            {
                subheading: "Do students practice religion at the school? What religion?",
                data: "No",
                type: undefined
            },
            {
                subheading: "How does the school accommodate non-religious students or students of a different religion?",
                data: "No Problem",
                type: undefined
            },
        ]
    },
    {
        label: "Academics",
        icon: <GraduationCap size={20} />,
        content: [
            { subheading: "External examinations or assessments available", data: "MAP, Advanced Placement", type: undefined },
            { subheading: "Results in these examinations", data: "Much better than what an average student scores.", type: undefined },
            { subheading: "Do teachers assign homework to their students?", data: "Yes", type: undefined },
            { subheading: "Percentage of students who pursue further education post-graduation", data: "95%", type: undefined },
        ]
    },
    {
        label: "Student support",
        icon: <Heart size={20} />,
        content: [
            {
                subheading: "Dedicated staff/programs for students with special learning needs",
                data: "Yes",
                type: undefined
            },
            {
                subheading: "The school supports gifted, able and talented students",
                data: "Yes",
                type: undefined
            },
            {
                subheading: "Student access to education psychologist",
                data: "Yes",
                type: undefined
            },
        ]
    },
    {
        label: "Admissions",
        icon: <FileText size={20} />,
        content: [
            {
                subheading: "Entry evaluation for students",
                data: "Assessment and informal interview.",
                type: undefined
            },
            {
                subheading: "Waiting list",
                data: "Yes",
                type: undefined
            },
            {
                subheading: "Deadline for registration (new academic year)",
                data: "No deadline.",
                type: undefined
            },
            {
                subheading: "Students can join after academic year begins",
                data: "Yes",
                type: undefined
            },
        ]
    },
    {
        label: "School day",
        icon: <Clock size={20} />,
        content: [
            { subheading: "School start time", data: "7:45", type: undefined },
            { subheading: "School finish time", data: "3:45", type: undefined },
            { subheading: "Supervised care before/after school", data: "Yes", type: undefined },
            { subheading: "School bus service available", data: "Yes", type: undefined },
            { subheading: "School provided lunches", data: "Yes", type: undefined },
            {
                subheading: "Food alternatives for special dietary needs",
                data: "Yes",
                type: undefined
            },
            { subheading: "Uniform required", data: "Yes", type: undefined },
        ]
    },
    {
        label: "Extracurricular activities",
        icon: <Trophy size={20} />,
        content: [
            {
                subheading: "Extracurricular activities or clubs offered",
                data: "ISHCMC's After School Activities Program offers over 20 interest groups including Debate Club, World Scholar’s Cup, Music Studio, Glee Club, and the Global Issues Network.",
                type: undefined
            },
            {
                subheading: "Sports activities included",
                data: "Physical education",
                type: undefined
            },
            {
                subheading: "Sports teams or sport competitions available for students",
                data: "Yes",
                type: undefined
            },
        ]
    },
    {
        label: "Facilities",
        icon: <Building2 size={20} />,
        content: [
            {
                subheading: "Sports facilities at the school",
                data: "Purpose designed covered sports hard court arena, including basketball, volleyball and badminton.",
                type: undefined
            },
        ]
    },
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