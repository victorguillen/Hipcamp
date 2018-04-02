import petsSVG from 'Hipcamp/shared/images/pets.svg';
import showerSVG from 'Hipcamp/shared/images/shower.svg';
import toiletSVG from 'Hipcamp/shared/images/toilet.svg';
import trashSVG from 'Hipcamp/shared/images/trash-main.svg';
import compostSVG from 'Hipcamp/shared/images/trash-compost.svg';
import trashPickSVG from 'Hipcamp/shared/images/trash-pick.svg';
import trashRecycleSVG from 'Hipcamp/shared/images/trash-recycle.svg';
import outdoorShowerSVG from 'Hipcamp/shared/images/outdoor-shower.svg';

export const FEATURES = [
  {
    title: 'Toilet',
    presence: true,
    subfeatures: [],
  },
  {
    title: 'Pets allowed',
    presence: true,
    subfeatures: [],
  },
  {
    title: 'Shower',
    presence: false,
    subfeatures: [
      {
        title: 'Outdoor shower',
        presence: false,
        subfeatures: [],
      },
    ],
  },
  {
    title: 'Trash',
    presence: true,
    subfeatures: [
      {
        title: 'Recycling bin',
        presence: true,
        subfeatures: [],
      },
      {
        title: 'Compost bin',
        presence: true,
        subfeatures: [],
      },
      {
        title: 'Trash bin',
        presence: false,
        subfeatures: [
          {
            title: 'Pack in, pack out',
            presence: true,
            subfeatures: [],
          },
        ],
      },
    ],
  },
];

export const FEATURESSVG = {
  Toilet: toiletSVG,
  'Pets allowed': petsSVG,
  Shower: showerSVG,
  Trash: trashSVG,
  'Outdoor shower': outdoorShowerSVG,
  'Recycling bin': trashRecycleSVG,
  'Compost bin': compostSVG,
  'Trash bin': trashPickSVG,
};
