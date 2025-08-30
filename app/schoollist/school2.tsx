
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

export default function School2() {
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
                                            <img src="/images/school logos/EIS_Logo_footer.png" alt="no image" />
                                        </a>
                                    </div>
                                    <h1 className="text-l font-semibold">
                                        European International School Ho Chi Minh City
                                    </h1>
                                </div>

                                <div style={{ marginBottom: "1rem", overflow: "auto", height: "20dvh" }} className="text-sm">
                                    <div style={{ fontWeight: "bold", marginBottom: "1rem" }}>Introduction</div>
                                    <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                                        EIS offers a unique world class learning environment for children from 2 to 18 years of age, and is fully accredited by the Council of International 
                                        Schools (CIS). EIS is also authorised by the International Baccalaureate (IB) Organisation as an IB World School.
                                    </p>
                                </div>

                                <div className="flex flex-row gap-1 text-2xl mb-3" style={{ borderBottom: "1px solid gray", paddingTop: "1rem", paddingBottom: "1rem" }}>
                                    <Link href="https://www.eishcmc.com/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/globe_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.youtube.com/channel/UCSqpke-i_oVYfV00RsuNRPQ" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/youtube_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.facebook.com/EISHCMC" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/facebook_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.linkedin.com/school/eishcmc/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/linkedin_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.instagram.com/eishochiminhcity/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/instagram_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                </div>

                                {/* Info Grid */}
                                <div className="grid grid-cols-1 gap-x-10 text-sm">
                                    <InfoRow label="Curriculum" value="IB, AP, and American" isLink />
                                    <InfoRow label="Leaving qualifications" value="IB Diploma" isLink />
                                    <InfoRow label="Age range" value="range: (2 to 18)" />
                                    <InfoRow label="Tuition" value="291,200,000 ₫ to: 817,900,000 ₫" />
                                    <InfoRow label="Address" value="730 F-G-K Le Van Mien Thao Dien, District 2 Ho Chi Minh City Vietnam" />
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
                        {/* <video src="/videos/Saigon Ed Guide landscape.mp4" style={{ width: "100%", margin: "auto", aspectRatio: "16/9" }} controls></video>
                         */}
                        <iframe
                            src="https://www.youtube.com/embed/FcjiOKa5hYs"
                            title="Vercel Ship Keynote: Introducing the frontend cloud"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            style={{ width: "100%", margin: "auto", aspectRatio: "16/9" }}
                        // allowFullScreen
                        ></iframe>
                    </div>
                    <div className="flex-1 flex lg:flex-row flex-col lg:gap-[1dvw] gap-[1rem]">
                        <div className="w-full lg:w-1/2 overflow-hidden" id="slideheight">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7018020743573!2d106.732054!3d10.8054685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752619da6dcb7f%3A0x464037b8a79a3ee!2sEuropean%20International%20School%20HCMC!5e0!3m2!1sen!2s!4v1691833423456"
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
            { subheading: "Number of students", data: "700+" },
            { subheading: "Number of nationalities represented in the school", data: "47+" },
            { subheading: "Most common nationality", data: "Vietnamese" },
            { subheading: "Ratio of local students to international students", data: "30 Host country, 70% International" },
        ]
    },
    {
        label: "Languages",
        icon: <Languages size={20} />,
        content: [
            { subheading: "Native English speaking teachers", data: "Yes" },
            { subheading: "Language support for students not fluent in English", data: " Yes" },
            { subheading: "Additional language classes offered by the school", data: "German, French, Spanish, Vietnamese, Korean, Mandarin Chinese" },
        ]
    },
    {
        label: "Classroom",
        icon: <Pencil size={20} />,
        content: [
            { subheading: "Max. number of students per class", data: "24" },
            { subheading: "Average number of students per class", data: "22" },
            { subheading: "Does the school employ teaching assistants?", data: " Yes" },
            { subheading: "Use of technology in the classroom", data: "One-to-one Laptop program in Grades 3-12, digital projectors/interactive whiteboards, digital textbooks and newly appointed ICT technology integration coordinator." },
            { subheading: "Is the school ready to use virtual classrooms when needed? (e.g. teaching lessons online if the school is closed, e.g. during COVID-19 closures)", data: "Yes" },
            { subheading: "Do students practice religion at the school? What religion?", data: "No one religion is recognized. We are a non-denominational School with acceptance of all religions and cultures." },
        ]
    },
    {
        label: "Academics",
        icon: <GraduationCap size={20} />,
        content: [
            { subheading: "External examinations or assessments available", data: ": International School Assessment tests (ISA) have been used historically and we are moving to the UK benchmarking (GL testing). MYP E-Assessment conducted in Grade10, and IBDP final exam." },
            { subheading: "Results in these examinations", data: "Well above the world average." },
            { subheading: "Do teachers assign homework to their students?", data: "Yes" },
            { subheading: "Approximate hours of homework given", data: "Varies according to the grade, the subject, the teacher, and the individual learner." },
            { subheading: "Percentage of students who pursue further education post-graduation", data: "100%" },
        ]
    },
    {
        label: "Student support",
        icon: <Heart size={20} />,
        content: [
            { subheading: "Dedicated staff/programs for students with special learning needs", data: "Yes, we have a support team in place." },
            { subheading: "Learning support offered", data: "Learning Support Coordinator, Social and Emotional Needs Counsellor, Student Wellbeing Coordinator, University and Careers Guidance Counselor." },
            { subheading: "The school supports gifted, able and talented students", data: "We have accelerated programs for Math across all divisions. Additionally, 9th grade students are able to enroll in AP courses and starting in Middle School we differentiate in performing arts." },
            { subheading: "Student access to education psychologist", data: "Yes" },
        ]
    },
    {
        label: "Admissions",
        icon: <FileText size={20} />,
        content: [
            { subheading: "Entry evaluation for students", data: "Yes. Assessment tests for language abilities and placements" },
            { subheading: "Brief description of entry evaluation required", data: "English level test for Primary, and additional Cognitive Ability Test for Secondary. All applicants required to have an interview with head of sections." },
            { subheading: "Waiting list", data: "Yes" },
            { subheading: "Deadline for registration (new academic year)", data: "We encourage parents to apply as soon as possible." },
            { subheading: "Students can join after academic year begins", data: "We try to offer a rolling enrolment, however this cannot always be accommodated." },
        ]
    },
    {
        label: "School day",
        icon: <Clock size={20} />,
        content: [
            { subheading: "School start time", data: "7:45 A.M." },
            { subheading: "School finish time", data: "3:00 P.M." },
            { subheading: "Supervised care before/after school", data: "Yes" },
            { subheading: "School bus service available", data: "Yes" },
            { subheading: "School provided lunches", data: "Yes" },
            { subheading: "Food alternatives for special dietary needs (ie. vegan, kosher, halal etc)", data: "Yes" },
            { subheading: "Uniform required", data: "Yes" },
        ]
    },
    {
        label: "Extracurricular activities",
        icon: <Trophy size={20} />,
        content: [
            { subheading: "Extracurricular activities or clubs offered", data: "Sports, Languages, Creative activities, Social activities, Hobby Clubs, Science, Arts, Music, Filming, Dancing, Cooking, Model United Nations, Global Issues Network etc." },
            { subheading: "Sports activities included", data: "•	Sports activities included: A full range of physical activities is provided for students at all age groups, including: swimming, volleyball, football/soccer, basketball, badminton, tennis etc." },
            { subheading: "Sports teams or sport competitions available for students", data: "Yes" },
        ]
    },
    {
        label: "Facilities",
        icon: <Building2 size={20} />,
        content: [
            { subheading: "Facilities at the school", data: "Artificial turf sports fields for soccer, basketball courts, volleyball courts, badminton court, tennis courts, 25-meter swimming pool, general roof-top sports field." },
        ]
    },
];
// { label: "", icon: , content: "Languages content goes here." },
// { label: "Classroom", icon: <Pencil size={20} />, content: "Classroom content goes here." },
// { label: "Academics", icon: <GraduationCap size={20} />, content: "Academics content goes here." },
// { label: "Student support", icon: <Heart size={20} />, content: "Student support content goes here." },
// { label: "Admissions", icon: , content: "Admissions content goes here." },
// { label: "School day", icon: <Clock size={20} />, content: "School day content goes here." },
// { label: "Extracurricular activities", icon: , content: "Extracurricular activities content goes here." },
// { label: "Facilities", icon: <Building2 size={20} />, content: "Facilities content goes here." },
// { label: "About the school", icon: <Info size={20} />, content: "About the school content goes here." },
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
                accordionData[index].content.map((item, idx) => {
                    return <div key={"" + index + "_" + idx}>
                        <div className="font-semibold text-black-700 mb-1">{item.subheading}</div>
                        <div className="text-black-800">{item.data}</div>
                    </div>
                })
            }
            {/* <div>
                <div className="font-semibold text-black-700 mb-1">Number of students</div>
                <div className="text-black-800">Peak enrollment 775</div>
            </div>
            <div>
                <div className="font-semibold text-black-700 mb-1">Number of nationalities represented in the school</div>
                <div className="text-black-800">Around 50</div>
            </div>
            <div>
                <div className="font-semibold text-black-700 mb-1">Most common nationality</div>
                <div className="text-black-800">
                    The Western International School of Shanghai (WISS) is a truly diverse community with students representing around 50 different nationalities and with no majority population.
                </div>
            </div> */}
        </div>
    )
}