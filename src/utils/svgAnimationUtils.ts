/**
 * Configuration options for SVG motion animation timing.
 */
interface AnimationConfig {
  /** Minimum duration of the animation in seconds. Default: 8 */
  minDuration?: number
  /** Maximum duration of the animation in seconds. Default: 12 */
  maxDuration?: number
  /** Initial delay before animation starts (0-1, will be normalized). Default: 0 */
  startDelay?: number
  /** Delay at the end of animation (0-1, will be normalized). Default: 0 */
  endDelay?: number
  /**
   * Defines points along the path where the animation should pause.
   * Can be specified in two ways:
   *
   * 1. As an array of specific pause points:
   * ```ts
   * pausePoints: [
   *   { at: 0.5, duration: 0.3 },           // Pause in middle for 0.3s
   *   { at: 0.8, duration: 0.2, anticipation: true } // Pause at 80% with anticipation
   * ]
   * ```
   *
   * 2. As a configuration for evenly distributed pauses:
   * ```ts
   * pausePoints: {
   *   amount: 5,    // Create 5 evenly spaced pause points
   *   duration: 0.5 // Total pause duration to distribute, aka 50% of the animation duration will be used for pauses
   * }
   * ```
   */
  pausePoints?:
    | Array<{
        /** Position along the path (0-1) where to pause */
        at: number
        /** Duration of the pause in seconds */
        duration?: number
        /** Whether to slow down slightly before the pause for more natural motion */
        anticipation?: boolean
      }>
    | {
        /** Number of evenly distributed pause points to create */
        amount: number
        /** Total duration to distribute across all pause points */
        duration: number
      }
  reverse?: boolean
}

/**
 * Timing parameters for SVG animateMotion.
 */
interface AnimationTiming {
  /** Total duration of the animation in seconds */
  duration: number
  /** Semicolon-separated list of time values (0-1) indicating when each keypoint should be reached */
  keyTimes: string
  /** Semicolon-separated list of distance values (0-1) indicating positions along the path */
  keyPoints: string
}

/**
 * Generates timing parameters for SVG animateMotion animations with support for
 * pause points, anticipation, and randomized timing.
 *
 * Features:
 * - Supports multiple pause points with configurable durations
 * - Automatically normalizes timing values between 0-1
 * - Adds randomization for more natural motion
 * - Handles anticipation points for smoother transitions
 * - Supports both specific and evenly distributed pause points
 *
 * @example
 * // Simple animation with middle pause
 * const timing = generateMotionTiming({
 *   minDuration: 5,
 *   maxDuration: 8,
 *   pausePoints: [{ at: 0.5, duration: 0.3 }]
 * })
 *
 * @example
 * // Complex animation with multiple pauses and anticipation
 * const timing = generateMotionTiming({
 *   minDuration: 10,
 *   maxDuration: 15,
 *   pausePoints: [
 *     { at: 0.3, duration: 0.2 },
 *     { at: 0.7, duration: 0.4, anticipation: true }
 *   ],
 *   startDelay: 0.1
 * })
 *
 * @example
 * // Evenly distributed pauses
 * const timing = generateMotionTiming({
 *   minDuration: 8,
 *   maxDuration: 12,
 *   pausePoints: {
 *     amount: 5,
 *     duration: 0.3
 *   }
 * })
 *
 * @param config - Animation configuration options
 * @returns Timing parameters for use with SVG animateMotion
 */
