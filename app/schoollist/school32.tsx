
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

export default function School32() {
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
                  <div className="w-[3dvw] rounded">
                    <a href="#">
                      <img src="/images/school logos/The American School Logo.png" alt="no image" />
                    </a>
                  </div>
                  <h1 className="text-l font-semibold">
                    The American School
                  </h1>
                </div>

                <div style={{ marginBottom: "1rem", overflow: "auto", height: "20dvh" }} className="text-sm">
                  <div style={{ fontWeight: "bold", marginBottom: "1rem" }}>Introduction</div>
                  <div style={{ marginBottom: "1rem", textAlign: "justify" }}>
                    <ul style={{listStyleType: "disc"}}>
                      <li>Educating the whole child incorporating mind, body, and spirit.</li>
                      <li>Dynamic and rigorous American educational program enriched by the multicultural setting in Vietnam</li>
                      <li>Immersive EAL program supporting the theory of additive bilingualism</li>
                      <li>Co-curricular and extra-curricular activities to extend the learning beyond the classroom</li>
                      <li>Expanding to new, modern facility in January 2020.</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-row gap-1 text-2xl mb-3" style={{ borderBottom: "1px solid gray", paddingTop: "1rem", paddingBottom: "1rem" }}>
                  <Link href="https://www.tas.edu.vn/" passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <div>
                        <img src="/images/btn/globe_btn.png" width={40} height={40} alt="no image" />
                      </div>
                    </a>
                  </Link>
                  <Link href="https://www.youtube.com/user/TheTASVIETNAM" passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <div>
                        <img src="/images/btn/youtube_btn.png" width={40} height={40} alt="no image" />
                      </div>
                    </a>
                  </Link>
                  <Link href="https://www.facebook.com/TheAmericanSchoolTAS/" passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <div>
                        <img src="/images/btn/facebook_btn.png" width={40} height={40} alt="no image" />
                      </div>
                    </a>
                  </Link>
                  <Link href=" https://www.linkedin.com/school/the-american-school/" passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <div>
                        <img src="/images/btn/linkedin_btn.png" width={40} height={40} alt="no image" />
                      </div>
                    </a>
                  </Link>
                  <Link href="https://www.instagram.com/theamericanschooltas/" passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <div>
                        <img src="/images/btn/instagram_btn.png" width={40} height={40} alt="no image" />
                      </div>
                    </a>
                  </Link>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 gap-x-10 text-sm">
                  <InfoRow label="Curriculum" value="American" isLink />
                  <InfoRow label="Leaving qualifications" value="SAT and PSAT" isLink />
                  <InfoRow label="Age range" value="range: (2 to 18)" />
                  <InfoRow label="Tuition" value="239,800,000 ₫ to 723,500,000 ₫" />
                  <InfoRow label="Address" value="6 Song Hanh Road Ho Chi Minh City - Long Thanh - Dau Giay Freeway An Phu Ward, District 2 Ho Chi Minh City, Vietnam" />
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
              src="https://www.youtube.com/embed/91T3IYEEhm0"
              title="Vercel Ship Keynote: Introducing the frontend cloud"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              style={{ width: "100%", margin: "auto", aspectRatio: "16/9", backgroundColor: "gray" }}
            // allowFullScreen
            ></iframe>
          </div>
          <div className="flex-1 flex lg:flex-row flex-col lg:gap-[1dvw] gap-[1rem]">
            <div className="w-full lg:w-1/2 overflow-hidden" id="slideheight">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.023145211716!2d106.7613006!3d10.7946963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175274682612371%3A0xc8b792b76bec500b!2sThe%20American%20School%20-%20Tr%C6%B0%E1%BB%9Dng%20Qu%E1%BB%91c%20T%E1%BA%BF%20M%E1%BB%B9%20TAS!5e0!3m2!1sen!2s!4v1691340000000!5m2!1sen!2s"
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
        type: "list",
        subheading: "Qualities and characteristics best defining the school",
        data: [
          "Educating the whole child incorporating mind, body, and spirit",
          "Dynamic and rigorous American educational program enriched by the multicultural setting in Vietnam",
          "Immersive EAL program supporting the theory of additive bilingualism",
          "Co-curricular and extra-curricular activities to extend the learning beyond the classroom",
          "Expanding to new, modern facility in January 2020"
        ]
      },
      {
        type: "paragraph",
        subheading: "Teaching approach of the school",
        data: `Courses are based on American content standards (CCSS, Next Gen, AERO, NCAS) and planned using the Understanding by Design (UbD) framework. Instruction focuses on developing transfer skills and creating engaging learning activities that promote critical thinking, collaboration, and reflection. The environment encourages students to be responsible, reflective learners and risk-takers.`
      }
    ]
  },
  {
    label: "Nationalities",
    icon: <Users size={20} />,
    content: [
      { subheading: "Number of students", data: "More than 500", type: undefined },
      { subheading: "Number of nationalities represented", data: "More than 20", type: undefined },
      { subheading: "Most common nationality", data: "Vietnamese", type: undefined },
      { subheading: "Ratio of local to international students", data: "80% local / 20% international", type: undefined }
    ]
  },
  {
    label: "Languages",
    icon: <Languages size={20} />,
    content: [
      { subheading: "Native English speaking teachers", data: "Yes", type: undefined },
      { subheading: "Language support for non-English speakers", data: "Yes – through EAL (English as an Additional Language)", type: undefined },
      {
        type: "list",
        subheading: "Additional language classes offered",
        data: ["Vietnamese", "Spanish", "Mandarin"]
      }
    ]
  },
  {
    label: "Classroom",
    icon: <Pencil size={20} />,
    content: [
      { subheading: "Max. number of students per class", data: "22", type: undefined },
      { subheading: "Average number of students per class", data: "12–15, depending on grade level", type: undefined },
      { subheading: "Teaching assistants employed", data: "Yes", type: undefined },
      {
        type: "list",
        subheading: "Technology in the classroom",
        data: [
          "iPads for Elementary School students",
          "1:1 computers/laptops in Middle & High School",
          "Dedicated computer labs in Elementary and Secondary divisions"
        ]
      },
      {
        subheading: "Virtual classroom readiness",
        data: "Yes – teachers use platforms such as Zoom, Google Classroom, and OneNote",
        type: undefined
      },
      { subheading: "Religious practice at school", data: "No", type: undefined }
    ]
  },
  {
    label: "Academics",
    icon: <GraduationCap size={20} />,
    content: [
      { subheading: "External examinations", data: "PSAT, SAT", type: undefined },
      { subheading: "Results in these examinations", data: "No current data available", type: undefined },
      { subheading: "Are students assigned homework?", data: "Yes – as an extension of in-class learning", type: undefined },
      {
        subheading: "Approximate homework time",
        data: "No fixed time – increases by grade level and as needed to complete tasks",
        type: undefined
      },
      {
        subheading: "Percentage of students pursuing higher education",
        data: "100%",
        type: undefined
      }
    ]
  },
  {
    label: "Student support",
    icon: <HeartPulse size={20} />,
    content: [
      {
        subheading: "Dedicated staff/programs for special learning needs",
        data: "Yes – Learning Support Department provides a variety of assistance options",
        type: undefined
      },
      {
        type: "list",
        subheading: "Learning support offered",
        data: [
          "Goal setting",
          "Appropriate accommodations",
          "Push-in & pull-out support",
          "1:1 classroom assistance",
          "Differentiation and scaffolding support for teachers"
        ]
      },
      {
        subheading: "Support for gifted and talented students",
        data: "Yes – AP classes and extracurricular activities like performing arts, musicals, and school performances",
        type: undefined
      },
      {
        subheading: "Access to educational psychologist",
        data: "Yes – Social-Emotional Counselor available for K–12, holds a Bachelor in Psychology with Minor in Education",
        type: undefined
      }
    ]
  },
  {
    label: "Admissions",
    icon: <FileText size={20} />,
    content: [
      { subheading: "Entry evaluation", data: "Yes – includes transcript review, diagnostic test, and interview", type: undefined },
      {
        type: "list",
        subheading: "Evaluation includes",
        data: [
          "English Language Test (reading, writing, speaking, listening)",
          "Mathematics Test (concepts and skills)",
          "15-minute interview by ESL teacher"
        ]
      },
      { subheading: "Waiting list", data: "Yes", type: undefined },
      { subheading: "Deadline for registration", data: "No deadline – rolling admissions depending on space", type: undefined },
      { subheading: "Can students join mid-year?", data: "Yes – subject to class availability and admissions review", type: undefined }
    ]
  },
  {
    label: "School Day",
    icon: <Clock size={20} />,
    content: [
      { subheading: "Start time", data: "7:45 AM", type: undefined },
      { subheading: "Finish time", data: "2:45 PM", type: undefined },
      { subheading: "Supervised care after school", data: "Yes – until 3:30 PM for Early Childhood and Elementary students", type: undefined },
      { subheading: "School bus service", data: "Yes", type: undefined },
      { subheading: "Lunch provided", data: "Yes", type: undefined },
      { subheading: "Special dietary options", data: "Yes – includes vegan meals", type: undefined },
      { subheading: "Uniform required", data: "Yes", type: undefined }
    ]
  },
  {
    label: "Extracurricular Activities",
    icon: <Trophy size={20} />,
    content: [
      {
        type: "list",
        subheading: "Clubs and activities offered",
        data: [
          "Annual musicals and performing arts events",
          "Muay Thai, Acting, Magic (Early/Elementary)",
          "Glee, Drawing, Board Games, Sustainability, MUN (Middle/High)"
        ]
      },
      {
        type: "list",
        subheading: "Sports included",
        data: [
          "Running",
          "Basketball",
          "Volleyball",
          "Soccer",
          "Swimming",
          "Table Tennis",
          "Badminton",
          "Cross Country"
        ]
      },
      {
        subheading: "Competitive sports teams",
        type: "paragraph",
        data: `Yes – with teams across age groups: U11, U14, U19 for sports including basketball, soccer, badminton, table tennis, volleyball, and cross country. Also includes Middle/High School swimming teams.`
      }
    ]
  },
  {
    label: "Facilities",
    icon: <Building2 size={20} />,
    content: [
      {
        type: "list",
        subheading: "Sports facilities available",
        data: [
          "Swimming pools",
          "Grass soccer field",
          "Basketball courts",
          "Tennis court",
          "Mini golf course with driving range"
        ]
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