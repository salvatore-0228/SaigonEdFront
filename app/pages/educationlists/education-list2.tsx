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

export default function EducationMainPage2() {
  const schools = [
    {
      name: 'British Vietnamese International School Ho Chi Minh City',
      description: 'Shanghai Pinghe Bilingual School is a boarding school established in September 1996 with full operational and financial independence Shanghai Pinghe Bilingual School is a boarding school established in September 1996 with full operational and financial independence',
      curriculum: 'IB, Chinese',
      languages: ['English', 'Chinese'],
      ages: '6 to 18',
      tuition: "144,900,000 ₫ to: 421,100,000 ₫",
      qualifications: "IGCSE, A-Levels, and AP",
      fees: 'British Vietnamese International School Ho Chi Minh City',
      linkpage: 9,
      website: "https://www.nordangliaeducation.com/bvis-hcmc?utm_campaign=plus+listing&utm_medium=referral&utm_source=international-schools-database.com",
      youtube: "https://www.youtube.com/channel/UCatxLg3JsMGbB7XawAat51w",
      facebook: "https://www.facebook.com/BVISHoChiMinhCity/",
      linkedin: "https://www.linkedin.com/company/british-vietnamese-international-school-ho-chi-minh-city/",
      instagram: "https://www.instagram.com/bvishcmc/",
    },
    {
      name: 'International Schools of North America',
      description: 'Beijing International School offers bilingual education in a multicultural environment...',
      curriculum: 'IB, AP',
      languages: ['English', 'Mandarin'],
      ages: '5 to 18',
      fees: 'Tuition: Not publicly available',
      tuition: "144,900,000 ₫ to: 421,100,000 ₫",
      qualifications: "IGCSE, A-Levels, and AP",
      linkpage: 10,
      website: "https://sna.edu.vn/",
      youtube: "https://www.youtube.com/user/SchoolsNorthAmerica",
      facebook: "https://www.facebook.com/snavietnam/",
      linkedin: "https://www.linkedin.com/in/sna-international-school-of-north-america-babb60274",
      instagram: "https://www.instagram.com/snasaigonsouthcampus/",
    },
    {
      name: 'US Vietnam Talent International School',
      description: 'Guangzhou Global Academy focuses on academic excellence and character development...',
      curriculum: 'British, Chinese',
      languages: ['English', 'Chinese'],
      ages: '6 to 18',
      fees: 'Contact school for tuition details.',
      tuition: "144,900,000 ₫ to: 421,100,000 ₫",
      qualifications: "IGCSE, A-Levels, and AP",
      linkpage: 11,
      website: "https://utschool.edu.vn/",
      youtube: "https://www.youtube.com/channel/UCVJD61nKHWr3ZpkG2M9K4Ng",
      facebook: "https://www.facebook.com/NamMyUTS/",
      linkedin: "https://www.linkedin.com/company/us-vietnam-talent-international-school/",
      instagram: "https://www.instagram.com/uts.hcm/",
    },
    {
      name: 'International School Ho Chi Minh City - American Academy',
      description: 'A progressive school with a focus on future-ready skills and international curriculum...',
      curriculum: 'IGCSE, A-Levels',
      languages: ['English'],
      ages: '7 to 18',
      fees: 'This school does not make their fees public.',
      tuition: "144,900,000 ₫ to: 421,100,000 ₫",
      qualifications: "IGCSE, A-Levels, and AP",
      linkpage: 12,
      website: "https://www.aavn.edu.vn/",
      youtube: "https://www.youtube.com/c/ishcmcamericanacademy",
      facebook: "https://www.facebook.com/ishcmc.aa",
      linkedin: "https://www.linkedin.com/company/international-school-of-ho-chi-minh-city-american-academy/",
      instagram: "https://www.instagram.com/aavnsunbears/",
    },
    {
      name: 'Montessori International School of Vietnam',
      description: 'Guangzhou Global Academy focuses on academic excellence and character development...',
      curriculum: 'British, Chinese',
      languages: ['English', 'Chinese'],
      ages: '6 to 18',
      fees: 'Contact school for tuition details.',
      tuition: "144,900,000 ₫ to: 421,100,000 ₫",
      qualifications: "IGCSE, A-Levels, and AP",
      linkpage: 13,
      website: "https://montessori.edu.vn/",
      youtube: "",
      facebook: "https://www.facebook.com/MontessoriInternationalSchoolofVietnam/",
      linkedin: "https://www.linkedin.com/company/montessori-international-school-of-vietnam/about/",
      instagram: "",
    },
    {
      name: 'Vietnam Australia International School',
      description: 'A progressive school with a focus on future-ready skills and international curriculum...',
      curriculum: 'IGCSE, A-Levels',
      languages: ['English'],
      ages: '7 to 18',
      fees: 'This school does not make their fees public.',
      tuition: "144,900,000 ₫ to: 421,100,000 ₫",
      qualifications: "IGCSE, A-Levels, and AP",
      linkpage: 14,
      website: "https://www.vas.edu.vn/",
      youtube: "https://www.youtube.com/channel/UCQpm5TF4KgL5bgO8BiaH8cQ",
      facebook: "https://www.facebook.com/TruongQuocTeVietUc.VAS",
      linkedin: "https://www.linkedin.com/company/vietnam-australia-international-school-vas/",
      instagram: "https://www.instagram.com/vas.school/",
    },
    {
      name: 'Scotch AGS',
      description: 'Guangzhou Global Academy focuses on academic excellence and character development...',
      curriculum: 'British, Chinese',
      languages: ['English', 'Chinese'],
      ages: '6 to 18',
      fees: 'Contact school for tuition details.',
      tuition: "144,900,000 ₫ to: 421,100,000 ₫",
      qualifications: "IGCSE, A-Levels, and AP",
      linkpage: 15,
      website: "https://scotch-ags.edu.vn/",
      youtube: "https://www.youtube.com/@ScotchAGS",
      facebook: "https://www.facebook.com/ScotchAGS",
      linkedin: "https://www.linkedin.com/school/scotch-college-ags/",
      instagram: "https://www.instagram.com/scotch_ags/",
    },
    {
      name: 'SNA Marianapolis School',
      description: 'A progressive school with a focus on future-ready skills and international curriculum...',
      curriculum: 'IGCSE, A-Levels',
      languages: ['English'],
      ages: '7 to 18',
      fees: 'This school does not make their fees public.',
      tuition: "144,900,000 ₫ to: 421,100,000 ₫",
      qualifications: "IGCSE, A-Levels, and AP",
      linkpage: 16,
      website: "https://snamarianapolis.edu.vn/",
      youtube: "https://www.youtube.com/c/SNAMarianapolisInternationalSchool",
      facebook: "https://www.facebook.com/snamarianapolis",
      linkedin: "https://www.linkedin.com/company/sna-marianapolis-international-school/",
      instagram: "https://www.instagram.com/snamarianapolis/",
    },
  ];

  return (
    <div className="h-full w-full px-8 sm:px-6 py-8 sm:py-6 dark:bg-gray-900 dark:text-white lg:overflow-hidden md:overflow-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200">
      <div className='flex lg:flex-row flex-col lg:gap-[2dvw] md:gap-[2dvw] gap-[1rem] h-full'>
        <div className='flex lg:flex-row flex-col lg:w-1/2 md:w-1/2 lg:gap-[1dvw] md:gap-[1dvw] gap-[1rem]'>
          {/* {schools.map((school, index) => (
            index < 4 ? <SchoolCard key={index} {...school} /> : ""
          ))} */}
          <div className='lg:w-1/2 md:w-1/2 flex flex-col lg:gap-[1dvw] md:gap-[1dvw] gap-[1rem]'>
            <SchoolCard {...schools[0]} />
            <SchoolCard {...schools[1]} />
          </div>
          <div className='lg:w-1/2 md:w-1/2 flex flex-col lg:gap-[1dvw] md:gap-[1dvw] gap-[1rem]'>
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
