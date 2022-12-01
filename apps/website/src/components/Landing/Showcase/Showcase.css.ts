import {backgroundColorVar, themeVars} from '@codeimage/ui';
import {darkGrayScale} from '@codeimage/ui/themes/darkTheme';
import {createVar, style} from '@vanilla-extract/css';
import {responsiveStyle} from '~/core/responsive';

const textAlignFlex = createVar();

export const container = style([
  {
    background: darkGrayScale.gray1,
  },
  responsiveStyle({
    mobile: {
      paddingTop: themeVars.spacing[12],
      paddingBottom: themeVars.spacing[12],
    },
    tablet: {
      paddingTop: themeVars.spacing[24],
      paddingBottom: themeVars.spacing[24],
    },
  }),
]);

export const content = style([
  responsiveStyle({
    mobile: {
      paddingTop: themeVars.spacing[0],
    },
    desktop: {
      width: '1280px',
      paddingTop: themeVars.spacing[24],
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }),
]);

export const grid = style([
  responsiveStyle({
    mobile: {
      vars: {
        [textAlignFlex]: 'flex-start',
      },
    },
    tablet: {
      vars: {
        [textAlignFlex]: 'center',
      },
    },
  }),
  {
    display: 'flex',
    alignItems: textAlignFlex,
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '24px',
    marginTop: themeVars.spacing[8],
  },
]);

export const backdrop = style([
  {
    content: '',
    zIndex: -1,
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    background: backgroundColorVar,
    transform: 'translate3d(0px, -50%, 0) scale(.75)',
    filter: 'blur(200px) saturate(500%)',
    opacity: 0,
    transition: 'opacity 0.3s',
    borderRadius: '1.5rem',
    flex: 1,
    overflow: 'hidden',
    height: '100%',
    top: '50%',
    selectors: {
      '[data-in-view=true] &': {
        opacity: 0.5,
      },
    },
  },
]);

export const codeContainerBg = createVar();
export const codeBlockBg = createVar();

export const codeContainer = style({
  borderRadius: themeVars.borderRadius.lg,
  background: codeContainerBg,
  padding: themeVars.spacing[8],
  position: 'relative',
  zIndex: 5,
  isolation: 'isolate',
});

export const codeBlock = style({
  borderRadius: themeVars.borderRadius.lg,
  background: codeBlockBg,
  padding: themeVars.spacing[6],
  fontSize: '13px',
});

export const heading = style(
  responsiveStyle({
    mobile: {
      fontSize: themeVars.fontSize['4xl'],
      textAlign: 'center',
      marginBottom: 0,
      padding: themeVars.spacing[4],
    },
    desktop: {
      fontSize: themeVars.fontSize['6xl'],
    },
  }),
);

export const description = style(
  responsiveStyle({
    mobile: {
      fontSize: themeVars.fontSize['2xl'],
      textAlign: 'center',
      margin: 0,
      marginBottom: themeVars.spacing[8],
    },
    desktop: {
      fontSize: themeVars.fontSize['3xl'],
    },
  }),
);