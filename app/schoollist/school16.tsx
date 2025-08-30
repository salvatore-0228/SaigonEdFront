
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

export default function School16() {
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
                                            <img src="/images/school logos/SNA marionapolis school logo.png" alt="no image" />
                                        </a>
                                    </div>
                                    <h1 className="text-l font-semibold">
                                        SNA Marianapolis School
                                    </h1>
                                </div>

                                <div style={{ marginBottom: "1rem", overflow: "auto", height: "20dvh" }} className="text-sm">
                                    <div style={{ fontWeight: "bold", marginBottom: "1rem" }}>Introduction</div>
                                    <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                                        Academic Excellence, Leadership, Humanity, Content, Compassion, and Integrity.
                                    </p>
                                </div>

                                <div className="flex flex-row gap-1 text-2xl mb-3" style={{ borderBottom: "1px solid gray", paddingTop: "1rem", paddingBottom: "1rem" }}>
                                    <Link href="https://snamarianapolis.edu.vn/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/globe_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.youtube.com/c/SNAMarianapolisInternationalSchool" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/youtube_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.facebook.com/snamarianapolis" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/facebook_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.linkedin.com/company/sna-marianapolis-international-school/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/linkedin_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href=" https://www.instagram.com/snamarianapolis/" passHref legacyBehavior>
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
                                    <InfoRow label="Leaving qualifications" value="AP and SAT" isLink />
                                    <InfoRow label="Age range" value="range: (5 to 18)" />
                                    <InfoRow label="Tuition" value="238,000,000 ₫ to 412,650,000 ₫" />
                                    <InfoRow label="Address" value="397, Street 30/4, Quyet Thang Ward, Bien Hoa City, Dong Nai Province, Vietnam" />
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
                            src="https://www.youtube.com/embed/9JgKBbQ7PKM"
                            title="Vercel Ship Keynote: Introducing the frontend cloud"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            style={{ width: "100%", margin: "auto", aspectRatio: "16/9", backgroundColor: "gray" }}
                        // allowFullScreen
                        ></iframe>
                    </div>
                    <div className="flex-1 flex lg:flex-row flex-col lg:gap-[1dvw] gap-[1rem]">
                        <div className="w-full lg:w-1/2 overflow-hidden" id="slideheight">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.345273380109!2d106.81644991525835!3d10.947340599999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174df9b982e0e2d%3A0x2a4893398f660f6d!2sSNA%20Marianapolis%20International%20School%20-%20Bien%20Hoa%20Campus!5e0!3m2!1sen!2s!4v1691000000000!5m2!1sen!2s"
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
        data: "Academic Excellence, Leadership, Humanity, Content, Compassion, and Integrity.",
      },
      {
        subheading: "Teaching approach of the school",
        data: "Habits of Mind, Student-centered, Project-based learning, Inquiry-Based Learning, Technology and 21st Century Skills, etc.",
      },
    ],
  },
  {
    label: "Nationalities",
    icon: <Users size={20} />,
    content: [
      { subheading: "Number of students", data: "555" },
      { subheading: "Number of nationalities represented in the school", data: "10" },
      { subheading: "Most common nationality", data: "Vietnamese" },
      { subheading: "Ratio of local students to international students", data: "1:23" },
    ],
  },
  {
    label: "Languages",
    icon: <Languages size={20} />,
    content: [
      { subheading: "Native English speaking teachers", data: "English" },
      { subheading: "Language support for students not fluent in English", data: "Yes, English Additional Language (EAL) classes from Grade 3–11." },
      { subheading: "Additional language classes offered by the school", data: "Vietnamese" },
    ],
  },
  {
    label: "Classroom",
    icon: <School size={20} />,
    content: [
      { subheading: "Max. number of students per class", data: "22" },
      { subheading: "Average number of students per class", data: "18" },
      { subheading: "Does the school employ teaching assistants?", data: "Yes, to help students with learning and self-study." },
      {
        subheading: "Use of technology in the classroom",
        data: "Teachers use Razkids, Kahoot, Padlet, Quizziz, Quizlet, Microsoft Suite, graphic design software, and appropriate AI tools for projects and assignments."
      },
      { subheading: "Is the school ready to use virtual classrooms when needed?", data: "Yes" },
      { subheading: "Do students practice religion at the school?", data: "No" },
    ],
  },
  {
    label: "Academics",
    icon: <BookOpen size={20} />,
    content: [
      { subheading: "External examinations or assessments available", data: "WIDA, AP, SAT" },
      { subheading: "Results in these examinations", data: "Above average" },
      { subheading: "Do teachers assign homework to their students?", data: "Yes, varies by grade and subject." },
      {
        subheading: "Approximate hours of homework given",
        data: "Homework assignments are considerate of students’ needs and workload, usually requiring 1–2 extra hours per week for projects or rehearsals."
      },
      { subheading: "Percentage of students who pursue further education post-graduation", data: "100%" },
    ],
  },
  {
    label: "Student support",
    icon: <HeartPulse size={20} />,
    content: [
      {
        subheading: "Dedicated staff/programs for students with special learning needs",
        data: "Coordinators oversee individualized education for SEN students."
      },
      {
        subheading: "Learning support offered",
        data: "Support includes addressing emotional, mental, speech, and language needs, with collaboration from EAL programs."
      },
      {
        subheading: "The school supports gifted, able and talented students",
        data: "Gifted students receive advanced tasks and afterschool coaching."
      },
      { subheading: "Student access to education psychologist", data: "Yes" },
    ],
  },
  {
    label: "Admissions",
    icon: <ClipboardCheck size={20} />,
    content: [
      { subheading: "Entry evaluation for students", data: "Yes" },
      {
        subheading: "Brief description of entry evaluation required",
        data: "Includes Math test, WIDA test, and an interview."
      },
      { subheading: "Waiting list", data: "In some grade levels" },
      { subheading: "Deadline for registration (new academic year)", data: "Rolling admissions throughout the year." },
      { subheading: "Students can join after academic year begins", data: "Yes" },
    ],
  },
  {
    label: "School Day",
    icon: <Clock size={20} />,
    content: [
      { subheading: "School start time", data: "8:00 AM" },
      { subheading: "School finish time", data: "3:30 PM" },
      {
        subheading: "Supervised care before/after school",
        data: "Supervision available from 7:00–8:00 AM and 3:30–4:00 PM; after-school activities supervised by staff."
      },
      { subheading: "School bus service available", data: "Yes" },
      { subheading: "School provided lunches", data: "Yes" },
      { subheading: "Food alternatives for special dietary needs", data: "Western, Asian and Vegetarian options every day." },
      { subheading: "Uniform required", data: "Yes" },
    ],
  },
  {
    label: "Extracurricular Activities",
    icon: <Trophy size={20} />,
    content: [
      {
        subheading: "Extracurricular activities or clubs offered",
        data: "English Club, Public Speaking, Coding, French, STEM & Robotics, Environmental Club, Chess, Journalism, SAT Prep, Arts & Crafts, Choir, Lego, Keyboard, Ukulele, Handwriting, Film Study, Digital Photography, Basketball, Yoga, Dancing, Soccer, Aerobics, Swimming, Cheerleading."
      },
      {
        subheading: "Sports activities included",
        data: "Basketball, Yoga, Dancing, Soccer, Swimming, Badminton, Volleyball."
      },
      {
        subheading: "Sports teams or sport competitions available for students",
        data: "Yes, varsity teams and various internal/external competitions."
      },
    ],
  },
  {
    label: "Facilities",
    icon: <Building size={20} />,
    content: [
      {
        subheading: "Facilities at the school",
        data: "Library, Theater-style Auditorium, Science Labs, Music Room, Dance Room, Playground, Canteen."
      },
      {
        subheading: "Sports facilities at the school",
        data: "Gymnasium, Arena, Swimming pool, Soccer field, 100m Running Track."
      },
    ],
  },
  {
    label: "Boarding",
    icon: <Home size={20} />,
    content: [
      { subheading: "Grades/ages available for boarding", data: "Grade 6–12" },
      {
        subheading: "Boarding facilities at the school",
        data: "Well-furnished bedrooms with bunk beds, laundry rooms, common room with tables, couches, and games for relaxation and study."
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