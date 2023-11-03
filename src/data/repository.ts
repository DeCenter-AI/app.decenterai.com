interface Repository {
  id: number
  label: string
  title: string
  description: string
  time: string
  dowloaded: string
  likes: string
}

const repository: Repository[] = [
  {
    id: 1,
    label: 'Text Generation',
    title: 'Model name',
    description:
      'Identifies a variety of concepts in images and video including objects, themes, and more.',
    dowloaded: '12k',
    likes: '50',
    time: '12 2023',
  },
  {
    id: 2,
    label: 'Text Generation',
    title: 'Model name',
    description:
      'Identifies a variety of concepts in images and video including objects, themes, and more.',
    dowloaded: '12k',
    likes: '50',
    time: '12 2023',
  },
  {
    id: 3,
    label: 'Text Generation',
    title: 'Model name',
    description:
      'Identifies a variety of concepts in images and video including objects, themes, and more.',
    dowloaded: '12k',
    likes: '50',
    time: '12 2023',
  },
]

export default repository
