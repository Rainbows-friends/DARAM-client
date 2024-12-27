import { useState, useEffect } from "react";
import * as S from "./style";

const Character = ({ src, alt, drag, initialTop, initialLeft, width }) => {
  const remToPx = (rem) =>
    parseFloat(rem) *
    parseFloat(getComputedStyle(document.documentElement).fontSize);

  const initialX =
    typeof initialLeft === "string" && initialLeft.includes("rem")
      ? remToPx(initialLeft)
      : parseFloat(initialLeft) || 0;

  const initialY =
    typeof initialTop === "string" && initialTop.includes("rem")
      ? remToPx(initialTop)
      : parseFloat(initialTop) || 0;

  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: initialX, y: initialY });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // window 이벤트 등록 및 해제
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    // 컴포넌트 언마운트 시 이벤트 해제
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const handleDragStart = (e) => {
    e.preventDefault();
  };

  return (
    <S.Img
      src={src}
      alt={alt}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        cursor: isDragging ? "grabbing" : "grab",
        width: width,
      }}
      onMouseDown={drag ? handleMouseDown : null}
      onDragStart={drag ? handleDragStart : null} // 드래그 이벤트 비활성화
    />
  );
};

export default Character;
