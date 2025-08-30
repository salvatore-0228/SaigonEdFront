
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

export default function School29() {
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
                                            <img src="/images/school logos/Tesla Logo.png" alt="no image" />
                                        </a>
                                    </div>
                                    <h1 className="text-l font-semibold">
                                        Tesla Education
                                    </h1>
                                </div>

                                <div style={{ marginBottom: "1rem", overflow: "auto", height: "20dvh" }} className="text-sm">
                                    <div style={{ fontWeight: "bold", marginBottom: "1rem" }}>Introduction</div>
                                    <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                                        Established in 2015, our Tan Binh campus began with Early Years students aged 18 months to 5 years. Each subsequent year, 
                                        we have expanded and offer all grade levels, in Primary School (Kindergarten to Grade 5) and Middle School (Grades 6 to 9). 
                                        Starting from the 2025-2026 school year we will be offering Senior Secondary School (grades 10 to 12). Our campus features 
                                        open spaces and modern international standard facilities.
                                    </p>
                                    <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                                        Tesla Education Group is a leading education provider in Vietnam, offering the world renown International Baccalaureate (IB) 
                                        Programme along with the Vietnamese National Curriculum. Our goal is to ensure students receive a well-rounded education, 
                                        giving families the flexibility to pursue higher education opportunities worldwide.
                                    </p>
                                </div>

                                <div className="flex flex-row gap-1 text-2xl mb-3" style={{ borderBottom: "1px solid gray", paddingTop: "1rem", paddingBottom: "1rem" }}>
                                    <Link href=" https://tesla.edu.vn/en/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/globe_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.youtube.com/channel/UCvmKGGnpdW_fQv0Bv-C5How" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/youtube_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.facebook.com/Teslaedugroup/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/facebook_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.linkedin.com/company/tesla-school-vietnam/about/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/linkedin_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.instagram.com/teslaeduvn/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/instagram_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                </div>

                                {/* Info Grid */}
                                <div className="grid grid-cols-1 gap-x-10 text-sm">
                                    <InfoRow label="Curriculum" value="IB" isLink />
                                    <InfoRow label="Leaving qualifications" value="N/A" isLink />
                                    <InfoRow label="Age range" value="range: (3 to 18)" />
                                    <InfoRow label="Tuition" value="217,720,000 ₫ to 616,390,000 ₫" />
                                    <InfoRow label="Address" value="Tan Binh Campus: Ages 3 to 18 Address: 171B Hoang Hoa Tham, W13, Tan Binh Dist, HCM City (C3 Main Gate), Vietnam" />
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
                            // src="https://www.youtube.com/embed/MnBwUAzzuXg"
                            title="Vercel Ship Keynote: Introducing the frontend cloud"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            style={{ width: "100%", margin: "auto", aspectRatio: "16/9", backgroundColor: "gray" }}
                        // allowFullScreen
                        ></iframe>
                    </div>
                    <div className="flex-1 flex lg:flex-row flex-col lg:gap-[1dvw] gap-[1rem]">
                        <div className="w-full lg:w-1/2 overflow-hidden" id="slideheight">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.256319181362!2d106.6440375!3d10.8063706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175294682df7767%3A0x6d23532c81b5cb4f!2sTr%C6%B0%E1%BB%9Dng%20Tesla!5e0!3m2!1sen!2s!4v1691333999000!5m2!1sen!2s"
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
                type: undefined,
                subheading: "Qualities and characteristics best defining the school",
                data: `Established in 2015, Tesla Education Group's Tan Binh campus began with Early Years students and has expanded to offer all grade levels from Kindergarten to Grade 9. From the 2025–2026 academic year, Senior Secondary School (Grades 10–12) will also be available. The campus features open spaces and modern international-standard facilities. Tesla provides a well-rounded education through a combination of the globally respected International Baccalaureate (IB) Programme and the Vietnamese National Curriculum, offering students flexibility to pursue higher education worldwide.`
            },
            {
                type: undefined,
                subheading: "Teaching approach of the school",
                data: "International Baccalaureate (IB) Integrated Program"
            }
        ]
    },
    {
        label: "Nationalities",
        icon: <Users size={20} />,
        content: [
            { type: undefined, subheading: "Number of students", data: "150" },
            { type: undefined, subheading: "Number of nationalities represented in the school", data: "6" },
            { type: undefined, subheading: "Most common nationality", data: "Vietnamese, Korean, American, Australian" },
            { type: undefined, subheading: "Ratio of local students to international students", data: "70% local students" }
        ]
    },
    {
        label: "Languages",
        icon: <Languages size={20} />,
        content: [
            { type: undefined, subheading: "Native English and Vietnamese speaking teachers", data: "Yes" },
            { type: undefined, subheading: "Language support for students not fluent in English and Vietnamese", data: "Yes, additional classes are provided" }
        ]
    },
    {
        label: "Classroom",
        icon: <Pencil size={20} />,
        content: [
            { type: undefined, subheading: "Max. number of students per class", data: "25" },
            { type: undefined, subheading: "Average number of students per class", data: "18" },
            { type: undefined, subheading: "Does the school employ teaching assistants?", data: "Yes" },
            {
                type: undefined,
                subheading: "Use of technology in the classroom",
                data: "Laptops and tablets are required. Classrooms are fully equipped with smart TVs, projectors, and PCs."
            },
            {
                type: undefined,
                subheading: "Is the school ready to use virtual classrooms when needed?",
                data: "Yes, virtual classrooms are available when needed."
            }
        ]
    },
    {
        label: "Academics",
        icon: <GraduationCap size={20} />,
        content: [
            { type: undefined, subheading: "Do teachers assign homework to their students?", data: "Yes" }
        ]
    },
    {
        label: "Student support",
        icon: <HeartPulse size={20} />,
        content: [
            { type: undefined, subheading: "Dedicated staff/programs for students with special learning needs", data: "Yes" },
            { type: undefined, subheading: "Learning support offered", data: "Tutoring courses available after class" },
            { type: undefined, subheading: "The school supports gifted, able and talented students", data: "Scholarships, certificates, and medals awarded" }
        ]
    },
    {
        label: "Admissions",
        icon: <FileText size={20} />,
        content: [
            { type: undefined, subheading: "Entry evaluation for students", data: "Yes" },
            { type: undefined, subheading: "Brief description of entry evaluation required", data: "Placement Test" },
            { type: undefined, subheading: "Deadline for registration (new academic year)", data: "31/05" },
            { type: undefined, subheading: "Students can join after academic year begins", data: "Yes" }
        ]
    },
    {
        label: "School Day",
        icon: <Clock size={20} />,
        content: [
            { type: undefined, subheading: "School start time", data: "15/08" },
            { type: undefined, subheading: "School finish time", data: "30/05" },
            { type: undefined, subheading: "School bus service available", data: "Yes" },
            { type: undefined, subheading: "School provided lunches", data: "Yes" },
            { type: undefined, subheading: "Food alternatives for special dietary needs", data: "Yes" },
            { type: undefined, subheading: "Uniform required", data: "Yes" }
        ]
    },
    {
        label: "Extracurricular Activities",
        icon: <Trophy size={20} />,
        content: [
            {
                type: "list",
                subheading: "Extracurricular activities or clubs offered",
                data: ["Basketball", "Badminton", "Football", "Swimming"]
            },
            {
                type: "list",
                subheading: "Sports activities included",
                data: ["Basketball", "Badminton", "Football", "Swimming"]
            },
            {
                type: undefined,
                subheading: "Sports teams or sport competitions available for students",
                data: "Yes"
            }
        ]
    },
    {
        label: "Facilities",
        icon: <Building2 size={20} />,
        content: [
            {
                type: "list",
                subheading: "Facilities at the school",
                data: ["Music Room", "Art Room", "Dance Studio", "ICT Lab"]
            },
            {
                type: "list",
                subheading: "Sports facilities at the school",
                data: ["Swimming Pool", "Basketball Court", "Football Field"]
            }
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