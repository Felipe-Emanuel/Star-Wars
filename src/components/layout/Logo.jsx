import React from 'react';
import { styled } from '@stitches/react';
import { violet, blackA } from '@radix-ui/colors';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 45,
  height: 45,
  borderRadius: '100%',
  backgroundColor: blackA.blackA3,
});

const StyledImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: violet.violet11,
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});

export const Avatar = StyledAvatar;
export const AvatarImage = StyledImage;
export const AvatarFallback = StyledFallback;

const Flex = styled('div', { display: 'flex' });

export const Logo = () => (
  <Flex className='flex justify-center pt-[70px] pb-8'>
    <Avatar className='shadow-md hover:animate-pulse z-50'>
      <AvatarImage
        src="https://s2.glbimg.com/coHwdDkMeRVO9T2A_v1EIWLuHTE=/e.glbimg.com/og/ed/f/original/2019/08/27/31618033034_1dcde167ed_k.jpg"
        alt="millennium falcon"
      />
    </Avatar>
  </Flex>
);

