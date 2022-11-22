import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@renan-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/Rcurvo.png',
    alt: 'Renan Curvo',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
