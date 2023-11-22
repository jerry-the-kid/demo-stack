import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface ICartButtonProps {
  readonly onClick: () => void;
  readonly count: number;
}

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    backgroundColor: '#f50057',
  },
}));

export default function CartButton({ onClick, count }: ICartButtonProps) {
  return (
    <IconButton aria-label='cart' size='large' onClick={onClick}>
      <StyledBadge badgeContent={count} color='secondary'>
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
