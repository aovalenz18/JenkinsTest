
import Card from '@mui/material/Card';
import React from 'react';

export default {
    title: 'Example/Card',
    component: Card,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  };


  const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Card',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Card',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Card',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Card',
};