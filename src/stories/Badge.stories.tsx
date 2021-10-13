import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Badge } from "./Badge";
import Icon from '@mui/material/Icon';
import MailIcon from '@mui/icons-material/Mail';

export default {
  title: "Components/Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args}>
    <MailIcon />
  </Badge>
);

export const Base = Template.bind({});
Base.args = {
  anchorOrigin: {horizontal: "right", vertical: "top"},
  color: "default",
  invisible: false,
  variant: "standard",
};
