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
      <label style={{ display: "block", fontFamily: HIND, fontWeight: 600, color: "#333", marginBottom: 12 }} className="text-base xs:text-lg sm:text-xl md:text-2xl">
        {label} {required && <span style={{ color: "#e23b1f" }}>*</span>}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        type={label.includes("মোবাইল") ? "tel" : label.includes("ইমেইল") ? "email" : "text"}
        style={{ width: "100%", fontFamily: HIND, border: "1px solid #cdd6e0", borderRadius: 8, background: "#fff", marginBottom: 18, outline: "none" }}
        className="px-3 py-3 xs:px-4 xs:py-3 sm:px-4 sm:py-4 text-base xs:text-lg sm:text-lg focus:ring-2 focus:ring-[var(--accent,#f85606)] focus:border-transparent"
      />
    </>
  );
}
