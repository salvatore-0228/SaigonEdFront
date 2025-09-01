import { redirect } from 'next/dist/server/api-utils';
import styles from '../master-education-page.module.css';
import { SchoolIcon } from 'lucide-react';
import Link from 'next/link';

interface SchoolCardProps {
  name: string;
  description: string;
  curriculum: string;
  languages: string[];
  ages: string;
  fees: string;
  linkpage: number,
  tuition: string,
  qualifications: string,
  website: string,
  youtube: string,
  facebook: string,
  linkedin: string,
  instagram: string,
};

interface educationMainProps {
  linkClick: (value: number) => void
}

const SchoolCard = ({
  name,
  tuition,
  qualifications,
  curriculum,
  languages,
  ages,
  linkpage,
  website,
  youtube,
  facebook,
  linkedin,
  instagram,

}: SchoolCardProps) => {
  return (
    <div className={`${styles.card} flex flex-col flex-1 dark:bg-gray-900 dark:text-white lg:text-[0.8dvw] md:text-[0.8dvw] text-[1rem]`}>
      <div className="flex-1">
        <Link
          className='bg-black text-white lg:px-8 lg:py-4 px-4 py-2 rounded hover:bg-gray-500'
          style={{ display: "flex", cursor: "pointer" }}
          href={`/schoollist/${linkpage}`}
        >
          {name}
        </Link>
      </div>
      <div className={`${styles.cardRight} dark:bg-gray-900 dark:text-white`}>
        <div style={{ display: "flex", borderBottom: "1px dashed red" }}>
          <p style={{ left: 0, flex: "1" }}><strong>Curriculum</strong></p>
          <p style={{ right: 0 }}>{curriculum}</p>
        </div>
        <div style={{ display: "flex", borderBottom: "1px dashed red" }}>
          <p style={{ left: 0, flex: "1" }}><strong>Languages of instruction</strong></p>
          <p style={{ right: 0 }}>{languages.join(', ')}</p>
        </div>
        <div style={{ display: "flex", borderBottom: "1px dashed red" }}>
          <p style={{ left: 0, flex: "1" }}><strong>Ages</strong></p>
          <p style={{ right: 0 }}><span className={styles.age}>{ages}</span></p>
        </div>
        <div style={{ display: "flex", borderBottom: "1px dashed red" }}>
          <p style={{ left: 0, flex: "1" }}><strong>Tuition</strong></p>
          <p style={{ right: 0 }}>{tuition}</p>
        </div>
      </div>
      <div className="flex flex-row gap-1" style={{ borderBottom: "1px solid gray", paddingTop: "1dvw", paddingBottom: "1dvw" }}>
        {
          website !== "" && <Link href={website} passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <div>
                <img src="/images/btn/globe_btn.png" width={30} height={30} alt="no image" />
              </div>
            </a>
          </Link>
        }
        {
          youtube !== "" && <Link href={youtube} passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <div>
                <img src="/images/btn/youtube_btn.png" width={30} height={30} alt="no image" />
              </div>
            </a>
          </Link>
        }
        {
          facebook !== "" && <Link href={facebook} passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <div>
                <img src="/images/btn/facebook_btn.png" width={30} height={30} alt="no image" />
              </div>
            </a>
          </Link>
        }
        {
          linkedin !== "" && <Link href={linkedin} passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <div>
                <img src="/images/btn/linkedin_btn.png" width={30} height={30} alt="no image" />
              </div>
            </a>
          </Link>
        }
        {
          instagram !== "" && <Link href={instagram} passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <div>
                <img src="/images/btn/instagram_btn.png" width={30} height={30} alt="no image" />
              </div>
            </a>
          </Link>
        }
      </div>
    </div>
  );
};

