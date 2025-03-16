'use client';

// Simple toast implementation
export function toast({
  title,
  description,
  variant = 'default',
  duration = 3000,
}: {
  title?: string;
  description: string;
  variant?: 'default' | 'destructive';
  duration?: number;
}) {
  // Create toast element
  const toastElement = document.createElement('div');
  toastElement.className = `fixed bottom-4 right-4 z-[100] max-w-md p-4 rounded-md shadow-lg transition-all transform translate-y-0 opacity-100 bg-background border ${
    variant === 'destructive' ? 'border-destructive text-destructive-foreground' : 'border-border'
  }`;
  
  // Create content
  const content = document.createElement('div');
  content.className = 'flex flex-col gap-1';
  
  if (title) {
    const titleElement = document.createElement('div');
    titleElement.className = 'font-medium';
    titleElement.textContent = title;
    content.appendChild(titleElement);
  }
  
  const descriptionElement = document.createElement('div');
  descriptionElement.className = 'text-sm text-muted-foreground';
  descriptionElement.textContent = description;
  content.appendChild(descriptionElement);
  
  // Close button
  const closeButton = document.createElement('button');
  closeButton.className = 'absolute top-2 right-2 opacity-70 hover:opacity-100';
  closeButton.innerHTML = '×';
  closeButton.onclick = () => {
    removeToast();
  };
  
  // Add to toast
  toastElement.appendChild(content);
  toastElement.appendChild(closeButton);
  
  // Add to document
  document.body.appendChild(toastElement);
  
  // Animation
  setTimeout(() => {
    toastElement.style.opacity = '0';
    toastElement.style.transform = 'translateY(16px)';
    toastElement.style.transition = 'all 0.2s ease-out';
  }, duration - 200);
  
  // Remove after duration
  const removeToast = () => {
    toastElement.style.opacity = '0';
    toastElement.style.transform = 'translateY(16px)';
    
    setTimeout(() => {
      if (document.body.contains(toastElement)) {
        document.body.removeChild(toastElement);
      }
    }, 200);
  };
  
  setTimeout(removeToast, duration);
} 