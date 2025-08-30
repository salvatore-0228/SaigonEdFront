
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

export default function School4() {
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
                                            <img src="/images/school logos/International School HCMC.jpg" alt="no image" />
                                        </a>
                                    </div>
                                    <h1 className="text-l font-semibold">
                                        International School Ho Chi Minh City
                                    </h1>
                                </div>

                                <div style={{ marginBottom: "1rem", overflow: "auto", height: "20dvh" }} className="text-sm">
                                    <div style={{ fontWeight: "bold", marginBottom: "1rem" }}>Introduction</div>
                                    <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                                        Established in 1993, International School Ho Chi Minh City is the first IB World School in Vietnam. ISHCMC provides the 
                                        International Baccalaureate with a culturally diverse perspective to students aged 2 - 18 years.
                                    </p>
                                </div>

                                <div className="flex flex-row gap-1 text-2xl mb-3" style={{ borderBottom: "1px solid gray", paddingTop: "1rem", paddingBottom: "1rem" }}>
                                    <Link href="https://www.ishcmc.com/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/globe_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.youtube.com/channel/UCNQ8qtGCLwAzvZF6ZWo4uzQ" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/youtube_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href=" https://www.facebook.com/ISHCMC/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/facebook_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                </div>

                                {/* Info Grid */}
                                <div className="grid grid-cols-1 gap-x-10 text-sm">
                                    <InfoRow label="Curriculum" value="IB" isLink />
                                    <InfoRow label="Leaving qualifications" value="IB Diploma" isLink />
                                    <InfoRow label="Age range" value="range: (2 to 18)" />
                                    <InfoRow label="Tuition" value="279,000,000 ₫ to: 959,000,000 ₫" />
                                    <InfoRow label="Address" value="Secondary Campus: Ages 11 to 18: 1 Xuan Thuy St., Thao Dien, Thu Duc City, HCMC" />
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
                            src="https://www.youtube.com/embed/5uuD9gxRpkA"
                            title="Vercel Ship Keynote: Introducing the frontend cloud"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            style={{ width: "100%", margin: "auto", aspectRatio: "16/9" }}
                        // allowFullScreen
                        ></iframe>
                    </div>
                    <div className="flex-1 flex lg:flex-row flex-col lg:gap-[1dvw] gap-[1rem]">
                        <div className="w-full lg:w-1/2 overflow-hidden" id="slideheight">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8079468438024!2d106.7255669!3d10.8027639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175261c241a16ed%3A0xad8d4e6bb1a61589!2sInternational%20School%20Ho%20Chi%20Minh%20City%20-%20Secondary%20Campus!5e0!3m2!1sen!2s!4v1691835623456"
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
            { type: undefined, subheading: "Number of students", data: "1,500" },
            { type: undefined, subheading: "Number of nationalities represented in the school", data: "61+" },
            { type: undefined, subheading: "Most common nationality", data: "ISHCMC has a diversity policy across the school to ensure a truly international experience. All nationalities are capped at 25%." },
            { type: undefined, subheading: "Ratio of local students to international students", data: "1:4" },
        ]
    },
    {
        label: "Languages",
        icon: <Languages size={20} />,
        content: [
            { type: undefined, subheading: "Native English speaking teachers", data: "Our teachers come from over 20 different countries, creating a diverse and international learning environment for our students." },
            { type: undefined, subheading: "Language support for students not fluent in English", data: " ISHCMC provides English as an Additional Language support for students who require it to become independent and successful learners." },
            { type: undefined, subheading: "Most common nationality", data: "Vietnamese" },
            { type: undefined, subheading: "Additional language classes offered by the school", data: "Korean, Vietnamese, Dutch, French, Mandarin, Spanish" },
        ]
    },
    {
        label: "Classroom",
        icon: <Pencil size={20} />,
        content: [
            { type: undefined, subheading: "Max. number of students per class", data: "22" },
            { type: undefined, subheading: "Average number of students per class", data: "17 - 20" },
            { type: undefined, subheading: "Does the school employ teaching assistants?", data: "ISHCMC employs learning support teachers to support students with mild to moderate learning needs throughout the Primary School." },
            { type: undefined, subheading: "Use of technology in the classroom", data: "All students in our Early Years and Primary Programs have access to iPads in the classroom. Each Grade 3 - grade 5 student is issued a school-provided iPad/Tablet and a one to-one Macbook Air/ Laptop is provided for grade 6 - 12 students. At Primary, students explore their own interests in Makerspace and Fab-Lab, where they can program robots, record podcasts, design objects, and direct high-quality video productions.At Secondary, students develop computer programming skills to create digital products such as animated graphics, visual displays, robotics, and other student-led projects." },
        ]
    },
    {
        label: "Academics",
        icon: <GraduationCap size={20} />,
        content: [
            { type: undefined, subheading: "External examinations or assessments available", data: "IB Diploma Programme, students take IB Diploma examinations in May of their final year after completing the two-year programme. These assessments are externally assessed and moderated which means there is a high degree of objectivity and reliability." },
            { type: undefined, subheading: "Results in these examinations", data: "ISHCMC achieved a 100% pass rate for full IB DP candidates which is above the expected global average of 89%, the highest points awarded was a perfect 45. Of the cohort, 76% achieved at or above expected global average of 33 points and 69% achieved in the top quartile of IB Diploma points. With a 36 point average, our graduates achieved above the expected global average of 33 points. The achievements continue with 30% of our graduates achieving 40 points or above." },
            { type: undefined, subheading: "Percentage of students who pursue further education post-graduation", data: "With 100% universities acceptance, colleges and further education institutions from around the world, ISHCMC continues to be recognized globally as a center of learning excellence. ISHCMC graduates from the Class of 2022 have secured places in top ranking university courses in Australia, Canada, Hong Kong, India, Korea, Singapore, Taiwan, Thailand, the United Kingdom and the United States." },
        ]
    },
    {
        label: "Student support",
        icon: <Heart size={20} />,
        content: [
            {
                subheading: "Dedicated staff/programs for students with special learning needs", data: [`At ISHCMC student support builds on the principles of neurodiversity, inclusion, and differentiation, believing this mindset should be applied to students across the whole learning spectrum, from those with identified learning difficulties to those who are gifted. Support for identified students is established through a consultative process working with students, parents, and staff. The support services team believes that students are best helped when there is a team approach based on individual needs and involving the classroom teacher(s).`,
                    'Learning Support',
                    'Challenges & Enrichment Support',
                    'English as an Additional Language (EAL) Support',
                    'Social-Emotional Counseling Support',
                    'Colleges & Universities Counseling Support',],
                type: "list"
            },
        ]
    },
    {
        label: "Admissions",
        icon: <FileText size={20} />,
        content: [
            { type: undefined, subheading: "Entry evaluation for students", data: "ll applicants from Early Explorers to Grade 12 go through an evaluation process by our Principal teams." },
            { type: undefined, subheading: "Brief description of entry evaluation required", data: "For Grades KG – Grade 12 your child may be asked to take part in an English Assessment. This covers their skills in listening, speaking, reading and writing." },
            { type: undefined, subheading: "Waiting list", data: "If a waiting list for any grade is necessary, qualified applicants will be admitted according to established policies on priority and diversity." },
            { type: undefined, subheading: "Deadline for registration (new academic year)", data: "Applications for both immediate and future entry are considered at any time throughout the year." },
            { type: undefined, subheading: "Students can join after academic year begins", data: "Yes" },
        ]
    },
    {
        label: "School day",
        icon: <Clock size={20} />,
        content: [
            { type: undefined, subheading: "School start time", data: "7:45 am (Primary School) 8:45 am (Secondary School)" },
            { type: undefined, subheading: "School finish time", data: "3:05 pm (Primary School) 3:30 pm (Secondary School)" },
            { type: undefined, subheading: "Supervised care before/after school", data: "Yes, both campuses operate a school bus service for your family. Buses are equipped with seat belts and have adult supervision and cameras have been added to all school buses in line with government regulations. Bus transportation is available for students aged 4 years and above." },
            { type: undefined, subheading: "School provided lunches", data: "Yes, a good variety of food choices are available daily at ISHCMC Global Cafe. All lunch strays in our campus cafeterias are stainless steel to help ensure the quality and temperature of the food does not diminish once served." },
            { type: undefined, subheading: "Food alternatives for special dietary needs (ie. vegan, kosher, halal etc)", data: "ISHCMC is a nut free school." },
            { type: undefined, subheading: "Uniform required", data: "Yes, students are expected to wear their school uniform on all school days. " },
        ]
    },
    {
        label: "Extracurricular activities",
        icon: <Trophy size={20} />,
        content: [
            { type: undefined, subheading: "Extracurricular activities or clubs offered", data: "Over 150+ activities across sports, social, cultural, and academics such as cooking, chess, claymation, mindfulness, music club, jazz band, dance club, economics & business club, homework club, yoga, taekwondo, robotics club, community service programs, Model United Nations, etc." },
            { type: undefined, subheading: "Sports activities included", data: "Physical & Health Education" },
            { type: undefined, subheading: "Sports teams or sport competitions available for students", data: ": ISHCMC Rhinos and Stingrays are well represented in the Primary School with regular competitions in a number of athletic and (increasingly) non-athletic ventures - including swimming galas, basketball and football tournaments, gymnastics, dance recitals, math, science, and coding competitions. ISHCMC also has sports teams that are recognized within Vietnam and abroad for their integrity, ability and sense of fair play to compete for U19 & U15 including basketball, football, volleyball, swimming (year ground program)." },
        ]
    },
    {
        label: "Facilities",
        icon: <Building2 size={20} />,
        content: [
            { type: undefined, subheading: "Facilities at the school", data: "An Information & Media Center, a professional theater, recording studios, design suites, music practice rooms, food tech and science labs." },
            { type: undefined, subheading: "Sports facilities at the school", data: "Secondary Campus: NBA -size basketball court, rooftop Football field, Olympic-sized swimming pool, outdoor tennis courts. Primary Campus: football field, swimming pool, indoor playground, adventure playground, volleyball and basketball courts, indoor gymnasium." },
        ]
    },
    {
        label: "About",
        icon: <Building2 size={20} />,
        content: [
            { type: undefined, subheading: "Qualities and characteristics best defining the school", data: "Established in 1993, International School Ho Chi Minh City is the oldest international school in Ho Chi Minh City and the first IB World School in Vietnam. ISHCMC provides the International Baccalaureate with a culturally diverse perspective to students aged 2 - 18 years. ISHCMC is a vibrant co-educational school of over 1,400 students representing over 60 nationalities and provides a unique learning experience from Early Years through to Grade 12." },
            { type: undefined, subheading: "Teaching approach of the school", data: "At ISHCMC, teaching and learning is guided by our Principles of Learning. They inform planning and, in the very best teaching, ‘interleave’ together to give the impression of classroom learning, which is smooth, consistent, immersive, and sustained. Our teachers are well qualified, experienced, care about their students and build positive relationships to ensure students reach their full potential. Many of our educators have advanced degrees and all of our educators are committed to ongoing professional growth and development." },
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