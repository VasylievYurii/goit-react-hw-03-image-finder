import styled from '@emotion/styled';
import backClouds from '../../images/01_backclouds.jpg';
import temple from '../../images/02_temple.png';
import fog from '../../images/03_fog.png';
import treesCenter from '../../images/04_centertrees.png';
import treesRight from '../../images/05_right_trees.png';
import treesLeft from '../../images/06_left_trees.png';
import leaf from '../../images/07_leaf.png';
import logo from '../../images/logo.png';

export const Layers = styled.section`
  perspective: 1000px;
  overflow: hidden;
`;

export const LayersContainer = styled.div`
  height: 100vh;
  min-height: 500px;
  transform-style: preserve-3d;
  transform: rotateX(var(--move-y)) rotateY(var(--move-x));
  will-change: transform;
  transition: transform var(--transition);
`;

export const LayerItem = styled.div`
  position: absolute;
  inset: -5vw;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Layer1 = styled(LayerItem)`
  transform: translateZ(-55px) scale(1.06);
  background-image: url(${backClouds});
`;

export const Layer2 = styled(LayerItem)`
  transform: translateZ(20px) scale(0.88);
  background-image: url(${temple});
`;

export const Layer3 = styled(LayerItem)`
  transform: translateZ(120px) scale(0.88);
  background-image: url(${fog});
`;

export const Layer4 = styled(LayerItem)`
  transform: translateZ(160px) scale(1);
  background-image: url(${treesCenter});
`;

export const Layer5 = styled(LayerItem)`
  transform: translateZ(200px) scale(0.88);
  background-image: url(${treesRight});
`;

export const Layer6 = styled(LayerItem)`
  transform: translateZ(220px) scale(0.88);
  background-image: url(${treesLeft});
`;
export const Layer7 = styled(LayerItem)`
  transform: translateZ(300px) scale(0.8);
`;

export const Layer8 = styled(LayerItem)`
  transform: translateZ(340px) scale(0.9);
  pointer-events: none;
`;

export const Layer9 = styled(LayerItem)`
  transform: translateZ(380px) scale(0.7);
  background-image: url(${leaf});
  pointer-events: none;
`;
export const Layer10 = styled(LayerItem)`
  transform: translateZ(250px) scale(0.7);
  background-image: url(${logo});
  pointer-events: none;
`;

export const HeroContent = styled.div`
  font-size: calc(var(--index) * 1.5);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: calc(var(--index) * -0.15);
  line-height: 1.55em;
  margin-top: calc(var(--index) * 5.5);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  color: #fff;
`;

export const HeroContentSpan = styled.span`
  font-size: calc(var(--index) * 2);
  display: block;
`;

export const HeroContentP = styled.p`
  text-transform: none;
  font-family: merriweather-italic-3d;
  letter-spacing: normal;
  font-size: calc(var(--index) * 0.73);
  line-height: 2;
`;

export const ButtonStart = styled.button`
  font-family: Arial;
  font-weight: 600;
  text-transform: uppercase;
  font-size: calc(var(--index) * 0.71);
  letter-spacing: -0.02vw;
  padding: calc(var(--index) * 0.7) calc(var(--index) * 1.25);
  background-color: transparent;
  color: #fff;
  border-radius: 10em;
  border: rgb(255 255 255 / 0.4) 3px solid;
  outline: none;
  cursor: pointer;
  margin-top: calc(var(--index) * 2.5);
`;
