
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

export default function School27() {
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
                  <div className="w-[4dvw] rounded">
                    <a href="#">
                      <img src="/images/school logos/Vietnam Tin Hoa Logo.png" alt="no image" />
                    </a>
                  </div>
                  <h1 className="text-l font-semibold">
                    Viet Nam Tinh Hoa Supported by NLCS International
                  </h1>
                </div>

                <div style={{ marginBottom: "1rem", overflow: "auto", height: "20dvh" }} className="text-sm">
                  <div style={{ fontWeight: "bold", marginBottom: "1rem" }}>Introduction</div>
                  <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                    Viet Nam Tinh Hoa Supported by NLCS International is a selective and highly academic co-educational junior school, providing students with the 
                    best possible elements of the Vietnamese, NLCS and international curricula, as well as connecting with Vietnamese identity through the dual 
                    language teaching approach of subjects, culture, and language.
                    Fundamental to our ethos at NLCS HCMC is a belief in the importance of developing students’ enjoyment and excitement about their learning 
                    through the combination of an ambitious academic education with exceptional pastoral care, and a range of subject-led enrichment activities 
                    that cater for every possible interest and talent.
                    Everyone matters at NLCS schools; every individual is well-known, is valued for who they are, and their contribution is recognised and celebrated. The opportunities for leadership, for public speaking, for performance, for creative expression, and sports are many and varied, and coupled with our focus on supporting the individual. The result is that students feel happy, and are given the confidence to run their own race – to embrace challenges, to be grounded, resilient and to flourish in whatever walk of life they may choose.

                  </p>
                  <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                    NLCS HCMC will be the fourth addition to the NLCS Family of Schools, following the successful establishment of our schools in Jeju, Dubai and 
                    Singapore. At all NLCS schools, we believe in growing a deeply interconnected Family of Schools in order to provide our students with 
                    opportunities to develop international links, to work with and understand people from different cultures and to broaden their own perspectives.
                    Our purpose-built campus, located in the city centre in District 3, has been designed to NLCS specifications in order to ensure world-class 
                    facilities for students and the best possible learning environment for your child.
                  </p>
                </div>

                <div className="flex flex-row gap-1 text-2xl mb-3" style={{ borderBottom: "1px solid gray", paddingTop: "1rem", paddingBottom: "1rem" }}>
                  <Link href="https://vietnamtinhhoa.edu.vn" passHref legacyBehavior>
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
                  <Link href="https://www.facebook.com/vietnamtinhhoahcmc/" passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <div>
                        <img src="/images/btn/facebook_btn.png" width={40} height={40} alt="no image" />
                      </div>
                    </a>
                  </Link>
                  {/* <Link href="https://www.linkedin.com/company/la-petite-ecole-ho-chi-minh-city/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/linkedin_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link> */}
                  <Link href="https://www.instagram.com/vietnamtinhhoa" passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <div>
                        <img src="/images/btn/instagram_btn.png" width={40} height={40} alt="no image" />
                      </div>
                    </a>
                  </Link>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 gap-x-10 text-sm">
                  <InfoRow label="Curriculum" value="International and Vietnamese" isLink />
                  <InfoRow label="Leaving qualifications" value="N/A" isLink />
                  <InfoRow label="Age range" value="range: (6 to 12)" />
                  <InfoRow label="Tuition" value="532,000,000 ₫ to 574,750,000 ₫" />
                  <InfoRow label="Address" value="214 – 216 Pasteur, Vo Thi Sau Ward, District 3, HCMC Vietnam" />
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.8156531769357!2d106.6904097!3d10.7834253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fb4e481b205%3A0x2c0847422e8df8a9!2sTr%C6%B0%E1%BB%9Dng%20ti%E1%BB%83u%20h%E1%BB%8Dc%20Vi%E1%BB%87t%20Nam%20Tinh%20Hoa!5e0!3m2!1sen!2s!4v1691333300000!5m2!1sen!2s"
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
        data: "Viet Nam Tinh Hoa Supported by NLCS International is a selective, highly academic co-educational junior school combining Vietnamese, NLCS and international curricula with a dual language approach that connects students to Vietnamese identity. The school values enjoyment and excitement in learning through ambitious academics, exceptional pastoral care, and a rich range of enrichment activities."
      },
      {
        type: undefined,
        subheading: "Teaching approach of the school",
        data: "We teach to the top and provide strong support with two to three professionals in each classroom. Our progressive approach gives students choice and agency. We believe in deep subject knowledge over broad general knowledge, and that students learn best when interested in the topic."
      }
    ]
  },
  {
    label: "Nationalities",
    icon: <Users size={20} />,
    content: [
      {
        type: undefined,
        subheading: "Number of nationalities represented in the school",
        data: "5"
      },
      {
        type: undefined,
        subheading: "Most common nationality",
        data: "Vietnamese"
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
        subheading: "Language support for students not fluent in English and Vietnamese",
        data: "Grades 1-3: one expat English teacher, one Vietnamese teacher and one Vietnamese teaching assistant in each classroom. Grades 4-5: one expat teacher and one TA per class, with one Vietnamese teacher for every two classes."
      },
      {
        type: undefined,
        subheading: "Additional language classes offered by the school",
        data: "Planned to offer Mandarin"
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
        data: "20"
      },
      {
        type: undefined,
        subheading: "Does the school employ teaching assistants?",
        data: "Yes, one per classroom in grades 1-5"
      },
      {
        type: undefined,
        subheading: "Use of technology in the classroom",
        data: "1-to-1 iPad program, CleverTouch Smart Screen in every classroom, Design Technology offered in grades 3-5."
      },
      {
        type: undefined,
        subheading: "Is the school ready to use virtual classrooms when needed?",
        data: "Yes"
      },
      {
        type: undefined,
        subheading: "Do students practice religion at the school?",
        data: "N/A"
      },
      {
        type: undefined,
        subheading: "How does the school accommodate non-religious students or students of a different religion?",
        data: "Yes, support provided if needed."
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
        data: "PYP candidate school; Grade 5 students complete the IB PYP Exhibition."
      },
      {
        type: undefined,
        subheading: "Do teachers assign homework to their students?",
        data: "Yes, as needed; students are required to read every night."
      },
      {
        type: undefined,
        subheading: "Approximate hours of homework given",
        data: "30-60 minutes"
      },
      {
        type: undefined,
        subheading: "Percentage of students who pursue further education post-graduation",
        data: "N/A (currently a primary school)"
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
        data: "Yes, accepts up to 10% of students with special learning needs."
      },
      {
        type: undefined,
        subheading: "Learning support offered",
        data: "Learning specialists work directly in classrooms and provide one-on-one support when needed."
      },
      {
        type: undefined,
        subheading: "Support for gifted, able and talented students",
        data: "Selective school with academic extension and challenge for all students."
      },
      {
        type: undefined,
        subheading: "Student access to education psychologist",
        data: "Yes, full-time educational psychologist on staff."
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
        data: "Required for all; grades 3+ sit standardised tests covering cognitive, reasoning, logic, maths, reading, and writing."
      },
      {
        type: undefined,
        subheading: "Brief description of entry evaluation",
        data: "See above standardised testing."
      },
      {
        type: undefined,
        subheading: "Waiting list",
        data: "Not currently"
      },
      {
        type: undefined,
        subheading: "Deadline for registration (new academic year)",
        data: "August and January for each semester"
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
        data: "7:30am"
      },
      {
        type: undefined,
        subheading: "School finish time",
        data: "3:00pm"
      },
      {
        type: undefined,
        subheading: "Supervised care before/after school",
        data: "No; daily enrichment activities offered from 3:00 - 4:00pm"
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
        data: "Not at this point"
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
        data: "STEAM, Stop Motion Animation, Art, Multi-Skills Sports, Football, Book Club, plus partnerships with Soul Academy, Vietnam Contemporary Visual Arts Academy, ACT Academy, and Vietnam International Institute of Sports."
      },
      {
        type: undefined,
        subheading: "Sports activities included",
        data: "Swimming, football, basketball, badminton, Vovinam, table tennis, and other indoor/outdoor activities."
      },
      {
        type: undefined,
        subheading: "Sports teams or sport competitions available for students",
        data: "No, currently only a primary school."
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
        data: "Science Lab (double lab), Design Technology Labs (3 rooms: Digital Design, Fabrication, Green Room), Art Studio, Music Studio, Library"
      },
      {
        type: undefined,
        subheading: "Sports facilities at the school",
        data: "Football pitch, outdoor basketball and badminton courts, Movement Room, swimming pool across the street"
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