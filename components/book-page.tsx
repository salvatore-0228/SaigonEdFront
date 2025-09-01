"use client"

import Page1 from "@/app/pages/normal/page1"
import Header from "./header"
import Footer from "./footer"
import { PageData } from "@/types/types"
import Page2 from "@/app/pages/normal/page2"
import Page3 from "@/app/pages/normal/page3"
import Page4 from "@/app/pages/normal/page4"
import Page5 from "@/app/pages/normal/page5"
import Page6 from "@/app/pages/normal/page6"
import Page7 from "@/app/pages/normal/page7"
import Page8 from "@/app/pages/normal/page8"
import Page9 from "@/app/pages/normal/page9"
import Page10 from "@/app/pages/normal/page10"
// import Page11 from "@/app/pages/normal/page11"
import Page12 from "@/app/pages/normal/page12"
import Page13 from "@/app/pages/normal/page13"
import Page14 from "@/app/pages/normal/page14"
import Page15 from "@/app/pages/normal/page15"
import Page16 from "@/app/pages/normal/page16"
import Page17 from "@/app/pages/normal/page17"
import Page18 from "@/app/pages/normal/page18"
import Page19 from "@/app/pages/normal/page19"
import Page20 from "@/app/pages/normal/page20"
import Page21 from "@/app/pages/normal/page21"
import Page22 from "@/app/pages/normal/page22"
import Page23 from "@/app/pages/normal/page23"
import Page24 from "@/app/pages/normal/page24"
import Page25 from "@/app/pages/normal/page25"
import Page26 from "@/app/pages/normal/page26"
import Page27 from "@/app/pages/normal/page27"
import Page28 from "@/app/pages/normal/page28"
import Page29 from "@/app/pages/normal/page29"
import Page30 from "@/app/pages/normal/page30"
import Page31 from "@/app/pages/normal/page31"
import Page32 from "@/app/pages/normal/page32"
import Page33 from "@/app/pages/normal/page33"
import Page34 from "@/app/pages/normal/page34"
import Page35 from "@/app/pages/normal/page35"
import Page36 from "@/app/pages/normal/page36"
import Page37 from "@/app/pages/normal/page37"
import Page38 from "@/app/pages/normal/page38"
import Page39 from "@/app/pages/normal/page39"
import Page40 from "@/app/pages/normal/page40"
import Page41 from "@/app/pages/normal/page41"
import Page42 from "@/app/pages/normal/page42"
import Page43 from "@/app/pages/normal/page43"
import Page44 from "@/app/pages/normal/page44"
import Page45 from "@/app/pages/normal/page45"
import Page46 from "@/app/pages/normal/page46"
import Page47 from "@/app/pages/normal/page47"
import Page48 from "@/app/pages/normal/page48"
import Page49 from "@/app/pages/normal/page49"
import Page50 from "@/app/pages/normal/page50"
import Page51 from "@/app/pages/normal/page51"
import Page52 from "@/app/pages/normal/page52"
import Page53 from "@/app/pages/normal/page53"
import Page54 from "@/app/pages/normal/page54"
import Page55 from "@/app/pages/normal/page55"
import Page56 from "@/app/pages/normal/page56"
import Page57 from "@/app/pages/normal/page57"
import Page58 from "@/app/pages/normal/page58"
import Page59 from "@/app/pages/normal/page59"
import Page60 from "@/app/pages/normal/page60"
import Page61 from "@/app/pages/normal/page61"
import Page62 from "@/app/pages/normal/page62"
import Page63 from "@/app/pages/normal/page63"
import Page64 from "@/app/pages/normal/page64"
import Page65 from "@/app/pages/normal/page65"
import Page66 from "@/app/pages/normal/page66"
import Page67 from "@/app/pages/normal/page67"
import Page68 from "@/app/pages/normal/page68"
import Page69 from "@/app/pages/normal/page69"
import Page70 from "@/app/pages/normal/page70"
import Page71 from "@/app/pages/normal/page71"
import Page72 from "@/app/pages/normal/page72"
import ContentsPage from "@/app/pages/education-content"
import EducationMapPage from "@/app/pages/education-map"
import EducationSponsorPage from "@/app/pages/education-sponsor"
import EducationMainPage1 from "@/app/pages/educationlists/education-list1"
import EducationMainPage2 from "@/app/pages/educationlists/education-list2"
import EducationMainPage3 from "@/app/pages/educationlists/education-list3"
import EducationMainPage4 from "@/app/pages/educationlists/education-list4"
import EducationMainPage5 from "@/app/pages/educationlists/education-list5"
import Page39_ from "@/app/pages/normal/page39_"
import AboutBook from "@/app/pages/education-introduction"

