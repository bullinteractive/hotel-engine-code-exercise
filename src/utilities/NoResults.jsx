import React from "react";

import styled  from 'styled-components'

export const NoResultsComponent = () => {
  return (
    <NoResults>
      <NoResultsLargeP>Sorry but we can't seem to find any repositories that match that criteria.</NoResultsLargeP>
      <NoResultsSmallP>Please revise your search criteria and try again.</NoResultsSmallP>
    </NoResults>
  )
};

const NoResults = styled.div`
  text-align: center;
  padding: 0 20px;
`

const NoResultsLargeP = styled.p`
  font-size: 2.25em;
  font-weight: 800;
  margin-bottom: .25em;
`
const NoResultsSmallP = styled.p`
  font-size: 1.25em;
`