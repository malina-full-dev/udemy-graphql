import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient("http://localhost:9000/graphql");

export async function getCompany(companyId) {
  const query = gql`
    query CompanyById($companyId: ID!) {
      company(id: $companyId) {
        description
        id
        name
        jobs {
          id
          date
          title
        }
      }
    }
  `;

  const { company } = await client.request(query, { companyId });
  return company;
}

export async function getJob(jobId) {
  const query = gql`
    query JobById($jobId: ID!) {
      job(id: $jobId) {
        title
        id
        description
        date
        company {
          id
          name
          description
        }
      }
    }
  `;
  const { job } = await client.request(query, { jobId });
  return job;
}

export async function getJobs() {
  const query = gql`
    query {
      jobs {
        id
        date
        title
        company {
          id
          name
        }
      }
    }
  `;
  const { jobs } = await client.request(query);
  return jobs;
}
