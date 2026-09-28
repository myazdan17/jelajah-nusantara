"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
  size?: "md" | "lg" | "xl";
}

const sizeClasses = {
  md: "sm:max-w-xl",
  lg: "sm:max-w-3xl",
  xl: "sm:max-w-5xl",
} as const;

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  className,
  size = "lg",
}: ModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    previousFocusRef.current = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previousFocusRef.current?.focus?.();
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-stretch justify-center sm:items-center sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-label={title ?? "Detail Paket"}
        >
          <motion.button
            type="button"
            aria-label="Tutup modal"
            className="absolute inset-0 h-full w-full cursor-default bg-forest-900/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            tabIndex={-1}
          />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ type: "spring", damping: 26, stiffness: 280 }}
            className={cn(
              "relative z-10 flex w-full flex-col overflow-hidden bg-ivory-50",
              "h-full sm:h-auto sm:max-h-[90vh] sm:rounded-3xl",
              "shadow-lift",
              sizeClasses[size],
              className
            )}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Tutup detail paket"
              className={cn(
                "absolute right-3 top-3 z-30 inline-flex h-10 w-10 items-center justify-center rounded-full",
                "bg-ivory-50/95 text-forest-900 shadow-soft backdrop-blur",
                "transition hover:bg-ivory-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600"
              )}
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="flex-1 overflow-y-auto overscroll-contain">
              {children}
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}