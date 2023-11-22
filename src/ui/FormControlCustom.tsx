import {
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
} from '@mui/material';
import { FormikProps } from 'formik';
import { ComponentProps, useId } from 'react';

type MUIProp = ComponentProps<typeof OutlinedInput>;

function FormControlCustom<T>(
  props: MUIProp & {
    value: string | number;
    isDisable: boolean;
    isTouched: boolean | undefined;
    errorMessage: string | undefined;
    formik: FormikProps<T>;
  }
) {
  const {
    isDisable,
    title,
    formik,
    name,
    error,
    isTouched,
    value,
    startAdornment,
    errorMessage,
    multiline,
    rows,
  } = props;

  const id = useId();

  return (
    <FormControl sx={{ width: '100%' }}>
      <InputLabel htmlFor={id}>{title}</InputLabel>
      <OutlinedInput
        disabled={isDisable}
        id={id}
        name={name}
        label={title}
        value={value}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={isTouched && Boolean(error)}
        multiline={multiline}
        startAdornment={startAdornment ?? null}
        rows={rows ?? undefined}
      />
      <FormHelperText error>{isTouched && errorMessage}</FormHelperText>
    </FormControl>
  );
}

export default FormControlCustom;
