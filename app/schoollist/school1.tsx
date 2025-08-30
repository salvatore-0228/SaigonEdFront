
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

export default function School1() {
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
                                            <img src="/images/school logos/4956535711947927384.jpg" alt="no image" />
                                        </a>
                                    </div>
                                    <h1 className="text-l font-semibold">
                                        Saigon South International School
                                    </h1>
                                </div>

                                <div style={{ marginBottom: "1rem", overflow: "auto", height: "20dvh" }} className="text-sm">
                                    <div style={{ fontWeight: "bold", marginBottom: "1rem" }}>Introduction</div>
                                    <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                                        At SSIS, every resource fuels student growth. As a not-for-profit school, our focus is on what 
                                        matters most—creating a community where students collaborate, grow, and belong.
                                    </p>
                                </div>

                                <div className="flex flex-row gap-1 text-2xl mb-3" style={{ borderBottom: "1px solid gray", paddingTop: "1rem", paddingBottom: "1rem" }}>
                                    <Link href="https://www.youtube.com/@SSISOfficial" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/youtube_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.facebook.com/Saigon.South/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/facebook_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.instagram.com/saigonsouthinternationalschool/" passHref legacyBehavior>
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
                                    <InfoRow label="Leaving qualifications" value="IB Diploma, AP, SAT, and PSAT" isLink />
                                    <InfoRow label="Age range" value="range: (3 to 18)" />
                                    <InfoRow label="Tuition" value="509,800,000 to: 882,200,000" />
                                    <InfoRow label="Address" value="78 Nguyen Duc Canh Tan Phong Ward, District 7 Ho Chi Minh City, Vietnam" />
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
                        {/* <video src="/videos/Saigon Ed Guide landscape.mp4" controls></video> */}
                        <iframe
                            src="https://www.youtube.com/embed/neJihcdy98A"
                            title="Vercel Ship Keynote: Introducing the frontend cloud"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            style={{ width: "100%", aspectRatio: "16/9" }}
                            // allowFullScreen
                        ></iframe>
                    </div>
                    <div className="flex-1 flex lg:flex-row flex-col lg:gap-[1dvw] gap-[1rem]">
                        <div className="w-full lg:w-1/2 overflow-hidden" id="slideheight">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1023987690913!2d106.7062042!3d10.7222995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fed28b765b7%3A0xd2efe72b1ba82b6f!2sSaigon%20South%20International%20School!5e0!3m2!1sen!2s!4v1691832212345"
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
            { subheading: "Number of students", data: "1,400+" },
            { subheading: "Number of nationalities represented in the school", data: "45" },
            { subheading: "Most common nationality", data: "Vietnamese" },
            { subheading: "Ratio of local students to international students", data: "1:3" },
        ]
    },
    {
        label: "Languages",
        icon: <Languages size={20} />,
        content: [
            { subheading: "Native English speaking teachers", data: "Yes" },
            { subheading: "Language support for students not fluent in English", data: " Yes, English Additional Language (EAL) classes are offered in Kindergarten through grade 10." },
            { subheading: "Most common nationality", data: "Vietnamese" },
            { subheading: "Additional language classes offered by the school", data: "Mandarin" },
        ]
    },
    {
        label: "Classroom",
        icon: <Pencil size={20} />,
        content: [
            { subheading: "Max. number of students per class", data: "20" },
            { subheading: "Does the school employ teaching assistants?", data: " Yes in Elementary School." },
            { subheading: "Average number of students per class", data: "20" },
            { subheading: "Use of technology in the classroom", data: "We have a 1:1 iPad program for grades 2 and 3 and 1:1 laptop programs for grades 4-12. Additionally, there are iPad carts in classrooms for EC-grade 1." },
            { subheading: "Is the school ready to use virtual classrooms when needed? (e.g. teaching lessons online if the school is closed, e.g. during COVID-19 closures)", data: "Yes" },
            { subheading: "Do students practice religion at the school? What religion?", data: "No" },
        ]
    },
    {
        label: "Academics",
        icon: <GraduationCap size={20} />,
        content: [
            { subheading: "External examinations or assessments available", data: "IBDP, AP, SAT, PSAT, CTP" },
            { subheading: "Results in these examinations", data: "Well above average." },
            { subheading: "Do teachers assign homework to their students?", data: "Yes" },
            { subheading: "Approximate hours of homework given", data: "For Elementary school, 20-30 minutes and for Middle and High school, 45 minutes or more a night." },
            { subheading: "Percentage of students who pursue further education post-graduation", data: "99%. Some students take gap years or have compulsory military service." },
        ]
    },
    {
        label: "Student support",
        icon: <Heart size={20} />,
        content: [
            { subheading: "Dedicated staff/programs for students with special learning needs", data: "We have learning support departments in all divisions." },
            { subheading: "Learning support offered", data: "Short and long-term interventions." },
            { subheading: "The school supports gifted, able and talented students", data: "We have accelerated programs for Math across all divisions. Additionally, 9th grade students are able to enroll in AP courses and starting in Middle School we differentiate in performing arts." },
            { subheading: "Student access to education psychologist", data: "Yes" },
        ]
    },
    {
        label: "Admissions",
        icon: <FileText size={20} />,
        content: [
            { subheading: "Entry evaluation for students", data: "There is a group observation for EC-KG, a 1:1 assessment for grade 1 and a standardized assessment for grades 2-12." },
            { subheading: "Brief description of entry evaluation required", data: "We look at Math, English, and writing abilities." },
            { subheading: "Waiting list", data: "In some grades" },
            { subheading: "Deadline for registration (new academic year)", data: "We have rolling admissions so there is no deadline." },
            { subheading: "Students can join after academic year begins", data: "Yes" },
        ]
    },
    {
        label: "School day",
        icon: <Clock size={20} />,
        content: [
            { subheading: "School start time", data: "8 am" },
            { subheading: "School finish time", data: "3 pm" },
            { subheading: "Supervised care before/after school", data: "No, although you can participate in afterschool activities" },
            { subheading: "School bus service available", data: "Yes, servicing Districts 1, 2, 3, 4, 7, 8, 10, 11, Binh Thanh, Phu Nhuan, and Binh Tan." },
            { subheading: "School provided lunches", data: "There is a cafeteria and lunches can be purchased." },
            { subheading: "Food alternatives for special dietary needs (ie. vegan, kosher, halal etc)", data: "We have Western, Asian and Vegetarian options every day." },
            { subheading: "Uniform required", data: "Yes" },
        ]
    },
    {
        label: "Extracurricular activities",
        icon: <Trophy size={20} />,
        content: [
            { subheading: "Extracurricular activities or clubs offered", data: "We have a robust sports and activities program including but not limited to, soccer, swimming, basketball, volleyball, track & field, tennis, softball, golf, cross-country, MUN, GIN drama, dance, knitting, chess, VEX robotics, and cooking." },
            { subheading: "Sports activities included", data: "Physical Education and Dance are taught in EC-12." },
            { subheading: "Sports teams or sport competitions available for students", data: "We participate in Saigon International School Athletic Conference (SISAC), Mekong River International School Association (MRISA) and South East Asia Student Activities Conference (SEASAC)." },
        ]
    },
    {
        label: "Facilities",
        icon: <Building2 size={20} />,
        content: [
            { subheading: "Facilities at the school", data: "3 libraries, 3 makerspaces, robotics lab, independent research lab, art studios, science labs, blackbox theater, auditorium, podcast room, multi-purpose spaces, and multiple breakout rooms. Upper elementary building opening in 2025." },
            { subheading: "Sports facilities at the school", data: "3 indoor basketball courts, 25 meter pool, 3 volleyball courts, 3 full grass soccer fields, 2 dance studios, outdoor multi-purpose sports court for basketball and tennis, fitness room" },
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