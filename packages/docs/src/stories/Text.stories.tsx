import type { StoryObj, Meta } from '@storybook/react'
import { TextInput, TextInputProps } from '@ignite-ui/react'

export default {
  title: 'Typography/TextInput',
  component: TextInput,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quo odio voluptatibus quisquam earum. Consequatur reprehenderit repellat quas deleniti pariatur veniam, voluptatibus recusandae provident. Reprehenderit soluta eveniet ipsa suscipit et.',
  },
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {}

export const Strong: StoryObj<TextInputProps> = {
  args: {
    children: 'Strong TextInput',
    as: 'strong',
  },
}
