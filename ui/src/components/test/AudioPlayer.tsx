import React, { useState, useRef, useEffect } from 'react';
import {
  PlayCircleFilled,
  PauseCircleFilled,
  ForwardFilled,
  BackwardFilled,
} from '@ant-design/icons';
import { ReactComponent as BackwardIcon } from '../../assets/images/15backward.svg';
import { ReactComponent as ForwardIcon } from '../../assets/images/15forward.svg';

interface AudioPlayerProps {
  audioSource: string;
}

export default function AudioPlayer(props: AudioPlayerProps) {
  // states
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [duration, setDuration] = useState('');

  // refs
  const audioRef = useRef<HTMLAudioElement>(new Audio(props.audioSource));
  const intervalRef = useRef<number>();
  const isReady = useRef<boolean>(false);

  // audio control functions
  const onPlayPauseClick = () => {
    setIsPlaying(!isPlaying);
  };

  const onBackwardClick = () => {
    audioRef.current.currentTime = audioRef.current.currentTime - 15;
  };

  const onForwardClick = () => {
    audioRef.current.currentTime = audioRef.current.currentTime + 15;
  };

  const onScrub = (value: number) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = window.setInterval(() => {
      if (audioRef.current.ended) {
        setIsPlaying(false);
        isReady.current = false;
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, 1000);
  };

  // useEffect
  useEffect(() => {
    if (audioRef.current.readyState) {
      isReady.current = true;
    }
  }, [audioRef.current.readyState]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const minutes = Math.floor(audioRef.current.currentTime / 60);
    const seconds = Math.floor(audioRef.current.currentTime - minutes * 60);
    setCurrentTime(
      String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0')
    );
  }, [audioRef.current.currentTime]);

  useEffect(() => {
    const minutes = Math.floor(audioRef.current.duration / 60);
    const seconds = Math.floor(audioRef.current.duration - minutes * 60);
    setDuration(
      String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0')
    );
  }, [audioRef.current.duration]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="w-screen text-center text-md-left sticky bottom-0 py-2 bg-primary text-white">
      <div className="grid-rows-2">
        <div className="flex place-content-center items-center">
          <BackwardFilled
            style={{ color: 'white' }}
            className="text-4xl"
            onClick={onBackwardClick}
          />
          {isPlaying ? (
            <PauseCircleFilled
              style={{ color: 'white' }}
              className="text-3xl px-10"
              onClick={onPlayPauseClick}
            />
          ) : (
            <PlayCircleFilled
              style={{ color: 'white' }}
              className="text-3xl px-10"
              onClick={onPlayPauseClick}
            />
          )}
          <ForwardFilled
            style={{ color: 'white' }}
            className="text-4xl"
            onClick={onForwardClick}
          />
        </div>
        <div className="flex place-content-center items-center">
          {currentTime}
          <input
            type="range"
            value={trackProgress}
            step="1"
            min="0"
            max={
              audioRef.current.duration
                ? audioRef.current.duration
                : `${audioRef.current.duration}`
            }
            className="w-2/4 mx-5"
            onChange={(e) => onScrub(parseInt(e.target.value))}
            onMouseUp={onScrubEnd}
            onKeyUp={onScrubEnd}
          />
          {duration}
        </div>
      </div>
    </div>
  );
}
