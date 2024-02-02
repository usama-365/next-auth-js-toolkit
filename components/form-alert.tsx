import { cn } from "@/lib/utils";
import {
  CheckCircledIcon,
  ExclamationTriangleIcon,
} from "@radix-ui/react-icons";

interface FormAlertProps {
  variant?: "error" | "success";
  message?: string;
}

export default function FormAlert({
  message,
  variant = "error",
}: FormAlertProps) {
  if (!message) return null;

  const isError = variant === "error";
  const iconClasses = "w-4 h-4";

  return (
    <div
      className={cn(
        "p-3 rounded-md flex items-center gap-x-2 text-sm",
        isError
          ? "bg-destructive/15 text-destructive"
          : "bg-emerald-500/15 text-emerald-500",
      )}
    >
      {isError ? (
        <ExclamationTriangleIcon className={iconClasses} />
      ) : (
        <CheckCircledIcon className={iconClasses} />
      )}
      <p>{message}</p>
    </div>
  );
}
