"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";

const BlurText = ({
  children,
  className = "",
  delay = 0.03,
  once = true,
  animateBy = "letters",
  threshold = 0.05,
  rootMargin = "0px",
  ...props
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold, margin: rootMargin, once });

  // Robust text extractor to handle strings, numbers, and nested elements
  const getTextContent = (node) => {
    if (typeof node === "string" || typeof node === "number") return node.toString();
    if (Array.isArray(node)) return node.map(getTextContent).join("");
    if (node?.props?.children) return getTextContent(node.props.children);
    return "";
  };

  const text = useMemo(() => getTextContent(children), [children]);
  const words = useMemo(() => text.split(" "), [text]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delay,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10, filter: "blur(10px)", scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={`inline-flex flex-wrap whitespace-normal leading-normal ${className}`}
      {...props}
    >
      {words.map((word, wordIndex) => (
        <span key={`word-${wordIndex}`} className="inline-block whitespace-nowrap">
          {animateBy === "letters" ? (
            word.split("").map((char, charIndex) => (
              <motion.span
                key={`char-${charIndex}`}
                variants={itemVariants}
                className="inline-block will-change-[transform,filter,opacity]"
                style={{
                  color: "inherit",
                  background: "inherit",
                  WebkitBackgroundClip: "inherit",
                  WebkitTextFillColor: "inherit",
                }}
              >
                {char}
              </motion.span>
            ))
          ) : (
            <motion.span
              variants={itemVariants}
              className="inline-block will-change-[transform,filter,opacity]"
              style={{
                color: "inherit",
                background: "inherit",
                WebkitBackgroundClip: "inherit",
                WebkitTextFillColor: "inherit",
              }}
            >
              {word}
            </motion.span>
          )}
          {wordIndex < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </motion.span>
  );
};

export default BlurText;
