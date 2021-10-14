import { Story, Meta } from '@storybook/react'

import { BButton, BButtonProps } from '.'

export default {
  title: 'BButton',
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    variant: {
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'success'],
      control: { type: 'select' }
    },
    label: {
      defaultValue: 'BButton',
      control: { type: 'text' }
    }
  }
} as Meta

export const Default: Story<BButtonProps> = (args) => <BButton {...args} />
