import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[10000] transition-transform duration-75 ease-out"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Outer ring */}
      <div
        className="absolute"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "2px solid rgba(168, 200, 255, 0.6)",
          transform: "translate(-50%, -50%)",
        }}
      />
      {/* Inner dot */}
      <div
        className="absolute"
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "rgba(200, 220, 255, 0.9)",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export default CustomCursor;
