import { Story, Meta } from '@storybook/react'

import { IconLogo } from '.'

const StoryMeta: Meta = {
  title: 'Icons / IconLogo',
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark'
    }
  }
}

export default StoryMeta

const Template: Story = () => <IconLogo />
export const Default = Template.bind({})
