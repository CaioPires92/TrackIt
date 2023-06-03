export default function DiasDaSemana({
  dia,
  onClick,
  index,
  diasSelecionados,
  diasHabito
}) {
  const isSelected = diasSelecionados && diasSelecionados.includes(index)
  const isHabitoDay = diasHabito && diasHabito.includes(index)

  return (
    <button
      className={`${isSelected || isHabitoDay ? 'selected' : ''}`}
      onClick={onClick}
    >
      {dia}
    </button>
  )
}
