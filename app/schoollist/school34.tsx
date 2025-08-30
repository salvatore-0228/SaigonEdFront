
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

export default function School34() {
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
                                            <img src="/images/school logos/Aurora International School of the Arts Logo.png" alt="no image" />
                                        </a>
                                    </div>
                                    <h1 className="text-l font-semibold">
                                        Aurora International School of the Arts
                                    </h1>
                                </div>

                                <div style={{ marginBottom: "1rem", overflow: "auto", height: "20dvh" }} className="text-sm">
                                    <div style={{ fontWeight: "bold", marginBottom: "1rem" }}>Introduction</div>
                                    <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                                        Aurora International School Of The Arts is a school inspired by the Reggio Emilia Experience, intertwined with New Zealand 
                                        Curriculum
                                    </p>
                                    <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                                        The school’s systems have been created to build the capacities of every child and to ensure an Aurora learner is an expert 
                                        learner. Fostering life-long learning in the Early Years and Primary settings, teachers as co-constructors support children 
                                        through self-discovery, imagination and creativity. The school’s mission is to inspire and develop the potential in each 
                                        child through child-led investigations and provocations, in an environment that fosters independent exploration, encourages 
                                        social interactions and invites children to represent their ideas and reflect on their learning through accessible 
                                        documentation.
                                    </p>
                                </div>

                                <div className="flex flex-row gap-1 text-2xl mb-3" style={{ borderBottom: "1px solid gray", paddingTop: "1rem", paddingBottom: "1rem" }}>
                                    <Link href="https://www.auroraschool.vn/" passHref legacyBehavior>
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
                                    <Link href="https://www.facebook.com/auroraschoolvn" passHref legacyBehavior>
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
                                    <Link href="https://www.instagram.com/auroraintschool/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/instagram_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                </div>

                                {/* Info Grid */}
                                <div className="grid grid-cols-1 gap-x-10 text-sm">
                                    <InfoRow label="Curriculum" value="Reggio Emilia Approach and New Zealand" isLink />
                                    <InfoRow label="Leaving qualifications" value="N/A" isLink />
                                    <InfoRow label="Age range" value="range: (1 to 14)" />
                                    <InfoRow label="Tuition" value="This school doesn’t make their fee public." />
                                    <InfoRow label="Address" value="11a-13 Tran Ngoc Dien, Thao Dien Ward, District 2, HCMC, Vietnam" />
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
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.031989584904!2d106.7360239!3d10.8033831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175261666803857%3A0x41873801cd9a5ccb!2sAurora%20International%20School%20Of%20The%20Arts!5e0!3m2!1sen!2s!4v1691345678901!5m2!1sen!2s"
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
                data: `Aurora International School Of The Arts is inspired by the Reggio Emilia Experience, intertwined with the New Zealand Curriculum. The school fosters expert learners through child-led investigations, creativity, and independent exploration in a holistic, child-centered environment. The curriculum emphasizes well-being, identity, social interaction, and the role of the environment in learning, integrating arts and expressive languages with strong academic frameworks.`
            },
            {
                type: "list",
                subheading: "Campuses and contact",
                data: [
                    "Aurora International School Of The Arts (12 months to 6 years): 11 – 11A - 13 Tran Ngoc Dien, Thao Dien Ward, District 2, HCMC",
                    "Aurora International Primary and Middle School (7 to 15 years): 15 – 15A Tran Ngoc Dien, Thao Dien Ward, District 2, HCMC",
                    "Phone: +84 (028) 3744 2991",
                    "Website: www.auroraschool.vn",
                    "Emails: info@auroraschool.vn / info@aurorareggio.com, admissions@auroraschool.vn / admissions@aurorareggio.com"
                ]
            }
        ]
    },
    {
        label: "Teaching Approach",
        icon: <Pencil size={20} />,
        content: [
            {
                type: "paragraph",
                data: `Inquiry-based learning through the Reggio Emilia experience, combined with Te Whāriki and the New Zealand Curriculum frameworks.`
            }
        ]
    },
    {
        label: "Nationalities",
        icon: <Users size={20} />,
        content: [
            { subheading: "Number of students", data: "150–200" },
            { subheading: "Number of nationalities represented", data: "15" },
            { subheading: "Most common nationalities", data: "Vietnamese, Japanese, Australian, American, Korean" },
            { subheading: "Ratio of local to international students", data: "60% local / 40% international" }
        ]
    },
    {
        label: "Languages",
        icon: <Languages size={20} />,
        content: [
            { subheading: "Native English speaking teachers", data: "Yes" },
            { subheading: "Language support for students not fluent in English", data: "No formal support; emphasis on mother tongue and learning through language of instruction" },
            { subheading: "Additional language classes offered", data: "Vietnamese, Japanese, Spanish" }
        ]
    },
    {
        label: "Classroom",
        icon: <BookOpen size={20} />,
        content: [
            { subheading: "Max. number of students per class", data: "20" },
            { subheading: "Average number of students per class", data: "15" },
            { subheading: "Teaching assistants", data: "Co-Teachers employed" },
            {
                type: "list",
                subheading: "Use of technology",
                data: [
                    "Technology integrated into digital art and science classes",
                    "Used in other subjects according to curriculum"
                ]
            },
            { subheading: "Virtual classrooms readiness", data: "Yes, with remote learning plan including online assemblies, recorded videos, and home-learning packs" },
            { subheading: "Religious practice", data: "No" },
            { subheading: "Accommodation for non-religious/different religion students", data: "Inclusive environment respecting and celebrating diverse family traditions" }
        ]
    },
    {
        label: "Academics",
        icon: <GraduationCap size={20} />,
        content: [
            { subheading: "Homework policy", data: "No formal homework assigned; daily reading encouraged at home" }
        ]
    },
    {
        label: "Student Support",
        icon: <HeartPulse size={20} />,
        content: [
            { subheading: "Support for students with special needs", data: "Well-being teacher and collaborative support from all teachers" },
            { subheading: "Support for gifted and talented students", data: "Curriculum modified to individual proficiency levels with extended learning opportunities" }
        ]
    },
    {
        label: "Admissions",
        icon: <FileText size={20} />,
        content: [
            { subheading: "Entry evaluation", data: "No entry evaluation required" },
            { subheading: "Waiting list", data: "Yes" },
            { subheading: "Registration deadline", data: "None" },
            { subheading: "Mid-year entry allowed", data: "Yes" }
        ]
    },
    {
        label: "School Day",
        icon: <Clock size={20} />,
        content: [
            { subheading: "Start time", data: "From 7:45 AM" },
            { subheading: "Finish time", data: "4:15 PM" },
            { subheading: "Before/after school care", data: "No" },
            { subheading: "School bus service", data: "Yes" },
            { subheading: "Lunch provided", data: "Yes" },
            { subheading: "Food alternatives for special dietary needs", data: "Yes" },
            { subheading: "Uniform required", data: "Uniform required for Primary and Middle School; encouraged for Preschool" }
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
                    "Robotics",
                    "Sewing and Design",
                    "Judo",
                    "Ballet",
                    "Basketball",
                    "Badminton",
                    "Yoga",
                    "Chess",
                    "Cooking",
                    "Hip hop dance",
                    "Japanese language club"
                ]
            },
            { subheading: "Sports activities", data: "Physical Education, Swimming" },
            { subheading: "Sports teams/competitions", data: "No teams; annual Sports Day and Swimming Gala involving families" }
        ]
    },
    {
        label: "Facilities",
        icon: <Building2 size={20} />,
        content: [
            {
                type: "list",
                subheading: "School facilities",
                data: [
                    "Functional rooms",
                    "Library",
                    "Ateliers for arts, science, music, languages"
                ]
            },
            {
                type: "list",
                subheading: "Sports facilities",
                data: [
                    "Outdoor grounds",
                    "Swimming pool",
                    "Basketball/badminton yard"
                ]
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