import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { mockIssues } from './mockData';
import Issue from './Issue';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';



export const ReactIssues = () => {
	const [issues, setIssues] = useState(mockIssues.data);
	const [hasMore, setHasMore] = useState(true);
	const loadFunc = () => {	
		// setHasMore(false);	
		debugger
		// setHasMore(true);
	};
	// const fetchIssues = async() => {
	// 	try {
	// 		const response = await axios.get('https://api.github.com/repos/facebook/react/issues');
	// 		console.log('****',response);
	// 		debugger
	// 		return response;
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// }   
    
	// useEffect(async() => {
	// const issues = await fetchIssues();
	// setIssues(issues.data);
	// })
	return(
		<InfiniteScroll
			pageStart={0}
			loadMore={loadFunc}
			hasMore={hasMore}
			loader={<div className="loader" key={0}>Loading ...</div>
		}
		>
			<IssuesWrapper>
				{issues.map((issue) => {
				return <Issue issue={issue}/>
				})}
			</IssuesWrapper>
		</InfiniteScroll>
		

	);
}

const IssuesWrapper = styled.div`
	margin: 0 15%;
`


export default ReactIssues;
