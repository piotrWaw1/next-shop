import { Button, ButtonProps } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import { useFormState } from "react-hook-form";
import { Loader2 } from "lucide-react";

const SubmitButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { className, children, disabled, ...rest } = props;
    const { isSubmitting } = useFormState();

    return (
      <Button
        ref={ref}
        type="submit"
        className={cn(className)}
        disabled={isSubmitting || disabled}
        {...rest}
      >
        {isSubmitting && <Loader2 className="animate-spin"/>}
        {children}
      </Button>
    );
  }
);

SubmitButton.displayName = "SubmitButton";

export default SubmitButton;