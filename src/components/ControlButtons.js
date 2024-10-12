// src/components/ControlButtons.js
import { Button } from "./ui/button"
import { Play, Pause, Download } from "lucide-react"

export function ControlButtons({ isPlaying, onPlay, onDownload }) {
  return (
    <div className="flex justify-between mt-4"> {/* Added container with flex layout */}
      <Button
        onClick={onPlay}
        className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center"
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </Button>
      <Button
        onClick={onDownload}
        className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center"
      >
        <Download size={24} />
      </Button>
    </div>
  )
}