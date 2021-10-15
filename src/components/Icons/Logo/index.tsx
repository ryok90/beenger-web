import { useColorModeValue } from '@chakra-ui/color-mode'
import { AspectRatio, BoxProps } from '@chakra-ui/layout'

export type IconLogoProps = BoxProps

export const IconLogo = (props: IconLogoProps) => (
  <AspectRatio
    w="5em"
    ratio={1}
    color={useColorModeValue('primary.500', 'primary.600')}
    {...props}
    data-testid="icon-logo"
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 132 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M66.06 49.697c-.063 5.497-1.116 13.245-5.644 20.92-7.736 13.109-22.631 20.937-35.845 20.215-6.293-.343-9.903-2.499-10.799-3.06C8.58 84.522 4 78.185 4 70.263c0-7.54 4.148-13.992 9.713-17.472 4.388-2.745 8.755-3.077 10.858-3.095h41.49Z"
        stroke="currentColor"
        strokeWidth="6.786"
        strokeMiterlimit="10"
      />
      <path
        d="M65.733 49.697c.063 5.497 1.116 13.245 5.644 20.92 7.736 13.109 22.631 20.937 35.845 20.215 6.293-.343 9.903-2.499 10.799-3.06 5.193-3.25 9.772-9.587 9.772-17.509 0-7.54-4.148-13.992-9.713-17.472-4.388-2.745-8.755-3.077-10.858-3.095h-41.49ZM40.997 49.697c.344-13.522 11.545-24.46 25.063-24.486 13.53-.024 24.777 10.892 25.154 24.425"
        stroke="currentColor"
        strokeWidth="6.786"
        strokeMiterlimit="10"
      />
      <path
        d="M41.455 87.48c.723 9.184 3.266 16.151 5.218 20.445 1.289 2.83 4.243 8.731 9.887 14.523 3.355 3.445 5.93 6.015 9.501 6.021 3.57.006 6.166-2.568 9.541-6.021 5.294-5.412 8.266-10.972 9.908-14.523 2.017-4.355 4.578-11.183 5.587-20.13M42.706 89.851h47.117M44.954 106.389H86.71M44.395 4.354c1.994-.08 7.629-.038 12.95 3.76 8.315 5.932 8.687 15.908 8.715 17.097"
        stroke="currentColor"
        strokeWidth="6.786"
        strokeMiterlimit="10"
      />
      <path
        d="M66.009 25.897c-.08-1.995-.038-7.63 3.76-12.952C75.702 4.631 85.677 4.26 86.87 4.231"
        stroke="currentColor"
        strokeWidth="6.786"
        strokeMiterlimit="10"
      />
      <path
        d="M44.494 7.708a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8ZM86.867 7.63a3.4 3.4 0 1 0 0-6.799 3.4 3.4 0 0 0 0 6.8Z"
        fill="currentColor"
      />
    </svg>
  </AspectRatio>
)
