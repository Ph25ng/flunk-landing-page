export function StatsSection() {
  const stats = [
    {
      value: '<2min',
      label: 'Integration time',
      description: 'From install to production'
    },
    {
      value: '100%',
      label: 'Authentic reviews',
      description: 'Direct from Google'
    },
    {
      value: '0',
      label: 'Backend required',
      description: 'Pure frontend magic'
    },
    {
      value: 'A++',
      label: 'Developer experience',
      description: 'TypeScript-first API'
    }
  ]

  return (
    <section className="border-b border-border bg-background/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-start border-l-2 border-primary pl-6"
            >
              <div className="mb-2 text-4xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="mb-1 text-sm font-medium text-foreground">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
