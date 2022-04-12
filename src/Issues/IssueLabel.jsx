import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export const IssueLabel = ({label}) => {
	const { name, color } = label;
	return(
		<LabelWrapper color={color}>
			{name}
		</LabelWrapper>

	);
}

const LabelWrapper = styled.div`
	margin: 0 3px;
	background-color: ${props => `#${props.color}`};
	color: ${props => props.color == 'b60205' ? `#fff` : `#000`};
	padding: 2px 7px;
	border-radius: 10px;
	font-weight: 500;
`



export default IssueLabel;
