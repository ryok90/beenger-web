import { Story, Meta } from '@storybook/react'

import { BInput, BInputProps } from '../BInput'

export default {
  title: 'BInput',
  component: BInput
} as Meta

const Template: Story<BInputProps> = (args) => <BInput {...args} />

export const Default = Template.bind({})
