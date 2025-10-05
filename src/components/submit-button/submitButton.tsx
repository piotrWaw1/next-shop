'use client'

import { Button, ButtonProps } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import { useFormState } from "react-hook-form";
import { Loader2 } from "lucide-react";

interface SubmitButtonProps extends ButtonProps {
  isActionPending?: boolean;
}

const SubmitButton = React.forwardRef<HTMLButtonElement, SubmitButtonProps>(
  (props, ref) => {
    const { className, children, disabled, isActionPending, ...rest } = props;
    const { isSubmitting } = useFormState();

    return (
      <Button
        ref={ref}
        type="submit"
        className={cn(className)}
        disabled={isSubmitting || isActionPending || disabled }
        {...rest}
      >
        {(isSubmitting || isActionPending) && <Loader2 className="animate-spin"/>}
        {children}
      </Button>
    );
  }
);

SubmitButton.displayName = "SubmitButton";

export default SubmitButton;