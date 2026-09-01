import * as DialogPrimitive from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

/**
 * shadcn/ui "Dialog" pattern — a thin, styled wrapper around Radix's
 * unstyled Dialog primitive. Radix supplies the hard accessibility
 * work for free: focus trap, focus return on close, Esc-to-close,
 * aria-modal, body scroll lock. We only supply the visuals + the
 * entrance motion (framer-motion), same division of labour shadcn/ui
 * itself uses (Radix logic + your own styling layer).
 */
export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogPortal = DialogPrimitive.Portal;
export const DialogClose = DialogPrimitive.Close;

export function DialogOverlay({ className, ...props }) {
  return (
    <DialogPrimitive.Overlay asChild {...props}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className={cn("fixed inset-0 z-[100] bg-ink-navy/95 backdrop-blur-sm", className)}
      />
    </DialogPrimitive.Overlay>
  );
}

export function DialogContent({ className, children, ...props }) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        {...props}
        className={cn(
          "fixed inset-0 z-[110] flex items-center justify-center outline-none",
          className
        )}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="contents"
        >
          {children}
        </motion.div>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}
