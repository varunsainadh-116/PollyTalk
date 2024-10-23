import { Button } from "@/components/ui/button"
import { Play, Pause, Download, RefreshCw } from "lucide-react"

export function ControlButtons({ isPlaying, onPlay, onDownload, onTextToSpeech }) {
  return (
    <div className="flex justify-between mt-4 space-x-4">
      <div className="flex space-x-2">
        <Button
          onClick={onTextToSpeech}
          className="px-4 h-12 bg-purple-500 hover:bg-purple-600 text-white flex items-center justify-center"
        >
          <RefreshCw size={24} className="mr-2" />
          Convert
        </Button>
        <Button
          onClick={onPlay}
          className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center"
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </Button>
      </div>
      <Button
        onClick={onDownload}
        className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center"
      >
        <Download size={24} />
      </Button>
    </div>
  )
}