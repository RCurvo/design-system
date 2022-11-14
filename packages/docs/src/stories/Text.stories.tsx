import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quo odio voluptatibus quisquam earum. Consequatur reprehenderit repellat quas deleniti pariatur veniam, voluptatibus recusandae provident. Reprehenderit soluta eveniet ipsa suscipit et.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const Strong: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
