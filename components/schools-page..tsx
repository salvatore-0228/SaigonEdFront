"use client"

import Header from "./header"
import Footer from "./footer"
import { PageData } from "@/types/types"

import School1 from "@/app/schoollist/school1"
import School2 from "@/app/schoollist/school2"
import School3 from "@/app/schoollist/school3"
import School4 from "@/app/schoollist/school4"
import School5 from "@/app/schoollist/school5"
import School6 from "@/app/schoollist/school6"
import School7 from "@/app/schoollist/school7"
import School8 from "@/app/schoollist/school8"
import School9 from "@/app/schoollist/school9"
import School10 from "@/app/schoollist/school10"
import School11 from "@/app/schoollist/school11"
import School12 from "@/app/schoollist/school12"
import School13 from "@/app/schoollist/school13"
import School14 from "@/app/schoollist/school14"
import School15 from "@/app/schoollist/school15"
import School16 from "@/app/schoollist/school16"
import School17 from "@/app/schoollist/school17"
import School18 from "@/app/schoollist/school18"
import School19 from "@/app/schoollist/school19"
import School20 from "@/app/schoollist/school20"
import School21 from "@/app/schoollist/school21"
import School22 from "@/app/schoollist/school22"
import School23 from "@/app/schoollist/school23"
import School24 from "@/app/schoollist/school24"
import School25 from "@/app/schoollist/school25"
import School26 from "@/app/schoollist/school26"
import School27 from "@/app/schoollist/school27"
import School28 from "@/app/schoollist/school28"
import School29 from "@/app/schoollist/school29"
import School30 from "@/app/schoollist/school30"
import School31 from "@/app/schoollist/school31"
import School32 from "@/app/schoollist/school32"
import School33 from "@/app/schoollist/school33"
import School34 from "@/app/schoollist/school34"
import School35 from "@/app/schoollist/school35"
import School36 from "@/app/schoollist/school36"
import School37 from "@/app/schoollist/school37"

interface SchoolListPageProps {
    data: PageData,
}

const pages = [
    { page: School1, sectionTitle: "Education", subTitle: "", pageNum: 0 },
    { page: School2, sectionTitle: "Education", subTitle: "", pageNum: 1 },
    { page: School3, sectionTitle: "Education", subTitle: "", pageNum: 2 },
    { page: School4, sectionTitle: "Education", subTitle: "", pageNum: 3 },
    { page: School5, sectionTitle: "Education", subTitle: "", pageNum: 4 },
    { page: School6, sectionTitle: "Education", subTitle: "", pageNum: 5 },
    { page: School7, sectionTitle: "Education", subTitle: "", pageNum: 6},
    { page: School8, sectionTitle: "Education", subTitle: "", pageNum: 7 },
    { page: School9, sectionTitle: "Education", subTitle: "", pageNum: 8 },
    { page: School10, sectionTitle: "Education", subTitle: "", pageNum: 9 },
    { page: School11, sectionTitle: "Education", subTitle: "", pageNum: 10 },
    { page: School12, sectionTitle: "Education", subTitle: "", pageNum: 11 },
    { page: School13, sectionTitle: "Education", subTitle: "", pageNum: 12 },
    { page: School14, sectionTitle: "Education", subTitle: "", pageNum: 13 },
    { page: School15, sectionTitle: "Education", subTitle: "", pageNum: 14 },
    { page: School16, sectionTitle: "Education", subTitle: "", pageNum: 15 },
    { page: School17, sectionTitle: "Education", subTitle: "", pageNum: 16 },
    { page: School18, sectionTitle: "Education", subTitle: "", pageNum: 17 },
    { page: School19, sectionTitle: "Education", subTitle: "", pageNum: 18 },
    { page: School20, sectionTitle: "Education", subTitle: "", pageNum: 19 },
    { page: School21, sectionTitle: "Education", subTitle: "", pageNum: 20 },
    { page: School22, sectionTitle: "Education", subTitle: "", pageNum: 21 },
    { page: School23, sectionTitle: "Education", subTitle: "", pageNum: 22 },
    { page: School24, sectionTitle: "Education", subTitle: "", pageNum: 23 },
    { page: School25, sectionTitle: "Education", subTitle: "", pageNum: 24 },
    { page: School26, sectionTitle: "Education", subTitle: "", pageNum: 25},
    { page: School27, sectionTitle: "Education", subTitle: "", pageNum: 26},
    { page: School28, sectionTitle: "Education", subTitle: "", pageNum: 27},
    { page: School29, sectionTitle: "Education", subTitle: "", pageNum: 28},
    { page: School30, sectionTitle: "Education", subTitle: "", pageNum: 29},
    { page: School31, sectionTitle: "Education", subTitle: "", pageNum: 30},
    { page: School32, sectionTitle: "Education", subTitle: "", pageNum: 31},
    { page: School33, sectionTitle: "Education", subTitle: "", pageNum: 32},
    { page: School34, sectionTitle: "Education", subTitle: "", pageNum: 33},
    { page: School35, sectionTitle: "Education", subTitle: "", pageNum: 34},
    { page: School36, sectionTitle: "Education", subTitle: "", pageNum: 35},
    { page: School37, sectionTitle: "Education", subTitle: "", pageNum: 36},
]

export function SchoolListPage({ data }: SchoolListPageProps) {
    if (data.pageNumber >= pages.length) {
        data.pageNumber = pages.length
        console.log(data.pageNumber)
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 overflow-hidden">
            <Header subTitle={pages[data.pageNumber - 1].subTitle} sectionTitle={pages[data.pageNumber - 1].sectionTitle} pageNumber={undefined} infoText={undefined} />
            <ContentArea Page={pages[data.pageNumber - 1].page} />
            <Footer pageNumber={data.pageNumber} maxNumber={40} type="schoollist" />
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
