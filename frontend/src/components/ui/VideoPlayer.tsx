"use client";

import React, { useState, useEffect } from "react";
import "./video-player.css";

interface VideoPlayerProps {
  title: string;
  duration: string;
  thumbnailBackground?: string;
}

export default function VideoPlayer({
  title,
  duration,
  thumbnailBackground = "linear-gradient(135deg, #1E3252 0%, #162340 100%)",
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [elapsedTime, setElapsedTime] = useState("00:00");

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      const durationParts = duration.split(":");
      const totalSeconds =
        parseInt(durationParts[0], 10) * 60 + parseInt(durationParts[1], 10);

      interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + 100 / totalSeconds;
          if (next >= 100) {
            setIsPlaying(false);
            return 0;
          }

          // Calculate current elapsed time
          const currentSeconds = Math.floor((next / 100) * totalSeconds);
          const mins = Math.floor(currentSeconds / 60);
          const secs = currentSeconds % 60;
          setElapsedTime(
            `${mins.toString().padStart(2, "0")}:${secs
              .toString()
              .padStart(2, "0")}`
          );

          return next;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      onClick={togglePlay}
      className={`video-player-container ${isPlaying ? "playing" : ""}`}
      style={{ background: thumbnailBackground }}
    >
      <div className="video-player-grid-overlay" />

      {/* Thumbnail overlay */}
      {!isPlaying && (
        <div className="video-player-thumbnail">
          <button className="video-player-play-btn" aria-label="Play demo video">
            ▶
          </button>
        </div>
      )}

      {/* Playing state visualizer */}
      {isPlaying && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--d-3)",
            fontSize: "12px",
            fontFamily: "var(--font-mono)",
            gap: "12px",
            zIndex: 1,
          }}
        >
          <div className="video-player-spinner" />
          <span style={{ letterSpacing: "0.1em", color: "var(--amber)" }}>
            STREAMING MOCK VIDEO REPLAY · LIVE
          </span>
        </div>
      )}

      {/* Controls */}
      <div className="video-player-controls">
        <div className="video-player-timeline">
          <div
            className="video-player-timeline-progress"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="video-player-control-row">
          <span className="video-player-title">▢ DEMO: {title}</span>
          <span className="video-player-time">
            {isPlaying ? elapsedTime : "00:00"} / {duration}
          </span>
        </div>
      </div>
    </div>
  );
}
