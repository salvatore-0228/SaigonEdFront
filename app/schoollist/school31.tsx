
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

export default function School31() {
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
                                            <img src="/images/school logos/International German School Logo.png" alt="no image" />
                                        </a>
                                    </div>
                                    <h1 className="text-l font-semibold">
                                        International German School Ho Chi Minh City (IGS)
                                    </h1>
                                </div>

                                <div style={{ marginBottom: "1rem", overflow: "auto", height: "20dvh" }} className="text-sm">
                                    <div style={{ fontWeight: "bold", marginBottom: "1rem" }}>Introduction</div>
                                    <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                                        Deutsche Schule Ho Chi Minh City (HCMC) – International German School (IGS), will open your children's minds to the wondrous 
                                        world of books. They will learn why we can see the stars, how the Saigon river changes its flow daily with the tides, and 
                                        why in other parts of the world one can see ice crystals hanging from windows in the Winter.
                                    </p>
                                </div>

                                <div className="flex flex-row gap-1 text-2xl mb-3" style={{ borderBottom: "1px solid gray", paddingTop: "1rem", paddingBottom: "1rem" }}>
                                    <Link href="https://igs-hcmc.org/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/globe_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.youtube.com/channel/UCOCfBrD4s8RxQv9uNCm9eCg" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/youtube_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.facebook.com/Deutsche.Schule.HCMC/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/facebook_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.linkedin.com/in/international-german-school-ho-chi-minh-city-igs-a2972b182/" passHref legacyBehavior>
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
                                    <InfoRow label="Curriculum" value="German and IB" isLink />
                                    <InfoRow label="Leaving qualifications" value="?" isLink />
                                    <InfoRow label="Age range" value="range: (1 to 18)" />
                                    <InfoRow label="Tuition" value="304,815,000 ₫ to 480,900,000 ₫" />
                                    <InfoRow label="Address" value="12 Võ Trường Toản, An Phú, Quận 2, Hồ Chí Minh, Vietnam" />
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
                            src="https://www.youtube.com/embed/sW6Cf3O6FRA"
                            title="Vercel Ship Keynote: Introducing the frontend cloud"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            style={{ width: "100%", margin: "auto", aspectRatio: "16/9", backgroundColor: "gray" }}
                        // allowFullScreen
                        ></iframe>
                    </div>
                    <div className="flex-1 flex lg:flex-row flex-col lg:gap-[1dvw] gap-[1rem]">
                        <div className="w-full lg:w-1/2 overflow-hidden" id="slideheight">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.167167676205!2d106.7453681!3d10.7904738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175266b462bcba1%3A0xa35cd5e5b1576b53!2sInternational%20German%20School%20Ho%20Chi%20Minh%20City%20(IGS)!5e0!3m2!1sen!2s!4v1691340000000!5m2!1sen!2s"
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
        data: `Deutsche Schule Ho Chi Minh City (IGS) opens students' minds to the wonders of the natural world through inquiry-based learning. From understanding tides in the Saigon River to exploring the universe, the school inspires a love of learning and intellectual curiosity.`
      },
      {
        type: undefined,
        subheading: "Teaching approach of the school",
        data: `IGS avoids rote memorization and focuses instead on building critical thinking, empathy, and the ability to apply concepts actively. The learning environment is designed to be stimulating, hands-on, and enjoyable for students.`
      }
    ]
  },
  {
    label: "Nationalities",
    icon: <Users size={20} />,
    content: [
      { type: undefined, subheading: "Number of students", data: "170" },
      { type: undefined, subheading: "Number of nationalities represented in the school", data: "20" },
      { type: undefined, subheading: "Most common nationality", data: "German, Swiss, Vietnamese" },
      { type: undefined, subheading: "Ratio of local students to international students", data: "About 35% national / 65% international" }
    ]
  },
  {
    label: "Languages",
    icon: <Languages size={20} />,
    content: [
      { type: undefined, subheading: "Native English and German speaking teachers", data: "Yes" },
      {
        type: undefined,
        subheading: "Language support for students not fluent in English and German",
        data: "Yes – a highly developed program for students without prior German language knowledge."
      },
      {
        type: "list",
        subheading: "Additional language classes offered by the school",
        data: ["French", "Vietnamese for native speakers", "Vietnamese as a foreign language (Primary & Class 5)"]
      }
    ]
  },
  {
    label: "Classroom",
    icon: <Pencil size={20} />,
    content: [
      { type: undefined, subheading: "Max. number of students per class", data: "20" },
      { type: undefined, subheading: "Average number of students per class", data: "15" },
      {
        type: undefined,
        subheading: "Does the school employ teaching assistants?",
        data: "Internship program in collaboration with German universities"
      },
      {
        type: undefined,
        subheading: "Use of technology in the classroom",
        data: "BYOD policy, iPads, laptops, Smartboards, Apple TVs, document readers, learning apps"
      },
      {
        type: undefined,
        subheading: "Do students practice religion at the school?",
        data: "No – the school teaches Ethics instead"
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
        data: "DSD Exams"
      },
      {
        type: undefined,
        subheading: "Results in these examinations",
        data: "Outstanding"
      },
      {
        type: undefined,
        subheading: "Do teachers assign homework to their students?",
        data: "Yes, depending on age and class level"
      },
      {
        type: undefined,
        subheading: "Approximate hours of homework given",
        data: "Variable – depends on age, topic, and class"
      },
      {
        type: undefined,
        subheading: "Percentage of students who pursue further education post-graduation",
        data: "First graduates in 2022; students generally perform at a very high level"
      }
    ]
  },
  {
    label: "Student support",
    icon: <HeartPulse size={20} />,
    content: [
      {
        type: undefined,
        subheading: "Student access to education psychologist",
        data: "Yes"
      }
    ]
  },
  {
    label: "Admissions",
    icon: <FileText size={20} />,
    content: [
      {
        type: undefined,
        subheading: "Entry evaluation for students",
        data: "Depends on academic performance and prior school records"
      },
      {
        type: undefined,
        subheading: "Brief description of entry evaluation required",
        data: "Evaluation includes language ability and main subjects depending on application grade"
      },
      {
        type: undefined,
        subheading: "Waiting list",
        data: "Yes, for certain year groups"
      },
      {
        type: undefined,
        subheading: "Deadline for registration (new academic year)",
        data: "No deadline"
      },
      {
        type: undefined,
        subheading: "Students can join after academic year begins",
        data: "Yes"
      }
    ]
  },
  {
    label: "School Day",
    icon: <Clock size={20} />,
    content: [
      { type: undefined, subheading: "School start time", data: "8:00" },
      { type: undefined, subheading: "School finish time", data: "16:15" },
      { type: undefined, subheading: "School bus service available", data: "Yes" },
      { type: undefined, subheading: "School provided lunches", data: "Yes" },
      { type: undefined, subheading: "Uniform required", data: "Yes – starting from Primary School" }
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
          "Pottery",
          "Cooking",
          "Choir",
          "Multi-sport",
          "Self-defense",
          "Yoga",
          "Coding",
          "Fencing",
          "Chess",
          "Art Club",
          "Soccer",
          "Table Tennis"
        ]
      },
      {
        type: "list",
        subheading: "Sports activities included",
        data: ["Physical education"]
      }
    ]
  },
  {
    label: "Facilities",
    icon: <Building2 size={20} />,
    content: [
      {
        type: "list",
        subheading: "Sports facilities at the school",
        data: ["Football field"]
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