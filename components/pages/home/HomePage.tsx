import { Header } from 'components/global/Header'
import ScrollUp from 'components/global/ScrollUp'
import { ProjectListItem } from 'components/pages/home/ProjectListItem'
import { resolveHref } from 'lib/sanity.links'
import Link from 'next/link'
import type { HomePagePayload } from 'schemas'

export function HomePage({ data }: { data: HomePagePayload }) {
  // Default to an empty object to allow previews on non-existent documents
  const { overview, showcaseProjects, title } = data

  return (
    <div className="h-screen w-screen space-y-20 bg-black">
      {/* Header */}
      {title && <Header centered title={title} description={overview} />}
      {/* Showcase projects */}
      {showcaseProjects && showcaseProjects.length > 0 && (
        <div className="mx-auto max-w-[100rem] rounded-md border">
          {showcaseProjects.map((project, key) => {
            const href = resolveHref(project._type, project.slug)
            if (!href) {
              return null
            }
            return (
              <Link key={key} href={href}>
                <ProjectListItem project={project} odd={key % 2} />
              </Link>
            )
          })}
        </div>
      )}

      {/* Workaround: scroll to top on route change */}
      <ScrollUp />
    </div>
  )
}
