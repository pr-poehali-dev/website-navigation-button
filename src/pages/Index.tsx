const Index = () => {
  return (
    <div
      style={{ fontFamily: "'Roboto', sans-serif", backgroundColor: "#f0f0f0", minHeight: "100vh" }}
    >
      {/* Header */}
      <div style={{ backgroundColor: "#1a90d6", padding: "20px", display: "flex", flexDirection: "row", alignItems: "center", gap: "16px" }}>
        <a href="https://dmsu.gov.ua" target="_blank" rel="noopener noreferrer" style={{ display: "block", cursor: "pointer", flexShrink: 0 }}>
          <img
            src="https://dmsu.gov.ua/assets/img/logo.png"
            alt="Логотип ДМС"
            style={{ width: "70px", height: "70px", objectFit: "contain", display: "block" }}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "https://cdn.poehali.dev/projects/53635ed7-6b6d-4c81-a7b6-6e64215ca348/bucket/69a5eb70-1465-45b9-b0ff-b7207a6a4c5b.png";
            }}
          />
        </a>
        <div style={{ color: "white", fontWeight: "700", fontSize: "18px", lineHeight: "1.3", letterSpacing: "0.5px" }}>
          ДЕРЖАВНА МІГРАЦІЙНА<br />СЛУЖБА УКРАЇНИ
        </div>
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