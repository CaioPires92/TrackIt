export default function DiasDaSemana({
  dia,
  onClick,
  index,
  diasSelecionados,
  diasHabito,
  isInNewHabit,
  bloqueia
}) {
  const isSelected = diasSelecionados && diasSelecionados.includes(index)
  const isHabitoDay = diasHabito && diasHabito.includes(index)
  const shouldChangeColor = isSelected && !isInNewHabit

  return (
    <button
      disabled={bloqueia}
      className={`${shouldChangeColor || isHabitoDay ? 'selected' : ''}`}
      onClick={onClick}
    >
      {dia}
    </button>
  )
}
