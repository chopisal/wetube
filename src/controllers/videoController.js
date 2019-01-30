import routes from "../routes";

// Home
export const home = async (req, res) => {
  res.render("home", { pageTitle: "Home", videos: [] });
};

// Search
export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  let videos = [];

  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

// Upload
export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = (req, res) => {
  res.render("postUpload", { pageTitle: "postUpload" });
};

// Video Detail
export const videoDetail = (req, res) => {
  res.render("videoDetail", { pageTitle: "videoDetail" });
};

export const getEditVideo = (req, res) => {
  res.render("getEditVideo", { pageTitle: "getEditVideo" });
};

export const deleteVideo = (req, res) => {
  res.render("deleteVideo", { pageTitle: "deleteVideo" });
};
