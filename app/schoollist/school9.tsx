
"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

import styles from "./master-education-page.module.css"

import {
    Info, DollarSign, Film, FileText, Landmark, Calendar,
    Facebook, Building2, Twitter, Linkedin, Youtube, Instagram, Star, Mail, Globe,
    Flag, Languages, Pencil, GraduationCap, Heart, Clock, Trophy,
    Phone
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

export default function School9() {
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
                                    <div className="w-12 h-12 rounded">
                                        <a href="#">
                                            <img src="/images/school logos/British Vietnamese International School HCMC.png" alt="no image" />
                                        </a>
                                    </div>
                                    <h1 className="text-l font-semibold">
                                        British Vietnamese International School Ho Chi Minh City
                                    </h1>
                                </div>

                                <div style={{ marginBottom: "1rem", overflow: "auto", height: "20dvh" }} className="text-sm">
                                    <div style={{ fontWeight: "bold", marginBottom: "1rem" }}>Introduction</div>
                                    <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                                        At BVIS HCMC, students are empowered by world-class learning opportunities that shape their identity and equip them with 
                                        At BVIS HCMC, students are empowered by world-class learning opportunities that shape their identity and equip them with 
                                        the skills and confidence to thrive as future leaders.the skills and confidence to thrive as future leaders.
                                    </p>
                                </div>

                                <div className="flex flex-row gap-1 text-2xl mb-3" style={{ borderBottom: "1px solid gray", paddingTop: "1rem", paddingBottom: "1rem" }}>
                                    <Link href="https://www.nordangliaeducation.com/bvis-hcmc?utm_campaign=plus+listing&utm_medium=referral&utm_source=international-schools-database.com" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/globe_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.youtube.com/channel/UCatxLg3JsMGbB7XawAat51w" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/youtube_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.facebook.com/BVISHoChiMinhCity/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/facebook_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.linkedin.com/company/british-vietnamese-international-school-ho-chi-minh-city/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/linkedin_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.instagram.com/bvishcmc/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/instagram_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                </div>

                                {/* Info Grid */}
                                <div className="grid grid-cols-1 gap-x-10 text-sm">
                                    <InfoRow label="Curriculum" value="British, Vietnamese, and International" isLink />
                                    <InfoRow label="Leaving qualifications" value="IGCSE and A-Levels" isLink />
                                    <InfoRow label="Age range" value="range: (2 to 18)" />
                                    <InfoRow label="Tuition" value="250,400,000 ₫ to 668,600,000 ₫" />
                                    <InfoRow label="Address" value="44 - 46, Street 1, Binh Hung, Binh Chanh, HCMC, Vietnam" />
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
                            // src="N/A"
                            title="Vercel Ship Keynote: Introducing the frontend cloud"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            style={{ backgroundColor: "gray", width: "100%", margin: "auto", aspectRatio: "16/9" }}
                        // allowFullScreen
                        ></iframe>
                    </div>
                    <div className="flex-1 flex lg:flex-row flex-col lg:gap-[1dvw] gap-[1rem]">
                        <div className="w-full lg:w-1/2 overflow-hidden" id="slideheight">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0028097431314!2d106.6831682!3d10.719427799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fa43f5ed3d7%3A0xc9ce5646fa1fc0f8!2sBritish%20Vietnamese%20International%20School%20HCMC!5e0!3m2!1sen!2s!4v1691842019455"
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
        label: "Nationalities",
        icon: <Flag size={20} />,
        content: [
            { subheading: "Number of students", data: "1200+", type: undefined },
            { subheading: "Number of nationalities represented in the school", data: "20", type: undefined },
            { subheading: "Most common nationality", data: "Vietnamese", type: undefined },
            { subheading: "Ratio of local students to international students", data: "93% local : 7% international", type: undefined },
        ]
    },
    {
        label: "Languages",
        icon: <Languages size={20} />,
        content: [
            { subheading: "Native English speaking teachers", data: "Yes", type: undefined },
            { subheading: "Language support for students not fluent in English", data: "English as an additional language and Vietnamese as an additional language", type: undefined },
        ]
    },
    {
        label: "Classroom",
        icon: <Pencil size={20} />,
        content: [
            { subheading: "Max. number of students per class", data: "Early Years: 22 Primary: 25 Secondary: 25", type: undefined },
            { subheading: "Average number of students per class", data: "Early Years: 20 Primary: 21 Secondary: 21", type: undefined },
            { subheading: "Does the school employ teaching assistants?", data: "Yes", type: undefined },
            {
                subheading: "Use of technology in the classroom",
                data: "Our classrooms and learning spaces will help bring your child’s learning to life. Packed with cutting-edge equipment and technology, our facilities are designed to provide a stimulating setting to help your child succeed in every lesson. Presenting technology, like iPad screen mirroring, flat-panel displays, and interactive projectors in every classroom.",
                type: undefined
            },
            {
                subheading: "Is the school ready to use virtual classrooms when needed?",
                data: "The Nord Anglia Virtual School Experience means your child always has access to personalised learning taught by their school’s world-class teachers. Bringing creative and inspiring lessons to your child through our virtual school, our blended learning approach is designed to ensure that your child receives the full curriculum of education, whilst staying healthy and safe at home.",
                type: undefined
            },
        ]
    },
    {
        label: "Academics",
        icon: <GraduationCap size={20} />,
        content: [
            { subheading: "External examinations or assessments available", data: "IGCSE, International A Levels", type: undefined },
            {
                subheading: "Results in these examinations",
                data: "In 2022-2023, A Level students achieved a 98% pass rate with 58% A*-A grades. In IGCSE, 88% of students achieved A*-C grades.",
                type: undefined
            },
            { subheading: "Do teachers assign homework to their students?", data: "Yes, they do.", type: undefined },
            {
                subheading: "Approximate hours of homework given",
                data: "Depending on the year group, the homework amount might be different but around 75% of our parents have been quite happy about the amount of homework according to 2023 Parents Satisfaction Survey.",
                type: undefined
            },
            { subheading: "Percentage of students who pursue further education post-graduation", data: "100%", type: undefined },
        ]
    },
    {
        label: "Student support",
        icon: <Heart size={20} />,
        content: [
            {
                subheading: "Dedicated staff/programs for students with special learning needs",
                data: "The school offers learning support for children with minor learning difficulties.",
                type: undefined
            }
        ]
    },
    {
        label: "Admissions",
        icon: <FileText size={20} />,
        content: [
            {
                subheading: "Entry evaluation for students",
                data: "All applicants are required to sit an entrance test and/or attend an interview to establish academic potential.\n- For Foundation 1 – Year 3 (Preschool – Grade 2): play session and interview\n- Year 4 – Year 13 (Grade 3 – Grade 12): entrance test and interview",
                type: undefined
            },
            {
                subheading: "Waiting list",
                data: "Yes, there are a few year groups that we have a waitlist to attend",
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
            { subheading: "School start time", data: "8:10 for secondary students and 8:30 for primary students", type: undefined },
            { subheading: "School finish time", data: "15:05", type: undefined },
            { subheading: "School bus service available", data: "Yes", type: undefined },
            { subheading: "School provided lunches", data: "Yes", type: undefined },
            { subheading: "Food alternatives for special dietary needs", data: "Yes, our school canteen offer food options for students with special diets", type: undefined },
            { subheading: "Uniform required", data: "Yes", type: undefined },
        ]
    },
    {
        label: "Extracurricular activities",
        icon: <Trophy size={20} />,
        content: [
            {
                subheading: "Extracurricular activities or clubs offered",
                data: "Our students have access to a broad range of extracurricular activities designed to educate and nurture their talents. Throughout the year, children are encouraged independently to choose activities from the different categories to broaden their interests and skills.",
                type: undefined
            },
            {
                subheading: "Sports activities included",
                type: "list",
                data: [
                    "Gymnastics, Dance",
                    "Athletics",
                    "Invasion games (e.g. Football, Basketball, Handball)",
                    "Striking and Fielding (e.g. teeball, rounders, danish long ball)",
                    "Swimming, Water polo, survival skills",
                    "Outdoor Adventurous Activities (e.g. climbing, orienteering)",
                    "Net Games (e.g. volleyball, badminton)"
                ]
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
                subheading: "Facilities at the school",
                type: "list",
                data: [
                    "Two 25-square meter swimming pools",
                    "Bilingual library with 70,000+ English and Vietnamese books",
                    "STEAM room with laser cutter, robotics, and 3D printing",
                    "Open spaces and large all-weather playing field",
                    "iPad screen mirroring, flat-panel displays, and interactive projectors in every classroom",
                    "Large multipurpose double-size sports hall",
                    "Fully equipped, 200-seat theatre and black box performing space",
                    "Double-size dance studio",
                    "Spacious art and design studios"
                ]
            },
            {
                subheading: "Sports facilities at the school",
                data: "Two 25-square meter swimming pools, large multipurpose double-size sports hall, climbing wall and a sport field",
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