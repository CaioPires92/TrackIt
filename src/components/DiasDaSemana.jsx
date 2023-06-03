export default function DiasDaSemana({
  dia,
  onClick,
  index,
  diasSelecionados
}) {
  return (
    <button
      className={diasSelecionados.includes(index) ? 'selected' : ''}
      onClick={onClick}
    >
      {dia}
    </button>
  )
}
