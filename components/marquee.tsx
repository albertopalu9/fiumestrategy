const items = [
  "Strategic Advisory", "Venture Building", "OKR Implementation",
  "Market Analysis", "L'ascolto attivo", "Process Design",
  "Fundraising Strategy", "Organisational Transformation",
  "Innovation", "Talent Architecture", "Go-to-Market",
]

export function Marquee() {
  const all = [...items, ...items]
  return (
    <div className="w-full overflow-hidden bg-[#F0EEE9] py-4 border-y border-[#06080F]/08">
      <div className="marquee-inner">
        {all.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-6">
            <span className="font-serif italic text-[#06080F] text-lg font-light tracking-tight whitespace-nowrap">
              {item}
            </span>
            <span className="text-[#06080F]/20 text-[8px]">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
