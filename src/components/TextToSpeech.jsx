"use client";

import { useState, useRef, useEffect } from "react";
import { TextInput } from "./TextInput";
import { ControlButtons } from "./ControlButtons";
import { Waveform } from "./Waveform";
import AWS from "aws-sdk";

AWS.config.update({
  region: process.env.NEXT_PUBLIC_REGION,
  accessKeyId: process.env.NEXT_PUBLIC_CLIENTID,
  secretAccessKey: process.env.NEXT_PUBLIC_SECRETKEY,
});

const Polly = new AWS.Polly();

export function TextToSpeech() {
  const [text, setText] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioFile, setAudioFile] = useState(null);
  const [isConverted, setIsConverted] = useState(false);
  const [converting, setConverting] = useState(false);
  const audioRef = useRef(null);

  const handleTextToSpeech = () => {
    if (!text) return;
    setConverting(true);
    Polly.synthesizeSpeech(
      {
        Text: text,
        OutputFormat: "mp3",
        VoiceId: "Salli",
      },
      (error, data) => {
        if (error) {
          console.error(error);
        } else {
          setAudioFile(data);
          setIsConverted(true);
        }
      }
    );
    setConverting(false);
  };

  useEffect(() => {
    if (audioFile && audioFile.AudioStream) {
      const audioBlob = new Blob([audioFile.AudioStream], {
        type: "audio/mp3",
      });
      const audioUrl = URL.createObjectURL(audioBlob);

      if (audioRef.current) {
        audioRef.current.src = audioUrl;
      }

      return () => {
        URL.revokeObjectURL(audioUrl);
      };
    }
  }, [audioFile]);

  const handlePlay = () => {
    if (audioRef.current && isConverted) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleDownload = () => {
    if (audioFile && audioFile.AudioStream) {
      const audioBlob = new Blob([audioFile.AudioStream], {
        type: "audio/mp3",
      });
      const audioUrl = URL.createObjectURL(audioBlob);
      const link = document.createElement("a");
      link.href = audioUrl;
      link.download = "PollyTalk.mp3";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(audioUrl);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4 relative">
      <h1 className="text-4xl font-bold mb-8">
        &quot;Speak Your Mind with Polly!&quot;
      </h1>
      <div className="w-full max-w-3xl relative">
        <TextInput value={text} onChange={(e) => setText(e.target.value)} />
        <ControlButtons
          isPlaying={isPlaying}
          onPlay={handlePlay}
          onDownload={handleDownload}
          onTextToSpeech={handleTextToSpeech}
          isPlayDisabled={!isConverted}
        />
      </div>
      <Waveform isPlaying={isPlaying} />
      <audio ref={audioRef} />
    </div>
  );
}
