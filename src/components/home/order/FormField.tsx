import { HIND } from "../data";

export default function FormField({
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  required = true,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <>
      <label style={{ display: "block", fontFamily: HIND, fontWeight: 600, fontSize: 20, color: "#333", marginBottom: 8 }}>
        {label} {required && <span style={{ color: "#e23b1f" }}>*</span>}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        style={{ width: "100%", fontFamily: HIND, fontSize: 19, padding: "13px 16px", border: "1px solid #cdd6e0", borderRadius: 8, background: "#fff", marginBottom: 22, outline: "none" }}
      />
    </>
  );
}
