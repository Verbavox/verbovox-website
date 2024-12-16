import { Play, Pause, RotateCcw } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/app/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Slider } from "@/app/components/ui/slider"
import { motion, AnimatePresence } from "framer-motion"

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  const togglePlay = () => setIsPlaying(!isPlaying)
  const reset = () => {
    setIsPlaying(false)
    setProgress(0)
    // Add logic to reset audio to beginning
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Listen and Type</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Button onClick={togglePlay} variant="outline" className="w-24">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isPlaying ? "pause" : "play"}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                  className='flex justify-center items-center'
                >
                  {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                  {isPlaying ? 'Pause' : 'Play'}
                </motion.div>
              </AnimatePresence>
            </Button>
            <Button onClick={reset} variant="outline" className="w-24">
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
          </div>
          <Slider
            value={[progress]}
            max={100}
            step={1}
            onValueChange={(value) => setProgress(value[0])}
          />
          <motion.div 
            className="text-center text-sm text-muted-foreground"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          >
            {Math.floor(progress / 60)}:{(progress % 60).toString().padStart(2, '0')} / 1:30
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

