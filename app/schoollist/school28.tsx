
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

export default function School28() {
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
                      <img src="/images/school logos/Ann HIll International School Logo.png" alt="no image" />
                    </a>
                  </div>
                  <h1 className="text-l font-semibold">
                    Anne Hill International School
                  </h1>
                </div>

                <div style={{ marginBottom: "1rem", overflow: "auto", height: "20dvh" }} className="text-sm">
                  <div style={{ fontWeight: "bold", marginBottom: "1rem" }}>Introduction</div>
                  <div style={{ marginBottom: "1rem", textAlign: "justify" }}>
                    Anne Hill International School, founded in 2015 in Ho Chi Minh City, is a thriving and close-knitted school community that offers preschool and primary school programmes at affordable fees. Our school is defined by three core visions that shape our identity:
                    <ul style={{listStyleType: "disc"}}>
                      <li>The AHI Educational System - Our aspiration is to stand as a leading beacon in affordable international-quality education for K-12 schools where our students thrive in a safe and nurturing environment.</li>
                      <li>The AHI 21st Century Learner - Guided by our passionate educators, our students embark on a transformative journey to become globally-minded lifelong learners instilled with our core values to take on the challenges of an ever-changing world.</li>
                      <li>The AHI Learning Community - Our vision of the AHI Learning Community is grounded in open communication and meaningful engagement. As we join hands with parents and students, together we cultivate a vibrant community dedicated to shared learning and growth.</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-row gap-1 text-2xl mb-3" style={{ borderBottom: "1px solid gray", paddingTop: "1rem", paddingBottom: "1rem" }}>
                  <Link href="https://annehill.school/" passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <div>
                        <img src="/images/btn/globe_btn.png" width={40} height={40} alt="no image" />
                      </div>
                    </a>
                  </Link>
                  <Link href="https://www.youtube.com/channel/UCeyL32MpWAxRrKheWfpvl0Q" passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <div>
                        <img src="/images/btn/youtube_btn.png" width={40} height={40} alt="no image" />
                      </div>
                    </a>
                  </Link>
                  <Link href=" https://www.facebook.com/annehill.school/" passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <div>
                        <img src="/images/btn/facebook_btn.png" width={40} height={40} alt="no image" />
                      </div>
                    </a>
                  </Link>
                  <Link href="https://www.linkedin.com/company/anne-hill-international-school/" passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <div>
                        <img src="/images/btn/linkedin_btn.png" width={40} height={40} alt="no image" />
                      </div>
                    </a>
                  </Link>
                  {/* <Link href="https://www.instagram.com/vietnamtinhhoa" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/instagram_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link> */}
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 gap-x-10 text-sm">
                  <InfoRow label="Curriculum" value="International, British, and Montessori" isLink />
                  <InfoRow label="Leaving qualifications" value="N/A" isLink />
                  <InfoRow label="Age range" value="range: (2 to 11)" />
                  <InfoRow label="Tuition" value="243,800,000 ₫ to 355,800,000 ₫" />
                  <InfoRow label="Address" value="Primary School: Ages 6 to 11 Address: 31 Giang Van Minh, An Phu Ward, Thu Duc City, HCMC, Vietnam" />
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.254830390001!2d106.74599!3d10.806321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175266ac3170333%3A0x6c5da6238f5f7873!2sAnne%20Hill%20International%20School%20-%20Primary%20Campus!5e0!3m2!1sen!2s!4v1691333500000!5m2!1sen!2s"
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
        data: `Anne Hill International School, founded in 2015 in Ho Chi Minh City, is a thriving and close-knitted school community that offers preschool and primary school programmes at affordable fees. Our school is defined by three core visions that shape our identity:
- The AHI Educational System: a leading beacon in affordable international-quality education for K-12 schools where students thrive in a safe and nurturing environment.
- The AHI 21st Century Learner: students become globally-minded lifelong learners with core values to face an ever-changing world.
- The AHI Learning Community: grounded in open communication and meaningful engagement among parents, students, and staff.`
      },
      {
        type: undefined,
        subheading: "Teaching approach of the school",
        data: `Centered on cultivating a global mindset and personal character development. Through self-inquiry and teacher-led learning, it fosters experiential learning beyond traditional knowledge. Child-centred philosophy ensures individualised support to inspire compassionate, well-informed problem-solvers who value diverse perspectives and interconnected cultures.`
      }
    ]
  },
  {
    label: "Nationalities",
    icon: <Users size={20} />,
    content: [
      { type: undefined, subheading: "Number of students", data: "400" },
      { type: undefined, subheading: "Number of nationalities represented in the school", data: "Approximately 28 nationalities" },
      { type: undefined, subheading: "Most common nationality", data: "Vietnamese" },
      { type: undefined, subheading: "Ratio of local students to international students", data: "20% local students versus 80% international students" }
    ]
  },
  {
    label: "Languages",
    icon: <Languages size={20} />,
    content: [
      { type: undefined, subheading: "Native English speaking teachers", data: "Yes" },
      {
        type: undefined,
        subheading: "Language support for students not fluent in English",
        data: `English as an Additional Language (EAL) Support is offered. Students needing support are identified during admissions assessment. Placement uses The Oxford Young Learners Placement Test. EAL not required for under 5 but assessed during Kindergarten 1.`
      },
      {
        type: undefined,
        subheading: "Additional language classes offered by the school",
        data: `Vietnamese Language & Culture (VLC) and Mandarin as 2nd languages. Vietnamese class compulsory for Vietnamese nationals. Others choose Vietnamese or Mandarin. Lessons three times a week, 1 hour or more, with standard or basic levels based on assessments.`
      }
    ]
  },
  {
    label: "Classroom",
    icon: <Pencil size={20} />,
    content: [
      { type: undefined, subheading: "Max. number of students per class", data: "25" },
      { type: undefined, subheading: "Average number of students per class", data: "15 - 20 depending on class level" },
      { type: undefined, subheading: "Does the school employ teaching assistants?", data: "Yes, Learning & Teaching Assistants for every class" },
      {
        type: undefined,
        subheading: "Use of technology in the classroom",
        data: `Every classroom equipped with projectors and tablets. Functional rooms include ICT lab. Uses diverse platforms for interactive online/blended learning.`
      },
      {
        type: undefined,
        subheading: "Is the school ready to use virtual classrooms when needed?",
        data: `Yes, via secure intranet portal with tools for tasks, homework, and communication with parents.`
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
        data: "Year 6 students complete Cambridge Primary Checkpoint before Secondary School"
      },
      {
        type: undefined,
        subheading: "Do teachers assign homework to their students?",
        data: `Homework and learning policy believes school day is sufficient. Home learning is not necessary for most. Parents help with spellings and times tables. Students need time to socialise and explore interests. Home learning includes reading for pleasure, cooking, music, sports.`
      },
      {
        type: undefined,
        subheading: "Approximate hours of homework given",
        data: "Year 1-2: 10-20 minutes per night. Year 3-6: 20-30 minutes per night."
      }
    ]
  },
  {
    label: "Student support",
    icon: <HeartPulse size={20} />,
    content: [
      { type: undefined, subheading: "Dedicated staff/programs for students with special learning needs", data: "Yes" },
      {
        type: undefined,
        subheading: "Learning support offered",
        data: `Collaboration with a professional, licensed external support centre for evaluation and support planning with school and parents.`
      }
    ]
  },
  {
    label: "Admissions",
    icon: <FileText size={20} />,
    content: [
      { type: undefined, subheading: "Entry evaluation for students", data: "Yes" },
      {
        type: undefined,
        subheading: "Brief description of entry evaluation required",
        data: `Assessment of literacy, numeracy, and PIES skills to determine year group and support needs.
- Under 5: encouraged to attend 3 trial days.
- Age 5-6: meet Principal, phonics and maths assessment, plus school reports.
- Age 6-10: informal interview, standardised maths test, English language or reading tests depending on EAL status, plus reports.`
      },
      {
        type: undefined,
        subheading: "Waiting list",
        data: "Yes, contact family when a spot opens. Waiting time depends on list size."
      },
      {
        type: undefined,
        subheading: "Students can join after academic year begins",
        data: "Yes, late enrolment accepted, join date aligned with new term."
      }
    ]
  },
  {
    label: "School Day",
    icon: <Clock size={20} />,
    content: [
      { type: undefined, subheading: "School start time", data: "8:00 am" },
      {
        type: undefined,
        subheading: "School finish time",
        data: "Preschool: 1 pm (Half-Day) or 5 pm (Full-Day). Primary: 3 pm (no Afterschool CCAs) or 4 pm (with Afterschool CCAs)."
      },
      {
        type: undefined,
        subheading: "Supervised care before/after school",
        data: `After School Care available for working parents:
- Preschool: 5 pm – 7 pm
- Primary: 3 pm – 7 pm (no CCAs), 4 pm – 7 pm (with CCAs)`
      },
      {
        type: undefined,
        subheading: "School bus service available",
        data: "Yes, with additional bus services available."
      },
      { type: undefined, subheading: "School provided lunches", data: "Yes" },
      {
        type: undefined,
        subheading: "Food alternatives for special dietary needs",
        data: `Vegetarian meals available. Nut, pork, and durian free school environment including all foods.`
      },
      { type: undefined, subheading: "Uniform required", data: "Yes" }
    ]
  },
  {
    label: "Extracurricular Activities",
    icon: <Trophy size={20} />,
    content: [
      {
        type: undefined,
        subheading: "Extracurricular activities or clubs offered",
        data: `Fee-paying after-school activities tailored to foster holistic development, interests, talents, and values. CCA timetable publicised each semester on website.`
      },
      {
        type: undefined,
        subheading: "Sports activities included",
        data: `Part of Physical Education. Facilities include football field, multi-purpose basketball/volleyball court, swimming pool, and rock-climbing wall.`
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
        data: `Preschool Campus: water & sand play area, outdoor playground, trampoline, Montessori Room, mini library.
Primary Campus: library, Art & Music Room, 2nd Language Room, ICT Lab with 14 desktops, eco-garden, farm-to-fork canteen.`
      },
      {
        type: undefined,
        subheading: "Sports facilities at the school",
        data: `300m2 football pitch with safety nets, climbing rock wall, swimming pool, outdoor multi-purpose court (basketball, badminton, volleyball).`
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