type StatCardProps = {
  value: string;
  label: string;
  gradient?: boolean;
};

export default function StatCard({
  value,
  label,
  gradient = true,
}: StatCardProps) {
  return (
    <div className="stat">
      <div className={`num ${gradient ? "gradient-text" : ""}`}>{value}</div>
      <div className="lab">{label}</div>
    </div>
  );
}