import styled from "styled-components";

export const Wrapper = styled.div`
  a {
    color: #6d6d6d;
    text-decoration: none;
    text-align: center;
    font-family: "Open Sans";
    font-size: 18px;
  }

  ${({ desktop }) =>
    desktop
      ? `
			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 1rem;
					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			padding-left: 1.5rem;
			padding-top: 6rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 3rem;
					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`;
