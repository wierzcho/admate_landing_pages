import { motion } from 'framer-motion';

// Shape paths by color
const SHAPE_PATHS = {
  darkGraphite: '/images/brand/shapes/dark-graphite',
  ivoryWhite: '/images/brand/shapes/ivory-white',
  lightButter: '/images/brand/shapes/light-butter',
  sparkBlue: '/images/brand/shapes/spark-blue',
  terracottaRed: '/images/brand/shapes/terracotta-red',
  warmBeige: '/images/brand/shapes/warm-beige',
} as const;

type ColorVariant = keyof typeof SHAPE_PATHS;

// Shape numbers:
// 1 - 12-point starburst (sharp)
// 2 - geometric diamond (interlocking)
// 3 - 6-point soft star
// 4 - 10-point wavy starburst
// 5 - circle
// 6 - 4-point star
// 7 - semicircle

interface ShapeProps {
  size?: number;
  className?: string;
}

// Generic shape component
const Shape = ({
  shape,
  color,
  size = 64,
  className = ""
}: {
  shape: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  color: ColorVariant;
  size?: number;
  className?: string;
}) => (
  <img
    src={`${SHAPE_PATHS[color]}/${shape}.png`}
    alt=""
    width={size}
    height={size}
    className={className}
    style={{ width: size, height: size, objectFit: 'contain' }}
  />
);

// Named shape exports (mapping old names to new shapes)
// Shape 1 - 12-point starburst
export const TerracottaStarburst = ({ size = 64, className = "" }: ShapeProps) => (
  <Shape shape={1} color="terracottaRed" size={size} className={className} />
);

export const BlueStarburst = ({ size = 64, className = "" }: ShapeProps) => (
  <Shape shape={1} color="sparkBlue" size={size} className={className} />
);

// Shape 2 - Geometric diamond
export const GeometricDiamond = ({ size = 64, className = "" }: ShapeProps) => (
  <Shape shape={2} color="sparkBlue" size={size} className={className} />
);

export const GeometricDiamondBeige = ({ size = 64, className = "" }: ShapeProps) => (
  <Shape shape={2} color="warmBeige" size={size} className={className} />
);

export const GeometricDiamondTerracotta = ({ size = 64, className = "" }: ShapeProps) => (
  <Shape shape={2} color="terracottaRed" size={size} className={className} />
);

// Shape 1 - Ivory starburst
export const IvoryStarburst = ({ size = 64, className = "" }: ShapeProps) => (
  <Shape shape={1} color="ivoryWhite" size={size} className={className} />
);

// Shape 3 - 6-point soft star
export const BlueStar6 = ({ size = 64, className = "" }: ShapeProps) => (
  <Shape shape={3} color="sparkBlue" size={size} className={className} />
);

export const IvoryStar6 = ({ size = 64, className = "" }: ShapeProps) => (
  <Shape shape={3} color="ivoryWhite" size={size} className={className} />
);

export const BeigeStar6 = ({ size = 64, className = "" }: ShapeProps) => (
  <Shape shape={3} color="warmBeige" size={size} className={className} />
);

// Shape 4 - 10-point wavy starburst (was BeigeStar12)
export const BeigeStar12 = ({ size = 64, className = "" }: ShapeProps) => (
  <Shape shape={4} color="warmBeige" size={size} className={className} />
);

export const BlueWavyStar = ({ size = 64, className = "" }: ShapeProps) => (
  <Shape shape={4} color="sparkBlue" size={size} className={className} />
);

// Shape 5 - Circle
export const YellowCircle = ({ size = 64, className = "" }: ShapeProps) => (
  <Shape shape={5} color="lightButter" size={size} className={className} />
);

export const BlueCircle = ({ size = 64, className = "" }: ShapeProps) => (
  <Shape shape={5} color="sparkBlue" size={size} className={className} />
);

// Shape 6 - 4-point star (same as logo star)
export const RedStar4 = ({ size = 64, className = "" }: ShapeProps) => (
  <Shape shape={6} color="terracottaRed" size={size} className={className} />
);

export const BlueStar4 = ({ size = 64, className = "" }: ShapeProps) => (
  <Shape shape={6} color="sparkBlue" size={size} className={className} />
);

export const DarkStar4 = ({ size = 64, className = "" }: ShapeProps) => (
  <Shape shape={6} color="darkGraphite" size={size} className={className} />
);

export const IvoryStar4 = ({ size = 64, className = "" }: ShapeProps) => (
  <Shape shape={6} color="ivoryWhite" size={size} className={className} />
);

export const BeigeStar4 = ({ size = 64, className = "" }: ShapeProps) => (
  <Shape shape={6} color="warmBeige" size={size} className={className} />
);

// Shape 7 - Semicircle
export const BlackSemicircle = ({ size = 64, className = "" }: ShapeProps) => (
  <Shape shape={7} color="darkGraphite" size={size} className={className} />
);

export const BlueSemicircle = ({ size = 64, className = "" }: ShapeProps) => (
  <Shape shape={7} color="sparkBlue" size={size} className={className} />
);

// Arrows
export const ArrowLoop = ({ size = 64, className = "" }: ShapeProps) => (
  <img
    src="/images/brand/arrows/strzalka-1-dark graphite.png"
    alt=""
    width={size}
    height={size}
    className={className}
    style={{ width: size, height: 'auto', objectFit: 'contain' }}
  />
);

export const ArrowStraight = ({ size = 64, className = "" }: ShapeProps) => (
  <img
    src="/images/brand/arrows/strzalka-2-dark graphite.png"
    alt=""
    width={size}
    height={size}
    className={className}
    style={{ width: size, height: 'auto', objectFit: 'contain' }}
  />
);

// Logos
export const LogoFull = ({ variant = 'dark', height = 40, className = "" }: { variant?: 'dark' | 'beige' | 'white'; height?: number; className?: string }) => (
  <img
    src={`/images/brand/logo/logo-full-${variant}.png`}
    alt="adMate"
    height={height}
    className={className}
    style={{ height, width: 'auto', objectFit: 'contain' }}
  />
);

export const LogoShort = ({ variant = 'dark', size = 40, className = "" }: { variant?: 'dark' | 'beige' | 'white'; size?: number; className?: string }) => (
  <img
    src={`/images/brand/logo/logo-short-${variant}.png`}
    alt="adMate"
    width={size}
    height={size}
    className={className}
    style={{ width: size, height: size, objectFit: 'contain' }}
  />
);

// Animated Exports (using Framer Motion)
export const AnimatedBlueStar6 = ({ size = 64, className = "" }: ShapeProps) => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    className={className}
  >
    <BlueStar6 size={size} />
  </motion.div>
);

export const AnimatedTerracottaStarburst = ({ size = 64, className = "" }: ShapeProps) => (
  <motion.div
    animate={{ scale: [1, 1.1, 1] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className={className}
  >
    <TerracottaStarburst size={size} />
  </motion.div>
);

export const FloatingElement = ({ children, delay = 0, duration = 6, yOffset = 20 }: { children: React.ReactNode; delay?: number; duration?: number; yOffset?: number }) => (
  <motion.div
    animate={{ y: [0, -yOffset, 0] }}
    transition={{ duration: duration, repeat: Infinity, ease: "easeInOut", delay: delay }}
  >
    {children}
  </motion.div>
);

export const RotatingElement = ({ children, duration = 15, clockwise = true }: { children: React.ReactNode; duration?: number; clockwise?: boolean }) => (
  <motion.div
    animate={{ rotate: clockwise ? 360 : -360 }}
    transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
  >
    {children}
  </motion.div>
);
