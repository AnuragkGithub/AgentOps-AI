export default function AgentStep({ name, status }) {
  return (
    <div
      style={{
        background: "#1e293b",
        padding: "15px",
        borderRadius: "10px",
        marginBottom: "10px",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <span>{name}</span>
      <span style={{ color: "#22c55e" }}>
        {status}
      </span>
    </div>
  );
}