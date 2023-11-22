import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  ButtonBase,
} from '@mui/material';

import { Product } from '@/types/productType';
import { truncateParagraph } from '@/utils/helper';
import { observer } from 'mobx-react-lite';
import { useMst } from '@/stores/Root';

interface IProductProps {
  readonly product: Product;
}

const ProductCard = observer(({ product }: IProductProps) => {
  const { id, title, image, price, description } = product;
  const { cart } = useMst();

  const handleAddToCart = () => {
    cart.addToCart({
      id,
      title,
      image,
      price,
      quantity: 1,
    });
  };

  return (
    <ButtonBase onClick={handleAddToCart}>
      <Card sx={{ maxWidth: 345, paddingTop: '15px', cursor: 'pointer' }}>
        <CardMedia
          component='image'
          sx={{ width: '100%', height: '200px', backgroundSize: 'contain' }}
          image={image}
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {truncateParagraph(title, 50)}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {truncateParagraph(description, 120)}
          </Typography>
          <Typography mt={2} variant='h5' color='text.primary'>
            $ {price}
          </Typography>
        </CardContent>
      </Card>
    </ButtonBase>
  );
});

export default ProductCard;