export default function EducationMainPage1() {
  const schools = [
    {
      name: 'Saigon South International School',
      description: 'Shanghai Pinghe Bilingual School is a boarding school established in September 1996 with full operational and financial independence Shanghai Pinghe Bilingual School is a boarding school established in September 1996 with full operational and financial independence',
      curriculum: 'IB, Chinese',
      languages: ['English', 'Chinese'],
      ages: '6 to 18',
      tuition: "144,900,000 ₫ to: 421,100,000 ₫",
      qualifications: "IGCSE, A-Levels, and AP",
      fees: 'This school does not make their fees public.',
      linkpage: 1,
      website: "https://www.ssis.edu.vn/",
      youtube: "https://www.youtube.com/@SSISOfficial",
      facebook: "https://www.facebook.com/Saigon.South/",
      linkedin: "https://www.instagram.com/saigonsouthinternationalschool/",
      instagram: "",
    },
    {
      name: 'European International School Ho Chi Minh City',
      description: 'Beijing International School offers bilingual education in a multicultural environment...',
      curriculum: 'IB, AP',
      languages: ['English', 'Mandarin'],
      ages: '5 to 18',
      fees: 'Tuition: Not publicly available',
      tuition: "144,900,000 ₫ to: 421,100,000 ₫",
      qualifications: "IGCSE, A-Levels, and AP",
      linkpage: 2,
      website: "https://www.eishcmc.com/",
      youtube: "https://www.youtube.com/channel/UCSqpke-i_oVYfV00RsuNRPQ",
      facebook: "https://www.facebook.com/EISHCMC",
      linkedin: "https://www.linkedin.com/school/eishcmc/",
      instagram: "https://www.instagram.com/eishochiminhcity/",
    },
    {
      name: 'Australian International School Saigon',
      description: 'Guangzhou Global Academy focuses on academic excellence and character development...',
      curriculum: 'British, Chinese',
      languages: ['English', 'Chinese'],
      ages: '6 to 18',
      fees: 'Contact school for tuition details.',
      tuition: "144,900,000 ₫ to: 421,100,000 ₫",
      qualifications: "IGCSE, A-Levels, and AP",
      linkpage: 3,
      website: "https://www.aisvietnam.com/",
      youtube: "https://www.youtube.com/user/aisvietnam",
      facebook: "https://www.facebook.com/AustralianInternationalSchoolVietnam/",
      linkedin: "https://www.linkedin.com/company/australian-international-school-vietnam/",
      instagram: "https://www.instagram.com/ais.vietnam.official/",
    },
    {
      name: 'International School Ho Chi Minh City',
      description: 'A progressive school with a focus on future-ready skills and international curriculum...',
      curriculum: 'IGCSE, A-Levels',
      languages: ['English'],
      ages: '7 to 18',
      fees: 'This school does not make their fees public.',
      tuition: "144,900,000 ₫ to: 421,100,000 ₫",
      qualifications: "IGCSE, A-Levels, and AP",
      linkpage: 4,
      website: "https://www.ishcmc.com/",
      youtube: "https://www.youtube.com/channel/UCNQ8qtGCLwAzvZF6ZWo4uzQ",
      facebook: "https://www.facebook.com/ISHCMC/",
      linkedin: "",
      instagram: "",
    },
    {
      name: 'British International School Ho Chi Minh City',
      description: 'Guangzhou Global Academy focuses on academic excellence and character development...',
      curriculum: 'British, Chinese',
      languages: ['English', 'Chinese'],
      ages: '6 to 18',
      fees: 'Contact school for tuition details.',
      tuition: "144,900,000 ₫ to: 421,100,000 ₫",
      qualifications: "IGCSE, A-Levels, and AP",
      linkpage: 5,
      website: "https://www.nordangliaeducation.com/bis-hcmc",
      youtube: "https://www.youtube.com/channel/UCFegKp3XmoxNW_Ab4OgVkKQ",
      facebook: "https://www.facebook.com/BISHCMC/",
      linkedin: "https://www.linkedin.com/school/british-international-school-ho-chi-minh-city/",
      instagram: "https://www.instagram.com/bishcmc/",
    },
    {
      name: 'EMASI International Bilingual Schools',
      description: 'A progressive school with a focus on future-ready skills and international curriculum...',
      curriculum: 'IGCSE, A-Levels',
      languages: ['English'],
      ages: '7 to 18',
      fees: 'This school does not make their fees public.',
      tuition: "144,900,000 ₫ to: 421,100,000 ₫",
      qualifications: "IGCSE, A-Levels, and AP",
      linkpage: 6,
      website: "https://www.nordangliaeducation.com/bis-hcmc",
      youtube: "https://www.youtube.com/channel/UCFegKp3XmoxNW_Ab4OgVkKQ",
      facebook: "https://www.facebook.com/BISHCMC/",
      linkedin: "https://www.linkedin.com/school/british-international-school-ho-chi-minh-city/",
      instagram: "https://www.instagram.com/bishcmc/",
    },
    {
      name: 'Royal School',
      description: 'A progressive school with a focus on future-ready skills and international curriculum...',
      curriculum: 'IGCSE, A-Levels',
      languages: ['English'],
      ages: '7 to 18',
      fees: 'This school does not make their fees public.',
      tuition: "144,900,000 ₫ to: 421,100,000 ₫",
      qualifications: "IGCSE, A-Levels, and AP",
      linkpage: 7,
      website: "https://en.royal.edu.vn/",
      youtube: "https://www.youtube.com/channel/UCTpZCIsc0LmnQ2evqZhOHOQ",
      facebook: "https://www.facebook.com/Royalschool.vn",
      linkedin: "",
      instagram: "https://www.instagram.com/royal.edu.vn/",
    },
    {
      name: 'Renaissance International School Saigon',
      description: 'A progressive school with a focus on future-ready skills and international curriculum...',
      curriculum: 'IGCSE, A-Levels',
      languages: ['English'],
      ages: '7 to 18',
      fees: 'This school does not make their fees public.',
      tuition: "144,900,000 ₫ to: 421,100,000 ₫",
      qualifications: "IGCSE, A-Levels, and AP",
      linkpage: 8,
      website: "https://renaissance.edu.vn/",
      youtube: "https://www.youtube.com/user/renaissancevietnam",
      facebook: "https://www.facebook.com/RenaissanceInternationalSchoolSaigon",
      linkedin: "https://www.linkedin.com/company/renaissanceinternationalschoolsaigon/",
      instagram: "https://www.instagram.com/renaissance.school.saigon/",
    },
  ];

  return (
    <div className="h-full w-full px-8 sm:px-6 py-8 sm:py-6 dark:bg-gray-900 dark:text-white lg:overflow-hidden md:overflow-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200">
      <div className='flex lg:flex-row flex-col lg:gap-[2dvw] md:gap-[2dvw] gap-[1rem] h-full'>
        <div className='flex lg:flex-row flex-col lg:w-1/2 md:w-1/2 lg:gap-[1dvw] md:gap-[1dvw] gap-[1rem]'>
          {/* {schools.map((school, index) => (
            index < 4 ? <SchoolCard key={index} {...school} /> : ""
          ))} */}
          <div className='lg:w-1/2 md:w-1/2 flex flex-col lg:gap-[1dvw] gap-[1rem]'>
            <SchoolCard {...schools[0]} />
            <SchoolCard {...schools[1]} />
          </div>
          <div className='lg:w-1/2 md:w-1/2 flex flex-col lg:gap-[1dvw] gap-[1rem]'>
            <SchoolCard {...schools[2]} />
            <SchoolCard {...schools[3]} />
          </div>
        </div>
        <div className='flex lg:flex-row flex-col lg:w-1/2 md:w-1/2 lg:gap-[1dvw] md:gap-[1dvw] gap-[1rem]'>
          {/* {schools.map((school, index) => (
            index < 4 ? <SchoolCard key={index} {...school} /> : ""
          ))} */}
          <div className='lg:w-1/2 md:w-1/2 flex flex-col lg:gap-[1dvw] md:gap-[1dvw] gap-[1rem]'>
            <SchoolCard {...schools[4]} />
            <SchoolCard {...schools[5]} />
          </div>
          <div className='lg:w-1/2 md:w-1/2 flex flex-col lg:gap-[1dvw] md:gap-[1dvw] gap-[1rem]'>
            <SchoolCard {...schools[6]} />
            <SchoolCard {...schools[7]} />
          </div>
        </div>
      </div>
    </div>
  );
}
