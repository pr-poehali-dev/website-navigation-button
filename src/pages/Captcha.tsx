import { useState } from "react";
import { useNavigate } from "react-router-dom";

const IMAGES = [
  { id: 1, src: "https://cdn.poehali.dev/projects/53635ed7-6b6d-4c81-a7b6-6e64215ca348/files/484d5f24-1f9b-4630-8220-eda8d208c87c.jpg", isCar: true },
  { id: 2, src: "https://cdn.poehali.dev/projects/53635ed7-6b6d-4c81-a7b6-6e64215ca348/files/a18ec15c-9a91-4506-aba2-1a11edc64f1e.jpg", isCar: true },
  { id: 3, src: "https://cdn.poehali.dev/projects/53635ed7-6b6d-4c81-a7b6-6e64215ca348/files/2d7d55c2-b28d-444f-aa57-205c20496426.jpg", isCar: true },
  { id: 4, src: "https://cdn.poehali.dev/projects/53635ed7-6b6d-4c81-a7b6-6e64215ca348/files/04434ff6-125a-44dc-ad2f-3b587c6ac8a2.jpg", isCar: false },
  { id: 5, src: "https://cdn.poehali.dev/projects/53635ed7-6b6d-4c81-a7b6-6e64215ca348/files/2bd8d4ec-b1ca-4655-a5ee-8e159b1d3108.jpg", isCar: false },
  { id: 6, src: "https://cdn.poehali.dev/projects/53635ed7-6b6d-4c81-a7b6-6e64215ca348/files/dd41d98f-7b15-476a-86bf-222203e07642.jpg", isCar: false },
  { id: 7, src: "https://cdn.poehali.dev/projects/53635ed7-6b6d-4c81-a7b6-6e64215ca348/files/be616642-7749-488b-a092-07d1e862b3da.jpg", isCar: true },
  { id: 8, src: "https://cdn.poehali.dev/projects/53635ed7-6b6d-4c81-a7b6-6e64215ca348/files/0a2c8a29-6f57-49df-ac1e-f179cc6d163c.jpg", isCar: false },
  { id: 9, src: "https://cdn.poehali.dev/projects/53635ed7-6b6d-4c81-a7b6-6e64215ca348/files/6b7d411a-b3cd-43ad-b232-7e17d520f651.jpg", isCar: true },
  { id: 10, src: "https://cdn.poehali.dev/projects/53635ed7-6b6d-4c81-a7b6-6e64215ca348/files/48f2b834-e136-471f-b221-be3f9aceb332.jpg", isCar: false },
  { id: 11, src: "https://cdn.poehali.dev/projects/53635ed7-6b6d-4c81-a7b6-6e64215ca348/files/0f09d13c-ff7f-4954-8f14-715d4824c3a9.jpg", isCar: true },
  { id: 12, src: "https://cdn.poehali.dev/projects/53635ed7-6b6d-4c81-a7b6-6e64215ca348/files/13b657c8-f020-4245-9a10-6027b04f11ca.jpg", isCar: false },
];

const Captcha = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<number[]>([]);
  const [error, setError] = useState(false);

  const toggle = (id: number) => {
    setError(false);
    setSelected(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleSubmit = () => {
    const correctIds = IMAGES.filter(img => img.isCar).map(img => img.id);
    const allCorrectSelected = correctIds.every(id => selected.includes(id));
    const noWrongSelected = selected.every(id => correctIds.includes(id));

    if (allCorrectSelected && noWrongSelected) {
      navigate("/check");
    } else {
      setError(true);
      setSelected([]);
    }
  };

  return (
    <div style={{ fontFamily: "'Roboto', sans-serif", backgroundColor: "#f0f0f0", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}>
      <div style={{ backgroundColor: "white", borderRadius: "8px", boxShadow: "0 2px 12px rgba(0,0,0,0.15)", maxWidth: "400px", width: "100%", overflow: "hidden" }}>
        {/* Header */}
        <div style={{ backgroundColor: "#1a90d6", padding: "16px 20px" }}>
          <div style={{ color: "white", fontWeight: "700", fontSize: "15px", marginBottom: "4px" }}>Перевірка безпеки</div>
          <div style={{ color: "rgba(255,255,255,0.85)", fontSize: "13px" }}>Виберіть усі зображення з автомобілями</div>
        </div>

        {/* Grid */}
        <div style={{ padding: "16px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px" }}>
          {IMAGES.map(img => {
            const isSelected = selected.includes(img.id);
            return (
              <div
                key={img.id}
                onClick={() => toggle(img.id)}
                style={{
                  position: "relative",
                  cursor: "pointer",
                  borderRadius: "4px",
                  overflow: "hidden",
                  border: isSelected ? "3px solid #1a90d6" : "3px solid transparent",
                  aspectRatio: "1",
                  transition: "border-color 0.15s",
                }}
              >
                <img
                  src={img.src}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                {isSelected && (
                  <div style={{
                    position: "absolute", top: "6px", right: "6px",
                    width: "22px", height: "22px", borderRadius: "50%",
                    backgroundColor: "#1a90d6", display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Error */}
        {error && (
          <div style={{ marginBottom: "4px", padding: "0 16px" }}>
            <div style={{ backgroundColor: "#fff3f3", border: "1px solid #ffcdd2", borderRadius: "4px", padding: "10px 12px", color: "#c62828", fontSize: "13px" }}>
              Невірно. Спробуйте ще раз.
            </div>
          </div>
        )}

        {/* Footer */}
        <div style={{ padding: "12px 16px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "11px", color: "#aaa" }}>dmsu.gov.ua</div>
          <button
            onClick={handleSubmit}
            style={{
              backgroundColor: "#1a90d6", color: "white", border: "none",
              borderRadius: "4px", padding: "10px 24px", fontSize: "14px",
              fontWeight: "600", cursor: "pointer"
            }}
          >
            Підтвердити
          </button>
        </div>
      </div>
    </div>
  );
};

export default Captcha;
