import html2canvas from "html2canvas";
import { Accessorizes } from "../interfaces";

export const handleDownload = async (containerRef: any | null): Promise<void> => {

  if (!containerRef.current) {
    console.error('Div element not found.');
    return;
  }

  try {
    // Use html2canvas to capture the content of the div as an image
    const canvas = await html2canvas(containerRef.current);

    // Convert canvas to data URL
    const dataUrl = canvas.toDataURL('image/png');

    // Create a temporary anchor element to trigger the download
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = 'alpaca.png';

    // Trigger a click on the anchor element to initiate the download
    a.click();
  } catch (error) {
    console.error('Error converting div to image:', error);
  }
};

export const handleRandom = (): Accessorizes => {
  const randomizeAlpaca: Accessorizes = {
    Accessories: accessories[Math.round(Math.random() * (accessories.length - 1))],
    Background: backgrounds[Math.round(Math.random() * (backgrounds.length - 1))],
    Ears: ears[Math.round(Math.random() * (ears.length - 1))],
    Eyes: eyes[Math.round(Math.random() * (eyes.length - 1))],
    Hair: hair[Math.round(Math.random() * (hair.length - 1))],
    Leg: leg[Math.round(Math.random() * (leg.length - 1))],
    Mouth: mouth[Math.round(Math.random() * (mouth.length - 1))],
    Neck: neck[Math.round(Math.random() * (neck.length - 1))],
  }

  return randomizeAlpaca;
}

export const nose = 'nose.png';

export const accessories = [
  'headphone.png',
  'earings.png',
  'flower.png',
  'glasses.png',
];

export const ears = [
  'default.png',
  'tilt-backward.png',
  'tilt-forward.png',
];

export const eyes = [
  'default.png',
  'angry.png',
  'naughty.png',
  'panda.png',
  'smart.png',
  'star.png',
];

export const hair = [
  'default.png',
  'bang.png',
  'curls.png',
  'elegant.png',
  'fancy.png',
  'quiff.png',
  'short.png',
];

export const leg = [
  'default.png',
  'bubble-tea.png',
  'cookie.png',
  'game-console.png',
  'tilt-backward.png',
  'tilt-forward.png',
];

export const mouth = [
  'default.png',
  'astonished.png',
  'eating.png',
  'laugh.png',
  'tongue.png',
];

export const neck = [
  'default.png',
  'bend-backward.png',
  'bend-forward.png',
  'thick.png',
];

export const backgrounds = [
  'blue-50',
  'blue-60',
  'blue-70',
  'dark-blue-30',
  'dark-blue-50',
  'dark-blue-70',
  'green-50',
  'green-60',
  'green-70',
  'grey-40',
  'grey-70',
  'grey-80',
  'red-50',
  'red-60',
  'red-70',
  'yellow-50',
  'yellow-60',
  'yellow-70',
];

export const accessorizeTheAlpacas = [
  'Hair',
  'Ears',
  'Eyes',
  'Mouth',
  'Neck',
  'Leg',
  'Accessories',
  'Background',
];

export const displayCurrentAccessorizeStyle = (accessorize: string): string[] | [] => {
  switch (accessorize) {
    case 'Hair':
      return hair;
    case 'Ears':
      return ears;
    case 'Eyes':
      return eyes;
    case 'Mouth':
      return mouth;
    case 'Neck':
      return neck;
    case 'Leg':
      return leg;
    case 'Accessories':
      return accessories;
    case 'Background':
      return backgrounds;
    default:
      return [];
  }
}