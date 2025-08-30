
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

export default function School20() {
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
                                            <img src="/images/school logos/Canadian International school logo.png" alt="no image" />
                                        </a>
                                    </div>
                                    <h1 className="text-l font-semibold">
                                        The Canadian International School
                                    </h1>
                                </div>

                                <div style={{ marginBottom: "1rem", overflow: "auto", height: "20dvh" }} className="text-sm">
                                    <div style={{ fontWeight: "bold", marginBottom: "1rem" }}>Introduction</div>
                                    <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                                      The Canadian International School - Vietnam is an inclusive community committed to the development of future leaders. 
                                      Built on academic achievement, service learning, global citizenship, inquiry, reflection, and the balance of mind and body, 
                                      it challenges all members of its community to be active, lifelong learners.
                                    </p>
                                </div>

                                <div className="flex flex-row gap-1 text-2xl mb-3" style={{ borderBottom: "1px solid gray", paddingTop: "1rem", paddingBottom: "1rem" }}>
                                    <Link href="https://cis.edu.vn/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/globe_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    {/* <Link href="https://www.youtube.com/c/SNAMarianapolisInternationalSchool" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/youtube_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link> */}
                                    <Link href=" https://www.facebook.com/CISVN/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/facebook_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.linkedin.com/company/canadian-international-school-vietnam-ciss/about/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/linkedin_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    {/* <Link href=" https://www.instagram.com/snamarianapolis/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/instagram_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link> */}
                                </div>

                                {/* Info Grid */}
                                <div className="grid grid-cols-1 gap-x-10 text-sm">
                                    <InfoRow label="Curriculum" value="IB Diploma and OSSD" isLink />
                                    <InfoRow label="Leaving qualifications" value="IB Diploma and OSSD" isLink />
                                    <InfoRow label="Age range" value="range: (6 to 18)" />
                                    <InfoRow label="Tuition" value="531,600,000 ₫ to 804,000,000 ₫" />
                                    <InfoRow label="Address" value="Road 23, Phu My Hung, Tan Phu Ward, D.7, HCMC Vietnam" />
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
                            // src="https://www.youtube.com/embed/9JgKBbQ7PKM"
                            title="Vercel Ship Keynote: Introducing the frontend cloud"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            style={{ width: "100%", margin: "auto", aspectRatio: "16/9", backgroundColor: "gray" }}
                        // allowFullScreen
                        ></iframe>
                    </div>
                    <div className="flex-1 flex lg:flex-row flex-col lg:gap-[1dvw] gap-[1rem]">
                        <div className="w-full lg:w-1/2 overflow-hidden" id="slideheight">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.333022815073!2d106.64543271525981!3d10.72898327931461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e1075a62999%3A0x6200889f23108ef9!2sCanadian%20International%20School!5e0!3m2!1sen!2s!4v1691049000000!5m2!1sen!2s"
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
        data: "The Canadian International School - Vietnam is an inclusive community committed to the development of future leaders. Built on academic achievement, service learning, global citizenship, inquiry, reflection, and the balance of mind and body, it challenges all members of its community to be active, lifelong learners."
      },
      {
        type: undefined,
        subheading: "Teaching approach of the school",
        data: "Canadian International School System is an educational system whose objective is to develop future generations of passionate, enthusiastic, creative, proactive students who persevere to successfully realize their goals. Students are educated with the necessary knowledge and important skills to succeed and be happy in this growing, moving and challenging world."
      },
    ]
  },
  {
    label: "Nationalities",
    icon: <Users size={20} />,
    content: [
      {
        type: undefined,
        subheading: "Number of students",
        data: "1771"
      },
      {
        type: undefined,
        subheading: "Number of nationalities represented in the school",
        data: "22"
      },
      {
        type: undefined,
        subheading: "Most common nationality",
        data: "Vietnamese"
      },
      {
        type: undefined,
        subheading: "Ratio of local students to international students",
        data: "88 : 12"
      },
    ]
  },
  {
    label: "Languages",
    icon: <Languages size={20} />,
    content: [
      {
        type: undefined,
        subheading: "Native English speaking teachers",
        data: "Yes"
      },
      {
        type: undefined,
        subheading: "Language support for students not fluent in English",
        data: "English as a Second Language (ESL), English Language Learning (ELL), English as an Additional Language Learning (EAL)"
      },
      {
        type: undefined,
        subheading: "Additional language classes offered by the school",
        data: "English, Vietnamese, French, Korean"
      },
    ]
  },
  {
    label: "Classroom",
    icon: <Pencil size={20} />,
    content: [
      {
        type: undefined,
        subheading: "Max. number of students per class",
        data: "Kindergarten: 17 per class; Grade 1 - 3: 22 per class; Others: 25 per class"
      },
      {
        type: undefined,
        subheading: "Average number of students per class",
        data: "21"
      },
      {
        type: undefined,
        subheading: "Does the school employ teaching assistants?",
        data: "Yes"
      },
      {
        type: undefined,
        subheading: "Use of technology in the classroom",
        data: "Latest and most appropriate technologies and well-maintained devices"
      },
      {
        type: undefined,
        subheading: "Is the school ready to use virtual classrooms when needed?",
        data: "Yes"
      },
    ]
  },
  {
    label: "Academics",
    icon: <GraduationCap size={20} />,
    content: [
      {
        type: undefined,
        subheading: "External examinations or assessments available",
        data: "IB Diploma, Ontario Secondary School Diploma, Ontario Secondary School Literacy Test"
      },
      {
        type: undefined,
        subheading: "Do teachers assign homework to their students?",
        data: "Yes"
      },
      {
        type: undefined,
        subheading: "Approximate hours of homework given",
        data: "The school’s intention is to help students study and complete their work at school. The amount of homework is dependent on each student’s ability. Teachers encourage students to read more books for self-development."
      },
      {
        type: undefined,
        subheading: "Percentage of students who pursue further education post-graduation",
        data: "100%"
      },
    ]
  },
  {
    label: "Student support",
    icon: <Heart size={20} />,
    content: [
      {
        type: undefined,
        subheading: "Dedicated staff/programs for students with special learning needs",
        data: "Yes"
      },
      {
        type: undefined,
        subheading: "Learning support offered",
        data: "Students with suspected special needs will be reviewed for limited accommodations and modifications. The school is not able to receive students with moderate or severe special needs. The Special Educational Needs (SEN) teacher or school counsellor will review these admissions with final approval from the school principal."
      },
    ]
  },
  {
    label: "Admissions",
    icon: <FileText size={20} />,
    content: [
      {
        type: undefined,
        subheading: "Entry evaluation for students",
        data: "Yes"
      },
      {
        type: undefined,
        subheading: "Brief description of entry evaluation required",
        data: "OSSD English & Math assessment (for CIS), English Language Proficiency Testing (Ontario STEP program & CEFR), Other additional assessments (for IBDP), Math Reference (for IBDP), Language Reference (for IBDP)"
      },
      {
        type: undefined,
        subheading: "Waiting list",
        data: "Yes"
      },
      {
        type: undefined,
        subheading: "Students can join after academic year begins",
        data: "Yes"
      },
    ]
  },
  {
    label: "School day",
    icon: <Clock size={20} />,
    content: [
      {
        type: undefined,
        subheading: "School start time",
        data: "8:30"
      },
      {
        type: undefined,
        subheading: "School finish time",
        data: "15:00"
      },
      {
        type: undefined,
        subheading: "Supervised care before/after school",
        data: "No"
      },
      {
        type: undefined,
        subheading: "School bus service available",
        data: "Yes"
      },
      {
        type: undefined,
        subheading: "School provided lunches",
        data: "Yes"
      },
      {
        type: undefined,
        subheading: "Food alternatives for special dietary needs",
        data: "Yes"
      },
      {
        type: undefined,
        subheading: "Uniform required",
        data: "Yes"
      },
    ]
  },
  {
    label: "Extracurricular activities",
    icon: <Trophy size={20} />,
    content: [
      {
        type: undefined,
        subheading: "Extracurricular activities or clubs offered",
        data: "Global Issues Network Clubs (GIN Clubs), International Spring Fair, University Fair, Halloween Event, Teacher's Day Celebration, Christmas concerts, GIN Christmas Fun Fair, GIN Saigon Conference, Spirit Week, CISS Cup, CIS Prom"
      },
      {
        type: undefined,
        subheading: "Sports activities included",
        data: "Physical Education"
      },
      {
        type: undefined,
        subheading: "Sports teams or sport competitions available for students",
        data: "Yes"
      },
    ]
  },
  {
    label: "Facilities",
    icon: <Building2 size={20} />,
    content: [
      {
        type: undefined,
        subheading: "Sports facilities at the school",
        data: "Kindergarten Indoor & Outdoor Playgrounds, Swimming pool, Soccer field, Indoor basketball court, Gym room"
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