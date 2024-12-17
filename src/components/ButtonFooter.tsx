// src/components/ButtonFooter.tsx
import {FaEdit, FaRegSave, FaTrash, FaUndo} from 'react-icons/fa'
import {MouseEvent} from 'react'

export type ButtonFooterProps = {
  label: 'Cancel' | 'Save' | 'Edit' | 'Delete'
  IconClass: typeof FaUndo | typeof FaRegSave | typeof FaEdit | typeof FaTrash
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function ButtonFooter({
  label,
  IconClass,
  onClick,
}: ButtonFooterProps) {
  return (
    <button
      onClick={onClick}
      data-cy={`${label.toLowerCase()}-button`}
      aria-label={label}
    >
      <IconClass />
      &nbsp;
      <span>{label}</span>
    </button>
  )
}
