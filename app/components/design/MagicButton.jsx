import React from 'react';

const MagicButton = ({ 
  children = "Credits", 
  icon = null,
  onClick = () => {},
  className = "" 
}) => (
  <>
    <style>{`
      @keyframes floating-points {
        0% {
          transform: translateY(0);
        }
        85% {
          opacity: 0;
        }
        100% {
          transform: translateY(-55px);
          opacity: 0;
        }
      }

      @keyframes dasharray {
        from {
          stroke-dasharray: 0 0 0 0;
        }
        to {
          stroke-dasharray: 68 68 0 0;
        }
      }

      @keyframes filled {
        to {
          fill: white;
        }
      }

      .animated-button {
        cursor: pointer;
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: all 0.25s ease;
        background: radial-gradient(
            65.28% 65.28% at 50% 100%,
            rgba(223, 113, 255, 0.8) 0%,
            rgba(223, 113, 255, 0) 100%
          ),
          linear-gradient(0deg, #7a5af8, #7a5af8);
        border-radius: 1.875rem;
        border: none;
        outline: none;
        padding: 12px 18px;
        height: 48px;
      }

      .animated-button::before,
      .animated-button::after {
        content: "";
        position: absolute;
        transition: all 0.5s ease-in-out;
        z-index: 0;
      }

      .animated-button::before {
        inset: 1px;
        background: linear-gradient(
          177.95deg,
          rgba(255, 255, 255, 0.19) 0%,
          rgba(255, 255, 255, 0) 100%
        );
        border-radius: calc(0.75rem - 1px);
      }

      .animated-button::after {
        inset: 1px;
        background: radial-gradient(
            65.28% 65.28% at 50% 100%,
            rgba(223, 113, 255, 0.8) 0%,
            rgba(223, 113, 255, 0) 100%
          ),
          linear-gradient(0deg, #7a5af8, #7a5af8);
        border-radius: calc(0.75rem - 2px);
      }

      .animated-button:active {
        transform: scale(0.95);
      }

      .fold {
        z-index: 10;
        position: absolute;
        top: 0;
        right: 0;
        height: 1rem;
        width: 1rem;
        display: inline-block;
        transition: all 0.5s ease-in-out;
        background: radial-gradient(
          100% 75% at 55%,
          rgba(223, 113, 255, 0.8) 0%,
          rgba(223, 113, 255, 0) 100%
        );
        box-shadow: 0 0 3px black;
        border-bottom-left-radius: 0.5rem;
        border-top-right-radius: 0.75rem;
      }

      .fold::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 150%;
        height: 150%;
        transform: rotate(45deg) translateX(0%) translateY(-16px);
        background-color: #e8e8e8;
        pointer-events: none;
      }

      .animated-button:hover .fold {
        margin-top: -1rem;
        margin-right: -1rem;
      }

      .inner {
        z-index: 20;
        gap: 6px;
        position: relative;
        width: 100%;
        color: white;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: 500;
        line-height: 1.5;
        transition: color 0.2s ease-in-out;
      }

      .inner svg.icon {
        width: 18px;
        height: 18px;
        transition: fill 0.1s linear;
      }
    `}</style>
    
    <button
      type="button"
      className={`animated-button ${className}`}
      onClick={onClick}
    >
      <span className="fold"></span>
      <span className="inner">
        {icon || (
          <svg
            className="icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          >
            <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37" />
          </svg>
        )}
        {children}
      </span>
    </button>
  </>
);

export default MagicButton