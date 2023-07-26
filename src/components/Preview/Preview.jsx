import React from 'react';
import PropTypes from 'prop-types';
import {
  Layers,
  LayersContainer,
  Layer1,
  Layer2,
  Layer3,
  Layer4,
  Layer5,
  Layer6,
  Layer7,
  Layer8,
  Layer9,
  Layer10,
  HeroContent,
  HeroContentSpan,
  HeroContentP,
  ButtonStart,
} from './Preview.styled';
import RainCanvas from '../RainCanvas/RainCanvas';

export const Preview = ({ startDiscover }) => {
  document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
      style: `
            --move-x: ${(e.clientX - window.innerWidth / 2) * -0.005}deg;
            --move-y: ${(e.clientY - window.innerHeight / 2) * 0.01}deg;
            `,
    });
  });

  return (
    <>
      <Layers>
        <LayersContainer>
          <Layer1 />
          <Layer2 />
          <Layer3 />
          <Layer4 />
          <Layer5 />
          <Layer6 />
          <Layer7>
            <HeroContent>
              <h1>
                Find Your Visual Inspiration
                <HeroContentSpan>Pixabay, Your Creative Oasis!</HeroContentSpan>
              </h1>
              <HeroContentP>
                Unlock Your Imagination with Pixabay and GoIT
              </HeroContentP>
              <ButtonStart onClick={startDiscover}>
                Start Discovering
              </ButtonStart>
            </HeroContent>
          </Layer7>
          <Layer8>
            <RainCanvas />
          </Layer8>
          <Layer9 />
          <Layer10 />
        </LayersContainer>
      </Layers>
    </>
  );
};

Preview.propTypes = {
  startDiscover: PropTypes.func.isRequired,
};
