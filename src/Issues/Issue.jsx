import React from 'react';
import styled from 'styled-components';
import IssueDetails from './IssueDetails';
import IssueLabel from './IssueLabel';

const Issue = ({issue})  => {
    const { id, title, comments } = issue;
    return (
        <MainWrapper>
            <IssueWrapper>
                <svg style={{'margin-right': '3px'}} fill='green' viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path><path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path></svg>
                <TitleWrapper>
                    <a 
                        data-hovercard-url="/facebook/react/issues/24309/hovercard" 
                        href={`https://github/facebook/react/issues/${id}`}>
                    {title}
                    </a>
                </TitleWrapper>
                <LabelWrapper>
                    {issue.labels.map((label)  => {
                        return <IssueLabel label={label}/>
                    })}
                </LabelWrapper>
                { comments && 
                    <CommentsWrapper>
                        <svg height="16" viewBox="0 0 16 16" version="1.1" width="16">
                            <path  d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"></path>
                        </svg>
                        {issue.comments}
                    </CommentsWrapper>
                }
            </IssueWrapper>
            <IssueDetails issue={issue}/>
        </MainWrapper>
    );
}



const IssueWrapper = styled.div`
	display: flex;	
	border-bottom: none;
	padding: 10px;
`
const TitleWrapper = styled.div`
    a {
    color: #24292f !important;
    font-weight: 600;
    text-decoration: none;
    &:hover {
        color : #218bff !important;
    }
    }
`

const LabelWrapper = styled.div`
    display: flex;
    flex-wrap: wrap; 
`
const CommentsWrapper = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;
	&:hover {
		color : #218bff;
		svg {
			color: #218bff
		}
	}
`


const MainWrapper = styled.div`
    border: 1px solid #d0d7de;
    border-bottom: none;
    &:hover {
        background-color: #f5f8fa;
    }
`

export default Issue;