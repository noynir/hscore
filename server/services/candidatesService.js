const axios = require("axios");

const BASE_URL =
  "https://hs-resume-data.herokuapp.com/v3/candidates/all_data_b1f6-acde48001122";

const enrichData = (candidates) => {
  const enrichedList = candidates.map((c) => {
    const { experience } = c;
    const { length } = experience;
    const enrichedExperience = experience.reduce((arr, job, inx) => {
      const startDate = new Date(job.start_date).getTime();
      const nextInx = inx + 1;
      const items = [{ type: "job", ...job }];
      if (nextInx < length) {
        const nextJob = experience[inx + 1];
        const nextEndDate = new Date(nextJob.end_date).getTime();
        const diff = startDate - nextEndDate;
        if (diff > 0) {
          const diffDays = Math.floor(diff / 1000 / 60 / 60 / 24);
          items.push({ type: "gap", diffDays, diffMonths, diffYears });
        }
      }
      return [...arr, ...items];
    }, []);

    return { ...c, experience: enrichedExperience };
  });

  return enrichedList;
};
module.exports.getCandidates = async function () {
  try {
    const res = await axios.get(BASE_URL˜);
    return enrichData(res.data);
  } catch (error) {
    return [];
  }
};
