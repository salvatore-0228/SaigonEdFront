
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

export default function School36() {
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
                      <img src="/images/school logos/Pensyvania international School Logo.png" alt="no image" />
                    </a>
                  </div>
                  <h1 className="text-l font-semibold">
                    Pennsylvania American International School
                  </h1>
                </div>

                <div style={{ marginBottom: "1rem", overflow: "auto", height: "20dvh" }} className="text-sm">
                  <div style={{ fontWeight: "bold", marginBottom: "1rem" }}>Introduction</div>
                  <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                    It is a school that provides a North American curriculum learning environment. PennSchool commits to delivering quality learning, underpinned 
                    by U.S.A values together with a deep appreciation of the Vietnamese culture.
                  </p>
                </div>

                <div className="flex flex-row gap-1 text-2xl mb-3" style={{ borderBottom: "1px solid gray", paddingTop: "1rem", paddingBottom: "1rem" }}>
                  <Link href="https://pennschool.edu.vn/" passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <div>
                        <img src="/images/btn/globe_btn.png" width={40} height={40} alt="no image" />
                      </div>
                    </a>
                  </Link>
                  <Link href="https://www.youtube.com/channel/UCjJBt3Om7fWrfBY0P_jK8aw" passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <div>
                        <img src="/images/btn/youtube_btn.png" width={40} height={40} alt="no image" />
                      </div>
                    </a>
                  </Link>
                  <Link href="https://www.facebook.com/pennschool.edu.vn" passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <div>
                        <img src="/images/btn/facebook_btn.png" width={40} height={40} alt="no image" />
                      </div>
                    </a>
                  </Link>
                  {/* <Link href="https://www.linkedin.com/company/horizon-international-bilingual-school" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/linkedin_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link> */}
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
                  <InfoRow label="Curriculum" value="American and Vietnamese American Bilingual" isLink />
                  <InfoRow label="Leaving qualifications" value="SAT" isLink />
                  <InfoRow label="Age range" value="range: (5 to 18)" />
                  <InfoRow label="Tuition" value="284,625,000 ₫ to 399,000,000 ₫" />
                  <InfoRow label="Address" value="10 Ba Thang Hai St., Ward 12, Dist. 10, HCMC, Vietnam" />
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
              src="https://www.youtube.com/embed/4OVh-Ab0aHg"
              title="Vercel Ship Keynote: Introducing the frontend cloud"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              style={{ width: "100%", margin: "auto", aspectRatio: "16/9", backgroundColor: "gray" }}
            // allowFullScreen
            ></iframe>
          </div>
          <div className="flex-1 flex lg:flex-row flex-col lg:gap-[1dvw] gap-[1rem]">
            <div className="w-full lg:w-1/2 overflow-hidden" id="slideheight">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.571814314243!2d106.6470756!3d10.8055018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529aeab012ddd%3A0xc03b9ccc48f69dad!2sPennsylvania%20American%20International%20School!5e0!3m2!1sen!2s!4v1691346300000!5m2!1sen!2s"
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
        data: "It is a school that provides a North American curriculum learning environment. PennSchool commits to delivering quality learning, underpinned by U.S.A values together with a deep appreciation of the Vietnamese culture."
      },
      {
        type: undefined,
        subheading: "Teaching approach of the school",
        data: "The school is based on constructivism, focusing the teaching process on collaborative work, experiential and conceptual learning."
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
        data: "1000+"
      },
      {
        type: undefined,
        subheading: "Number of nationalities represented in the school",
        data: "8"
      },
      {
        type: undefined,
        subheading: "Most common nationality",
        data: "Vietnamese"
      },
      {
        type: undefined,
        subheading: "Ratio of local students to international students",
        data: "5/95"
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
        data: "Mainly yes"
      },
      {
        type: undefined,
        subheading: "Language support for students not fluent in English and Vietnamese",
        data: "No, For students who do not meet the minimum expectations of the language of instruction (International program or bilingual program), the English for Academic Purposes program is the alternative for students to acquire the necessary proficiency to continue with the other regular programs."
      },
      {
        type: undefined,
        subheading: "Additional language classes offered by the school",
        data: "Vietnamese and French"
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
        data: "28"
      },
      {
        type: undefined,
        subheading: "Average number of students per class",
        data: "24"
      },
      {
        type: undefined,
        subheading: "Does the school employ teaching assistants?",
        data: "Yes. The bilingual program is supported by an assistant teacher (K-12). For the international program, there is no teaching assistant. All programs have in-class support from homeroom teachers on issues related to group management and classroom behavior."
      },
      {
        type: undefined,
        subheading: "Use of technology in the classroom",
        data: "All classes are equipped with a projector, screen, and audio speakers. Teachers use their laptops with internet access."
      },
      {
        type: undefined,
        subheading: "Is the school ready to use virtual classrooms when needed?",
        data: "Yes. The school has a protocol to migrate face-to-face classes to the virtual modality. The technological resources currently used are the Moodle academic platform and the synchronous connection application Google Meet."
      },
      {
        type: undefined,
        subheading: "Do students practice religion at the school? What religion?",
        data: "Religion is not practiced as part of the academic program."
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
        data: "MAP, SAT, IELTS, Greenville School Area Keystone Exams"
      },
      {
        type: undefined,
        subheading: "Results in these examinations",
        data: "Satisfactory. Preliminary results show a progressive improvement; therefore, spaces have been created for the punctual preparation of these tests."
      },
      {
        type: undefined,
        subheading: "Do teachers assign homework to their students?",
        data: "Yes. According to the time distribution in the class schedule, homework is assigned by the regular teacher and monitored by the assistant teacher. In the upper grades it is done by the homeroom teacher. The modality is face-to-face and through the Moodle platform."
      },
      {
        type: undefined,
        subheading: "Approximate hours of homework given",
        data: "Depending on the time load and the number of subjects, it is distributed between 1 and 2 and a half hours per day."
      },
      {
        type: undefined,
        subheading: "Percentage of students who pursue further education post-graduation",
        data: "100%. The school provides a university orientation and support program to ensure a successful transition to national or international higher education."
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
        data: "Not yet. Although some teachers have experience in curricular adaptations for special needs, the school does not have a department of psychologists and psychopedagogues to provide attention and follow-up to specific cases."
      },
      {
        type: "list",
        subheading: "Learning support offered",
        data: [
          "At present, the school does not provide direct support for special educational needs cases.",
          "Referential conversations are held with families so that they can opt for external alternatives for support and follow-up.",
          "The school supports gifted, able and talented students by encouraging participation in clubs and competitions with support from Learning Support Center, peer-tutoring programs, and other school events."
        ]
      },
      {
        type: undefined,
        subheading: "Student access to education psychologist",
        data: "No"
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
        data: "Yes. The admissions department establishes an admissions testing schedule that involves one-on-one interviews with native-speaking teachers to determine the language proficiency of instruction for entry into a given grade level."
      },
      {
        type: undefined,
        subheading: "Brief description of entry evaluation required",
        data: "The evaluation measures basic knowledge according to grade level, learning skills and curricular requirements according to standards. A personalized interview is then conducted to determine language proficiency."
      },
      {
        type: undefined,
        subheading: "Waiting list",
        data: "Yes"
      },
      {
        type: undefined,
        subheading: "Deadline for registration (new academic year)",
        data: "Before 9th August"
      },
      {
        type: undefined,
        subheading: "Students can join after academic year begins",
        data: "Yes, it depends on"
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
        data: "08:00 AM"
      },
      {
        type: undefined,
        subheading: "School finish time",
        data: "17:00"
      },
      {
        type: undefined,
        subheading: "Supervised care before/after school",
        data: "Yes"
      },
      {
        type: undefined,
        subheading: "School bus service available",
        data: "Yes. Transportation service is provided upon request to parents interested in receiving and contracting the service."
      },
      {
        type: undefined,
        subheading: "School provided lunches",
        data: "Yes. The school maintains the cultural tradition of mealtimes. Students receive breakfast in the school dining room from 7:30 a.m. to 8:00 a.m. Lunch service begins at 11:00 a.m. until 1:00 p.m. At 3:20 p.m. students receive a snack."
      },
      {
        type: undefined,
        subheading: "Food alternatives for special dietary needs (ie. vegan, kosher, halal etc)",
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
        data: "More than 20 clubs, Tutoring Program, Reading Circle, House System, and Broadcasting Program."
      },
      {
        type: undefined,
        subheading: "Sports activities included",
        data: "Dance, Ballet, Basketball, Baseball, VolleyBall, Golf, Field Hockey, Cheerleading, Track and Field, Swimming"
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
        subheading: "Sports facilities at the school",
        data: "A big field for soccer, baseball, volleyball, basketball, track and field. There is a plan to expand the school's facilities to include sports courts, a coliseum, a swimming pool, etc."
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