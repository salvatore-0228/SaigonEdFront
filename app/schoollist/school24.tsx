
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

export default function School24() {
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
                      <img src="/images/school logos/Saint Ange.jpg" alt="no image" />
                    </a>
                  </div>
                  <h1 className="text-l font-semibold">
                    Saint Ange French International School
                  </h1>
                </div>

                <div style={{ marginBottom: "1rem", overflow: "auto", height: "20dvh" }} className="text-sm">
                  <div style={{ fontWeight: "bold", marginBottom: "1rem" }}>Introduction</div>
                  <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                    Saint Ange School is a private, French-speaking and secular school.
                    It offers a family style and caring environment favourable to the success and development of your child!
                  </p>
                  <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                    Your child joins an approved international school which opens the doors to the largest worldwide network of schools thanks to the AEFE network!
                    It is the only French private school that received agreement in category "International School" issued by the ministries and administrations of Vietnam.
                  </p>
                </div>

                <div className="flex flex-row gap-1 text-2xl mb-3" style={{ borderBottom: "1px solid gray", paddingTop: "1rem", paddingBottom: "1rem" }}>
                  <Link href=" https://saintangeschool.com/" passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <div>
                        <img src="/images/btn/globe_btn.png" width={40} height={40} alt="no image" />
                      </div>
                    </a>
                  </Link>
                  {/* <Link href="https://www.youtube.com/channel/UCVZmlCinKvjpwMjDrC6Lihw" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/youtube_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link> */}
                  <Link href=" https://www.facebook.com/ecolesaintange" passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <div>
                        <img src="/images/btn/facebook_btn.png" width={40} height={40} alt="no image" />
                      </div>
                    </a>
                  </Link>
                  <Link href=" https://www.linkedin.com/company/saintange-vietnam/" passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <div>
                        <img src="/images/btn/linkedin_btn.png" width={40} height={40} alt="no image" />
                      </div>
                    </a>
                  </Link>
                  <Link href="https://www.instagram.com/saintangefrenchschoolhcmc/" passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <div>
                        <img src="/images/btn/instagram_btn.png" width={40} height={40} alt="no image" />
                      </div>
                    </a>
                  </Link>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 gap-x-10 text-sm">
                  <InfoRow label="Curriculum" value="French" isLink />
                  <InfoRow label="Leaving qualifications" value="N/A" isLink />
                  <InfoRow label="Age range" value="range: (2 to 11)" />
                  <InfoRow label="Tuition" value="150,974,250 ₫ to 226,852,500 ₫" />
                  <InfoRow label="Address" value="Nursery Campus: Ages 2 to 3 Address: 188 A2 Nguyen Van Huyong - Thao Dien District 2 – Ho Chi Minh, Vietnam" />
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
              // src="https://www.youtube.com/embed/5A1bCmyT8Dk"
              title="Vercel Ship Keynote: Introducing the frontend cloud"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              style={{ width: "100%", margin: "auto", aspectRatio: "16/9", backgroundColor: "gray" }}
            // allowFullScreen
            ></iframe>
          </div>
          <div className="flex-1 flex lg:flex-row flex-col lg:gap-[1dvw] gap-[1rem]">
            <div className="w-full lg:w-1/2 overflow-hidden" id="slideheight">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1511453479625!2d106.7272009!3d10.8171006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527d5abc9dd71%3A0x5a3377879075a4e0!2sCr%C3%A8che%20Fran%C3%A7aise%20Saint%20Ange%20-%20Nursery!5e0!3m2!1sen!2s!4v1722583000000!5m2!1sen!2s"
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
        data: "Saint Ange School is a private, French-speaking and secular school. It offers a family style and caring environment favourable to the success and development of your child. Your child joins an approved international school which opens the doors to the largest worldwide network of schools thanks to the AEFE network. It is the only French private school that received agreement in category 'International School' issued by the ministries and administrations of Vietnam."
      },
      {
        type: undefined,
        subheading: "Teaching approach of the school",
        data: "Enrolling your child in Saint Ange School means making sure that a professional team surrounds them and knows them. Their mission is to lead your children, step by step, towards success, in harmony and safety. Your children will receive a quality French education, in accordance with French curriculum and values, reinforced by a sustained practice of English which they will be introduced to from nursery school onwards. Saint Ange School is one of the cheapest international schools in Vietnam without sacrificing the quality of education provided."
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
        data: "150"
      },
      {
        type: undefined,
        subheading: "Number of nationalities represented in the school",
        data: "20"
      },
      {
        type: undefined,
        subheading: "Most common nationality",
        data: "French"
      },
      {
        type: undefined,
        subheading: "Ratio of local students to international students",
        data: "30%"
      }
    ]
  },
  {
    label: "Languages",
    icon: <Languages size={20} />,
    content: [
      {
        type: undefined,
        subheading: "Native French speaking teachers",
        data: "Yes, our teachers are French native and qualified in education."
      },
      {
        type: undefined,
        subheading: "Language support for students not fluent in French",
        data: "Yes, FLE (French as a Foreign Language) classes are suggested to every pupil who needs to improve their French skills."
      },
      {
        type: undefined,
        subheading: "Additional language classes offered by the school",
        data: "English in intensive courses and in Sports and Arts, Vietnamese"
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
        data: "22"
      },
      {
        type: undefined,
        subheading: "Average number of students per class",
        data: "18"
      },
      {
        type: undefined,
        subheading: "Does the school employ teaching assistants?",
        data: "Yes, 2 in Kindergarten and 1st–3rd grades; 1 assistant in 4th–5th grade"
      },
      {
        type: undefined,
        subheading: "Use of technology in the classroom",
        data: "One computer is at disposal in each classroom."
      },
      {
        type: undefined,
        subheading: "Is the school ready to use virtual classrooms when needed?",
        data: "Yes, Saint Ange school has optimized online learning with adapted schedules and tools. Includes interactive lessons, sports, storytelling, expression classes, and more. During closures, tuition fees are discounted (50% for kindergarten, 30% for primary)."
      },
      {
        type: undefined,
        subheading: "Do students practice religion at the school?",
        data: "No, Saint Ange is a secular school."
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
        data: "Yes, pupils have some exercises to complete."
      },
      {
        type: undefined,
        subheading: "Approximate hours of homework given",
        data: "1st–3rd grade: ~20 mins/day; 4th–5th grade: ~30 mins/day"
      },
      {
        type: undefined,
        subheading: "Percentage of students who pursue further education post-graduation",
        data: "100%"
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
        data: "Yes, assistants can help in most cases. Pediatricians may recommend additional care (e.g., in-class nurse)."
      },
      {
        type: undefined,
        subheading: "Support for gifted, able, and talented students",
        data: "Yes, access to a French psychologist specializing in educational support (shared with other French schools)."
      },
      {
        type: undefined,
        subheading: "Student access to educational psychologist",
        data: "Yes, through shared French psychologist network."
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
        data: "No"
      },
      {
        type: undefined,
        subheading: "Waiting list",
        data: "No, but places limited depending on availability"
      },
      {
        type: undefined,
        subheading: "Deadline for registration (new academic year)",
        data: "End of September, but enrolment can happen all year depending on availability"
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
        data: "8:00 (Nursery: 7:30)"
      },
      {
        type: undefined,
        subheading: "School finish time",
        data: "16:00"
      },
      {
        type: undefined,
        subheading: "Supervised care before/after school",
        data: "Yes, includes after-school homework tutoring"
      },
      {
        type: undefined,
        subheading: "School bus service available",
        data: "Yes, 4 buses for different city routes"
      },
      {
        type: undefined,
        subheading: "School provided lunches",
        data: "Yes, western and local meals prepared on site by chef"
      },
      {
        type: undefined,
        subheading: "Food alternatives for special dietary needs",
        data: "Yes, chef adapts menu for special diets"
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
        data: "Daily activities (1 hour) include radio, yoga, theater, choir, swimming, etc."
      },
      {
        type: undefined,
        subheading: "Sports activities included",
        data: "Basketball, swimming, football, wrestling, yoga, meditation, karate, Qi Gong, fitness, etc."
      },
      {
        type: undefined,
        subheading: "Sports teams or competitions",
        data: "Yes, Saint Ange Football Club"
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
        data: "Each class has its own small library with age-appropriate books"
      },
      {
        type: undefined,
        subheading: "Sports facilities at the school",
        data: "Outdoor basketball court, swimming pool, 2 yards, 2 mobility rooms"
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