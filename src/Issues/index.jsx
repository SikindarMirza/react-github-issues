import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Issue from './Issue';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';



export const ReactIssues = () => {
	const [issues, setIssues] = useState([]);
	const [hasMore, setHasMore] = useState(true);
	const [page, setPage] = useState(1);
	const [hasError, setHasError] = useState(false);
	const loadFunc = () => {
		setPage(page+1);	
		setHasMore(true);
	};
	const fetchIssues = async() => {
		try {
			const response = await axios.get(`https://api.github.com/repos/facebook/react/issues?page=${page}`);
			return response;
		} catch (error) {
			setHasError(true);
		}
	}   
    
	useEffect(async() => {
	const newIssues = await fetchIssues();
	setIssues([...issues, newIssues.data]);
	setHasMore(false)
	},[page])
	return(
		<InfiniteScroll
			pageStart={0}
			// loadMore={loadFunc}
			hasMore={hasMore}
			loader={<div key={0}>Loading ...</div>
		}
		>
			<IssuesWrapper>
				{issues && issues.map((issue) => {
				return <Issue issue={issue}/>
				})}
			</IssuesWrapper>
			
			{hasError && 
				<h1> Error in fetching issues...</h1>
			}
		
		</InfiniteScroll>
		

	);
}

const IssuesWrapper = styled.div`
	margin: 0 15%;
`


export default ReactIssues;
