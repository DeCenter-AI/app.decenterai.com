import avatars from '@public/avatars'
import { StaticImageData } from 'next/image'

interface Notification {
  id: number
  name: string
  msg: string
  time: string
  avatar: StaticImageData
  read: boolean
}

const notifications: Notification[] = [
  {
    id: 1,
    name: 'Mohammed Al El',
    msg: 'Downloaded your model “Speech therapy TXT” ',
    time: '12 Minutes ago',
    avatar: avatars.avatar,
    read: false,
  },
  {
    id: 2,
    name: 'Israel Faizul',
    msg: 'Downloaded your model “Speech therapy TXT” ',
    time: '12 Minutes ago',
    avatar: avatars.avatar5,
    read: false,
  },
  {
    id: 3,
    name: 'Solomon Ideh',
    msg: 'Downloaded your model “Speech therapy TXT” ',
    time: '12 Minutes ago',
    avatar: avatars.avatar3,
    read: false,
  },
  {
    id: 4,
    name: 'Ebubechukwu Agnes',
    msg: 'Downloaded your model “Speech therapy TXT” ',
    time: '12 Minutes ago',
    avatar: avatars.avatar2,
    read: true,
  },
  {
    id: 5,
    name: 'Folasayo Ogunnaike',
    msg: 'Downloaded your model “Speech therapy TXT” ',
    time: '12 Minutes ago',
    avatar: avatars.avatar1,
    read: true,
  },
  {
    id: 6,
    name: 'Ogunmodede-Smart Olusegun',
    msg: 'Downloaded your model “Speech therapy TXT” ',
    time: '12 Minutes ago',
    avatar: avatars.avatar4,
    read: true,
  },
  {
    id: 7,
    name: 'Folasayo Ogunnaike',
    msg: 'Downloaded your model “Speech therapy TXT” ',
    time: '12 Minutes ago',
    avatar: avatars.avatar1,
    read: true,
  },
  {
    id: 8,
    name: 'Israel Faizul',
    msg: 'Downloaded your model “Speech therapy TXT” ',
    time: '12 Minutes ago',
    avatar: avatars.avatar5,
    read:true,
  },
]

export default notifications
