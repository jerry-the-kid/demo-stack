import {
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import useSWRImmutable from 'swr';

import { CategoryAPI } from '@/api/categories';
import { capitalizeFirstLetter } from '@/utils/helper';

interface ICategoryProps {
  readonly selectedCategory: string;
  readonly onSelectCategory: (category: string) => void;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function CategorySelect({
  selectedCategory,
  onSelectCategory,
}: ICategoryProps) {
  const { data } = useSWRImmutable<string[], string>(
    '/products/categories',
    CategoryAPI.all
  );

  const categories = data
    ? ['All', ...data.map((item) => capitalizeFirstLetter(item))]
    : null;

  const handleChange = (event: SelectChangeEvent<typeof selectedCategory>) => {
    const {
      target: { value },
    } = event;

    onSelectCategory(value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id='demo-multiple-name-label'>Category</InputLabel>
        {categories && (
          <Select
            labelId='demo-multiple-name-label'
            id='demo-multiple-name'
            onChange={handleChange}
            value={selectedCategory}
            input={<OutlinedInput label='Category' />}
            MenuProps={MenuProps}
          >
            {categories?.map((category, index) => (
              <MenuItem key={category} value={category} selected={index === 0}>
                {category}
              </MenuItem>
            ))}
          </Select>
        )}
      </FormControl>
    </div>
  );
}

export default CategorySelect;
