import MuiBadge from "@mui/material/Badge";
import MailIcon from '@mui/icons-material/Mail';
import { BadgeOrigin } from "@mui/core";

export interface BadgeProps {
  /** The anchor of the badge. */
  anchorOrigin?: BadgeOrigin;
  
  /** The color of the component. It supports those theme colors that make sense for this component. */
  color?:  "default" | "primary" | "secondary" | "success" | "error" | "info" | "warning";

  /** If true, the component is invisible. */
  invisible?: boolean;

  /** The variant to use. */
  variant?: "dot" | "standard";
}

export const Badge = ({
  anchorOrigin={horizontal: "right", vertical: "top"},
  invisible = false,
  variant = "standard",
  color = "default",
  ...props
}: BadgeProps) => {
  return (
    <MuiBadge 
      invisible={invisible} 
      variant={variant} 
      color={color} 
      badgeContent={4}
      anchorOrigin={anchorOrigin}
      {...props}
    >
      <MailIcon color="primary" />
    </MuiBadge>
  );
};
