// components/YoutubeEmbed.tsx
import { useState } from 'react';

export default function YoutubeEmbed({ className, videoId, autoplay }: { className?: string ,videoId: string, autoplay?: boolean }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative w-full aspect-video border border-[1px] border-white ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 z-10">
          <div className="w-12 h-12 border-4 border-red-400 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      {
        autoplay === true ? <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
          onLoad={() => setIsLoading(false)}
        /> : <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
          onLoad={() => setIsLoading(false)}
        />
      }
    </div>
  );
}
