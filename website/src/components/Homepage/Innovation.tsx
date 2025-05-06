'use client'

import { useEffect, useState, useCallback, useMemo, useRef } from "react"
import { motion, useAnimationControls, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"

interface SupplyChainStep {
  id: string
  label: string
  description: string
  icon?: React.ReactNode
  color?: string
}

const useSupplyChainSteps = (): SupplyChainStep[] => {
  return useMemo(() => [
    { 
      id: 'design',
      label: "Design", 
      description: "Designing products aligned with customer expectations and market trends.",
      color: '#3B82F6' // blue-500
    },
    { 
      id: 'sourcing',
      label: "Sourcing", 
      description: "Finding the right materials and factories that align with quality and sustainability.",
      color: '#10B981' // emerald-500
    },
    { 
      id: 'production',
      label: "Production", 
      description: "Coordinating manufacturing to meet compliance, timelines, and cost-efficiency.",
      color: '#F59E0B' // amber-500
    },
    { 
      id: 'logistics',
      label: "Logistics", 
      description: "Efficient delivery, from factory floor to global destinations.",
      color: '#6366F1' // indigo-500
    },
    { 
      id: 'retail',
      label: "Retail", 
      description: "Delivering to retail channels with speed, flexibility, and traceability.",
      color: '#EC4899' // pink-500
    },
  ], [])
}

const polarToCartesian = (angle: number, radius: number, center: number) => {
  const rad = (angle - 90) * (Math.PI / 180)
  return {
    x: center + radius * Math.cos(rad),
    y: center + radius * Math.sin(rad),
  }
}

const calculatePath = (steps: SupplyChainStep[], radius: number, center: number) => {
  const angleStep = 360 / steps.length
  return steps.map((_, index) => {
    const angle = angleStep * index
    const { x, y } = polarToCartesian(angle, radius, center)
    return index === 0 ? `M${x},${y}` : `L${x},${y}`
  }).join(' ')
}

const SupplyChainVisualization = ({
  activeStep,
  setActiveStep,
  steps,
  radius,
  center
}: {
  activeStep: number
  setActiveStep: (index: number) => void
  steps: SupplyChainStep[]
  radius: number
  center: number
}) => {
  const pathData = useMemo(() => calculatePath(steps, radius, center), [steps, radius, center])
  const controls = useAnimationControls()

  useEffect(() => {
    controls.start({
      pathLength: 1,
      transition: { duration: 1.5, ease: "easeInOut" }
    })
  }, [controls])

  return (
    <svg width={center * 2} height={center * 2} className="mx-auto">
      <defs>
        <radialGradient id="circleGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
        </radialGradient>
        
        <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
      </defs>

      <motion.path
        d={pathData}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="0 1"
        initial={{ pathLength: 0 }}
        animate={controls}
        className="text-gray-200 dark:text-gray-700"
      />

      {steps.map((step, index) => {
        const angle = (360 / steps.length) * index
        const { x, y } = polarToCartesian(angle, radius, center)
        const isActive = index === activeStep

        return (
          <g key={step.id} onClick={() => setActiveStep(index)} className="cursor-pointer">
            <line
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="currentColor"
              strokeWidth="1"
              className="text-gray-100 dark:text-gray-800"
            />
          
            <motion.g
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <circle
                cx={x}
                cy={y}
                r={16}
                fill="white"
                className="shadow-lg dark:shadow-gray-800/50"
              />
              <motion.circle
                cx={x}
                cy={y}
                r={isActive ? 8 : 5}
                fill={step.color || '#10B981'}
                animate={{ 
                  scale: isActive ? [1, 1.4, 1] : 1,
                  opacity: isActive ? [0.8, 1, 0.8] : 0.8
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.g>

            <foreignObject
              x={x - 40}
              y={y - 40}
              width={80}
              height={40}
              className="text-center"
            >
              <div 
                className={`text-sm font-medium bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg shadow-sm transition-all duration-300 hover:bg-white hover:shadow-md dark:bg-gray-800/90 dark:hover:bg-gray-800 ${
                  isActive ? 'font-bold' : ''
                }`}
                style={{ color: step.color }}
              >
                {step.label}
              </div>
            </foreignObject>
          </g>
        )
      })}
    </svg>
  )
}

const SupplyChainContent = ({
  activeStep,
  steps
}: {
  activeStep: number
  steps: SupplyChainStep[]
}) => {
  return (
    <div className="relative pl-8 before:absolute before:left-0 h-full before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-blue-500 before:to-emerald-500 before:rounded-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={steps[activeStep].id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          <h3 
            className="text-2xl font-bold bg-clip-text text-transparent"
            style={{ 
              backgroundImage: `linear-gradient(to right, ${steps[activeStep].color}, ${steps[(activeStep + 1) % steps.length].color})`
            }}
          >
            {steps[activeStep].label}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            {steps[activeStep].description}
          </p>
          <div className="flex items-center gap-2">
            {steps.map((_, i) => (
              <motion.button
                key={i}
                className={`w-3 h-3 rounded-full transition-colors ${i === activeStep ? '' : 'opacity-60 hover:opacity-100'}`}
                style={{ backgroundColor: steps[i].color }}
                animate={{
                  scale: i === activeStep ? [1, 1.2, 1] : 1,
                }}
                transition={{ duration: 0.5, repeat: Infinity }}
                onClick={() => {}}
                aria-label={`Go to ${steps[i].label} step`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

const SupplyChainTabs = ({
  activeTab,
  setActiveTab
}: {
  activeTab: string
  setActiveTab: (tab: string) => void
}) => {
  const tabs = [
    { id: 'platform', label: 'THE LF DIGITAL PLATFORM' },
    { id: 'solutions', label: 'SUPPLY CHAIN SOLUTIONS' }
  ]

  return (
    <div className="flex justify-center gap-8 mt-20 text-sm">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`pb-2 transition-colors ${
            tab.id === activeTab
              ? 'border-b-2 font-semibold text-gray-900 dark:text-white border-current'
              : 'border-b border-gray-300 text-gray-500 hover:text-gray-800 dark:hover:text-gray-300'
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export default function InnovationSection() {
  const steps = useSupplyChainSteps()
  const [activeStep, setActiveStep] = useState(0)
  const [activeTab, setActiveTab] = useState('orchestration')
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 300, height: 300 })
  const { theme } = useTheme()

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        })
      }
    }

    handleResize() // Initial measurement
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Calculate responsive dimensions
  const radius = useMemo(() => Math.min(120, dimensions.width / 3), [dimensions.width])
  const center = useMemo(() => radius + 30, [radius])

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [steps.length])

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      setActiveStep(prev => (prev + 1) % steps.length)
    } else if (e.key === 'ArrowLeft') {
      setActiveStep(prev => (prev - 1 + steps.length) % steps.length)
    }
  }, [steps.length])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <section className="bg-white dark:bg-gray-900 py-24 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto">
      <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
  className="mb-24 lg:text-justify"
>
  <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight tracking-tight">
    Supply Chain Innovation
  </h2>
  <p className="text-gray-700 dark:text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed space-y-6">
    <span className="block">
      We convene the global supply chain, creating customized, end-to-end logistics solutions for brands and retailers.
      Our unmatched flexibility and scalability distinguish us from the rest of the industry.
    </span>

    <span className="block">
      Millions of consumer goods flow through Spinup Sourcing’s supply chain every year. We connect thousands of suppliers and vendors
      with top brands and retailers, all to meet evolving consumer demand efficiently and reliably.
    </span>

    <span className="block">
      We are shaping the future of supply chains. As traditional models evolve under the pressure of disruptive technologies,
      Spinup Sourcing leads the way with groundbreaking services and next-generation solutions.
    </span>
  </p>
</motion.div>


        <div className="grid md:grid-cols-2 gap-16 items-center" ref={containerRef}>
          <div className="relative w-full h-auto aspect-square max-w-md mx-auto">
            <SupplyChainVisualization
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              steps={steps}
              radius={radius}
              center={center}
            />
          </div>

          <SupplyChainContent activeStep={activeStep} steps={steps} />
        </div>

        {/* <SupplyChainTabs activeTab={activeTab} setActiveTab={setActiveTab} /> */}
      </div>
    </section>
  )
}