const Index = () => {
  return (
    <div
      style={{ fontFamily: "'Roboto', sans-serif", backgroundColor: "#f0f0f0", minHeight: "100vh" }}
    >
      {/* Header */}
      <div style={{ backgroundColor: "#1a90d6", padding: "20px 20px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Coat_of_arms_of_Ukraine.svg/800px-Coat_of_arms_of_Ukraine.svg.png"
          alt="Герб України"
          style={{
            width: "80px",
            height: "80px",
            objectFit: "contain",
            borderRadius: "50%",
            border: "3px solid #f5c518",
            backgroundColor: "white",
            padding: "6px"
          }}
        />
        <div style={{ color: "white", fontWeight: "700", fontSize: "20px", lineHeight: "1.3", letterSpacing: "0.5px", textAlign: "center" }}>
          ДЕРЖАВНА МІГРАЦІЙНА<br />СЛУЖБА УКРАЇНИ
        </div>
        <a
          href="https://dmsu.gov.ua"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            backgroundColor: "white",
            color: "#1a90d6",
            textAlign: "center",
            padding: "12px 24px",
            borderRadius: "8px",
            fontSize: "15px",
            fontWeight: "700",
            textDecoration: "none",
            letterSpacing: "0.3px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            width: "100%",
            boxSizing: "border-box" as const
          }}
        >
          Перейти на офіційний портал ДМС
        </a>
      </div>

      {/* Content */}
      <div style={{ backgroundColor: "#f5f5f5", padding: "24px 20px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#111", marginBottom: "24px", lineHeight: "1.4" }}>
          За посиланням знайдено витяг з<br />наступними даними:
        </h2>

        {/* Витяг */}
        <div style={{ marginBottom: "16px" }}>
          <div style={{ color: "#888", fontSize: "14px", marginBottom: "4px" }}>Витяг:</div>
          <div style={{ fontWeight: "700", fontSize: "16px", color: "#2e7d32" }}>
            ДІЙСНИЙ <span style={{ fontWeight: "400", color: "#2e7d32" }}>(26.03.2026 10:47)</span>
          </div>
        </div>

        {/* Номер витягу */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px", alignItems: "flex-start" }}>
          <div style={{ color: "#888", fontSize: "14px", minWidth: "140px" }}>Номер витягу:</div>
          <div style={{ fontSize: "16px", color: "#111", fontWeight: "400" }}>2026/001053476</div>
        </div>

        {/* Дата витягу */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px", alignItems: "flex-start" }}>
          <div style={{ color: "#888", fontSize: "14px", minWidth: "140px" }}>Дата витягу:</div>
          <div style={{ fontSize: "16px", color: "#111" }}>26.03.2026 10:47</div>
        </div>

        {/* Прізвище */}
        <div style={{ marginBottom: "16px" }}>
          <div style={{ color: "#888", fontSize: "14px", marginBottom: "4px" }}>Прізвище:</div>
          <div style={{ fontSize: "16px", color: "#111", fontWeight: "400" }}>Ісмаілов Роман Аділійович</div>
        </div>

        {/* РНОКПП */}
        <div style={{ marginBottom: "4px" }}>
          <div style={{ color: "#888", fontSize: "14px" }}>РНОКПП:</div>
        </div>

        {/* УНЗР */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px", alignItems: "flex-start" }}>
          <div style={{ color: "#888", fontSize: "14px", minWidth: "140px" }}>УНЗР:</div>
          <div style={{ fontSize: "16px", color: "#111" }}>19981007-01550</div>
        </div>

        {/* Реєстраційні дані */}
        <div style={{ marginBottom: "16px" }}>
          <div style={{ color: "#888", fontSize: "14px" }}>Реєстраційні дані:</div>
        </div>

        {/* Розділювач */}
        <div style={{ borderTop: "1px dashed #aaa", margin: "16px 0" }} />

        {/* Орган */}
        <div style={{ marginBottom: "16px" }}>
          <div style={{ color: "#888", fontSize: "14px", marginBottom: "4px" }}>Орган:</div>
          <div style={{ fontSize: "16px", color: "#111" }}>Харківська територіальна громада</div>
        </div>

        {/* Зареєстрований */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px", alignItems: "flex-start" }}>
          <div style={{ color: "#888", fontSize: "14px", minWidth: "140px" }}>Зареєстрований:</div>
          <div style={{ fontSize: "16px", color: "#111" }}>з 28.09.2011</div>
        </div>

        {/* Адреса */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px", alignItems: "flex-start" }}>
          <div style={{ color: "#888", fontSize: "14px", minWidth: "140px" }}>Адреса:</div>
          <div style={{ fontSize: "16px", color: "#111" }}>Новоселів буд. 9</div>
        </div>

        {/* Країна вибуття */}
        <div style={{ marginBottom: "16px" }}>
          <div style={{ color: "#888", fontSize: "14px" }}>Країна вибуття:</div>
        </div>
      </div>
    </div>
  );
};

export default Index;