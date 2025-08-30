
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

export default function School26() {
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
                                            <img src="/images/school logos/LePetitte Ecole Logo.png" alt="no image" />
                                        </a>
                                    </div>
                                    <h1 className="text-l font-semibold">
                                        La Petite Ecole Ho Chi Minh
                                    </h1>
                                </div>

                                <div style={{ marginBottom: "1rem", overflow: "auto", height: "20dvh" }} className="text-sm">
                                    <div style={{ fontWeight: "bold", marginBottom: "1rem" }}>Introduction</div>
                                    <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                                        A multilingual, human-scale, benevolent family school where the French National curriculum is taught equally in French and 
                                        English and where all nationalities are welcome!
                                    </p>
                                </div>

                                <div className="flex flex-row gap-1 text-2xl mb-3" style={{ borderBottom: "1px solid gray", paddingTop: "1rem", paddingBottom: "1rem" }}>
                                    <Link href="https://www.lpehochiminh.com/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/globe_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    {/* <Link href="https://www.youtube.com/channel/UCQOTIhSF11fdZpwLd9ulQYw" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/youtube_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link> */}
                                    <Link href=" https://www.facebook.com/lapetiteecolehcm/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/facebook_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.linkedin.com/company/la-petite-ecole-ho-chi-minh-city/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/linkedin_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.instagram.com/lapetiteecolehcm/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/instagram_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                </div>

                                {/* Info Grid */}
                                <div className="grid grid-cols-1 gap-x-10 text-sm">
                                    <InfoRow label="Curriculum" value="International and French" isLink />
                                    <InfoRow label="Leaving qualifications" value="N/A" isLink />
                                    <InfoRow label="Age range" value="range: (1 to 11)" />
                                    <InfoRow label="Tuition" value="190,000,000 ₫ to 270,000,000 ₫" />
                                    <InfoRow label="Address" value="172 - 180, Nguyễn Văn Hưởng, Thảo Điền, Thủ Đức, Hồ Chí Minh, Vietnam" />
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
                            // src="https://www.youtube.com/embed/MnBwUAzzuXg"
                            title="Vercel Ship Keynote: Introducing the frontend cloud"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            style={{ width: "100%", margin: "auto", aspectRatio: "16/9", backgroundColor: "gray" }}
                        // allowFullScreen
                        ></iframe>
                    </div>
                    <div className="flex-1 flex lg:flex-row flex-col lg:gap-[1dvw] gap-[1rem]">
                        <div className="w-full lg:w-1/2 overflow-hidden" id="slideheight">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.021391717902!2d106.7253525!3d10.8159369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317526221558924b%3A0x715fc35e5fc8c107!2sLa%20Petite%20Ecole%20Ho%20Chi%20Minh%20City%20-%20French%20International%20School!5e0!3m2!1sen!2s!4v1691333020000!5m2!1sen!2s"
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
        data: "A multilingual, human-scale, benevolent family school where the French National curriculum is taught equally in French and English. All nationalities are welcome."
      },
      {
        type: undefined,
        subheading: "Teaching approach of the school",
        data: "La Petite Ecole places the child at the core of the learning process. Through play and exploration, children develop self-awareness, curiosity, independence, and motivation. A dedicated program supports students with limited French to help them reach a good linguistic level quickly."
      }
    ]
  },
  {
    label: "Nationalities",
    icon: <Users size={20} />,
    content: [
      {
        type: undefined,
        subheading: "Number of students",
        data: "400 (2024–2025)"
      },
      {
        type: undefined,
        subheading: "Number of nationalities represented in the school",
        data: "26"
      },
      {
        type: undefined,
        subheading: "Most common nationality",
        data: "French"
      },
      {
        type: undefined,
        subheading: "Ratio of local students to international students",
        data: "1/4 of students are Vietnamese"
      }
    ]
  },
  {
    label: "Languages",
    icon: <Languages size={20} />,
    content: [
      {
        type: undefined,
        subheading: "Native English and French speaking teachers",
        data: "Yes"
      },
      {
        type: undefined,
        subheading: "Language support for students not fluent in English and French",
        data: "Yes"
      },
      {
        type: undefined,
        subheading: "Additional language classes offered by the school",
        data: "Vietnamese (normal curriculum), Chinese (extra-curricular)"
      }
    ]
  },
  {
    label: "Classroom",
    icon: <Pencil size={20} />,
    content: [
      {
        type: undefined,
        subheading: "Max. number of students per class",
        data: "14 in Nursery, 22 in Kindergarten, 20 in Elementary"
      },
      {
        type: undefined,
        subheading: "Average number of students per class",
        data: "17–20 starting Kindergarten"
      },
      {
        type: undefined,
        subheading: "Does the school employ teaching assistants?",
        data: "Yes"
      },
      {
        type: undefined,
        subheading: "Use of technology in the classroom",
        data: "Interactive whiteboards, iPads, and computers"
      },
      {
        type: undefined,
        subheading: "Is the school ready to use virtual classrooms when needed?",
        data: "Yes"
      },
      {
        type: undefined,
        subheading: "Do students practice religion at the school?",
        data: "No"
      }
    ]
  },
  {
    label: "Academics",
    icon: <GraduationCap size={20} />,
    content: [
      {
        type: undefined,
        subheading: "Do teachers assign homework to their students?",
        data: "Yes"
      },
      {
        type: undefined,
        subheading: "Approximate hours of homework given",
        data: "Maximum of 30 minutes per day in Elementary"
      }
    ]
  },
  {
    label: "Student support",
    icon: <HeartHandshake size={20} />,
    content: [
      {
        type: undefined,
        subheading: "Dedicated staff/programs for students with special learning needs",
        data: "Yes, students with special needs can be supported by shadow teachers"
      },
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
        data: "Yes"
      },
      {
        type: undefined,
        subheading: "Brief description of entry evaluation",
        data: "Short meeting with the School Principal"
      },
      {
        type: undefined,
        subheading: "Waiting list",
        data: "Sometimes, depending on class availability"
      },
      {
        type: undefined,
        subheading: "Deadline for registration (new academic year)",
        data: "No deadline, but advised before end of April"
      },
      {
        type: undefined,
        subheading: "Students can join after academic year begins",
        data: "Yes"
      }
    ]
  },
  {
    label: "School day",
    icon: <Clock size={20} />,
    content: [
      {
        type: undefined,
        subheading: "School start time",
        data: "8:30am"
      },
      {
        type: undefined,
        subheading: "School finish time",
        data: "3:15pm"
      },
      {
        type: undefined,
        subheading: "Supervised care before/after school",
        data: "Yes"
      },
      {
        type: undefined,
        subheading: "School bus service available",
        data: "Yes, with numerous lines across several districts in HCMC"
      },
      {
        type: undefined,
        subheading: "School provided lunches",
        data: "Yes, cooked directly at school from raw products"
      },
      {
        type: undefined,
        subheading: "Food alternatives for special dietary needs",
        data: "Yes, depending on the special diet"
      },
      {
        type: undefined,
        subheading: "Uniform required",
        data: "Yes"
      }
    ]
  },
  {
    label: "Extracurricular activities",
    icon: <Trophy size={20} />,
    content: [
      {
        type: undefined,
        subheading: "Extracurricular activities or clubs offered",
        data: "More than 40 options including: Theatre, Vovinam, Football, Dance, Arts, Vietnamese, Cooking, Drawing, Film direction, Pottery, Thai Boxing, Crafting, Music, Gardening, Fencing, Ballet, etc."
      },
      {
        type: undefined,
        subheading: "Sports activities included",
        data: "Daily sports class for each class, including swimming from 3 years old with a dedicated expert"
      },
      {
        type: undefined,
        subheading: "Sports teams or sport competitions available for students",
        data: "Yes"
      }
    ]
  },
  {
    label: "Facilities",
    icon: <Building2 size={20} />,
    content: [
      {
        type: undefined,
        subheading: "Facilities at the school",
        data: "Two libraries (French & English), auditorium, music and art classrooms, and a canteen"
      },
      {
        type: undefined,
        subheading: "Sports facilities at the school",
        data: "Football and basketball field, swimming pool, motricity rooms"
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