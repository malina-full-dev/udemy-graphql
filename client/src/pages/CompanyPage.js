import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getCompany } from "../lib/graphql/queries";
import JobList from "../components/JobList";

function CompanyPage() {
  const { companyId } = useParams();
  const [company, setCom] = useState(null);

  useEffect(() => {
    getCompany(companyId).then(setCom);
  }, [companyId]);

  if (!company) {
    return <div>loading ....</div>;
  }

  return (
    <div>
      <h1 className="title">{company.name}</h1>
      <div className="box">{company.description}</div>
      <h2 className="title is-5">Jobs at {company.name}</h2>
      <JobList jobs={company.jobs}></JobList>
    </div>
  );
}

export default CompanyPage;
