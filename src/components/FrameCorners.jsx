// os 4 cantinhos de enquadramento do visor. passa a posicao e a cor pelo className
function FrameCorners({ className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`visor-corners pointer-events-none absolute ${className}`}
    />
  );
}

export default FrameCorners;
