
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

export default function School3() {
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
                                            <img src="/images/school logos/4956535711947927385.jpg" alt="no image" />
                                        </a>
                                    </div>
                                    <h1 className="text-l font-semibold">
                                        Australian International School Saigon
                                    </h1>
                                </div>

                                <div style={{ marginBottom: "1rem", overflow: "auto", height: "20dvh" }} className="text-sm">
                                    <div style={{ fontWeight: "bold", marginBottom: "1rem" }}>Introduction</div>
                                    <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                                        Welcome to the Australian International School (AIS), located in the new urban area of Thu Thiem peninsula in Saigon. 
                                        At AIS, we offer a world-class education for students aged 1.5 to 18 years old, following the internationally recognized IB and IGCSE curriculum.
                                    </p>
                                </div>

                                <div className="flex flex-row gap-1 text-2xl mb-3" style={{ borderBottom: "1px solid gray", paddingTop: "1rem", paddingBottom: "1rem" }}>
                                    <Link href="https://www.aisvietnam.com/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/globe_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.youtube.com/user/aisvietnam" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/youtube_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.facebook.com/AustralianInternationalSchoolVietnam/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/facebook_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.linkedin.com/company/australian-international-school-vietnam/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/linkedin_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.instagram.com/ais.vietnam.official/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/instagram_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                </div>

                                {/* Info Grid */}
                                <div className="grid grid-cols-1 gap-x-10 text-sm">
                                    <InfoRow label="Curriculum" value="IB and British" isLink />
                                    <InfoRow label="Leaving qualifications" value="IGCSE and IB Diploma" isLink />
                                    <InfoRow label="Age range" value="range: (2 to 18)" />
                                    <InfoRow label="Tuition" value="295,600,000 ₫ to: 860,700,000 ₫" />
                                    <InfoRow label="Address" value="Thu Thiem Campus: Ages 2 to 18: 264 Mai Chi Tho (East-West Highway) An Phu Ward | District 2 | HCMC | Vietnam" />
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
                            src="https://www.youtube.com/embed/yU9IIdwKxyk"
                            title="Vercel Ship Keynote: Introducing the frontend cloud"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            style={{ width: "100%", margin: "auto", aspectRatio: "16/9" }}
                        // allowFullScreen
                        ></iframe>
                    </div>
                    <div className="flex-1 flex lg:flex-row flex-col lg:gap-[1dvw] gap-[1rem]">
                        <div className="w-full lg:w-1/2 overflow-hidden" id="slideheight">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.9156514721883!2d106.7479625!3d10.7899744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175267456ff6c4b%3A0x9f8c29fb1650574c!2sAustralian%20International%20School%2C%20AIS%20Saigon!5e0!3m2!1sen!2s!4v1691834534567"
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
            { type: undefined, subheading: "Number of students", data: "1300" },
            { type: undefined, subheading: "Number of nationalities represented in the school", data: "More than 40" },
            { type: undefined, subheading: "Most common nationality", data: "Korean, Australian, New Zealander, American, Japanese, Chinese, British" },
            { type: undefined, subheading: "Ratio of local students to international students", data: "1:1" },
        ]
    },
    {
        label: "Languages",
        icon: <Languages size={20} />,
        content: [
            { type: undefined, subheading: "Native English speaking teachers", data: "Yes" },
            { type: undefined, subheading: "Language support for students not fluent in English", data: "English as an Additional Language (EAL) - focuses on developing English language skills, including reading, writing, speaking, and listening. There is an emphasis in the EAL lessons on the understanding of vocabulary from relevant subject areas, including science and humanities." },
            { type: undefined, subheading: "•	The Intensive English Language Program (IELP)", data: "aims to develop the student’s English skills to a level where they can access the mainstream curriculum. This means the students will be in English lessons for twenty or more periods per week with an EAL specialist teacher. The lessons are very structured and follow the Cambridge Second Language Course curriculum. The programme enables students to have a solid foundation of English literacy skills." },
            { type: undefined, subheading: "Additional language classes offered by the school", data: "Vietnamese, Korean, Chinese, Japanese, French, Spanish" },
        ]
    },
    {
        label: "Classroom",
        icon: <Pencil size={20} />,
        content: [
            { type: undefined, subheading: "Max. number of students per class", data: "20-24 depends on year level" },
            { type: undefined, subheading: "Average number of students per class", data: "19" },
            { type: undefined, subheading: "Does the school employ teaching assistants?", data: "  Yes, for kindergarten and primary and also for Special Support students." },
            { type: undefined, subheading: "Use of technology in the classroom", data: "We operate under a 'Bring Your Own Device' system." },
            { type: undefined, subheading: "Is the school ready to use virtual classrooms when needed? (e.g. teaching lessons online if the school is closed, e.g. during COVID-19 closures)", data: "Yes" },
        ]
    },
    {
        label: "Academics",
        icon: <GraduationCap size={20} />,
        content: [
            { type: undefined, subheading: "External examinations or assessments available", data: "International General Certificate of Secondary Education (IGCSE), IB Diploma" },
            {
                type: "list", subheading: "Results in these examinations", data: [`IB result in 2021:`,
                    'IBDP pass rate: 100%',
                    'Full Diploma Average Exam Score: 35 (out of 45)',
                    'World Average Score: 33 (out of 45)',
                    'Highest Diploma Score awarded to an IB Diploma student: 44 (out of 45)',
                    '13% of students were awarded 40 points or more (out of 45)'
                ]
            },
            { type: undefined, subheading: "Do teachers assign homework to their students?", data: "Yes" },
        ]
    },
    {
        label: "Student support",
        icon: <Heart size={20} />,
        content: [
            { type: undefined, subheading: "Dedicated staff/programs for students with special learning needs", data: "We have learning support departments in all divisions." },
            { type: undefined, subheading: "Learning support offered", data: "We have special support teachers for both primary and secondary students." },
            { type: undefined, subheading: "The school supports gifted, able and talented students", data: "We offer merit-based scholarships for gifted, able, and talented students every year. Many students who have received AIS scholarships have graduated and gone on to top universities like Oxford, Imperial College London, etc.," },
            { type: undefined, subheading: "Student access to education psychologist", data: "All of our students have access to dedicated on-site counsellors." },
        ]
    },
    {
        label: "Admissions",
        icon: <FileText size={20} />,
        content: [
            { type: undefined, subheading: "Entry evaluation for students", data: "Yes" },
            { type: undefined, subheading: "Brief description of entry evaluation required", data: "Middle School Entrance Test (Years 7&8 , Years 9&10) Senior School Entrance Test (Years 11 & 12) English Proficiency Test" },
            { type: undefined, subheading: "Waiting list", data: "Depends on the grade level" },
            { type: undefined, subheading: "Deadline for registration (new academic year)", data: "AIS offers admissions throughout the year." },
            { type: undefined, subheading: "Students can join after academic year begins", data: "Yes" },
        ]
    },
    {
        label: "School day",
        icon: <Clock size={20} />,
        content: [
            { type: undefined, subheading: "School start time", data: "8:00 AM" },
            { type: undefined, subheading: "School finish time", data: "2:45 PM" },
            { type: undefined, subheading: "Supervised care before/after school", data: "Yes, We do have teachers around designated area to supervise students before and after school day. As for our kindergarten student, we offer after hour child care till 4:30 PM." },
            { type: undefined, subheading: "School bus service available", data: "Yes" },
            { type: undefined, subheading: "School provided lunches", data: "Yes, our lunches are included in the school fees for primary students. Secondary students can bring food from home or choose various food in our canteen. The school supervises the canteen operations to ensure that quality standards are maintained." },
            { type: undefined, subheading: "Uniform required", data: "Yes" },
        ]
    },
    {
        label: "Extracurricular activities",
        icon: <Trophy size={20} />,
        content: [
            { type: undefined, subheading: "Extracurricular activities or clubs offered", data: "There are 100+ after-school activities available for students in both Primary and Secondary, such as Football, Swimming, Basketball, Hip-hop dance, Model United Nations, Robotic club, etc,." },
            { type: undefined, subheading: "Sports activities included", data: "We provide PE classes for students from kindergarten to year 11. In addition, we have a compulsory swimming class from kindergarten to year 10." },
            { type: undefined, subheading: "Sports teams or sport competitions available for students", data: "Yes, we have our AIS Titans team that competes in many sports competitions between international schools. Our Titans are also a part of SISAC (Saigon International Schools Athletic Conference), ASAC (ASEAN Sports and Activities Conference), and AISA (Australian International School Association), giving them plenty of opportunities to join Sports competitions in the country and abroad." },
        ]
    },
    {
        label: "Facilities",
        icon: <Building2 size={20} />,
        content: [
            { type: undefined, subheading: "Facilities at the school", data: ": Library, Auditorium, Science labs, Design Technology room, Boarding House, Media Centre, Swimming Pool, Gymnasium, Football Field." },
            { type: undefined, subheading: "Sports facilities at the school", data: "Two of our campuses, Thao Dien and Thu Thiem, have 25-meter saltwater swimming pools and an outdoor basketball court. On the Thu Thiem campus, we offer one grass field area for PE and an indoor gymnasium. In 2017, the city sports council awarded our Thao Dien swimming pool as the best pool for community services." },
        ]
    },
    {
        label: "Boarding",
        icon: <Building2 size={20} />,
        content: [
            { type: undefined, subheading: "Grades/ages available for boarding", data: "11 years old and above" },
            { type: undefined, subheading: "Boarding facilities at the school", data: "Boarders can access all school facilities, such as the swimming pool, library, gymnasium, football field, and basketball court." },
        ]
    },
    {
        label: "About",
        icon: <Building2 size={20} />,
        content: [
            { type: undefined, subheading: "Qualities and characteristics best defining the school", data: "AIS is committed to providing a high-quality international education. We encourage and support our students to become inquiring and knowledgeable learners with the confidence to achieve their potential." },
            { type: undefined, subheading: "Teaching approach of the school", data: "At the Australian International School we want our students to listen to the world around them, to hear it hum, and to grow into young people who are curious, reflective and want to make a positive difference to their world. AIS emphasises the development of each student’s academic ability and encourages well-rounded, confident individuals who aspire to achieve their potential. Our curriculum is rigorous and balanced, with appreciation of different learning styles and experiences. It supports the individual strengths and talents of our students so that they are excited by learning and embrace challenges with a belief in their own ability." },
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
                    if (item['type'] === "list") {
                        return <div key={"" + index + "_" + idx}>
                            <div className="font-semibold text-black-700 mb-1">{item.subheading}</div>
                            <div className="text-black-800">
                                <p className="mb-[0.5rem]">
                                    {item.data[0]}
                                </p>
                                <ul style={{ listStyleType: "disc", paddingLeft: "1rem" }}>
                                    {item.data.map((ele, iidx) => {
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