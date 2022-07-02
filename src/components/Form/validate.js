import * as yup from 'yup'

export const addSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  creator: yup.string().required('Creator is required'),
  createAt: yup.string().required('CreateAt is required'),
  description: yup.string().required('Description is required'),
})