"use client";

import React, { useState, useEffect, useRef } from "react";
import "./carousel.css";

interface CarouselProps {
  children: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  slidesToShow?: 1 | 2 | 3;
}

export default function Carousel({
  children,
  autoPlay = true,
  interval = 5000,
  showDots = true,
  showArrows = true,
  slidesToShow = 1,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const totalSlides = React.Children.count(children);
  const maxIndex = Math.max(0, totalSlides - slidesToShow);

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = React.useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Handle Autoplay timer
  useEffect(() => {
    if (autoPlay && !isPaused && maxIndex > 0) {
      timerRef.current = setInterval(nextSlide, interval);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [autoPlay, isPaused, interval, nextSlide, maxIndex]);

  // Pointer swipe handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (maxIndex === 0) return;
    setDragStartX(e.clientX);
    if (trackRef.current) {
      trackRef.current.style.transition = "none";
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX === null) return;
    const diff = e.clientX - dragStartX;
    setDragOffset(diff);
  };

  const handlePointerUp = () => {
    if (dragStartX === null) return;
    const swipeThreshold = 50; // swipe 50px to trigger slide transition
    if (dragOffset < -swipeThreshold && currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    } else if (dragOffset > swipeThreshold && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
    
    // Reset track transition and state
    if (trackRef.current) {
      trackRef.current.style.transition = "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
    }
    setDragStartX(null);
    setDragOffset(0);
  };

  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  };

  return (
    <div
      className="cxl-carousel"
      data-slides={slidesToShow}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Carousel slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{ touchAction: "pan-y" }}
    >
      <div className="cxl-carousel-viewport">
        <div
          ref={trackRef}
          className="cxl-carousel-track"
          style={{
            transform: `translateX(calc(-${(currentIndex * 100) / slidesToShow}% + ${dragOffset}px))`,
          }}
        >
          {React.Children.map(children, (child, idx) => (
            <div key={idx} className="cxl-carousel-slide">
              {child}
            </div>
          ))}
        </div>
      </div>

      {showArrows && maxIndex > 0 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="cxl-carousel-arrow prev"
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="cxl-carousel-arrow next"
            aria-label="Next slide"
          >
            →
          </button>
        </>
      )}

      {showDots && maxIndex > 0 && (
        <div className="cxl-carousel-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              className={`cxl-carousel-dot ${currentIndex === idx ? "active" : ""}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
