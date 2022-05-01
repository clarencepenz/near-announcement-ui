import { Button } from "@chakra-ui/react";
import React from "react";

export default function CustomButton({ rightIcon,  colorScheme, variant, onClick, children }) {
  return (
    <Button
      rightIcon={rightIcon}
      colorScheme={colorScheme}
      variant={variant}
      onClick={onClick}
    >
     { children}
    </Button>
  );
}
