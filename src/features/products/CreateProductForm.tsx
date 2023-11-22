import {
  Select,
  Box,
  Button,
  MenuItem,
  FormControl,
  Typography,
  InputLabel,
  InputAdornment,
  FormHelperText,
  SelectChangeEvent,
} from '@mui/material';
import { mutate } from 'swr';
import { LoadingButton } from '@mui/lab';
import { useFormik } from 'formik';
import { number, object, string } from 'yup';
import { useState, useEffect } from 'react';

import { ProductAPI } from '@/api/product';
import useCategories from '@/features/categories/useCategories';
import { IMAGE_URL_REGEX } from '@/utils/constants';

import FormControlCustom from '@/ui/FormControlCustom';
import { CreateFormType } from '@/types/createFormType';

const validationSchema = object({
  title: string().required('Title is required'),
  price: number().required('Price is required').positive(),
  description: string().required('Description is required'),
  image: string()
    .matches(IMAGE_URL_REGEX, 'Please enter a correct url!')
    .required('Image URL is required'),
});

function CreateProductForm() {
  const [isCreating, setIsCreating] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const { data: categories } = useCategories();

  const formik = useFormik({
    initialValues: {
      title: '',
      price: 0,
      description: '',
      image: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      setIsCreating(true);

      const product = { category: selectedCategory, ...values };
      await ProductAPI.create(product);
      mutate(['product', 'all']);
      setIsCreating(false);
    },
  });

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value);
  };

  useEffect(() => {
    if (categories && categories?.length > 0) {
      setSelectedCategory(categories[0]);
    }
  }, [categories]);

  return (
    <>
      <Typography
        component='h2'
        sx={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          paddingTop: '1.1rem',
          marginBottom: '2rem',
        }}
      >
        Add Product
      </Typography>
      <Box component='form' onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}
        >
          <FormControlCustom<CreateFormType>
            formik={formik}
            isDisable={isCreating}
            title='Title'
            name='title'
            value={formik.values.title}
            isTouched={formik.touched.title}
            error={Boolean(formik.errors.title)}
            errorMessage={formik.errors.title}
          />

          <FormControlCustom<CreateFormType>
            formik={formik}
            isDisable={isCreating}
            title='Price'
            name='price'
            value={formik.values.price}
            isTouched={formik.touched.price}
            error={Boolean(formik.errors.price)}
            errorMessage={formik.errors.price}
            startAdornment={<InputAdornment position='start'>$</InputAdornment>}
          />

          <FormControl>
            <InputLabel id='category'>Category</InputLabel>
            <Select
              disabled={isCreating}
              labelId='category'
              id='category-select'
              value={selectedCategory}
              label='Category'
              onChange={handleCategoryChange}
            >
              {categories?.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText></FormHelperText>
          </FormControl>

          <Box sx={{ gridColumn: '1/-1' }}>
            <FormControlCustom<CreateFormType>
              formik={formik}
              isDisable={isCreating}
              title='Image Url'
              name='image'
              value={formik.values.image}
              isTouched={formik.touched.image}
              error={Boolean(formik.errors.image)}
              errorMessage={formik.errors.image}
            />
          </Box>

          <Box sx={{ gridColumn: '1/-1' }}>
            <FormControlCustom<CreateFormType>
              formik={formik}
              isDisable={isCreating}
              title='Description'
              name='description'
              value={formik.values.description}
              isTouched={formik.touched.description}
              error={Boolean(formik.errors.description)}
              errorMessage={formik.errors.description}
              multiline={true}
              rows={4}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '1rem',
          }}
        >
          {isCreating ? (
            <LoadingButton loading variant='contained'>
              Submit
            </LoadingButton>
          ) : (
            <Button variant='contained' type='submit'>
              Save
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
}

export default CreateProductForm;
