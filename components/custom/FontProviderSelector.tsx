"use client";

interface FontProviderSelectorProps {
  className?: string;
  onChange?: (provider: string) => void;
}

export function FontProviderSelector({ className }: FontProviderSelectorProps) {
  return (
    <p className={className + " text-xs text-muted-foreground"}>Fonts: Google Fonts (public CSS)</p>
  );
}