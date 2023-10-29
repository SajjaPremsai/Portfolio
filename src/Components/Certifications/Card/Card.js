import React from 'react'
import { TaggedContentCard } from 'react-ui-cards'
import "./Card.css"

export default function Card({element}) {
  return (
      <TaggedContentCard
          href={element.link}
          thumbnail={element.image}
          title={element.title}
          description={element.company}
          tags={element.tags}
      />
  )
}
