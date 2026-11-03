function MoodIcon({ type }) {
  const paths = {
    festa: (
      <>
        <path d="M10 54 24 22l18 18-32 14Z" fill="#fff" fillOpacity="0.9" />
        <circle cx="46" cy="12" r="3" fill="#fff" />
        <circle cx="54" cy="24" r="2.5" fill="#fff" />
        <circle cx="38" cy="8" r="2" fill="#fff" />
        <path d="M28 20l4-4M34 26l4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
    estudo: (
      <path
        d="M12 16c6-4 14-4 20 0v32c-6-4-14-4-20 0V16ZM52 16c-6-4-14-4-20 0v32c6-4 14-4 20 0V16Z"
        fill="#fff"
        fillOpacity="0.9"
      />
    ),
    viagem: (
      <path
        d="M8 34l48-18-16 20 4 16-10-8-6 8-2-12-12-4 8-6-14 4Z"
        fill="#fff"
        fillOpacity="0.9"
      />
    ),
    encontro: (
      <path
        d="M32 50 12 32c-5-5-5-13 0-18 5-4 12-4 16 2 4-6 11-6 16-2 5 5 5 13 0 18L32 50Z"
        fill="#fff"
        fillOpacity="0.9"
      />
    ),
  };

  return (
    <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none" aria-hidden="true">
      {paths[type]}
    </svg>
  );
}

export default MoodIcon;
