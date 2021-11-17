import React, { useState, useEffect } from "react";
import { getCandidates } from "./services/candidates-service";
import CandidatesList from "./services/candidatesList";

function CandidatesContainer(props) {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await getCandidates();
      const { candidates } = res;
      setCandidates(candidates);
    }
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <CandidatesList candidates={candidates}> </CandidatesList>
    </React.Fragment>
  );
}

export default CandidatesContainer;
