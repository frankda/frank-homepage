import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from 'components/DesignSystem/Button/Button'

export default {
  title: 'Base/Button',
  component: Button,
} as ComponentMeta<typeof Button>

// export const Basic: ComponentStory<typeof Button> = (args) => <Button {...args} />
// Basic.args = { type: 'contained' }

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const All = () => (
  <>
    <div style={{ display: 'flex', gap: 16, padding: 32 }}>
      <Button></Button>
    </div>
  </>
)