
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

export default function School25() {
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
                      <img src="/images/school logos/Western Australia school system logo.png" alt="no image" />
                    </a>
                  </div>
                  <h1 className="text-l font-semibold">
                    The Western Australian International School System
                  </h1>
                </div>

                <div style={{ marginBottom: "1rem", overflow: "auto", height: "20dvh" }} className="text-sm">
                  <div style={{ fontWeight: "bold", marginBottom: "1rem" }}>Introduction</div>
                  <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                    The Western Australian International School System (WASS) which provides education
                    from Kindergarten through to Senior Secondary School, is currently offering
                    international education curriculums for students aged two years old to senior secondary
                    years. WASS offers a wide variety of options for students with programs from the
                    Vietnam Ministry of Education and Training (MoET), the Western Australian Program
                    (WAP), Western Australian Certificate of Education (WACE), American Diploma
                    Pathway (ADP) and the International Baccalaureate Diploma Progamme (IBDP).
                  </p>
                  <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                    At WASS, we believe that each child is unique and has their own potential. We strive to develop them by believing in them as capable individuals 
                    in a secure, caring, stimulating, inclusive academic atmosphere in which to grow and mature emotionally, intellectually, physically, and 
                    socially.
                  </p>
                </div>

                <div className="flex flex-row gap-1 text-2xl mb-3" style={{ borderBottom: "1px solid gray", paddingTop: "1rem", paddingBottom: "1rem" }}>
                  <Link href="https://wass.edu.vn/" passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <div>
                        <img src="/images/btn/globe_btn.png" width={40} height={40} alt="no image" />
                      </div>
                    </a>
                  </Link>
                  <Link href="https://www.youtube.com/channel/UCQOTIhSF11fdZpwLd9ulQYw" passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <div>
                        <img src="/images/btn/youtube_btn.png" width={40} height={40} alt="no image" />
                      </div>
                    </a>
                  </Link>
                  <Link href="https://www.facebook.com/wass.edu.vn" passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <div>
                        <img src="/images/btn/facebook_btn.png" width={40} height={40} alt="no image" />
                      </div>
                    </a>
                  </Link>
                  <Link href="https://www.linkedin.com/company/the-western-australian-international-school-system-wass-/" passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <div>
                        <img src="/images/btn/linkedin_btn.png" width={40} height={40} alt="no image" />
                      </div>
                    </a>
                  </Link>
                  {/* <Link href="https://www.instagram.com/saintangefrenchschoolhcmc/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/instagram_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link> */}
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 gap-x-10 text-sm">
                  <InfoRow label="Curriculum" value="Australian and IB" isLink />
                  <InfoRow label="Leaving qualifications" value="IB Diploma" isLink />
                  <InfoRow label="Age range" value="range: (3 to 18)" />
                  <InfoRow label="Tuition" value="108,075,000 ₫ to 480,690,000 ₫" />
                  <InfoRow label="Address" value="International Campus: Ages 7 to 17 Address: 157 Ly Chinh Thang St., Ward 7, Dist. 3, Ho Chi Minh City, Vietnam" />
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
              src="https://www.youtube.com/embed/MnBwUAzzuXg"
              title="Vercel Ship Keynote: Introducing the frontend cloud"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              style={{ width: "100%", margin: "auto", aspectRatio: "16/9", backgroundColor: "gray" }}
            // allowFullScreen
            ></iframe>
          </div>
          <div className="flex-1 flex lg:flex-row flex-col lg:gap-[1dvw] gap-[1rem]">
            <div className="w-full lg:w-1/2 overflow-hidden" id="slideheight">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.638755050805!2d106.6818919!3d10.7839323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f2c363abec7%3A0x22ebbf1589cb884a!2sThe%20western%20australian%20international%20school%20system!5e0!3m2!1sen!2s!4v1691332890001!5m2!1sen!2s"
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
        data: "The Western Australian International School System (WASS) provides education from Kindergarten through to Senior Secondary School, offering multiple international education curriculums. These include programs from the Vietnam Ministry of Education and Training (MoET), the Western Australian Program (WAP), Western Australian Certificate of Education (WACE), American Diploma Pathway (ADP), and the International Baccalaureate Diploma Programme (IBDP). WASS believes that each child is unique and capable, providing a secure, caring, inclusive academic environment for emotional, intellectual, physical, and social development."
      },
      {
        type: undefined,
        subheading: "Teaching approach of the school",
        data: "Students are placed at the center of all learning experiences, with teaching that emphasizes collaborative learning, inquiry-based learning, investigation, and problem-solving. Teachers act as guides to foster student curiosity and promote respect for all people and things."
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
        data: "2000"
      },
      {
        type: undefined,
        subheading: "Number of nationalities represented in the school",
        data: "20"
      },
      {
        type: undefined,
        subheading: "Most common nationality",
        data: "Vietnamese"
      },
      {
        type: undefined,
        subheading: "Ratio of local students to international students",
        data: "5:1"
      }
    ]
  },
  {
    label: "Languages",
    icon: <Languages size={20} />,
    content: [
      {
        type: undefined,
        subheading: "Native English and Vietnamese speaking teachers",
        data: "Yes"
      },
      {
        type: undefined,
        subheading: "Language support for students not fluent in English or Vietnamese",
        data: "Yes. The English for Academic Purposes (EAP) Program supports non-English speakers. After-school classes (free of charge) are also provided to build confidence in English."
      },
      {
        type: undefined,
        subheading: "Additional language classes offered by the school",
        data: "Bilingual Program: Vietnamese and English (French as third language in Secondary). International Program: English (instruction language), French as second language."
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
        data: "24"
      },
      {
        type: undefined,
        subheading: "Average number of students per class",
        data: "20"
      },
      {
        type: undefined,
        subheading: "Does the school employ teaching assistants?",
        data: "Yes"
      },
      {
        type: undefined,
        subheading: "Use of technology in the classroom",
        data: "Google Classroom is used to manage online classes and weekly assignments."
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
        data: "Programs include WACE, IBDP, and ADP"
      },
      {
        type: undefined,
        subheading: "Do teachers assign homework to their students?",
        data: "Yes, assignments are managed through the Student Portal and Google Classroom."
      },
      {
        type: undefined,
        subheading: "Approximate hours of homework given",
        data: "Approximately 30 minutes to 2 hours per day, depending on student age."
      },
      {
        type: undefined,
        subheading: "Percentage of students who pursue further education post-graduation",
        data: "100%"
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
        data: "Yes, entrance exam is free of charge"
      },
      {
        type: undefined,
        subheading: "Brief description of entry evaluation",
        data: "Consists of an interview and a writing examination (for Year 2 to Year 10 students)."
      },
      {
        type: undefined,
        subheading: "Waiting list",
        data: "Yes"
      },
      {
        type: undefined,
        subheading: "Deadline for registration (new academic year)",
        data: "Rolling admissions subject to availability"
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
        data: "8:10am"
      },
      {
        type: undefined,
        subheading: "School finish time",
        data: "4:30pm"
      },
      {
        type: undefined,
        subheading: "Supervised care before/after school",
        data: "Yes"
      },
      {
        type: undefined,
        subheading: "School bus service available",
        data: "Yes"
      },
      {
        type: undefined,
        subheading: "School provided lunches",
        data: "Yes"
      },
      {
        type: undefined,
        subheading: "Food alternatives for special dietary needs",
        data: "Yes"
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
        data: "Homework program and after-school clubs from Monday to Thursday (free of charge)."
      },
      {
        type: undefined,
        subheading: "Sports activities included",
        data: "Swimming, Football, Hockey, Golf, Basketball"
      }
    ]
  },
  {
    label: "Facilities",
    icon: <Building2 size={20} />,
    content: [
      {
        type: undefined,
        subheading: "Sports facilities at the school",
        data: "Swimming pool, Basketball court"
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