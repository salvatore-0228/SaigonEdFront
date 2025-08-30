
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

export default function School37() {
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
                      <img src="/images/school logos/ABC international School Logo.png" alt="no image" />
                    </a>
                  </div>
                  <h1 className="text-l font-semibold">
                    The ABC International School
                  </h1>
                </div>

                <div style={{ marginBottom: "1rem", overflow: "auto", height: "20dvh" }} className="text-sm">
                  <div style={{ fontWeight: "bold", marginBottom: "1rem" }}>Introduction</div>
                  <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                    Established in 1995, The ABC International School is thriving, popular and well established. It provides an International Education of 
                    World-Wide Value for pupils between the ages of 2-18 years through the medium of English and in accordance with the standards of the British 
                    National Curriculum. Pupils of all ages are happy, high achievers who are well motivated and superbly well cared for. The school is unashamedly 
                    proud of its’ teaching faculty of more than seventy expatriates who are a well-qualified and experienced team that promote the very highest 
                    levels of student achievement through the use of experiential and holistic teaching methods. The whole community is accommodated in 
                    well-resourced purpose built facilities. The standard timetable is complimented by an extensive range of extra-curricular activities and all 
                    campuses are served by an extensive home to school bus system.
                  </p>
                  <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                    Students graduate with qualifications from the AQA and Cambridge IGCSE and AS/A level Examination Boards enabling students to gain places 
                    (many with scholarships) into many of the world’s leading universities. The ABCIS is currently the only school in Vietnam recognised and 
                    registered to offer the additional entry examinations for Medicine and Law at the Universities of Oxford and Cambridge.
                  </p>
                </div>

                <div className="flex flex-row gap-1 text-2xl mb-3" style={{ borderBottom: "1px solid gray", paddingTop: "1rem", paddingBottom: "1rem" }}>
                  <Link href="https://www.theabcis.com/" passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <div>
                        <img src="/images/btn/globe_btn.png" width={40} height={40} alt="no image" />
                      </div>
                    </a>
                  </Link>
                  <Link href="https://www.youtube.com/channel/UCJSXwoASiTXxU-erS3sY5vw/featured" passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <div>
                        <img src="/images/btn/youtube_btn.png" width={40} height={40} alt="no image" />
                      </div>
                    </a>
                  </Link>
                  <Link href="https://www.facebook.com/profile.php" passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <div>
                        <img src="/images/btn/facebook_btn.png" width={40} height={40} alt="no image" />
                      </div>
                    </a>
                  </Link>
                  <Link href="https://www.linkedin.com/company/theabcis/" passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <div>
                        <img src="/images/btn/linkedin_btn.png" width={40} height={40} alt="no image" />
                      </div>
                    </a>
                  </Link>
                  {/* <Link href="https://www.instagram.com/ecole_boule_et_billes_/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/instagram_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link> */}
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 gap-x-10 text-sm">
                  <InfoRow label="Curriculum" value="British" isLink />
                  <InfoRow label="Leaving qualifications" value="IGCSE and A-Levels" isLink />
                  <InfoRow label="Age range" value="range: (2 to 18)" />
                  <InfoRow label="Tuition" value="310,000,000 ₫ to 790,500,000 ₫" />
                  <InfoRow label="Address" value="Nhà Bè Campus: Ages 7 to 18 Address: #2, Street No. 9, Khu Dan Cu Tan An Huy, AP 5, Phuoc Kien, Nha Be, Ho Chi Minh City, Vietnam 700 000" />
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
              src="https://www.youtube.com/embed/Q0bpEHwEInk"
              title="Vercel Ship Keynote: Introducing the frontend cloud"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              style={{ width: "100%", margin: "auto", aspectRatio: "16/9", backgroundColor: "gray" }}
            // allowFullScreen
            ></iframe>
          </div>
          <div className="flex-1 flex lg:flex-row flex-col lg:gap-[1dvw] gap-[1rem]">
            <div className="w-full lg:w-1/2 overflow-hidden" id="slideheight">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.710088408503!2d106.702357!3d10.7216598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752feb7110e8ef%3A0xf38587d2a083cf60!2sThe%20ABC%20International%20School%20Secondary%20Campus!5e0!3m2!1sen!2s!4v1691346580000!5m2!1sen!2s"
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
    icon: <Info size={20} />,
    content: [
      {
        type: undefined,
        subheading: "Qualities and characteristics best defining the school",
        data: "Established in 1995, The ABC International School is thriving, popular and well established. It provides an International Education of World-Wide Value for pupils between the ages of 2-18 years through the medium of English and in accordance with the standards of the British National Curriculum. Pupils of all ages are happy, high achievers who are well motivated and superbly well cared for. The school is unashamedly proud of its teaching faculty of more than seventy expatriates who are a well-qualified and experienced team that promote the very highest levels of student achievement through the use of experiential and holistic teaching methods. The whole community is accommodated in well-resourced purpose built facilities. The standard timetable is complimented by an extensive range of extra-curricular activities and all campuses are served by an extensive home to school bus system. Students graduate with qualifications from the AQA and Cambridge IGCSE and AS/A level Examination Boards enabling students to gain places (many with scholarships) into many of the world’s leading universities. The ABCIS is currently the only school in Vietnam recognised and registered to offer the additional entry examinations for Medicine and Law at the Universities of Oxford and Cambridge."
      }
    ]
  },
  {
    label: "Nationalities",
    icon: <Flag size={20} />,
    content: [
      {
        type: undefined,
        subheading: "Number of students",
        data: "680"
      },
      {
        type: undefined,
        subheading: "Number of nationalities represented in the school",
        data: "34"
      },
      {
        type: undefined,
        subheading: "Most common nationality",
        data: "Vietnamese"
      },
      {
        type: undefined,
        subheading: "Ratio of local students to international students",
        data: "53:47"
      }
    ]
  },
  {
    label: "Languages",
    icon: <Languages size={20} />,
    content: [
      {
        type: undefined,
        subheading: "Native English speaking teachers",
        data: "Yes"
      },
      {
        type: undefined,
        subheading: "Language support for students not fluent in English",
        data: "Yes"
      },
      {
        type: undefined,
        subheading: "Additional language classes offered by the school",
        data: "French, Mandarin Chinese, Vietnamese"
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
        data: "25"
      },
      {
        type: undefined,
        subheading: "Average number of students per class",
        data: "18"
      },
      {
        type: undefined,
        subheading: "Does the school employ teaching assistants?",
        data: "Yes"
      },
      {
        type: undefined,
        subheading: "Use of technology in the classroom",
        data: "Yes"
      },
      {
        type: undefined,
        subheading: "Is the school ready to use virtual classrooms when needed?",
        data: "Yes, during COVID-19 quarantines."
      },
      {
        type: undefined,
        subheading: "Do students practice religion at the school? What religion?",
        data: "No"
      },
      {
        type: undefined,
        subheading: "How does the school accommodate non-religious students or students of a different religion?",
        data: "Open to all"
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
        data: "IGCSE and A Levels"
      },
      {
        type: undefined,
        subheading: "Results in these examinations",
        data: "65%+ A/A* most years"
      },
      {
        type: undefined,
        subheading: "Do teachers assign homework to their students?",
        data: "Yes"
      },
      {
        type: undefined,
        subheading: "Approximate hours of homework given",
        data: "Various depending on age."
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
    icon: <Heart size={20} />,
    content: [
      {
        type: undefined,
        subheading: "Dedicated staff/programs for students with special learning needs",
        data: "No"
      },
      {
        type: undefined,
        subheading: "The school supports gifted, able and talented students",
        data: "Yes"
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
        subheading: "Brief description of entry evaluation required",
        data: "Interview, online test, written test."
      },
      {
        type: undefined,
        subheading: "Waiting list",
        data: "Yes"
      },
      {
        type: undefined,
        subheading: "Deadline for registration (new academic year)",
        data: "Ongoing"
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
        data: "8:25am"
      },
      {
        type: undefined,
        subheading: "School finish time",
        data: "3:10pm"
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
        subheading: "Food alternatives for special dietary needs (ie. vegan, kosher, halal etc)",
        data: "Various. Vegetarian options every day."
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
        data: "Sports, Music, MUN, International Award, Arts and Crafts, STEAM and many more."
      },
      {
        type: undefined,
        subheading: "Sports activities included",
        data: "Curriculum PE and swimming from Early Years to Key Stage 5."
      },
      {
        type: undefined,
        subheading: "Sports teams or sport competitions available for students",
        data: "Football, Basketball, Volleyball, Badminton, Swimming and Athletics"
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
        data: "Libraries, Theatre, Auditorium, Science Labs, Computer Suites, Music Practice & Recording Studios, Visual Arts & Design Technology Workshops"
      },
      {
        type: undefined,
        subheading: "Sports facilities at the school",
        data: "1 25m Swimming Pool and 1 early years use swimming pool, 7-aside Football Pitch, Sports Hall with two full size Basketball courts"
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