function Logo() {
  return (
    <a className="brand" href="#top" aria-label="Sparkling Clean home">
      <svg
        className="logo-mark"
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M16 2 19.3 12.7 30 16l-10.7 3.3L16 30l-3.3-10.7L2 16l10.7-3.3L16 2Z" />
      </svg>

      <span>sparkling clean</span>
    </a>
  )
}

export default Logo