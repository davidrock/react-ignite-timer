import { ButtonContainer } from './Button.styles'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning'
}

export default function Button({ variant = 'primary' }: ButtonProps) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}
