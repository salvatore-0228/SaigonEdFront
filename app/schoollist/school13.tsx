
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

export default function School13() {
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
                                            <img src="/images/school logos/Montessori International School of Vietnamlogo.png" alt="no image" />
                                        </a>
                                    </div>
                                    <h1 className="text-l font-semibold">
                                        Montessori International School of Vietnam
                                    </h1>
                                </div>

                                <div style={{ marginBottom: "1rem", overflow: "auto", height: "20dvh" }} className="text-sm">
                                    <div style={{ fontWeight: "bold", marginBottom: "1rem" }}>Introduction</div>
                                    <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                                        Montessori International School of Vietnam is the first and oldest Montessori school in Vietnam 
                                    </p>
                                </div>

                                <div className="flex flex-row gap-1 text-2xl mb-3" style={{ borderBottom: "1px solid gray", paddingTop: "1rem", paddingBottom: "1rem" }}>
                                    <Link href="https://montessori.edu.vn/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/globe_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    {/* <Link href="https://www.youtube.com/c/ishcmcamericanacademy" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/youtube_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link> */}
                                    <Link href="https://www.facebook.com/MontessoriInternationalSchoolofVietnam/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/facebook_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.linkedin.com/company/montessori-international-school-of-vietnam/about/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/linkedin_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    {/* <Link href="https://www.instagram.com/aavnsunbears/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/instagram_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link> */}
                                </div>

                                {/* Info Grid */}
                                <div className="grid grid-cols-1 gap-x-10 text-sm">
                                    <InfoRow label="Curriculum" value="Montessori" isLink />
                                    <InfoRow label="Leaving qualifications" value="N/A" isLink />
                                    <InfoRow label="Age range" value="range: (2 to 12)" />
                                    <InfoRow label="Address" value="Thao Dien Campus: Ages 2 to 12 Address: 42/1 Ngo Quang Huy, Thao Dien Ward, Distric 2, HCMC, Vietnam" />
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
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.545163582542!2d106.7326829!3d10.804152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752619ee3b8391%3A0x6cc8feb9f2008861!2sThe%20Montessori%20International%20School%20of%20Vietnam%20-%20Thao%20Dien%20Campus!5e0!3m2!1sen!2s!4v1722600000000!5m2!1sen!2s"
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
                data: "Montessori International School of Vietnam is the first and oldest Montessori school in Vietnam – founded 2007.",
                type: undefined
            },
            {
                subheading: "Teaching approach of the school",
                data: `The Montessori International School of Vietnam seeks to enable all its pupils to achieve their fullest potential by providing them with a nurturing and stimulating environment, and by being sensitive and responsive to their individual needs. The School strongly emphasizes the development of the child’s qualities and skills that will help them become happy, confident and responsible individuals with an intrinsic motivation for life-long learning.`,
                type: undefined
            },
        ]
    },
    {
        label: "Nationalities",
        icon: <Flag size={20} />,
        content: [
            { subheading: "Number of students", data: "100", type: undefined },
            { subheading: "Number of nationalities represented in the school", data: "20", type: undefined },
            { subheading: "Most common nationality", data: "There is no most popular nationality; students are from diverse backgrounds.", type: undefined },
            { subheading: "Ratio of local students to international students", data: "Most of them are foreigners.", type: undefined },
        ]
    },
    {
        label: "Languages",
        icon: <Languages size={20} />,
        content: [
            { subheading: "Native English speaking teachers", data: "Yes", type: undefined },
            { subheading: "Language support for students not fluent in English", data: "English Language Support", type: undefined },
            { subheading: "Additional language classes offered by the school", data: "French, Vietnamese, Mandarin, Spanish", type: undefined },
        ]
    },
    {
        label: "Classroom",
        icon: <Pencil size={20} />,
        content: [
            { subheading: "Max. number of students per class", data: "25", type: undefined },
            { subheading: "Average number of students per class", data: "15", type: undefined },
            { subheading: "Does the school employ teaching assistants?", data: "Yes", type: undefined },
            {
                subheading: "Use of technology in the classroom",
                data: "No devices allowed in the class for under 6 years old. Elementary students (ages 6–12) have IT class twice per week.",
                type: undefined
            },
            {
                subheading: "Is the school ready to use virtual classrooms when needed?",
                data: "Yes, we used it during COVID.",
                type: undefined
            },
            {
                subheading: "Do students practice religion at the school? What religion?",
                data: "No",
                type: undefined
            },
        ]
    },
    {
        label: "Academics",
        icon: <GraduationCap size={20} />,
        content: [
            { subheading: "External examinations or assessments available", data: "No exams or assessments required", type: undefined },
            {
                subheading: "Do teachers assign homework to their students?",
                data: "No, but if the parents request homework, teachers can assign it.",
                type: undefined
            },
            {
                subheading: "Percentage of students who pursue further education post-graduation",
                data: "99%",
                type: undefined
            },
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
                subheading: "Learning support offered",
                data: "MIS offers one-on-one sessions, develops individualized education plans (IEPs), and welcomes outside specialists or therapists to support children.",
                type: undefined
            },
        ]
    },
    {
        label: "Admissions",
        icon: <FileText size={20} />,
        content: [
            { subheading: "Entry evaluation for students", data: "No", type: undefined },
            { subheading: "Waiting list", data: "No", type: undefined },
            { subheading: "Deadline for registration (new academic year)", data: "No deadline", type: undefined },
            { subheading: "Students can join after academic year begins", data: "Yes", type: undefined },
        ]
    },
    {
        label: "School day",
        icon: <Clock size={20} />,
        content: [
            { subheading: "School start time", data: "8:00", type: undefined },
            {
                subheading: "School finish time",
                data: `Thao Dien Campus: 16:30\nRiver House campus: 16:30\nBinh An Campus: 17:00`,
                type: undefined
            },
            { subheading: "Supervised care before/after school", data: "Yes", type: undefined },
            { subheading: "School bus service available", data: "Yes", type: undefined },
            { subheading: "School provided lunches", data: "Yes", type: undefined },
            { subheading: "Food alternatives for special dietary needs", data: "Yes", type: undefined },
            { subheading: "Uniform required", data: "No", type: undefined },
        ]
    },
    {
        label: "Extracurricular activities",
        icon: <Trophy size={20} />,
        content: [
            {
                subheading: "Extracurricular activities or clubs offered",
                data: "Science, kickboxing/multisport, Glee club, MonART club, cooking, French, Spanish, Maths, Vietnamese, theatre, coding, ukulele.",
                type: undefined
            },
            {
                subheading: "Sports activities included",
                data: "Physical education",
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