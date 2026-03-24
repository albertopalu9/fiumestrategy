interface SectionNumberProps {
  number: string
  position?: "left" | "right"
  className?: string
}

export function SectionNumber({
  number,
  position = "right",
  className = "",
}: SectionNumberProps) {
  return (
    <span
      className={`absolute font-serif text-[200px] md:text-[300px] lg:text-[400px] leading-none select-none pointer-events-none ${
        position === "right" ? "right-0 md:right-8" : "left-0 md:left-8"
      } ${className}`}
      style={{ opacity: 0.05 }}
      aria-hidden="true"
    >
      {number}
    </span>
  )
}
