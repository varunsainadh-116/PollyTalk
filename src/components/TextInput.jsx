// src/components/TextInput.js
import { Textarea } from "./ui/textarea";

export function TextInput({ value, onChange }) {
  return (
    <Textarea
      value={value}
      onChange={onChange}
      placeholder="Enter text to convert to speech..."
      className="w-full h-60 mb-6 p-4 rounded-lg bg-purple-600 text-white placeholder-purple-300 focus:ring-2 focus:ring-purple-400 focus:outline-none"
    />
  );
}
