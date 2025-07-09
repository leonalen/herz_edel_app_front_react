import { Button as MUIButton } from '@mui/material';

export const Button = (props : any) => {
  return (
    <MUIButton {...props} className="bg-blue-600 hover:bg-blue-800 text-white rounded-md px-4 py-2" />
  )
}
