import { BookPage } from "@/components/book-page"

interface PageProps {
  params: {
    pageNumber: string
  }
}

export default async function Page({ params }: PageProps) {
  const {pageNumber} = await params
  const pageNum = Number.parseInt(pageNumber)

  return (
    <BookPage data={{pageNumber: pageNum}} type="normal" />
  )
}

// Generate static params for all pages
export function generateStaticParams() {
  return Array.from({ length: 80 }, (_, i) => ({
    pageNumber: (i + 1).toString(),
  }))
}
