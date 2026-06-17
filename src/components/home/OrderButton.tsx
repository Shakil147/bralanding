import { ORANGE_BTN, ORANGE_BTN_CLASS } from "./data";

export default function OrderButton({ style }: { style?: React.CSSProperties }) {
  return (
    <a href="#order" style={{ ...ORANGE_BTN, ...style }} className={ORANGE_BTN_CLASS}>
      অর্ডার করুন
    </a>
  );
}
