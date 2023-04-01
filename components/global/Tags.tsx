import { FC } from 'react'

interface TagsProps {
  tags: string[] | string
}

const Tags: FC<TagsProps> = ({ tags }) => {
  if (Array.isArray(tags)) {
    return (
      <div className="mb-4 flex flex-row">
        {tags.map((tag, key) => (
          <div
            key={key}
            className="lg:text-md mr-2 mt-2 break-words rounded-full bg-white pt-1 pb-1 pl-3 pr-3 font-mono text-sm font-normal uppercase text-black"
          >
            {tag}
          </div>
        ))}
      </div>
    )
  } else {
    return <div>{tags}</div>
  }
}

export default Tags
