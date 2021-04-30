import React from "react";
import MUIButton from "@material-ui/core/Button";
import { withStyles, makeStyles } from "@material-ui/core/styles";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  disabled?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";

  children: any;
  variant: "primary" | "secondary";

  onClick?: () => void;
}

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    "&:hover": {
      color: "blue",
    },
  },
});

function PrimaryButton({ children, disabled }: ButtonProps) {
  const classes = useStyles();
  return (
    <MUIButton className={classes.root} disabled={disabled} variant="outlined">
      hello{children}
    </MUIButton>
  );
}

function SecondaryButton({ children, disabled = false }: ButtonProps) {
  return (
    <MUIButton color="secondary" disabled={disabled}>
      {children}
    </MUIButton>
  );
}

export { PrimaryButton, SecondaryButton };
