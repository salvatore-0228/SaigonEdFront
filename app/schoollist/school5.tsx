
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

export default function School5() {
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
                                            <img src="/images/school logos/British school.jpg" alt="no image" />
                                        </a>
                                    </div>
                                    <h1 className="text-l font-semibold">
                                        British International School Ho Chi Minh City
                                    </h1>
                                </div>

                                <div style={{ marginBottom: "1rem", overflow: "auto", height: "20dvh" }} className="text-sm">
                                    <div style={{ fontWeight: "bold", marginBottom: "1rem" }}>Introduction</div>
                                    <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                                        Established in 1997, the British International School Ho Chi Minh City has grown to become one of the largest international 
                                        schools in Vietnam, welcoming students from ages 2-18, across 55 nationalities.
                                    </p>
                                    <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                                    </p>
                                </div>

                                <div className="flex flex-row gap-1 text-2xl mb-3" style={{ borderBottom: "1px solid gray", paddingTop: "1rem", paddingBottom: "1rem" }}>
                                    <Link href="https://www.nordangliaeducation.com/bis-hcmc" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/globe_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.youtube.com/channel/UCFegKp3XmoxNW_Ab4OgVkKQ" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/youtube_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.facebook.com/BISHCMC/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/facebook_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.linkedin.com/school/british-international-school-ho-chi-minh-city/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/linkedin_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.instagram.com/bishcmc/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/instagram_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                </div>

                                {/* Info Grid */}
                                <div className="grid grid-cols-1 gap-x-10 text-sm">
                                    <InfoRow label="Curriculum" value="IB, British, and International" isLink />
                                    <InfoRow label="Leaving qualifications" value="IGCSE and IB Diploma" isLink />
                                    <InfoRow label="Age range" value="range: (2 to 18)" />
                                    <InfoRow label="Tuition" value="322,000,000 ₫ to: 956,300,000 ₫" />
                                    <InfoRow label="Address" value="Secondary Campus: Ages 11 to 18: 246 Nguyen Van Huong, Thao Dien, Thu Duc City, HCMC, Vietnam" />
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
                            src="https://www.youtube.com/embed/QPsgiyZh7D0"
                            title="Vercel Ship Keynote: Introducing the frontend cloud"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            style={{ width: "100%", margin: "auto", aspectRatio: "16/9" }}
                        // allowFullScreen
                        ></iframe>
                    </div>
                    <div className="flex-1 flex lg:flex-row flex-col lg:gap-[1dvw] gap-[1rem]">
                        <div className="w-full lg:w-1/2 overflow-hidden" id="slideheight">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1023987690913!2d106.7062042!3d10.7222995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fed28b765b7%3A0xd2efe72b1ba82b6f!2sSaigon%20South%20International%20School!5e0!3m2!1sen!2s!4v1691832212345https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.710438128708!2d106.7279187!3d10.8100782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317526221532bb79%3A0x7310917ee4edb50!2sBIS%20HCMC%2C%20Secondary%20Campus!5e0!3m2!1sen!2s!4v1691837723456"
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
            { subheading: "Number of students", data: "Over 2400" },
            { subheading: "Number of nationalities represented in the school", data: "55+" },
        ]
    },
    {
        label: "Languages",
        icon: <Languages size={20} />,
        content: [
            { subheading: "Native English speaking teachers", data: "Yes" },
            { subheading: "Language support for students not fluent in English", data: "All lessons are taught in English and we expect all children to have a reasonable standard of English when they join the school. However, we do offer support from a specialist team to those children for whom English is not their first language." },
            { subheading: "Additional language classes offered by the school", data: "French, Spanish, Mandarin, Vietnamese" },
        ]
    },
    {
        label: "Classroom",
        icon: <Pencil size={20} />,
        content: [
            { subheading: "Max. number of students per class", data: "24" },
            { subheading: "Average number of students per class", data: "18" },
            { subheading: "Does the school employ teaching assistants?", data: "Yes" },
            { subheading: "Use of technology in the classroom", data: "We operate under a “Bring Your Own Devise” system for year groups above Year 3." },
        ]
    },
    {
        label: "Academics",
        icon: <GraduationCap size={20} />,
        content: [
            { subheading: "External examinations or assessments available", data: "International General Certificate of Secondary Education (IGCSE), International Baccalaureate Diploma Programme" },
            { subheading: "Results in these examinations", data: "See our website" },
            { subheading: "Do teachers assign homework to their students?", data: "Yes" },
            { subheading: "Approximate hours of homework given", data: "This is determined by the age of the student." },
            { subheading: "Percentage of students who pursue further education post-graduation", data: "See our website" },
        ]
    },
    {
        label: "Student support",
        icon: <Heart size={20} />,
        content: [
            { subheading: "Dedicated staff/programs for students with special learning needs", data: "Yes" },
            { subheading: "Learning support offered", data: "We have specialist Learning Support teams based at all 3 campuses." },
            { subheading: "Student access to education psychologist", data: "All of our students have access to a dedicated, on-site, Counsellor." },
        ]
    },
    {
        label: "Admissions",
        icon: <FileText size={20} />,
        content: [
            { subheading: "Entry evaluation for students", data: "Yes" },
            { subheading: "Brief description of entry evaluation required", data: "Where English is a second language, pupils will need to sit an EAL assessment administered by a member of the EAL team." },
            { subheading: "Waiting list", data: "Yes" },
            { subheading: "Students can join after academic year begins", data: "Yes" },
        ]
    },
    {
        label: "School day",
        icon: <Clock size={20} />,
        content: [
            { subheading: "School start time", data: "Staggered starts across the three campuses." },
            { subheading: "School finish time", data: "Staggered finishes across the three campuses." },
            { subheading: "Supervised care before/after school", data: "Yes" },
            { subheading: "School bus service available", data: "Yes" },
            { subheading: "School provided lunches", data: "The school provides a set lunch for all students in our Primary campuses from F1 to Year 6 as part of the fee structure. Our Secondary campus offers a choice of two dining outlets. Payment for snacks and lunches is made using a card system which can be topped up online, or by the students on site. Secondary students have the choice of eating at The BIStro; an open-air cafe serving daily specials, and regular items such as snacks, salads, fresh baguettes, sandwiches etc. Or The Cafeteria, an indoor canteen serving a selection of hot Asian and Western meals, with vegetarian options for both." },
            { subheading: "Food alternatives for special dietary needs (ie. vegan, kosher, halal etc)", data: "Yes" },
            { subheading: "Uniform required", data: "Yes" },
        ]
    },
    {
        label: "Extracurricular activities",
        icon: <Trophy size={20} />,
        content: [
            { subheading: "Extracurricular activities or clubs offered", data: "We believe in the all-round development of our students, and with our diverse co-curricular programme we encourage our students to develop a deeper range of skills and experiences outside of the classroom. Our goal is to provide your child with the tools to excel academically, socially and personally. We currently host over 100 co-curricular activities throughout the school year." },
            { subheading: "Sports activities included", data: "At BIS HCMC we pride ourselves on offering a broad and balanced co-curricular programme. A wide range of sports are catered for through the standard curriculum and as part of our extensive co-curricular programme. Students also have the opportunity to participate in regular inter-house competitions in many of these sports and enjoy annual athletics days and swimming gala’s which prove to be hugely popular." },
            { subheading: "Sports teams or sport competitions available for students", data: "We take our sports teams seriously and compete both locally in HCMC leagues and tournaments, and in international competitions." },
        ]
    },
    {
        label: "Facilities",
        icon: <Building2 size={20} />,
        content: [
            { subheading: "Facilities at the school", data: "Located in the multicultural Thao Dien area of Ho Chi Minh City, our three modern campuses - Early Years and Infant, Junior, and Secondary - are energising and dynamic places to learn. Split by age group, each purpose-built campus has first-class facilities that unlock a world of extraordinary opportunities. Combining state-of-the-art sports, science, and artistic spaces with classrooms and labs packed with interactive technology, our facilities will inspire your child to pursue their passions, try new things, and succeed in everything they do. Each individual campus has excellent additional specialist facilities designed to support and enhance your child's learning. " },
            { subheading: "Sports facilities at the school", data: "Two of our campuses have 25m Swimming pools, whilst our Early Years and Infant Campus has a splash pool and a salt water swimming pool. Each campus also has an indoor gymnasiam. We also have outdoor basketball courts, MUGA (Multi-Use Games Area), and multi-weather astro pitch." },
        ]
    },
    {
        label: "About",
        icon: <Building2 size={20} />,
        content: [
            { subheading: "Qualities and characteristics best defining the school", data: "UNLOCKING A WORLD OF POSSIBILITIES" },
            { subheading: "Teaching approach of the school", data: "Your child will flourish at BIS HCMC, where our all-encompassing approach to learning inspires every student to be their best. Here, we guide our students to astonishing academic success and embrace the small things that make them unique. Our world-class teachers will spark your child’s curiosity and creativity beyond the classroom, too, nurturing their strengths and passions to help them find their purpose." },
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
                    return <div key={""+index + "_" + idx}>
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