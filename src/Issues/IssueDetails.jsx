import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export const IssueDetails = ({issue}) => {
	const { number, user } = issue;
	return(
		<DetailsWrapper>
			{`#${number} opened before hours by ${user?.login}`}
		</DetailsWrapper>

	);
}

const DetailsWrapper = styled.p`
    color: #57606a;
    display: flex;
    margin: 0 1.8%;
    font-size: small
`



export default IssueDetails;
