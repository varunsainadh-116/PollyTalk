"use client"

import { useState, useRef, useEffect } from 'react'
import { TextInput } from './TextInput'
import { ControlButtons } from './ControlButtons'
import { Waveform } from './Waveform'

export function TextToSpeech() {
  const [text, setText] = useState("")
  const [isPlaying, setIsPlaying] = useState(false)
  const synth = useRef(null)
  const utterance = useRef(null)
  const davidVoice = useRef(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      synth.current = window.speechSynthesis
      utterance.current = new SpeechSynthesisUtterance()
      utterance.current.onend = () => setIsPlaying(false)

      const loadVoices = () => {
        const voices = synth.current.getVoices()
        davidVoice.current = voices.find(voice => 
          voice.name === "Microsoft David - English (United States)" && 
          voice.lang === "en-US"
        )
        if (davidVoice.current) {
          utterance.current.voice = davidVoice.current
        } else {
          console.warn("Microsoft David voice not found. Using default voice.")
        }
      }

      synth.current.onvoiceschanged = loadVoices
      loadVoices()
    }
  }, [])

  const handlePlay = () => {
    if (!synth.current || !utterance.current) return

    if (isPlaying) {
      synth.current.cancel()
      setIsPlaying(false)
    } else {
      utterance.current.text = text
      synth.current.speak(utterance.current)
      setIsPlaying(true)
    }
  }

  const handleDownload = () => {
    if (typeof window === 'undefined') return

    const element = document.createElement("a")
    const file = new Blob([text], {type: 'text/plain'})
    element.href = URL.createObjectURL(file)
    element.download = "speech.txt"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4 relative">
      <h1 className="text-4xl font-bold mb-8">"Speak Your Mind with Polly!"</h1>
      <div className="w-full max-w-3xl relative">
        <TextInput value={text} onChange={(e) => setText(e.target.value)} />
        <ControlButtons isPlaying={isPlaying} onPlay={handlePlay} onDownload={handleDownload} />
      </div>
      <Waveform isPlaying={isPlaying} />
    </div>
  )
}