interface BookPageProps {
    data: PageData,
    type: string
}

const pages = [
    { page: AboutBook, sectionTitle: "About this book", subTitle: "", pageNum: 0, infoText: "Throughout our guides you will find additional information about each section by clicking the Information icon at the top of the page. This information will sometimes be trivia or simply interesting facts meant to add context to our primary content. We hope you enjoy. "},
    { page: ContentsPage, sectionTitle: "Contents", subTitle: "", pageNum: 1, infoText: "Choosing an international school can be a complicated process. We have endeavoured to provide you with all you need to know to make the best choice possible." },
    { page: Page5, sectionTitle: "Introduction", subTitle: "", pageNum: 6, infoText: "International schools in Vietnam play a crucial role for expatriate families seeking quality education aligned with global standards. These schools, primarily located in cities like Ho Chi Minh City and Hanoi, offer curricula such as the International Baccalaureate (IB), British, American, or Australian systems. They provide a multicultural environment, highly qualified teachers, and strong English instruction, ensuring continuity for transient families. Facilities are modern, and extracurricular programs are diverse. While tuition can be high, many expats consider it a worthwhile investment. International schools also foster community, helping families integrate and connect in a foreign country, easing the transition to life abroad." },
    { page: Page1, sectionTitle: "SAIGON’S SCHOOL SYSTEM", subTitle: "", pageNum: 2, infoText: "Ho Chi Minh City's public school system emphasizes rigorous academics, especially in math and science, with instruction primarily in Vietnamese. It follows the national curriculum set by the Ministry of Education. While often crowded and competitive, it promotes discipline and achievement, and offers limited bilingual or international integration programs." },
    { page: Page2, sectionTitle: "SAIGON’S SCHOOL SYSTEM", subTitle: "", pageNum: 3, infoText: "International School Ho Chi Minh City (ISHCMC) was established in 1993 as the first IB World School in Vietnam, offering the full IB continuum from Early Years to Diploma. It features innovation-focused facilities including a planetarium, maker space, and professional theater across two campuses in District 2. With a diverse student body and an emphasis on creativity and critical thinking, it's consistently regarded as a top-tier option." },
    { page: Page3, sectionTitle: "SAIGON’S SCHOOL SYSTEM", subTitle: "", pageNum: 4, infoText: "Vietnam’s government has recently enacted a landmark policy: starting in the 2025–2026 academic year (from September 2025), all tuition fees for public school students from preschool through high school will be fully waived nationwide. The policy aims to benefit approximately 23 million students and significantly reduce financial burdens on families." },
    { page: Page4, sectionTitle: "SAIGON’S SCHOOL SYSTEM", subTitle: "", pageNum: 5, infoText: "Vietnam’s government has unveiled transformative education reforms through 2025–2030 with a vision toward 2045. Central initiatives include drafting new laws for teachers and vocational training, overhauling preschool curricula, advancing digital literacy, expanding university access, and boosting international cooperation and higher‑education research to position Vietnam among Asia’s top education systems." },
    { page: Page6, sectionTitle: "UK VERSUS us CURRICULUM", subTitle: "", pageNum: 7, infoText: "The biggest difference between the American and British curricula lies in structure and assessment. The American system emphasizes continuous assessment, flexibility, and a broad subject range, while the British system is more exam-focused and subject-specialized, especially at the A-Level stage, offering a narrower but deeper academic focus in chosen fields." },
    { page: Page7, sectionTitle: "UK VERSUS us CURRICULUM", subTitle: "", pageNum: 8, infoText: "A lesser-known difference is the approach to grade progression. In the UK system, especially post-16, students specialize early, often studying just three subjects for A-Levels. In contrast, the American curriculum maintains a broader subject load through high school, allowing for more exploratory learning before college specialization." },
    { page: Page8, sectionTitle: "THE SCHOOL SELECTION PROCESS", subTitle: "", pageNum: 9, infoText: "The most challenging aspect of choosing an international school is aligning the curriculum with a child’s long-term academic path, especially amid potential relocations. Parents must weigh factors like language support, cultural fit, teaching style, and accreditation, while balancing emotional, social, and academic needs within a sometimes limited selection of options." },
    { page: Page9, sectionTitle: "THE SCHOOL SELECTION PROCESS", subTitle: "", pageNum: 10, infoText: "Most international schools in Ho Chi Minh City are located in District 2 (Thao Dien and An Phu) and District 7 (Phu My Hung), offering modern campuses and family-friendly neighborhoods. These areas are popular with expats for their safety, green spaces, and convenient access to school transport and amenities." },
    { page: Page10, sectionTitle: "SMALL VERUS BIG SCHOOLS", subTitle: "", pageNum: 11, infoText: "A small school can offer a more personalized learning experience, with smaller class sizes allowing for greater individual attention. Teachers often know students well, fostering strong relationships and tailored support. The close-knit community can boost confidence, social inclusion, and a sense of belonging, enhancing both academic and emotional development." },
    // { page: Page11, sectionTitle: "Education", subTitle: "", pageNum: 12 },
    // { page: Page12, sectionTitle: "Education", subTitle: "", pageNum: 13 },
    // { page: Page13, sectionTitle: "Education", subTitle: "", pageNum: 14 },
    { page: Page14, sectionTitle: "CHOOSING THE BEST INTERNATIONAL SCHOOL", subTitle: "", pageNum: 15, infoText: "Teachers play a vital role in shaping your child's academic success and emotional well-being. Their experience, attitude, and engagement directly impact learning quality. When choosing a school, observe how teachers interact with students—look for warmth, professionalism, and passion, as these qualities often define the overall school environment and culture." },
    { page: Page15, sectionTitle: "CHOOSING THE BEST INTERNATIONAL SCHOOL", subTitle: "", pageNum: 16, infoText: "A school’s mission and vision reflect its core values, educational philosophy, and long-term goals. They guide teaching approaches, community culture, and student development. Choosing a school with a mission that aligns with your family's values ensures a more meaningful, consistent, and supportive educational experience for your child both academically and personally." },
    { page: Page16, sectionTitle: "CHOOSING THE BEST INTERNATIONAL SCHOOL", subTitle: "", pageNum: 17, infoText: "Understanding a school’s approach to learning helps ensure it aligns with your child’s needs and learning style. Whether inquiry-based, traditional, or project-focused, the methodology shapes classroom dynamics, student engagement, and skill development. A compatible approach fosters better academic growth, confidence, and a more fulfilling school experience for your child." },
    { page: Page17, sectionTitle: "THE INTERNATIONAL BACCALAUREATE PROGRAM", subTitle: "", pageNum: 18, infoText: "The International Baccalaureate (IB) program was founded in 1968 in Geneva, Switzerland, to create a standardized, globally recognized education for internationally mobile students. It was developed by educators aiming to foster critical thinking, intercultural understanding, and rigorous academics, originally intended for children of diplomats and expatriates in international schools." },
    { page: Page18, sectionTitle: "THE INTERNATIONAL BACCALAUREATE PROGRAM", subTitle: "", pageNum: 19, infoText: "The International Baccalaureate (IB) program is recognized in over 150 countries worldwide. Its globally respected curriculum enables students to gain admission to top universities across continents. With thousands of IB World Schools, the program’s international acceptance makes it a popular choice for expat families seeking educational continuity and global mobility." },
    { page: Page19, sectionTitle: "INFORMATION IS THE KEY", subTitle: "", pageNum: 20, infoText: "Admissions officers at international schools seek comprehensive information to understand your child's academic history, learning style, interests, and support needs. This helps ensure proper placement, identify necessary resources, and assess cultural and community fit. The more they know, the better they can support a smooth, successful transition for your child." },
    { page: Page20, sectionTitle: "INFORMATION IS THE KEY", subTitle: "", pageNum: 21, infoText: "Admissions officers value community involvement because it reflects a child’s empathy, leadership, and social responsibility. It shows they contribute beyond academics and are engaged, well-rounded individuals. Active participation in community service or initiatives suggests strong character and a willingness to positively impact others—qualities that enrich a school’s student body." },
    { page: Page21, sectionTitle: "INFORMATION IS THE KEY", subTitle: "", pageNum: 22, infoText: "Extracurricular activities play a key role in international school admissions, showcasing a child’s interests, character, and well-roundedness beyond academics. They highlight leadership, teamwork, creativity, and commitment—traits valued in global education environments. A strong extracurricular profile can strengthen applications and indicate a student’s potential to contribute to the school community." },
    { page: Page22, sectionTitle: "SPONSOR ARTICLE", subTitle: "", pageNum: 23, infoText: "Participation in the performing arts enhances a child’s educational development by fostering creativity, self-expression, and confidence. It supports cognitive growth, improves memory, and strengthens communication skills. Through music, drama, or dance, children also develop empathy, collaboration, and discipline—skills that positively influence academic achievement and personal growth across all subjects." },
    { page: Page23, sectionTitle: "SPONSOR ARTICLE", subTitle: "", pageNum: 24, infoText: "Nord Anglia Education is a global network of premium international schools, known for academic excellence and innovative learning. With campuses in over 30 countries, it offers curricula like the IB, British, and American systems. Nord Anglia emphasizes personalized learning, global citizenship, and collaborations with institutions like MIT and Juilliard." },
    { page: Page24, sectionTitle: "SPONSOR ARTICLE", subTitle: "", pageNum: 25, infoText: "Nord Anglia Education’s collaboration with MIT brings an exclusive STEAM curriculum to its schools, grounded in MIT’s mind and hand philosophy and developed by MIT faculty. Termly in school challenges span science, technology, engineering, arts, and mathematics, while teachers attend workshops at MIT and select students travel to Massachusetts for immersive festivals." },
    { page: Page25, sectionTitle: "SPONSOR ARTICLE", subTitle: "", pageNum: 26 },
    // { page: Page26, sectionTitle: "Education", subTitle: "", pageNum: 27 },
    { page: Page27, sectionTitle: "A DAUNTING CHOICE", subTitle: "", pageNum: 28, infoText: "Top-tier international schools in Asia offer exceptional education through globally recognized curricula like IB, British, and American systems. They feature world-class facilities, experienced faculty, and strong student support. Emphasizing academic excellence, innovation, and global citizenship, these schools prepare students for top universities and successful futures in an interconnected world." },
    { page: Page28, sectionTitle: "A DAUNTING CHOICE", subTitle: "", pageNum: 29, infoText: "Since 2000, international schools in Asia have grown rapidly due to increasing demand from expat families and affluent local populations seeking global education. Rising economies, urban development, and a focus on international university access have driven expansion, making Asia a major hub for high-quality, globally focused private education options." },
    { page: Page29, sectionTitle: "A DAUNTING CHOICE", subTitle: "", pageNum: 30, infoText: "Third Culture Kids (TCKs) grow up in cultures different from their parents' homeland, often in international communities. Their unique experiences shape global perspectives but also present educational challenges. International schools support TCKs with diverse environments, consistent curricula, and strong emotional support, helping them thrive academically and socially across transitions." },
    { page: Page30, sectionTitle: "A-LEVELS", subTitle: "", pageNum: 31, infoText: "UK education has a strong global reputation due to its academic rigor, historic institutions, and well-rounded curricula. Schools emphasize critical thinking, creativity, and independent learning. With qualifications like GCSEs and A-Levels widely recognized by top universities worldwide, the UK system is known for producing confident, capable, and globally prepared students." },
    { page: Page31, sectionTitle: "A-LEVELS", subTitle: "", pageNum: 32 },
    { page: Page32, sectionTitle: "BILINGUAL VERSUS ENGLISH-ONLY SCHOOLS", subTitle: "", pageNum: 33, infoText: "Bilingual education enhances cognitive flexibility, problem-solving, and memory. Students develop strong communication skills in two languages, increasing cultural awareness and empathy. It also boosts academic performance and opens global opportunities in higher education and careers. Bilingual learners are better equipped to navigate diverse environments and succeed in an interconnected world." },
    { page: Page33, sectionTitle: "BILINGUAL VERSUS ENGLISH-ONLY SCHOOLS", subTitle: "", pageNum: 34, infoText: "In an expat context, bilingualism helps children adapt more easily to new cultures and environments. It strengthens communication with local peers, fosters cultural empathy, and enhances social integration. Bilingual skills also support academic success and offer long-term advantages in global careers, making expat children more resilient and globally competent. Ask ChatGPT" },
    { page: Page34, sectionTitle: "BILINGUAL VERSUS ENGLISH-ONLY SCHOOLS", subTitle: "", pageNum: 35, infoText: "Attending a bilingual school offers lifelong advantages, including enhanced cognitive skills, adaptability, and cultural awareness. Bilingual students often excel in problem-solving and multitasking, with greater career and academic opportunities worldwide. Their ability to navigate diverse cultures and communicate across languages fosters global citizenship and enriches both personal and professional life." },
    { page: Page35, sectionTitle: "BILINGUAL VERSUS ENGLISH-ONLY SCHOOLS", subTitle: "", pageNum: 36, infoText: `Here are ten current world leaders known for their bilingualism, which has enhanced their diplomatic effectiveness and global engagement:
        1.	Justin Trudeau (Canada) – Fluent in both English and French, Trudeau's bilingualism is vital in Canada's bilingual political landscape.
        2.	Emmanuel Macron (France) – Speaks fluent English, aiding in international diplomacy and communication.
        3.	Angela Merkel (Germany) – Proficient in English, facilitating Germany's global diplomatic relations.
        4.	Ban Ki-moon (South Korea) – Speaks Korean, English, and French, essential for his role as a former UN Secretary-General.
        5.	Ursula von der Leyen (European Union) – Fluent in several languages, including German, English, and French, enhancing EU communications.
        6.	Sanna Marin (Finland) – Fluent in Finnish and English, representing Finland in international forums.Fulcrum Foundation
        7.	Jens Stoltenberg (Norway/NATO) – Speaks Norwegian and English, crucial for his role as NATO Secretary General.
        8.	Leo Varadkar (Ireland) – Fluent in English and Irish, reflecting Ireland's bilingual heritage.
        9.	Jacinda Ardern (New Zealand) – Speaks English and Māori, promoting New Zealand's cultural inclusivity.
        10.	Sebastián Piñera (Chile) – Fluent in Spanish and English, facilitating Chile's international relations.
    ` },
    { page: Page36, sectionTitle: "CHOOSING THE RIGHT PATH", subTitle: "", pageNum: 37, infoText: "Choosing the right curriculum in an international context is challenging due to diverse education systems, language barriers, and varying academic standards. Parents must consider their child’s learning style, future university plans, and cultural fit. Balancing familiarity with global recognition requires careful research and understanding of each curriculum’s strengths and demands." },
    { page: Page37, sectionTitle: "CHOOSING THE RIGHT PATH", subTitle: "", pageNum: 38, infoText: "The IB Theory of Knowledge (TOK) course encourages students to critically examine how knowledge is constructed and understood across disciplines. It fosters open-mindedness, reflection, and analytical thinking by challenging students to question assumptions, explore perspectives, and connect real-world experiences with academic learning, enriching their overall educational journey." },
    { page: Page38, sectionTitle: "CHOOSING THE RIGHT PATH", subTitle: "", pageNum: 39, infoText: "Advanced Placement (AP) classes are academically rigorous, offering college-level coursework in high school. They challenge students with in-depth content, critical thinking, and time management demands. AP courses prepare students for university expectations, provide opportunities for college credit, and enhance college applications by demonstrating academic ambition and readiness." },
    { page: Page39, sectionTitle: "CHOOSING THE RIGHT PATH", subTitle: "", pageNum: 40, infoText: "The International Baccalaureate (IB) is renowned as the most portable curriculum worldwide, recognized by universities across over 150 countries. Its consistent, rigorous standards and emphasis on critical thinking allow students to seamlessly transition between international schools, making it ideal for globally mobile families seeking a flexible, respected education." },
    { page: Page39_, sectionTitle: "CHOOSING THE RIGHT PATH", subTitle: "", pageNum: 40, infoText: "The International Baccalaureate (IB) is renowned as the most portable curriculum worldwide, recognized by universities across over 150 countries. Its consistent, rigorous standards and emphasis on critical thinking allow students to seamlessly transition between international schools, making it ideal for globally mobile families seeking a flexible, respected education." },
    { page: Page40, sectionTitle: "FROM PRIVATE TO NOT-FOR-PROFIT", subTitle: "", pageNum: 41, infoText: "Attending a not-for-profit school often means funds are reinvested into enhancing education quality, facilities, and student support. These schools prioritize learning over profit, fostering a community-focused environment. This can lead to smaller class sizes, dedicated staff, and enriched programs that better serve students’ academic and personal growth." },
    { page: Page41, sectionTitle: "FROM PRIVATE TO NOT-FOR-PROFIT", subTitle: "", pageNum: 42, infoText: "For-profit schools may prioritize financial gains over educational quality, potentially leading to higher fees and cost-cutting measures. This focus can impact class sizes, resources, and staff stability. Sometimes, academic standards and student support services suffer, making the learning environment less nurturing and less focused on long-term student success." },
    { page: Page42, sectionTitle: "FROM PRIVATE TO NOT-FOR-PROFIT", subTitle: "", pageNum: 43, infoText: "Foundation-run schools often benefit from strong governance, long-term vision, and mission-driven leadership. With funding reinvested into education, they typically offer high-quality facilities, experienced teachers, and robust academic programs. These schools emphasize stability, values-based learning, and community engagement, creating a supportive environment focused on student growth and academic excellence." },
    { page: Page43, sectionTitle: "FROM PRIVATE TO NOT-FOR-PROFIT", subTitle: "", pageNum: 44, infoText: "Private international schools offer high academic standards, globally recognized curricula, and multicultural environments. They provide personalized learning, excellent facilities, and a wide range of extracurricular activities. With experienced teachers and strong university counseling, these schools prepare students for global success while fostering adaptability, cultural awareness, and lifelong learning skills." },
    { page: Page44, sectionTitle: "TECHNOLOGY IN THE CLASS­ROOM", subTitle: "", pageNum: 45, infoText: "AI in the classroom enhances personalized learning, supports teachers with administrative tasks, and offers real-time feedback to students. It can adapt content to individual needs, improve engagement, and identify learning gaps. However, successful integration requires thoughtful planning to ensure equity, data privacy, and meaningful human interaction in education." },
    { page: Page45, sectionTitle: "TECHNOLOGY IN THE CLASS­ROOM", subTitle: "", pageNum: 46, infoText: "Human teachers bring empathy, intuition, and real-world experience that technology cannot replicate. They build relationships, inspire curiosity, and adapt to students’ emotional and academic needs. Teachers foster critical thinking, creativity, and social development, creating a supportive learning environment where students feel valued, understood, and motivated to reach their potential." },
    { page: Page46, sectionTitle: "TECHNOLOGY IN THE CLASS­ROOM", subTitle: "", pageNum: 47, infoText: "AI assistants for students are rapidly evolving to offer personalized tutoring, real-time feedback, and adaptive learning pathways. Future AI will support research, study planning, and even emotional check-ins. With ethical design, these tools can enhance learning efficiency, accessibility, and engagement—empowering students while complementing human guidance and classroom instruction." },
    { page: Page47, sectionTitle: "The International Baccalaureate in International Schools", subTitle: "", pageNum: 48, infoText: "The International Baccalaureate (IB) program was originally developed with the needs of diplomats’ children in mind. It was created in the 1960s by a group of international educators in Geneva, Switzerland, to provide a consistent, high-quality education for students whose families moved frequently due to diplomatic or international careers. The goal was to create a portable and globally recognized curriculum that would allow these students to transition smoothly between schools in different countries and be well-prepared for university anywhere in the world." },
    { page: Page48, sectionTitle: "The International Baccalaureate in International Schools", subTitle: "", pageNum: 49, infoText: "The International Baccalaureate (IB) is widely offered in international schools across over 150 countries, making it one of the most prevalent global curricula. Its academic rigor, emphasis on critical thinking, and international focus make it a top choice for expat families seeking consistent, high-quality education amid frequent relocations." },
    { page: Page49, sectionTitle: "The International Baccalaureate in International Schools", subTitle: "", pageNum: 50, infoText: "CAS—Creativity, Activity, Service—is a core component of the IB Diploma Programme. It encourages students to develop personally and socially through real-world experiences beyond academics. By engaging in artistic pursuits, physical activity, and community service, students build empathy, resilience, and global citizenship, fostering a well-rounded and reflective approach to learning." },
    { page: Page50, sectionTitle: "The International Baccalaureate in International Schools", subTitle: "", pageNum: 51, infoText: "The IB program prepares students for life by fostering critical thinking, global awareness, and independent learning. Its emphasis on inquiry, reflection, and real-world application develops resilience, adaptability, and ethical decision-making. With rigorous academics and holistic growth, IB graduates are well-equipped for university, careers, and meaningful contributions to society." },
    { page: Page51, sectionTitle: "A tale of two systems", subTitle: "", pageNum: 52, infoText: "The primary difference between the American and British curricula lies in structure and assessment. The American system emphasizes broad, continuous assessment with flexibility and diverse subject choices, while the British curriculum is more specialized, exam-focused, and structured around stages like GCSEs and A-Levels, with earlier subject selection and deeper content focus." },
    { page: Page52, sectionTitle: "A tale of two systems", subTitle: "", pageNum: 53, infoText: "Each U.S. state designs its own education curriculum, leading to key differences in learning standards, graduation requirements, testing, and subject emphasis. While many follow Common Core or similar frameworks, variations exist in history content, science standards, and literacy goals. These differences reflect local priorities, politics, and educational philosophies across states." },
    { page: Page53, sectionTitle: "A tale of two systems", subTitle: "", pageNum: 54, infoText: "IGCSE is a popular choice for expatriate families due to its international recognition and academic rigor. It offers flexible subject options and a strong foundation for further study, such as A-Levels or the IB. Taught in English, it suits globally mobile students, supporting smooth transitions between international schools worldwide." },
    { page: Page54, sectionTitle: "Understanding Montessori education", subTitle: "", pageNum: 55, infoText: "Montessori education was founded by Dr. Maria Montessori, an Italian physician and educator, in the early 1900s. She developed her method through scientific observation of children, emphasizing independence, hands-on learning, and respect for a child’s natural development. Her philosophy transformed early childhood education and remains influential worldwide today." },
    { page: Page55, sectionTitle: "Understanding Montessori education", subTitle: "", pageNum: 56, infoText: "An interesting fact about Montessori education is that it was originally developed for children with disabilities. Dr. Maria Montessori’s first classroom in 1907 served disadvantaged children in Rome. Her success revealed that all children thrive in environments promoting independence, choice, and hands-on learning—principles now embraced in Montessori schools worldwide." },
    { page: Page56, sectionTitle: "Understanding Montessori education", subTitle: "", pageNum: 57, infoText: "A little-known fact about Montessori education is that it inspired some of the world’s top innovators. Founders of Amazon, Google, and Wikipedia all attended Montessori schools. They credit the method’s emphasis on curiosity, self-direction, and problem-solving for shaping their creativity and independent thinking—core traits behind their entrepreneurial success." },
    { page: Page57, sectionTitle: "Understanding Montessori education", subTitle: "", pageNum: 58, infoText: "Dr. Maria Montessori was nominated for the Nobel Peace Prize three times. Her method wasn’t just about education—it was deeply tied to her vision of peace. She believed nurturing independence, empathy, and respect in children was key to creating a more peaceful world." },
    { page: Page58, sectionTitle: "Understanding the French curriculum", subTitle: "", pageNum: 59, infoText: "In the French curriculum philosophy is a mandatory subject for all final-year high school students, regardless of their academic track. This unique emphasis reflects France’s deep intellectual tradition and aims to cultivate critical thinking, reasoning, and open dialogue as essential components of democratic citizenship." },
    { page: Page59, sectionTitle: "Understanding the French curriculum", subTitle: "", pageNum: 60, infoText: "A little-known fact about the French curriculum is that students begin learning a second language as early as age six, and a third by middle school. This early emphasis on multilingualism reflects France’s commitment to global citizenship and prepares students for international communication and cultural understanding from a young age." },
    { page: Page60, sectionTitle: "Understanding the French curriculum", subTitle: "", pageNum: 61, infoText: "A fact known by few about the French curriculum is that it’s centrally controlled by the Ministry of National Education, meaning all public schools across France—and in French international schools worldwide—follow the same syllabus. This ensures uniform academic standards, regardless of location, offering consistency for students in globally mobile families." },
    { page: Page61, sectionTitle: "Understanding the German curriculum", subTitle: "", pageNum: 62, infoText: "The German curriculum is not federally standardized—each of Germany’s 16 states (Länder) sets its own curriculum. This means students in different regions may study different materials or follow varied academic tracks, reflecting local priorities and creating a uniquely decentralized national education system." },
    { page: Page62, sectionTitle: "Understanding the German curriculum", subTitle: "", pageNum: 63, infoText: "A little-known fact about the German curriculum is its strong emphasis on vocational education through the “dual system.” Students can split time between classroom learning and apprenticeships in real workplaces. This model, rooted in tradition, produces highly skilled workers and is often cited as a key factor in Germany’s economic success." },
    { page: Page63, sectionTitle: "Understanding the German curriculum", subTitle: "", pageNum: 64, infoText: "A lesser-known fact about the German curriculum is that students are typically tracked into different educational paths—academic, technical, or vocational—by age 10. This early streaming shapes future career options and academic progression, reflecting Germany’s structured approach to education but also sparking ongoing debates about equity and student potential." },
    { page: Page64, sectionTitle: "UNDERSTANDING THE ADVANCED PLACEMENT CURRICULUM", subTitle: "", pageNum: 65, infoText: "The Advanced Placement (AP) curriculum was originally developed in the 1950s during the Cold War to help U.S. high school students accelerate into college-level work. It began as a pilot program for elite prep schools to better prepare students for leadership in science and government." },
    { page: Page65, sectionTitle: "UNDERSTANDING THE ADVANCED PLACEMENT CURRICULUM", subTitle: "", pageNum: 66, infoText: "A little-known fact about the Advanced Placement (AP) curriculum is that some U.S. universities allow students to skip entire years of college if they earn enough high AP exam scores. This can significantly reduce tuition costs and time to graduation, offering a major advantage for academically driven high school students." },
    { page: Page66, sectionTitle: "UNDERSTANDING THE ADVANCED PLACEMENT CURRICULUM", subTitle: "", pageNum: 67, infoText: "A fact few people know about the Advanced Placement (AP) curriculum is that some international schools also offer AP courses, not just U.S. schools. This makes AP a globally accessible option for students seeking college credit or advanced placement at American universities, bridging international education with the U.S. higher education system." },
    { page: Page67, sectionTitle: "UNDERSTANDING THE IGCSE CURRICULUM", subTitle: "", pageNum: 68, infoText: "A little-known fact about the IGCSE curriculum is that it was originally developed by Cambridge to serve international students whose first language might not be English. It emphasizes flexible, culturally sensitive content and offers over 70 subjects, including local language options, making it one of the most adaptable global curricula available." },
    { page: Page68, sectionTitle: "UNDERSTANDING THE IGCSE CURRICULUM", subTitle: "", pageNum: 69, infoText: "The IGCSE curriculum includes coursework options for some subjects, allowing students to be assessed partly through projects rather than exams alone. This flexibility supports diverse learning styles and can reduce exam pressure, making the curriculum more accessible to a wide range of international learners." },
    { page: Page69, sectionTitle: "UNDERSTANDING THE IGCSE CURRICULUM", subTitle: "", pageNum: 70, infoText: "A fact few know about the IGCSE curriculum is that it was designed with input from teachers worldwide, ensuring its global relevance. This collaborative development helps maintain its adaptability across diverse education systems, making it uniquely suited to meet the needs of internationally mobile students in over 160 countries." },
    { page: Page70, sectionTitle: "Universities", subTitle: "", pageNum: 71, infoText: "In Vietnam’s public university system many universities follow a dual admission process, combining national entrance exam scores with direct university-specific assessments. This hybrid model allows institutions to select students more holistically, balancing standardized testing with individual aptitude and potential for specialized programs." },
    { page: Page71, sectionTitle: "WHY STUDY AN MBA ABROAD", subTitle: "", pageNum: 72, infoText: "A little-known fact about Executive MBA (EMBA) programs is that many offer flexible formats, including weekend, online, and hybrid classes, designed specifically for working professionals. This flexibility allows executives to balance rigorous study with demanding careers, making EMBAs highly accessible and tailored for leadership development in diverse industries worldwide." },
    { page: Page72, sectionTitle: "WHY STUDY AN MBA ABROAD", subTitle: "", pageNum: 73, infoText: "Many international MBA programs include mandatory global immersion trips, where students visit multiple countries to experience diverse business cultures firsthand. These trips deepen cross-cultural understanding, enhance networking, and provide real-world exposure, setting international MBAs apart in preparing leaders for a globalized economy." },
    { page: EducationMainPage1, sectionTitle: "EDUCATION LISTINGS", subTitle: "", pageNum: 74 },
    { page: EducationMainPage2, sectionTitle: "EDUCATION LISTINGS", subTitle: "", pageNum: 75 },
    { page: EducationMainPage3, sectionTitle: "EDUCATION LISTINGS", subTitle: "", pageNum: 76 },
    { page: EducationMainPage4, sectionTitle: "EDUCATION LISTINGS", subTitle: "", pageNum: 77 },
    { page: EducationMainPage5, sectionTitle: "EDUCATION LISTINGS", subTitle: "", pageNum: 78 },
    { page: EducationMapPage, sectionTitle: "EDUCATION Map", subTitle: "", pageNum: 79 },
    { page: EducationSponsorPage, sectionTitle: "Education Sponsor", subTitle: "", pageNum: 80 },
]

export function BookPage({ data, type }: BookPageProps) {
    if (data.pageNumber >= pages.length) {
        data.pageNumber = pages.length
        console.log(data.pageNumber)
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 overflow-hidden">
            <Header subTitle={pages[data.pageNumber - 1].subTitle} sectionTitle={pages[data.pageNumber - 1].sectionTitle} infoText={pages[data.pageNumber - 1].infoText} pageNumber={data.pageNumber} />
            <ContentArea Page={pages[data.pageNumber - 1].page} />
            <Footer pageNumber={data.pageNumber} maxNumber={78} type="pages" />
        </div>
    )
}

function ContentArea({ Page }: { Page: React.ComponentType }) {
    return (
        <div className="h-[89dvh]">
            <Page />
        </div>
    )
}
