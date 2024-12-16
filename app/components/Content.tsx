import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export function Content() {
  return (
    <motion.div 
      className="my-8 space-y-6"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2
          }
        }
      }}
    >
      <motion.h2 
        className="text-3xl font-bold text-center mb-8 text-primary"
        variants={cardVariants}
      >
        Today&apos;s Lesson: Weather
      </motion.h2>
      <motion.div variants={cardVariants}>
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">AI-Generated Content</CardTitle>
          </CardHeader>
          <CardContent>
            <motion.p 
              className="text-muted-foreground leading-relaxed"
              initial={{ filter: "blur(4px)" }}
              whileHover={{ filter: "blur(0px)" }}
              transition={{ duration: 0.3 }}
            >
              Climate change is altering weather patterns globally, leading to more extreme events. 
              Scientists are working tirelessly to understand these changes and develop strategies 
              to mitigate their effects. Public awareness and action are crucial in addressing this 
              global challenge.
            </motion.p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

