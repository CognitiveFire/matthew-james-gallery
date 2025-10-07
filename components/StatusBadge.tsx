interface StatusBadgeProps {
  available: boolean
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function StatusBadge({ available, className = '', size = 'md' }: StatusBadgeProps) {
  const sizeClasses = {
    sm: 'px-3 py-1 text-xs tracking-wide',
    md: 'px-4 py-2 text-sm tracking-wide',
    lg: 'px-5 py-2 text-base tracking-wide'
  }

  if (available) {
    return (
      <span className={`inline-flex items-center font-sans font-medium rounded-none bg-charcoal text-cream border border-charcoal shadow-sm ${sizeClasses[size]} ${className}`}>
        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
        AVAILABLE
      </span>
    )
  }

  return (
    <span className={`inline-flex items-center font-sans font-medium rounded-none bg-cream text-charcoal border border-warm-gray shadow-sm ${sizeClasses[size]} ${className}`}>
      <div className="w-1.5 h-1.5 bg-warm-gray rounded-full mr-2"></div>
      SOLD
    </span>
  )
}
