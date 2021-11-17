import React from "react";

function CandidatesList(props) {
  const { candidates = [] } = props;

  const candidatesElements = candidates.map((candidate) => {
    const candidateName = candidate.contact_info.name.formatted_name;
    const experience = candidate.experience.map((job) => {
      const companyName = job.company_normalized_name;
      const startDate = job.start_date;
      const endDate = job.end_date;
      const title = job.title;
      const key = `${companyName}:${startDate}:${endDate}`;
      return (
        <li key={key}>
          Worked as <b>{title}</b> from {startDate} to {endDate}
        </li>
      );
    });
    return (
      <div key={candidateName}>
        Hello {candidateName}
        <div>
          <ul>{experience}</ul>
        </div>
      </div>
    );
  });

  return <div>{candidatesElements}</div>;
}

export default CandidatesList;