export function generateMotionTiming({
  minDuration = 8,
  maxDuration = 12,
  startDelay = 0,
  endDelay = 0,
  pausePoints = [],
  reverse = false,
}: AnimationConfig = {}): AnimationTiming {
  // Generate a seeded random number for consistent timing
  let seedValue = Math.floor(Math.random() * 10000)
  const seededRandom = (min = 0, max = 1) => {
    seedValue = (seedValue * 16807) % 2147483647
    return min + ((seedValue - 1) / 2147483646) * (max - min)
  }

  // Round to 3 decimal places to avoid floating point issues
  const round = (n: number) => Math.round(n * 1000) / 1000

  // Generate base duration with some variance
  const durationVariance = (maxDuration - minDuration) * 0.2 // 20% variance
  const baseDuration =
    minDuration + seededRandom() * (maxDuration - minDuration)
  const duration = round(
    baseDuration + seededRandom(-durationVariance, durationVariance),
  )

  const keyTimesList: number[] = []
  const keyPointsList: number[] = []

  // Normalize delays to be within bounds with some randomness
  const normalizedStartDelay = round(
    Math.min(startDelay, 0.2) * seededRandom(0.8, 1.2),
  )
  const normalizedEndDelay = round(
    Math.min(endDelay, 0.2) * seededRandom(0.8, 1.2),
  )

  // Add initial state
  keyTimesList.push(0)
  keyPointsList.push(0)

  // Add start delay if specified
  if (normalizedStartDelay > 0) {
    keyTimesList.push(round(normalizedStartDelay))
    keyPointsList.push(0)
  }

  if (!Array.isArray(pausePoints)) {
    const { amount, duration } = pausePoints
    pausePoints = Array.from({ length: amount }, (_, i) => ({
      at: (i + 1) / amount,
      duration: duration / (amount + 1),
    }))
  }

  // Sort and normalize pause points with randomized durations
  const sortedPausePoints = pausePoints
    .map((point) => ({
      ...point,
      at: round(Math.max(0, Math.min(1, point.at))), // Clamp 'at' between 0 and 1
      duration: round((point.duration ?? 0.3) * seededRandom(0.8, 1.2)), // Randomize duration within ±20%
    }))
    .sort((a, b) => a.at - b.at)

  // Calculate available time for motion
  const availableTime = 1 - normalizedStartDelay - normalizedEndDelay
  const totalPauseDuration = sortedPausePoints.reduce(
    (sum, point) => sum + point.duration,
    0,
  )
  const remainingTimeForMotion = Math.max(
    0.2,
    availableTime - totalPauseDuration,
  )

  // Process each pause point with slightly randomized timing
  let currentTime = normalizedStartDelay
  const baseTimePerSegment =
    remainingTimeForMotion / (sortedPausePoints.length + 1)

  sortedPausePoints.forEach((point) => {
    // Randomize the motion time for this segment
    const segmentTime = round(baseTimePerSegment * seededRandom(0.9, 1.1))

    // Add anticipation point if requested
    if (point.anticipation) {
      const anticipationOffset = round(
        Math.min(
          0.05,
          (point.at - (keyPointsList[keyPointsList.length - 1] || 0)) / 2,
        ),
      )
      keyTimesList.push(round(currentTime + segmentTime * 0.8))
      keyPointsList.push(round(point.at - anticipationOffset))
    }

    // Move to pause point
    currentTime = round(currentTime + segmentTime)
    keyTimesList.push(currentTime)
    keyPointsList.push(point.at)

    // Hold at pause point
    if (point.duration) {
      currentTime = round(currentTime + point.duration)
      keyTimesList.push(currentTime)
      keyPointsList.push(point.at)
    }
  })

  // Final motion segment with random variance
  currentTime = round(currentTime + baseTimePerSegment * seededRandom(0.9, 1.1))

  // Add end delay if specified
  if (normalizedEndDelay > 0) {
    keyTimesList.push(round(1 - normalizedEndDelay))
    keyPointsList.push(1)
  }

  // Ensure final position
  keyTimesList.push(1)
  keyPointsList.push(1)

  // Normalize all time values to ensure they're between 0 and 1
  const maxTime = Math.max(...keyTimesList)
  const normalizedKeyTimes = keyTimesList.map((time) => round(time / maxTime))

  if (reverse) {
    keyPointsList.reverse()
  }

  return {
    duration,
    keyTimes: normalizedKeyTimes.join(';'),
    keyPoints: keyPointsList.join(';'),
  }
}

export function randomMaxMin(max: number, min = 0) {
  return min + Math.random() * (max - min)
}
