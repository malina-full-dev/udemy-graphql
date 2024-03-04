import { getJobs } from "./db/jobs.js";
import { getCompany } from "./db/companies.js";

export const resolvers = {
  Query: {
    job: () => {
      return {
        id: 1,
        title: "The title",
        description: "The description",
      };
    },
    jobs: () => {
      return getJobs();
    },
  },

  Job: {
    date: (job) => toIsoDate(job.createdAt),
    company: (job) => getCompany(job.companyId)
  },
};

function toIsoDate(value) {
  return value.slice(0, "yyyy-mm-dd".length);
}
