import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"

interface ImageSlideshowProps {
  images: { src: string; alt: string }[]
  height: number
}

export default function CustomSlideshow({ images, height }: ImageSlideshowProps) {
  return (
    <Carousel className="relative w-full max-w-2xl mx-auto h-full">
      {" "}
      {/* Make Carousel relative for absolute positioning */}
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="h-full">
              <Card className="h-full">
                <CardContent className="relative flex aspect-video items-center justify-center p-0 overflow-hidden h-full w-full">
                  <Image src={image.src} alt={image.alt} fill className="object-fill h-full" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Position buttons absolutely within the carousel */}
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 text-white bg-gray-800/50 hover:bg-gray-700/70 rounded-full" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 text-white bg-gray-800/50 hover:bg-gray-700/70 rounded-full" />
    </Carousel>
  )
}
