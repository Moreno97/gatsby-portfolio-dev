import styled from "styled-components";

export const Wrapper = styled.div`
  z-index: 5;
  top: 1.6rem;
  left: 1.8rem;
  display: none;
  cursor: pointer;
  transition: right 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91);
  position: absolute;

  @media (max-width: 960px) {
    display: block;
  }

  ${({ sidebar }) =>
    sidebar &&
    `
			right: 15%;
			top: 1.6rem;
		
			@media (max-width: 960px) {
				right: 35%;
			}
		
			@media (max-width: 600px) {
				right: 66%;
			}
	`}
`;

export const Bar = styled.div`
  width: 1.4rem;
  height: 0.15rem;
  margin-bottom: 0.3rem;
  background-color: #212121;
  transition: transform 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91), opacity 500ms,
    box-shadow 250ms, background-color 500ms;

  @media (max-width: 600px) {
    width: 1.6rem;
  }
`;
