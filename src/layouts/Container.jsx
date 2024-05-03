import styled from 'styled-components';

import { breakpoints } from '../utilities/breakpoints';

export const Container = styled.div`
	${breakpoints('max-width', 'px', [
		{ 1440: 980 },
		{ 800: 768 },
		{ 600: 425 },
		{ 450: 320 },
	])};
	margin: 0 auto;
	padding: 0 15px;
	max-width: 980px;
`;

// export const Title = styled.h1`
//   font-size: 5rem;
//   ${breakpoints("font-size", "rem", [
//     { 1200: 4 },
//     { 800: 3 },
//     { 600: 2.4 },
//     { 450: 1.6 }
//   ])};
// `;

// export const Content = styled.section`
//   font-size: 3rem;
//   margin: 60px 0;
//   ${breakpoints("font-size", "rem", [
//     { 1200: 2.4 },
//     { 800: 1.8 },
//     { 600: 1.6 },
//     { 450: 1.2 }
//   ])};
//   ${breakpoints("margin", "", [{ 1200: "40px 0" }, { 600: "20px 0" }])}; // apply units directly to CSS prop values
// `;
