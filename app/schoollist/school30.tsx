
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

export default function School30() {
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
                                            <img src="/images/school logos/APU Internaltional School Logo.png" alt="no image" />
                                        </a>
                                    </div>
                                    <h1 className="text-l font-semibold">
                                        APU American International School
                                    </h1>
                                </div>

                                <div style={{ marginBottom: "1rem", overflow: "auto", height: "20dvh" }} className="text-sm">
                                    <div style={{ fontWeight: "bold", marginBottom: "1rem" }}>Introduction</div>
                                    <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                                        APU American International School was founded in 2004 as a private and international Pre-Kindergarten to Grade 12 college preparatory school. 
                                        In addition to the American- standard curriculum with English as the primary language in the learning process, APU International School has officially 
                                        participated in the system of "World Schools". At APU, there are conditions for students' exposure and learning to 7 different languages depending on their 
                                        preferences and choices, and the program applies to all APU students from around the world.
                                    </p>
                                </div>

                                <div className="flex flex-row gap-1 text-2xl mb-3" style={{ borderBottom: "1px solid gray", paddingTop: "1rem", paddingBottom: "1rem" }}>
                                    <Link href="https://apu.edu.vn/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/globe_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.youtube.com/user/APUSchool" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/youtube_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.facebook.com/apu.edu.vn/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/facebook_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.linkedin.com/company/apu-international-schools/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/linkedin_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    {/* <Link href="https://www.instagram.com/teslaeduvn/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/instagram_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link> */}
                                </div>

                                {/* Info Grid */}
                                <div className="grid grid-cols-1 gap-x-10 text-sm">
                                    <InfoRow label="Curriculum" value="American" isLink />
                                    <InfoRow label="Leaving qualifications" value="US Diploma, AP, and SAT" isLink />
                                    <InfoRow label="Age range" value="range: (3 to 18)" />
                                    <InfoRow label="Tuition" value="237,600,000 ₫ to 568,920,000 ₫" />
                                    <InfoRow label="Address" value="Middle & High School Campus: Ages 11 to 18 Address: 286 Lãnh Binh Thăng, Phường 8, Quận 11, Hồ Chí Minh, Vietnam" />
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
                            src="https://www.youtube.com/embed/smeKhh2e9MQ"
                            title="Vercel Ship Keynote: Introducing the frontend cloud"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            style={{ width: "100%", margin: "auto", aspectRatio: "16/9", backgroundColor: "gray" }}
                        // allowFullScreen
                        ></iframe>
                    </div>
                    <div className="flex-1 flex lg:flex-row flex-col lg:gap-[1dvw] gap-[1rem]">
                        <div className="w-full lg:w-1/2 overflow-hidden" id="slideheight">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6077681247896!2d106.6372156!3d10.7743272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ebc2d38686b%3A0xa702eecfce87a7ae!2sAPU%20International%20School!5e0!3m2!1sen!2s!4v1691339999999!5m2!1sen!2s"
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
        data: `Founded in 2004, APU American International School offers a college-preparatory education from Pre-K to Grade 12, following an American-standard curriculum. English is the primary language of instruction. As a member of the "World Schools" system, APU provides opportunities for students to learn up to 7 different languages based on their interests, promoting a multilingual and multicultural environment.`
      },
      {
        type: undefined,
        subheading: "Teaching approach of the school",
        data: `The school educates the whole student—mind, body, and spirit—through a dynamic American educational program. It emphasizes high standards of excellence, a caring learning environment, and leadership development in a global context.`
      }
    ]
  },
  {
    label: "Nationalities",
    icon: <Users size={20} />,
    content: [
      { type: undefined, subheading: "Number of students", data: "300" },
      { type: undefined, subheading: "Number of nationalities represented in the school", data: "16" },
      { type: undefined, subheading: "Most common nationality", data: "Vietnamese, Korean, American" }
    ]
  },
  {
    label: "Languages",
    icon: <Languages size={20} />,
    content: [
      { type: undefined, subheading: "Native English speaking teachers", data: "Yes" },
      { type: undefined, subheading: "Language support for students not fluent in English", data: "English Language Development (ELD)" },
      {
        type: "list",
        subheading: "Additional language classes offered by the school",
        data: ["German", "French", "Korean", "Japanese", "Mandarin", "Spanish", "Vietnamese"]
      }
    ]
  },
  {
    label: "Classroom",
    icon: <Pencil size={20} />,
    content: [
      { type: undefined, subheading: "Max. number of students per class", data: "20" },
      { type: undefined, subheading: "Average number of students per class", data: "15" },
      { type: undefined, subheading: "Does the school employ teaching assistants?", data: "Yes" },
      {
        type: undefined,
        subheading: "Use of technology in the classroom",
        data: "Smart classrooms, high-tech workstations, interactive systems, soundproof rooms, project-based team desks."
      },
      {
        type: undefined,
        subheading: "Is the school ready to use virtual classrooms when needed?",
        data: "Yes"
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
        data: "MAP testing is used to benchmark student performance internationally and tailor instruction to strengths and weaknesses."
      },
      { type: undefined, subheading: "Do teachers assign homework to their students?", data: "Yes" },
      { type: undefined, subheading: "Percentage of students who pursue further education post-graduation", data: "100%" }
    ]
  },
  {
    label: "Student support",
    icon: <HeartPulse size={20} />,
    content: [
      {
        type: undefined,
        subheading: "Dedicated staff/programs for students with special learning needs",
        data: "Yes – teachers are trained to work with students with learning disabilities or other needs."
      }
    ]
  },
  {
    label: "Admissions",
    icon: <FileText size={20} />,
    content: [
      { type: undefined, subheading: "Entry evaluation for students", data: "Yes" },
      { type: undefined, subheading: "Brief description of entry evaluation required", data: "English Placement Test" },
      { type: undefined, subheading: "Deadline for registration (new academic year)", data: "Open enrollment throughout the year" },
      { type: undefined, subheading: "Students can join after academic year begins", data: "Yes" }
    ]
  },
  {
    label: "School Day",
    icon: <Clock size={20} />,
    content: [
      { type: undefined, subheading: "School start time", data: "8:00" },
      { type: undefined, subheading: "School finish time", data: "Elementary: 15:30; High School: 15:15" },
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
        data: [
          "Festival and holiday celebrations",
          "Online sharing with other schools",
          "Community-based games",
          "Student Council",
          "Volunteering and advisory time",
          "Extra-curricular club system"
        ]
      },
      {
        type: "list",
        subheading: "Sports activities included",
        data: ["Physical education", "Basketball", "Soccer"]
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
        data: ["Library", "Science Labs"]
      },
      {
        type: "list",
        subheading: "Sports facilities at the school",
        data: ["Indoor gymnasium", "Outdoor basketball court", "Weight room"]
      }
    ]
  },
  {
    label: "Boarding",
    icon: <Bed size={20} />,
    content: [
      {
        type: undefined,
        subheading: "Grades/ages available for boarding",
        data: "From Grade 6"
      },
      {
        type: undefined,
        subheading: "Boarding facilities at the school",
        data: "Yes – on a safe and secure campus for both local and international students."
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