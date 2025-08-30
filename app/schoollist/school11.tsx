
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

export default function School11() {
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
                                    <div className="w-[10dvw] rounded">
                                        <a href="#">
                                            <img src="/images/school logos/USA Vietnam Talent International School.png" alt="no image" />
                                        </a>
                                    </div>
                                    <h1 className="text-l font-semibold">
                                        US Vietnam Talent International School
                                    </h1>
                                </div>

                                {/* <div style={{ marginBottom: "1rem", overflow: "auto", height: "20dvh" }} className="text-sm">
                                    <div style={{ fontWeight: "bold", marginBottom: "1rem" }}>Introduction</div>
                                    <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                                        Qualities and characteristics best defining the school:  At BVIS HCMC, we welcome students from ages 2 to 18 years old. We provide a truly unique educational experience teaching the English National Curriculum across EYFS and Primary in 2 languages – English and Vietnamese. In Secondary we move to a more international approach preparing students to excel in their IGCSE and A level examinations. As a part of the Nord Anglia Education family of schools, our students have unique access to global collaborations with world-renowned institutions such as The Juilliard School, The Massachusetts Institute of Technology (MIT), and UNICEF.
                                    </p>
                                    <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                                        Teaching approach of the school: We will develop your child into a truly global citizen, while ensuring they maintain a grounding in their Vietnamese culture. Our unique personalised approach to learning means your child will achieve more than they ever thought possible and develop their own sense of individual identity.
                                    </p>
                                </div> */}

                                <div className="flex flex-row gap-1 text-2xl mb-3" style={{ borderBottom: "1px solid gray", paddingTop: "1rem", paddingBottom: "1rem" }}>
                                    <Link href="https://utschool.edu.vn/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/globe_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.youtube.com/channel/UCVJD61nKHWr3ZpkG2M9K4Ng" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/youtube_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.facebook.com/NamMyUTS/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/facebook_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.linkedin.com/company/us-vietnam-talent-international-school/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/linkedin_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.instagram.com/uts.hcm/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/instagram_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                </div>

                                {/* Info Grid */}
                                <div className="grid grid-cols-1 gap-x-10 text-sm">
                                    <InfoRow label="Curriculum" value="Vietnamese and British" isLink />
                                    <InfoRow label="Leaving qualifications" value="?" isLink />
                                    <InfoRow label="Age range" value="range: (3 to 18)" />
                                    <InfoRow label="Tuition" value="141,200,000 ₫ to 428,000,000 ₫" />
                                    <InfoRow label="Address" value="UTS Van Lang Complex: Ages 3 to 18 Address: 69/68 Dang Thuy Tram, str., ward 13, Binh Thanh dist., HCMC, Vietnam" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col">
                        {/* <div style={{ flex: "1" }}>
                            <AccordionTable />
                        </div> */}
                    </div>
                </div>
                <div className="flex flex-col flex-1 gap-[1rem]" id="container">
                    <div className="">
                        {/* <video src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto", aspectRatio: "16/9" }} controls></video> */}
                        <iframe
                            src="https://www.youtube.com/embed/EpGvFiKIHSc"
                            title="Vercel Ship Keynote: Introducing the frontend cloud"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            style={{ width: "100%", margin: "auto", aspectRatio: "16/9" }}
                        // allowFullScreen
                        ></iframe>
                    </div>
                    <div className="flex-1 flex lg:flex-row flex-col lg:gap-[1dvw] gap-[1rem]">
                        <div className="w-full lg:w-1/2 overflow-hidden" id="slideheight">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.662604264789!2d106.69836277578396!3d10.82805865853683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175294b21439e41%3A0x2b5b189110362da6!2sUS%20Vietnam%20Talent%20International%20School%20(UTS)!5e0!3m2!1sen!2s!4v1691842030045"
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
                data: "SNA stands out as 1 of only 6 IB Continuum Schools in Vietnam, offering programs from Grade 1 to Grade 12. We emphasize student-centered learning and holistic development, fostering well-rounded individuals. Our graduates consistently gain acceptance to top universities worldwide, showcasing the strength of our academic programs.",
                type: undefined
            },
            {
                subheading: "Teaching approach of the school",
                data: "SNA adopts a student-centered teaching approach that prioritizes active engagement and critical thinking. Our methods include inquiry-based learning, project-based learning, and the IB's Approaches to Teaching and Learning, which nurture creativity, collaboration, and lifelong learning skills.",
                type: undefined
            },
        ]
    },
    {
        label: "Nationalities",
        icon: <Flag size={20} />,
        content: [
            { subheading: "Number of students", data: "500", type: undefined },
            { subheading: "Number of nationalities represented in the school", data: "5", type: undefined },
            { subheading: "Most common nationality", data: "Vietnamese & Korean", type: undefined },
            { subheading: "Ratio of local students to international students", data: "International", type: undefined },
        ]
    },
    {
        label: "Languages",
        icon: <Languages size={20} />,
        content: [
            { subheading: "Native English speaking teachers", data: "Yes", type: undefined },
            {
                subheading: "Language support for students not fluent in English",
                data: "At SNA we provide an opportunity for language learning and critical study in English, Vietnamese, and Korean, as well as supporting Independent Language studies for students from other mother tongue backgrounds.",
                type: undefined
            },
            {
                subheading: "Additional language classes offered by the school",
                data: "Korean, Vietnamese, French, Spanish, Mandarin",
                type: undefined
            },
        ]
    },
    {
        label: "Classroom",
        icon: <Pencil size={20} />,
        content: [
            { subheading: "Max. number of students per class", data: "22", type: undefined },
            { subheading: "Average number of students per class", data: "22", type: undefined },
            { subheading: "Does the school employ teaching assistants?", data: "Yes", type: undefined },
            {
                subheading: "Use of technology in the classroom",
                data: "We integrate cutting-edge technology into our classrooms to enhance learning experiences. From 3D laser printer and digital tools to subject-specific software and online resources, students gain hands-on skills that prepare them for a tech-driven world.",
                type: undefined
            },
            {
                subheading: "Is the school ready to use virtual classrooms when needed?",
                data: "SNA is equipped with advanced virtual classroom technologies to ensure uninterrupted learning. In emergencies, such as COVID-19 quarantines, we offer online lessons through video conferencing and digital platforms, maintaining academic excellence and student engagement.",
                type: undefined
            },
            {
                subheading: "Do students practice religion at the school? What religion?",
                data: "SNA fosters a respectful and inclusive environment where students from all backgrounds feel welcome. While the school does not promote specific religious practices, we encourage open-mindedness and understanding of diverse beliefs within our global community.",
                type: undefined
            },
            {
                subheading: "How does the school accommodate non-religious students or students of a different religion?",
                data: "We provide every accommodation for students who have religious / non-religious needs (prayer room, accommodated food options)",
                type: undefined
            },
        ]
    },
    {
        label: "Academics",
        icon: <GraduationCap size={20} />,
        content: [
            {
                subheading: "External examinations or assessments available",
                data: "IB Diploma Programme exams, WIDA test, MAP test",
                type: undefined
            },
            {
                subheading: "Results in these examinations",
                data: "The Class of 2024 achieved an impressive average IB score of 34, surpassing the global average of 30.",
                type: undefined
            },
            {
                subheading: "Do teachers assign homework to their students?",
                data: "Yes, teachers assign homework through the ManageBac platform.",
                type: undefined
            },
            {
                subheading: "Approximate hours of homework given",
                data: "Homework varies by grade level. Grades 1 & 2 students are encouraged to read for a minimum of 15 minutes per language daily. The workload balances academic growth and personal well-being.",
                type: undefined
            },
            {
                subheading: "Percentage of students who pursue further education post-graduation",
                data: "100% of our graduates go on to attend higher educational institutions, many earning placements in top universities worldwide.",
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
                data: "Yes. SNA provides comprehensive inclusion support through IEPs and collaboration with external agencies, creating a holistic and inclusive environment.",
                type: undefined
            },
            {
                subheading: "Learning support offered",
                data: "All specialist teachers work within mainstream classrooms and provide strategic pull-out support when necessary.",
                type: undefined
            },
            {
                subheading: "The school supports gifted, able and talented students",
                data: "Yes. SNA offers differentiated instruction, independent projects, advanced programs like the IB Diploma, and participation in competitions.",
                type: undefined
            },
            {
                subheading: "Student access to education psychologist",
                data: "Yes. The School Counselling and Wellbeing Team supports students' emotional and mental wellbeing, offering mentorship and resilience strategies in a confidential setting.",
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
                data: "Yes. SNA conducts a comprehensive screening assessment prior to admissions.",
                type: undefined
            },
            {
                subheading: "Brief description of entry evaluation required",
                data: "Includes a 1-on-1 interview, WIDA assessment (four English skills), and either Math or Language assessment.",
                type: undefined
            },
            {
                subheading: "Waiting list",
                data: "No",
                type: undefined
            },
            {
                subheading: "Deadline for registration (new academic year)",
                data: "Parents are encouraged to apply before August each year, though applications are accepted year-round case-by-case.",
                type: undefined
            },
            {
                subheading: "Students can join after academic year begins",
                data: "Yes. Mid-year admissions are evaluated individually.",
                type: undefined
            },
        ]
    },
    {
        label: "School day",
        icon: <Clock size={20} />,
        content: [
            {
                subheading: "School start time",
                data: "Breakfast begins at 7:00 a.m., transition at 7:50 a.m., and classes start at 8:00 a.m.",
                type: undefined
            },
            {
                subheading: "School finish time",
                data: "3:15 p.m. for regular students; 4:15 p.m. for after-school participants.",
                type: undefined
            },
            {
                subheading: "Supervised care before/after school",
                data: "Yes. Supervision is provided during all time slots of the school day.",
                type: undefined
            },
            { subheading: "School bus service available", data: "Yes", type: undefined },
            { subheading: "School provided lunches", data: "Yes", type: undefined },
            {
                subheading: "Food alternatives for special dietary needs",
                data: "Yes. The school caters to dietary needs with alternative food options.",
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
                data: "Over 50 co-curricular clubs including Chess, Debate, MC Club, Guitar, Basketball, Volleyball, Photography, and Drama.",
                type: undefined
            },
            {
                subheading: "Sports activities included",
                type: "list",
                data: ["Swimming", "Football", "Basketball", "Volleyball", "Running", "Badminton"]
            },
            {
                subheading: "Sports teams or sport competitions available for students",
                data: "Yes. SNA has competitive teams that have won 1st and 3rd place in various tournaments.",
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
                    "Two libraries (MYP and PYP)",
                    "Two music rooms for each program",
                    "Computer rooms",
                    "Physics lab",
                    "Biology-chemistry lab",
                    "Auditorium",
                    "3D golf simulation room",
                    "Dance room"
                ]
            },
            {
                subheading: "Sports facilities at the school",
                data: "Same as academic facilities including gyms and sports-specific spaces like a 3D golf room and dance room.",
                type: undefined
            },
        ]
    },
    {
        label: "Boarding",
        icon: <Bed size={20} />,
        content: [
            {
                subheading: "Grades/ages available for boarding",
                data: "Flexible boarding options are available for students across various grades and age groups.",
                type: undefined
            },
            {
                subheading: "Boarding facilities at the school",
                data: "Separate rooms for boys and girls, lounge and kitchen areas, laundry room, excursions, academic support, activities, medical care, and boarding parents for guidance.",
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