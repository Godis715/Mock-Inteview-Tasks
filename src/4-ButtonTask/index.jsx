import Button from "./Button";

export default function ButtonTask() {
  return (
    <div>
      <h2>#4 Стилизация кнопки</h2>

      <div>
        {['s', 'm', 'l'].map((size) => (
          <div style={{ marginBottom: '16px' }}>
            <Button size={size}>Нажми</Button>
            <span style={{ marginRight: '16px' }} />
            <Button size={size} isDisabled>Нажми</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
