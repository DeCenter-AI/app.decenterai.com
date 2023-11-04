import React from 'react'

interface Info {
  id: number
  text: string
  count: string
}

interface Model {
  id: number
  title: string
  name: string
  desc: string
  date: string
  download: number
  like: number
}

const profileInfo: Info[] = [
  {
    id: 1,
    text: 'Earnings',
    count: '$12,000',
  },
  {
    id: 2,
    text: 'Teams',
    count: '2',
  },
  {
    id: 3,
    text: 'Models',
    count: '4',
  },
]

const models: Model[] = [
  {
    id: 1,
    title: 'Text Generation',
    name: 'Model name',
    desc: 'Identifies a variety of concepts in images and video including objects, themes, and more. ',
    date: 'Updated Sep, 12 2023',
    download: 12,
    like: 127
  },
  {
    id: 2,
    title: 'Text Generation',
    name: 'Model name',
    desc: 'Identifies a variety of concepts in images and video including objects, themes, and more. ',
    date: 'Updated Sep, 12 2023',
    download: 12,
    like: 127
  },
  {
    id: 3,
    title: 'Text Generation',
    name: 'Model name',
    desc: 'Identifies a variety of concepts in images and video including objects, themes, and more. ',
    date: 'Updated Sep, 12 2023',
    download: 12,
    like: 127
  },
  {
    id: 4,
    title: 'Text Generation',
    name: 'Model name',
    desc: 'Identifies a variety of concepts in images and video including objects, themes, and more. ',
    date: 'Updated Sep, 12 2023',
    download: 12,
    like: 127
  },
]
