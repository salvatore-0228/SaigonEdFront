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

export default function EducationMainPage3() {
  const schools = [
    {
      name: 'Fosco International School',
      description: 'Shanghai Pinghe Bilingual School is a boarding school established in September 1996 with full operational and financial independence Shanghai Pinghe Bilingual School is a boarding school established in September 1996 with full operational and financial independence',
      curriculum: 'IB, Chinese',
      languages: ['English', 'Chinese'],
      ages: '6 to 18',
      tuition: "144,900,000 ₫ to: 421,100,000 ₫",
      qualifications: "IGCSE, A-Levels, and AP",
      fees: 'This school does not make their fees public.',
      linkpage: 17,
      website: "https://en.fis.edu.vn/",
      youtube: "https://www.youtube.com/channel/UCMGVa-yJ6XdRjEjMSoDUjiA",
      facebook: "https://www.facebook.com/p/FOSCO-International-School-100057105294628/",
      linkedin: "",
      instagram: "",
    },
    {
      name: 'Sedbergh Vietnam',
      description: 'Beijing International School offers bilingual education in a multicultural environment...',
      curriculum: 'IB, AP',
      languages: ['English', 'Mandarin'],
      ages: '5 to 18',
      fees: 'Tuition: Not publicly available',
      tuition: "144,900,000 ₫ to: 421,100,000 ₫",
      qualifications: "IGCSE, A-Levels, and AP",
      linkpage: 18,
      website: "https://sedbergh.edu.vn/",
      youtube: "",
      facebook: "https://www.facebook.com/SedberghVietnam.BCIS",
      linkedin: "https://www.linkedin.com/company/sedbergh-vietnam/",
      instagram: "",
    },
    {
      name: 'Singapore International School @ Saigon South',
      description: 'Guangzhou Global Academy focuses on academic excellence and character development...',
      curriculum: 'British, Chinese',
      languages: ['English', 'Chinese'],
      ages: '6 to 18',
      fees: 'Contact school for tuition details.',
      tuition: "144,900,000 ₫ to: 421,100,000 ₫",
      qualifications: "IGCSE, A-Levels, and AP",
      linkpage: 19,
      website: "https://saigonsouth.sis.edu.vn/",
      youtube: "",
      facebook: "https://www.facebook.com/siskinderworld/",
      linkedin: "",
      instagram: "",
    },
    {
      name: 'The Canadian International School',
      description: 'A progressive school with a focus on future-ready skills and international curriculum...',
      curriculum: 'IGCSE, A-Levels',
      languages: ['English'],
      ages: '7 to 18',
      fees: 'This school does not make their fees public.',
      tuition: "144,900,000 ₫ to: 421,100,000 ₫",
      qualifications: "IGCSE, A-Levels, and AP",
      linkpage: 20,
      website: "https://cis.edu.vn/",
      youtube: "",
      facebook: "https://www.facebook.com/CISVN/",
      linkedin: "https://www.linkedin.com/company/canadian-international-school-vietnam-ciss/about/",
      instagram: "",
    },
    {
      name: 'Lycée Français International Marguerite Duras',
      description: 'Guangzhou Global Academy focuses on academic excellence and character development...',
      curriculum: 'British, Chinese',
      languages: ['English', 'Chinese'],
      ages: '6 to 18',
      fees: 'Contact school for tuition details.',
      tuition: "144,900,000 ₫ to: 421,100,000 ₫",
      qualifications: "IGCSE, A-Levels, and AP",
      linkpage: 21,
      website: "https://lfiduras.com/",
      youtube: "https://www.youtube.com/channel/UCTdxoU8EpPi8liIlQNRHo9g",
      facebook: "https://www.facebook.com/LFIMD/",
      linkedin: "",
      instagram: "https://www.instagram.com/lfimargueriteduras/",
    },
    {
      name: 'Vietnam Finland International School',
      description: 'A progressive school with a focus on future-ready skills and international curriculum...',
      curriculum: 'IGCSE, A-Levels',
      languages: ['English'],
      ages: '7 to 18',
      fees: 'This school does not make their fees public.',
      tuition: "144,900,000 ₫ to: 421,100,000 ₫",
      qualifications: "IGCSE, A-Levels, and AP",
      linkpage: 22,
      website: "https://vfis.tdtu.edu.vn/",
      youtube: "https://www.youtube.com/channel/UCXJvqkBg-Y1EIM-uFMmgN1A",
      facebook: "https://www.facebook.com/vfis.tdtu.edu.vn/",
      linkedin: "https://www.linkedin.com/company/vietnamfinlandinternationalschool/",
      instagram: "",
    },
    {
      name: 'Wellspring Saigon International Bilingual School',
      description: 'Guangzhou Global Academy focuses on academic excellence and character development...',
      curriculum: 'British, Chinese',
      languages: ['English', 'Chinese'],
      ages: '6 to 18',
      fees: 'Contact school for tuition details.',
      tuition: "144,900,000 ₫ to: 421,100,000 ₫",
      qualifications: "IGCSE, A-Levels, and AP",
      linkpage: 23,
      website: "https://wellspring.edu.vn/",
      youtube: "https://www.youtube.com/channel/UCVZmlCinKvjpwMjDrC6Lihw",
      facebook: "https://www.facebook.com/WellspringSaigon",
      linkedin: "",
      instagram: "",
    },
    {
      name: 'Saint Ange French International School',
      description: 'A progressive school with a focus on future-ready skills and international curriculum...',
      curriculum: 'IGCSE, A-Levels',
      languages: ['English'],
      ages: '7 to 18',
      fees: 'This school does not make their fees public.',
      tuition: "144,900,000 ₫ to: 421,100,000 ₫",
      qualifications: "IGCSE, A-Levels, and AP",
      linkpage: 24,
      website: "https://saintangeschool.com/",
      youtube: "",
      facebook: "https://www.facebook.com/ecolesaintange",
      linkedin: "https://www.linkedin.com/company/saintange-vietnam/",
      instagram: "https://www.instagram.com/saintangefrenchschoolhcmc/",
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
