
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

export default function School17() {
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
                                            <img src="/images/school logos/Fosco international school logo.png" alt="no image" />
                                        </a>
                                    </div>
                                    <h1 className="text-l font-semibold">
                                        Fosco International School
                                    </h1>
                                </div>

                                <div style={{ marginBottom: "1rem", overflow: "auto", height: "20dvh" }} className="text-sm">
                                    <div style={{ fontWeight: "bold", marginBottom: "1rem" }}>Introduction</div>
                                    <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                                        Fosco International School is broken up into a Preschool and a Primary School, which cater to a range of nationalities from 
                                        18 months all the way up to 11 years of age (Nursery to Grade 5). FIS offers imported textbooks and online resources from 
                                        the United States which are focused on the American based Curriculum and its Core Standards.
                                    </p>
                                </div>

                                <div className="flex flex-row gap-1 text-2xl mb-3" style={{ borderBottom: "1px solid gray", paddingTop: "1rem", paddingBottom: "1rem" }}>
                                    <Link href="https://en.fis.edu.vn/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/globe_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.youtube.com/channel/UCMGVa-yJ6XdRjEjMSoDUjiA" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/youtube_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href=" https://www.facebook.com/p/FOSCO-International-School-100057105294628/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/facebook_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                </div>

                                {/* Info Grid */}
                                <div className="grid grid-cols-1 gap-x-10 text-sm">
                                    <InfoRow label="Curriculum" value="American" isLink />
                                    <InfoRow label="Leaving qualifications" value="N/A" isLink />
                                    <InfoRow label="Age range" value="range: (2 to 11)" />
                                    <InfoRow label="Tuition" value="141,312,000 ₫ to 292,245,000 ₫" />
                                    <InfoRow label="Address" value="40 Ba Huyen Thanh Quan St., Ward 6, Dist. 3, HCMC, Vietnam" />
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
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.572573674414!2d106.68564731526062!3d10.777851779326682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f25342e41cf%3A0xfbad1b250c3bfb4f!2sFOSCO%20International%20School!5e0!3m2!1sen!2s!4v1691045868497!5m2!1sen!2s"
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
        data: "Fosco International School is divided into Preschool and Primary School, serving children aged 18 months to 11 years (Nursery to Grade 5). The school uses imported textbooks and online resources from the U.S., focusing on the American-based Curriculum and its Core Standards.",
      },
      {
        subheading: "Teaching approach of the school",
        data: "FIS emphasizes learner-centered education, celebrating individual talents and abilities, nurturing a safe, fair, and caring environment to develop confident, responsible, and self-disciplined students.",
      },
    ],
  },
  {
    label: "Nationalities",
    icon: <Users size={20} />,
    content: [
      { subheading: "Number of students", data: "210" },
    ],
  },
  {
    label: "Languages",
    icon: <Languages size={20} />,
    content: [
      { subheading: "Native English speaking teachers", data: "Yes" },
      {
        subheading: "Language support for students not fluent in English",
        data: "An effective English (ESL) Support Program is available to non-native speakers to support social and academic development.",
      },
      { subheading: "Additional language classes offered by the school", data: "Vietnamese" },
    ],
  },
  {
    label: "Classroom",
    icon: <School size={20} />,
    content: [
      { subheading: "Does the school employ teaching assistants?", data: "Yes" },
      {
        subheading: "Use of technology in the classroom",
        data: "Classrooms are equipped with multimedia projection screens; teachers regularly use interactive whiteboard technology."
      },
    ],
  },
  {
    label: "Academics",
    icon: <BookOpen size={20} />,
    content: [
      { subheading: "Do teachers assign homework to their students?", data: "Yes" },
      {
        subheading: "Approximate hours of homework given",
        data: "Recommended minimum of 30 minutes of homework each school day for Elementary students.",
      },
    ],
  },
  {
    label: "Admissions",
    icon: <ClipboardCheck size={20} />,
    content: [
      { subheading: "Entry evaluation for students", data: "Assessment exams" },
      {
        subheading: "Brief description of entry evaluation required",
        data: "Language Arts and Math tests, Speaking Test, Parent Interview, Review with Lead Teacher.",
      },
    ],
  },
  {
    label: "School Day",
    icon: <Clock size={20} />,
    content: [
      { subheading: "School start time", data: "8:30 AM" },
      { subheading: "School finish time", data: "3:15 PM" },
      { subheading: "School bus service available", data: "Yes" },
      { subheading: "School provided lunches", data: "Yes" },
      { subheading: "Uniform required", data: "Yes" },
    ],
  },
  {
    label: "Extracurricular Activities",
    icon: <Trophy size={20} />,
    content: [
      { subheading: "Extracurricular activities or clubs offered", data: "Many clubs and activities available." },
      { subheading: "Sports activities included", data: "Physical education" },
    ],
  },
  {
    label: "Facilities",
    icon: <Building size={20} />,
    content: [
      {
        subheading: "Sports facilities at the school",
        data: "Multiple play areas, large and small swimming pools, playground, multipurpose sports court.",
      },
    ],
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