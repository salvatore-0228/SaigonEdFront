
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
    Users
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

export default function School22() {
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
                                    <div className="w-[4dvw] rounded">
                                        <a href="#">
                                            <img src="/images/school logos/Vietnam Finland School.png" alt="no image" />
                                        </a>
                                    </div>
                                    <h1 className="text-l font-semibold">
                                        Vietnam Finland International School
                                    </h1>
                                </div>

                                <div style={{ marginBottom: "1rem", overflow: "auto", height: "20dvh" }} className="text-sm">
                                    <div style={{ fontWeight: "bold", marginBottom: "1rem" }}>Introduction</div>
                                    <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                                        Vietnam-Finland International School is a subsidiary of Ton Duc Thang University. VFIS is the first International School in 
                                        Southeast Asia to follow the unique Finnish philosophy of education. Finland has one of the best education systems in the 
                                        world, featuring highly qualified teachers and progressive pedagogical methods that are based on scientific research.
                                    </p>
                                    <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                                        VFIS has two educational programs: 100% international program and an English-Vietnamese bilingual program for students from 
                                        Grade 1 to Grade 12.
                                    </p>
                                </div>

                                <div className="flex flex-row gap-1 text-2xl mb-3" style={{ borderBottom: "1px solid gray", paddingTop: "1rem", paddingBottom: "1rem" }}>
                                    <Link href="https://vfis.tdtu.edu.vn/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/globe_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.youtube.com/channel/UCXJvqkBg-Y1EIM-uFMmgN1A" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/youtube_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.facebook.com/vfis.tdtu.edu.vn/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/facebook_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href=" https://www.linkedin.com/company/vietnamfinlandinternationalschool/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/linkedin_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    {/* <Link href="https://www.instagram.com/lfimargueriteduras/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/instagram_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link> */}
                                </div>

                                {/* Info Grid */}
                                <div className="grid grid-cols-1 gap-x-10 text-sm">
                                    <InfoRow label="Curriculum" value="Finnish, Vietnamese, and IB" isLink />
                                    <InfoRow label="Leaving qualifications" value="IB Diploma" isLink />
                                    <InfoRow label="Age range" value="range: (6 to 18)" />
                                    <InfoRow label="Tuition" value="457,590,000 ₫ to 639,240,000 ₫" />
                                    <InfoRow label="Address" value="01, D1 Street, Tan Phong Ward, District 7, HCMC, Vietnam" />
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
                            src="https://www.youtube.com/embed/yA5fB33oUm0"
                            title="Vercel Ship Keynote: Introducing the frontend cloud"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            style={{ width: "100%", margin: "auto", aspectRatio: "16/9", backgroundColor: "gray" }}
                        // allowFullScreen
                        ></iframe>
                    </div>
                    <div className="flex-1 flex lg:flex-row flex-col lg:gap-[1dvw] gap-[1rem]">
                        <div className="w-full lg:w-1/2 overflow-hidden" id="slideheight">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.408538122302!2d106.6909763!3d10.7318148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f342e73cfbd%3A0x229b427e02f74d3!2sVFIS%20School%20Tr%C6%B0%E1%BB%9Dng%20qu%E1%BB%91c%20t%E1%BA%BF%20Vi%E1%BB%87t%20Nam%20-%20Ph%E1%BA%A7n%20Lan!5e0!3m2!1sen!2s!4v1691050130763!5m2!1sen!2s"
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
                data: "Vietnam-Finland International School is a subsidiary of Ton Duc Thang University. VFIS is the first International School in Southeast Asia to follow the unique Finnish philosophy of education. Finland has one of the best education systems in the world, featuring highly qualified teachers and progressive pedagogical methods that are based on scientific research. VFIS has two educational programs: 100% international program and an English-Vietnamese bilingual program for students from Grade 1 to Grade 12."
            },
            {
                type: undefined,
                subheading: "Teaching approach of the school",
                data: "The International programme at VFIS in Grade 1-9 follows the Finnish curriculum. Most of the subjects in the programme will be taught in English by Finnish and international teachers. The teaching and learning methods will reflect Finnish pedagogical characteristics. The Bilingual programme in Grades 1-12 follows the Vietnamese curriculum integrated with the Finnish curriculum and Finnish learning and teaching approach. Mathematics, Vietnamese language, Social Studies and Moral Education will be taught in Vietnamese and the other subjects will be taught in English."
            }
        ]
    },
    {
        label: "Languages",
        icon: <Languages size={20} />,
        content: [
            {
                type: undefined,
                subheading: "Language support for students not fluent in English and Vietnamese",
                data: "English as an Additional Language"
            }
        ]
    },
    {
        label: "Classroom",
        icon: <Pencil size={20} />,
        content: [
            {
                type: undefined,
                subheading: "Use of technology in the classroom",
                data: `VFIS has a Digital Learning Path plan and integrates technology in all areas of the school. VFIS teachers and pupils decide the best possible use of technology at a given time. All pupils are guided in the correct, moral and ethical use of technology.
        In VFIS, all classrooms are networked and have interactive technology. Wireless internet access allows pupils to research wherever they are on campus. Beside a wide range of modern technologies, pupils are able to use many useful applications to collaborate, communicate and create.`
            }
        ]
    },
    {
        label: "Academics",
        icon: <GraduationCap size={20} />,
        content: [
            {
                type: undefined,
                subheading: "External examinations or assessments available",
                data: "IB Diploma"
            }
        ]
    },
    {
        label: "Admissions",
        icon: <FileText size={20} />,
        content: [
            {
                type: undefined,
                subheading: "Entry evaluation for students",
                data: "Assessment"
            },
            {
                type: undefined,
                subheading: "Brief description of entry evaluation required",
                data: `The aim of assessment is to diagnose the pupil’s readiness to study in an English-speaking environment.
        Specifically, first grader applicants will do a basic test of motor social skills and reading comprehension. Second to fifth grader applicants will be tested in reading, writing and spoken English. For international pupils, the assessment is conducted in English. For Vietnamese pupils who apply for either international or bilingual programme, it is conducted in both Vietnamese and English.`
            }
        ]
    },
    {
        label: "School day",
        icon: <Clock size={20} />,
        content: [
            {
                type: undefined,
                subheading: "School start time",
                data: "8:00"
            },
            {
                type: undefined,
                subheading: "School finish time",
                data: "15:15"
            },
            {
                type: undefined,
                subheading: "School bus service available",
                data: "Yes"
            },
            {
                type: undefined,
                subheading: "School provided lunches",
                data: "VFIS offers daily nutritious, balanced and healthy meals for all the pupils in the school canteen."
            },
            {
                type: undefined,
                subheading: "Uniform required",
                data: "Yes"
            }
        ]
    },
    {
        label: "Extracurricular activities",
        icon: <Trophy size={20} />,
        content: [
            {
                type: undefined,
                subheading: "Extracurricular activities or clubs offered",
                data: "VFIS is a dynamic school that offers a variety of extra-curricular activities for pupils to discover their different talents and explore their interests. Typical ECAs are sports and dance, visual arts, music, theatre and film, programming and technologies, environmental issues, mathematics and foreign languages, charity and volunteering activities."
            }
        ]
    },
    {
        label: "Facilities",
        icon: <Building2 size={20} />,
        content: [
            {
                type: undefined,
                subheading: "Sports facilities at the school",
                data: "The school is equipped with modern indoor and outdoor facilities, including a multi-purpose gym, swimming pool, small football field, playgrounds and gardens."
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