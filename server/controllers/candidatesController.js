const candidatesService = require("../services/candidatesService");

module.exports.getCandidates = async (req, res, next) => {
  const { page, pageSize } = req.query;
  const candidates = await candidatesService.getCandidates();

  res.json({ candidates });
};
