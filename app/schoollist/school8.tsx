
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

export default function School8() {
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
                                            <img src="/images/school logos/Renaissance International School Saigon.png" alt="no image" />
                                        </a>
                                    </div>
                                    <h1 className="text-l font-semibold">
                                        Renaissance International School Saigon
                                    </h1>
                                </div>

                                <div style={{ marginBottom: "1rem", overflow: "auto", height: "20dvh" }} className="text-sm">
                                    <div style={{ fontWeight: "bold", marginBottom: "1rem" }}>Introduction</div>
                                    <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                                        Renaissance is the only Round Square school in Vietnam & is accredited by the Council of International Schools (CIS). 
                                        We provide an international programme; the National Curriculum for England complemented by Cambridge IGCSEs & International 
                                        Baccalaureate Diploma (IBDP).
                                    </p>
                                </div>

                                <div className="flex flex-row gap-1 text-2xl mb-3" style={{ borderBottom: "1px solid gray", paddingTop: "1rem", paddingBottom: "1rem" }}>
                                    <Link href="https://renaissance.edu.vn/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/globe_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.youtube.com/user/renaissancevietnam" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/youtube_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.facebook.com/RenaissanceInternationalSchoolSaigon" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/facebook_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.linkedin.com/company/renaissanceinternationalschoolsaigon/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/linkedin_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.instagram.com/renaissance.school.saigon/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/instagram_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                </div>

                                {/* Info Grid */}
                                <div className="grid grid-cols-1 gap-x-10 text-sm">
                                    <InfoRow label="Curriculum" value="IB, British, International, and IGCSE" isLink />
                                    <InfoRow label="Leaving qualifications" value="IGCSE and IB Diploma" isLink />
                                    <InfoRow label="Age range" value="range: (2 to 18)" />
                                    <InfoRow label="Tuition" value="291,600,000 ₫ to 805,600,000 ₫" />
                                    <InfoRow label="Address" value="74 Nguyen Thi Thap Street Binh Thuan Ward, District 7, Ho Chi Minh City, Viet Nam." />
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
                            src="https://www.youtube.com/embed/sUyREE1jLxI?list=PLUJWW1BzaSU6ri_SgKEfzlFs-DB2LPBs4"
                            title="Vercel Ship Keynote: Introducing the frontend cloud"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            style={{ width: "100%", margin: "auto", aspectRatio: "16/9" }}
                        // allowFullScreen
                        ></iframe>
                    </div>
                    <div className="flex-1 flex lg:flex-row flex-col lg:gap-[1dvw] gap-[1rem]">
                        <div className="w-full lg:w-1/2 overflow-hidden" id="slideheight">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5993550484213!2d106.72210907602184!3d10.73814208944464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175257deeb723f1%3A0xd2829716cbeada71!2sRenaissance%20International%20School%20Saigon!5e0!3m2!1sen!2s!4v1691841265432"
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
            {
                type: undefined,
                subheading: "Number of students",
                data: "500+"
            },
            {
                type: undefined,
                subheading: "Number of nationalities represented in the school",
                data: "40+"
            },
            {
                type: undefined,
                subheading: "Ratio of local students to international students",
                data: "50% international : 50% local"
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
                data: "Yes."
            },
            {
                type: undefined,
                subheading: "Language support for students not fluent in English",
                data: "We have a renowned English as an Additional Language programme."
            },
            {
                type: undefined,
                subheading: "Additional language classes offered by the school",
                data: "Renaissance provides a range of First Language choices for its students including both Mandarin and Korean. Additionally, the Modern Foreign Language Department provides all students, as part of their academic programme, the opportunity to learn English, Vietnamese, Mandarin (Chinese), Korean and French."
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
                data: "Renaissance has a maximum class size of 18 in Early Years, 22 in Primary and 25 in Secondary."
            },
            {
                type: undefined,
                subheading: "Average number of students per class",
                data: "15"
            },
            {
                type: undefined,
                subheading: "Does the school employ teaching assistants?",
                data: "Yes, our Teaching Assistants are extremely well-qualified."
            },
            {
                type: undefined,
                subheading: "Use of technology in the classroom",
                data: `: Classrooms are equipped with interactive whiteboards and linked to a high-speed internet connection, providing the best of modern technology to support teaching and learning.  
                    We have a Makerspace for robotics, coding (scratch, python and HTML) and 3D printing, and we use Computer Aided Design (CAD) and Computer Aided Manufacture (CAM) in Textiles, wood, cardboard and acetate on the laser cutters. We have a computer suite dedicated to teaching these skills alongside age-appropriate coding and robotics. Robotics and Design are strengths of our school.
                `
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
                data: "Our students undertake 7 IGCSE exams at age 16 and the IB Diploma at age 18."
            },
            {
                type: undefined,
                subheading: "Results in these examinations",
                data: "Our IB average is 35 points"
            },
            {
                type: undefined,
                subheading: "Do teachers assign homework to their students?",
                data: "Yes"
            },
            {
                type: undefined,
                subheading: "Approximate hours of homework given",
                data: "All children from Primary through Secondary will have Home Learning (homework). This is a part of school life aimed at revising concepts introduced in the classroom and establishing a disciplined, self-study work ethic at home. The time allocation for such activities is matched to your child’s ability, needs and age."
            },
            {
                type: undefined,
                subheading: "Percentage of students who pursue further education post-graduation",
                data: "Circa 100%"
            },
        ]
    },
    {
        label: "Student support",
        icon: <Heart size={20} />,
        content: [
            {
                subheading: "Dedicated staff/programs for students with special learning needs",
                data: "Yes. Renaissance has an experienced and qualified Student Support Team.",
                type: undefined
            },
            {
                subheading: "Learning support offered",
                data: ["Additional Learning Support", "English As An Additional Language (EAL)", "Counselling and University Guidance"],
                type: "list"
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
                data: "All students are tested for English proficiency as part of our Admissions and Evaluation process. All applicants for Year 2 and older will take a computer-based cognitive ability test (CAT4) that is age-group specific and tests your child’s quantitative, verbal, spatial and non-verbal ability. This international standard test has been developed by a team of education experts and is used by leading international schools worldwide."
            },
            {
                type: undefined,
                subheading: "Waiting list",
                data: "Yes, depends on the grade level."
            },
            {
                type: undefined,
                subheading: "Deadline for registration (new academic year)",
                data: "Renaissance accepts registration throughout the academic year."
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
                data: "7.50"
            },
            {
                type: undefined,
                subheading: "School finish time",
                data: "15:30"
            },
            {
                type: undefined,
                subheading: "Supervised care before/after school",
                data: "Renaissance has a wide range of Extra Curricular Activities which take place during the school day. There are also optional sporting activities after school hours."
            },
            {
                type: undefined,
                subheading: "•	School bus service available",
                data: "Yes"
            },
            {
                type: undefined,
                subheading: "School provided lunches",
                data: "Yes"
            },
            {
                type: undefined,
                subheading: "Food alternatives for special dietary needs (ie. vegan, kosher, halal etc)",
                data: "Yes. Vietnamese, Korean, Western and Vegetarian options are available."
            },
            {
                type: undefined,
                subheading: "Uniform required",
                data: "Yes. At the beginning of the school year, Renaissance offers 3 sets of Renaissance school uniform free."
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
                data: "Our extracurricular activities are designed to meet most student interests, from sport to arts, Model United Nations, Round Square conferences, service learning, cookery, robotics and coding, there is something for everybody."
            },
            {
                type: undefined,
                subheading: "Sports activities included",
                data: `Physical education is taught to every age group, starting with Early Years who have both a PE class and a swimming class with specialist swim teachers every week. Our students enjoy a varied sports programme which offers football, badminton, basketball, volleyball and more. 
                    At the upper end of our school, passionate students can choose to take PE at IGCSE and Sports and Health Science at IB Diploma level.
                `
            },
            {
                type: undefined,
                subheading: "Sports teams or sport competitions available for students",
                data: "Yes. Renaissance International has ‘The Lions’ sports teams in Basketball, Volleyball, Football and Swimming. We compete in both FOBISIA International competitions and local Saigon leagues."
            },
        ]
    },
    {
        label: "Facilities",
        icon: <Building2 size={20} />,
        content: [
            {
                type: undefined,
                subheading: "Facilities at the school",
                data: "We have a well-equipped library, a 300+ seater theater, various science labs, a Makerspace, Music rooms and a Black Box theatre."
            },
            {
                type: undefined,
                subheading: "Sports facilities at the school",
                data: "We have a 25m indoor salt-water pool, an Astroturf football field, a large grass Sports Field, a fully equipped gymnasium, a fitness center, a specific Early Years Sensory playground and a primary/secondary sensory playground."
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