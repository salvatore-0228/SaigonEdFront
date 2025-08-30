import { SchoolListPage } from "@/components/schools-page."

interface PageProps {
  params: {
    pageNumber: string
  }
}

export default async function Page({ params }: PageProps) {
  const {pageNumber} = await params
  const pageNum = Number.parseInt(pageNumber)

  return (
    <SchoolListPage data={{pageNumber: pageNum}} />
  )
}

// Generate static params for all pages
export function generateStaticParams() {
  return Array.from({ length: 40 }, (_, i) => ({
    pageNumber: (i + 1).toString(),
  }))
}